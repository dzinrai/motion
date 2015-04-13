var resizer = function(sliderF,slide,maxImg,arrowWidth) {
	var windowW = $( window ).width();
	var slider = sliderF;
	var resizingSlide = slide;
	var widthActiveSlide = $(resizingSlide).width();
	var wrap = widthActiveSlide + arrowWidth*2;		
		var img = $(resizingSlide).children('img');
		//maxImg максимальный размер картинки 1168 пикс.
		
		var maxWrap = maxImg + arrowWidth*2;//максимальный размер слайдера = картинка 1168 пикс. + 2 стрелочки.
		
		//если окно меньше слайда(со стрелками) уменьшаем слайдер
		if (windowW <= maxWrap){
			$(slider).children('.wrap').width(windowW);
			$('.images-slider').children('.slide').children('img').each(function(){
				$(this).width( windowW - arrowWidth*2 );
			});
			
			
		}//если окно больше, то выставляем стандартный размер
		else if(windowW > maxWrap){		
			$(slider).children('.wrap').width(maxWrap);
			$('.images-slider').children('.slide').children('img').each(function(){
				$(this).width( maxImg );
			});
		
		}
	
	
	
}

var navigation = function() {
	var windowW = $( window ).width();
	if(windowW >= 1000){
		$('.fixed-nav').children('.top-page').width(950);
	}else{
		$('.fixed-nav').children('.top-page').width(windowW);
	}
}

var main = function() {
  
  var windowW = $( window ).width();
  var windowH = $( window ).height();
  
  $('.page-bottom').children('.map').children('img').width(windowW);
  $('.page-bottom').children('.map').children('img').height('251px');
  var activeSlide = $(".images-slider").children('.active');
  resizer($(".slider"),activeSlide,1168,38);
  navigation();
  $(window).resize(function(){
        windowW = $( window ).width();
		windowH = $( window ).height();
		$('.page-bottom').children('.map').children('img').width(windowW);
		$('.page-bottom').children('.map').children('img').height('251px');
		var activeSlide = $(".images-slider").children('.active');
		var activeSlide2 = $('.works-slider').children(".wrap").children(".works-wrap").children('.active');
		resizer($(".slider"),activeSlide,1168,38);//текущий слайд по ширине
		navigation();
		$('.menu-button').removeClass('menu-button-clicked');
		$('.main-nav').removeClass('menu-active');
  });
  
  //image SLIDER

	  
  
  $('.slider').children(".wrap").children('.arrow-right').click(function() {
    var currentSlide = $(".images-slider").children('.active');
    var nextSlide = currentSlide.next();
	
    if(nextSlide.length === 0) {
      nextSlide = $(".images-slider").children('.slide').first();
    }

    currentSlide.fadeOut(600).removeClass('active');
    nextSlide.fadeIn(600).addClass('active');
	resizer($(".slider"),nextSlide,1168,38);//изменяем слайд следующий в соответствии с шириной окна
  });


  $('.slider').children(".wrap").children('.arrow-left').click(function() {
    var currentSlide = $(".images-slider").children('.active');
    var prevSlide = currentSlide.prev();
	
    if(prevSlide.length === 0) {
      prevSlide = $(".images-slider").children('.slide').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active');
    prevSlide.fadeIn(600).addClass('active');
	resizer($(".slider"),prevSlide,1168,38);//изменяем слайд предыдущий в соответствии с шириной окна
  });
  //----------------------------------
  
  $('.works-slider').children(".wrap").children('.arrow-right').click(function() {
    var currentSlide = $('.works-slider').children(".wrap").children(".works-wrap").children('.active');
    var nextSlide = currentSlide.next();

    var currentDot = $('.works-slider').children(".wrap").children('.dots').children('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.works-slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active');
    nextSlide.fadeIn(600).addClass('active');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.works-slider').children(".wrap").children('.arrow-left').click(function() {
    var currentSlide = $('.works-slider').children(".wrap").children(".works-wrap").children('.active');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.works-slider').children('.dots').children('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.works-slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active');
    prevSlide.fadeIn(600).addClass('active');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });
  
  
  //TWEETS
   $('.tweets').children(".wrap").children('.arrow-right').click(function() {
    var currentSlide = $('.tweets-slider').children('.active');
    var nextSlide = currentSlide.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.tweet-slide').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active');
    nextSlide.fadeIn(600).addClass('active');
  });


  $('.tweets').children(".wrap").children('.arrow-left').click(function() {
    var currentSlide = $('.tweets-slider').children('.active');
    var prevSlide = currentSlide.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.tweet-slide').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active');
    prevSlide.fadeIn(600).addClass('active');
  });
	
	$('.menu-button').click(function() {
		$('.menu-button').addClass('menu-button-clicked');
		$('.main-nav').addClass('menu-active');
	});
	$('.top-page').click(function() {
		$('.menu-button').removeClass('menu-button-clicked');
		$('.main-nav').removeClass('menu-active');
	});
	$('.main-nav').click(function() {
		$('.menu-button').removeClass('menu-button-clicked');
		$('.main-nav').removeClass('menu-active');
	});
	
	
}

$(document).ready(main);

$(document).ready(function(){
	var offsetFunc = function(event) {
            event.preventDefault();
            var href=$(this).attr('href');
			var target=$(href);
			var top=target.offset().top - 110;
			$('html,body').animate({
			  scrollTop: top
			}, 1000);
			$('li.active-page').removeClass('active-page');
			$(this).parent().addClass('active-page');
    };
	$('a[href$="#home"]').click(offsetFunc);
	$('a[href$="#about"]').click(offsetFunc);
	$('a[href$="#team"]').click(offsetFunc);
	$('a[href$="#portfolio"]').click(offsetFunc);
	$('a[href$="#other"]').click(offsetFunc);
	$('a[href$="#contact"]').click(offsetFunc);		
});	