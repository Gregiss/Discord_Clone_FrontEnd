const icon_friend = "<i class='fas fa-user-friends'></i>";
const line = "<div class='line'></div>";
const friends_icon = "<div class='icon friends_icon icon_acess' data-id='-1'>"+icon_friend+"</div><div class='serves'>"+line+"<div class='before'></div></div>";
const app = "<div class='app'> <div class='before'></div>  </div>";
const left_bar = "<div class='left_bar'><div class='before'></div></div>"
const me = "<div class='me'></div>"
const friends_html = "<div class='friends'><div class='po'></div></div>";
const search_bar = "<div class='over'></div><div class='search'><span>Search friends</div>";

var center = "<div class='center'></div>";

const icon = [];

//icon 0 microfone desativado
icon.push({icon : '<svg class="buttonIcon-onTTxP" name="Nova_MicrophoneMute" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z" fill="currentColor"></path><path d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z" fill="currentColor"></path><path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" fill="currentColor"></path><path d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z" class="red-vQUUL4" fill="currentColor"></path></svg>'});
//Icon 1 microfone ativado
icon.push({icon : '<svg class="buttonIcon-onTTxP" name="Nova_Microphone" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z" fill="currentColor"></path></svg>'});
//Icon 2 headset ativado
icon.push({ìcon : '<svg class="buttonIcon-onTTxP" name="Nova_Headset" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="currentColor"></path></svg></svg>'});
//Icon 3 config
icon.push({icon : '<svg class="buttonIcon-onTTxP" name="Gear" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path></svg>'});
var servers = [];

var users_discord = [];

function getRandomInt(o){
    return Math.floor(Math.random()*Math.floor(o));
}

function newServer(name, photo){
    var server = {name: name, photo: photo};
    servers.push(server);
    var id = servers.length - 1;
    showServer(name, photo, id);
    acessServer();
    document.title = "Friends";
    for(var i = 0; i < 20; i++){
        var randomPhoto = getRandomInt(4);
        var newDirect = {name: "User " + i, avatar: "/assets/img/avatar/avatar"+ randomPhoto+".png"};
        users_discord.push(newDirect);
    }
}

const icon_atividade = '<svg name="Activity" class="linkButtonIcon-Mlm5d6" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M5.79335761,5 L18.2066424,5 C19.7805584,5 21.0868816,6.21634264 21.1990185,7.78625885 L21.8575059,17.0050826 C21.9307825,18.0309548 21.1585512,18.9219909 20.132679,18.9952675 C20.088523,18.9984215 20.0442685,19 20,19 C18.8245863,19 17.8000084,18.2000338 17.5149287,17.059715 L17,15 L7,15 L6.48507125,17.059715 C6.19999155,18.2000338 5.1754137,19 4,19 C2.97151413,19 2.13776159,18.1662475 2.13776159,17.1377616 C2.13776159,17.0934931 2.1393401,17.0492386 2.1424941,17.0050826 L2.80098151,7.78625885 C2.91311838,6.21634264 4.21944161,5 5.79335761,5 Z M14.5,10 C15.3284271,10 16,9.32842712 16,8.5 C16,7.67157288 15.3284271,7 14.5,7 C13.6715729,7 13,7.67157288 13,8.5 C13,9.32842712 13.6715729,10 14.5,10 Z M18.5,13 C19.3284271,13 20,12.3284271 20,11.5 C20,10.6715729 19.3284271,10 18.5,10 C17.6715729,10 17,10.6715729 17,11.5 C17,12.3284271 17.6715729,13 18.5,13 Z M6,9 L4,9 L4,11 L6,11 L6,13 L8,13 L8,11 L10,11 L10,9 L8,9 L8,7 L6,7 L6,9 Z"></path><rect width="24" height="24"></rect></g></svg>';
const icon_library = '<svg name="Library" class="linkButtonIcon-Mlm5d6" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M17,13.6 L17.3999992,13.6 C19.0406735,13.6 20.496781,12.8097754 21.4084757,11.5891722 L21.8198761,18.8298199 C21.913864,20.4840062 20.6490733,21.9011814 18.994887,21.9951692 C18.9382174,21.9983891 18.8814679,22 18.8247069,22 L5.1752931,22 C3.51843885,22 2.1752931,20.6568542 2.1752931,19 C2.1752931,18.943239 2.17690401,18.8864895 2.18012387,18.8298199 L2.59152425,11.5891732 C3.503219,12.8097758 4.95932613,13.6 6.6,13.6 L7,13.6 L7,15 L9,15 L9,13.6 L15,13.6 L15,15 L17,15 L17,13.6 Z M7,16 L7,18 L9,18 L9,16 L7,16 Z M15,16 L17,16 L17,18 L15,18 L15,16 Z M15,11.6 L9,11.6 L9,9 L7,9 L7,11.6 L6.6,11.6 C4.94314575,11.6 3.6,10.2568542 3.6,8.6 L3.6,5 C3.6,3.34314575 4.94314575,2 6.6,2 L17.3999992,2 C19.0568535,2 20.3999992,3.34314575 20.3999992,5 L20.3999992,8.6 C20.3999992,10.2568542 19.0568535,11.6 17.3999992,11.6 L17,11.6 L17,9 L15,9 L15,11.6 Z"></path></g></svg>';
const icon_nitro = '<svg name="NitroWheel" class="linkButtonIcon-Mlm5d6" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"></path></svg>';
const icon_friends = '<svg name="PersonWaving" class="linkButtonIcon-Mlm5d6" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>';


