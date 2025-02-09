function getStudents(password) {
    const p = new Promise((resolve, reject) => {

        if (password == '123') {
            resolve([
                {
                    name: "Sumudu",
                    age: 24
                }
            ])
        } else {
            reject("Student list can not display: password incorrect")
        }
    })
    return p;
}

getStudents(123).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})








