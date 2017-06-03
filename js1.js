// JavaScript File

function asyncMap1(yourArr, yourFunction) {

      return Promise.all(yourArr.map((it, ind, arr) => new Promise(function(resolve) {
        resolve(yourFunction(it, ind, arr));
    })));
};


//////////////////////////////////////////////////////
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


/////////////////////////////////////////

var res = asyncMap1(myArr, myFunctionFactory);
res.then(function(value) {
    console.log(value)
});


