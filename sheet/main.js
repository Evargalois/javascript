const sheetId = '1g49DRJqMpe55UuRmcZiW9Qqooq_KDadYSFof-rx1PxM';
const apiKey = 'AIzaSyDjy-i2_0a90XbHZXgVoiqzr2NSDLI7dS4';

// Récupérer les données de la feuille de calcul
axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/ecole!A:A?key=${apiKey}`)
  .then(response => {
    const wordList = response.data.values;

    // Afficher les mots dans la liste
    const ulElement = document.getElementById('wordList');
    wordList.forEach(word => {
      const liElement = document.createElement('li');
      liElement.textContent = word;
      ulElement.appendChild(liElement);
    });
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données :', error);
  });

