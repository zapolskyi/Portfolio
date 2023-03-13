//Nav//

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {

    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

//Filters//

$(function () {
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat").each(function () {
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            })
        }
    })

//Modal//    

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close ]");


    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');


        $(modalId).addClass('show');
        $("body").addClass('not-scroll');


        $('#workSlider').slick('setPosition');

    });

    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $("body").removeClass('not-scroll');

    });

    $(".modal").on("click", function (event) {
        $(this).removeClass('show');
        $("body").removeClass('not-scroll');
    });

    $(".modal__body").on("click", function (event) {
        event.stopPropagation();

    });




    $('#workSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $(".slickPrev").on("click", function(event) {
        event.preventDefault();

        $('#workSlider').slick("slickPrev");
    });

    $(".slickNext").on("click", function(event) {
        event.preventDefault();

        $('#workSlider').slick("slickNext");
    });


    //Burger//

    const navToggle = $("#navToggle");
    const nav = $("#nav");

    $("#navToggle").on("click", function(event) {
        event.preventDefault()

        nav.toggleClass("show");
    });

});

//Header-Shadow//

let header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }


    console.log (scrollPos);

})

console.log (header);

