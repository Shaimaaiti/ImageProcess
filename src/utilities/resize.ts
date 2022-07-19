import path from 'path';
import sharp from 'sharp';
async function processImage (
    physicalFile: { path: string },
    destination: string,
    newSize: { width: number, height: number }
      ) 
   {
     const src = path.resolve(`./src/assets/${physicalFile.path}`);         
      await sharp(src)
      .resize(newSize.width, newSize.height)
      .toFile(path.resolve(destination), function(err){
        console.log(`error: ${err}`);
      });     
    
  }

  export default processImage;