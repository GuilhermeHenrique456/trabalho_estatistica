var ordemV = 0; // isso inicia ordemV com 0 PS: ordemV foi criado como contador para verificar se o id Qua tinha mudado console.log
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
var c = 0; // Quantidade de classes
var soma = 0; // soma inicia com 0 
var vvfi = []; // vetor para o valor do valor da FI
var VmediaContinua = 0;
var somaContinua = 0;
var resultadoSomaContinua = 0
var VSM = 0 // valor soma Continua
var vetContinua = [] // vetor feito para pegar as media do Continua
var Vcasa = 0 // isso e para passar a casa como parametro para FIPC
var grafico = null;
var cont = 0;
var vetgrafico = [];
var vety = [];
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
					}
					if(tipoDeVariavelQ == "Quantitativa_Discreta"){
						DPDescritiva(vet,mfi)
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
				    	if(tipoDeVariavelQ == "Quantitativa_Discreta"){ // isso verifica se o tipo é Discreta
					    	mediaDiscreta(vet) // isso chama a função media e passa o vet como parametro
				    	}
				    }
				    document.getElementById("perguntasV").id = "perguntasI" // isso faz com que as informações suman depois de clicar no botão
				   	saidas(vet,AP,Vpesquisa)
				}
			}
		}
	}
	if(tipoDeVariavelQ =="Quantitativa_Discreta"){
		tabelaDescritiva(vet,Vpesquisa);
		desenhaGraficoDisc(vety, vetgrafico, grafico);
	}
	else if(tipoDeVariavelQ == "Quantitativa_Continua"){
		tabelaContinua(vet,Vpesquisa);
		desenhaGraficodisc(vety,vetgrafico,grafico);
		DPContinua()
	}
	else if(tipoDeVariavelQ == "Qualitativa_Nominal"){
		tabelaNominal(vet,Vpesquisa)
		desenhaGraficoQuali(vety,vetgrafico,grafico);
		moda(vet)
	}
	else if(tipoDeVariavelQ == "Qualitativa_Ordinal"){
		tabelaOrdinal(vet,Vpesquisa)
		desenhaGraficoQuali(vety,vetgrafico,grafico);
	}
	document.getElementById("saidas").id = "saidas";
	mediana(vet,tipoDeVariavelQ) 
	
}

