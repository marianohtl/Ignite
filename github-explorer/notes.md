#### Iniciando um Projeto

    yarn init -y

Informações Principais do Projeto
( são também as dependêcias [libs])
package.json

    yarn add react

node_modules (todas as dependêcias da aplicação)

    yarn add react-dom

Permite que o react se comunique com a árvore de componentes do html

#### Utilizando o Babel

Conversor para todos os brownsers

    yarn add @babel/core @babel/cli @babel/preset-env -D

Dependência de desenvolvimento significa que não usamos nenhuma dessas
bibliotecas quando este for posto em produção.

Convertendo um arquivo

    yarn babel src/index.js --out-file dist/bundle.js

### WebPack

    yarn add webpack-cli webpack-dev-server -D

Podemos importar no html arquivos css, saas , les, json
Este estipula loaders que dita como cada um destes arquivos devem ser tratados pelo brownser.

Para gerar um bundle do hello word vindo de app, tive que fazer algumas alterações que não são sujeridas na aulo:

    yarn add webpack

    yarn add @babel/preset-react

(e adicionar em presets "@babel/preset-react")

    yarn add babel-loader -D

sempre que forem feitas alterações no arquivo que corresponde ao bundle.js, deve-se re-executar o comando:

    yarn webpack

### Algumas melhorias no fluxo da aplicação:

Introduzindo plugin no webpack.

yarn add html-webpack-plugin -D

#### AUTOMATIZANDO O yarn webpack

    yarn add webpack-dev-server -D

a aplicação ficará executando no 'localhost/8080'

### Source maps

Tornando a forma de identificar os erros conforme o código original.

# Ambiente de Desenvolvimento e Ambiente d e Produção

Para criar a variável de ambiente seguimos desta forma:
no unix (seja no MAC ou no Linux)

    NODE_ENV=production yarn webpack

no Windows:

    yarn add cross-env -D

(serve para definir variáveis de ambiente independente do sistema operacional da pessoa)

Agora temos um atalho para rodar os ambientes:

    yarn dev

(roda o ambiente de desenvolvimento)

    yarn build

(roda o ambiente de produção)

# Interpretando o arquivos css no projeto

Crie uma regra no webpack para interpretar arquivos do tipo css.

    yarn add style-loader css-loader -D

### Configurando o pré-processador SAAS

Configure o webpack e adicione este comando:

    yarn add node-sass -D

    yarn add sass-loader -D

### Criando Componentes

Componentes são como as "tags" do html.
Códigos encapsulados com sua estrutura, estilização e funcionalidade.

Função que inicia em maiúscula e retornando um html.

Uma convensão é termos apenas um componente por arquivo.

### Propriedades

Passando informações de componentes pais para componentes filhos;

### Conceito ESTADO

### Imutabilidade

"Preve que uma variável não tem o valor alterado, e sim recebe um novo valor."

users = ['thalitaM', 'LucasG'];
users.push('novoUser');

Aqui estamos alterando a informação na memória.
Estamos gerando uma mutação na variável users.

No React, aplicamos o conceito da imutabilidade, sempre criando um novo array. Ex:

novoUsuario = [...users, 'novoUsuario'];

Assim criamos um novo espaço na memória ao invés de alterar algo que já está na memória;
(Conceito muito usado na programação funcional)

const [counter, setCounter] = useState(0);

Neste caso acima é como se o useState, criasse uma nova variável counter cada vez que o setCounter é usado.

### Fast Refresh

Quando alteramos qualquer estado de um componente no react usando o yarn webpack, temos um reset da aplicação do zero.

Ao usar o fast refresh conseguimos alterar o código e salvá-lo, mantendo o estado do componente;

        yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh

### Adicionando mais HOOKS no projeto

        useEffect

Estes serve para dispararmos uma função quando algo acontecer na aplicação.
ex. variável mudou
queremos ter uma reação

useEffect(() => {

}, [repositories]);

Execute a função, caso a variável seja alterada.

useEffect(() => {

}, []);

Existe uma única execução assim que o componente for exibido em tela.

useEffect(() => {

});

Quando não temos o segundo parâmetro, o useEffect fica em looping.
Outro caso de looping é quando alteramos o valor da variável utilizada no array, ex:

useEffect(() => {
setRepository(...) (muda variável)
}, [repositories]); (altera valor -> chama função )

### Listando com maps

### Typescript

SuperSet, conjunto de funcionalidade que são adicionadas em cima de uma linguagem;

function showWelcomeMessage(user){
return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.city} and your state is ${user.state}`;
}

Tipagem dinámicas permitem qualquer informação disposta em user, e isso pode gerar vários erros;

type User = {
name:string,
email:string,
address:{
city:string,
state?:string
}
}

function showWelcomeMessage(user: User){
return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.city} and your state is ${user.state}`;
}

typescript histeric type checking (checa os tipos enquanto está se densenvolvendo)
nos navegadores, este typescript será convertido em js;

Typescript tem inferência de tipos.
Determinando o tipo das variáveis na maioria dos casos.

### Typescript no React

Typescript consegue tipar as propriedades que os componentes podem receber.

instale o typescript como uma dependência de desenvolvimento

    yarn add typescript -D

    yarn tsc --init

    yarn add @babel/preset-typescript -D

    yarn add @types/react-dom -d

### Alterando Componentes jsx para tsx

### Extensão React Devtools
