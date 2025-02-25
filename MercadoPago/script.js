
// Adiciona evento de clique ao logo para voltar à página inicial
let logos = document.querySelectorAll('.logo'); // Seleciona todos os elementos com a classe 'logo'
for (let i = 0; i < logos.length; i++) {
    logos[i].addEventListener('click', () => {
        document.querySelector('.front-pagina').style.display = 'block'; // Exibe a página inicial
        document.querySelector('.login-pagina').style.display = 'none'; // Esconde a página de login
        document.querySelector('.cadastrar-pagina').style.display = 'none'; // Esconde a página de cadastro
    });
}

// Adiciona evento de clique ao botão de login para exibir a página de login
let loginBtns = document.querySelectorAll('.login'); // Seleciona todos os elementos com a classe 'login'
for (let i = 0; i < loginBtns.length; i++) {
    loginBtns[i].addEventListener('click', () => {
        document.querySelector('.front-pagina').style.display = 'none'; // Esconde a página inicial
        document.querySelector('.login-pagina').style.display = 'block'; // Exibe a página de login
        document.querySelector('.cadastrar-pagina').style.display = 'none'; // Esconde a página de cadastro
    });
}

// Adiciona evento de clique ao botão de cadastro para exibir a página de cadastro
let cadastrarBtns = document.querySelectorAll('.cadastrar'); // Seleciona todos os elementos com a classe 'cadastrar'
for (let i = 0; i < cadastrarBtns.length; i++) {
    cadastrarBtns[i].addEventListener('click', () => {
        document.querySelector('.front-pagina').style.display = 'none'; // Esconde a página inicial
        document.querySelector('.login-pagina').style.display = 'none'; // Esconde a página de login
        document.querySelector('.cadastrar-pagina').style.display = 'flex'; // Exibe a página de cadastro
    });
}


// Fim das páginas

// Navegação - Controla o menu responsivo e dropdowns
const dropdownItems = document.querySelectorAll('.dropdown-hover');
if (window.innerWidth < 1000) {
    // Para telas menores que 1000px, ativa o menu responsivo
    const menuIcon = document.querySelector('.menu');
    const navbar = document.querySelector('.navbar');
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change'); // Alterna a classe do menu para abrir/fechar
        // Fecha os dropdowns caso o menu seja fechado
        if (!navbar.classList.contains('change')) {
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.style.left = '-20rem'; // Esconde os dropdowns
            });
        }
    });

    // Abre os submenus quando um link é clicado
    document.querySelectorAll('.show-dropdown').forEach(link => {
        link.addEventListener('click', () => {
            link.nextElementSibling.style.left = '0'; // Mostra o dropdown correspondente
        });
    });

    // Fecha os submenus quando o título do dropdown é clicado
    document.querySelectorAll('.dropdown-heading-link').forEach(headingLink => {
        headingLink.addEventListener('click', () => {
            headingLink.parentElement.parentElement.style.left = '-20rem'; // Esconde o dropdown
        });
    });
} else {
    // Para telas maiores, exibe os dropdowns ao passar o mouse
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('mouseover', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible';
            document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)';
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'; // Rotaciona a seta para baixo
        });

        dropdownItem.addEventListener('mouseout', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden';
            document.querySelector('.navbar-wrapper').style.background = 'none';
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'; // Volta a seta para cima
        });
    });
}

// Recarrega a página quando a janela for redimensionada
window.addEventListener('resize', () => {
    window.location.reload();
});
// Fim da navegação

// Validação do formulário de login 


function validateForm(event) {
    try {
        // Variável que armazena se o formulário é válido ou não
        let isValid = true;

        // Obtém os valores dos campos de e-mail e senha
        let email = document.getElementById('email').value.trim(); // Remove espaços extras
        let password = document.getElementById('password').value.trim(); // Remove espaços extras

        // Obtém os elementos das mensagens de erro
        let emailError = document.getElementById('email-error');
        let passwordError = document.getElementById('password-error');

        // Limpa mensagens de erro anteriores
        clearErrorMessages(emailError, passwordError);

        // Validação do e-mail usando uma função auxiliar
        if (!validateEmail(email)) {
            emailError.textContent = 'Por favor, insira um e-mail válido';
            isValid = false;
        }

        // Validação da senha 
        if (!validatePassword(password)) {
            passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres';
            isValid = false;
        }

        // Se o formulário for inválido, impede o envio
        if (!isValid) {
            event.preventDefault();
        }

        return isValid; // Retorna se o formulário é válido ou não
    } catch (error) {
        // Captura qualquer erro durante a validação
        console.error("Erro na validação do formulário:", error);
        event.preventDefault(); // Impede o envio do formulário em caso de erro
        return false;
    }
}

