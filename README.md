<h1 align="center" style="border-bottom: 1px solid #eee; margin: 20px 0; padding-bottom: 10px;">
<img src="./img/logo.svg" width="400px" alt="logo" /><br>
<p>Seja um herói! 🦸‍♂️</p>
</h1>

<div align="center">

[![The MIT License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](https://github.com/jvictorfarias/be-the-hero/blob/master/LICENSE.md)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e03bf9946db44b37bc31318b5e9de000)](https://www.codacy.com/manual/jvictorfarias/be-the-hero?utm_source=github.com&utm_medium=referral&utm_content=jvictorfarias/be-the-hero&utm_campaign=Badge_Grade)
![GitHub last commit](https://img.shields.io/github/last-commit/jvictorfarias/be-the-hero)
[![Netlify Status](https://api.netlify.com/api/v1/badges/749225ed-51f3-4f2b-85be-5a8eb32897f0/deploy-status)](https://app.netlify.com/sites/bethehero-jvictorfarias/deploys)

<p align="center" >
  <a href="#fire-prévia-da-aplicação"> :fire: Prévia da Aplicação</a> |
  <a href="#rocket-tecnologias-usadas"> :rocket: Tecnologias Usadas</a> |
  <a href="#hammer-deploy-da-aplicação"> :hammer: Deploy da Aplicação</a> |
  <a href="#thinking-como-contribuir?"> :thinking: Como Contribuir?</a> |
  <a href="#zap-executando-o-projeto"> :zap: Executando o Projeto </a> |
</p>


</div>

## :bookmark_tabs: Sobre o Projeto

***Be The Hero*** é um projeto que tem como foco ajudar as ONGs(Organizações Não Governamentais) a angariar fundos para os seus projetos, e o nome se dá pela possibilidade de você contribuir com os objetivos e projetos das ONGs e se tornar um herói com isso!


## :fire: Prévia da Aplicação

<div align="center">

![Demo](img/preview.gif)

</div>

## :rocket: Tecnologias Usadas

O projeto foi desenvolvido usando as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://pt-br.reactjs.org/)
- [ReactNative](https://reactnative.dev/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [JWT](https://jwt.io/)
- [Knex](http://knexjs.org/)
- [Axios](https://github.com/axios/axios)
- [Yup](https://github.com/jquense/yup)
- [Sucrase](https://sucrase.io/)
- [Styled-Components](https://styled-components.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)



## :thinking: Como Contribuir?
**Faça um fork deste repositório**

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd be-the-hero

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feature/bugfix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.


## :hammer: Deploy da Aplicação
#### Frontend
https://bethehero-jvictorfarias.netlify.app/

#### Backend
https://be-the-hero-jvictorfarias.herokuapp.com/

## :zap: Executando o Projeto
#### Clonando o projeto
```sh
$ git clone https://github.com/jvictorfarias/be-the-hero.git
$ cd be-the-hero
$ yarn
```
#### Iniciando a API
```sh
$ cd api
$ yarn && yarn knex migrate:latest && yarn dev
```
<a href="https://insomnia.rest/run/?label=Be-The-Hero&uri=https%3A%2F%2Fgithub.com%2Fjvictorfarias%2Fbe-the-hero%2Fblob%2Fmaster%2Fapi%2FInsomnia_2020-04-05.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

#### Iniciando o Frontend
```sh
$ cd frontend
$ yarn && yarn start
```
#### Iniciando o Mobile(Android)
```sh
$ cd mobile
$ yarn && yarn android && yarn start
```

## :memo: Licença

Este projeto foi desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

<p align="center" style="margin-top: 20px;">
  <img src="./img/heroes.png" width="400px" alt="heroes" />
</p>

<p align="center" style="margin-top: 20px;">Made with :purple_heart: by <strong> Joao Victor Farias </p>
