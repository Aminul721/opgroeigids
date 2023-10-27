(function($){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});

	$('.simple-marquee-container').SimpleMarquee({speed: 1000});

	if($('h1.text-animation').length) {
    	var txt = $('.text-animation').attr('data-text');
	    var speed = 70;
	    var i = 0;
	    var llength = txt.length;
	    function typeWriter() {
	        if (i < llength) {
	            txt += $('.text-animation').append(txt.charAt(i));
	            i++;
	            setTimeout(typeWriter, speed);
	        }
	    }
		$(window).on('load', function() {
			typeWriter()
		});
	}
	
	//new WOW().init();
	
	//var blogcarousel = $( '.blog_carousel_desk' ).html();
//$( '.blog_carousel_mb' ).html( blogcarousel );
//
//var dossiersblog = $( '.dossiers_carousel_desk' ).html();
//$( '.dossiers_carousel_mb' ).html( dossiersblog );
//
//var blogprofessional = $( '.blog_professiona_desk' ).html();
//$( '.blog_professiona_mb' ).html( blogprofessional );
//
//var actueelblog = $( '.actueel_carousel_desk' ).html();
//$( '.actueel_carousel_mb' ).html( actueelblog );

	$(".privacy-pop-link").click(function() { 
        $('.privacy-popup-area').fadeToggle('fast'); 
    });
    $(".privacy-popup-close").click(function() { 
        $('.privacy-popup-area').fadeOut('fast'); 
    }); 
	
})(jQuery);

jQuery(".menu_bar").click(function() { 
	jQuery('.mobile_menu').addClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideDown('slow'); 
});
jQuery(".menu_close").click(function() { 
	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideUp('slow'); 
});

jQuery(".thanks_pop_on").click(function() {
	jQuery('.form_thank_you').fadeIn('fast');
	jQuery('.banner_form_btn,.banner_form_bg').addClass('hide_content_all');
});

jQuery(document).ready(function(){
	jQuery.noConflict() 
	(function($){ 
		var removeClass = true;
		  $(".banner_form").click(function() {
			 $("body").addClass("form-active");
			 $(".banner_form").addClass("focus-active");
			 $(".focus-active-none").addClass("focus-active-1");
			removeClass = false;
		  });
		  $("html").click(function() {
			if (removeClass) {
			   $("body").removeClass("form-active");
			   $(".banner_form").removeClass("focus-active");
			   $(".focus-active-none").removeClass("focus-active-1");
			}
			removeClass = true; 
		  });

	});
});
jQuery(function() {
  jQuery('.custom-options').selectric({
    optionsItemBuilder: function(itemData) {
      return itemData.value.length ? '<span class="ico ico-' + itemData.value +  '"></span>' + itemData.text : itemData.text;
    }
  });
});


jQuery(window).scroll(function(){
	if (jQuery(window).scrollTop() >= 164) {
		jQuery('.geo_widget').addClass('is_stuck');
	}
	else {
		jQuery('.geo_widget').removeClass('is_stuck');
	}
});
jQuery.fn.isInViewport = function() {
    var elementTop = jQuery(this).offset().top;
    var elementBottom = elementTop + jQuery(this).outerHeight();

    var viewportTop = jQuery(window).scrollTop();
    var viewportBottom = viewportTop + jQuery(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

jQuery(window).on('resize scroll', function() {
    if(jQuery('.footer_area').length > 0) {
        if (jQuery('.footer_widget').isInViewport()) {
            jQuery('.geo_widget').removeClass('is_stuck2');
        } else {
            jQuery('.geo_widget').addClass('is_stuck2');
        }
    }
}); 

function goBack() {
  	window.history.back();
}

function difference(first,sec){
  return Math.abs(first-sec);
}

// (function($) {
//     var top = $('.geo_widget').offset().top - parseFloat($('.geo_widget').css('marginTop').replace(/auto/, 0));
//     var footTop = $('.footer_wrap').offset().top - parseFloat($('.footer_wrap').css('marginTop').replace(/auto/, 0));

//     var maxY = footTop - $('.geo_widget').outerHeight();

//     $(window).scroll(function(evt) {
//         var y = $(this).scrollTop();
//         if (y >= top - $('.header_holder_area').height()) {
//             if (y < maxY) {
//                 $('.geo_widget').addClass('fixed').removeAttr('style');
//             } else {
//                 $('.geo_widget').removeClass('fixed').css({
//                     position: 'absolute',
//                     bottom: '490px'
//                 });
//             }
//         } else {
//             $('.geo_widget').removeClass('fixed');
//         }
//     });
// })(jQuery);

/*jQuery(".sp-viewport").scroll(function (e) {
    e.preventDefault();
    var elem = jQuery(this);   
    console.log(elem.scrollTop());         
    if (elem.scrollTop() > 0 && 
            (elem[0].scrollHeight - elem.scrollTop() == elem.outerHeight())) {
        console.log("At the bottom");
    }
});*/