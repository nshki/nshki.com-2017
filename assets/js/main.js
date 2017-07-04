//==============================================================================
//                                     _          _
//                     _ __ ___   __ _(_)_ __    (_)___
//                    | '_ ` _ \ / _` | | '_ \   | / __|
//                    | | | | | | (_| | | | | |_ | \__ \
//                    |_| |_| |_|\__,_|_|_| |_(_)/ |___/
//                                             |__/
//==============================================================================

(function() {
  var scene = 0;
  TweenMax.set($('#backdrop'), { scaleX: 0, transformOrigin: 'right' });
  TweenMax.set($('#desk-scene'), { scale: 0 });
  TweenMax.set($('#tabletop-scene'), { scale: 0 });
  TweenMax.set($('#space-scene'), { scale: 0 });
  TweenMax.set($('#home-text-1'), { opacity: 0 });
  TweenMax.set($('#home-text-2'), { opacity: 0 });
  TweenMax.set($('#home-jayel'), { opacity: 0, y: -50 });
  TweenMax.set($('#home-platform'), { opacity: 0, y: 50 });
  TweenMax.set($('#desk-text-1'), { opacity: 0 });
  TweenMax.set($('#desk-text-2'), { opacity: 0 });
  TweenMax.set($('#desk-text-3'), { opacity: 0, x: 15 });
  TweenMax.set($('#desk-desk'), { opacity: 0, y: 25 });
  TweenMax.set($('#desk-lamp'), { opacity: 0, y: -25 });
  TweenMax.set($('#desk-lamp-light'), { opacity: 0, scale: 0.9 });
  TweenMax.set($('#desk-laptop'), { opacity: 0, y: -25 });
  TweenMax.set($('#desk-browser'), { opacity: 0, transformOrigin: 'center', scale: 0.95 });
  TweenMax.set($('#desk-simulator'), { opacity: 0, transformOrigin: 'center', scale: 0.95 });
  TweenMax.set($('#desk-editor'), { opacity: 0, transformOrigin: 'center', scale: 0.95 });
  TweenMax.set($('#desk-terminal'), { opacity: 0, transformOrigin: 'center', scale: 0.95 });
  TweenMax.set($('#desk-cactus'), { opacity: 0, y: -25 });
  TweenMax.set($('#desk-mug'), { opacity: 0, y: -25 });
  TweenMax.set($('#tabletop-text-1'), { opacity: 0 });
  TweenMax.set($('#tabletop-text-2'), { opacity: 0 });
  TweenMax.set($('#tabletop-text-3'), { opacity: 0 });
  TweenMax.set($('#tabletop-text-4'), { opacity: 0 });
  TweenMax.set($('#tabletop-text-5'), { opacity: 0 });
  TweenMax.set($('#tabletop-text-6'), { opacity: 0 });
  TweenMax.set($('#tabletop-text-7'), { opacity: 0 });
  TweenMax.set($('#tabletop-illustration'), { opacity: 0, x: -25, y: -25, rotation: -25 });
  TweenMax.set($('#tabletop-pencil'), { opacity: 0, y: -25 });
  TweenMax.set($('#tabletop-tablet'), { opacity: 0, x: 25, y: -25, rotation: 25 });
  TweenMax.set($('#tabletop-tea'), { opacity: 0, x: 5, y: 10, rotation: -35 });
  TweenMax.set($('#tabletop-mouse'), { opacity: 0, x: 25, y: 45 });
  TweenMax.set($('#tabletop-keyboard'), { opacity: 0, y: 45 });
  TweenMax.set($('#tabletop-collobos'), { opacity: 0, y: -15 });
  TweenMax.set($('#tabletop-sixth-sense'), { opacity: 0, y: -15 });
  TweenMax.set($('#tabletop-photoshopstar'), { opacity: 0, y: -15 });
  TweenMax.set($('#tabletop-endorphin'), { opacity: 0, y: -15 });
  TweenMax.set($('#tabletop-imprvd'), { opacity: 0, y: -15 });
  TweenMax.set($('#tabletop-techhatch'), { opacity: 0, y: -15 });
  TweenMax.set($('#tabletop-inm'), { opacity: 0, y: -15 });
  TweenMax.set($('#tabletop-padilla'), { opacity: 0, y: -15 });
  TweenMax.set($('#space-scene'), { scale: 0 });
  TweenMax.set($('#space-text-1'), { opacity: 0 });
  TweenMax.set($('#space-text-2'), { opacity: 0 });
  TweenMax.set($('#space-text-3'), { opacity: 0 });
  TweenMax.set($('#space-text-4'), { opacity: 0 });
  TweenMax.set($('#space-sun'), { opacity: 0, y: 15 });
  TweenMax.set($('#space-earth'), { opacity: 0, y: 55 });
  TweenMax.set($('#space-stars'), { opacity: 0, y: 100 });
  TweenMax.set($('#space-rocket'), { x: 300, y: 700 });
  TweenMax.set($('#space-moon'), { opacity: 0, y: 200 });
  TweenMax.set($('#space-cta'), { opacity: 0 });
  $('body').classList.add('loaded');
  render();

  function render() {
    TweenMax.to($('#home-jayel'), 1.5, { opacity: 1, y: 0 });
    TweenMax.to($('#home-platform'), 1.5, { opacity: 1, y: 0 });
    TweenMax.to($('#home-text-1'), 1, { opacity: 1, delay: 1.5 });
    TweenMax.to($('#home-text-2'), 1, { opacity: 1, delay: 2.5 });
    TweenMax.to($('#home-scene'), 1, { opacity: 0, y: 15, delay: 3.5 });

    TweenMax.set($('#home-scene'), { scale: 0, delay: 4.5 });
    TweenMax.set($('#desk-scene'), { scale: 1, delay: 4.5 });

    TweenMax.to($('#desk-text-1'), 1, { opacity: 1, delay: 4.5 });
    TweenMax.to($('#desk-text-2'), 1, { opacity: 1, delay: 5.5 });
    TweenMax.to($('#desk-desk'), 0.5, { opacity: 1, y: 0, delay: 5.5 });
    TweenMax.to($('#desk-lamp'), 0.5, { opacity: 0.8, y: 0, delay: 6 });
    TweenMax.to($('#desk-laptop'), 0.5, { opacity: 1, y: 0, delay: 6.5 });
    TweenMax.to($('#desk-browser'), 0.5, { opacity: 1, scale: 1, delay: 6.75 });
    TweenMax.to($('#desk-simulator'), 0.5, { opacity: 1, scale: 1, delay: 7 });
    TweenMax.to($('#desk-cactus'), 0.5, { opacity: 1, y: 0, delay: 7.5 });
    TweenMax.to($('#desk-mug'), 0.5, { opacity: 1, y: 0, delay: 8 });

    TweenMax.to($('#backdrop'), 1, { opacity: 1, backgroundColor: '#2b333f', scaleX: 1, delay: 9.5 });
    TweenMax.to($('#desk-browser'), 0.5, { opacity: 0, scale: 0.9, delay: 10 });
    TweenMax.to($('#desk-simulator'), 0.5, { opacity: 0, scale: 0.9, delay: 10.25 });
    TweenMax.to($('#desk-mug'), 1, { opacity: 0, y: -15, delay: 10 });
    TweenMax.to($('#desk-cactus'), 1, { x: 90, delay: 10 });
    TweenMax.to($('#desk-text-1'), 1, { fill: '#fff', delay: 10 });
    TweenMax.to($('#desk-text-2'), 1, { opacity: 0, x: -15, delay: 10 });
    TweenMax.to($('#desk-text-3'), 1, { opacity: 1, x: 0, delay: 10.25 });
    TweenMax.to($('#desk-editor'), 0.5, { opacity: 1, scale: 1, delay: 10.75 });
    TweenMax.to($('#desk-terminal'), 0.5, { opacity: 1, scale: 1, delay: 11 });
    TweenMax.to($('#desk-lamp'), 1, { opacity: 1, delay: 11.5 });
    TweenMax.to($('#desk-lamp-light'), 1, { opacity: 1, scale: 1, delay: 11.5 });
    TweenMax.to($('#desk-scene'), 1, { opacity: 0, delay: 14 });
    TweenMax.to($('#backdrop'), 1, { backgroundColor: '#fff4ea', delay: 14 });
    TweenMax.to($('#tabletop-text-1'), 1, { opacity: 1, delay: 14 });

    TweenMax.set($('#desk-scene'), { scale: 0, delay: 15 });
    TweenMax.set($('#tabletop-scene'), { scale: 1, delay: 15 });

    TweenMax.to($('#tabletop-text-2'), 1, { opacity: 1, delay: 15 });
    TweenMax.to($('#tabletop-illustration'), 1, { opacity: 1, x: 0, y: 0, rotation: 0, delay: 15 });
    TweenMax.to($('#tabletop-pencil'), 0.5, { opacity: 1, y: 0, delay: 15.5 });
    TweenMax.to($('#tabletop-tablet'), 0.5, { opacity: 1, y: 0, rotation: 0, delay: 16 });
    TweenMax.to($('#tabletop-mouse'), 0.5, { opacity: 1, x: 0, y: 0, delay: 16.5 });
    TweenMax.to($('#tabletop-keyboard'), 0.5, { opacity: 1, y: 0, delay: 17 });
    TweenMax.to($('#tabletop-tea'), 0.5, { opacity: 1, x: 0, y: 0, rotation: 0, delay: 17.5 });
    TweenMax.to($('#tabletop-text-1'), 1, { opacity: 0, y: -15, delay: 20 });
    TweenMax.to($('#tabletop-text-2'), 1, { opacity: 0, y: -15, delay: 20 });
    TweenMax.to($('#tabletop-illustration'), 1, { opacity: 0, x: -10, y: -10, delay: 20 });
    TweenMax.to($('#tabletop-pencil'), 1, { opacity: 0, x: -10, y: -10, delay: 20 });
    TweenMax.to($('#tabletop-tablet'), 1, { opacity: 0, x: -10, y: -10, delay: 20 });
    TweenMax.to($('#tabletop-mouse'), 2, { x: -90, y: -90, delay: 20 });
    TweenMax.to($('#tabletop-keyboard'), 2, { x: 20, y: -30, rotation: -10, delay: 20 });

    TweenMax.to($('#tabletop-text-3'), 1, { opacity: 1, delay: 21 });
    TweenMax.to($('#tabletop-text-4'), 1, { opacity: 1, delay: 22 });
    TweenMax.to($('#tabletop-collobos'), 0.5, { opacity: 1, y: 0, delay: 22 });
    TweenMax.to($('#tabletop-sixth-sense'), 0.5, { opacity: 1, y: 0, delay: 22.5 });
    TweenMax.to($('#tabletop-photoshopstar'), 0.5, { opacity: 1, y: 0, delay: 23 });
    TweenMax.to($('#tabletop-endorphin'), 0.5, { opacity: 1, y: 0, delay: 23.5 });
    TweenMax.to($('#tabletop-text-4'), 1, { opacity: 0, delay: 24 });
    TweenMax.to($('#tabletop-text-5'), 1, { opacity: 1, delay: 24 });
    TweenMax.to($('#tabletop-imprvd'), 0.5, { opacity: 1, y: 0, delay: 24 });
    TweenMax.to($('#tabletop-techhatch'), 0.5, { opacity: 1, y: 0, delay: 24.5 });
    TweenMax.to($('#tabletop-text-5'), 1, { opacity: 0, delay: 26 });
    TweenMax.to($('#tabletop-text-6'), 1, { opacity: 1, delay: 26 });
    TweenMax.to($('#tabletop-inm'), 0.5, { opacity: 1, y: 0, delay: 25 });
    TweenMax.to($('#tabletop-padilla'), 0.5, { opacity: 1, y: 0, delay: 25.5 });
    TweenMax.to($('#tabletop-text-6'), 1, { opacity: 0, delay: 28 });
    TweenMax.to($('#tabletop-text-7'), 1, { opacity: 1, delay: 28 });
    TweenMax.to($('#tabletop-scene'), 1, { opacity: 0, delay: 30 });
    TweenMax.to($('#backdrop'), 1, { backgroundColor: '#2b333f', delay: 30 });

    TweenMax.set($('#tabletop-scene'), { scale: 0, delay: 31 });
    TweenMax.set($('#space-scene'), { scale: 1, delay: 31 });

    TweenMax.to($('#space-stars'), 4, { opacity: 1, y: 0, delay: 31 });
    TweenMax.to($('#space-sun'), 4, { opacity: 1, y: 0, delay: 31 });
    TweenMax.to($('#space-earth'), 4, { opacity: 1, y: 0, delay: 31 });
    TweenMax.to($('#space-rocket'), 20, { x: -100, y: -700, delay: 35 });
    TweenMax.to($('#space-rocket-flames'), 0.1, { opacity: 0.8, scale: 0.9, delay: 35, yoyo: true, repeat: -1 });
    TweenMax.to($('#space-text-1'), 1, { opacity: 1, delay: 34 });
    TweenMax.to($('#space-text-2'), 3, { opacity: 1, delay: 36 });

    TweenMax.to($('#space-text-1'), 1, { opacity: 0, y: -25, delay: 41 });
    TweenMax.to($('#space-text-2'), 1, { opacity: 0, y: -25, delay: 41 });
    TweenMax.to($('#space-sun'), 1, { opacity: 0, y: -25, delay: 41 });
    TweenMax.to($('#space-earth'), 1, { opacity: 0, y: -25, delay: 41 });
    TweenMax.to($('#space-rocket'), 1, { opacity: 0, delay: 41 });
    TweenMax.set($('#space-sun'), { scale: 0, delay: 42 });
    TweenMax.set($('#space-earth'), { scale: 0, delay: 42 });
    TweenMax.set($('#space-rocket'), { scale: 0, delay: 42 });
    TweenMax.to($('#space-stars'), 4, { y: -200, delay: 42 });
    TweenMax.to($('#space-moon'), 4, { opacity: 1, y: 0, delay: 42 });
    TweenMax.to($('#space-text-3'), 1, { opacity: 1, delay: 45 });
    TweenMax.to($('#space-text-4'), 1, { opacity: 1, delay: 46 });
    TweenMax.to($('#space-cta'), 2, { opacity: 1, delay: 47 });
  }

  /*
   * Pretending to use jQuery selector.
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
})();
