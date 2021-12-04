function resolvePromise(resp) {
  return {
    status: 'fulfilled',
    value: resp
  }
}
function rejectPromise(resp) {
  return {
    status: 'rejected',
    reason: resp
   }
}
function allSettled(promisesArray) {
  const formattedPromises = promisesArray.map((promise) => Promise.resolve(promise).then(resolvePromise, rejectPromise));
  return Promise.all(formattedPromises);
}

//Use this by passing an iterable in allSettled Method
allSettled([1,2,Promise.resolve("Correct Data"), Promise.reject("Bad Data")]).then(resp => console.log(resp));

//Output of the Above 
// [{status: 'fulfilled',
//  value: 1},
//  {status: 'fulfilled',
//  value: 2},
//  {status: 'fulfilled',
//  value: "Correct Data"},
//  {status: "rejected",
//  value: "Bad Data"}
// ]
