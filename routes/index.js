var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    console.log(req.oidc.isAuthenticated())
    res.render("index",{ title: "Express", 
    isAuthenticated:req.oidc.isAuthenticated() ,
    user: req.oidc.user
    });
});

router.get('/check',(req, res) => {
    res.send(req.oidc.isAuthenticated());
});

router.get('/profile',(req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});


module.exports = router;