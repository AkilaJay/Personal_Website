angular
	.module('app', ['ui.router', 'ui.bootstrap'])


.controller('mainController', [function($scope) {
    angular.element(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  


    });
}])

.controller('about', [function($scope) {
    angular.element(document).ready(function () {
   		
  //  		var controller = new ScrollMagic.Controller();
  //  			// build scene
		// var scene = new ScrollMagic.Scene({
		// 					triggerElement: "#trigger1"
		// 				})
		// 				.setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2}) // trigger a TweenMax.to tween
		// 				.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
		// 				.addTo(controller);

    });
}])

.controller('scrollMagic', [function($scope) {
    angular.element(document).ready(function () {

    setTimeout(function() {
    $('.style-seven').show('fast');
    $('.buttons-row').fadeIn('slow');
}, 3000);
    

     $('.material-button-toggle').hover(function () {
        $(this).toggleClass('open');
        $('.option').toggleClass('scale-on');
    });



 	// var scrollMagicController = new ScrollMagic();
 	// // Init ScrollMagic Controller
  // var scrollMagicController = new ScrollMagic.Controller();
  
  // // Create Animation for 0.5s
  // var tween = TweenMax.to('#animation', 0.5, {
  //   backgroundColor: 'rgb(255, 39, 46)',
  //   scale: 5,
  //   rotation: 360
  // });
  
  // // Create the Scene and trigger when visible
  // var scene = new ScrollMagic.Scene({
  //        triggerElement: '#scene',
  //   offset: 10/* offset the trigger 150px below #scene's top */       // start this scene after scrolling for 50px
  //   })
  //  .setTween(tween)
  //  .addTo(scrollMagicController);
  
  // // Add debug indicators fixed on right side
  //  scene.addIndicators();
   $(".profile-information").typed({
             strings: ["<span class = 'name-text'> <strong>HELLO STRANGER!</strong> </span>",'<strong> <span class = "name-text"> MY NAME IS AKILA </span> <span class = "second-text-top"> <br> I AM </span> </strong> ',],
          
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 0,
            // time before typing starts
            startDelay: 200,
            // backspacing speed
            backSpeed: 0,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: false,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: '<span style ="color:white" class = "name-text">|</span>',
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            callback: function() {
            	$( ".typed-cursor" ).addClass( "display" );
            	this.showCursor=false;
            	this.cursorChar = "HELLO";
            console.log(this.showCursor);
          showThis();
        },

        onStringTyped: function() {
        	this.showCursor=false;
            	this.cursorChar = "HELLO";
        },

        });

   function showThis(){
   	console.log("dsf");

    $(".second-text").typed({
          strings: [' <i class="fa fa-github-alt"> </i> <strong> A DEVELOPER </strong>', '<i class="fa fa-book"> </i> <strong> AN ENGINEERING STUDENT</strong>', '<i class="fa fa-paper-plane"> </i> <strong>A CHALLENGE SEEKER</strong>'],
          showCursor:true,
          cursorChar: '<span style = "color:white;" class = "second-text">|</span>',
          backDelay: 1500,    
          typeSpeed: 20,
          backSpeed: 100,
          loop: true,

      });

  }


    });
}]);