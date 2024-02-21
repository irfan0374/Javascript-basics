// clousure is function bundle with its lexical environment . when the function is return it vaniched in exicution context but it still remember it reference too


function payment() {

    let amount = 1000

    return function paymentsuccess() {

        console.log(amount)
    }
}


let fund = payment()

fund()
