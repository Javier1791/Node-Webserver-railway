require('dotenv').config();
const express = require('express')
var hbs = require('hbs');

const app = express()
const port= process.env.PORT;


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static('public'))

app.get('/', (req, res)=> {
  res.render('hombe',{
      nombre: 'Javier Vargas',
      titulo: 'Aprendiz Node'
  });
})

app.get('/generic',  (req, res)=> {
  res.render('generic',{
    nombre: 'Javier Vargas',
    titulo: 'Aprendiz Node'
});
})

app.get('/elements',  (req, res)=> {
  res.render('elements',{
    nombre: 'Javier Vargas',
    titulo: 'Aprendiz Node'
});
})

app.get('/',  (req, res)=> {
    res.sendFile(__dirname ,'/public/index')
  })

  app.get('*',  (req, res)=> {
    res.sendFile(__dirname ,'/public/404.html')
  })
  
  
  
app.listen(port,()=>{
  console.log(`http://localhost${port}`)
})