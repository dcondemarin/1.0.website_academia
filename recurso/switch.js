console.log('carregando switch...');

var mes = 'janeiro';
switch (mes) {
  case 'janeiro':
  case 'fevereiro':
  case 'março':
  case 'abril':
  case 'maio':
  case 'junho':
    document.write('1º semestre <br>');
    break;
  
  case 'julho':
  case 'agosto':
  case 'setembro':
  case 'outubro':
  case 'novembro':
  case 'dezembro':
    document.write('2º semestre <br>');
}
document.write('FIM do Switch');