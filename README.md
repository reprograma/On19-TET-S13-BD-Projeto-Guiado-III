##   Apresentação

 Olá, meu nome é Gaia Maria. Sou uma travesti graduada em História Licenciatura (UNESP) e graduanda em Análise e Desenvolvimento de Sistemas (Faculdade Descomplica). Sou uma Bruxa devota a Hecate, ocultista e pagã. Tambem sou uma pessoa neurodiversa, gamer, viciada em RPG e desenvolvedora.

###  👩🏽‍🏫 recadinhos 
    - Bebam água meninas
    - Qualquer pergunta é válida, principalmente aquela que a gente pensa que não faz sentido.
    - Deixe a camera ligada
    
### 📑 Conteúdo da Aula

    - Revisão
    - Projeto Guiado
## 🛠️Tecnologias utilizadas:

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass ou Mongo Atlas` | Interface gráfica para verificar se os dados foram persistidos|
 `Thunder Client ou Postman` | Interface gráfica para realizar os testes|
 <br>

 ## 🗂️ Arquitetura  
 ````  
   📁 jogos-API-DB  
   |  
   |-  📁 src    
   |    |
   |    |- 📁 database  
   |         |- 📄 mongooseConnect.js  
   |
   |    |- 📁 controllers  
   |         |- 📄 consolesController.js  
   |         |- 📄 gamesController.js  
   |  
   |    |- 📁 models  
   |         |- 📄 consolesModel.js  
   |         |- 📄 gamesModel.js  
   |  
   |    |- 📁 routes  
   |         |- 📄 consolesRoutes.js   
   |         |- 📄 gamesRoutes.js     
   |    |- 📄 app.js
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore  
   |- 📄 package-lock.json  
   |- 📄 pakage.json  
   |- 📄 README.md  
   |- 📄 server.js  
````

<br>

## 🌐Dados para Collection Consoles

- **_id**: autogerado e obrigatório
- **name**: texto e obrigatório (*unico*)
- **developer**: texto e obrigatorio
- **releaseData**: number e obrigatorio
- **display**: array, texto e obrigatorio
- **storageCapacities**: array, texto e obrigatorio
- **numberOfPlayers**: array numerico e obrigatorio
- **available**: boolean e obrigatorio
- **description**: texto e opcional
  
 <br>

### 🖨️ API deve retornar seguinte JSON:
```javascript
[
  {
    "_id":new ObjectId("62b0c3860a5912f473d73c0f"),
    "name":"PlayStation 4",
    "developer":"Sony Computer Entertainment",
    "releaseData":{"2013"},
    "display":["480p","720p","1080p","4K"],
    "storageCapacities":["500GB","1TB","2TB"],
    "numberOfPlayers":[{"1","2","3","4"}],
    "available":true,
    "description":"The PlayStation 4 (PS4) is a home video game console developed by Sony Computer..."
     __v: 0
},
{
    "_id":new ObjectId("62b0c4860a5912f473d73c11"),
    "name":"Xbox One",
    "developer":"Microsoft",
    "releaseData":{"2013"},
    "display":["720p","1080p","1440p","4K"],
    "storageCapacities":["500GB","1TB"],
    "numberOfPlayers":["1","2","3","4"],
    "available":true,
    "description":"The Xbox One is a home video game console developed by Microsoft..."
     __v: 0
},
{
    "_id":new ObjectId("62b0c6110a5912f473d73c13"),
    "name":"Nintendo Switch",
    "developer":"Nintendo PTD",
    "releaseData":{"2017"},
    "display":["480p","720p","1080p"],
    "storageCapacities":["34GB","64TB"],
    "numberOfPlayers":["1","2"],
    "available":false,
    "description":"The Nintendo Switch is a video game console developed by Nintendo..."
     __v: 0
  }
]
```
<br>
<br>


## 🌐 Dados para Collection Games
- **_id**: autogerado e obrigatório
- **name**: texto e obrigatório (*unico*)
- **developer**: texto e obrigatorio
- **releaseData**: number e obrigatorio
- **genre**: array, texto e obrigatorio
- **mode**: array, texto e obrigatorio
- **available**: boolean e obrigatorio
- **description**: texto e opcional
- **idConsole**: id do console e obrigatorio
  
<br>

### 🖨️ API deve retornar seguinte JSON:
```javascript
[
  {
    "_id": new ObjectId( "62b0df5fa494af18319efae7"),
    "name": "God of War",
    "developer": "Santa Monica Studio",
    "releaseData": 2018,
    "genre": ["Action-adventure","hack and slash"],
    "mode": ["Single-player"],
    "available": true,
    "description": "While the first seven games were loosely based on Greek mythology...",
    "console": new ObjectId(62b0c3860a5912f473d73c0f)"
     __v: 0
  },
  {
    "_id:" new ObjectId("62b0e168a494af18319efaea"),
    "name": "Halo: The Master Chief Collection",
    "developer": "343 Industries",
    "releaseData": 2014,
    "genre": ["First-person","shooter"],
    "mode": ["Single-player","multiplayer"],
    "available": true,
    "description": "Is a compilation of first-person shooter video games...",
    "console": new ObjectId("62b0c4860a5912f473d73c11"),
  },
  {
    "_id:" new ObjectId("62b0e20da494af18319efaed"),
    "name": "Pokémon Legends: Arceus",
    "developer": "Game Freak",
    "releaseData": 2022,
    "genre": ["Action role-playing"],
    "mode": ["Single-player"],
    "available": true,
    "description": "Arceus is a 2022 action role-playing game developed by Game Freak...",
    "console": new ObjectId("62b0c6110a5912f473d73c13"),
  }
]
````

