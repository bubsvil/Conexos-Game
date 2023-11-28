function atualizarUsuario() {
    const novoNomeUsuario = document.getElementById('username').value;
    const novoEmail = document.getElementById('email').value;
    const novaSenha = document.getElementById('password').value;

    const dadosAtualizados = {
        username: novoNomeUsuario,
        email: novoEmail,
        password: novaSenha
    };

    // Substitua a URL abaixo pela URL do seu endpoint de atualização
    const urlAtualizacao = 'https://seuservidor.com/api/atualizar-usuario';

    axios.put(urlAtualizacao, dadosAtualizados)
        .then(function (response) {
            console.log('Usuário atualizado com sucesso:', response.data);
            // Adicione aqui qualquer lógica adicional que você deseja executar após a atualização bem-sucedida
        })
        .catch(function (error) {
            console.error('Erro ao atualizar usuário:', error);
            // Adicione aqui qualquer lógica adicional que você deseja executar em caso de erro
        });
}