const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Endpoint pour recevoir les données du formulaire et les écrire dans un fichier
app.post('/addTranslation', (req, res) => {
  const word = req.body.word;
  const translation = req.body.translation;
  const data = word + ',' + translation + '\n';

  fs.appendFile('translations.txt', data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Une erreur est survenue lors de l\'écriture dans le fichier.');
    } else {
      res.status(200).send('Mot ajouté avec succès.');
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
