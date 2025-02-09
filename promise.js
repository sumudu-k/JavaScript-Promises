
const promiseOne = new Promise((resolve, reject) => {
    const isConnectionSuccessful = false;

    if (isConnectionSuccessful) {
        resolve('Connection Successful');
    } else {
        reject('An Error Occurred');
    }
})

promiseOne.then((result) => {
    console.log(result);
    console.log('Promise Resolved');

}).catch((error) => {
    console.log(error);
    console.log('Promise Rejected');
});




