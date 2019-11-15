var mail = prompt('Inserisci la tua mail');
var lista_mail = ['mario@gmail.com', 'maria@live.it', 'michele@gmail.com', 'asia@gmail.com', 'marco@gmail.com'];
var testo = "";

for ( var i = 0; i < lista_mail.length; i++ ) {
  testo = lista_mail[i];
  if (testo == mail) {
    console.log('benvenuto');
    i = lista_mail.length;
    var s = true;
    document.getElementById('verifica-mail').innerHTML = 'Benvenuto';
  }
}

if (!s) {
  console.log('non sei in lista');
  document.getElementById('verifica-mail').innerHTML = 'Non sei in lista';
}
