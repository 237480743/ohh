(function ($) {

    
  $('.toggle').on('click', function () {
    $('.sidenav').addClass('show');
    $('.sidebg').css('display','block');
  });

  $('.sidebg').on('click', function () {
    $('.sidenav').removeClass('show');
    $(this).css('display','none');
  });

  
})(window.jQuery);
