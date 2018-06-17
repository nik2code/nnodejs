const request = require('request');

var geoCodeAddress = (address) =>{
    return new Promise((resolve , reject)=>{
        console.log(address);
        
    });
};

geoCodeAddress('mumbai').then((location)=>{
    console.log('==>'+JSON.stringify(location,undefined,2));
},(errorMessage)=>{
    console.log('-->'+errorMessage);
});