let menu = ""
let qtd_imoveis = 0
const imoveis = []
do{
    qtd_imoveis
    imoveis
    menu = prompt(`Olá! Seja bem vindo!\nImóveis cadastrados: ${qtd_imoveis}\n\n1- Cadastrar um novo imóvel\n2- Imóveis já cadastrados\n3- Sair`);

    switch(menu){
        case "1":

                const imovel = {}
                
                imovel.nome = prompt("Informe seu nome: ")
                imovel.qntd_quartos = parseFloat(prompt("Quantidade de quartos do imóvel: "))
                imovel.qntd_banheiros = parseFloat(prompt("Quantidade de banheiros do imóvel: "))
                imovel.garagem = prompt("Imóvel possui garagem: (s/n)")
                
                let confirmacao = confirm(`Deseja salvar este imóvel?\nNome do proprietário: ${imovel.nome}\nQuantidade de quartos: ${imovel.qntd_quartos}\nQuantidade de banheiros: ${imovel.qntd_banheiros}\nPossui garagem: ${imovel.garagem}\n`)
                
            if(confirmacao){
                imoveis.push(imovel)
                alert(`Seu imóvel foi salvo com sucesso!`)
                qtd_imoveis += 1
            }
            else{
                alert(`Voltando ao menu inicial!`)
                continue
            }
            break
        case "2":
                for(let i = 0; i< imoveis.length; i++){
                    alert(`Imóvel ${i+ 1}\nNome do proprietário: ${imoveis[i].nome}\nQuantidade de quartos: ${imoveis[i].qntd_quartos}\nQuantidade Banheiros: ${imoveis[i].qntd_banheiros}\nPossui garagem: ${imoveis[i].garagem}`)
                }
            break
        case "3":
            alert(`Saindo...`)
            break
        default:
            alert(`Escolha uma opção válida!`)
    }      

}while(menu !== "3")
console.log(imoveis)