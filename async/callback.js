var getUser = (userId,callback) =>{
    var user ={
        Id: userId,
        Name : "Nitesh Kumar"
    };

    setTimeout(() => {
        callback(user);    
    }, 3000);
};

getUser(31,(userObj)=>{
    console.log(userObj.Id +':'+userObj.Name);
});