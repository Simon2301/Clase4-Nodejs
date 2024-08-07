const express = require('express');
const app = express ();
const port = 4000;

app.listen(port, () => {console.log(`Servidor corriendo en puerto ${port}`)
                        });


app.get('/', (req,res)=> {
    res.send('<div style="background:black; color:white"><h2>Bienvenidos</h2></div>')
})

app.get('/json', (req,res)=> {
    res.json({"id":1,"Prod": "Remera", "Precio": 20000})
})

app.get('/imagen', (req,res)=> {
res.sendFile(__dirname+"/img7.jpg")

})

app.use((req,res)=>{
    res.status(404).send("Esta página no existe")
    
})