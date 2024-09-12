const request = require("supertest");
const app = require("../app.js");

let elementId;

describe("API test", () => {
    test("Rota Get /games/list", (done) => {
        request(app)
        .get("/gamesdoceu/games/list")
        .expect(200)
        .expect((res) => {
            expect(res.body.lenght).not.toBe(0);
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    });
    let elementId
    test("Rota Post /console/create", (done) => {
        request(app)
        .post("/gamesdoceu/consoles/new")
        .expect("Content-Type", /json/)
        .send({
            name: "Console Test",
            developer: "Sky do Céu",
            releaseDate: 2022,
            dysplay: ['4k'],
            storageCapacities: ["1T"],
            numberOfPlayers: [1],
            available: true
        })
        .expect(201)
        .end((err, res) => {
            if(err) return done(err);
            elementId = res.body.savedConsole._id;
            return done();
        })
    });/*
    test("Rota Patch /console/update/:id", (done) => {
        request(app)
        .patch(`/gamesdoceu/consoles/update/${elementId}`)
        .expect("Content-Type", /json/)
        .send({name: "Console updated"})
        .expect(200)
        .expect((res) => {
            console.log (res.body)
            expect(res.body.updateConsole.name).toBe("Console updated");
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        })
    })
    test("Rota Delete /consoles/delete/:id", (done) => {
        request(app)
        .delete(`/gamesdoceu/consoles/delete/${elementId}`)
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            console.log(res.body)
            expect(res.body.deleteConsole.name).toBe("Console updated");        
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });*/
});