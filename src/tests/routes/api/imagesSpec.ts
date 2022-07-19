import express from 'express';

import  images  from "../../../routes/api/images";
import inputChecker from '../../../middleware/inputChecker';

const base_url = "http://localhost:3000/api/images?fileName=fjord.jpg&height=600&width=300";
const imageNotFound= "http://localhost:3000/api/images?fileName=notindir.jpg&height=600&width=300";

describe("image Api",  function() {
  describe(" Image Api working",  function() {

    it("returns status code 200", async function() {
       images.get(base_url,inputChecker,function(response:express.Response,_error:any,_body:unknown) {
                   expect(response.statusCode).toBe(200);       
                  });
    }); 
    
describe(" Image Api bad request",  function() {
            it("returns Please set correct image name", async function() {
                images.get(imageNotFound,function(response:express.Response,_error:any,_body:unknown) {
                            expect(response.statusMessage).toBe("<h1>Please set correct image name <h1/>");       
                            });
                });

                it("returns status code 400", async function() {
                    images.get(imageNotFound,function(response:express.Response,_error:any,_body:unknown) {
                                expect(response.statusCode).toBe(400);       
                                });
                    });
     
       });

 });

});   
  
