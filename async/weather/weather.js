const request = require('request');

var getWeather =(lat,lng,callback)=>{

    request({
        url:`https://api.darksky.net/forecast/d5819aff04b050aa5318754ed37b2fca/${lat},${lng}`,
        json:true
    },(error , response , body)=>{
        if(error)
            callback(error);
        else if(response.statusCode === 400 )
        {
            callback('unable to fetch data');
        }
        else if(response.statusCode === 200 )
        {
            callback(undefined,{
                temperature :  body.currently.temperature,
                hourly_summary : body.hourly.summary
            });
        }
        //console.log(body.currently);
    });
};

module.exports.getWeather = getWeather;