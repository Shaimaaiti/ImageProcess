import express, { NextFunction } from 'express';
const inputChecker =(req:express.Request,res:express.Response,next:NextFunction)=>{
   
  if('width' in req.query && 'height' in req.query)
  {
    const width= parseInt(req.query.width);
    const height= parseInt(req.query.height);
    if(width>0 && height>0)
    {
        console.log("passed");
        next();
    }
    else{
        res.status(400).send('Values should be larger than zero!')
        res.end();
    }
  }
  else{
       res.status(400).send('Missing Items!')
       res.end();
     }   
     
  };
  
  export default inputChecker;