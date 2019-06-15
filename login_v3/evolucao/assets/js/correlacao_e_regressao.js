var a 
var b 
var scatter = [];
var line = [];
function calcula(){
	var x = document.getElementById("x").value;//pega os valores do X
	if(x != ""){//se x nao for vazio
		x = x.split(";")//x.split para separar os elementos com ;
		var n = x.length//pega o tamanha de x
	}
	var y = document.getElementById("y").value;//pega os valores de y
	if(y != ""){//se y nao for vazio
		y = y.split(";")//x.split para separar os elementos com ;	
		var n = y.length//pega o tamanha de y
	}
	var Sx = 0 // soma de X
	var Sy = 0 // soma de Y
	var xVy = [] //X vezes Y
	var SxVy = 0// soma de X vezes Y
	var xe2 = []// X^2
	var ye2 = []// Y^2
	var Sxe2 = 0// soma de  X^2
	var Sye2 = 0// soma de  Y^2

	for(var i = 0 ; i < n ; i++){ //  um for do tamanha de x ou y .length
		Sx = ( Number(Sx) + Number(x[i]) ) // isso pega a soma de x
		Sy = ( Number(Sy) + Number(y[i]) ) // isso pega a soma de y
		xVy[i] = (Number(x[i]) * Number(y[i]) ) // isso faz x vezes y
		SxVy = (Number(SxVy) + Number(xVy[i]) ) // isso pega a soma de x vezes y
		xe2[i] = (x[i] **2) // isso faz  x^2
		Sxe2 = (Number(Sxe2) + Number(xe2[i]) ) // isso pega a soma de x^2
		ye2[i] = (y[i] **2) // isso faz  y^2
		Sye2 = (Number(Sye2) + Number(ye2[i]) ) // isso pega a soma de y^2

	}
	line.push({ x, y });
	for (var i = 0; i < y.length; i++) {
        scatter.push({ x: x[i], y: y[i] });
    }
	var r =( ( n*SxVy-(Sx)*(Sy) ) / Math.sqrt( (n*Sxe2 - (Sx**2) ) * (n*Sye2 - (Sy**2) ) ) ) // valor de r
	var forca = (r*100).toFixed(0) // valor da força

	//////////verificação de nivel de força COMEÇOo ////////
	if(forca < 30){
		document.getElementById("CoeficienteLinear").innerHTML = ( "Coeficiente Linear = " +  r.toFixed(2))
		alert("Correlação de insexistente a muito fraca " + forca + "%")		
	}
	else if( (forca >= 30) &&(forca <60)){
		document.getElementById("CoeficienteLinear").innerHTML = ("Coeficiente Linear = " + r.toFixed(2))
		alert("Correlação de fraca a média " + forca + "%")
	}
	else if( (forca >= 60) && (forca <= 100)){
		document.getElementById("CoeficienteLinear").innerHTML = ("Coeficiente Linear = " + r.toFixed(2))
		alert("Correlação de média a forte " + forca + "%")
	}
	else{
		document.getElementById("CoeficienteLinear").innerHTML = ("Não foi possível calcular o Coeficiente Linear.") 
	}
	//////////verificação de nivel de força FIM ////////
	var SxDn = (Sx/n).toFixed(2) // somatoria de X dividido por n
	var SyDn = (Sy/n).toFixed(2) // somatoria de Y dividido por n 
	a = ( (n * SxVy - Sx * Sy ) / (n*Sxe2 - (Sx)**2 ) ).toFixed(2)
	b = (SyDn  - (a  * SxDn)).toFixed(2)
	document.getElementById("EquaçãoDaReta").innerHTML = (" Equação da reta : Y = " + a + " X " + " + "  +  b)
	
}
function projetarComX(){
	A = a
	B = b 
	var x = document.getElementById("Px").value
	var saida = ((Number(a)*Number(x) )+Number(b)).toFixed(2)
	document.getElementById("SPx").innerHTML = ("Y = " + saida)
}

function projetarComY(){
	A = a
	B = b 
	var y = document.getElementById("Py").value
	var saida = ((Number(y) - Number(b) ) / Number(a)).toFixed(2)
	document.getElementById("SPy").innerHTML = ("X = " + saida)

}

function voltar(link){
	window.location.href=link
}
function graficocorrela(scatter, line){  
	console.log(scatter)
	console.log(line)
    var ctx = document.getElementById("grafico");
    var mixedChart = new Chart(ctx, {
    type: 'scatter',
    data: {
    datasets: [{
        label: 'scatter',
            data: scatter,
                backgroundColor: "rgba(255,0,0,1)"
            },
        {
        type: 'line',
        label: 'line',
            data: line,
            showLine: true,
                backgroundColor: "rgba(0,0,255,0)",
                pointBorderColor: "rgba(0,0,255,0)",                
                borderColor: "rgba(0,0,255,.5)"                
                },
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        beginAtZero: true
                    }],
                    xAxes: [{
                        beginAtZero: true
                    }]
                }
            }
    });
}
function lerArqCorr() { /// função chama os arquivos 
	var texto;
	var arq = document.getElementById("fileCorr").files[0];
	var reader = new FileReader();
	reader.onload = function (e) {
	  var dependente = document.getElementById("x");
	  var independente = document.getElementById("y");
	  texto = reader.result;
	  texto = texto.split("\n")
	  dependente.value = texto[0];
	  independente.value = texto[1];
	}
	reader.readAsText(arq);
	document.getElementById("labelArqC").innerHTML = arq.name;
  }