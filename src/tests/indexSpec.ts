import express from 'express';


import  routes  from "../routes/index";
const base_url = "http://localhost:3000/api/";

describe("main route",  function() {
  describe(" main route in GET / working",  function() {

    it("returns status code 200", async function() {
       routes.get(base_url,function(response:express.Response,_error:any,_body:unknown) {
                   expect(response.statusCode).toBe(200);       
                  });
    }); 
    
    
    it("returns status Message", async function() {
        routes.get(base_url,function(response:express.Response,_error:any,_body:unknown) {
                    expect(response.statusMessage).toBe("hello project1");       
                   });
     }); 

 });

});   
  
