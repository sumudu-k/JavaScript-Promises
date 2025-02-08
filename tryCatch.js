const studentOne = {
    name: "Sumudu",
    age: 24,
    parent: {
        name: "Kamal",
        age: 50
    }
};

try {
    const value = studentOne.parent.age - studentOne.age;
    console.log(value);
} catch (e) {
    console.log("There was an Error: " + e);
}

console.log("Program Ended Successfully");


