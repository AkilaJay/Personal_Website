angular
    .module('app', ['ui.router', 'ui.bootstrap', 'duScroll'])

.factory('shareScroll', function($rootScope) {
    var scrollSec = {};
    scrollSec.isClosed = false;
    scrollSec.about = false;
    scrollSec.contact = false;
     scrollSec.projects = false;
    scrollSec.setScroll = function(bool) {
        this.isClosed = bool;
        this.broadcastItem();

    };

    scrollSec.setProjects = function(projects) {
        this.projects = projects;
        this.broadcastItem();

    };


     scrollSec.setAbout = function(about) {
        this.about = about;
        this.broadcastItem();

    };

     scrollSec.setContact = function(contact) {
        this.contact = contact;
        this.broadcastItem();

    };

    scrollSec.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };
    return scrollSec;

    // return function(msg) {
    //       alert(msg);
    //   };

})

.controller('scroll', function($scope, $document, shareScroll) {
    angular.element(document).ready(function() {
        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0, 5000).then(function() {
                console && console.log('You just scrolled to the top!');
            });
        }
        var about = angular.element(document.getElementById('about'));
        shareScroll.setAbout(about);
         var projects = angular.element(document.getElementById('projects'));
         shareScroll.setProjects(projects);
          var resume = angular.element(document.getElementById('resume'));
           var contact = angular.element(document.getElementById('contact'));
            shareScroll.setContact(contact);
            var home = angular.element(document.getElementById('home'));
        $scope.about = function() {
            $document.scrollToElementAnimated(about);
            var trigger = $('.hamburger'),
                overlay = $('.overlay')
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            console.log(shareScroll);
            console.log("DSFDS");
            shareScroll.setScroll(false);
            $('#wrapper').toggleClass('toggled');
            $('#page-hamburger').toggleClass('toggled');

        }
         $scope.home = function() {
            $document.scrollToElementAnimated(home);
            var trigger = $('.hamburger'),
                overlay = $('.overlay')
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            console.log(shareScroll);
            console.log("DSFDS");
            shareScroll.setScroll(false);
            $('#wrapper').toggleClass('toggled');
            $('#page-hamburger').toggleClass('toggled');
        }

         $scope.projects = function() {
            $document.scrollToElementAnimated(projects);
            var trigger = $('.hamburger'),
                overlay = $('.overlay')
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            console.log(shareScroll);
            console.log("DSFDS");
            shareScroll.setScroll(false);
            $('#wrapper').toggleClass('toggled');
            $('#page-hamburger').toggleClass('toggled');
        }

         $scope.resume = function() {
            $document.scrollToElementAnimated(resume);
            var trigger = $('.hamburger'),
                overlay = $('.overlay')
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            console.log(shareScroll);
            console.log("DSFDS");
            shareScroll.setScroll(false);
            $('#wrapper').toggleClass('toggled');
            $('#page-hamburger').toggleClass('toggled');
        }

         $scope.contact = function() {
            $document.scrollToElementAnimated(contact);
            var trigger = $('.hamburger'),
                overlay = $('.overlay')
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            console.log(shareScroll);
            console.log("DSFDS");
            shareScroll.setScroll(false);
            $('#wrapper').toggleClass('toggled');
            $('#page-hamburger').toggleClass('toggled');
        }

        $scope.$on('handleBroadcast', function() {
            $scope.isClosed = shareScroll.isClosed;
        });

    });

}).value('duScrollOffset', 30)


.controller('mainController', function($scope, shareScroll) {
    angular.element(document).ready(function() {
        var trigger = $('.hamburger'),
            overlay = $('.overlay')

        trigger.click(function() {
            hamburger_cross();
        });

        function hamburger_cross() {

            if (shareScroll.isClosed == true) {
                overlay.hide();
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                shareScroll.setScroll(false);
            } else {
                overlay.show();
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                shareScroll.setScroll(true);
            }
        }

        $('[data-toggle="offcanvas"]').click(function() {
            $('#wrapper').toggleClass('toggled');
            $('#page-hamburger').toggleClass('toggled');
        });

        $scope.$on('handleBroadcast', function() {
            $scope.isClosed = shareScroll.isClosed;
        });



    });
})

.controller('contact', [function($scope) {
    angular.element(document).ready(function() {

    });
}])

.controller('resume', function($scope, $document, shareScroll) {
    angular.element(document).ready(function() {

          $("#projectsResume").click(function(){
            $document.scrollToElementAnimated(shareScroll.projects);
    
});


    });
})

.controller('about', [function($scope) {
    angular.element(document).ready(function() {


    });
}])

.controller('scrollMagic', function($scope, $document, shareScroll) {
    angular.element(document).ready(function() {

        setTimeout(function() {
            $('.style-seven').show('fast');
            $('.buttons-row').fadeIn('slow');
        }, 3000);

        // setTimeout(function() {
        //     var about = angular.element(document.getElementById('about'));

        //  $scope.aboutImage = function() {
        //     $document.scrollToElementAnimated(about);
        //     var trigger = $('.hamburger'),
        //         overlay = $('.overlay')
        //     overlay.hide();
        //     trigger.removeClass('is-open');
        //     trigger.addClass('is-closed');
        //     console.log(shareScroll);
        //     console.log("DSFDS");
        //     shareScroll.setScroll(false);
        //     $('#wrapper').toggleClass('toggled');
        // }
        // }, 3500);


        $("#aboutImage").click(function(){
            $document.scrollToElementAnimated(shareScroll.about);
    
});

         $("#contactMe").click(function(){
            $document.scrollToElementAnimated(shareScroll.contact);
    
});


        $('.material-button-toggle').hover(function() {
            $(this).toggleClass('open');
            $('.option').toggleClass('scale-on');
        });

        $scope.$on('handleBroadcast', function() {
            $scope.isClosed = shareScroll.isClosed;
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
            strings: ["<span class = 'name-text'> <strong>NICE TO MEET YOU!</strong> </span>", '<strong> <span class = "name-text"> MY NAME IS AKILA </span> <span class = "second-text-top"> <br> I AM </span> </strong> ', ],

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
                $(".typed-cursor").addClass("display");
                this.showCursor = false;
                this.cursorChar = "HELLO";
                console.log(this.showCursor);
                showThis();
            },

            onStringTyped: function() {
                this.showCursor = false;
                this.cursorChar = "HELLO";
            },

        });

        function showThis() {
            console.log("dsf");

            $(".second-text").typed({
                strings: [' <i class="fa fa-github-alt"> </i> <strong> A DEVELOPER </strong>', '<i class="fa fa-book"> </i> <strong> AN ENGINEERING STUDENT</strong>', '<i class="fa fa-paper-plane"> </i> <strong>A CHALLENGE SEEKER</strong>'],
                showCursor: true,
                cursorChar: '<span style = "color:white;" class = "second-text">|</span>',
                backDelay: 1500,
                typeSpeed: 20,
                backSpeed: 100,
                loop: true,

            });

        }


    });
});