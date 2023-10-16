$('.navbar-toggler').on('click', function () {
    var icon_bar = $(this).find('.fa');
    if (icon_bar.hasClass('fa-bars')) {
        $('.navbar-collapse').addClass('show');
        icon_bar.removeClass('fa-bars').addClass('fa-times');
    } else {
        $('.navbar-collapse').removeClass('show');
        icon_bar.addClass('fa-bars').removeClass('fa-times');
    }
});

$(function () {
    $('.content_four button').click(function () {
        var btn = $(this).find('.fa');
        var text = $(this).next();

        $(this).closest('.content_four').find('.content').hide(500);

        $('.content_four button').find('.fa').removeClass('fa-minus').addClass('fa-plus');
        $('.content_four .text').css('color', 'blue');
        $('.content_four button').css('border', 'none');

        if (btn.hasClass('fa-plus')) {
            btn.removeClass('fa-plus').addClass('fa-minus');
            $(this).parent().next().show(500);
            text.css('color', '#BDE453');
            $(this).css('border', 'none');
        } else {
            btn.removeClass('fa-minus').addClass('fa-plus');
            $(this).parent().next().hide(500);
            text.css('color', 'blue');
        }
    });
});

  const slider = document.querySelector('.slider-container');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const slideWidth = slider.firstElementChild.clientWidth;

  let slideIndex = 0;

  prevButton.addEventListener('click', () => {
    slideIndex = Math.max(slideIndex - 1, 0);
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  });

  nextButton.addEventListener('click', () => {
    slideIndex = Math.min(slideIndex + 1, slider.childElementCount - 1);
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  });