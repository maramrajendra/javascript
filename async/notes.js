
//setTimeout is handed over to the browser it will do multi threading where as javascript is single threaded.
//after set time is done, then browser need to communicate with javascript, for that call back functions are used.
// if we click on the button and the javascript is executing some stuff, click handler will be executes after JS becomes free.

//promises we use .then instead of call backs, only one level instead of inside.


// export const getMMPList = (data) => {
//     const token = getBearerToken()
//     // const body = false
//     let url = '/workitems/1'
//      return  request('get', url, null, true)
//         .then(response => {return response.json()})
// }


// here, request is returning Promise.

// export function request(method, url, data) {
// //here method is get, post, put, delete
// return new Promise((resolve, reject) => {

// fetch('url', {method: get, headers: {"Content-type": "application/json", "Accept": "application/json", "Accept-Encoding": "appliation/gzip"}, mode: "cors"})
// .then(response => resolve(response))
// .catch(err => reject(err))

// })


// }

//practice 355 lesson


// async function fnName () {}

// const fName = async () => {}
// // before parameters

// https://jsonplaceholder.typicode.com/
