Feature: Login no SauceDemo

Scenario: Login com sucesso
  Dado que estou na página de login
  Quando insiro o usuário "standard_user"
  E insiro a senha "secret_sauce"
  E clico em "Login"
  Então devo ver a página de produtos

Scenario: Login com falha
  Dado que estou na página de login
  Quando insiro o usuário "standard_user"
  E insiro uma senha incorreta "wrong_password"
  E clico em "Login"
  Então devo ver uma mensagem de erro
