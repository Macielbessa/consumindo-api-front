# CONSUMINDO API (BACK-END) NO FRONT END(VUE)
Projeto feito para entender mais sobre os consumos de api

consumindo : https://github.com/Macielbessa/produtos-backend

Postgres, dbeaver e spring boot no back

Vue e Axios no front

quando você está desenvolvendo uma aplicação Web que podem necessitar consumir e exibir dados de uma API.

a maneira mais popular é usando axios, um cliente HTTP baseado em Promises.

consultar, apresentar ou para persistir os dados em algum banco de dados

AXIOS = npm install axios

------------------------------------
Algumas explicações

IDE - VS code

O Arquivo config.js da pasta services: 
------------------------------
config.js eu import e configuro a axios para dentro do projeto e crio uma baseurl com a url da api

O Arquivo produtos,js da pasta services:
---------------------------------
produtos.js eu importei o arquivo de configuração que está dentro de uma constante (http)

export default {} e dentro criei os métodos de requisição http

{listar, atualizar, apagar, salvar} famoso crud http

------------------------------------
O Arquivo Main.js
----------------------------
é o ponto de entrada para seu aplicativo. 
Atualmente, este arquivo inicializa seu aplicativo Vue, Esse arquivo geralmente é onde você registra componentes globais ou bibliotecas Vue adicionais.

O Arquivo app.vue
----------------------------
é dividido em 3 partes, html ( template) o script ( Javascript) e o style ( css )