const links_friends = "<a class='btn_a acess_true' data-id='0'>"+icon_atividade+" <span>Activity</span></a> <a class='btn_a' data-id='1'>"+icon_library+" <span>Library</span</a> <a class='btn_a' data-id='2'>"+icon_nitro+" <span>Nitro</span></a> <a class='btn_a' data-id='3'>"+icon_friends+" <span>Friends</span></a>";
const direct_msg = "<p class='direct'>Direct messages</p> <div class='msg_direct'><div class='after'></div></div>";

function startApp(){
    $("#app").html(app);
    $(".app .before").before(left_bar);
    $(".app .before").before(me);
    $(".app .left_bar .before").before(friends_icon);
    $(".app .before").before(center);
    newServer("Teste", "https://cdn.discordapp.com/icons/574382397035118624/c28fafc7d19c4448ec1c9256e102eaa0.png?size=128");
    $(".app .before").before("<div class='my_friends'><div class='ota'></div></div>");
    acessFriends();
    acessServer();
    detectScreen();
}

function acessFriends(){
    $(".app .my_friends .ota").html(friends_html);
    $(".app .friends .po").before(search_bar);
    $(".app .friends .po").before(links_friends);
    document.title = "Activity";
    acessFriendsLinks(icon_atividade+"<span>Activity</span>", 0);
    $(".app .friends .po").before(direct_msg);
    acess_btn_a();
    showDirectMsg();
}

function acessFriendsLinks(title, tipo){
    $(".app .center").html("<div class='before'></div>");
    $(".app .center .before").before("<h1>" + title + "</h1>");
    if(tipo == 0){ 
        document.title = "Activity";
    } else if(tipo == 1){
        document.title = "Library";
    } else if(tipo == 2){
        document.title = "Nitro";
    } else if(tipo == 3){
        document.title = "Friends";
    }
}

function showDirectMsg(){
    for(var i = 0; i < users_discord.length; i++){
        $(".msg_direct .after").after("<li class='msg' data-id='"+i+"'><div class='avatar'><img src='"+users_discord[i].avatar+"'></img></div><span>"+users_discord[i].name+"</span></div></li>");
    }
    acessMsg();
}

function acessMsg(){
    $(".msg").click(function(){
        let id = $(this).data("id");
        $(".msg").removeClass("msg_active");
        $(this).addClass("msg_active");
        document.title = "" +users_discord[id].name;
    });
}

