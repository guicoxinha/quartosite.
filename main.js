var imagens = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

var frases = ["As árvores fornecem oxigêno",
  "As árvores fornecem matéria prima",
  "As árvores fornecem frutos",
  "As árvores fornecem sombras"];

var i = 1;

function proximo() {
  document.getElementById("fotos").src = imagens[i];
  document.getElementById("imagem").innerHTML = frases[i];
  i++;

  if(i>3){
    i=0;
  }
}