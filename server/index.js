const express = require('express')
const cors=require('cors')
const app = express()
const port = 3001
const bodyParser=require('body-parser')
const mongoose = require('mongoose');

app.use(cors())
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

const Sayt= new mongoose.Schema({
    names:String,
 
    texts:String,
    
    imageURL:String
})
const His = new mongoose.model('His',Sayt);
app.get("/api/sayt",async(req,res)=>{
    const { names } = req.query;
    const authors = await His.find();
    if (!names) {
      res.status(200).send(authors);
    } else {
      const searchedAuthors = authors.filter((x) =>
        x.names.toLowerCase().trim().includes(names.toLowerCase().trim())
      );
      res.status(200).send(searchedAuthors);
    }
})
app.get("/api/sayt/:id",async(req,res)=>{
    const id=req.params.id
    const sayts= await new His.findById(id)
    res.send(sayts)
})
app.post("/api/sayt",async(req,res)=>{
    const{names,title,texts,like,comment,imageURL} =req.body
    const Say= new His ({
        names:names,
        title:title,
        texts: texts,
        like:like,
        comment:comment,
        imageURL:imageURL

    })
   await Say.save()
    res.send(Say)

})
app.delete("/api/sayt/:id",async(req,res)=>{
    const id=req.params.id
    const deleted = await His.findByIdAndDelete(id);
   
    res.send(deleted)
 })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect('mongodb+srv://mleyla:lyla2003@authors.08rrrds.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Mongo DB connected!");
  });