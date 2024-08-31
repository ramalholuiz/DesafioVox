# Saucedemo Automation

## Projeto: Desafio Técnico Vox Tecnologia - Vaga QA Pleno
**Autor:** Luiz Henrique Ramalho Diniz Ribeiro  
**Data:** 29/08/2024

---

## Descrição
Este projeto foi desenvolvido como parte de um desafio técnico para a vaga de QA Pleno. O objetivo é demonstrar habilidades em automação de testes, utilizando **Cypress** e **Cucumber**  no site *SauceDemo*.

## Ferramentas e Tecnologias
- **Cypress 13.14.1**: Automação de testes.
- **cypress-cucumber-preprocessor@4.3.1**: Escrita de cenários de teste em Gherkin.
- **Node.js 22.7.0**: Gerenciamento de pacotes e execução do projeto. [Download Node.js](https://nodejs.org/)

## Estrutura
O projeto está organizado para facilitar a adição de novos testes e cenários, seguindo boas práticas de automação e qualidade de código.


## Passos para Execução

### 1. Clonar o Repositório

Clone o repositório do projeto em sua máquina local:
1. Crie uma pasta onde queira que seja baixado a pasta projeto.
2. Aperto o botão direito do mouse.
3. selecione a opcão " Open Git Bash here " e cole o comando abaixo.

```bash
git clone https://github.com/ramalholuiz/DesafioVox.git
cd DesafioVox
```

### 2. Instalar os pacotes necessarios

Baixe os pacotes do Cypress e Cucumber:

```bash
npm install
```
### 3. Executar Testes

Para abrir a interface do Cypress :

```bash
npx cypress open
```
Ou, caso queira executar os testes em modo headless

```bash
npm run test
```
