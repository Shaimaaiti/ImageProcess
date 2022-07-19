import supertest from 'supertest';
import resize from '../../utilities/resize';
import getImagePath from '../../utilities/findPath';

describe('Tests for resize utility', () => {

    describe('function resize', () => {
        it("out put should be promise void", 
            function (done){
                async () => {
               const imageName="santamonica.jpg";
               const width=600;
               const height=400;  
               const newImageName = imageName.concat("_",width.toString(),"_",height.toString(),'.jpg');  
               const data =  await resize({path:imageName},`./src/thumb/${newImageName}`,{width:width,height:height});
               
                expect(typeof(data)).toEqual(typeof Promise<void>);
                }
                done();
 
         });
       
    });

    describe('function resize', () => {
        it("name of resized image should be like in thumb", 
            function (done){
                async () => {
               const imageName="santamonica.jpg";
               const width=600;
               const height=400;  
               const newImageName = imageName.concat("_",width.toString(),"_",height.toString(),'.jpg');  
                await resize({path:imageName},`./src/thumb/${newImageName}`,{width:width,height:height});

               const thumbDirectory =`src/thumb`;            
                                
               const data =  await getImagePath(thumbDirectory,newImageName);
               
                expect(typeof(data)).toEqual(newImageName);
                }
                done();
 
         });
       
   });
});