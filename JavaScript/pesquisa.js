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

        // Aqui você deve manipular os dados conforme necessário e atualizar sua tabela
        updateTable(rankingData, data1, data2, data3);
    })
    .catch(function(error) {
        console.error('Erro na requisição:', error);
    });
}

function updateTable(rankingData, data1, data2, data3) {
    var tableBody = document.getElementById('pesquisa-nickname');
    tableBody.innerHTML = '';

    // Adiciona uma linha para cada jogador
    rankingData.forEach(function (ranking) {
        var newRow = '<tr>';
        newRow += '<td>' + getPontuacaoByJogoId(ranking.jogo.id, data1) + '</td>';
        newRow += '<td>' + getPontuacaoByJogoId(ranking.jogo.id, data2) + '</td>';
        newRow += '<td>' + getPontuacaoByJogoId(ranking.jogo.id, data3) + '</td>';
        newRow += '</tr>';
        tableBody.innerHTML += newRow;
    });

    // Transpõe a tabela para mostrar a pontuação uma ao lado da outra
    transposeTable('pesquisa-nickname');
}

function getPontuacaoByJogoId(jogoId, jogoData) {
    var pontuacao = 0;

    // Procura pela pontuação do jogo correspondente no conjunto de dados
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

    // Cria uma nova tabela transposta
    var transposedTable = '<table class="table table-striped table-dark">';
    for (var i = 0; i < cols; i++) {
        transposedTable += '<tr>';
        for (var j = 0; j < rows.length; j++) {
            transposedTable += '<td>' + rows[j].getElementsByTagName('td')[i].innerHTML + '</td>';
        }
        transposedTable += '</tr>';
    }
    transposedTable += '</table>';

    // Atualiza a tabela original com a transposta
    table.innerHTML = transposedTable;
}