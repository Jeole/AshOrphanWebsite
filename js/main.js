// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse  a').click(function() {

    $('.navbar-toggler:visible').click();
});

 $("a.scroll-link").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();
		
       // animate
	   $(this.hash)[ 0 ].scrollIntoView({ behavior: 'smooth' });
	   
       // $('html, body').animate({
           // scrollTop: $(this.hash).offset().top
         // }, 300, function(){
   
           // // when done, add hash to url
           // // (default click behaviour)
           // window.location.hash = this.hash;
         // });

    });
