import express from 'express';
import inputChecker from '../../middleware/inputChecker';

import  request  from "../../routes/api/images";
const base_url = "http://localhost:3000/api/images?fileName=fjord.jpg&height=600&width=300";
const urlmissed="http://localhost:3000/api/images?fileName=fjord.jpg&height=600&";
const urlnegative="http://localhost:3000/api/images?fileName=fjord.jpg&height=600&width=-300";

describe("input checker",  function() {
  describe(" input checker in GET / worked",  function() {
    it("returns status code 200", async function() {
       request.get(base_url,inputChecker,function(response:express.Response,_error:any,_body:unknown) {
        expect(response.statusCode).toBe(200);       
      });
    });   
  });
  describe(" input checker in GET / 400 missing param",  function() {
    it("returns status code 400", async function() {
       request.get(urlmissed,inputChecker,function(response:express.Response,_error:any,_body:unknown) {
        expect(response.statusCode).toBe(400);       
      });
     });

     it("returns response message :Missing Items", async function() {
        request.get(urlmissed,inputChecker,function(response:express.Response,_error:any,_body:unknown) {
         expect(response.statusMessage).toBe("Missing Items!");       
       });
      });

    });

    describe(" input checker in GET / 400 negative param",  function() {
        it("returns status code 400", async function() {
           request.get(urlnegative,inputChecker,function(response:express.Response,_error:any,_body:unknown) {
            expect(response.statusCode).toBe(400);       
          });
         });
    
         it("returns response message :negative param", async function() {
            request.get(urlmissed,inputChecker,function(response:express.Response,_error:any,_body:unknown) {
             expect(response.statusMessage).toBe("Values should be larger than zero!");       
           });
          });
    
        });
  
});