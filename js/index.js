//Login html page
const login = "<form action=''> <h1>Welcome Back</h1> <p>We're so excited to see you again!</p> <span>E-mail</span> <input type='text'> <span>Password</span> <input type='password'> <a href='#forgot'>Forgot your password?</a> <button class='fullWidth'>Login</button> <span id='need'><span style='font-size: 14px;line-height: 16px;'>Need a account?</span><a id='need' href='#register' style='top: 8px; left: 0px;'>Register</a></span> </form>";
//Register html page
const register = "<form action=''> <h1 style='font-size: 30px;'>Create an account</h1> <p>Explore the world</p> <span>E-mail</span> <input type='text'> <span>Password</span> <input type='password'> <span>Repeat password</span> <input type='password'> <a href='#forgot'>Forgot your password?</a> <button class='fullWidth'>Register</button> <span id='need'><span style='font-size: 14px;line-height: 16px;'>Have an account?</span><a id='have' href='#have' style='top: 8px; left: 0px;'>Login</a></span> </form>";
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
    clickPage();
    }
});

const app = "<div class='app'> <div class='before'></div>  </div>";
const left_bar = "<div class='left_bar'><div class='before'></div></div>"
const friends_html = "<div class='friends'><div class='po'></div></div>";
const search_bar = "<div class='search'><span>Search friends</div>";

function startApp(){
    $("#app").html(app);
    $(".app .before").before(left_bar);
    $(".app .before").before(friends_html);
    $(".app .friends .po").before(search_bar);
}

function changePage(where){
    if(where == "Register"){
        $("#account").html(register);
    } else{
        $("#account").html(login);
    }
    clickPage();
}

function clickPage(){
    submitForm();
    $("form #need").click(function(){
        $("form").addClass("active_form");
        var where = $(this).html();
        changePage(where);
    });
}

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
        splashLoading();
        return false;
    });
}