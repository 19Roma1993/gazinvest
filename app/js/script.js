$(document).foundation();

$(document).ready(function () {
  var mobileMenuExpanded = $('.main-menu-wrap').add($('.free-space'));

  $('.menu-icon-mobile').click(function () {
    mobileMenuExpanded.addClass('active');
  });
  $('.free-space').click(function () {
    mobileMenuExpanded.removeClass('active');
  });
});