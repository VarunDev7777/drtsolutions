const serviceModel = require("../models/services.model");

module.exports = {
    getHome: async (req, res, next) => {
        const Services = await serviceModel
        .find({})
        .sort({$natural: 1})
        res.render('index',{ServiceCards: Services})
    },

    getAbout: (req, res, next) => {
        res.render("About");
    },

    getProduct: (req, res, next) => {
        res.render("ProductPage");
    },

    getContactUs: (req, res, next) => {
        res.render("contact-us");
    },

    getBlog: (req, res, next) => {
        res.render("BlogPage");
    },

    getBulkOrder: (req, res, next) => {
        res.render("BulkOrders");
    },

    getLogout: (req, res, next) => {
        req.logout();

        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            }
            res.redirect("/");
        });
    },

    postHome: (req, res, next) => {
        const cardDB = req.body
        serviceModel.create(cardDB, (err, data) => {
            if(err){
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        })
    }
}