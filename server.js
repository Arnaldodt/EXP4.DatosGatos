var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 

app.use(express.static(__dirname + "/static"));
app.use("/recursos", express.static(__dirname + "/public"));

let gatos_array = [
    {name:"Felix",  Age:"4",  Food:"pastas",  Imagen:"gato1.jpg", dormir:"en la cama, en el sillon"}, 
    {name:"Figaro", Age:"7",  Food:"pescado", Imagen:"gato2.jpg", dormir:"debajo de la mesa, en la alfombra"}, 
    {name:"Gatsby", Age:"3",  Food:"leche",   Imagen:"gato3.jpg", dormir:"en el patio, en la silla"}, 
    {name:"Luigi",  Age:"10", Food:"carne",   Imagen:"gato4.jpg", dormir:"al sol, en el pasto"}, 
    {name:"Rocky",  Age:"2",  Food:"queso",   Imagen:"gato5.jpg", dormir:"en la cocina, en el baño"}, 
];

app.get('/', function(request, response) {
    response.send("<h1>Hello Express</h1>");
})
app.get('/gatos', function(request, response) {
    response.render('gatos', {gatos: gatos_array});
})
app.get('/detalles/:id', function(request, response) {
    let id = request.params.id;

    if (gatos_array[id] === undefined){
         response.send("<h1>Error</h1>");
    } else {
        response.render('detalles', {gato: gatos_array[id]})
    }
})
app.listen(8000, function() {
    console.log("listening on port 8000");
}) 