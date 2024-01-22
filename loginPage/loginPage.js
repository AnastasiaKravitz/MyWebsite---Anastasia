// setting all the correct usernames and passwords in a dictionary
let usersDictionary = {
    anastasia: "1234",
    user: "1234",
    alicecode: "2023",
}



// When login button is clicked
function loginButtonClicked() {
    // User's inputs
    var userUsername = document.getElementById("username").value;
    var userPassword = document.getElementById("password").value;
    // checking if the inputs are correct (in dictionary)
    if (userUsername in usersDictionary && usersDictionary [userUsername] == userPassword) {
        alert("Logged in successfully!🙉💕");
        window.location.href = "../homePage/homePage.html";
    } 
    else {
        alert("Login failed.🙊 Please insert correct inputs.🙈");
    }
}