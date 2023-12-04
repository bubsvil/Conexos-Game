function search() {
    var jogadorNickname = document.getElementById('pesquisa-input').value;

    Promise.all([
        axios.get('/game1', { params: { nickname: jogadorNickname } }),
        axios.get('/game2', { params: { nickname: jogadorNickname } }),
        axios.get('/game3', { params: { nickname: jogadorNickname } })
    ])
    .then(function(responses) {
      
        var data1 = responses[0].data;
        var data2 = responses[1].data;
        var data3 = responses[2].data;

        updateTable(data1, data2, data3);
    })
    .catch(function(error) {
        console.error('Erro na requisição:', error);
    });
}

function updateTable(data1, data2, data3) {
    var tableBody = document.getElementById('pesquisa-nickname');
    tableBody.innerHTML = ''; 

    var newRow = '<tr>';
    newRow += '<td>' + data1.pontuacao + '</td>';
    newRow += '<td>' + data2.pontuacao + '</td>';
    newRow += '<td>' + data3.pontuacao + '</td>';
    newRow += '</tr>';

    tableBody.innerHTML = newRow;
}