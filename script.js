const button = document.querySelector(".btn");
const pass = document.querySelector(".password");

const generatePassword = (iteration) => {
    const  chars =
    "1234567890QERYTUOPSDFHGJVNKIYEqweryiopfsafvnmzxvh@$*"
     let password =""
     for (let i=1; i<=iteration; i++){
        const index = Math.floor(Math.random()*chars.length)
        password += chars[index]
    }
    return password

}
// console.log(generatePassword(10))

button.addEventListener("click", (event) => {
  event.preventDefault();
//   console.log("Hello");
const length = Number(document.querySelector(" .length ").value)

if(length<=0)(
    alert("You have to put positive Number")

)
else(
    pass.innerText=generatePassword(length)

)
});
