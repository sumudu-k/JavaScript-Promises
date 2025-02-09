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

async function printStudent() {
    try {
        //if the promise was success save the result in studentList
        const studentList = await getStudents(1893);
        console.log(studentList);
    } catch (e) {
        console.log(e);
    }
    console.log("Program ended")
}

printStudent();