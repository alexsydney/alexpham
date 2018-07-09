$(document).ready(function(){
  $(function(){
    // ===================================================================
    //  Start of intro type.js
    // =================================================================== */
      $("#intro-text").typed(
        {
          strings: ["Hello, my name is Alex Pham.", "I am software developer with Bachelor of Computer Science degree.","I am passionate about technology because the most attractive aspect of technology is problem solving","...and problem solving is a challenge I have always loved"],
          // typing speed
          typeSpeed: 25,
          // time before typing starts
          startDelay: 0,
          // backspacing speed
          backSpeed: 0,
          // time before backspacing
          backDelay: 700,
          // loop
          loop: true,
          // false = inifinite
          loopCount: false,

      }); //("#intro-text")

  }); // Start of intro type.js

    // ===========================================================
    //  Start of about
    // ===========================================================

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#about',
      triggerHook: 0.3
    })
    .setClassToggle('.about-card', 'transition-about-card') // add class to project1
    .addTo(controller);

    // ==============================================================
    //  Start of Projects - ScrollMagic
    // ==============================================================

    // Init ScrollMagic
    // var controller = new ScrollMagic.Controller();
    //
    // // loop through each .project element
    // $('.project').each(function(){
    //
    //   //build a scene
    //   var ourScene = new ScrollMagic.Scene({
    //     triggerElement: this.children[0],
    //     triggerHook: 0.9
    //   })
    //   .setClassToggle(this, 'fade-in') // add class to project01
    //   .addIndicators({
    //     name: 'fade scene',
    //     colorTrigger: 'black',
    //     colorStart: '#75C695',
    //     colorEnd: 'blue';
    //   }) // this a plugins
    //   .addTo(controller);
    //
    // });

    // setup and build pinScene00
    // var pinScene00 = new ScrollMagic.Scene({
    //   triggerElement: '#slide00',
    //   triggerHook: 0,
    //   duration: '100%'
    // })
    // .setPin('#slide00 .pin-wrapper')
    // .addTo(controller);

    // Scene 1 - pin the second section
    // var pinScene01 = new ScrollMagic.Scene({
    //   triggerElement: '#slide00',
    //   triggerHook: 0,
    //   duration: '200%'
    // })
    // .setPin('#slide01 .pin-wrapper')
    // .addTo(controller);

    // Scene 2 - pin the third section
    // var pinScene02 = new ScrollMagic.Scence({
    //   triggerElement: '#slide01',
    //   triggerHook: 0,
    //   duration: '200%'
    // })
    // .setPin('#slide02 .pin-wrapper')
    // .addTo(controller);

    // Scene 3 - pin the fourth section
    // var pinScene03 = new ScrollMagic.Scene({
    //   triggerElement: '#slide02',
    //   triggerHook: 0,
    //   duration: '200%'
    // })
    // .setPin('#slide03 .pin-wrapper')
    // .addTo(controller);

    // Scene 4 - pin the fifth section
    // var pinScene04 = new ScrollMagic.Scence({
    //   triggerElement: '#slide03',
    //   triggerHook: 0,
    //   duration: '200%'
    // })
    // .setPin('#slide04 .pin-wrapper')
    // .setTween(
    //   // TweenMax.from('.prop1',1, {x: '4%', ease:Power0.easeNone})
    //   new TimelineMax().add([
    //     TweenMax.from('.prop1',1, {x: '4%', ease:Power0.easeNone}),
    //     TweenMax.to('.prop2',1, {x: '20%',y: '-90%', ease:Power0.easeNone})
    //   ])
    //
    // )
    // .addTo(controller);

    // Scene 5 - pin the sixth section
    // var pinScene05 = new ScrollMagic.Scene({
    //   triggerElement: '#slide04',
    //   triggerHook: 0,
    //   duration: '100%'
    // })
    // .setPin('#slide05 .pin-wrapper')
    // .addTo(controller);

});  // (document).ready(function()
