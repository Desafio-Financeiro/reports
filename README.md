# Tech Challenge - Fase 2

## Projeto Financeiro

Projeto desenvolvido pelos alunos:

- Cristiano Santos Gonçalves - RM 358858

- Isabella Soares de Lima - RM 358599

## Sobre este projeto

Este repositório contém o projeto Reports App e é um microfrontend remoto da aplicação. Na primeira entrega estávamos trabalhando com monorepos usando o Turborepo, porém enfrentamos diversos problemas no momento de implementar microfrontends nele, tanto usando Module Federation quando Single SPA, e por conta disso optamos por quebrar o projeto em pequenos novos repositórios e criar a comunicação entre eles utilizando **Module Federation**.

Neste projetos centralizamos todas as funcionalidades relacionadas a relatórios financeiros:

- Relatório de transações e depósitos do mês atual
- Relatório comparativo de transações e depositos dos últimos quatro meses (quando esses dados existirem)

Neste projeto utilizamos Angular na versão 13. A escolha de outra framework se deu tanto pela intenção de praticar os conceitos trabalhados durante o bimetre quanto para validar a comunicação entre microfrontends utilizando diferentes frameworks. A escolha da versão se deu no processo de implementação. Enfrentamos problemas de compatibilidade com o module federation utilizando a versão mais atual do Angular. Apesar de a versão 13 não receber mais suporte, foi com ela que encontramos documentação e suporte suficientes que permitiram a implementação dessa entrega.

Como nosso design system foi implementado em React não conseguimos utilizar os mesmos componentes neste projeto, e por isso foi necessário recriar alguns deles. Para criação dos gráficos utilizamos a biblioteca [PrimeNG](https://primeng.org/).

Mais detalhes sobre decisões de projeto e requisitos da entrega podem ser encontrados [na documentação do projeto principal da aplicação](https://github.com/Desafio-Financeiro/bank-app).

## Como executar o projeto

### Via script NPM

Crie um arquivo `.env` na raiz do projeto com o conteúdo:

```
PUBLIC_BASE_URL=http://json-server-api-mu.vercel.app
```

Instale as dependências e execute o projeto:

```
npm i
npm start
```

A aplicação deve executar na url `http://localhost:3001`.

<img src="./desktop-reports.png" />

### Via Docker

Execute no terminal o comando:

```
docker compose up
```

A aplicação deve executar na url `http://localhost:3001`.

## Links para acessar as aplicações

[Bank APP](https://main.d1m6z57r6zgdud.amplifyapp.com/)

[Transactions](https://main.d12mtbag2y0zom.amplifyapp.com/)

[Reports](https://main.d3pb86cilm3vn8.amplifyapp.com/)

[Landing page](https://main.d8ml3barfxfwu.amplifyapp.com/)

[API json-server](http://json-server-api-mu.vercel.app/)

## Links para acessar os repositórios dos microfrontends

[Bank APP](https://github.com/Desafio-Financeiro/bank-app)

[Transactions](https://github.com/Desafio-Financeiro/transactions)

[Reports](https://github.com/Desafio-Financeiro/reports)

[Landing page](https://github.com/Desafio-Financeiro/landing-page)

[API json-server](https://github.com/Desafio-Financeiro/json-server-api)

[Financeiro DS](https://github.com/Desafio-Financeiro/financeiro-ds)
