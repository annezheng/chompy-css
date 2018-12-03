$(document).ready(function () {
  $('.mobile-menu-icon').on('click', function() {
    $('.primary-nav').toggleClass('active');
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
      // $(this).html('&times;')
      $(this).removeClass('fi-list')
      $(this).addClass('fi-x')
    } else {
      // $(this).html('&#9776;')
      $(this).removeClass('fi-x')
      $(this).addClass('fi-list')
    }
  })
})