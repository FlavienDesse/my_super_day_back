const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    // Save User to Database
    await User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        birthDate: req.body.birthDate,
        homeAddress: req.body.homeAddress,
        workAddress:req.body.workAddress,
    }).then((res)=>{
        res.send({
            message: "Compte créé"
        })
    })
        .catch(err => {
            res.status(500).send({ message: "Erreur interne du serveur" });
        });



};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({message: "Nom de compte ou mot de passe invalide"});
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Nom de compte ou mot de passe invalide"
                });
            }

            var token = jwt.sign({id: user.id}, config.secret, {
                expiresIn: 7200//1 heure
            });


            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                accessToken: token
            });


        }) .catch(err => {
            res.status(500).send({ message: err.message });
        });
};