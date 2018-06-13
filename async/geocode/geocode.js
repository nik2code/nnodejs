const request = require('request');

var getGeoAddress=(address, callback)=>{
    var address =  encodeURIComponent( address);
    request({
        //url:'https://maps.googleapis.com/maps/api/geocode/json?address=high%20life%20residency%20kamothe',
        url:'https://maps.googleapis.com/maps/api/geocode/json?address='+ address,
        json:true},
    (error,response,body)=>{
        if(error)
            callback('Unable to connect to google services');
        else if(body.status === 'ZERO_RESULTS')
            callback('Unable to find the address');
        else if(body.status === "OVER_QUERY_LIMIT")
            callback(body.error_message);
        //console.log(body);
        if(body.status == 'OK'  && response.statusCode ===200)
            callback(undefined,{
                address :body.results[0].formatted_address,
                lat : body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng,
            });
        //console.log(response.statusCode);
    });
};


module.exports.getGeoAddress =getGeoAddress;