// Função para limpar mensagens de erro
function clearErrorMessages(...errorElements) {
    try {
        errorElements.forEach(element => {
            if (element) element.textContent = ''; // Limpa o conteúdo do elemento
        });
    } catch (error) {
        console.error("Por favor, insira um e-mail válido:", error);
    }
}

// Função para validar o e-mail
function validateEmail(email) {
    try {
        // Expressão regular para validar o formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email); // Retorna true se o e-mail for válido
    } catch (error) {
        console.error("Por favor, insira um e-mail válido:", error);
        return false;
    }
}

// Função para validar a senha
function validatePassword(password) {
    try {
        // Verifica se a senha tem pelo menos 6 caracteres 
        let minLength = 6;
        let count = 0;
        for (let char of password) {
            count++;
            if (count >= minLength) break; // Sai do loop se atingir o comprimento mínimo
        }
        return count >= minLength; // Retorna true se a senha for válida
    } catch (error) {
        console.error("A senha deve ter pelo menos 6 caracteres", error);
        return false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        const emailInput = document.getElementById('email'); // Obtém o campo de e-mail pelo ID
        const suggestionsContainer = document.createElement('div'); // Cria um novo elemento <div> para as sugestões

        emailInput.parentNode.appendChild(suggestionsContainer); // Adiciona o contêiner ao DOM, como filho do pai do campo de e-mail

        // Função para carregar e-mails salvos do localStorage
        const loadSavedEmails = () => JSON.parse(localStorage.getItem('savedEmails')) || [];
        // Recupera os e-mails salvos no localStorage ou retorna um array vazio se não houver nenhum

        // Função para salvar um novo e-mail no localStorage
        const saveEmail = (email) => {
            const emails = loadSavedEmails(); // Carrega os e-mails salvos
            if (!emails.includes(email)) { // Verifica se o e-mail já existe na lista
                emails.push(email); // Adiciona o novo e-mail à lista
                localStorage.setItem('savedEmails', JSON.stringify(emails)); // Salva a lista atualizada no localStorage
            }
        };

        // Evento para mostrar sugestões ao passar o mouse sobre o campo de e-mail
        emailInput.addEventListener('mouseover', () => {
            const emails = loadSavedEmails(); // Carrega os e-mails salvos
            suggestionsContainer.innerHTML = ''; // Limpa as sugestões anteriores
            if (emails.length > 0) { // Verifica se há e-mails salvos
                emails.forEach(email => { // Itera sobre cada e-mail salvo
                    const suggestion = document.createElement('div'); // Cria um novo elemento <div> para a sugestão
                    suggestion.textContent = email; // Define o texto da sugestão como o e-mail
                    suggestion.onclick = () => { // Adiciona um evento de clique à sugestão
                        emailInput.value = email; // Preenche o campo de e-mail com a sugestão
                        suggestionsContainer.style.display = 'none'; // Oculta as sugestões após a seleção
                    };
                    suggestionsContainer.appendChild(suggestion); // Adiciona a sugestão ao contêiner
                });
                suggestionsContainer.style.display = 'block'; // Exibe o contêiner de sugestões
            }
        });

        // Evento para ocultar sugestões ao tirar o mouse do campo de e-mail
        emailInput.addEventListener('mouseout', () => suggestionsContainer.style.display = 'none');
        // Oculta o contêiner de sugestões quando o usuário tira o mouse do campo de e-mail

        // Salvar o e-mail atual ao enviar o formulário
        document.querySelector('form').addEventListener('submit', () => {
            const email = emailInput.value.trim(); // Obtém o valor do campo de e-mail (remove espaços extras)
            if (email && validateEmail(email)) saveEmail(email); // Salva o e-mail no localStorage se for válido
        });
    } catch (error) {
        console.error("Erro ao configurar sugestões de e-mail:", error); // Captura e exibe qualquer erro no console
    }
});

