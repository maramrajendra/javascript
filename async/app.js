const button = document.querySelector('button')
const output = document.querySelector('p')

function trackHandler() {
    console.log('Clicked the button')
}

button.addEventListener('click', trackHandler)

// const promise = new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
//     (resolve(response.json()))
//       })
// })


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json1 => console.log(json1))

//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'GET',
//     headers: {
//         'Content-type': 'application/json'
//     }
//     } 
//     ).then(response => response.json()).then(json => console.log(json))

//   fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//2.post
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'Raj',
//         body: 'rajtest',
//         userId: 7777
//     }),
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//     } 

// }
// ).then(response => response.json()).then(json => console.log(json))



//3
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'Raj',
//     body: 'RajTest',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//3
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'rajtest'
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
//   });


















// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'GET',
//     headers: {
//         'Content-type': 'application/json'
//     }
//     } 
//     ).then(response => response.json()).then(json => console.log(json))

// const getData = () => {
//     return new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
//             resolve(response.json())
//         })
//         .catch(err => {reject(err)})
//     })

// }

// const getData1 = async () => {

//     try{
//         const response = await getData()
//         console.log(response)
//     }
    
//         catch(error) {
//             console.log(error)
//         }
      
//     }

// getData1()
