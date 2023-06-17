// Événement de soumission du formulaire
document.getElementById('translationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Récupérer les valeurs des champs mot et traduction
  var word = document.getElementById('word').value;
  var translation = document.getElementById('translation').value;

   // Appeler la fonction pour ajouter le mot et sa traduction
   addTranslation(word, translation);
  
   // Réinitialiser les champs du formulaire
   document.getElementById('word').value = '';
   document.getElementById('translation').value = '';
 });
 
// Fonction pour ajouter le mot et sa traduction dans le stockage local
function addTranslation(word, translation) {
  // Vérifier si des traductions existent déjà dans le stockage local
  var translations = localStorage.getItem('translations');
  var translationsObj = translations ? JSON.parse(translations) : {};

  // Ajouter le nouveau mot et sa traduction
  translationsObj[word] = translation;

  // Enregistrer les traductions dans le stockage local
  localStorage.setItem('translations', JSON.stringify(translationsObj));

  // Mettre à jour l'affichage
  updateFileContent(translationsObj);
}

// Mettre à jour l'affichage du contenu du fichier
function updateFileContent(translationsObj) {
  var fileContent = '';
  var sortedWords = Object.keys(translationsObj).sort();

  for (var i = 0; i < sortedWords.length; i++) {
    var word = sortedWords[i];
    fileContent += word + '  :  ' + translationsObj[word] + '\n  -------    ';
  }
  document.getElementById('fileContent').textContent =fileContent;
}

// Charger le contenu du fichier lors du chargement de la page
window.onload = function() {
  var translations = localStorage.getItem('translations');
  var translationsObj = translations ? JSON.parse(translations) : {};
  updateFileContent(translationsObj);
};



