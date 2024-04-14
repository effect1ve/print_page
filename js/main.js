 $(document).ready(function(){
      $('.carousel-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    });

