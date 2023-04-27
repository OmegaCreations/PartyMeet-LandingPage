$(function(){
  
    // FADE ON SCROLL
    $(window).on("load",function() {
        $(window).scroll(function() {
          var windowBot = $(this).scrollTop() + $(this).outerHeight();
          $(".fade").each(function() {
            // Check the location of each desired element 
            var objectBot = $(this).offset().top + $(this).innerHeight();
            var direction = $(this).attr('direction') == 'left' ? 'translateX(-30px)' : 'translateX(30px)';
            
            // If the element is completely within bounds of the window, fade it in
            if (objectBot < windowBot-50) { //object comes into view (scrolling down)
              if ($(this).css("opacity")==0)
              $(this).css('opacity', '1').css('transform', 'translateX(0)').css('filter', 'blur(0px)');

            } else { // object goes out of view (scrolling up)
              if ($(this).css("opacity")==1)
              $(this).css('opacity', '0').css('transform', direction).css('filter', 'blur(5px)');
            }
          });
        }).scroll(); //invoke scroll-handler on page-load
    });


    
    
    // PARALLAX ON SCROLL > ?USE IT?
    // $(document).scroll(function(){
    //     var scrollPos = $(this).scrollTop();
    //     this.querySelectorAll('.parallax-item').forEach(layer => {
            

    //         var speed = $(layer).attr('data-speed');
    //         $(layer).css('margin-top', scrollPos/speed);
    //     });
        
    // });
})