    $("button").click(function() {
        $('html,body').animate({
    scrollTop: $(".arrow-click").offset().top},
    'slow');
});

function showDiv1(){
    document.getElementById("route1").style.display = 'block';
}

function showDiv2(){
    document.getElementById("route2").style.display = 'block';
}