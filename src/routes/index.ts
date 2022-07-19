import express from 'express'; 
import images from './api/images';  
const routes = express.Router();


  
routes.use('/images', images);

routes.get('/api',(req:express.Request,res:express.Response)=>{
  res.send('hello project1');

});

export default routes;