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





