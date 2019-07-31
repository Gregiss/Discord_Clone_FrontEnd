//Login html page
const login = "<form action=''> <h1>Welcome Back</h1> <p>We're so excited to see you again!</p> <span>E-mail</span> <input id='email' type='text'> <span>Password</span> <input id='password' type='password'> <a href='#forgot'>Forgot your password?</a> <button class='fullWidth'>Login</button> <span id='need'><span style='font-size: 14px;line-height: 16px; top: 20px;'>Need a account?</span><a id='need' href='#register' style='top: 8px; left: 0px;'>Register</a></span> </form>";
//Register html page
const register = "<form action=''> <h1 style='font-size: 30px;'>Create an account</h1> <p>Explore the world</p> <span>E-mail</span> <input id='email' type='text'> <span>Password</span> <input id='password' type='password'> <span>Repeat password</span> <input id='repassword' type='password'> <a href='#forgot'>Forgot your password?</a> <button class='fullWidth'>Register</button> <span id='need'><span style='font-size: 14px;line-height: 16px; top: 20px;'>Have an account?</span><a id='have' href='#have' style='top: 8px; left: 0px;'>Login</a></span> </form>";
//Splash
const splash = "<div id='splash'></div>";

const frases = [{frase: "Be and honor the person you are. 🍃✨"}, {frase: "Well I want, well I do, I want you, peace I bring you. 🌻✌"}, {frase: "For those who feel little, I’m sorry. 💥"}, {frase: "Learn to flourish in the adversities of life. 🌺🍃"}, {frase : "Make every moment of your life worthwhile. 🍃✨"}]

const newFrase = getRandomInt(frases.length);

const splashFull = "<div class='splashFull'><video src='assets/splash.webm' loop autoplay></video><span id='frase'>"+frases[newFrase].frase+"</span></div>"


let logged = false;

$(document).ready(function(){
    if(logged){
        splashLoading();
    } else{
    $("#account").html(login);
    submitForm();
    clickPage();
    }
});

function changePage(where){
    if(where == "Register"){
        $("#account").html(register);
        registerbar = true;
    } else{
        registerbar = false;
        $("#account").html(login);
    }
    clickPage();
}

function clickPage(){
    $("form #need").click(function(){
        $("form").addClass("active_form");
        var where = $(this).html();
        changePage(where);
        submitForm();
    });
}

function validateForm(){
    let email = $("form #email").val();
    let password = $("form #password").val();
    let error = "";
    if(registerbar){
        let repassword = $("form #repassword").val();
        $("#email").before("<div class='error' id='error_email'>"+error+"</div>");
        $("#password").before("<div class='error' id='error_password'>"+error+"</div>");
        $("#repassword").before("<div class='error' id='error_repassword'>"+error+"</div>");
        if(email == "" && password == "" && repassword == ""){
            error = "Fill in the fields";
            $("#error_email").html("<span>"+error+"</span>");
            $("#error_password").html("<span>"+error+"</span>");
            $("#error_repassword").html("<span>"+error+"</span>");
        }
        else if(email == ""){
            error = "Fill in the field";
            $("#error_email").html("<span>"+error+"</span>");
            $("#error_password").html("");
            $("#error_repassword").html("");
            $("#error_email").html("<span>"+error+"</span>");
        } else if(password == ""){
            error = "Fill in the field";
            $("#error_email").html("");
            $("#error_repassword").html("");
            $("#error_password").html("<span>"+error+"</span>");
        } else if(repassword == ""){
            error = "Fill in the field";
            $("#error_email").html("");
            $("#error_repassword").html("");
            $("#error_repassword").html("<span>"+error+"</span>");
        } else{
            if(password == repassword){
                $("#error_email").html("");
                $("#error_password").html("");
                $("#error_repassword").html("");
                splashLoading();
            } else{
                error = "Not match";
                $("#error_email").html("");
                $("#error_password").html("");
                $("#error_repassword").html("<span>"+error+"</span>");
            }
        }
    } else{
        $("#email").before("<div class='error' id='error_email'>"+error+"</div>");
        $("#password").before("<div class='error' id='error_password'>"+error+"</div>");
        if(email == "" && password == ""){
            error = "Fill in the fields";
            $("#error_email").html("<span>"+error+"</span>");
            $("#error_password").html("<span>"+error+"</span>");
        }
        else if(email == ""){
            error = "Fill in the field";
            $("#error_email").html("<span>"+error+"</span>");
            $("#error_password").html("");
            $("#error_email").html("<span>"+error+"</span>");
        } else if(password == ""){
            error = "Fill in the field";
            $("#error_email").html("");
            $("#error_password").html("<span>"+error+"</span>");
        } else{
            splashLoading();
            $("#error_email").html("");
            $("#error_password").html("");
        }
    }
    
}

let registerbar = false;


function splashLoading(){
    $("#app .before").before(splash);
    setTimeout(function(){
        $("#app").html(splashFull);
        setTimeout(function(){
            startApp();
        }, 2000);
    }, 3000);
}

function submitForm(){
    $("form button").click(function(){
        validateForm();
        return false;
    });
}