$(document).ready(function () {
  $('#btn-mob').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header-nav-list').toggleClass('active');
  });

  $("a.anchorLink").anchorAnimate();


  $(document).on('click',function(e){
    if(!$(e.target).closest('#btn-mob, .header-nav-list').length){
      $('#btn-mob').removeClass('active');
      $('.header-nav-list').removeClass('active');
    }
  });


  $('#top-slider').slick({
    fade: true,
    autoplay:true,
    autoplaySpeed: 7500,
    speed: 1900,
    prevArrow: '<button type="button" class="slick-prev">Вперед</button>',
    nextArrow: '<button type="button" class="slick-next">Назад</button>',
  });

  $('.our-projects-slider').on('init', function(event, slick){
    var $dots = $(this).find('.slick-dots li');

    $dots.each(function(){
      var $num = $(this).index(),
          $this = $(this);

      $( "<span></span>" ).appendTo($this);

      $this.find('span').text('0' + parseInt(1 + $num));
    });
  });

  $('.our-projects-slider').slick({
    fade: true,
    autoplay:true,
    autoplaySpeed: 7500,
    speed: 1900,
    dots: true,
    arrows: false
  });

  $('.interior-slider').slick({
    fade: true,
    fade: true,
    speed: 1900,
    dots: true,
    arrows: false,
  });

  new WOW().init();

  $(".project-popup").fancybox({
      padding: 0,
      wrapCSS:"popup-wrap",
      autoScale :  true,

      helpers: {
          overlay: {
            locked: true
          }
      },

      afterLoad: function(){

        setTimeout(function(){
          $('.popup-slider').slick({
            fade: true,
            speed: 1900,
            dots: true,
            arrows: false,
          });
        },500);
      },

      onClosed: function() {
        $('.popup-slider').slick(unslick);
      }
  });

  $(".link-popup").fancybox({
      padding: 0,
      wrapCSS:"popup-tel",
      autoScale :  true,

      helpers: {
          overlay: {
            locked: true
          }
      },
  });

  // why-us btn  hover efect

  $('.why-us .btn-wrap a').mouseenter(function(){
    $(this).siblings('.primary-btn').addClass('active');
  });

  $('.why-us .btn-wrap a').mouseleave(function(){
      $(this).siblings('.primary-btn').removeClass('active');
  });

  //scroll to page top

  $('.scrollup').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 600);
      return false;
  });
});

jQuery.fn.anchorAnimate = function(settings) {
  settings = jQuery.extend({
    speed : 1100
  }, settings);

  return this.each(function(){
    var caller = this
    $(caller).click(function (event) {
    event.preventDefault()
    var locationHref = window.location.href
    var elementClick = $(caller).attr("href")

    var destination = $(elementClick).offset().top - parseInt(50);
    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
    window.location.hash = elementClick
    });

    return false;
    })
  })
}
