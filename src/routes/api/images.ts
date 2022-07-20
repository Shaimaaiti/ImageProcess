import express from 'express';
import path from 'path';
import inputChecker from '../../middleware/inputChecker';
import resize from '../../utilities/resize';
import getImagePath from '../../utilities/findPath';

const images= express.Router();

images.get('/',inputChecker,async (req:express.Request,res:express.Response)=>{

    const fileName = req.query.fileName;
    const width= parseInt(req.query.width);
    const height= parseInt(req.query.height);
    if(fileName)
    {
       const assetsDirectory = path.join(__dirname,'../../','assets');       

       const thumbDirectory=path.join(__dirname,'../../','thumb');         
       const imageName = await getImagePath(assetsDirectory,fileName);
       console.log(imageName); 
       console.log("imageName type: "+typeof(imageName));

       if(imageName === fileName)
       {
        console.log("found"); 
        const newImageName = imageName.concat("_",req.query.width,"_",req.query.height,'.jpg');
        const resizedImageName = await getImagePath(thumbDirectory,newImageName);
        console.log(`resizedImageName: ${resizedImageName}`); 
        if(!resizedImageName)
        {
          console.log("resizing ....!")
          await resize({path:fileName},`${thumbDirectory}/${newImageName}`,{width:width,height:height});
          
        }       
          const src= path.join("/thumb",newImageName);
          res.send(`<img  width=${width} height=${height} src=${src} alt="${req.url} }"/> `); 
        
       }
       else{
        res.status(400).send("<h1>Please set correct image name <h1/>")
       }
    }
    
  
  });

export default images;  