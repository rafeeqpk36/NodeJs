const express=require('express');
const bodyParser=require('body-parser');
const promoRouter=express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("will return the promotions")
})
.post((req,res,next)=>{
    res.end("will add the promotions: " + req.body.name + "withe details: " + req.body.description)
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("PUT not supported");
})
.delete((req,res,next)=>{
    res.end("delete the promotions")
});

promoRouter.route('/:promoId')
.get((req,res,next) => {
    res.end('Will send details of the promo: ' + req.params.promoId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})

.put((req, res, next) => {
  res.write('Updating the promo: ' + req.params.promoId + '\n');
  res.end('Will update the promo: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting promo: ' + req.params.promoId);
});

module.exports=promoRouter;