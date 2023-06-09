<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



# Back End



## Bibliotecas Utilizadas
```bash
# BCrypt
$ npm i bcrypt
$ npm i -D @types/bcrypt

# Config ( Pacote de configuração do Nest )
$ npm i --save @nestjs/config

# Instalando o TypeORM para postgres
$ npm install --save typeorm pg @nestjs/typeorm

# Instalando Cache Manager
$ npm install @nestjs/cache-manager cache-manager

# Instalando o Class Validator
$ npm i --save class-validator class-transformer
```
## Criando Módulos
```bash
# Criando módulos
$ nest g module user
$ nest g module state
$ nest g module city
$ nest g module address
$ nest g module cache 
$ nest g module 
```

## Criando Controllers
```bash
# Criando módulos
$ nest g controller user
$ nest g controller state
$ nest g controller city
$ nest g controller address
$ nest g controller  
```

## Criando Services
```bash
# Criando módulos
$ nest g service user
$ nest g service state
$ nest g service city
$ nest g service address
$ nest g service cache 
$ nest g service 
```
## Banco de Dados no Docker ( PostGres )

```bash
# Baixa a imagem do docker para postgres
$ docker pull postgres

# Criando uma instancia com a imagem baixada
# some-postgres = Nome da Instancia
# POSTGRES_PASSWORD = Senha do postgres
# 5432:5432 = porta que sera usada para comunicação com o Banco Postgres
# postgres = Nome da Imagem
$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres

```

## Criando as migrations

```bash
# criando a migration
$ npx typeorm migration:create ./src/migration/create_table_user
$ npx typeorm migration:create ./src/migration/create_table_state
$ npx typeorm migration:create ./src/migration/create_table_city
$ npx typeorm migration:create ./src/migration/create_table_address
$ npx typeorm migration:create ./src/migration/alter-table-state
$ npx typeorm migration:create ./src/migration/insert-in-state
$ npx typeorm migration:create ./src/migration/insert-in-city
```

## Links Úteis

* [Documentação do NEST.JS](https://docs.nestjs.com/cli/overview)
* [Utilizando o BCrypt com NEST.JS](https://docs.nestjs.com/security/encryption-and-hashing#hashing)
* [Caching com NestJS](https://docs.nestjs.com/techniques/caching)
* [Docker HUB - Imagem oficial PostGres](https://hub.docker.com/_/postgres)
* [PGAdmin - IDE para gerenciamento de dados do Postgres](https://www.pgadmin.org/)
* [Documentação do Class Validator - NESTJS](https://docs.nestjs.com/techniques/validation)

