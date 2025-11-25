import express from 'express';
import axios from 'axios';
import 'dotenv/config';

const app = express();
const porta = 3000;
const cliente = process.env.CLIENT_ID;

const tokens = {};


app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', async (req, res) => {
    const consulta = req.query.q.trim(); 
    const code = req.query.code;
    
    let tokenAcesso = tokens.access_token;

    try {

        if(!consulta ){
            console.log("parou aqui")
            res.send("Cdê o anime otaku?")
        }
        else{
        const dadosResposta = await axios.get('https://api.myanimelist.net/v2/anime', {
            params : {q : consulta, 
                     limit: 30,
                     fields: 'id,title,main_picture,mean,num_episodes,genres,studios,start_date,status,media_type,synopsis,rank,popularity'
            },
            headers: {'X-MAL-CLIENT-ID' : cliente},
          });

        res.render('index', {
            animes :dadosResposta.data.data,
           busca : consulta 
        })
        console.log("passou");
    };
    }catch(err){
        console.log("erro", err.message);
        res.status(500).send('Erro na API ou Client ID inválido<br><pre>' + err.message + '</pre>');

    }
     
})

app.listen(porta, ()=> {
    console.log("server rodando");
})