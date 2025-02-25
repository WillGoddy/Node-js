const fs = require('fs')

fs.writeFile('welcome.txt','Hello Node',(err) => {
    if (err) throw err
    console.log('Fichier créé et écrit avec succès !');
    
}
)

fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenu du fichier :', data);
});
