   // Fazer a requisição GET para obter o top 3 das maiores pontuações
    axios.get('URL_DO_SEU_BACKEND/top3-pontuacoes', config)
        .then(function (response) {
            var top3Pontuacoes = response.data;

            // Exibir as três maiores pontuações na página ranking.html
            exibirTop3Pontuacoes(top3Pontuacoes);
        })
        .catch(function (error) {
            console.error('Erro ao obter top 3 das pontuações', error);
        });
}

function exibirTop3Pontuacoes(top3Pontuacoes) {
    var primeiroLugarElement = document.getElementById('primeiroLugar');
    var segundoLugarElement = document.getElementById('segundoLugar');
    var terceiroLugarElement = document.getElementById('terceiroLugar');

    // Limpar o conteúdo existente, se houver
    primeiroLugarElement.innerHTML = '';
    segundoLugarElement.innerHTML = '';
    terceiroLugarElement.innerHTML = '';

    // Adicionar as três maiores pontuações aos elementos
    top3Pontuacoes.forEach(function (pontuacao, index) {
        var listItem = document.createElement('li');
        listItem.textContent = 'Posição ' + (index + 1) + ': ' + pontuacao.valor;

        // Adicionar o item de lista ao elemento correspondente
        if (index === 0) {
            primeiroLugarElement.appendChild(listItem);
        } else if (index === 1) {
            segundoLugarElement.appendChild(listItem);
        } else if (index === 2) {
            terceiroLugarElement.appendChild(listItem);
        }
    });
}