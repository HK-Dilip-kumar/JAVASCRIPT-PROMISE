const applyDiscount = new Promise(function(resolve, reject){

    //RESOLVE IS GOING TO EXECUTE WHEN THE FUNCTION IS SUCCESSFULL
    //REJECT IS EXECUTE WHEN FUNCTION OR TASK IS FAILED

    const discount = true;

    if(discount){
        resolve('Discount Applied');
    }else {
        reject('Dsicount failed');
    }
});

applyDiscount.then(function(result){
    console.log(result);
}).catch(function(result){
    console.log(result);
});

console.log(applyDiscount);
