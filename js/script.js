$(document).ready(function () {

  $('body').on('click', '.mytab-nav a', function () {
    $('.blog__second').addClass('blog__second--hidden');
    $('.blog__view-all-btn').text('View all');

    $('.mytab-nav a').removeClass('blog__view-btn--active');
    $(this).removeClass('blog__view-btn--active');
    $(this).addClass('blog__view-btn--active');
    var href = $(this).attr('href');
    $('.mytab-pane').removeClass('active').removeClass('in');
    var id = $(href).addClass('active');
    setTimeout(function () {
      $(href).addClass('in');
    }, 200);
    return false;
  });
  $('body').on('click', '.mytab-nav2 a', function () {
    $('.mytab-nav2 a').removeClass('details__item--active');
    $(this).removeClass('details__item--active');
    $(this).addClass('details__item--active');
    var href = $(this).attr('href');
    $('.mytab-pane2').removeClass('active').removeClass('in');
    var id = $(href).addClass('active');
    setTimeout(function () {
      $(href).addClass('in');
    }, 200);
    return false;
  });
  $('body').on('click', '.blog__view-all-btn', function () {
    $('.blog__second').toggleClass('blog__second--hidden');
    var s = $(this);
    var originaltext = s.text();
    s.text(originaltext);
    s.html(s.text() == 'View all' ? 'Hide' : 'View all');
  });
  $('body').on('click', '.faqs__button', function () {
    $(this).siblings('.faqs__answer').toggleClass('faqs__answer--hidden');
    $(this).toggleClass('faqs__button--active');
  });
  $('.spoiler__title').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
  $('.burger').click(function (event) {
    $('.burger, .burger__main').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__logo').click(function (event) {
    $('.burger, .burger__main').removeClass('active');
    $('body').removeClass('lock');
  });
  $('a.yakor').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate(
      {
        scrollTop: $($anchor.attr('href')).offset().top - 120,
      },
      {
        duration: 1500,
        specialEasing: {
          width: 'linear',
          height: 'easyInOutCubic'
        },
      }
    )
    event.preventDefault();
  });
});