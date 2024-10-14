function cadastrarUsuario() {
    const nome = document.querySelector('input[type="text"]').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (nome && email && password) {
        // Aqui você pode adicionar a lógica para cadastrar o usuário, como enviar os dados para um servidor
        alert(`Usuário cadastrado com sucesso!\nNome: ${nome}\nEmail: ${email}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

