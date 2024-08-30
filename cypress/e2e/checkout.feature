# language: pt
Funcionalidade: Finalizar compra

    Cenário: Finalizar compra com sucesso
        Dado que estou logado com "standard_user" e "secret_sauce"
        E adiciono o produto "Sauce Labs Backpack" ao carrinho
        Quando inicio o processo de checkout
        E preencho as informações de envio com "usuario", "Rua A", "12345"
        E confirmo a compra
        Então devo ver a mensagem de sucesso da compra
    
    Cenário: Finalizar compra sem preencher informações de envio
        Dado que estou logado com "standard_user" e "secret_sauce"
        E adiciono o produto "Sauce Labs Backpack" ao carrinho
        Quando inicio o processo de checkout
        E não preencho as informações de envio
        Então devo ver uma mensagem de erro