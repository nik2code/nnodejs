
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');


const argv = yargs
.option({
    a:{
        demand:true,
        alias:'address',
        describe:'address to fetch wheather info',
        string:true
    }
})
.help()
.alias('help','h')
.argv;

var address =argv.address;
geocode.getGeoAddress(address,(errorMessage , results)=>{
    if(errorMessage)
        console.log('error :'+ errorMessage);
    else
       {
            console.log(results.address);
            var lat = results.lat;
            var lng = results.lng;
            weather.getWeather(lat,lng,(error, weatherData)=>{
                if(error)
                    console.log(error);
                else
                    console.log(`It's currently ${weatherData.temperature}. ${weatherData.hourly_summary}`);
            });
       }
});


/*
const argv = yargs
.option({
    lat:{
        demand:true,
        alias:'latitude',
        describe:'latitude',
        string:true
    }
})
.option({
    lng:{
        demand:true,
        alias:'langitude',
        describe:'langitude',
        string:true
    }
})
.help()
.alias('help','h')
.argv;
*/
//console.log(argv);
//https://darksky.net/dev/account
