
$(document).ready(function() {

  /////////////////
  // Page Header //
  /////////////////
  $('.page-header .header-menu .sub-menu a').on('click', function() {
    if (this.className.includes('fa-bars')) {
      this.className = 'fa fa-close';
    } else {
      this.className = 'fa fa-bars';
    }
  });

  /////////////////
  // Main Slider //
  /////////////////
  var mainSlider = $("#mainSlider");
  mainSlider.owlCarousel({
    loop: true,
    items: 1,
    // autoplay: true
  });
  mainSlider.trigger('to.owl.carousel', [1, 0]);
  mainSlider.on('changed.owl.carousel', function(event) {
    var currentItem = event.page.index + 1;
    var indicator = $('.slider-indicators').find(':nth-child(' + currentItem + ')');
    indicator.parent().children().removeClass('active');
    indicator.addClass('active');
  });
  mainSlider.parent().find('.indicator').click(function() {
    $(this).parent().children().removeClass('active');
    $(this).addClass('active');
    var position = $(this).find('.indicator-number').html() - 1;
    mainSlider.trigger('to.owl.carousel', position);
  });

  ///////////////////////
  // Date Range Picker //
  ///////////////////////
  var start = moment().subtract(29, 'days');
  var end = moment();
  function cb(start, end) {
      $('.date-range span').html(start.format('DD.MM.YYYY') + '&nbsp;&nbsp;<i class="fa fa-arrows-h"></i>&nbsp;&nbsp;' + end.format('DD.MM.YYYY'));
  }
  $('.date-range').daterangepicker({
      locale: {
        format: 'DD.MM.YYYY'
      },
      startDate: '03.11.2017',
      endDate: '10.11.2017'
  }, cb);
  cb(start, end);
  // End Date Range Picker

  ////////////////////////////
  // Bootstrap Range Slider //
  ////////////////////////////
  $(".price-range-input").slider({});

  //////////////////////////////
  // Top Tour Packages Slider //
  //////////////////////////////
  var top_tour_packages_slider = $(".top-tour-packages-slider");
  top_tour_packages_slider.owlCarousel({
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 3
      },
      1600: {
        items: 4
      }
    }
  });
  // Button Prev and Next
  $('.top-tour-packages .btn-prev').click(function() {
    top_tour_packages_slider.trigger('prev.owl.carousel');
  });
  $('.top-tour-packages .btn-next').click(function() {
    top_tour_packages_slider.trigger('next.owl.carousel');
  });

  ////////////////////////
  // Top Reviews Slider //
  ////////////////////////
  var top_reviews_slider = $(".why-choose-us .top-reviews-slider");
  top_reviews_slider.owlCarousel({
    // loop: true,
    items: 1,
    // autoplay: true
  });
  // Button Prev and Next
  $('.why-choose-us .top-reviews-header .btn-prev').click(function() {
    top_reviews_slider.trigger('prev.owl.carousel');
  });
  $('.why-choose-us .top-reviews-header .btn-next').click(function() {
    top_reviews_slider.trigger('next.owl.carousel');
  });

  /////////////////////////////////
  // Masonry Grid Hotel Packages //
  /////////////////////////////////
  var $hotels_grid = $('.popular-hotels-rooms .masonry-grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
  // filter items on button click
  $('.popular-hotels-rooms').on( 'click', '.filter-tabs .tab, .btn-checkall', function() {
    var filterValue = $(this).attr('data-filter');
    $hotels_grid.isotope({ filter: filterValue });
  });
  $('.tab').click(function() {
    $(this).parent().find('.tab').removeClass('selected');
    $(this).addClass('selected');
  });

  //////////////////////////
  // Return To Top Button //
  //////////////////////////
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {
        $('#return_to_top').fadeIn(200);
    } else {
        $('#return_to_top').fadeOut(200);
    }
  });
  $('#return_to_top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
  });

  /////////////////
  // Wow Js Init //
  /////////////////
  wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  });
  wow.init();

});
