$(document).ready(function(){
   $('.next').click(function(){
       
       var currentImg= $('.active');
       var nextImg=currentImg.next();
       
       if(nextImg.length)
           {
               //currentImg.fadeOut(2000);
               currentImg.removeClass("active").css('z-index',-10);
               nextImg.addClass("active").css('z-index',10);
           }
       else
           {
               nextImg=$('#first');
               currentImg.removeClass("active").css('z-index',-10);
               nextImg.addClass("active").css('z-index',10);
           }
   });
    
    
    $('.prev').click(function(){
       
       var currentImg= $('.active');
       var prevImg=currentImg.prev();
       
       if(prevImg.length)
           {
               currentImg.removeClass("active").css('z-index',-10);
               prevImg.addClass("active").css('z-index',10);
           }
        else
           {
               prevImg=$('#last');
               currentImg.removeClass("active").css('z-index',-10);
               prevImg.addClass("active").css('z-index',10);
           }
   });
    
});