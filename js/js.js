$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Fixed Header
    checkScroll(scrollOffset);    

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    })

    function checkScroll(scrollOffset){

        if( scrollOffset >= introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed")
        }
    }

    // Smooth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this), 
            elementId = $this.data('scroll'),
            elementOffset = $(elementId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");
        $("#nav").removeClass("active")
        $("#nav__toggle").removeClass("active")

        $("html, body").animate({
            scrollTop: elementOffset
        }, 500);
    })

    // BurgerMenu toggle
    $("#nav__toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active")
        $("#nav").toggleClass("active");
    });

    // collapse
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this = $(this), 
            elementId = $this.data('collapse');

        $(elementId).slideToggle();
        $this.toggleClass('active')
    })

    // Slider

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

})