## 📖 Referências
- https://www.gartner.com/en/information-technology/glossary/object-data-model
- https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/mongoose
- https://docs.mongodb.com/
- https://docs.mongodb.com/manual/crud/
- https://docs.atlas.mongodb.com/tutorial/create-new-cluster/
- https://studio3t.com/academy/topic/mongodb-vs-sql-concepts/
- https://mongoosejs.com/docs/index.html

### 🎥 Videos de apoio

- [Resumo Mongodb - Codigo Fonte TV](https://www.youtube.com/watch?v=4dTI1mVLX3I)
- [nodeJs Express Mongo - Api rest full Turitorial](https://www.youtube.com/watch?v=K5QaTfE5ylk)
- [O que é banco de dados? - Curso em Video](https://www.youtube.com/watch?v=Ofktsne-utM)

##  🎓 Para Casa

Oie maravilhosas, vamos de tarefinha.
Essa semana vocês foram salvas pela Jani, agradeçam muito a ela kkkkkkk Então vamos la:  
* Termine o codigo, caso tenha faltado alguma informação;
* Crie uma rota **GET** que encontre um jogo usando como parametro  *name* (crie a logica na pasta controller);
* Crie uma rota **GET** que encontre um console usando como parametro *available* (crie a logica na pasta controller);
* Cadastre no seu banco de dados um novo jogo e/ou um novo console (a sua escolha), tire um print da tela e adicione essa imagem no seu **README.md** isso servirá como comprovante pessoal de que todo seu codigo esta funcionando. 
* Opicional (não conta como avaliação): Crie uma **rota GET** para *genre* em jogos e uma **rota GET** para *developer* em consoles.

##  Minhas redes sociais
 - [LINKEDIN](https://www.linkedin.com/in/gaia-maria/)
 - [GITHUB](https://github.com/Gaia-Maria)


## Link para os testes
 - [TESTES](https://youtu.be/X3gmouE0miY)
 - [Contrate a dev](https://www.linkedin.com/in/skyalarcon/)

<br>
<br>
<p align="center"> 👾 FIM DO ALGORITMO 👾  </p>
<p align="center">
  <img src="https://media3.giphy.com/media/JUSwkiO1Eh5K43ruN0/giphy.gif" width= "400" height="200"/>
</p>
<br>

