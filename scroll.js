//jQuery to collapse the navbar on scroll
$(document)
  .ready(function () {
    /* affix the navbar after scroll below header */
    $('.navbar').affix({
      offset: {
        top: $('#main').outerHeight(true)
      }
    });
  });

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
  $(document)
    .on('click', 'a.page-scroll', function (event) {
      var $anchor = $(this);
      $('html, body')
        .stop()
        .animate({
          scrollTop: $($anchor.attr('href'))
            .offset()
            .top
        }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
});
