const {validationResult}=require("express-validator")


module.exports={
    index: function (req,res) {
        res.render('index');
      },

    validarRegister: (req,res)=>{
        const errors= validationResult(req)
        
        if(errors.isEmpty()){
            const{name,color,mail,age}=req.body

            req.session.bgColor=color
            res.locals.bgColor=color
            req.session.userName= name

            if(req.body.recordar !== undefined){
                res.cookie("color",color, {maxAge: 60*1000})
            }

            res.render("index",{name,color,mail,age})
        }
        else{
            res.render("index",{errors:errors.mapped(),old:req.body})
        }
    },
    user:(req,res)=>{
        res.locals.bgColor = req.session.bgColor
        res.render("user", {userName: req.session.userName})
    },
    destroy: (req,res)=>{
        req.session.destroy()
        res.cookie("color", null , {maxAge: -1})
        res.redirect("/")
    }
}