// JavaScript File
function asyncMap2(yourArr, yourFunction) {
    return new Promise(function(resolve) {
        var chain = Promise.resolve();
        var results = [];
        yourArr.forEach((function(it, ind, arr) {
            chain = chain
                .then(() => yourFunction(it, ind, arr))
                .then((result) => {
                    results.push(result);
                });
        }));
        chain.then(() => {
            resolve(results);
        });
    })

};
//////////////////////////////////////////////////
var myArgs = ['a', 'b', 'c', 'd'];
var myArr = [1, 2, 1, 9, 2, 1, 6];
function myFunctionFactory(value, index, arr) {
    return new Promise(function(resolve) {
        var res = "";
        if ((value % 2) == 0) {
            res = "четное"
        }
        else {
            res = "нечетное"
        };
        console.log(index);
        console.log(value);
        console.log(res);
        resolve(res);
    });
};
///////////////////////////////////////////////////
var res = asyncMap2(myArr, myFunctionFactory);
res.then(function(value) {
    console.log(value)
});



