var asyncAdd=(a,b)=>{
    return new Promise((resolve,reject)=>{
        console.log(a +':'+b);
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number')
               return resolve(a+b);
            else
               return reject('Arguments must be number');
        }, 2500);
    });
};

asyncAdd(5,4).then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
});
/*
var somePromise = new Promise((resolve,reject)=>{
 setTimeout(()=>{
    //resolve('Success');
    reject('rejected');
 },2500);   
});

somePromise.then((resolvedMessage)=>{
    console.log(resolvedMessage);
},(rejectedMessage)=>{
    console.log(rejectedMessage);
});
*/