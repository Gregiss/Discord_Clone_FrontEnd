const icon_friend = "<i class='fas fa-user-friends'></i>";
const friends_icon = "<div class='icon friends_icon icon_acess'>"+icon_friend+"</div>";
const app = "<div class='app'> <div class='before'></div>  </div>";
const left_bar = "<div class='left_bar'><div class='before'></div></div>"
const friends_html = "<div class='friends'><div class='po'></div></div>";
const search_bar = "<div class='search'><span>Search friends</div>";

function startApp(){
    $("#app").html(app);
    $(".app .before").before(left_bar);
    $(".app .before").before(friends_html);
    $(".app .friends .po").before(search_bar);
    $(".app .left_bar .before").before(friends_icon);
    acessServer();
}

function acessServer(){
    $(".app .left_bar .icon").click(function(){
        $(".app .left_bar .icon").removeClass("icon_acess");
        $(this).addClass("icon_acess");
    });

    $(".app .left_bar .icon").mouseover(function(){
        $(this).addClass("icon_active");
    });

    $(".app .left_bar .icon").mouseout(function(){
        $(this).removeClass("icon_active");
    });

}