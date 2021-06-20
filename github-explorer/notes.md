#Iniciando um Projeto

yarn init -y

Informações Principais do Projeto
(pricipais, são as dependêcias [libs])
package.json

yarn add react

node_modules (todas as dependêcias da aplicação)

yarn add react-dom
permite que o react se comunique com a árvore de componentes do html

#Utilizando o Babel
babbel
conversor para todos os brownsers

yarn add @babel/core @babel/cli @babel/preset-env -D

Dependência de desenvolvimento significa que não usamos nenhuma dessas
bibliotecas quando este for posto em produção

convertendo um arquivo
yarn babel src/index.js --out-file dist/bundle.js
