var vet = [];
function inicio(){
  var Vpesquisa = document.getElementById("pesquisa").value
  let dados = document.getElementById("dados").value; 
  dados = dados.split(";"); // isso separa os dados atraves de "-" 
          for(let i = 0 ; i < dados.length ; i++){ // esse for a para passar não somente os dados mais tambem o length para o vetor
            (vet[i] = Number(dados[i])); // isso adiciona os dados NUMERICOS ja separados e contados ao vetor 
          }

tabelaContinua(vet, Vpesquisa)
}

function tabelaContinua(vet, Vpesquisa) {
  vet.sort()
    for (var i = 0; i < vet.length; i++) {
        vet[i] = Number(vet[i]);
    }

    var matriz = [];
    matriz[0] = [];
    matriz[0][0] = Vpesquisa;
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
    var tabela =  "<table border='1px solid black;'><tr>"; 
    for (var i = 0; i < 5; i++) {
        tabela = tabela + "<th>" + matriz[0][i] + "</th>";
    }
    for (var i = 1; i < matriz.length; i++) {
        tabela = tabela + "<tr>";
        tabela = tabela + "<td>" + matriz[i][0] + "</td>"
        for (var j = 1; j < 5; j++) {
            tabela = tabela + "<td>";
            tabela = tabela + matriz[i][j];
            tabela = tabela + "</td>";
        }
        tabela = tabela + "</tr>";
    }
    tabela = tabela + "</table>";
    document.getElementById("tabelaContinua").innerHTML = tabela;
}