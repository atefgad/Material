

$(document).ready(function(){

  $(".button-collapse").sideNav();

    // Open Img Box
    $(".open-box").click(function () {
        $(this).parent().next().show(2000);
    });
    // Close Img Box
    $(".fa-close").click(function(){
        $(".pop-box").hide(1500);
    });

});



// button scrollToTop

$(document).ready(function(){

    $(window).scroll(function(){
    if ($(this).scrollTop() > 1000) {
        $('#scrollToTop').fadeIn();
    } else {
        $('#scrollToTop').fadeOut();
    }

    });

    $('#scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
    });

});

// go down
function goToByScroll(id){ $('html,body').animate({scrollTop: $(id).offset().top},'slow'); }

$(document).ready(function(){ 
    $('nav a, nav ul a, .dropdown-content li>a,.side-nav ul a').click(function(){ 
    goToByScroll($(this).attr('href')); 
    return false;
     });
 }); 

