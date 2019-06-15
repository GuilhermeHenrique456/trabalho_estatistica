var ordemV = 0; // isso inicia ordemV com 0 PS: ordemV foi criado como contador para verificar se o id Qua tinha mudado
var quaV = 0; // isso inicia quaV com 0 PS: quaV foi criado como contador para verificar se o id ms tinha mudado
var Q = 0; // quartil = 0
var K = 0; // quintil = 0
var D = 0; // Desil
var P = 0; // Percentil
var ams = ""; // isso e para verificar qual medida separatriz foi escolhida
var mfi = 0; // isso e para mudar ou não dependendo se for Amostra ou população
var vvq = ""; // vvq se inicia vazio 
var vvk = ""; // vvk se inicia vazio 
var vvd = ""; // vvd se inicia vazio 
var vvp = ""; // vvp se inicia vazio 
var vet = [] ; // isso cria um vetor global 
function descritiva(){
	let vet = []; // isso cria um vetor
	let dados = document.getElementById("dados").value; // isso pega os dados do HTML
	let tipoQ = document.getElementsByName("tipoQ");// isso pega o name do radio que eu quero analisar
	let tipoAP = document.getElementsByName("tipoAP");// isso pega o name do radio que eu quero analisar  
	let medidasSeparatrizes = document.getElementsByName("medidasSeparatrizes"); // isso pega o name do radio que eu quero analisar
	let tipoDeVariavelQ = ""
	let tipoDeVariavelAP = ""
	let tipoDeVariavelMs = ""
	var Vpesquisa = document.getElementById("pesquisa").value
	
	if(dados == ""){ // isso verifica se os dados estão vazio
		alert("dados vazios") // caso estajam da um alert "dados vazios"
	}
else{//caso os dados não estejam vazios 
	for (var i = 0; i < tipoAP.length; i++) {     //isso percore o radio de nome tipoAP
	    if (tipoAP[i].checked) {                  //isso passa por todos os elementos vendo qual esta checado 
	       	tipoDeVariavelAP=(tipoAP[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelAP
	        //console.log("esse é o tipo da variavel AP " + tipoDeVariavelAP) //isso mostra o tipo de variavel no console *Está comentado pois agora a saida ocorre no html*
	        if(tipoDeVariavelAP == "Amostra"){ //verifica se o tipo de variavel é 'Amostra'
	           	mfi = -1;//se for entao mfi recebe -1 
	           AP = "Amostra"
	        }
	        else{ // se nao
	           	mfi = 0; // mfi se mantem em 0
	           	AP = "População"
	        }
	       // console.log("dividir e tirar " + mfi) // mostra o valor do mfi no console *Está comentado pois o usuario não presisa saber desta informação*
	    }
	}
	if(tipoDeVariavelAP == ""){
		alert("escolha um tipo de variavel 'Amostra' ou 'População'")//isso da um alert escolha um tipo de variavel 'Amostra' ou 'População'
	}
	else{ // caso o tipo de variavelAP não esteja vazio 
		for (var i = 0; i < tipoQ.length; i++) {   //isso percore o radio de nome tipoQ
		    if (tipoQ[i].checked) {                //isso passa por todos os elementos vendo qual esta checado 
		       	tipoDeVariavelQ=(tipoQ[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
		        //console.log("esse é o tipo da variavel Q " + tipoDeVariavelQ) //isso mostra o tipo de variavel no console *Está comentado pois o usuario não presisa saber desta informação*
		        vms = tipoDeVariavelQ // isso passa o tipo de medida separatiz para a variaavel vms "valor medida separatiz"
		    }
		}
		if(tipoDeVariavelQ == ""){//isso verifica se o tipo de variavel ja foi escolhido
		   	alert("escolha um tipo de variavel") // caso não da um alert "escolha um tipo de variavel"
		}
		else{ //  // caso o tipo de variavelQ não esteja vazio 
			if(Vpesquisa == ""){
				alert("Digite o nome da variavel de pesquisa")
			}
			else{
				if((tipoDeVariavelQ == "Quantitativa_Discreta")||(tipoDeVariavelQ == "Quantitativa_Continua")){ //se for Quantitativa
					dados = dados.split(";"); // isso separa os dados atraves de "-" 
					for(let i = 0 ; i < dados.length ; i++){ // esse for a para passar não somente os dados mais tambem o length para o vetor
						(vet[i] = Number(dados[i])); // isso adiciona os dados NUMERICOS ja separados e contados ao vetor 
						DP(vet,mfi)
					}
				}
				else{ // caso não seja Quantitativa
						dados = dados.split(";"); // isso separa os dados atraves de "-" 
						for(let i = 0 ; i < dados.length ; i++){ // esse for a para passar não somente os dados mais tambem o length para o vetor
							(vet[i] = (dados[i])); // isso adiciona os dados de TEXTO ja separados e contados ao vetor 
						}
					}										
					//console.log("Seu vetor ficou assim antes de ser ordeado " + vet ); // isso mostra o vetor original no console *Está comentado pois o usuario não presisa saber desta informação*
					//console.log("O nome da sua variavel de pesquisa é " + Vpesquisa) // isso mostra o nome da variavel de pesquisa *Está comentado pois agora a saida ocorre no html*
					ordena(vet) // isso chama a função 'ordena' e passa vet como parametro 
					//console.log("Seu vetor ordena ficou assim "  + vet)//isso mostra o vetor ja ordenado *Está comentado pois agora a saida ocorre no html*
				    if((tipoDeVariavelQ != "Qualitativa_Nominal") && (tipoDeVariavelQ != "Qualitativa_Ordinal")){//isso compara se o tipoDeVariavel não e quali
				    	media(vet) // isso chama a função media e passa o vet como parametro
				    }
				    else if (tipoDeVariavelQ == "Qualitativa_Ordinal"){//se for quali ordinal
				    	ordem()//isso chama a função ordem que mostra o ordem que a pessoa quer
				    }

				    document.getElementById("perguntasV").id = "perguntasI" // isso faz com que as informações suman depois de clicar no botão
				   	saidas(vet,AP,Vpesquisa)
				}
			}
		}
	}
	if(tipoDeVariavelQ =="Quantitativa_Discreta"){
		tabelaDescritiva(vet,Vpesquisa)
	}
	else if(tipoDeVariavelQ =="Quantitativa_Continua"){
		tabelaContinua(vet,Vpesquisa)
	}
	else if(tipoDeVariavelQ =="Qualitativa_Ordinal"){
		tabelaOrdinal(vet,Vpesquisa)
	}
	else{
		tabelaNominal(vet,Vpesquisa)
	}
	moda(vet)
}

function media(vet){ // isso pega o vet de "descritiva" como parametro
	let soma = 0; // soma inicia com 0
	let media = 0; // media inicia com 0 
	let i = 0; // i inicia com 0
	for(i = 0 ; i < vet.length ; i++){ // for para percorer o vetor
		soma = soma + Number(vet[i])	 // isso soma o que se tem na soma mais todos os numeros do vetor 
	}
	media = (soma / vet.length) // isso calcula a media
	if(isNaN(media) == true){ // isso verrifica se tem media pois pode ser que o vetor seja de texto 
		media = ("Não tem media") // caso seja texto media recebe "Não tem media"
	}
	else{ //caso media realmente seja numerica 
		document.getElementById("media").innerHTML = ("A media é " + media)  // isso mostra a media 
	moda(vet)
	}
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

function Qualitativa_Ordinal(){
	ordemV = 1 ; // isso faz com que ordemV receba 1 para sinalizar a mudança do id 'Qua' para "auQ"
	let tipoQ = document.getElementsByName("tipoQ");// isso pega o name do radio que eu quero analisar	
	for (let i = 0; i < tipoQ.length; i++) {    //isso percore o radio de nome tipoQ
	    if (tipoQ[i].checked) {                 //isso passa por todos os elementos vendo qual esta checado 
	       	tipoDeVariavelQ=(tipoQ[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
	    }
	}
	if(tipoDeVariavelQ == "Qualitativa_Ordinal" ){//isso verifica se o tipo selecionado e Quali ordinal
	   	document.getElementById("Qua").id = "auQ" // se sim entao eu mudo o ID do div para aparecer a opção 'ordem'
	   	if(quaV == 1){							  // isso verifica se o id das quant foi mudado de 'ms' para 'sm'
	   	document.getElementById("sm").id = "ms"   //isso garante que as medidas separatrizes vão sumir mesmo se ja tiverem na tela antes 
		quaV = 0; //isso zera o quaV pois ele foi apagado
		}
	}		    
}

function Quantitativa_Discreta(){
	let x = quaV // variavel x apenas para receber quaV
	if(x == 0){  //se x = 0 então 
	quaV = 1 ;   // isso faz com que quaV receba 1 para sinalizar a mudança do id 'ms' para "sm"
	let tipoQ = document.getElementsByName("tipoQ");// isso pega o name do radio que eu quero analisar	
		for (let i = 0; i < tipoQ.length; i++) {    //isso percore o radio de nome tipoQ
	        if (tipoQ[i].checked) {                 //isso passa por todos os elementos vendo qual esta checado 
	        	tipoDeVariavelQ=(tipoQ[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
	        }
	    }
		if(tipoDeVariavelQ == "Quantitativa_Discreta" ){//isso verifica se o tipo selecionado e Quant discreta
			document.getElementById("ms").id = "sm"     //isso mostra as medidas separatrizes
			if(ordemV == 1){					        // isso verifica se o id da ordem  foi mudado de 'Qua' para 'auQ'
	    	document.getElementById("auQ").id = "Qua"   //isso garante que a ordem ira sumir mesmo se ja tiver apareido na tela antes
	    	ordemV = 0 // isso zera o ordemV pois ele foi apagado
	    	}
	    }	
	}
}

function Quantitativa_Continua(){
	let x = quaV // variavel x apenas para receber quaV
	if(x == 0){  //se x = 0 então 
	quaV = 1;    // isso faz com que quaV receba 1 para sinalizar a mudança do id 'ms' para "sm"
	let tipoQ = document.getElementsByName("tipoQ");// isso pega o name do radio que eu quero analisar	
		for (let i = 0; i < tipoQ.length; i++) {    //isso percore o radio de nome tipoQ
	        if (tipoQ[i].checked) {                 //isso passa por todos os elementos vendo qual esta checado 
	        	tipoDeVariavelQ=(tipoQ[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
	        }
	    }
		if(tipoDeVariavelQ == "Quantitativa_Continua" ){//isso verifica se o tipo selecionado e Quant continua
			document.getElementById("ms").id = "sm"  //isso mostra as medidas separatrizes
			if(ordemV == 1){					      // isso verifica se o id da ordem  foi mudado de 'Qua' para 'auQ'
	    	document.getElementById("auQ").id = "Qua" //isso garante que a ordem ira sumir mesmo se ja tiver apareido na tela antes
	    	ordemV = 0  // isso zera o ordemV pois ele foi apagado
	    	}
	    }	
	}
}
function quartil(){
	Q = 1; // isso faz com que Q receba 1 para sinalizar a mudança do id 'quartil' para "litrauq"
	let medidasSeparatrizes = document.getElementsByName("medidasSeparatrizes");// isso pega o name do radio que eu quero analisar	
	for (let i = 0; i < medidasSeparatrizes.length; i++) {    //isso percore o radio de nome medidasSeparatrizes
	    if (medidasSeparatrizes[i].checked) {                 //isso passa por todos os elementos vendo qual esta checado 
	       	tipoDeVariavelQ=(medidasSeparatrizes[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
	    }
 	}
 	if(tipoDeVariavelQ == "quartil"){ 					//isso verifica se o tipo selecionado é quartil
 		ams = tipoDeVariavelQ
 		//console.log("O tipo de medida separatiz foi " + ams) *Está comentado pois o usuario não presisa saber desta informação*
	 	document.getElementById("quartil").id = "litrauq"   //isso mostra o quintil
	 	if(K == 1 ){  										// isso verifica se o id do kintil  foi mudado de 'kintil' para 'litnik'
	 		document.getElementById("litnik").id = "kintil" //isso garante que o kintil ira sumir mesmo se ja tiver apareido na tela antes
	 		K = 0;  // isso zera o K pois ele foi apagado
	 	}
	 	if(D == 1 ){ 											//isso verifiva se o id de decil foi mudado de 'decil' para 'liced'
	 			document.getElementById("liced").id = "decil"   //isso garante que o decil ira sumir mesmo se ja tiver apareido na tela antes
	 			D = 0; //isso zera o D pois ele foi apagado
	 	}
	 	if(P == 1 ){ // isso verifica se o id do porcentil foi mudado de 'porcentil' para litnecrop
 			document.getElementById("litnecrop").id = "porcentil" // isso garante que o porentil ira sumir mesmo se ja tiver aparecido na tela antes
 			P = 0;  //isso zero o P pois ele foi apagado
 		}
 	}
}

function vq(){
	let quartil = document.getElementsByName("quartil");// isso pega o name do radio que eu quero analisar	
	for (let i = 0; i < quartil.length; i++) {    //isso percore o radio de nome quartil
	    if (quartil[i].checked) {                 //isso passa por todos os elementos vendo qual esta checado 
	       	tipoDeVariavelQ=(quartil[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
	       	var vvq = tipoDeVariavelQ // so para mudar o nome 
	       	pms(vvq) // passa o valor da bolinha selecionada como parametro para a função pms'Porcentagem de medidas separatizes"
	    }
 	}
 	console.log("Q"+ vvq)
}

function kintil(){
	K = 1 ;
	let medidasSeparatrizes = document.getElementsByName("medidasSeparatrizes");// isso pega o name do radio que eu quero analisar	
	for (let i = 0; i < medidasSeparatrizes.length; i++) {    //isso percore o radio de nome medidasSeparatrizes
	    if (medidasSeparatrizes[i].checked) {                 //isso passa por todos os elementos vendo qual esta checado 
	       	tipoDeVariavelQ=(medidasSeparatrizes[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
	    }
 	}
 	if(tipoDeVariavelQ == "kintil"){				 //isso verifica se o tipo selecionado é kintil	 		
 		ams = tipoDeVariavelQ
 		console.log("O tipo de medida separatiz foi " + ams)
 		document.getElementById("kintil").id = "litnik"	 // isso mostra o kintil
	 	if(Q == 1 ){								 // isso verifica se o id do quartil  foi mudado de 'quartil' para 'litrauq'
	 		document.getElementById("litrauq").id = "quartil"// isso garante que o quartil ira sumir mesmo se ja tiver aparecido na tela antes
	 		Q = 0;  // isso zera o Q pois ele foi apagado
	 	}
	 	if(D == 1 ){ 											//isso verifiva se o id de decil foi mudado de 'decil' para 'liced'
	 			document.getElementById("liced").id = "decil"   //isso garante que o decil ira sumir mesmo se ja tiver apareido na tela antes
	 			D = 0; //isso zera o D pois ele foi apagado
	 	}
 		if(P == 1 ){ // isso verifica se o id do porcentil foi mudado de 'porcentil' para litnecrop
 			document.getElementById("litnecrop").id = "porcentil" // isso garante que o porentil ira sumir mesmo se ja tiver aparecido na tela antes
 			P = 0;  //isso zero o P pois ele foi apagado
 		}
 	}	
}

function vk(){
	let kintil = document.getElementsByName("kintil");// isso pega o name do radio que eu quero analisar	
	for (let i = 0; i < kintil.length; i++) {    //isso percore o radio de nome kintil
	    if (kintil[i].checked) {                 //isso passa por todos os elementos vendo qual esta checado 
	       	tipoDeVariavelQ=(kintil[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
	       	vvk = tipoDeVariavelQ // so para mudar o nome 
	       	pms(vvk) // passa o valor da bolinha selecionada como parametro para a função pms'Porcentagem de medidas separatizes"
	    }
 	}
 	console.log("K"+ vvk)
}

function decil(){
	D = 1 ;
	let medidasSeparatrizes = document.getElementsByName("medidasSeparatrizes");// isso pega o name do radio que eu quero analisar	
	for (let i = 0; i < medidasSeparatrizes.length; i++) {    //isso percore o radio de nome medidasSeparatrizes
	    if (medidasSeparatrizes[i].checked) {                 //isso passa por todos os elementos vendo qual esta checado 
	       	tipoDeVariavelQ=(medidasSeparatrizes[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
	    }
 	}
 	if(tipoDeVariavelQ == "decil"){				     //isso verifica se o tipo selecionado é decil	 		
 		ams = tipoDeVariavelQ
 		console.log("O tipo de medida separatiz foi " + ams)
 		document.getElementById("decil").id = "liced"	 // isso mostra o decil
	 	if(Q == 1 ){								 // isso verifica se o id do quartil  foi mudado de 'quartil' para 'litrauq'
	 		document.getElementById("litrauq").id = "quartil"// isso garante que o quartil ira sumir mesmo se ja tiver aparecido na tela antes
	 		Q = 0;  // isso zera o Q pois ele foi apagado
	 	}
	 	if(K == 1 ){  										// isso verifica se o id do kintil  foi mudado de 'kintil' para 'litnik'
	 		document.getElementById("litnik").id = "kintil" //isso garante que o kintil ira sumir mesmo se ja tiver aparecido na tela antes
	 		K = 0;  // isso zera o K pois ele foi apagado
	 	}
 		if(P == 1 ){ // isso verifica se o id do porcentil foi mudado de 'porcentil' para litnecrop
 			document.getElementById("litnecrop").id = "porcentil" // isso garante que o porentil ira sumir mesmo se ja tiver aparecido na tela antes
 			P = 0;  //isso zero o P pois ele foi apagado
 		}
 	}	
}

function vd(){
	let decil = document.getElementsByName("decil");// isso pega o name do radio que eu quero analisar	
	for (let i = 0; i < decil.length; i++) {    //isso percore o radio de nome decil
	    if (decil[i].checked) {                 //isso passa por todos os elementos vendo qual esta checado 
	       	tipoDeVariavelQ=(decil[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
	       	vvd = tipoDeVariavelQ // so para mudar o nome 
	       	pms(vvd) // passa o valor da bolinha selecionada como parametro para a função pms'Porcentagem de medidas separatizes"
	    }
 	}
 	console.log("D"+ vvd)
}

function porcentil(){
	P = 1 ;
	let medidasSeparatrizes = document.getElementsByName("medidasSeparatrizes");// isso pega o name do radio que eu quero analisar	
	for (let i = 0; i < medidasSeparatrizes.length; i++) {    //isso percore o radio de nome medidasSeparatrizes
	    if (medidasSeparatrizes[i].checked) {                 //isso passa por todos os elementos vendo qual esta checado 
	       	tipoDeVariavelQ=(medidasSeparatrizes[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
	    }
 	}
 	if(tipoDeVariavelQ == "porcentil"){				     //isso verifica se o tipo selecionado é porcentil	 			 		
 		ams = tipoDeVariavelQ
 		console.log("O tipo de medida separatiz foi " + ams)
 		document.getElementById("porcentil").id = "litnecrop"	 // isso mostra o porcentil
	 	if(Q == 1 ){								         // isso verifica se o id do quartil  foi mudado de 'quartil' para 'litrauq'
	 		document.getElementById("litrauq").id = "quartil"// isso garante que o quartil ira sumir mesmo se ja tiver aparecido na tela antes
	 		Q = 0;  // isso zera o Q pois ele foi apagado
	 	}
	 	if(K == 1 ){  										// isso verifica se o id do kintil  foi mudado de 'kintil' para 'litnik'
	 		document.getElementById("litnik").id = "kintil" //isso garante que o kintil ira sumir mesmo se ja tiver apareido na tela antes
	 		K = 0;  // isso zera o K pois ele foi apagado
	 	}
 		if(D == 1 ){ 										//isso verifiva se o id de decil foi mudado de 'decil' para 'liced'
 			document.getElementById("liced").id = "decil"   //isso garante que o decil ira sumir mesmo se ja tiver apareido na tela antes
 			D = 0;  //isso zera o D pois ele foi apagado
 		}
 	}	
}

function vp(){
	var x ="";
	let porcentil = document.getElementsByName("porcentil");// isso pega o name do radio que eu quero analisar	
	for (let i = 0; i < porcentil.length; i++) {    //isso percore o radio de nome porcentil
	    if (porcentil[i].checked) {                 //isso passa por todos os elementos vendo qual esta checado 
	       	tipoDeVariavelQ=(porcentil[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
	       	vvp = tipoDeVariavelQ // so para mudar o nome 
	       	pms(vvp) // passa o valor da bolinha selecionada como parametro para a função pms'Porcentagem de medidas separatizes"
	    }
 	}
 	console.log("P"+ vvp)

}

function Qualitativa_Nominal(){
			if(quaV == 1 ){    // isso verifica se o id das quant foi mudado de 'ms' para 'sm'
				document.getElementById("sm").id = "ms"  //isso garante que as medidas separatrizes vão sumir mesmo se ja tiverem na tela antes 
			quaV = 0
			}
			if(ordemV == 1 ){  // isso verifica se o id da ordem  foi mudado de 'Qua' para 'auQ'
				document.getElementById("auQ").id = "Qua" //isso garante que a ordem ira sumir mesmo se ja tiver apareido na tela antes
			ordemV = 0
			}	    	

}

function ordem(){
	let ordem = document.getElementById("ordem").value; // isso pega a ordem do HTML
	ordem = ordem.split(";"); // isso separa os dados atraves de "-" 
	console.log("esse é sua ordem " + ordem)//isso imprime a ordem no console

}

function saidas(vet,AP,Vpesquisa){//função para dar as saidas
	document.getElementById("vetorOrdenado").innerHTML = ("Esse e seu vetor ordenado " + vet) // saida vetor ordenado
	document.getElementById("suaOpcao").innerHTML = ("Sua opção foi " + AP ) // mostrar a saida se é amostra ou População 
	document.getElementById("Vpesquisa").innerHTML = ("O nome da sua variavel de pesquisa é " + Vpesquisa)
}

function voltar(link){//essa função é do botão voltar
	window.location.href = link // essa é a função usada para voltar
}



function moda(vet) {
	var saida = "";
	var vetorQuantidade = [];
	var vetorModa = [];
	vet = removerVazios(vet);
	vet.sort();
	vetorQuantidade = agrupaArray(vet);
	vetorQuantidade.sort((a, b) => b[1] - a[1]);
	if (numerosIguais(vetorQuantidade)) {
		saida = 'Não há moda';
	} else {
		vetorModa = defineModa(vetorQuantidade);
		saida = 'A moda é: [' + vetorModa + ']';
    	console.log(vetorQuantidade);
	}
	document.getElementById("moda").innerHTML = saida;
}


function defineModa(vet) {
	var vetor = [];
	for (var i = 0, ant = vet[0][1]; i < vet.length; i++) {
		if (vet[i][1] != ant)
			break;
		vetor.push(vet[i][0]);
	}
	return vetor;
}

function numerosIguais(vet) {
	for (var i = 0; i < vet.length - 1; i++) {
		if (vet[i][1] !== vet[i+1][1]) {
			return false;
		}
	}
	return true;
}

function removerVazios(vet) {
	var resultado = vet.filter(function(elem) {
		return elem !== undefined && elem !== "";
	});
	return resultado;
}

function agrupaArray(vet) {
	var ocorrencias = 1;
	var valores = [];
	if (vet.length === 0)
		return null;
	if (vet.length === 1)
		return [vet];
	for (var i = 0; i < vet.length; i++) {
		for (var t = i+1; t < vet.length; t++)
			if (vet[i] == vet[t]) {
				ocorrencias++;
			}
		if (vet[i] != vet[i-1])
			valores[i] = [vet[i], ocorrencias];
		ocorrencias = 1;
	}
	return removerVazios(valores);

}

function DP(vet,mfi){// vetor e se(amostra entao mfi = -1) se (população entao mfi = -0) ok ?
	let soma = 0; // soma inicia com 0
	let media = 0; // media inicia com 0 
	let i = 0; // i inicia com 0
	let DP = 0 // isso inicialia o Desvio Padrao com 0
	for(i = 0 ; i < vet.length ; i++){ // for para percorer o vetor
		soma = soma + Number(vet[i])	 // isso soma o que se tem na soma mais todos os numeros do vetor 
	}
	media = (soma / vet.length) // isso calcula a media

	
	for(var j = 0 ; j <vet.length ; j++){// for para percorer o vetor
		aux = ((vet[j] - media)**2) // isso pega todos os elementos - a media elevado ao quadrado
		DP = DP + Number(aux)  // isso soma tudo 
	}
	DP = (DP / (vet.length + mfi))
	DP = Math.sqrt(DP) 
	document.getElementById("DesvioPadrao").innerHTML = ("Desvio Padrao  " + DP.toFixed(1))
	CV(vet,DP)
}

function CV(vet,DP){
	let soma = 0; // soma inicia com 0
	let media = 0; // media inicia com 0 
	let i = 0; // i inicia com 0
	let CV = 0 // isso inicialia o Desvio Padrao com 0
	for(i = 0 ; i < vet.length ; i++){ // for para percorer o vetor
		soma = soma + Number(vet[i])	 // isso soma o que se tem na soma mais todos os numeros do vetor 
	}
	media = (soma / vet.length) // isso calcula a media

	CV = ((DP / media)*100)
	document.getElementById("CoeficienteDeVariacao").innerHTML = ("Coeficiente de variação " + CV.toFixed(1))
	
}
function pms(vvq,vvk,vvd,vvp){ // porcentagem medidas separatizes 
	var dados = document.getElementById("dados").value; // isso pega os dados do HTML	
	var pms = 0 // isso inicia pms com 0 
	var casa = "" ; // isso e para contar em qual casa está o numero que eu quero
	var resultado = "" ;// essa e a saida paar o pms
	var saida = "" ; // isso e o que vai para o HTML
		dados = dados.split(";"); // isso separa os dados atraves de "-" 
		for(let i = 0 ; i < dados.length ; i++){ // esse for a para passar não somente os dados mais tambem o length para o vetor
			(vet[i] = Number(dados[i])); // isso adiciona os dados NUMERICOS ja separados e contados ao vetor 
		}
		ordena(vet)
		console.log(vet)
	if(vvq != undefined){ // se vvq for diferente de 'undefined'
		pms = vvq // então pms recebe ele
	}
	if(vvk != undefined){ // se vvk for diferente de 'undefined'
		pms = vvk // então pms recebe ele
	}
	if(vvd != undefined){ // se vvd for diferente de 'undefined'
		pms = vvd // então pms recebe ele
	}
	if(vvp != undefined){ // se vvp for diferente de 'undefined'
		pms = vvp // então pms recebe ele
	}
	casa = ((vet.length / 100) *pms)
	if(casa % 1 != 0){
	casa = Math.trunc(casa)
	}
	console.log(casa)
	saida = ("|" + Number(pms)+"% : "+ vet[casa-1] + " ou + " + "|"  +(100-pms)+"% : "+ vet[casa-1] + " ou - " + "|")
	document.getElementById("porcentagemMedidasSeparatizes").innerHTML = (saida)

	mediana(vet) 
}

function mediana(vet){
	ordena(vet)
	var mediana = ((vet.length/100)*50)
	if(vet.length % 2 == 0){
		//mediana = Math.trunc(mediana)
	saida = ((vet[mediana-1] + vet[mediana]) / 2 )
	alert(saida)
	document.getElementById("mediana").innerHTML = ("A mediana é " + saida)

	}
	else{
		if(mediana % 1 != 0){
			mediana =Math.round(mediana)
		}
			document.getElementById("mediana").innerHTML = ("A mediana é " + vet[mediana-1])
	}

}


function tabelaDescritiva(vet, Vpesquisa) {
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
    document.getElementById("tabelaDescritiva").innerHTML = tabela;
}
function tabelaContinua(vet, Vpesquisa) {
	var min = ;
	var max = ;
	var quantidade =;
    for (var i = 0; i < vet.length; i++) {
        vet[i] = Number(vet[i]);
    }
	var diferenca = (vet[vet.length-1] - vet[0])/(Math.sqrt(vet.length));
	console.log(diferenca);
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
    document.getElementById("tabelaDescritiva").innerHTML = tabela;
}
function tabelaNominal(vet, Vpesquisa) {
    for (var i = 0; i < vet.length; i++) {
        vet[i] = vet[i];
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
    document.getElementById("tabelaDescritiva").innerHTML = tabela;
}
function tabelaOrdinal(vet, Vpesquisa) {
	var diferente1="";
	var diferente2="";
	var aux;
    for (var i = 0; i < vet.length; i++) {
        vet[i] = vet[i];
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
	while(matriz != ordem){
		for(var x = 0; x <matriz.length; x++){
			for(var y = 0;y<ordem.length; y++){
				if(matriz[y]!= ordem[y]){
					if (diferente1 = ""){
						diferente1 = y; 
					}
					else if(diferente2 = ""){
						diferente2 = y;
					}
					
				}
				if((diferente1 != "") && (diferente2 != "")){
					aux = matriz[diferente1];
					matriz[diferente1] = matriz[diferente2];
					matriz[diferente2] = aux;
				}
			}
		}
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
    document.getElementById("tabelaDescritiva").innerHTML = tabela;
}