$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});




   // Function that simulates the button click behavior
    function triggerAction() {
      var audio = $('.song')[0];
      audio.play();
      $('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').addClass('peach');
		
		$('.bannar').addClass('bannar-come');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		
		
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		setTimeout(function() {
    document.getElementById('swipeArea').style.opacity = '0';
}, 1);

		
		
    }

    // Swipeable Area Detection
    const swipeArea = document.getElementById('swipeArea');
    let touchStartX = 0;
    let touchStartY = 0;
    let swipeDetected = false;
    let isTouching = false; // Track if the user is holding down to swipe

    // Detect when the user clicks/touches the area (start)
    swipeArea.addEventListener('touchstart', function (e) {
      isTouching = true;
      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      swipeDetected = false;
    });

    swipeArea.addEventListener('mousedown', function (e) {
      isTouching = true;
      touchStartX = e.clientX;
      touchStartY = e.clientY;
      swipeDetected = false;
    });

    // Detect when the user moves (swipes)
    swipeArea.addEventListener('touchmove', function (e) {
      if (!isTouching) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      // If swipe distance is greater than a threshold, trigger the action
      if (!swipeDetected && (Math.abs(deltaX) > 30 || Math.abs(deltaY) > 30)) {
        swipeDetected = true;
        triggerAction();  // Trigger the action similar to button click
      }
    });

    swipeArea.addEventListener('mousemove', function (e) {
      if (!isTouching) return;
      const deltaX = e.clientX - touchStartX;
      const deltaY = e.clientY - touchStartY;

      // If swipe distance is greater than a threshold, trigger the action
      if (!swipeDetected && (Math.abs(deltaX) > 30 || Math.abs(deltaY) > 30)) {
        swipeDetected = true;
        triggerAction();  // Trigger the action similar to button click
      }
    });

    // Detect when the user releases touch or mouse (end)
    swipeArea.addEventListener('touchend', function () {
      isTouching = false;
    });

    swipeArea.addEventListener('mouseup', function () {
      isTouching = false;
    });

	
	
	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

});




//alert('hello');
