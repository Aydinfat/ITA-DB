const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.urlencoded({
    extended: true
}));

mongoose.connect('mongodb+srv://aydinfat:logitech@ita.eow1j.mongodb.net/ITA-DB', 
    { useNewUrlParser: true}, 
    { useUnifiedTopology: true});

//Datenschema für die Mongo
const notesSchema = {
    hersteller: String,
    modell: String,
    datenblatt: String,
    ansprechpartner: String,
    einsatzort: String,
    anmerkung: String,
    verantwortlicher: String,
    auflösung: String,
    genauigkeit: String,
    abtastrate: String,
    linearität: String,
    messprinzip: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
}
  
app.use(bodyParser.json())


const Note = mongoose.model('Note', notesSchema);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
    let newNote = new Note({
        hersteller: req.body.hersteller,
        modell: req.body.modell,
        datenblatt: req.body.datenblatt,
        ansprechpartner: req.body.ansprechpartner,
        einsatzort: req.body.einsatzort,
        anmerkung: req.body.anmerkung,
        verantwortlicher: req.body.verantwortlicher,
        auflösung: req.body.auflösung,
        genauigkeit: req.body.genauigkeit,
        abtastrate: req.body.abtastrate,
        linearität: req.body.linearität,
        messprinzip: req.body.messprinzip
    });
    newNote.save();
    res.redirect('/');
});

port = 8080;
app.listen(port, function(){
    console.log('Server läuft auf Port ' + port);
});


