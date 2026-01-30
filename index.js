let UserName = "shabin";
let Phone = 9995977246;
let isLogged = true;
let empty = [];
let skills = ["html", "css", "js"];
let even = [2, 4, 6, 8, 10];
let UserDetails = {
    name: "shabin",
    age: 18,
    isPresent: true
};
let AdminDetails = {
    name: "admin",
    age: 20,
    isPresent: false
};
let mix = ["a", "b", "c", 1];

function getUserName(UserDetails) {
    return (UserDetails.name,
        UserDetails.age);
}
getUserName(UserDetails);
