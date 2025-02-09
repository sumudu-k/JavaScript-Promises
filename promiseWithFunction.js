function getStudents(password) {
    const p = new Promise((resolve, reject) => {

        if (password == '123') {
            setTimeout(() => {
                resolve([
                    {
                        name: "Sumudu",
                        age: 24
                    }
                ])
            }, 10000)
        } else {
            setTimeout(() => {
                reject("Student list can not display: password incorrect")
            }, 10000)

        }
    })
    return p;
}

getStudents(123).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})








