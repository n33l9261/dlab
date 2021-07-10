// let chai = require("chai");
// let chaiHttp = require("chai-http");
import chaiHttp from 'chai-http'
import chai from 'chai';
import server from "../server.js"

//Assertion style
chai.should()

chai.use(chaiHttp);
// mentee signin


describe('mentee signin', ()=>{
    //test sigin in with correct values
    describe("singin with correct values", ()=>{
        it("status code should be 200",(done)=>{
              chai.request(server)
            .post("/api/users/mentee/signin-mentee")
            .send({
                email : "shuvrodas@yahoo.com",
                password : "123"
            })
            .end((err,response)=>{
                response.should.have.status(200);
                done()
            })
        })
    })
    //test sigin in with incorrect values
    describe("singin with wrong values", ()=>{
        it("status code should be 401",(done)=>{
              chai.request(server)
            .post("/api/users/mentee/signin-mentee")
            .send({
                email : "random@random.com",
                password : "123"
            })
            .end((err,response)=>{
                response.should.have.status(401);
                done()
            })
        })
    })
})


describe('organize', ()=>{
    //organize with correct date
    describe("Organize with correct values", ()=>{
        it("status code should be 200",(done)=>{
              chai.request(server)
            .post("/api/users/session/organize-session")
            .send({
                sessionName: "Some Session",
                DateInfo: "11 July 2021",
                Price: "800",
                Referral: true,
                Test: true,
                Interview: true,
                multipleOrganizers: false,
                multipleStudents: false,
                Testlink: "suvraneel.com",
                Organizers: "Suvraneel Chatterjee",
                Participants: "22",
            })
            .end((err,response)=>{
                response.should.have.status(200);
                done()
            })
        })
    })
   //organize with wrongdate
   describe("Organize with incorrect values", ()=>{
    it("status code should be 401",(done)=>{
          chai.request(server)
        .post("/api/users/session/organize-session")
        .send({
            sessionName: "Some Session",
            DateInfo: "05 July 2021",
            Price: "800",
            Referral: true,
            Test: true,
            Interview: true,
            multipleOrganizers: false,
            multipleStudents: false,
            Testlink: "suvraneel.com",
            Organizers: "Suvraneel Chatterjee",
            Participants: "22",
        })
        .end((err,response)=>{
            response.should.have.status(401);
            done()
        })
    })
})
   //get all sessions
   describe("Get all sessions", ()=>{
    it("status code should be 200",(done)=>{
          chai.request(server)
        .get("/api/users/session/findsession")
     
        .end((err,response)=>{
            response.should.have.status(200);
            done()
        })
    })
})
 //get all sessions
 describe("Get all sessions", ()=>{
    it("status code should be 200",(done)=>{
          chai.request(server)
        .get("/api/users/session/findsession")
     
        .end((err,response)=>{
            response.should.have.status(200);
            done()
        })
    })
})

describe("Starting session at correct time", ()=>{
    it("status code should be 200",(done)=>{
          chai.request(server)
        .get("/startsessions?id=60d8bdcc77ecd76f9d9c1321")
     
        .end((err,response)=>{
            if(err){
                console.log(err);
            }
            response.should.have.status(200);

            done()
        })
    })
})
describe("Starting session at incorrect time", ()=>{
    it("status code should be 401",(done)=>{
          chai.request(server)
        .get("/startsessions?id=60d8bdfa77ecd76f9d9c2617")
     
        .end((err,response)=>{
            if(err){
                console.log(err);
            }
            response.should.have.status(401);

            done()
        })
    })
})


describe("Joining live session", ()=>{
    it("status code should be 200",(done)=>{
          chai.request(server)
        .get("/joinsessions?id=60e851c3c675ab05d4b13f51")
     
        .end((err,response)=>{
            if(err){
                console.log(err);
            }
            response.should.have.status(200);

            done()
        })
    })
})

describe("Joining not yet live session", ()=>{
    it("status code should be 401",(done)=>{
          chai.request(server)
        .get("/joinsessions?id=60e84f41a78fe75044081c71")
     
        .end((err,response)=>{
            if(err){
                console.log(err);
            }
            response.should.have.status(401);

            done()
        })
    })
})

describe("Payment success", ()=>{
    it("status code should be 200",(done)=>{
          chai.request(server)
        //   var a = 'id={"_id":"60cf6faa35b76a3a62edb789","name":"shuvro","email":"shuvrodas@yahoo.com","password":"$2a$08$UEIqg0wY3neJx/TIOc3EBeKDaZ8Q44bdotPBwKPLZ2rBKpJWdo1tm","mobilenumber":"08697446270","instituteName":"IEM","enrollmentNumber":"123012458796552","address":"Kestopur","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGNmNmZhYTM1Yjc2YTNhNjJlZGI3ODkiLCJuYW1lIjoic2h1dnJvIiwiZW1haWwiOiJzaHV2cm9kYXNAeWFob28uY29tIiwiaWF0IjoxNjI1ODU2MjkxLCJleHAiOjE2Mjg0NDgyOTF9.Rq8-9GrRWlUrlBciR7YP8a5iBTOXAPyxL4wAr6utfXA"}&id2=60d8bdcc77ecd76f9d9c1321'
        .post("/success?id={%22_id%22:%2260cf6faa35b76a3a62edb789%22,%22name%22:%22shuvro%22,%22email%22:%22shuvrodas@yahoo.com%22,%22password%22:%22$2a$08$UEIqg0wY3neJx/TIOc3EBeKDaZ8Q44bdotPBwKPLZ2rBKpJWdo1tm%22,%22mobilenumber%22:%2208697446270%22,%22instituteName%22:%22IEM%22,%22enrollmentNumber%22:%22123012458796552%22,%22address%22:%22Kestopur%22,%22token%22:%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGNmNmZhYTM1Yjc2YTNhNjJlZGI3ODkiLCJuYW1lIjoic2h1dnJvIiwiZW1haWwiOiJzaHV2cm9kYXNAeWFob28uY29tIiwiaWF0IjoxNjI1ODU2MjkxLCJleHAiOjE2Mjg0NDgyOTF9.Rq8-9GrRWlUrlBciR7YP8a5iBTOXAPyxL4wAr6utfXA%22}&id2=60d8bdcc77ecd76f9d9c1321")
     
        .end((err,response)=>{
            if(err){
                console.log(err);
            }
            response.should.have.status(200);

            done()
        })
    })
})

//failure of payment is handled by razor pay


})