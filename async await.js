// ================================async await ===============================
//  it simplify the asynchronous code make it look more like synchronous code 
// async is the keyword used to to declare as a  funciton as asynchronous it return the promise
// await is the keyword only use inside the async funciton and use to pause the function until the promise is resolve or reject


async function fetchData() {
    return new Promise((res, rej) => {
        let success = true;
        if (success) {

            let data = { message: "data fetch successfull" }
            res(data)
        } else {
            rej(new Error("something went wrong"))
        }

    })
}

async function getData() {
    try {
        let result = await fetchData()
        console.log(result.message)

    } catch (erorr) {
        console.log(erorr.message)
    }
}
getData()



