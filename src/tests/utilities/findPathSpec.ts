import supertest from 'supertest';
import getImagePath from '../../utilities/findPath';

describe('Tests for findPath utility', () => {

    describe('function getImagePath', () => {
        it("out put should be string", 
            function (done){
                async () => 
             {
                const assetsDirectory =`src/assets`;                   
                const imageName="santamonica.jpg";                  
                const data =  await getImagePath(assetsDirectory,imageName);
                
                    expect(typeof(data)).toEqual(typeof String);
            }
             done();
 
         });

         it("out put should be image name", 
            function (done){
                async () => 
             {
                const assetsDirectory =`src/assets`;               
                const imageName="santamonica.jpg";                 
                const data =  await getImagePath(assetsDirectory,imageName);
                
                    expect(data).toEqual(imageName);
            }
             done();
 
         });
         it("out put should be image of thumb directory", 
         function (done){
             async () => 
          {   
             const thumbDirectory=`src/thumb`;  
             const imageName="santamonica.jpg_500_400.jpg";              
             const data =  await getImagePath(thumbDirectory,imageName);
             
                 expect(data).toEqual(imageName);
         }
          done();

      });
    });
});