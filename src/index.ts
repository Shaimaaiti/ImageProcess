import express from 'express';

import routes from './routes/index'
const app= express();
const port= 3000;
app.use(express.static('src'));

app.use('/api',routes);



app.listen(port,()=>{

    console.log(`Server express started at http://localhost:${port}`);
  });