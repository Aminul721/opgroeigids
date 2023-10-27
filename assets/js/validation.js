(function($){
	//$('.wpcf7 input[type="checkbox"]').val('Ja');
	//$('.wpcf7 input[name="telefoonnummer"]').attr('pattern', '[0-9]*');
    document.addEventListener( 'wpcf7submit', function( event ) {
    	event.preventDefault();
		var inputs = event.detail.inputs;

		$('.wpcf7 input, .wpcf7 select, .wpcf7 textarea').each(function() {
			_this = $(this);
			if(_this.hasClass('wpcf7-validates-as-required')) {
				if(_this.val() != '') {
					_this.parent().addClass('field_valid');
				} else {
					_this.parent().addClass('field_error');
				}
			}
		});

		if($('#male').prop('checked') || $('#female').prop('checked')) {
		} else {
            $('.error').hide(500);
            $('.male_female_item').addClass('field_error');
        }
	});
	
	$('body').on('keyup change', '.wpcf7 input', function() {
		$('.wpcf7-response-output').hide();
		_i = $(this);
		if(_i.hasClass('wpcf7-validates-as-required') && _i.hasClass('valid-email')) {
			var email = _i.val();
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(email.length > 4 && regex.test(email)) {
				_i.parent().removeClass('field_error');
				_i.parent().addClass('field_valid');
				$('.valid-email').val(email);
			} else {
				_i.parent().addClass('field_error');
			}
		}

		if(_i.hasClass('wpcf7-validates-as-required') && _i.hasClass('valid-text')) {
		    var text = _i.val();
		    var name = _i.attr('name');
			if(text.length > 0 ) {
				_i.parent().removeClass('field_error');
				_i.parent().addClass('field_valid');
				$('input[name="'+name+'"]').val(text);
			} else {
				_i.parent().addClass('field_error');
			}
		}
	});

	$('body').on('click', '#male, #female', function() {
		chekced = $(this).val();
	    $('.male_female_item').removeClass('field_error');
	    $('.get-mf>option').each(function(){
	    	$('.get-mf').parent('.tp_step_select').removeClass('field_error');
	    	$('.get-mf').parent('.tp_step_select').addClass('field_valid');
	    	if($(this).val() == chekced) {
	    		$(this).attr('selected', true);
	    	}
	    });
	});
	
	//E-Mail sent event
	document.addEventListener( 'wpcf7mailsent', function( event ) {
	    formData = event.detail.inputs;

        jQuery.ajax({
    		url:'https://portal.datafanatics.nl/admin/test_function',
    		type:'POST',
    		data: formData,
    		beforeSend: function() {
                $(".form-loader").css("display", "block");
                $('.banner-right-box').addClass('bg_none');
		        $('.banner_form_btn,.banner_form_bg').addClass('hide_content_all');
		        $('.wpcf7-mail-sent-ok').css('display', 'none !important');
            },
    		success: function (result) {
    			window.location.href = BASE_URL + "bedankt/?id=" + result;
    		},
    		complete: function() {
                $(".form-loader").hide();
            }
    	});
    }, false );
})(jQuery);

function isPostcodeNrVaild(postcode, huisnummer) {
    jQuery.ajax({
        type: 'post',
		url: getpostcode.ajaxurl,
		data: {
			action: 		'getpostcode',
			postcode:  	    postcode,
			huisnummer: 	huisnummer
		},
        success: function(response) {
            data = jQuery.parseJSON( response );
            if(data.status == 1) {
                jQuery('.step_tag_info').html('<span><i class="fa ion-checkmark-round"></i> '+data.addr+'</span>');
				jQuery('#stad').text(data.stad);
                jQuery('#straat').text(data.street);
                jQuery('.valid-hr').parent().removeClass('field_error');
                jQuery('.valid-postcode').parent().removeClass('field_error');
                jQuery('.valid-hr').parent().addClass('field_valid');
                jQuery('.valid-postcode').parent().addClass('field_valid');
                jQuery('input[type="submit"]').removeAttr('disabled', 'disabled');
                jQuery('.orange_view_button').add
            } else {
                jQuery('.step_tag_info').html('<span style="color: red"><i class="fa fa-times"></i> Adres niet gevonden</span>');
                jQuery('.valid-hr').parent().removeClass('field_valid');
                jQuery('.valid-postcode').parent().removeClass('field_valid');
                jQuery('.valid-hr').parent().addClass('field_error');
                jQuery('.valid-postcode').parent().addClass('field_error');
                jQuery('input[type="submit"]').attr('disabled', 'disabled');
            }
        }
    });
}