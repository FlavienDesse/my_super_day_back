var express = require("express");
var router = express.Router();
var fetch = require('node-fetch')

const googleKey = process.env.GOOGLE_KEY;


router.get('/',async function (req, res) {
    let address=req.query.address;
    console.log(address)

    function getData() {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleKey}`)
    }

    const processData = async () => {
        const dataGetter = await getData()
        const responseData = await dataGetter.json()
        let data = {
            latitude: responseData.results[0].geometry.location.lat,

            longitude: responseData.results[0].geometry.location.lng
        };
        await res.json(data)
    }

    if (address === undefined){
        res.send(404);
    }else{
        await processData()
        res.end
    }

})

module.exports = router