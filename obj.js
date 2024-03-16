let namer = {
    firstname: "Ubong",
    lastname: "Ukpe",
    borrow: (firstname, lastname) =>{
        this.firstname = firstname;
        this.lastname = lastname;
        console.log(this)
    }
}
let newNamer = {...namer, firstname: "Endy", lastname: "Armani"}
console.log(newNamer)

let NewestNamer ={}
namer.borrow.call(NewestNamer, "Uyime", "Sunday")
console.log(NewestNamer.borrow)
