(function($) {
    "use strict";
    $(document).ready(function() {

        var $header = $('#header');
        var $back = $header.find('.back-element');
        var $brand = $header.find('.navbar-brand');

        $header.on('click', '.mobile-menu', function() {
            $(this).toggleClass('active');
            $('#header').toggleClass('show');
            $('.mobile-menu-wrapper').toggleClass('active');
            $('.language-option').toggleClass('language-mobile');
            $('.search-icon').toggleClass('active');
            if ($back.hasClass('active')) { $back.removeClass('active'); }
            if ($brand.hasClass('inactive')) { $brand.removeClass('inactive'); }
            if ($('.mobile-menu-list li').hasClass('active')) {
                $('.mobile-menu-list li').removeClass('active').removeAttr('style');
            }
        })

        $header.on('click', '.mobile-menu-tab', function(e) {
            $('li.item').css('display', 'none');
            $(this).parent('li.item').addClass('active');
            if (!$back.hasClass('active')) { $back.addClass('active'); }
            if (!$brand.hasClass('inactive')) { $brand.addClass('inactive'); }
            e.preventDefault();
        })

        $header.on('click', '.back-element', function(e) {
            $header.find('li.item').removeAttr('style').removeClass('active');
            if ($back.hasClass('active')) { $back.removeClass('active'); }
            if ($brand.hasClass('inactive')) { $brand.removeClass('inactive'); }
            e.preventDefault();
        });

        $('.btn-expend').on('click', function(e) {
            $('.deatils-info-overlay').toggleClass('-expanded');
            if ($('.deatils-info-overlay').hasClass('-expanded')) {
                $('.btn-expend').html('<i class="fa fa-angle-up"></i>');
            } else {
                $('.btn-expend').html('<i class="fa fa-angle-down"></i>');
            }
            e.preventDefault();
        });


        // $(".heart-link i").click(function(e) {
        //     $(".heart-link span").toggleClass("press", 1000);
        //     e.preventDefault();
        // });
        $(".heart-link i").click(function(e) {
            $(this).toggleClass("press", 1000);
            e.preventDefault();
        });

        $('.mobile-search input[type="search"]:focus').click(function(e) {
            $('.mobile-search:after').css('z-index', '3');

        })



        $(document).on('click.bs.dropdown.data-api', '.dropdown.show', function(e) {
            e.stopPropagation();
        });
        $('.dropdown-menu .close').on('click', function(e) {
            $('.navbar li.dropdown').each(function() {
                if ($(this).hasClass('show')) {
                    $(this).removeClass('show');
                    $(this).children('.dropdown-menu').removeClass('show');
                    $(this).children('.nav-link').attr('aria-expanded', 'false');
                }

            });
        });







        $('#v-pills-home-tab').on('click', function() {
            $('.chocolate-icon img').attr('src', 'assets/img/chocolate/chocolate.png');
        })
        $('#v-pills-profile-tab').on('click', function() {
            $('.chocolate-icon img').attr('src', 'assets/img/candy/candy.png');
        })
        $('#v-pills-messages-tab').on('click', function() {
            $('.chocolate-icon img').attr('src', 'assets/img/coockies/cookies.png');
        })
        $('#v-pills-settings-tab').on('click', function() {
            $('.chocolate-icon img').attr('src', 'assets/img/crackers/crackers.png');
        })
        $('#v-pills-cough-tab').on('click', function() {
            $('.chocolate-icon img').attr('src', 'assets/img/cough/cough.png');
        })



        $('.snack-video-btn').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });

        var $recipeDeatils = $('.snack-deatils-slider');

        if ($recipeDeatils.length) {
            function recipeDeatilsSlider() {
                $recipeDeatils.owlCarousel({
                    items: 1,
                    loop: true,
                    lazyLoad: true,
                    autoplay: true,
                })

            }
            recipeDeatilsSlider();
        }



        $('.snack-product-recipe-inner').slice(0, 3).show();
        $('#more').on('click', function(e) {
            e.preventDefault();
            $('.snack-product-recipe-inner:hidden').slice(0, 1).slideDown();
            if ($('.snack-product-recipe-inner:hidden').length === 0) {
                $('#more').replaceWith('<button class="btn-border btn-more">No More Stuff</button>');
            }
        });

        var heroSlider = $('.hero-slider');
        if (heroSlider.length) {
            heroSlider.owlCarousel({
                items: 1,
                loop: true,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                smartSpeed: 1000,
                autoplayTimeout: 5000,
                mouseDrag: true,
                touchDrag: true,
                autoplayHoverPause: true,
                autoplay: true,
                nav: true,
                navText: ['<i class="icofont-arrow-left"></i>', '<i class="icofont-arrow-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        mouseDrag: true,
                        touchDrag: true,
                    },
                    480: {
                        items: 1,
                        mouseDrag: true,
                        touchDrag: true,
                    },
                    768: {
                        items: 1,
                    }
                }
            });
            //Owl-Carousel Translate Function
            heroSlider.on('translate.owl.carousel', function() {
                var layer = $("[data-animation]");
                layer.each(function() {
                    var animation_name = $(this).data('animation');
                    $(this).removeClass('animated ' + animation_name).css('opacity', '0');
                });
            });
            //Owl-Carousel Delay Function
            $("[data-delay]").each(function() {
                var animation_delay = $(this).data('delay');
                $(this).css('animation-delay', animation_delay);
            });
            //Owl-Carousel Duration Function
            $("[data-duration]").each(function() {
                var animation_duration = $(this).data('duration');
                $(this).css('animation-duration', animation_duration);
            });
            //Owl-Carousel Translated Function
            heroSlider.on('translated.owl.carousel', function() {
                var layer = heroSlider.find('.owl-item.active').find("[data-animation]");
                layer.each(function() {
                    var animation_name = $(this).data('animation');
                    $(this).addClass('animated ' + animation_name).css('opacity', '1');
                });
            });
        }





    })





})(jQuery)