function mediaDiscreta(vet){ // isso pega o vet de "descritiva" como parametro
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
 	document.getElementById("valorMedidasSepatatrizes").innerHTML = ("Q"+ vvq)
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
 		//console.log("O tipo de medida separatiz foi " + ams) *Está comentado pois o usuario não presisa saber desta informação*
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
 	document.getElementById("valorMedidasSepatatrizes").innerHTML = ("K"+ vvk)
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
 		//console.log("O tipo de medida separatiz foi " + ams) *Está comentado pois o usuario não presisa saber desta informação*
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
 	document.getElementById("valorMedidasSepatatrizes").innerHTML = ("D"+ vvd)
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
 		//console.log("O tipo de medida separatiz foi " + ams) *Está comentado pois o usuario não presisa saber desta informação*
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
 	document.getElementById("valorMedidasSepatatrizes").innerHTML = ("P"+ vvp)

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


function saidas(vet,AP,Vpesquisa){//função para dar as saidas
	//document.getElementById("vetorOrdenado").innerHTML = ("Esse e seu vetor ordenado " + vet) // saida vetor ordenado
	//document.getElementById("suaOpcao").innerHTML = ("Sua opção foi " + AP ) // mostrar a saida se é amostra ou População 
	//document.getElementById("Vpesquisa").innerHTML = ("O nome da sua variavel de pesquisa é " + Vpesquisa) * o usuario vai ver na tabela
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
    	//console.log(vetorQuantidade);
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

function DPDescritiva(vet,mfi){// vetor e se(amostra entao mfi = -1) se (população entao mfi = -0) ok ?
	let soma = 0; // soma inicia com 0
	let media = 0; // media inicia com 0 
	let i = 0; // i inicia com 0
	let DPDescritiva = 0 // isso inicialia o Desvio Padrao com 0
	for(i = 0 ; i < vet.length ; i++){ // for para percorer o vetor
		soma = soma + Number(vet[i])	 // isso soma o que se tem na soma mais todos os numeros do vetor 
	}
	media = (soma / vet.length) // isso calcula a media

	
	for(var j = 0 ; j <vet.length ; j++){// for para percorer o vetor
		aux = ((vet[j] - media)**2) // isso pega todos os elementos - a media elevado ao quadrado
		DPDescritiva = DPDescritiva + Number(aux)  // isso soma tudo 
	}
	DPDescritiva = (DPDescritiva / (vet.length + mfi))
	DPDescritiva = Math.sqrt(DPDescritiva) 
	document.getElementById("DesvioPadrao").innerHTML = ("Desvio Padrao  " + DPDescritiva.toFixed(2))
	CV(vet,DPDescritiva)
}

function CV(vet,DPDescritiva){
	let soma = 0; // soma inicia com 0
	let media = 0; // media inicia com 0 
	let i = 0; // i inicia com 0
	let CV = 0 // isso inicialia o Desvio Padrao com 0
	for(i = 0 ; i < vet.length ; i++){ // for para percorer o vetor
		soma = soma + Number(vet[i])	 // isso soma o que se tem na soma mais todos os numeros do vetor 
	}
	media = (soma / vet.length) // isso calcula a media

	CV = ((DPDescritiva / media)*100)
	document.getElementById("CoeficienteDeVariacao").innerHTML = ("Coeficiente de variação " + CV.toFixed(1))
	
}
function pms(vvq,vvk,vvd,vvp){ // porcentagem medidas separatizes 		
	var pms = 0 // isso inicia pms com 0 
	var casa = "" ; // isso e para contar em qual casa está o numero que eu quero
	var resultado = "" ;// essa e a saida paar o pms
	var dados = document.getElementById("dados").value; // isso pega os dados do HTML
	var saida = "" ; // isso e o que vai para o HTML
		dados = dados.split(";"); // isso separa os dados atraves de "-" 
		var tipoQ = document.getElementsByName("tipoQ");// isso pega o name do radio que eu quero analisar
		for (var i = 0; i < tipoQ.length; i++) {   //isso percore o radio de nome tipoQ
		    if (tipoQ[i].checked) {                //isso passa por todos os elementos vendo qual esta checado 
		       	tipoDeVariavelQ=(tipoQ[i].value);   //isso atribui o valor checado a variavel tipoDeVariavelQ
		        //console.log("esse é o tipo da variavel Q " + tipoDeVariavelQ) //isso mostra o tipo de variavel no console *Está comentado pois o usuario não presisa saber desta informação*
		        vms = tipoDeVariavelQ // isso passa o tipo de medida separatiz para a variaavel vms "valor medida separatiz"
		    }
		}

	if((tipoDeVariavelQ == "Quantitativa_Discreta")||(tipoDeVariavelQ == "Quantitativa_Continua")){ //se for Quantitativa
		for(let i = 0 ; i < dados.length ; i++){ // esse for a para passar não somente os dados mais tambem o length para o vetor
				(vet[i] = Number(dados[i])); // isso adiciona os dados NUMERICOS ja separados e contados ao vetor 
		}
	}
	else{ // caso não seja Quantitativa
			for(let i = 0 ; i < dados.length ; i++){ // esse for a para passar não somente os dados mais tambem o length para o vetor
					(vet[i] = (dados[i])); // isso adiciona os dados de TEXTO ja separados e contados ao vetor 
			}
		}			


		ordena(vet)
		//console.log(vet)
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
	casa = Math.ceil(casa)
	}
	//console.log(casa)
	saida = ("|" + Number(pms)+"% : "+ vet[casa-1] + " ou - " + "|"  +(100-pms)+"% : "+ vet[casa-1] + " ou + " + "|")
	if(tipoDeVariavelQ == "Quantitativa_Discreta"){
			document.getElementById("porcentagemMedidasSeparatrizes").innerHTML = (saida)
	}
	else if ((tipoDeVariavelQ == "Qualitativa_Nominal") ||(tipoDeVariavelQ == "Qualitativa_Ordinal")){
		document.getElementById("porcentagemMedidasSeparatrizes").innerHTML = ("O resultado da sua medida separatiz é " + vet[casa-1])
	}
	else if (tipoDeVariavelQ == "Quantitativa_Continua"){
		Vcasa =  ((vet.length / 100) *pms)
		//console.log(Vcasa)
		//console.log("casa = " + casa)
		

	}


}



function mediana(vet,tipoDeVariavelQ){
	ordena(vet)
	var mediana = ((vet.length/100)*50)
	if((tipoDeVariavelQ != "Qualitativa_Nominal") && (tipoDeVariavelQ != "Qualitativa_Ordinal")){
		if(tipoDeVariavelQ == "Quantitativa_Discreta"){
			if(vet.length % 2 == 0){
			//mediana = Math.trunc(mediana)
			saida = ((vet[mediana-1] + vet[mediana]) / 2 )
			//alert(saida)
			document.getElementById("mediana").innerHTML = ("A mediana é " + saida)
		}
		else{
			if(mediana % 1 != 0){
				mediana =Math.round(mediana)
			}
			document.getElementById("mediana").innerHTML = ("A mediana é " + vet[mediana-1])
		}
		}
		
	}
	else{
		if(vet.length % 2 == 0){

		}
		else{
			if(mediana % 1 != 0){
				mediana =Math.round(mediana)
			}
			document.getElementById("mediana").innerHTML = ("A mediana é " + vet[mediana-1])
		}
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
        if (i> 0) {
        	vetgrafico[i-1]= matriz[i][1];
            vety[i-1] = matriz[i][0];
        }
        
       
    }
    tabela = tabela + "</table>";
    document.getElementById("tabelaDescritiva").innerHTML = tabela;
}


function tabelaContinua(vet,Vpesquisa){
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

	var k = Math.sqrt(vet.length)
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
//alert(ic) 10
var QDL = 0; // Quantidade de linhas 
var m = 0
var acumulador = vet[0]
	while(acumulador <= maior){
		var acumulador =(Number(vet[0])+Number(ic) + ((i++ )*ic))
		m++
				
	}
c = m

///////////////////////////////////////criando uma matriz preenchida com 1
	var matriz = []
	for(var i = 0 ; i < c ; i++){
		matriz[i] = [] 
		for(var j = 0 ; j < 6 ; j ++){
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
			mediaContinua(acumulador, proximo)
			calculaMediaContinua(VmediaContinua,vfi,i)
			
			vvfi[i] = vfi
			matriz[i][3] = (((vfi/vet.length)*100).toFixed(2) + "%")
			soma += vfi
			matriz[i][4] = vfi
			var jj = matriz[i][4] 
			var vvvfi = matriz[i][4]
			FIPC(jj,i,proximo,acumulador,matriz,vvvfi)
			matriz[i][5] = matriz[i][3]
		}

		else if(i != 0){
			var acumulador =(Number(vet[0])+Number(ic) + ((i - 2 )*ic))
			var proximo  =(Number(acumulador) + Number(ic))
			matriz[i][1] = acumulador + " |-- " +proximo
			matriz[i][2] =  (fi(acumulador ,proximo))
			
			var vfi = (fi(acumulador ,proximo))
			mediaContinua(acumulador, proximo)
			calculaMediaContinua(VmediaContinua,vfi,i)
			
			vvfi[i] = vfi
			matriz[i][3] = (((vfi/vet.length)*100 ).toFixed(2) + "%")
			soma += vfi
			matriz[i][4] =soma
			var jj = matriz[i][4] 
			var vvvfi = matriz[i][4]
			FIPC(jj,i,proximo,acumulador,matriz,vvvfi)
			matriz[i][5] =(((soma/vet.length)*100).toFixed(2) + "%") 
		}		
	}
	document.getElementById("mediaContinua").innerHTML = ("A media é " + (resultadoSomaContinua / vet.length).toFixed(2))
	VSM = ((resultadoSomaContinua / vet.length).toFixed(2))
	//VSM = Math.round(VSM)


			//////////////////////////////////////////////////////////////alert("vfi =" + vvfi)///////////////////////////
//////////////////////////////dando um cabeçario a matriz
	matriz[0][0] = "classe"
	matriz[0][1] = Vpesquisa
	matriz[0][2] = "fi"
	matriz[0][3] = "fi%"
	matriz[0][4] = "fac"
	matriz[0][5] = "fac%"


///////////////////////////passando a matriz para uma tabela
    var conteudo = "<table border='1px solid black;'><tr>"
    for (var i = 0; i < 6; i++) {
        conteudo = conteudo + "<th>" + matriz[0][i] + "</th>";
    }
    for (var i = 1; i < matriz.length; i++) {
        conteudo = conteudo + "<tr>";
        conteudo = conteudo + "<td>" + matriz[i][0] + "</td>"
        for (var j = 1; j < 6; j++) {
            conteudo = conteudo + "<td>" + matriz[i][j] + "</td>";
        }
        conteudo = conteudo + "</tr>";
        if (i> 0) {
        	vetgrafico[i-1]= matriz[i][1];
            vety[i-1] = matriz[i][0];
        }
    }

    conteudo = conteudo + "</table>";
	document.getElementById("tabelaContinua").innerHTML = conteudo

	msContinua(jj,i,proximo,acumulador,matriz,vvvfi)
	
}

function msContinua(jj,i,proximo,acumulador,matriz,vvvfi){

var ms = 0 
cont = 0 
	if(Vcasa < jj){
		if(cont == 0 ){
			classe = i
			cont = 1 ;
	
				if(classe != 1){
					console.log("classe = "  + classe)
					console.log("acumulador = " + acumulador)
					console.log("proximo = " + proximo)
					console.log("facAnterior = " + matriz[i-1][4])
					console.log("facAtual = " + vvvfi)
					//Vcasa = Vcasa.toFixed(2)
					console.log("Vcasa = "+ Vcasa)
					var ms =  (acumulador + (((Vcasa - matriz[i-1][4]) /vvvfi)* (50)) )
				}
				else{
					console.log("classe = "  + classe)
					console.log("acumulador = " + acumulador)
					console.log("proximo = " + proximo)
					//console.log("fiAnterior = " + matriz[i-1][2])
					console.log("facAtual = " + vvvfi)
				//	Vcasa = Vcasa.toFixed(2)
					console.log("Vcasa = "+ Vcasa)
					var ms =  (acumulador + ((Vcasa/vvvfi)* (50)) )
				}
		
			console.log("ms = " + ms)

			//document.getElementById("porcentagemMedidasSeparatrizes").innerHTML = ("O resultado da sua medida separatiz é " + ms)
		}
		
	}
	alert("mediana = " + ms)

}


function tabelaNominal(vet, Vpesquisa) {
 

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
        if (i> 0) {
        	vetgrafico[i-1]= matriz[i][1];
            vety[i-1] = matriz[i][0];
        }
    }
    tabela = tabela + "</table>";
    document.getElementById("tabelaDescritiva").innerHTML = tabela;
}




