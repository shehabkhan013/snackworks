(function($) {
    "use strict";
    $(document).ready(function() {
        var $containerHome = $('.isotope');

        if ($containerHome.length) {
            function isotopHome() {

                //init Isotope
                // $containerHome.imagesLoaded(function() {
                $containerHome.isotope({
                    itemSelector: '.element-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: 1,
                        gutter: 0
                    }
                });
                // });

                // filter functions
                var filterFns = {
                    numberGreaterThan50: function() {
                        var number = $(this).find('.number').text();
                        return parseInt(number, 10) > 50;
                    },
                    ium: function() {
                        var name = $(this).find('.name').text();
                        return name.match(/ium$/);
                    }
                };

                // bind filter button click
                $('#filters').on('click', 'li', function() {
                    var filterValue = $(this).attr('data-filter');
                    filterValue = filterFns[filterValue] || filterValue;
                    $containerHome.isotope({
                        filter: filterValue
                    });
                });

                // change is-checked class on buttons
                $('#filters').each(function(i, buttonGroup) {
                    var $buttonGroup = $(buttonGroup);
                    $buttonGroup.on('click', 'li', function() {
                        $buttonGroup.find('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                    });
                });

                //****************************
                // Isotope Load more button
                //****************************
                var initShow = 10;
                var counter = initShow;
                var iso = $containerHome.data('isotope');

                loadMore(initShow);

                function loadMore(toShow) {
                    $containerHome.find(".hidden").removeClass("hidden");

                    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
                        return item.element;
                    });
                    $(hiddenElems).addClass('hidden');
                    $containerHome.isotope('layout');


                    if (hiddenElems.length == 0) {
                        jQuery("#load-more").hide();
                    } else {
                        jQuery("#load-more").show();
                    };

                }
                $containerHome.after('<button id="load-more" class="btn-border btn-more"><i class="icofont-refresh"></i> Load More Products</button>');
                $("#load-more").click(function() {
                    if ($('#filters').data('clicked')) {
                        counter = initShow;
                        $('#filters').data('clicked', false);
                    } else {
                        counter = counter;
                    };

                    counter = counter + initShow;

                    loadMore(counter);
                });
                //when filter button clicked
                $("#filters").click(function() {
                    $(this).data('clicked', true);

                    loadMore(initShow);
                });

            }

            isotopHome();
        }

        var $container = $('.isotope-product-deatils');
        if ($container.length) {
            function isotopProductDeatils() {
                //init Isotope
                // $container.imagesLoaded(function() {
                $container.isotope({
                    itemSelector: '.element-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: 1,
                        gutter: 0
                    }
                });
                // })

                // filter functions
                var filterFns = {
                    numberGreaterThan50: function() {
                        var number = $(this).find('.number').text();
                        return parseInt(number, 10) > 50;
                    },
                    ium: function() {
                        var name = $(this).find('.name').text();
                        return name.match(/ium$/);
                    }
                };

                // bind filter button click
                $('#product-deatils').on('click', 'li', function() {
                    var filterValue = $(this).attr('data-filter');
                    filterValue = filterFns[filterValue] || filterValue;
                    $container.isotope({
                        filter: filterValue
                    });
                });

                // change is-checked class on buttons
                $('#product-deatils').each(function(i, buttonGroup) {
                    var $buttonGroup = $(buttonGroup);
                    $buttonGroup.on('click', 'li', function() {
                        $buttonGroup.find('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                    });
                });

                //****************************
                // Isotope Load more button
                //****************************
                var initShow = 3;
                var counter = initShow;
                var iso = $container.data('isotope');

                loadMore(initShow);

                function loadMore(toShow) {
                    $container.find(".hidden").removeClass("hidden");

                    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
                        return item.element;
                    });
                    $(hiddenElems).addClass('hidden');
                    $container.isotope('layout');


                    if (hiddenElems.length == 0) {
                        jQuery("#load-more-product").hide();
                    } else {
                        jQuery("#load-more-product").show();
                    };

                }
                $container.after('<button id="load-more-product" class="btn-border btn-more"><i class="icofont-refresh"></i> Load More Products</button>');
                $("#load-more-product").click(function() {
                    if ($('#product-deatils').data('clicked')) {
                        counter = initShow;
                        $('#product-deatils').data('clicked', false);
                    } else {
                        counter = counter;
                    };

                    counter = counter + initShow;

                    loadMore(counter);
                });
                //when filter button clicked
                $("#product-deatils").click(function() {
                    $(this).data('clicked', true);

                    loadMore(initShow);
                });

            }
            isotopProductDeatils();
        }

        var $containerRecipe = $('.all-recipe-isotope');
        if ($containerRecipe.length) {
            function isotopRecipeDeatils() {
                //init Isotope
                //$containerRecipe.imagesLoaded(function() {
                $containerRecipe.isotope({
                    itemSelector: '.element-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: 1,
                        gutter: 0
                    }
                });
                // })

                // filter functions
                var filterFns = {
                    numberGreaterThan50: function() {
                        var number = $(this).find('.number').text();
                        return parseInt(number, 10) > 50;
                    },
                    ium: function() {
                        var name = $(this).find('.name').text();
                        return name.match(/ium$/);
                    }
                };

                // bind filter button click
                $('#filters-recipe').on('click', 'li', function() {
                    var filterValue = $(this).attr('data-filter');
                    filterValue = filterFns[filterValue] || filterValue;
                    $containerRecipe.isotope({
                        filter: filterValue
                    });
                });

                // change is-checked class on buttons
                $('#filters-recipe').each(function(i, buttonGroup) {
                    var $buttonGroup = $(buttonGroup);
                    $buttonGroup.on('click', 'li', function() {
                        $buttonGroup.find('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                    });
                });

                //****************************
                // Isotope Load more button
                //****************************
                var initShow = 12;
                var counter = initShow;
                var iso = $containerRecipe.data('isotope');

                loadMore(initShow);

                function loadMore(toShow) {
                    $containerRecipe.find(".hidden").removeClass("hidden");

                    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
                        return item.element;
                    });
                    $(hiddenElems).addClass('hidden');
                    $containerRecipe.isotope('layout');


                    if (hiddenElems.length == 0) {
                        jQuery("#load-more-product").hide();
                    } else {
                        jQuery("#load-more-product").show();
                    };

                }
                $containerRecipe.after('<button id="load-more-product" class="btn-border btn-more"><i class="icofont-refresh"></i> Load More Products</button>');
                $("#load-more-product").click(function() {
                    if ($('#filters-recipe').data('clicked')) {
                        counter = initShow;
                        $('#filters-recipe').data('clicked', false);
                    } else {
                        counter = counter;
                    };

                    counter = counter + initShow;

                    loadMore(counter);
                });
                //when filter button clicked
                $("#filters-recipe").click(function() {
                    $(this).data('clicked', true);

                    loadMore(initShow);
                });

            }
            isotopRecipeDeatils();
        }

    })

})(jQuery)