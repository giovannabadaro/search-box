#  🚀 Search box Mercado libre

 
## _Este repositório contém o front end do teste_
 ##### 📌  Caso queira acessar o Back For Front End, [clique aqui](https://github.com/giovannabadaro/bff-search-box)
 

## ✨ Features

- (View) Caixa de pesquisa, no qual o usuário pode digitar qualquer palavra chave **em espanhol**
- (View) Lista de produtos correspondente a pesquisa **limitado a 4 items**
- (View) Descrição de detalhada de um item correspondente
- (Component) Loaders de espera de carregamento do conteúdo
- (Component) Compoente para alerta de erro

> Esse projeto foi contruído pensando em Performance, SEO, Usabilidade e Escalabilidade

##### Corresponde a esses pilares, temos: 
- Usabilidade:
    - Esse projeto foi contruído utilizando o método mobile first, toda media query, tem a sintaxe ``min-width``
    - O projeto tem suporte de dispositivos mobile de no min 320px e web no max 3000px
    - Esse projeto também conta com suporte de acessibilidade, no qual foram incluídos atributos do tipo ``aria`` e ``alt``
- SEO
    - Esse projeto conta com performance de SEO, seguindo padrões de web semântica
    - O projeto também conta com tags do tipo ``meta``, e utiliza a biblioteca Open Graph
    
- Performance
    - Toda a arquitetura do projeto foi pensada envolvendo o ciclo de renderização do React
    - Em produção foi utilizado o plugin MiniCssExtractPlugin, adicionado ao webpack, para que  ele crie um arquivo CSS por arquivo JS contendo CSS. 
    - Também foi acrescentada a estratégia de lazy loading
    - Também está sendo utilizado a versão mais atualizada do webpack, que é a v5
    
- Escalabilidade
    - Toda a arquitetura do projeto foi pensada pra crescer de forma escalável, tais como a separação de pastas: rotas, components reutilizáveis e etc..
##  🖥 Tech
- React
- Node
- Sass
- WebPack
- Eslist
- Prettier


## Installation

Você precisa ter o node intalado em sua maquina [Node.js](https://nodejs.org/) v16+

Rode os comandos com ``npm`` ou ``yarn``

```sh
yarn install
yarn start
```


## License

MIT
