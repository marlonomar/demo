
/**
 *  aplicacion principal
 */

 //requires del la apliacion======================================================================
const express = require('express');
const hbs = require('hbs');

const app = express();



app.use(express.static(__dirname + '/public'));

app.set('view engine','hbs');

hbs.registerPartials( __dirname + '/views/parciales');

//helpers========================================================================================

hbs.registerHelper('fecha',()=>{
    return new Date().getFullYear()
})

// render ========================================================================================

// datos
let datos = {
    nombre:"Marlon",
    titulo:'DEMO',
    
}

let aboutData = {
    titulo:'space',
    texto:'fotografia cortecia de marlon',
    
    
}

// funciones

app.get('/',(req,res)=>{
    res.render('home',datos);
})

let render = (data,variable)=>{
    app.get(`/${data}`,(req,res)=>{
        res.render(`${data}`,variable);
    })
 }

// llamadas

render('about',aboutData);

// puerto del servidor ===========================================================================

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("abrir site en localhost 3000")
});


