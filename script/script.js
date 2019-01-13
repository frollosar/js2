$(document).ready(function () {
	var $btn1 = $("#button1");
	var $btn2 = $("#button2");
	var $btn3 = $("#button3");
	var $altertext = $(".altertext .anothertext");
	const ACTIVE_CLASS = "active";
	$altertext.not('.' + ACTIVE_CLASS).hide();
	$("button").on('click', function(){
                	    $altertext
                        .filter('.' + ACTIVE_CLASS)
                        .hide()
                        .removeClass(ACTIVE_CLASS);
                        let TextId = $(this).data("text");
                        let text = $("#" + TextId)
                        .addClass(ACTIVE_CLASS)
                        .show();
                });
            
});
