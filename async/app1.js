const button = document.querySelector('button')
const output = document.querySelector('p')

function trackHandler() {
    console.log('Clicked the button')
}

button.addEventListener('click', trackHandler)

const getData = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
            resolve(response.json())
        })
        .catch(err => {reject(err)})
    })

}

const getData1 = async () => {

    try{
        const response = await getData()
        console.log(response)
    }
    
        catch(error) {
            console.log(error)
        }
      
    }

getData1()
