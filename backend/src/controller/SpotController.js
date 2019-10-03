const Spot = require("../model/Spot");
const User = require("../model/User");

module.exports = {

    async index(req, res){
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech});

        return res.json(spots);
    },


    async store(req, res){
        if (!req.file) {
            res.status(400).json({error: "File doesn't exist."})
        }
        
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        console.log(req.file);

        const user = await User.findById(user_id);
        if (!user) {
            res.status(400).json({ error: "User doesn't exist."})
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price,
        });

        return res.json(spot);
    }
}