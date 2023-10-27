jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
});
jQuery(function (){
	$('.simple-marquee-container').SimpleMarquee();
});
(function($){
	$(".privacy-pop-link").click(function() { 
		$('.privacy-popup-area').fadeToggle('fast'); 
	});
	$(".privacy-popup-close").click(function() { 
		$('.privacy-popup-area').fadeOut('fast'); 
	});	
})(jQuery);
(function(jQuery){
	jQuery(window).on('load', function() {
		(function($) {
			handlePreloader()
		})(jQuery);
	});
	function handlePreloader() {
		if(jQuery('.preloader').length){
			jQuery('body').removeClass('active-preloader-ovh');
			jQuery('.preloader').fadeOut();
		}
	}
	
/*	var blogcarousel = jQuery( '.blog_carousel_desk' ).html();
	jQuery( '.blog_carousel_mb' ).html( blogcarousel );
	
	var dossiersblog = jQuery( '.dossiers_carousel_desk' ).html();
	jQuery( '.dossiers_carousel_mb' ).html( dossiersblog );
	
	var blogprofessional = jQuery( '.blog_professiona_desk' ).html();
	jQuery( '.blog_professiona_mb' ).html( blogprofessional );
	
	var actueelblog = jQuery( '.actueel_carousel_desk' ).html();
	jQuery( '.actueel_carousel_mb' ).html( actueelblog );
*/	
})(jQuery);

jQuery(".menu_bar").click(function() { 
	jQuery('.mobile_menu').addClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideDown('slow'); 
});
jQuery(".menu_close").click(function() { 
	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideUp('slow'); 
});
jQuery('.blog_carousel').owlCarousel({
	loop:false,
	nav:true,
	margin:0,
	items:3,
	dots:false,
	responsiveClass:true,
	responsive:{
        0:{
            items:1,
        },
		380:{
            items:2,
        },
        992:{
            items:3,
        }
    }
});

jQuery('.related_article_carousel').owlCarousel({
	loop:false,
	nav:true,
	margin:0,
	items:4,
	dots:false,
	responsiveClass:true,
	responsive:{
        0:{
            items:1,
        },
		380:{
            items:2,
        },
        992:{
            items:4,
        }
    }
});

	
jQuery('.dossiers_carousel').owlCarousel({
	loop:false,
	nav:true,
	margin:0,
	items:3,
	dots:false,
	responsiveClass:true,
	responsive:{
        0:{
            items:2,
        },
		380:{
            items:3,
        },
        992:{
            items:4,
        }
    }
});

jQuery(document).ready(function($) {
    $('.customers_testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        dots:true,
        nav:true,
        responsive: {
			991:{
				items:3,
			},
        }
    });
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
jQuery('.blog_galley_carousel').owlCarousel({
	loop:true,
	nav:true,
	margin:0,
	items:1,
	dots:false,
	responsiveClass:true,
	responsive:{
        0:{
            items:1,
        }
    }
})
