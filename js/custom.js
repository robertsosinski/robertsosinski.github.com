
/*Begin custom.js file
azee - Minimal Blog theme for Jekyll  main JS file
 *  owwwlab.com @2014
 *  owwwlab@gmail.com
----------------------------------------------*/
(function($) {
    "use strict";

    var $emptyHeaders=$('.blog-no-header').parents('.post-header');
    $emptyHeaders.parents('.post-item').addClass('no-header');
    $emptyHeaders.remove();

    var $contactwrapper=$('#contact-wrapper');

    $('#contact-section').on('click',function(e){
    	e.preventDefault();
    	$contactwrapper.animate({top:0},300);
    })
    $('#contact-close').on('click',function(e){
    	e.preventDefault();
    	$contactwrapper.animate({top:'100%'},300);
    })

 })(jQuery);