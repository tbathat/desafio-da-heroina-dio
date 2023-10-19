// Definindo as variáveis (nome e XP do herói)
let nome = "Tabathônia";
let scoreXp = 15000;

// Utilizando estrutura de decisão para classificar o nível
let nivel;

if (scoreXp < 1000) {
  nivel = "Ferro";
} else if (scoreXp >= 1001 && scoreXp <= 2000) {
  nivel = "Bronze";
} else if (scoreXp >= 2001 && scoreXp <= 5000) {
  nivel = "Prata";
} else if (scoreXp >= 6001 && scoreXp <= 7000) {
  nivel = "Ouro";
} else if (scoreXp >= 7001 && scoreXp <= 8000) {
  nivel = "Platina";
} else if (scoreXp >= 8001 && scoreXp <= 9000) {
  nivel = "Ascendente";
} else if (scoreXp >= 9001 && scoreXp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Exibindo a mensagem
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
