const db = require('../Models/schema.model');

exports.postCompanyProfile = async (req, res) => {
    try {
        const obj = await db.driver.create({
            name: req.body.name,
            city: req.body.city,
            goods: req.body.goods
        });
        res.send(obj);
        res.status(201);
    } catch (error) {
        res.send(err);
        res.status(400);
    }
}

exports.postDriverProfile = async (req, res) => {
    try {
        const obj = await db.driver.create({
            name: req.body.name,
            city: req.body.city,
            job: req.body.job,
            time: req.body.time
        });
        res.send(obj);
        res.status(201);
    } catch (error) {
        res.send(err);
        res.status(400);
    }
}

exports.getProfile = async (req, res) => {
    try {
        const name = req.body.name;
        const profile = await req.body.user === 'driver' ?
        db.driver.find({name}) :
        db.company.find({name});
        res.status(200);
        res.send(profile);

    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

exports.postJob = async (req, res) => {
    try {
        const obj = await db.driver.create({
            size: req.body.size,
            time: req.body.time,
            distance: req.body.distance,
            description: req.body.description
        });
        res.send(obj);
        res.status(201);
    } catch (error) {
        res.send(err);
        res.status(400);
    }
}