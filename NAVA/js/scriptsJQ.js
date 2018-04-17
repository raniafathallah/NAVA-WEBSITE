/* global $, document, window*/
$(document).ready(function () {
	'use strict';
	$(window).scroll(function () {
		if ($(window).scrollTop() > 1000) {
			$('.upp').css('opacity', '1');
         /*   $('.subscribeour').css('opacity', '1');*/
		} else {
			$('.upp').css('opacity', '0');
//            $('.subscribeour').css('opacity', '0');
		}
        if ($(window).scrollTop() > 1500) {
            $('.subscribeour').css('opacity', '1');
		} else {
            $('.subscribeour').css('opacity', '0');
		}
        
	});
    
	$('.upp').on('click', function () {
		$('html, body').animate({
			scrollTop : 0
		}, 2000);
	});
    
	$('#todestination-btn').on('click', function () {
		$('html, body').animate({
			scrollTop : $('#' + $(this).attr('data-scroll')).offset().top
		}, 2000);
	});
    
	$('#toboat-btn').on('click', function () {
		$('html, body').animate({
			scrollTop : $('#' + $(this).attr('data-scroll')).offset().top
		}, 2000);
	});
    
                         /* fetch data from feat json file    */
    $('.fouthpart button').on('click', function () {
        $('.features').clone().addClass('sss').appendTo('.featparent');
        $('.featparent .sss').css('fontFamily', 'sarif');
        $.getJSON("js/feat.json", function (data) {
            $('.featparent .sss .feat1 div .dailyrange ').text(" ");
            $('.featparent .sss .feat1 div .dailyrange ').html('<span class="fa fa-eur"></span>' + data[0].span);
            
            
            $('.featparent .sss .feat1 div .namee ').text(" ");
            $('.featparent .sss .feat1 div .namee').text(data[0].namee);
            $('.featparent .sss .feat1 div .fa-map-marker').text(" ");
            $('.featparent .sss .feat1 div .fa-map-marker ').text(data[0].marker);
            $('.featparent .sss .feat1 div .fa-user').text(" ");
            $('.featparent .sss .feat1 div .fa-user ').text(data[0].user);
            
            $('.featparent .sss .feat2 div .namee ').text(" ");
            $('.featparent .sss .feat2 div .namee').text(data[1].namee);
            $('.featparent .sss .feat2 div .fa-map-marker').text(" ");
            $('.featparent .sss .feat2 div .fa-map-marker ').text(data[1].marker);
            $('.featparent .sss .feat2 div .fa-user').text(" ");
            $('.featparent .sss .feat2 div .fa-user ').text(data[1].user);
            
            $('.featparent .sss .feat3 div .namee ').text(" ");
            $('.featparent .sss .feat3 div .namee').text(data[2].namee);
            $('.featparent .sss .feat3 div .fa-map-marker').text(" ");
            $('.featparent .sss .feat3 div .fa-map-marker ').text(data[2].marker);
            $('.featparent .sss .feat3 div .fa-user').text(" ");
            $('.featparent .sss .feat3 div .fa-user ').text(data[2].user);
            
            $('.featparent .sss .feat4 div .namee ').text(" ");
            $('.featparent .sss .feat4 div .namee').text(data[3].namee);
            $('.featparent .sss .feat4 div .fa-map-marker').text(" ");
            $('.featparent .sss .feat4 div .fa-map-marker ').text(data[3].marker);
            $('.featparent .sss .feat4 div .fa-user').text(" ");
            $('.featparent .sss .feat4 div .fa-user ').text(data[3].user);
            
            $('.fouthpart button').fadeOut(4000);
        });
    });
   /* $('.forma').fadeIn();*/
    $('.flex-boxx').animate({
       height: '80px'
        
    },500).animate({
         height : '100px' 
    },300).animate({
       height: '200px'
        
    },500).animate({
         height : '400px'
    },300).animate({
       height: '450px'
    },500).animate({
         height : '500px'
    },1000,function(){
         $('#mylogin-fields div').animate({
        top: '5px'
    },1000);
        $('#mylogin-fields button').animate({
            left : '120px'
        },1500);
    });
    $('form').submit(function(e){
         e.preventDefault();  
    });
});