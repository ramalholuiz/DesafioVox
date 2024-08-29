Funcionalidade: Adicionar produtos ao carrinho

    Cenário: Adicionar um produto ao carrinho
        Dado que estou logado com "standard_user" e "secret_sauce"
        Quando adiciono o produto "Sauce Labs Backpack" ao carrinho
        Então o carrinho deve conter 1 item

    Cenário: Adicionar múltiplos produtos ao carrinho
        Dado que estou logado com "standard_user" e "secret_sauce"
        quando adiciono os produtos "Sauce Labs Backpack" e "Sauce Labs Bike Ligth"
        Então o carrinho deve conter 2 itens

    Cenário: Remover um produto do carrinho
        Dado que estou logado com "standard_user" e "secret_sauce"
        E adiciono o produto "Sauce Labs Backpack" ao carrinho
        Quando removo o produto "Sauce Labs Backpack" do carrinho
        Então o carrinho deve estar vazio