const icon_friend = "<i class='fas fa-user-friends'></i>";
const line = "<div class='line'></div>";
const friends_icon = "<div class='icon friends_icon icon_acess'>"+icon_friend+"</div>"+line+"";
const app = "<div class='app'> <div class='before'></div>  </div>";
const left_bar = "<div class='left_bar'><div class='before'></div></div>"
const friends_html = "<div class='friends'><div class='po'></div></div>";
const search_bar = "<div class='search'><span>Search friends</div>";

var servers = [];

function newServer(name, photo){
    var server = {name: name, photo: photo};
    servers.push(server);
    var id = servers.length - 1;
    showServer(name, photo, id);
}


function startApp(){
    $("#app").html(app);
    $(".app .before").before(left_bar);
    $(".app .before").before(friends_html);
    $(".app .friends .po").before(search_bar);
    $(".app .left_bar .before").before(friends_icon);
    newServer("Teste", "https://cdn.discordapp.com/icons/601259152353787905/9425b887d117585171cccdce2f6282cd.png?size=128");
    newServer("Teste", "https://cdn.discordapp.com/icons/574382397035118624/c28fafc7d19c4448ec1c9256e102eaa0.png?size=128");
    acessServer();
}

function showServer(name, photo, id){
    $(".app .left_bar .line").after("<div class='icon server' data-id='"+id+"'><div class='photo' id='server"+id+"'><img class='icon_img' src='"+photo+"'></img></div></div>");
}

function acessServer(){
    $(".app .left_bar .icon").click(function(){
        var id = $(this).data("id");
        $(".app .left_bar .icon").removeClass("icon_acess");
        $(".photo").removeClass("photo_a");
        $("#server" + id).addClass("photo_a");
        $(this).addClass("icon_acess");
    });

    $(".app .left_bar .icon").mouseover(function(){
        var id = $(this).data("id");
        $(this).addClass("icon_active");
    });

    $(".app .left_bar .icon").mouseout(function(){
        var id = $(this).data("id");
        $(this).removeClass("photo_a");
        $(this).removeClass("icon_active");
    });

}