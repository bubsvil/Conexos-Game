function search() {
    var jogadorNickname = document.getElementById('pesquisa-input').value;

    Promise.all([
        axios.get('http://localhost:8080/ranking/jogador', { params: { nickname: jogadorNickname } }),
        axios.get('http://localhost:8080/ranking/jogo/1'),
        axios.get('http://localhost:8080/ranking/jogo/2'),
        axios.get('http://localhost:8080/ranking/jogo/3')
    ])
    .then(function(responses) {
      
        var rankingData = responses[0].data;
        var data1 = responses[1].data;
        var data2 = responses[2].data;
        var data3 = responses[3].data;

        updateTable(rankingData, data1, data2, data3);
    })
    .catch(function(error) {
        console.error('Erro na requisição:', error);
    });
}

function updateTable(rankingData, data1, data2, data3) {
    var tableBody = document.getElementById('pesquisa-nickname');
    tableBody.innerHTML = '';

    rankingData.forEach(function (ranking) {
        var newRow = '<tr>';
        newRow += '<td>' + getPontuacaoByJogoId(ranking.jogo.id, data1) + '</td>';
        newRow += '<td>' + getPontuacaoByJogoId(ranking.jogo.id, data2) + '</td>';
        newRow += '<td>' + getPontuacaoByJogoId(ranking.jogo.id, data3) + '</td>';
        newRow += '</tr>';
        tableBody.innerHTML += newRow;
    });
    transposeTable('pesquisa-nickname');
}

function getPontuacaoByJogoId(jogoId, jogoData) {
    var pontuacao = 0;

    var jogoRanking = jogoData.find(function (ranking) {
        return ranking.jogo.id === jogoId;
    });

    if (jogoRanking) {
        pontuacao = jogoRanking.pontuacao;
    }
    return pontuacao;
}

function transposeTable(tableId) {
    var table = document.getElementById(tableId);
    var rows = table.getElementsByTagName('tr');
    var cols = rows[0].getElementsByTagName('td').length;

    var transposedTable = '<table class="table table-striped table-dark">';
    for (var i = 0; i < cols; i++) {
        transposedTable += '<tr>';
        for (var j = 0; j < rows.length; j++) {
            transposedTable += '<td>' + rows[j].getElementsByTagName('td')[i].innerHTML + '</td>';
        }
        transposedTable += '</tr>';
    }
    transposedTable += '</table>';

    table.innerHTML = transposedTable;
}