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


