# luizalabs-desafio-front-end

## Sobre o projeto - [Demo](https://luizalabs-desafio-front-end.herokuapp.com/)

Foi pedido para desenvolver um site com duas telas, em uma delas o usuário poderia adicionar e remover os favoritos de um produto e na outra apenas removê-los.
Com isso foi desenvolvido uma SPA com Vue para resolver esse problema. A aplicação em si é bem simples mas contém uma série de técnicas de front-end avançado, dentre elas a naveção por SPA, gerenciamento de estados, persistência de dados, testes unitários, testes e2e, SASS (SCSS), pastas organizadas, Babel para polyfill, ESLint e Prettier para manter o código sempre identado.

#### Funcionalidades

 - Listagem de produtos para que o usuário possa adicionar à wishlist
 - Persistência dos dados da lista de desejos, mesmo que o usuário recarregue a página
 - Responsivo
 - Testes unitários e E2E
 - Suporte aos navegadores modernos e IE11
 - Deploy utilizando Express e Heroku
 - Suporte ao PWA e ServiceWorker

#### Utilizando

 - Vue
    - Vuex - Gerenciador de estados
    - Vuex Persist - Plugin para armazenar os dados
    - Vue Router - Lazy Loading das páginas e rotas SPA
 - Axios - Para chamadas HTTP em formato de promise
 - CSS
    - SASS/SCSS
 - Vue Test Utils
    - Jest - Para fazer os testes unitários, seja da store ou dos componentes
    - Cypress - Para realizar testes na visão do usuário final

## Testes

  - Teste unitário
     - Foram criados testes para todos os níveis da aplicação. A cobertura de testes é de 100%. 
  - Teste E2E
     - Executa as ações de adicionar aos favoritos e remover.

### Relatório de testes 

![cobertura](./doc/coverage.png 'coverage')

## Rodar o projeto localmente
```
npm install
```

### Executa a aplicação no modo de desenvolvimento
```
npm run serve
```

### Compila o projeto para produção
```
npm run build
```

### Roda localmente o projeto buildado
```
npm start
```

### Executa os testes unitários
```
npm run test:unit
```

### Executa os testes E2E
```
npm run test:e2e
```
