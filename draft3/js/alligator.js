$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
//         $('#title').each( function(i){

            
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height() ;
            
//              If the object is completely visible in the window, fade it it 
//             if( $(this).position().top < 0 ){
                
//                 $(this).animate({'top': '5%'},5000);
// }
                    
           
            
//         }); 



        $('#subtitle1').each( function(i){

            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 500;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                $(this).animate({'top': '106%'},400);

                    
            }
            
        }); 



                        $('#gator').each( function(i){

            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 500;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},450);
                $(this).animate({'top': '125%'},450);

                    
            }
            
        }); 


            
                                        $('#text2').each( function(i){

            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 500;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                $(this).animate({'top': '163%'},500);

                    
            }
            
        }); 



                        $('#live').each( function(i){

            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 500;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                $(this).animate({'top': '215%'},400);

                    
            }
            
        }); 




                        $('#text2b').each( function(i){

            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 500;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                $(this).animate({'top': '260%'},500);

                    
            }
            
        }); 



        $('#subtitle2').each( function(i){

            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 500;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                $(this).animate({'top': '308%'},400);

                    
            }
            
        }); 

                $('#text3').each( function(i){

            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 500;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},450);
                $(this).animate({'top': '322%'},450);

                    
            }
            
        }); 

                          $('#america').each( function(i){

            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 500;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                $(this).animate({'top': '345%'},500);

                    
            }
            
        }); 







     });
    
});