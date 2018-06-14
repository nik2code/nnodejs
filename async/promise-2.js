const request = require('request');

var geoCodeAddress =(address)=>{
return new Promise((resolve , reject)=>{
    var address =  encodeURIComponent( address);
    request({
        //url:'https://maps.googleapis.com/maps/api/geocode/json?address=high%20life%20residency%20kamothe',
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json:true},
    (error,response,body)=>{
        if(error)
            reject('Unable to connect to google services');
        else if(body.status === 'ZERO_RESULTS')
            reject('Unable to find the address');
        else if(body.status === "OVER_QUERY_LIMIT")
            reject(body.error_message);
        
        if(body.status == 'OK'  && response.statusCode ===200)
        {   
            console.log(body);
            resolve({
                address :body.results[0].formatted_address,
                lat : body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng,
            });
        }
        if(body.status ==='OVER_QUERY_LIMIT')
            reject(body.error_message);  
            
        //console.log(response.statusCode);
    });
});
};

geoCodeAddress('800001').then((location)=>{
    console.log('==>'+JSON.stringify(location,undefined,2));
},(errorMessage)=>{
    console.log('-->'+errorMessage);
});