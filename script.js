document.addEventListener("DOMContentLoaded", function () {
		const agora = new Date();

		const dataFormatada = agora.toLocaleDateString('pt-BR');
		const horaFormatada = agora.toLocaleTimeString('pt-BR');

		document.getElementById("dataGeracao").textContent = dataFormatada;
		document.getElementById("horaGeracao").textContent = horaFormatada;
	});
	function calcular() {
		// Seleciona o elemento pelo ID
		const input = document.getElementById('qtda');
		const numeroLote = gerarLote();
		// Obtém o valor atual
		const qtda = parseFloat(input.value); 

		if (isNaN(qtda) || qtda <= 0) {
			alert("Informe uma quantidade válida.");
			return;
		}
		let baseCreme = qtda*16.1/100;
		let aguaDesmineralizada = qtda*69.7/100;
		let nipagin = qtda*0.2/100;
		let propilenoglicol = qtda*4.3/100;
		let oleo = qtda*3.2/100;
		let essencia = qtda*3.2/100;
		let extrato = qtda*3.2/100;
		let ureia = qtda*3.2/100;	
			
		document.getElementById("lote").textContent = "Lote: " + numeroLote;
		document.getElementById("qtda").style.display = "none";
		document.getElementById("cal").style.display = "none";
		document.getElementById("ins").style.display = "block";			
		document.getElementById("texto").textContent = "Ficha Técnica de Produção para "+qtda+"ml de Hidrante";
		document.getElementById("base").textContent = "Base de creme: "+baseCreme.toFixed(0)+"ml";
		document.getElementById("agua").textContent = "Água desmineralizada: "+aguaDesmineralizada.toFixed(0)+"ml";
		document.getElementById("nipagin").textContent = "Nipagin: "+nipagin.toFixed(0)+"g";
		document.getElementById("ureia").textContent = "Ureia: "+ureia.toFixed(0)+"g";
		document.getElementById("propileno").textContent = "Propilenoglicol: "+propilenoglicol.toFixed(0)+"ml";
		document.getElementById("oleo").textContent = "Oléo Vegetal: "+oleo.toFixed(0)+"ml";
		document.getElementById("extrato").textContent = "Extrato glicólico: "+extrato.toFixed(0)+"ml";
		document.getElementById("essencia").textContent = "Essência: "+essencia.toFixed(0)+"ml";
		alert("Gerando quantidade de insumos para "+qtda+"ml de produto");
	}
	
	function gerarLote() {
	  const agora = new Date();
	  const ano = agora.getFullYear();
	  const mes = String(agora.getMonth() + 1).padStart(2, '0');
	  const dia = String(agora.getDate()).padStart(2, '0');
	  const hora = String(agora.getHours()).padStart(2, '0');
	  const minuto = String(agora.getMinutes()).padStart(2, '0');

	  return "L" + ano + mes + dia + hora + minuto;
	}

	function gerarPDF() {
		document.getElementById("pdf").style.display = "none";
		document.getElementById("btnetiqueta").style.display = "none";
		window.print();
		window.location.reload();
	}
	
	function gerarEtiqueta() {
		document.getElementById("pdf").style.display = "none";
		document.getElementById("btnetiqueta").style.display = "none";
		document.querySelector(".container").style.display = "none";
		document.getElementById("dadosEtiqueta").style.display = "block";
		document.querySelector(".dados").style.display = "flex";	
	}
	
	function imprimirEtiqueta() {

		const ext = document.getElementById('inpextrato').value.trim();
		const ole = document.getElementById('inpoleo').value.trim();
		const tec = document.getElementById('tecnico').value.trim();
		const obs = document.getElementById('inpobs').value.trim();

		if (!ext) {
			alert("Informe o extrato.");
			return;
		}

		if (!ole) {
			alert("Informe o óleo.");
			return;
		}

		if (!tec) {
			alert("Informe o técnico.");
			return;
		}

		if (!obs) {
			alert("Informe a observação.");
			return;
		}

		const agora = new Date();
		const dataFormatada = agora.toLocaleDateString('pt-BR');
		const numeroLote = gerarLote();

		const container = document.getElementById("etiqueta");
		container.innerHTML = ""; // limpa antes de gerar

		for (let i = 0; i < 24; i++) {

			const etiqueta = document.createElement("div");
			etiqueta.classList.add("etiqueta-box");

			etiqueta.innerHTML = `
				<span><strong>Composição:</strong> base para creme, nipagin, ureia, propilenoglicol, extrato de ${ext}, óleo de ${ole}, essência.</span>
				<span><strong>Responsável:</strong> ${tec}</span>
				<span><strong>Observação:</strong> ${obs}</span>
				<span><strong>Lote:</strong> ${numeroLote}</span>
				<span><strong>Data:</strong> ${dataFormatada}</span>
				<span><strong>Validade:</strong> 6 meses</span>
			`;

			container.appendChild(etiqueta);
		}

		document.getElementById("dadosEtiqueta").style.display = "none";
		container.style.display = "grid";

		window.print();
		window.location.reload()
	}
