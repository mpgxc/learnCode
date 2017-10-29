
$(function(){   
	var nav = $('#menuHeader');   
	$(window).scroll(function () { 
		if ($(this).scrollTop() > 150) { 
		nav.addClass("menu-fixo"); 
		} else { 
		nav.removeClass("menu-fixo"); 
		} 
	});  
});		
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn();
        } else {
            $('a[href="#top"]').fadeOut();
        }
    });

    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});


