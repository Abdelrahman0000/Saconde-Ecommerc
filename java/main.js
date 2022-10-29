let x;
$(document).ready(function(){



    $('.fa-bars').click(function(e){
        e.preventDefault();
      
        $('.nav-dirc').toggleClass('active')
       
    });

    $('.blog .icon .All').click(function(e){
      e.preventDefault();
      $(this).addClass('active').siblings().removeClass('active')

     $('.blog .box-container .box').fadeIn()
   
  });

  $('.blog .icon .Art').click(function(e){
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active')

   $('.blog .box-container .box').fadeOut()
   $('.blog .box-container .Ar').fadeIn()
});

$('.blog .icon .Event').click(function(e){
  e.preventDefault();
  $(this).addClass('active').siblings().removeClass('active')

 $('.blog .box-container .box').fadeOut()
 $('.blog .box-container .Eve').fadeIn()
});


  $('.blog .icon .Architecture').click(function(e){
    e.preventDefault();
    $(this).addClass('active').removeClass('active')

   $('.blog .box-container .box').fadeOut()
   $('.blog .box-container .Archi').fadeIn()
});




$('.blog .icon .Fashion').click(function(e){
  e.preventDefault();
  $(this).addClass('active').siblings().removeClass('active')

 $('.blog .box-container .box').fadeOut(400)
 $('.blog .box-container .Fash').fadeIn()
});




// /////////////////////////////////////////////////////////

$('.cata .categros .appr').click(function(e){
  e.preventDefault();
 $('.categros ul li a').removeClass('active')
  $(this).addClass('active')

  
$('.cata .product .box').fadeOut()
 $('.cata .product .Apparel').fadeIn()

});


$('.cata .categros .Coa').click(function(e){
  e.preventDefault();
  $('.categros ul li a').removeClass('active')
   $(this).addClass('active')
  
$('.cata .product .box').fadeOut()
 $('.cata .product .Coats').fadeIn()

});

$('.cata .categros .dres').click(function(e){
  e.preventDefault();
 
  $('.categros ul li a').removeClass('active')
  $(this).addClass('active')
  
$('.cata .product .box').fadeOut()
 $('.cata .product .Dresses').fadeIn()

});

$('.cata .categros .knit').click(function(e){
  e.preventDefault();
 
  $('.categros ul li a').removeClass('active')
  $(this).addClass('active')
  
$('.cata .product .box').fadeOut()
 $('.cata .product .Knitwear').fadeIn()

});

$('.cata .categros .sui').click(function(e){
  e.preventDefault();
 
  $('.categros ul li a').removeClass('active')
  $(this).addClass('active')
  
$('.cata .product .box').fadeOut()
 $('.cata .product .suits').fadeIn()

});

$('.cata .categros .dec').click(function(e){
  e.preventDefault();
  
 $('.categros ul li a').removeClass('active')
 $(this).addClass('active')
  
$('.cata .product .box').fadeOut()
 $('.cata .product .decor').fadeIn()

});

$('.cata .categros .Fur').click(function(e){
  e.preventDefault();
  
 $('.categros ul li a').removeClass('active')
 $(this).addClass('active')
  
$('.cata .product .box').fadeOut()
 $('.cata .product .Furniture').fadeIn()

});

$('.cata .categros .Ligh').click(function(e){
  e.preventDefault();
  
 $('.categros ul li a').removeClass('active')
 $(this).addClass('active')
  
$('.cata .product .box').fadeOut()
 $('.cata .product .Lighting').fadeIn()

});




$('.cata .color .whi').click(function(e){
e.preventDefault();
$('.color label').removeClass('active')
$(this).addClass('active')

$('.cata .product .box').fadeOut()
$('.cata .product .white').fadeIn()
});

$('.cata .color .Bla').click(function(e){
e.preventDefault();
$('.color label').removeClass('active')
$(this).addClass('active')

$('.cata .product .box').fadeOut()
$('.cata .product .black').fadeIn()
});


$('.cata .color .Bro').click(function(e){
  e.preventDefault();
  $('.color label').removeClass('active')
  $(this).addClass('active')
  
  $('.cata .product .box').fadeOut()
  $('.cata .product .brown').fadeIn()
  });


  $('.cata .color .Beg').click(function(e){
    e.preventDefault();
    $('.color label').removeClass('active')
    $(this).addClass('active')
    
    $('.cata .product .box').fadeOut()
    $('.cata .product .biege').fadeIn()
    });


    $('.cata .categros .rem').click(function(e){
      e.preventDefault();
      $('.color label').removeClass('active')
      
  
 $('.categros ul li a').removeClass('active')
      
     
      $('.cata .product .box').fadeIn()
      });




// //////////////////


$('.cata .size .sme').click(function(e){
  e.preventDefault();
  $('.size span').removeClass('active')
  $(this).addClass('active')
  
  $('.cata .product .box').fadeOut()
  $('.cata .product .small').fadeIn()
  });

  $('.cata .size .med').click(function(e){
    e.preventDefault();
    $('.size span').removeClass('active')
    $(this).addClass('active')
    
    $('.cata .product .box').fadeOut()
    $('.cata .product .medim').fadeIn()
    });

    $('.cata .size .lig').click(function(e){
      e.preventDefault();
      $('.size span').removeClass('active')
      $(this).addClass('active')
      
      $('.cata .product .box').fadeOut()
      $('.cata .product .large').fadeIn()
      });







// ///////////////////////



// ////////////////////////////////////////////////////////




$(window).on('scroll',function(){
  
  $('.my-feald').toggleClass('active',window.scrollY>0)
  $('.loce').toggleClass('active',window.scrollY>0)
})

    $('.fa-filter').click(function(e){
      e.preventDefault();
    
      $('.side-bar2').toggleClass('active')
    });

      $('.side-bar2 .fa-times').click(function(e){
        e.preventDefault();
      
        $('.side-bar2').toggleClass('active')
       


  });


  $('.side-bar2').click(function(e){
    e.preventDefault();
  
    $('.side-bar2').removeClass('active')
   


});

    $('#search-btn').click(function(e){
        e.preventDefault();
       
        $('.search-form').css({display:'flex'})
    })

    $('.search-form i').click(function(e){
        e.preventDefault();
        $('.search-form').fadeOut();
    
    })


    $('.side-bar-logo .fa-pencil-ruler').click(function(e){
        
        e.preventDefault();
        $('.side-bar').toggleClass('active')
    
    })


    $('.side-bar .fa-times').click(function(e){
        
      e.preventDefault();
      $('.side-bar').toggleClass('active')
  
  })





  $('.accordion').click(function(e){
    e.preventDefault();
   
    $(this).toggleClass('active').siblings().removeClass('active');
  
});
  $('.cata .product .box').hover(function(){
  
   x=$(this).find('.image .main-img ').attr("src")
  window.localStorage.setItem("src",`${x}`)
   
  });
  $(".lec").append(`<img src=${window.localStorage.getItem("src")} alt="sec" class="loce" />`)
   
console.log(window.localStorage)
})
var swiper = new Swiper(".chossing",  {
    loop:true,
    grabCursor:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          
        pagination: {
            el: ".swiper-pagination",
          },
        });
        var swiper = new Swiper(".shopping-cart",  {
            loop:true,
            slidesPerView: 3,  loop:true,
            grabCursor:true,
            spaceBetween: 20,
       
        breakpoints:{
          640: {
            slidesPerView: 1,
          
          },
          768: {
            slidesPerView: 2,
        
          },
          1024: {
            slidesPerView: 3,
           
          }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          
        pagination: {
            el: ".swiper-pagination",
          },
                });
       
                      var swiper = new Swiper(".product, .mypar",  {
                        loop:true,
                        slidesPerView: 3,  loop:true,
                        grabCursor:true,
                        spaceBetween: 20,
                   
                    breakpoints:{
                      640: {
                        slidesPerView: 1,
                      
                      },
                      768: {
                        slidesPerView: 2,
                    
                      },
                      1024: {
                        slidesPerView: 3,
                       
                      }
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      },
                      
                    pagination: {
                        el: ".swiper-pagination",
                      },
                            });
      