function tabelaOrdinal(vet, Vpesquisa) {

	ordena(vet)
	var ordem = document.getElementById("ordem").value; // isso pega a ordem do HTML
	ordem = ordem.split(";")
	for(var i = 0 ; i < ordem.length;i++){; // isso separa os dados atraves de "-" 
		ordem[i] = ordem[i]
	}
	var MO = [] // muda ordinal

	for(var i = 0 ; i < ordem.length ; i++){
		for(var j = 0 ; j < vet.length ; j++){
			if (ordem[i] == vet[j]){
				MO.push(vet[j])
			}
		}
	}


    var matriz = [];
    matriz[0] = [];
    matriz[0][0] = Vpesquisa;
    matriz[0][1] = "Quantidade";
    matriz[0][2] = "Fi";
    matriz[0][3] = " Fac ";
    matriz[0][4] = " Fac % ";
    matriz[1] = [];
    matriz[1][0] = MO[0];
    matriz[1][1] = 1;
    var r = 1;
    for (var i = 1; i < vet.length; i++) {
        if (matriz[r][0] == MO[i]) {
            matriz[r][1]++;
        }
        else {
            r++;
            matriz[r] = [];
            matriz[r][0] = MO[i];
            matriz[r][1] = 1;

        }
    }
    total = vet.length;
    for (var i = 1; i < matriz.length; i++) {
    //	alert(ordem[i-1])
    	//matriz[i][0] = ordem[i-1]
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
	//ordinal(matriz, i)

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
        if (i> 0) {
        	vetgrafico[i-1]= matriz[i][1];
            vety[i-1] = matriz[i][0];
        }
    }
    tabela = tabela + "</table>";
	document.getElementById("tabelaDescritiva").innerHTML = tabela;
	
}

