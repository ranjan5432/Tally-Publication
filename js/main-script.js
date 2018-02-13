  $(function() {
	var header = $(".header");
	$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 20) {
	header.addClass("newheader");
	} else {
	header.removeClass("newheader");
	}
	});
	});
        
    /* navigation toggle*/    
    
   $(document).ready(function(){
       $('#nav_icon').click(function(){
           $("#navigation").toggle();
       });
   });
        
    $(document).ready(function(){
       $('#dropmenu_btn').click(function(){
        $('.drop-menu').toggle(); 
       });
    });
        
    /* feedback form */
  
       $(document).ready(function(){
           $('#feedback_btn').click(function(){
               $('.feedback_form').toggleClass('is-hidden');
           });
       });
       $(document).ready(function(){
           $('#close_feedback').click(function(){
               $('.feedback_form').toggleClass('is-hidden');
           });
       });



$(document).ready(function() {
    $('#media').carousel({
      pause: true,
      interval: false,
    });
});


function openDropdown(){
 var drodown = getElementById()

}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}