var $slider = $('.slider');

            if ($slider.length) {
              var currentSlide;
              var slidesCount;
              var sliderCounter = document.createElement('div');
              sliderCounter.classList.add('slider__counter');
              
              var updateSliderCounter = function(slick, currentIndex) {
                currentSlide = slick.slickCurrentSlide() + 1;
                slidesCount = slick.slideCount;
                $(sliderCounter).text(currentSlide + '/' +slidesCount)
              };

              $slider.on('init', function(event, slick) {
                $slider.append(sliderCounter);
                updateSliderCounter(slick);
              });

              $slider.on('afterChange', function(event, slick, currentSlide) {
                updateSliderCounter(slick, currentSlide);
              });

              $slider.slick();
            }




var $slider1 = $('.slider1');

if ($slider1.length) {
  var currentSlide;
  var slidesCount;
  var slider1Counter = document.createElement('div');
  slider1Counter.classList.add('slider1__counter');
  
  var updateSlider1Counter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(slider1Counter).text(currentSlide + '/' +slidesCount)
  };

  $slider1.on('init', function(event, slick) {
    $slider1.append(slider1Counter);
    updateSlider1Counter(slick);
  });

  $slider1.on('afterChange', function(event, slick, currentSlide) {
    updateSlider1Counter(slick, currentSlide);
  });

  $slider1.slick();
}