document.addEventListener("DOMContentLoaded", function () {

<<<<<<< HEAD
async function fetchData() {
  try {
    const response = await axios.get('URL_DO_SEU_BACKEND');
    const data = response.data;
=======
  const apiUrl = "http://localhost:8080/ranking/jogo/3"; 
>>>>>>> b743f8870c5a0b5d46af9be04b8784afa218f20d


  const rankingTableBody = document.getElementById("ranking-jogo3");


  axios.get(apiUrl)
      .then(response => {
          const data = response.data;


          data.sort((a, b) => b.pontuacao - a.pontuacao);

          data.forEach((pontuacao, index) => {
              const row = `<tr>
                              <td>${index + 1}</td>
                              <td>${pontuacao.pontuacao}</td>
                              <td>${pontuacao.jogador.nicknameDoJogador}</td>
                           </tr>`;
              rankingTableBody.innerHTML += row;
          });
      })
      .catch(error => console.error("Erro ao obter dados da API:", error));
});