var vet = [] // cria um vetor global
function inicio(){
  var dados = document.getElementById("dados").value // pega os dados do html
  dados = dados.split(";"); // isso separa os dados atraves de "-" 
  for(let i = 0 ; i < dados.length ; i++){ // esse for a para passar não somente os dados mais tambem o length para o vetor
    (vet[i] = Number(dados[i])); // isso adiciona os dados de TEXTO ja separados e contados ao vetor 
  }
  ordena(vet) //chama a função orndena e passa vet como parametro
  tabela(vet) //chama a função moda e passa vet como parametro
}
function ordena(vet){
    //seleção direta
    for (var i = 0; i < vet.length; i++) { //percorre o vetor a 1° vez
        for(var j = i; j < vet.length; j++){ //percorre o vetor a 2° vez
            if(vet[i] > vet[j]){   //compara qual numero é maior e faz as trocas necessarias
                aux = vet[j];      //aux recebe vet na posição J
                vet[j] = vet[i];   // vet na posição J recebe vet na posição I 
                vet[i] = aux;      //vet na posição I recebe aux
            }
        } 
    }
        return(vet) //retorna vet
}







function tabela(vet, nomeVar) {
    for (var i = 0; i < vet.length; i++) {
        vet[i] = Number(vet[i]);
    }

    var matriz = [];
    matriz[0] = [];
    matriz[0][0] = nomeVar;
    matriz[0][1] = "Quantidade";
    matriz[0][2] = "Fi";
    matriz[0][3] = " Fac ";
    matriz[0][4] = " Fac % ";
    matriz[1] = [];
    matriz[1][0] = vet[0];
    matriz[1][1] = 1;
    var r = 1;
    for (var i = 1; i < vet.length; i++) {
        if (matriz[r][0] == vet[i]) {
            matriz[r][1]++;
        }
        else {
            r++;
            matriz[r] = [];
            matriz[r][0] = vet[i];
            matriz[r][1] = 1;

        }
    }
    total = vet.length;
    for (var i = 1; i < matriz.length; i++) {
        matriz[i][2] = (matriz[i][1] * 100) / total;
    }
    matriz[1][3] = matriz[1][1]
    for (var i = 2; i < matriz.length; i++) {
        matriz[i][3] = matriz[i - 1][3] + matriz[i][1];
    }
    for (var i = 1; i < matriz.length; i++) {
        matriz[i][4] = (matriz[i][3] * 100) / total;
    }
    for (var i = 1; i < matriz.length; i++) {
        matriz[i][2] = (matriz[i][2].toFixed(2));
        matriz[i][2] = matriz[i][2] + "%";
        matriz[i][4] = (matriz[i][4].toFixed(2));
        matriz[i][4] = matriz[i][4] + "%";
    }
    var conteudo = "<table border='1px solid black;'><tr>"
    for (var i = 0; i < 5; i++) {
        conteudo = conteudo + "<th>" + matriz[0][i] + "</th>";
    }
    for (var i = 1; i < matriz.length; i++) {
        conteudo = conteudo + "<tr>";
        conteudo = conteudo + "<td>" + matriz[i][0] + "</td>"
        for (var j = 1; j < 5; j++) {
            conteudo = conteudo + "<td>";
            conteudo = conteudo + matriz[i][j];
            conteudo = conteudo + "</td>";
        }
        conteudo = conteudo + "</tr>";
    }
    conteudo = conteudo + "</table>";
    document.getElementById("saida1").innerHTML = conteudo;
}