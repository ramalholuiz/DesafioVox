Funcionalidade: Login no SauceDemo

  Cenário: Login com sucesso
    Dado que estou na página de login
    Quando insiro o usuário "standard_user"
    E insiro a senha "secret_sauce"
    E clico em "Login"
    Então devo ver a página de inventário
  
  Cenário: Login com senha inválida
    Dado que estou na página de login
    Quando insiro o usuário "standard_user"
    E insiro uma senha incorreta "wrong_password"
    E clico em "Login"
    Então devo ver uma mensagem de erro
  
  Cenário: Login com nome de usuário inválido
    Dado que estou na página de login
    Quando insiro o usuário "invalid_user"
    E insiro a senha "secret_sauce"
    E clico em "Login"
    Então devo ver uma mensagem de erro
  
  Cenário: Login sem inserir credenciais
    Dado que estou na página de login
    Quando clico em "Login"
    Então devo ver uma mensagem de erro
  
  Cenário: Logout
    Dado que estou logado com "standard_user" e "secret_sauce"
    Quando clico no menu
    E clico em "Logout"
    Então devo ser direcionado para a página de login

  Cenário: Login usando Enter
    Dado que estou na página de login
    Quando insiro o usuário "standard_user"
    E insiro a senha "secret_sauce"
    E pressiono Enter
    Então devo ver a página de inventário