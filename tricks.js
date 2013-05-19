//prefetching the image
var pic = new Image();
pic.src = 'bo_play_pattern.png';



$(function(){
	$(".trigger").click(function(e){
		var inner = $(this).parent().find(".inner");
		var box   = $(this).parent().find(".box");

		if(inner.css("height") === "0px"){
			box.addClass("expanded");
			inner.animate({height: "200px"}, 600);
		}
		else {
			inner.animate({height: "0px"}, 600,
				function(){
					box.removeClass("expanded");
				});
		}
	});



	$(".trigger2").click(function(e){
		var box   = $(this).parent().find(".box");

		if(box.css("height") === "0px"){
			box.addClass("expanded");
			box.animate({height: "200px"}, 600);
		}
		else {
			box.animate({height: "0px"}, 600,
				function(){
					box.removeClass("expanded");
				});
		}
	});
});