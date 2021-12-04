//Polyfill for Promise.all

function PromiseAllPolyfill(promiseArray) {
  return new Promise(function(resolve,reject) {
    var count = promiseArray.length-1
    var promiseResult = []
    promises.forEach(function(promise, index) {
        promise.then(
          function(val) { 
              result.push(val) //push values to results array
              if(index === count)
              resolve(result) //resolve results array if index is reached to the last element in the array
        }, reject) //passing reject as a second param in .then(res, rej)
    })
  })
}

// Delay method that will return a promise 'val' executable after 'timer' milliseconds
function delay(timer, val) {
  return new Promise(function(cb) {
    setTimeout(cb, timer, val)
  })
}

//Example 1 : Calling function all by passing an array of values
PromiseAllPolyfill([
  delay(200, 'b'),
  delay(50, 'c'),
  delay(1000, 'd')
])
.then(console.log, console.error) //[b,c,d]

//Example 2 : To show the rejected response without logging results array
PromiseAllPolyfill([
  delay(200, 'b'),
  delay(50, 'c'),
  Promise.reject("Some error Occured"),
  delay(1000, 'd')
])
.then(console.log,  console.error) // "Some error Occured"

// check that error rejects asap
// all([
//   delay(100, 'a'),
//   delay(200, 'b'),
//   Promise.reject(Error('bad things happened')),
//   delay(50, 'c'),
//   delay(1000, 'd')
// ])
// .then((res) => console.log("response final >>", res), (err) => console.log("response error final >>", err)); // Error: bad things happened
