$(".reviews-wrapper").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
})

$(document).ready(function() {
    $("form").submit(function() {
        var o = $(this);
        return $.ajax({
            type: "POST",
            url: "mail.php",
            data: o.serialize()
        }).done(function() {
            alert("Thank you!"), setTimeout(function() {
                o.trigger("reset")
            }, 1e3)
        }), !1
    })
});


// input range
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1500,
      values: [ 0, 900 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
  } );


// /

(function($) {
    $(window).on('load', function() {
        $('.mycustom-scroll').mCustomScrollbar();
    });
})(jQuery);

$('.mycustom-scroll').mCustomScrollbar({
    axis: 'y',              // вертикальный скролл
    theme: 'rounded-dark',  // тема
    scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах
    setHeight: '100%',      // высота блока (переписывает CSS)
    mouseWheel: {
        deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши
    }
});





// mobile menu 
$('.header-bottom__btn').on('click', function () {
    $('.header-bottom__btn').toggleClass('header-bottom__btn--active');
    $('.header-bottom__list').toggleClass('header-bottom__list--active');
    $('html').toggleClass('overflow--hidden');
  
  });
  
  $('.header-bottom__link').on('click', function () {
    $('.header-bottom__btn').removeClass('header-bottom__btn--active');
    $('.header-bottom__list').removeClass('header-bottom__list--active');
    $('html').removeClass('overflow--hidden');
  
  });
  
  $('.faq-box__item-title').on('click', function(){

    $('.faq-box__item').removeClass('faq-box__item--active');
    $(this).parent().addClass('faq-box__item--active');
  
  });



//   modal 

$('.detail-box__list-edit').on('click', function () {
    $('.modal-edit').addClass('modal--active');
    $('html').addClass('hidden');  
  });
  $('.modal-close').on('click', function () {
    $('.modal-doc').removeClass('modal--active');
    $('.modal-edit').removeClass('modal--active');
    $('.modal-save').removeClass('modal--active');
    $('.modal--add').removeClass('modal--active');
    $('html').removeClass('hidden');  
    return false;
  });

  $('.modal-edit-btn').on('click', function () {
    $('.modal-edit').removeClass('modal--active');
    $('html').removeClass('hidden');  
  
  });

  $('.modal-edit-btn').on('click', function () {
    $('.modal-save').addClass('modal--active');
    $('html').addClass('hidden');  
  });

  $('.modal-download').on('click', function () {
    $('.modal--add').addClass('modal--active');
    $('html').addClass('hidden');  
  });

  $('.modal-wrapper').on('click', function () {
    $('.modal--wrapper').addClass('modal--active-t');
    $('html').addClass('hidden');  
    return false;
  });

  $('.modal-open').on('click', function () {
    $('.modal--add').removeClass('modal--active');
    $('.modal-doc').addClass('modal--active');
    $('html').addClass('hidden');  
  });
  $('.modal').on('click', function () {
    $('.modal').removeClass('modal--active');
    $('html').removeClass('hidden');  
    return false;
  });

//   $('.modal--add').on('click', function () {
//     $('.modal-doc').removeClass('modal--active');
//     $('html').addClass('hidden');  
//   });

// events for titles 
$('.select__item-red').on('click', function () {
  $('.color-active').addClass('color-active-red');

  $('.color-active').removeClass('color-active-yellow');
  $('.color-active').removeClass('color-active-black');
  $('.color-active').removeClass('color-active-green');
  
});

$('.select__item-yellow').on('click', function () {
  $('.color-active').addClass('color-active-yellow');

  $('.color-active').removeClass('color-active-red');
  $('.color-active').removeClass('color-active-black');
  $('.color-active').removeClass('color-active-green');

});

$('.select__item-black').on('click', function () {
  $('.color-active').addClass('color-active-black');

  $('.color-active').removeClass('color-active-red');
  $('.color-active').removeClass('color-active-yellow');
  $('.color-active').removeClass('color-active-green');

});

$('.select__item-green').on('click', function () {
  $('.color-active').addClass('color-active-green');

  $('.color-active').removeClass('color-active-red');
  $('.color-active').removeClass('color-active-yellow');
  $('.color-active').removeClass('color-active-black');

});

jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});


$('.search-result__more-one').on('click', function () {
  $('.search-more').toggleClass('search-more--hidden');
  $('.search-more__upload').toggleClass('search-more--hidden');
  $('.search-more__close').toggleClass('search-more--hidden');
});
// new 
// $('.search-result__more-one').on('click', function () {
//   $('.search-more').toggleClass('search-more--hidden');
//   $('.search-more__upload').toggleClass('search-more--hidden');
//   $('.search-more__close').toggleClass('search-more--hidden');
// });

// 
$('.search-more__upload').on('click', function () {
  $('.more-results').addClass('search-more--show');
});
// 

$('.search-more__close').on('click', function () {
  $('.search-more').toggleClass('search-more--hidden');
  $('.search-more__upload').toggleClass('search-more--hidden');
  $('.search-more__close').toggleClass('search-more--hidden');
});

$('.search-result__more-one').on('click', function () {
  $('.search-result__more-pic').toggleClass('close-cart');

});

// items for checkbox
// item one 
$('.minus--one').on('click', function () {
  $('.minus--one').addClass('hide-total');
  $('.plus--one').addClass('show');
  $('.item--one').addClass('hide-total');
});

$('.plus--one').on('click', function () {
  $('.minus--one').removeClass('hide-total');
  $('.plus--one').removeClass('show');
  $('.item--one').removeClass('hide-total');
});

// item two 

$('.plus--two').on('click', function () {
  $('.minus--two').addClass('show');
  $('.plus--two').addClass('hide-total');
  $('.item--two').addClass('show');
});

$('.minus--two').on('click', function () {
  $('.minus--two').removeClass('show');
  $('.plus--two').removeClass('hide-total');
  $('.item--two').removeClass('show');
});

// item three

$('.plus--three').on('click', function () {
  $('.minus--three').addClass('show');
  $('.plus--three').addClass('hide-total');
  $('.item--three').addClass('show');
});

$('.minus--three').on('click', function () {
  $('.minus--three').removeClass('show');
  $('.plus--three').removeClass('hide-total');
  $('.item--three').removeClass('show');
});

// item four
$('.plus--four').on('click', function () {
  $('.minus--four').addClass('show');
  $('.plus--four').addClass('hide-total');
  $('.item--four').addClass('show');
});

$('.minus--four').on('click', function () {
  $('.minus--four').removeClass('show');
  $('.plus--four').removeClass('hide-total');
  $('.item--four').removeClass('show');
});

// status for select 
$('.status-item__select').on('click', function () {
  $('.status-item--sel').addClass('show');
});

$('.status-item__selectt').on('click', function () {
  $('.status-item--selectt').addClass('show');
});

$('.status-item__se').on('click', function () {
  $('.status-item--s').addClass('show');
});