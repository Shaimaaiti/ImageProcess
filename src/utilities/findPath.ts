import  fs from 'fs';


async function getImagePath(directory: string, fileName:string): Promise<string> {
    try{
           const paths = await fs.promises.readdir(directory, { withFileTypes: true});
           const data = paths.map((item)=>{
               console.log(item);
               return item.name;               
           }); 
            console.log(data);   
            let found;
         
          for (const el of data) {
                if (el == fileName) 
                { found = el;
                break;
                }
        }
            console.log("after return : "+found);
            console.log("file return : "+fileName);
            return found as string;
        
          
       }
       catch(error)
       {
            console.log(error);
            return "";
       }
   }
export default getImagePath;