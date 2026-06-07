jQuery(function() {
	"use strict";
	$(window).on("scroll load",function(){
        
		var winTop = $(this).scrollTop();
		var up = $("div.site-header").outerHeight();
        
		if(up < winTop){
			$("#header-gnav-area").addClass("site-top")
            $("#header-gnav-area").addClass("fadeIn2")
            
		}else{
			$("#header-gnav-area").removeClass("site-top")
            $("#header-gnav-area").addClass("fadeIn2")
            
		}
        
	});
});



jQuery(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});

jQuery(document).ready(function() {
    var offset = 500;
    var duration = 500;
    jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
    jQuery('.page_top').fadeIn(duration);
    } else {
    jQuery('.page_top').fadeOut(duration);
    }
    });
    
    jQuery('.page_top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
    })
    });

jQuery(function () {
    "use strict";
    var flag = "view";
         
    $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
    if (flag === "view") {
    $("#bottoma").stop().css({opacity: '1.0'}).animate({
    bottom: 0
    }, 800);
    flag = "hide";
    }
    } else {
    if (flag === "hide") {
    $("#bottoma").stop().animate({bottom:"-200px",opacity: 0}, 800);		
    flag = "view";
    }
    }
    });
    });
        
        
jQuery(function () {
    "use strict";
    var flag = "view"; 
    $(window).on("scroll", function () {
    if ($(this).scrollTop() > 400) {
    if (flag === "view") {
    $("#bottomb").stop().css({opacity: '1.0'}).animate({
    bottom: 0
    }, 800); 
    flag = "hide";
    }
    } else {
    if (flag === "hide") {
    $("#bottomb").stop().animate({bottom:"-200px",opacity: 0}, 800);		
    flag = "view";
    }
    }
    });
    });
        
    
    //ヘッダーの高さ分だけコンテンツを下げる
    jQuery(function() {
    var height=jQuery("header").height();
    jQuery("body").css("margin-top", height + 0);//余裕をもたせる
  });


  //フッターの高さ分だけコンテンツを上げる
  jQuery(function() {
    var height=jQuery(".footerbar").height();
    jQuery("body").css("margin-bottom", height + 0);//余裕をもたせる
  });

  //フッターの高さ分だけコンテンツを上げる
  jQuery(function() {
    var height=jQuery(".footerbarm").height();
    jQuery("body").css("margin-bottom", height + 0);//余裕をもたせる
  });


  jQuery(function(){    
    $(window).scroll(function (){        
    $('.fadein').each(function(){            
    var targetElement = $(this).offset().top;            
    var scroll = $(window).scrollTop();            
    var windowHeight = $(window).height();            
    if (scroll > targetElement - windowHeight + 100){                
    $(this).css('opacity','1');                
    $(this).css('transform','translateY(0)');            															
    }       
    });    
    });});