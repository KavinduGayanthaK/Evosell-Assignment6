import UserModel from "../model/UserModel.js";
import {userArray} from "../db/db.js";

$('#registerBtn').on('click', ()=>{
    let userName = $('#InputUserName').val();
    let password = $('#InputPassword1').val();
    let confirmPassword = $('#InputPassword2').val();
    console.log(userName);
    if (password === confirmPassword){
        let userObj = new UserModel(userName,confirmPassword);
        userArray.push(userObj);

        window.location.href = 'home.html';
    }else {
        alert("Password do not match");
    }
});
$('#loginBtn').on('click', function() {
    let userName = $('#InputUserNameLogin').val();
    let password = $('#InputPasswordLogin').val();
    let userFound = false;

    userArray.forEach((item, index) => {
        if (userName === item.username && password === item.password) {
            userFound = true;
            // Redirect to home.html if user is found
            window.location.href = 'home.html';
        }
    });

    if (!userFound) {
        alert('Invalid username or password');
    }
});
