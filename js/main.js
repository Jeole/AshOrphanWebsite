// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse  a').click(function() {

    $('.navbar-toggler:visible').click();
});

 $("a.scroll-link").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();
		console.log
       // animate
	   $(this.hash)[ 0 ].scrollIntoView({ block: 'start', behavior: 'smooth' });
       // $('html, body').animate({
           // scrollTop: $(this.hash).offset().top
         // }, 300, function(){
   
           // // when done, add hash to url
           // // (default click behaviour)
           // window.location.hash = this.hash;
         // });

    });
	
$('video, audio').mediaelementplayer({
	// Do not forget to put a final slash (/)
	pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
	// this will allow the CDN to use Flash without restrictions
	// (by default, this is set as `sameDomain`)
	shimScriptAccess: 'always'
	// more configuration
});