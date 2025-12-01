import express from 'express';
import axios from 'axios';
import crypto from 'crypto';
import session from 'express-session';
import 'dotenv/config';

const app = express();

const porta = 3000;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000/callback';

const tempExp = new Date(Date.now() + 60 * 60 * 1000 );

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(session({
    secret: 'nCVSfcCJZHFnjpqGtTEXzmJuqXxbLR',
    resave: false,
    saveUninitialized: false,
    cookie : {expires : tempExp}
}));

app.get('/', (req, res)=>{
    res.send("faça login com o mal <a href='/login'>Login</a>");
})

app.get('/login', (req, res) => {
    const codigoVerificacao = crypto.randomBytes(96).toString('base64url');
    const estado = crypto.randomBytes(32).toString('hex');

    req.session.codigoVerificacao = codigoVerificacao;
    req.session.estado = estado;
    //console.log(`Estado na rota login ${estado}`);
    //console.log(`code na rota login ${codigoVerificacao}`);


    const AuthUrl =  `https://myanimelist.net/v1/oauth2/authorize?` + new URLSearchParams({
        response_type: 'code',
        client_id : CLIENT_ID,
        state : estado,
        redirect_uri: REDIRECT_URI,
        code_challenge: codigoVerificacao
    });
    res.redirect(AuthUrl)
});

app.get('/callback', async (req, res)=>{
    const {code, state} = req.query;
    if (!code || state !== req.session.estado) return res.send(`Falha ao abter o código : ${code} ou state: ${state}`);

    const codigoVerificacao = req.session.codigoVerificacao;
    if (!codigoVerificacao) return res.redirect('/')

    try{
        const retornoToken = await axios.post('https://myanimelist.net/v1/oauth2/token', new URLSearchParams({
            grant_type: 'authorization_code',
            client_id  :CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code,
            redirect_uri :REDIRECT_URI,
            code_verifier : codigoVerificacao,
            }).toString(),
            {headers : {'Content-Type' : 'application/x-www-form-urlencoded'}
      });

      const {access_token, refresh_token} = retornoToken.data;
      

      req.session.access_token = access_token;
      req.session.refresh_token = refresh_token;
      
      res.redirect('/profile');
    

    }catch(erro){
       console.error('Erro completo:', erro.message);
       res.send(`Erro: ${JSON.stringify(erro.message)}`);

    };
});

app.get('/profile', async (req, res)=> {
    if(!req.session.access_token) return res.send(`Token errado ${access_token}`);
    try{
        const user = await axios.get('https://api.myanimelist.net/v2/users/@me', {
            headers: { Authorization: 'Bearer ' + req.session.access_token }
        });
        res.send(`<h1>Logado como: ${user.data.name}</h1><a href="/">Sair</a> <br> <a href='/minha_lista'>Minha lista<a/>`);


    }catch(erro){
        res.send('Token inválido, faça login com o mal <a href="/login">Login</a>')

    }
});

app.get('/minha_lista', async (req, res) => {
   if(!req.session.access_token) return res.send("Faça login pra acessar a lista <a href='/login'>Login</a>");    
    try {

        const dadosResposta = await axios.get('https://api.myanimelist.net/v2/users/@me/animelist', {
            params : {
                     limit: 300,
                     fields: 'id,title,main_picture,mean,num_episodes,list_status,studios,start_date,status,media_type,synopsis,rank,popularity'
            },
            headers: {Authorization : 'Bearer '+ req.session.access_token},
          });

          const minhaListaData = dadosResposta.data.data;
          console.log(minhaListaData)

        let html = `<h2>Lista de ${req.session.mal_username} (${minhaListaData.length} animes)</h2><ul>`;
      for (const item of minhaListaData) {
        const titulo = item.node.title;
        //const synopsis = item.node.synopsis;
        const status = item.list_status.status;
        const eps = item.list_status.num_episodes_watched;
        html += `<li><b>${titulo}</b> → ${status.replace('_', ' ')} (episódio ${eps} )</li>`;
      }
      html += `</ul><hr><a href="/">← Voltar</a>`;

      res.send(html);
        console.log("passou")

    }catch(err){
        console.log("erro", err.message);
        res.status(500).send('Erro na API ou Client ID inválido<br><pre>' + err.message + '</pre>');

    }
     
})

app.listen(porta, ()=> {
    console.log(`Rodando em http://localhost:${porta}`);
})