function ordinal(matriz,i){
	ordena(vet)
	var ordem = document.getElementById("ordem").value; // isso pega a ordem do HTML
	ordem = ordem.split(";")
	for(var i = 0 ; i < ordem.length;i++){; // isso separa os dados atraves de "-" 
		ordem[i] = ordem[i]
	}
	var MO = [] // muda ordinal

	for(var i = 0 ; i < ordem.length ; i++){
		for(var j = 0 ; j < vet.length ; j++){
			if (ordem[i] == vet[j]){
				MO.push(vet[j])
			}
		}
	}

	/*var contMatriz = (i-1)
	var ordem = document.getElementById("ordem").value; // isso pega a ordem do HTML
	ordem = ordem.split(";")
	for(var i = 0 ; i < ordem.length;i++){; // isso separa os dados atraves de "-" 
		ordem[i] = ordem[i]
	}
	console.log(matriz)
	console.log(i)
	console.log(ordem)
	
var j = 0 
var i = 1
var jm = 0 // j menos
var aux = []
for (var i = 0 ; i < ordem.length ; i++){
	aux[i] =[]
}
/*
aux[1][0] = matriz[1][0]
aux[2][0] = matriz[2][0]
teste = aux[2][0] 

	for(i = 0 ; i < ordem.length ; i++){
		for(j = 1 ; j < ordem.length ; j++){
			if(ordem[i]  != matriz[j][0]){
				alert("entrei")
				alert("ordem = " + ordem[i])
				alert("matiz = " + matriz[j][0])
				
				//while(ordem[i] != matriz[j][0]){
				alert("J = " + j)
				
				
				//}
				alert("sai do while e J = " + j )
					aux[i][0] = matriz[i+1][0]
					matriz[i+1][0] = matriz[j][0]
					matriz[j][0] = aux[i][0]
				
				alert("ja fiz as coisas agr j = " + j )
				
			}
		}
	}

console.log("aux dps " + aux)
console.log("aux.length  dps = " + aux.length)
console.log(matriz)
*/
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

function mediaContinua(acumulador, proximo){
	//alert(acumulador)
	//alert(proximo)
	for(var i = 0 ; i < vet.length ; i++){
		VmediaContinua = ((acumulador + proximo) / 2 )
	return VmediaContinua
	}	
}

function calculaMediaContinua(VmediaContinua,vfi,i){
//	console.log("mediaContinua = "+ VmediaContinua)
	vetContinua[i] = VmediaContinua
	somaContinua =(Number(VmediaContinua) * vfi)	
	resultadoSomaContinua += somaContinua
	return resultadoSomaContinua;	
}

function DPContinua(){
	var saida = 0 
	for(var i = 1 ; i < vetContinua.length ; i++){
		saida += (((   Number(vetContinua[i]) - Number(VSM))**2)*Number(vvfi[i]))
	}
	saida = ((saida)/(vet.length-mfi))
	saida = Math.sqrt(saida)
	saida = saida.toFixed(2)
	document.getElementById("DesvioPadrao").innerHTML = ("Desvio Padrao = " + saida)
	CVContinua(saida)
}

function CVContinua(saida){
	CVC = ((((saida / VSM )*100).toFixed(2)) + "%")
	document.getElementById("CoeficienteDeVariacao").innerHTML = ("Coeficiente De Variacao = " + CVC)
	//console.log(VSM)
	//console.log(CVC)
	moda(vet)
}


function FIPC(jj,i,proximo,acumulador,matriz,vvvfi){ 
	//var jj = matriz[i][4]
	//var proximo = (Number(acumulador) + Number(ic)) 
	//console.log("jj = "+ jj)

	//var acumulador = vet[0]
//	while(acumulador <= maior){
//		var acumulador =(Number(vet[0])+Number(ic) + ((i++ )*ic))


	if(Vcasa < jj){
		if(cont == 0 ){
			classe = i
			cont = 1 ;
	
				if(classe != 1){
					console.log("classe = "  + classe)
					console.log("acumulador = " + acumulador)
					console.log("proximo = " + proximo)
					console.log("facAnterior = " + matriz[i-1][4])
					console.log("facAtual = " + matriz[i][4])
					Vcasa = Vcasa.toFixed(2)
					console.log("Vcasa = "+ Vcasa)
					var ms =  (acumulador + (((Vcasa - matriz[i-1][4]) /matriz[i][4])* (proximo - acumulador)) )
				}
				else{
					console.log("classe = "  + classe)
					console.log("acumulador = " + acumulador)
					console.log("proximo = " + proximo)
					//console.log("fiAnterior = " + matriz[i-1][2])
					console.log("facAtual = " + vvvfi)
					Vcasa = Vcasa.toFixed(2)
					console.log("Vcasa = "+ Vcasa)
					var ms =  (acumulador + ((Vcasa/vvvfi)* (proximo - acumulador)) )
				}
		
			console.log("ms = " + ms)
			document.getElementById("porcentagemMedidasSeparatrizes").innerHTML = ("O resultado da sua medida separatiz é " + ms)
		}
		
	}
	
}
function desenhaGraficoQuali(vety, vetgrafico, grafico){
    var ctx = document.getElementById("grafico").getContext('2d');
    if(grafico != null){
        grafico.destroy();
    }
    grafico = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: vety,
        datasets: [
            {
                label: "fr%",
                data: vetgrafico,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(245, 0, 0, 0.2)',
                    'rgba(0, 122, 245, 0.2)',
                    'rgba(234, 255, 5, 0.2)',
                    'rgba(255, 97, 5, 0.2)',
                    'rgba(5, 255, 138, 0.2)',
                    'rgba(126, 5, 255, 0.2)',
                    'rgba(255, 5, 5, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(245, 0, 0, 1)',
                    'rgba(0, 122, 245, 1)',
                    'rgba(234, 255, 5, 1)',
                    'rgba(255, 97, 5, 1)',
                    'rgba(5, 255, 138, 1)',
                    'rgba(126, 5, 255, 1)',
                    'rgba(255, 5, 5, 1)'
                ],
                borderWidth: 1
            }
        ]
    },
    });
}
function desenhaGraficoDisc(vety, vetgrafico, grafico){
	console.log(vet);
	console.log(vetgrafico);
    var ctx = document.getElementById("grafico").getContext('2d');
    if(grafico != null){
        grafico = [];
        console.log("entrou")
    }
    //pesquisar como definir inicio 0
    grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: vety,
        datasets: [
            {
                label: "fr%",
                data: vetgrafico,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(245, 0, 0, 0.2)',
                    'rgba(0, 122, 245, 0.2)',
                    'rgba(234, 255, 5, 0.2)',
                    'rgba(255, 97, 5, 0.2)',
                    'rgba(5, 255, 138, 0.2)',
                    'rgba(126, 5, 255, 0.2)',
                    'rgba(255, 5, 5, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(245, 0, 0, 1)',
                    'rgba(0, 122, 245, 1)',
                    'rgba(234, 255, 5, 1)',
                    'rgba(255, 97, 5, 1)',
                    'rgba(5, 255, 138, 1)',
                    'rgba(126, 5, 255, 1)',
                    'rgba(255, 5, 5, 1)'
                ],
                borderWidth: 1
            }
        ]
    },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }],
            },
        }
    });
}
