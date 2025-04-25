Este repositório contém testes automatizados para validar funcionalidades de login e cadastro de usuários. Os testes foram criados com o Cypress.

Funcionalidades
Os testes cobrem os cenários de Login e Cadastro

Tecnologias Utilizadas
Cypress: Framework de testes para aplicações web.

Node.js: Ambiente de execução para o Cypress.

Como Executar os Testes:


1. Clone o repositório:

git clone'https://github.com/clysrosa/TestesAmbev.git'

2. Navegue até o diretório do projeto:

cd TestesAmbev

3. Instale as dependências:

npm install cypress --save-dev

4. Rode os testes:
Abra a interface gráfica do Cypress para executar os testes visualmente:

npx cypress open

Isso abrirá o Cypress Test Runner. Lá, você pode clicar nos testes e visualizá-los.

Modo Headless
Se preferir rodar os testes sem abrir a interface gráfica:

npx cypress run

Executará os testes no terminal e mostrará os resultados diretamente.
