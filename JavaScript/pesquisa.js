function search() {
    var jogadorNickname = document.getElementById('pesquisa-input').value;

    Promise.all([
        axios.get('http://localhost:8080/ranking/jogador', { params: { nickname: jogadorNickname } }),
        axios.get('http://localhost:8080/ranking/jogo/1', { params: { id: 1 } }),
        axios.get('http://localhost:8080/ranking/jogo/2', { params: { id: 2 } }),
        axios.get('http://localhost:8080/ranking/jogo/3', { params: { id: 3 } })
    ])
    .then(function(responses) {
      
        var rankingData = responses[0].data;
        var data1 = responses[1].data;
        var data2 = responses[2].data;
        var data3 = responses[3].data;

        // Aqui você deve manipular os dados conforme necessário e atualizar sua tabela
        updateTable(rankingData, data1, data2, data3);
    })
    .catch(function(error) {
        console.error('Erro na requisição:', error);
    });
}

function updateTable(data) {
    var tableBody = document.getElementById('pesquisa-nickname');
    tableBody.innerHTML = '';

    // Adiciona uma linha para cada jogo
    data.forEach(function (ranking) {
        var newRow = '<tr>';
        newRow += '<td>' + ranking.pontuacao + '</td>';
        newRow += '</tr>';
        tableBody.innerHTML += newRow;
    });
}