//Login html page
var login = "<form action=''> <h1>Welcome Back</h1> <p>We're so excited to see you again!</p> <span>E-mail</span> <input type='text'> <span>Password</span> <input type='password'> <a href='#forgot'>Forgot your password?</a> <button class='fullWidth'>Login</button> <span id='need'><span style='font-size: 14px;line-height: 16px;'>Need a account?</span><a id='need' href='#register' style='top: 8px; left: 0px;'>Register</a></span> </form>";
//Register html page
var register = "<form action=''> <h1 style='font-size: 30px;'>Create an account</h1> <p>Explore the world</p> <span>E-mail</span> <input type='text'> <span>Password</span> <input type='password'> <span>Repeat password</span> <input type='password'> <a href='#forgot'>Forgot your password?</a> <button class='fullWidth'>Login</button> <span id='need'><span style='font-size: 14px;line-height: 16px;'>Have an account?</span><a id='have' href='#have' style='top: 8px; left: 0px;'>Login</a></span> </form>";

$(document).ready(function(){
    $("#account").html(login);
    clickPage();
});

function changePage(where){
    if(where == "Register"){
        $("#account").html(register);
    } else{
        $("#account").html(login);
    }
    clickPage();
}

function clickPage(){
    $("form #need").click(function(){
        $("form").addClass("active_form");
        var where = $(this).html();
        changePage(where);
    });
}

function submitForm(){
    $("form button").click(function(){
        return false;
    });
}