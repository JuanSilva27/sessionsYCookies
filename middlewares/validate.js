const {check}= require("express-validator")

module.exports=[
    check("name")
        .notEmpty().withMessage("Debe ingresar tu nombre").bail(),
    check("color")
        .notEmpty().withMessage("Debes elegir un color"),
    check("mail")
        .notEmpty().withMessage("Debes ingresar tu Email").bail()
        .isEmail().withMessage("Debes ingresar un mail Valido"),
    check("age")
        .notEmpty().withMessage("Debes ingresar tu Edad").bail()
        .isInt().withMessage("Debes ingrasar un numero"),
]