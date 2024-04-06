//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

const criptografar = document.getElementById("criptografar");
const descriptografar = document.getElementById("descriptografar");
const copiar = document.getElementById("copiar");
const textoInicial = document.getElementById("textoInicial");
const textoFinal = document.getElementById("textoFinal");
const imagem = document.getElementById("imagem");
const textoInfo = document.getElementById("textoInfo");
const conteudo2 = document.getElementById("conteudo2")
	
const remplace = (newvalue) => {
	textoFinal.innerHTML = newvalue;
	textoFinal.classList.add("ajustar");
	conteudo2.classList.add("ajustar")
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	textoInicial.placeholder = "Digite seu texto";
	imagem.classList.add("ocultar");
	textoInfo.classList.add("ocultar");
	copiar.classList.remove("bn_ocultar");
}

const reset = () => {
	textoInicial.value = "";
    textoInicial.style.height = "auto";
	textoFinal.innerHTML = "";
	conteudo2.classList.remove("ajustar")
	textoFinal.classList.remove("ajustar");
	imagem.classList.remove("ocultar");
	textoFinal.placeholder = "Nenhuma mensagem encontrada";
	textoInfo.classList.remove("ocultar")
	copiar.classList.add("bn_ocultar");
	textoInicial.focus();
};

let remplazar = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];

criptografar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][0])) {
					newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
				};
			};
			return newtext;
		};
		remplace(encript(texto));
	} else {
		alert("Digite seu texto");
		reset();
	};
});

descriptografar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][1])) {
					newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} else {
		alert("Mensagem descriptografada");
		reset();
	};
});

copiar.addEventListener("click", () => {
	let texto = textoFinal;
	texto.select();
	document.execCommand('copiar');
	alert("Texto Copiado");
	reset();
});
//auto ajuste de textarea
textoInicial.addEventListener("change", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});