$(window).resize(function() {
	var path = $(this);
	var contW = path.width();
	if(contW >= 751){
		document.getElementsByClassName("sidebar-toggle")[0].style.left="250px";

		//	document.getElementsByClassName("navy-gary")[0].style.visibility="hidden";

	}else{
		document.getElementsByClassName("sidebar-toggle")[0].style.left="-250px"

	 // document.getElementsByClassName("navy-gary")[0].style.visibility="visible";
	}
});
$(document).ready(function() {
	$('.dropdown').on('show.bs.dropdown', function(e){
	    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});
	$('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
	});
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		var elem = document.getElementById("sidebar-wrapper");
		left = window.getComputedStyle(elem,null).getPropertyValue("left");
		if(left == "250px"){
			document.getElementsByClassName("sidebar-toggle")[0].style.left="-250px";


		}
		else if(left == "-250px"){
			document.getElementsByClassName("sidebar-toggle")[0].style.left="250px";

		}
	});
})


//
// from chrismaster https://bootsnipp.com/snippets/yPlme, some editing