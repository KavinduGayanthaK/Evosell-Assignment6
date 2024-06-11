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
    let userName = "kavindu12";
    let password = "kavi1234";
    let userName1 = $('#InputUserNameLogin').val();
    let password1 = $('#InputPasswordLogin').val();
    let userFound = false;

    if (userName === userName1 && password === password1){
        userFound = true;
        window.location.href = 'home.html';
    }
    // userArray.forEach((item, index) => {
    //     if (userName === item.username && password === item.password) {
    //         userFound = true;
    //         // Redirect to home.html if user is found
    //         window.location.href = 'home.html';
    //     }
    // });

    if (!userFound) {
        alert('Invalid username or password');
    }
});
