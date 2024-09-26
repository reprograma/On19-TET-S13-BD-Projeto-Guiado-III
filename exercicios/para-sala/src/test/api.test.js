const request = require("supertest");
const app = require("../app.js");

let elementId;

describe("API test", () => {
  test("Rota Get All - Lista Todos os cadastros", (done) => {
    request(app)
      .get("/gamestore/games/all")
      .expect(200)
      .expect((res) => {
        expect(res.body.lenght).not.toBe(0);
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
    });
  

    test("Rota Post - Cria novo Game", (done) => {
    request(app)
      .post("/gamestore/games/add")
      .expect("Content-Type", /json/) //DÚVIDA
      .send({
        name: "Elvira Bruno Teste",
        developer: "Mãe da Gi",
        releaseDate: 1978,
        genre: ["feminino"],
        mode:["Feliz"],
        available:true,
        description:"Teste Automação"
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        elementId = res.body.saveGame._id;
        return done();
      });
  });

  test("Rota Delete - Exclui um Game", (done) => {
    request(app)
      .delete(`gamestore/games/delete/${elementId}`)
      .expect("Content-Type", /json/) //DUVIDA
      .expect(200)
      .expect((res) => {
        console.log(res.body);
        expect(res.body.deleteGame.name).toBe
        ("Console updated");//DUVIDA
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});