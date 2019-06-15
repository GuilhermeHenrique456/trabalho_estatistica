var vet = [];  // cria um vetor
var c = 0; // Quantidade de classes
var soma = 0
function calcular(){
	var dados = document.getElementById("dados").value;
	dados = dados.split(";")
		for(let i = 0 ; i < dados.length ; i++){ // esse for a para passar não somente os dados mais tambem o length para o vetor
			(vet[i] = Number(dados[i])); // isso adiciona os dados NUMERICOS ja separados e contados ao vetor 			
		}

tabelaContinua(vet)
}

function tabelaContinua(vet){
	var maior = vet[0]; 
	var menor = vet[0]; 
	ordena(vet);
	for(var i = 0; i <= vet.length ; i++){
		if(Number(vet[i]) < Number(menor)){
			menor = vet[i];
		}
		if(Number(vet[i]) > Number(maior)){
			maior = vet[i];
		}
	}

	var at=(maior - menor)

	var k = Math.sqrt(at) 
	k = Math.round(k)
	at = at+1	
var a = "";
var teste = 0
var j = -1
	while(a < 3){
		for(var i = 0 ; i >	 j ; i++){
			teste1 = ((at+i)/(k-1))
			teste2 = ((at+i)/(k))
			teste3 = ((at+i)/(k+1))
			if(teste1 % 1 == 0){
				ic = ((at+i)/(k-1))
				//alert(i)
				i = -2
			}
			else if (teste2 % 1 == 0){
				ic = ((at+i)/(k))
				i = -2
			}
			else if (teste3 % 1 == 0){
				ic = ((at+i)/(k+1))
				i = -2
			}

		}
		a = 3
	}
//alert(ic) 6 
var QDL = 0; // Quantidade de linhas 
var m = 0
var acumulador = vet[0]
	while(acumulador < maior){
		var acumulador =(Number(vet[0])+Number(ic) + ((i++ )*ic))
		m++				
	}
		c = m
		
	

///////////////////////////////////////criando uma matriz preenchida com 1
	var matriz = []
	for(var i = 0 ; i < c ; i++){
		matriz[i] = [] 
		for(var j = 0 ; j <= c ; j ++){
			matriz[i][j] = "1" 
		}
	}


////////////////////////////////////////////preenchendo a matriz com os valores certos
var soma = 0
	for(var i = 0 ; i < c ; i++){
		classe = i
		matriz[i][0] = classe

		if(i == 1){
			var acumulador = vet[0]
			var proximo = (Number(acumulador) + Number(ic))
			matriz[i][1] = acumulador + " |-- " + proximo
			matriz[i][2] = (fi(acumulador ,proximo))
			var vfi = (fi(acumulador ,proximo))
			matriz[i][3] = (((vfi/vet.length)*100).toFixed(2) + "%")
			soma += vfi
			matriz[i][4] = matriz[i][3]
		}

		else{
			var acumulador =(Number(vet[0])+Number(ic) + ((i - 2 )*ic))
			var proximo  =(Number(acumulador) + Number(ic))
			matriz[i][1] = acumulador + " |-- " +proximo
			matriz[i][2] =  (fi(acumulador ,proximo))
			var vfi = (fi(acumulador ,proximo))
			matriz[i][3] = (((vfi/vet.length)*100 ).toFixed(2) + "%")
			soma += vfi
			matriz[i][4] =(((soma/vet.length)*100).toFixed(2) + "%") 
		}		
	}

//////////////////////////////dando um cabeçario a matriz
	matriz[0][0] = "classe"
	matriz[0][1] = "Vpesquisa"
	matriz[0][2] = "fi"
	matriz[0][3] = "fi%"
	matriz[0][4] = "fac"
	matriz[0][5] = "fac%"


///////////////////////////passando a matriz para uma tabela
    var conteudo = "<table border='1px solid black;'><tr>"
    for (var i = 0; i < 5; i++) {
        conteudo = conteudo + "<th>" + matriz[0][i] + "</th>";
    }
    for (var i = 1; i < matriz.length; i++) {
        conteudo = conteudo + "<tr>";
        conteudo = conteudo + "<td>" + matriz[i][0] + "</td>"
        for (var j = 1; j < 5; j++) {
            conteudo = conteudo + "<td>" + matriz[i][j] + "</td>";
        }
        conteudo = conteudo + "</tr>";
    }
    conteudo = conteudo + "</table>";
	document.getElementById("saida").innerHTML = conteudo
}

function fi(acumulador,proximo){
	var dados = document.getElementById("dados").value;
	dados = dados.split(";")
	vet = dados
	vet.sort()
	var resultado = 0;
	for(var i = 0; i < vet.length ; i++){
		if((vet[i] >= acumulador) &&(vet[i] < proximo)){
			resultado++
		}
	}
	return resultado;
}



function ordena(vet){
	//seleção direta
    for (var i = 0; i < vet.length; i++) { //percore o vetor a 1° vez
	    for(var j = i; j < vet.length; j++){ //percore o vetor a 2° vez
	        if(vet[i] > vet[j]){   //compara qual numero é maior e faz as trocas necessarias
	            aux = vet[j];      //aux recebe vet na posição J
	            vet[j] = vet[i];   // vet na posição J recebe vet na posição I 
                vet[i] = aux;      //vet na posição I recebe aux
			}
	    } 
	}
	    return(vet) //retorna vet
}