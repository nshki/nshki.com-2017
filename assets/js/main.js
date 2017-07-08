//==============================================================================
//                                     _          _
//                     _ __ ___   __ _(_)_ __    (_)___
//                    | '_ ` _ \ / _` | | '_ \   | / __|
//                    | | | | | | (_| | | | | |_ | \__ \
//                    |_| |_| |_|\__,_|_|_| |_(_)/ |___/
//                                             |__/
//==============================================================================

(function() {
  initGfx();

  /*
   * Setup looping animations.
   */
  var rocketTravel = TweenMax.to($('#rocket'), 20, {
    bezier: {
      type: 'soft',
      curviness: 2,
      values: [
        { left: '80%', top: '30%' },
        { left: '50%', top: '-10%' },
        { left: '20%', top: '-50%' },
      ]
    },
    rotation: -40,
    repeat: -1,
    ease: Power0.easeNone,
  });
  var rocketFlamesGlow = TweenMax.to($('#rocket-flames-glow'), 0.1, {
    opacity: 0.8,
    scale: 0.95,
    yoyo: true,
    repeat: -1,
  });
  var rocketFlames = TweenMax.to($('#rocket-flames'), 1, {
    opacity: 0.5,
    yoyo: true,
    repeat: -1,
  });

  /*
   * Show page contents so we don't have a jarring blip of graphics on page
   * load.
   */
  $('body').className = 'loaded';

  /*
   * Choreograph all animations.
   */
  var t = new TimelineLite();
  t.to($('#home-jayel'), 1.5, { opacity: 1, y: 0 });
  t.to($('#home-platform'), 1.5, { opacity: 1, y: 0 }, '-= 1.5');
  t.to($('#home-text-1'), 1.5, { opacity: 1, y: 0 });
  t.to($('#home-text-2'), 1.5, { opacity: 1, y: 0 }).addPause();
  t.to($('#home-scene'), 1, { opacity: 0, y: 15 });
  t.set($('#home-scene'), { scale: 0 });
  t.set($('#desk-scene'), { scale: 1 });
  t.to($('#desk-text-1'), 1, { opacity: 1, y: 0 });
  t.to($('#desk-text-2'), 1, { opacity: 1, y: 0 });
  t.to($('#desk-desk'), 0.5, { opacity: 1, y: 0 }, '-= 1');
  t.to($('#desk-lamp'), 0.5, { opacity: 0.8, y: 0 }, '-= 0.5');
  t.to($('#desk-laptop'), 0.5, { opacity: 1, y: 0 });
  t.to($('#desk-browser'), 0.5, { opacity: 1, scale: 1 });
  t.to($('#desk-simulator'), 0.5, { opacity: 1, scale: 1 });
  t.to($('#desk-cactus'), 0.5, { opacity: 1, y: 0 });
  t.to($('#desk-mug'), 0.5, { opacity: 1, y: 0 }).addPause();
  t.to($('#backdrop'), 1, { opacity: 1, backgroundColor: '#2b333f', scaleX: 1 });
  t.to($('#desk-browser'), 0.5, { opacity: 0, scale: 0.9 });
  t.to($('#desk-simulator'), 0.5, { opacity: 0, scale: 0.9 }, '-= 0.25');
  t.to($('#desk-mug'), 1, { opacity: 0, y: -15 }, '-= 1');
  t.to($('#desk-cactus'), 1, { x: 90 }, '-= 1');
  t.to($('#desk-text-1'), 1, { fill: '#fff' }, '-= 1');
  t.to($('#desk-text-2'), 1, { opacity: 0, x: -15 }, '-= 1');
  t.to($('#desk-text-3'), 1, { opacity: 1, x: 0 }, '-= 0.25');
  t.to($('#desk-editor'), 0.5, { opacity: 1, scale: 1 }, '-= 1');
  t.to($('#desk-terminal'), 0.5, { opacity: 1, scale: 1 }, '-= 0.75');
  t.to($('#desk-lamp'), 1, { opacity: 1 });
  t.to($('#desk-lamp-light'), 1, { opacity: 1, scale: 1 }, '-= 1').addPause();
  t.set($('#tabletop-scene'), { scale: 1 });
  t.to($('#desk-scene'), 1, { opacity: 0 }).set('#desk-scene', { scale: 0 });
  t.to($('#tabletop-text-1'), 1, { opacity: 1 }, '-= 1');
  t.to($('#backdrop'), 1, { backgroundColor: '#fff4ea' }, '-= 1');
  t.to($('#tabletop-text-2'), 1, { opacity: 1, y: 0 });
  t.to($('#tabletop-illustration'), 1, { opacity: 1, x: 0, y: 0, rotation: 0 });
  t.to($('#tabletop-pencil'), 0.5, { opacity: 1, y: 0 }, '-= 0.5');
  t.to($('#tabletop-tablet'), 0.5, { opacity: 1, y: 0, rotation: 0 });
  t.to($('#tabletop-mouse'), 0.5, { opacity: 1, x: 0, y: 0 });
  t.to($('#tabletop-keyboard'), 0.5, { opacity: 1, y: 0 });
  t.to($('#tabletop-tea'), 0.5, { opacity: 1, x: 0, y: 0, rotation: 0 }).addPause();
  t.to($('#tabletop-text-1'), 1, { opacity: 0, y: -15 });
  t.to($('#tabletop-text-2'), 1, { opacity: 0, y: -15 }, '-= 1');
  t.to($('#tabletop-illustration'), 1, { opacity: 0, x: -10, y: -10 }, '-= 1');
  t.to($('#tabletop-pencil'), 1, { opacity: 0, x: -10, y: -10 }, '-= 1');
  t.to($('#tabletop-tablet'), 1, { opacity: 0, x: -10, y: -10 }, '-= 1');
  t.to($('#tabletop-mouse'), 2, { x: -90, y: -90 }, '-= 1');
  t.to($('#tabletop-keyboard'), 2, { x: 20, y: -30, rotation: -10 }, '-= 1');
  t.to($('#tabletop-text-3'), 0.5, { opacity: 1, y: 0 }, '-= 0.5');
  t.to($('#tabletop-text-4'), 0.5, { opacity: 1, y: 0 });
  t.to($('#tabletop-collobos'), 0.5, { opacity: 1, y: 0 }, '-= 0.5');
  t.to($('#tabletop-sixth-sense'), 0.5, { opacity: 1, y: 0 });
  t.to($('#tabletop-text-4'), 0.5, { opacity: 0, x: -15 });
  t.to($('#tabletop-text-5'), 0.5, { opacity: 1, x: 0 }, '-= 0.5');
  t.to($('#tabletop-photoshopstar'), 0.5, { opacity: 1, y: 0 }, '-= 0.5');
  t.to($('#tabletop-endorphin'), 0.5, { opacity: 1, y: 0 });
  t.to($('#tabletop-text-5'), 0.5, { opacity: 0, x: -15 });
  t.to($('#tabletop-text-6'), 0.5, { opacity: 1, x: 0 }, '-= 0.5');
  t.to($('#tabletop-imprvd'), 0.5, { opacity: 1, y: 0 }, '-= 0.5');
  t.to($('#tabletop-techhatch'), 0.5, { opacity: 1, y: 0 });
  t.to($('#tabletop-text-6'), 0.5, { opacity: 0, x: -15 });
  t.to($('#tabletop-text-7'), 0.5, { opacity: 1, x: 0 }, '-= 0.5');
  t.to($('#tabletop-inm'), 0.5, { opacity: 1, y: 0 }, '-= 0.5');
  t.to($('#tabletop-padilla'), 0.5, { opacity: 1, y: 0 }).addPause();
  t.to($('#tabletop-scene'), 1, { opacity: 0 });
  t.to($('#backdrop'), 1, { backgroundColor: '#2b333f' }, '-= 1');
  t.to($('#tabletop-scene'), 0, { scale: 0 });
  t.set($('#space-scene'), { scale: 1 });
  t.to($('#backdrop-stars'), 4, { opacity: 1, y: 0 });
  t.to($('#space-sun'), 4, { opacity: 1, y: 0 }, '-= 4');
  t.to($('#space-earth'), 4, { opacity: 1, y: 0 }, '-= 4');
  t.to($('#space-text-1'), 1, { opacity: 1 });
  t.call(function() { rocketTravel.restart(); });
  t.to($('#rocket'), 1, { opacity: 1 });
  t.to($('#space-text-2'), 2, { opacity: 1 }, '+= 1').addPause();
  t.to($('#space-text-1'), 1, { opacity: 0, y: -25 });
  t.to($('#space-text-2'), 1, { opacity: 0, y: -25 }, '-= 1');
  t.to($('#space-sun'), 1, { opacity: 0, y: -25 }, '-= 1');
  t.to($('#space-earth'), 1, { opacity: 0, y: -25 }, '-= 1');
  t.to($('#rocket'), 1, { opacity: 0 }, '-= 1');
  t.set($('#space-sun'), { scale: 0 });
  t.set($('#space-earth'), { scale: 0 });
  t.set($('#rocket'), { scale: 0 });
  t.set($('#space-cta'), { scale: 0 });
  t.to($('#backdrop-stars'), 4, { y: -50 });
  t.to($('#backdrop-moon'), 4, { opacity: 1, y: 0 }, '-= 4');
  t.to($('#space-text-3'), 1, { opacity: 1 });
  t.to($('#space-text-4'), 1, { opacity: 1 });
  t.set($('#space-cta'), { scale: 1 });
  t.to($('#space-cta'), 2, { opacity: 1 });

  /*
   * Enable scroll control using moveScene().
   */
  window.addEventListener('wheel', function(e) {
    e.preventDefault();
    (e.deltaY < 0) ? moveScene('back') : moveScene('forward');
  });

  /*
   * Enable back and forth control of animations.
   * @param { String } - direction
   */
  function moveScene(direction) {
    if (!t.isActive()) {
      if (direction === 'back') {
        t.timeScale(3);
        t.reversed() ? t.resume() : t.reverse();
      } else if (direction === 'forward') {
        t.timeScale(1);
        t.reversed() ? t.play() : t.resume();
      }
    }
  }

  /*
   * Pretending to use jQuery selector using the power of querySelector.
   * @param {String} - selector
   * @return {Element | Array<Element> | null}
   */
  function $(selector) {
    var elements = document.querySelectorAll(selector);
    if (elements.length === 1) {
      return elements[0];
    }
    return elements;
  }

  /*
   * Set initial graphic states.
   * @return {void}
   */
  function initGfx() {
    TweenLite.set($('#backdrop'), { scaleX: 0, transformOrigin: 'right' });
    TweenLite.set($('#backdrop-stars'), { opacity: 0, y: 20 });
    TweenLite.set($('#desk-scene'), { scale: 0 });
    TweenLite.set($('#tabletop-scene'), { scale: 0 });
    TweenLite.set($('#space-scene'), { scale: 0 });
    TweenLite.set($('#home-text-1'), { opacity: 0, y: -10 });
    TweenLite.set($('#home-text-2'), { opacity: 0, y: -10 });
    TweenLite.set($('#home-jayel'), { opacity: 0, y: -50 });
    TweenLite.set($('#home-platform'), { opacity: 0, y: 50 });
    TweenLite.set($('#desk-text-1'), { opacity: 0, y: -10 });
    TweenLite.set($('#desk-text-2'), { opacity: 0, y: -10 });
    TweenLite.set($('#desk-text-3'), { opacity: 0, x: 15 });
    TweenLite.set($('#desk-desk'), { opacity: 0, y: 25 });
    TweenLite.set($('#desk-lamp'), { opacity: 0, y: -25 });
    TweenLite.set($('#desk-lamp-light'), { opacity: 0, scale: 0.9 });
    TweenLite.set($('#desk-laptop'), { opacity: 0, y: -25 });
    TweenLite.set($('#desk-browser'), { opacity: 0, transformOrigin: 'center', scale: 0.95 });
    TweenLite.set($('#desk-simulator'), { opacity: 0, transformOrigin: 'center', scale: 0.95 });
    TweenLite.set($('#desk-editor'), { opacity: 0, transformOrigin: 'center', scale: 0.95 });
    TweenLite.set($('#desk-terminal'), { opacity: 0, transformOrigin: 'center', scale: 0.95 });
    TweenLite.set($('#desk-cactus'), { opacity: 0, y: -25 });
    TweenLite.set($('#desk-mug'), { opacity: 0, y: -25 });
    TweenLite.set($('#tabletop-text-1'), { opacity: 0 });
    TweenLite.set($('#tabletop-text-2'), { opacity: 0, y: -10 });
    TweenLite.set($('#tabletop-text-3'), { opacity: 0, y: -10 });
    TweenLite.set($('#tabletop-text-4'), { opacity: 0, y: -10 });
    TweenLite.set($('#tabletop-text-5'), { opacity: 0, x: 15 });
    TweenLite.set($('#tabletop-text-6'), { opacity: 0, x: 15 });
    TweenLite.set($('#tabletop-text-7'), { opacity: 0, x: 15 });
    TweenLite.set($('#tabletop-illustration'), { opacity: 0, x: -25, y: -25, rotation: -25 });
    TweenLite.set($('#tabletop-pencil'), { opacity: 0, y: -25 });
    TweenLite.set($('#tabletop-tablet'), { opacity: 0, x: 25, y: -25, rotation: 25 });
    TweenLite.set($('#tabletop-tea'), { opacity: 0, x: 5, y: 10, rotation: -35 });
    TweenLite.set($('#tabletop-mouse'), { opacity: 0, x: 25, y: 45 });
    TweenLite.set($('#tabletop-keyboard'), { opacity: 0, y: 45 });
    TweenLite.set($('#tabletop-collobos'), { opacity: 0, y: -15 });
    TweenLite.set($('#tabletop-sixth-sense'), { opacity: 0, y: -15 });
    TweenLite.set($('#tabletop-photoshopstar'), { opacity: 0, y: -15 });
    TweenLite.set($('#tabletop-endorphin'), { opacity: 0, y: -15 });
    TweenLite.set($('#tabletop-imprvd'), { opacity: 0, y: -15 });
    TweenLite.set($('#tabletop-techhatch'), { opacity: 0, y: -15 });
    TweenLite.set($('#tabletop-inm'), { opacity: 0, y: -15 });
    TweenLite.set($('#tabletop-padilla'), { opacity: 0, y: -15 });
    TweenLite.set($('#space-text-1'), { opacity: 0 });
    TweenLite.set($('#space-text-2'), { opacity: 0 });
    TweenLite.set($('#space-text-3'), { opacity: 0 });
    TweenLite.set($('#space-text-4'), { opacity: 0 });
    TweenLite.set($('#space-sun'), { opacity: 0, y: 15 });
    TweenLite.set($('#space-earth'), { opacity: 0, y: 55 });
    TweenLite.set($('#space-stars'), { opacity: 0, y: 120 });
    TweenLite.set($('#rocket'), { opacity: 0, rotation: 10, left: '90%', top: '100%' });
    TweenLite.set($('#backdrop-moon'), { opacity: 0, y: 200 });
    TweenLite.set($('#space-cta'), { opacity: 0, scale: 0 });
  }
})();