function acess_btn_a(){
    $(".btn_a").click(function(){
        var title = $(this).html();
        var tipo = $(this).data("id");
        $(".btn_a").removeClass("acess_true");
        $(this).addClass("acess_true");
        acessFriendsLinks(title, tipo);
    });
}

function showServer(name, photo, id){
    $(".app .left_bar .serves .before").after("<div class='icon server' data-id='"+id+"'><div class='photo' id='server"+id+"'><img class='icon_img' src='"+photo+"'></img></div></div>");
}

function acessServer(){
    $(".app .left_bar .icon").click(function(){
        var id = $(this).data("id");
        $(".app .left_bar .icon").removeClass("icon_acess");
        $(".photo").removeClass("photo_a");
        $("#server" + id).addClass("photo_a");
        $(this).addClass("icon_acess");
        if(id == -1){
            document.title = "Friends";
            acessFriends();
        } else{
            document.title = "" +servers[id].name;
            $(".app .my_friends").html("<div class='ota'></div>");
        }
    });

    $(".app .left_bar .icon").mouseover(function(){
        var id = $(this).data("id");
        $(this).addClass("icon_active");
    });

    $(".app .left_bar .icon").mouseout(function(){
        var id = $(this).data("id");
        $("#server" + id).removeClass("photo_a");
        $(this).removeClass("icon_active");
    });

}

function searchFriends(){
    console.log("WIP");
}

function detectScreen(){
    var heightt = $(window).height();   // returns height of browser viewport
    var heighD = $(document).height(); // returns height of HTML document (same as pageHeight in screenshot)
    var widthW = $(window).width();   // returns width of browser viewport
    var widtht = $(document).width(); // returns width of HTML document (same as pageWidth in screenshot)
    var heightAtual = heightt;
    var widthAtual = widtht;
    setInterval(function(){
        height = $(window).height();   // returns height of browser viewport
        heighD = $(document).height(); // returns height of HTML document (same as pageHeight in screenshot)
        widtht = $(window).width();   // returns width of browser viewport
        widthD = $(document).width(); // returns width of HTML document (same as pageWidth in screenshot)
        heightAtual = heightt;
        widthAtual = widtht;
        if(!(heightAtual == heightt) && !(widthAtual == widtht)){
            return false;
        } else{
            if(widthAtual <= 450){
            adaptar(heightAtual, widthAtual);
            } else{
                adaptarDesktop();
            }
        }
    }, 1000);
}

var zoom = false;

function adaptarDesktop(){
    $(".center h1").click(function(){
        $(".center").removeClass("zomob");
        return false;
    });
    $(".friends_icon").click(function(){
        $(".center").removeClass("zomob");
        return false;
    });
    $(".friends").css("width", "240px");
    $(".app .friends .search").css("width", "240px");
    $(".my_friends").css("width", "240px");
    $(".friends").css("width", "240px");
    $(".over").css("width", "240px");
    $(".search").css("width", "240px");
    $(".me").css("width", "260px");
    $(".center").css("width", "calc(100% - 320px)");
    $(".center").removeClass("zomob");
    $(".center h1").css("left", "20px");
}

function adaptar(height, width){
    $(".friends").css("width", "183px");
    $(".app .friends .search").css("width", "183px");
    $(".my_friends").css("width", "183px");
    $(".friends").css("width", "183px");
    $(".over").css("width", "183px");
    $(".search").css("width", "183px");
    $(".me").css("width", "203px");
    $(".center").css("width", "calc(100% - 276px)");
    $(".center h1").css("left", "-1px");
    $(".center h1").click(function(){
        if(zoom == false){
            $(".center").addClass("zomob");
            zoom = true;
        } else{
            $(".center").removeClass("zomob");
            zoom = false;
        }
    });
    $(".friends_icon").click(function(){
        $(".center").removeClass("zomob");
        zoom = false;
    });
}
