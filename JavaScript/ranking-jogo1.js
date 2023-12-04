document.addEventListener("DOMContentLoaded", function () {

  const apiUrl = "http://localhost:8080/ranking/jogo/1"; 

  const rankingTableBody = document.getElementById("ranking-jogo1");

  axios.get(apiUrl)
      .then(response => {
          const data = response.data;

          // deixar a tabela decrescente
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