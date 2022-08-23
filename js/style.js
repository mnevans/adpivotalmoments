var scrolly = d3.select("#scrolly__section");
var chart = scrolly.select(".scrolly__chart");
var content = scrolly.select(".scrolly__content");
var step = content.selectAll(".step");

// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 1);
  step.style("height", stepH + "px");

  var figureHeight = window.innerHeight * 0.75;
  var figureMarginTop = (window.innerHeight - figureHeight) / 2;

  chart
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop + "px");

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
  const textblock = step.select(".text-block");

  // add color to current step only
  textblock.classed("is-active", function(d, i) {
    return i === response.index;
  });

  // update graphic based on step
  const linkHead = 'https://flo.uri.sh/story/872914/embed#slide-'
  const slide = response.index

  d3.select('.scrolly__chart iframe')
    .attr('src', linkHead + slide);
}

function setupStickyfill() {
  d3.selectAll(".sticky").each(function() {
    Stickyfill.add(this);
  });
}

function init() {
  setupStickyfill();
  handleResize();
  scroller
    .setup({
      step: "#scrolly__section .scrolly__content .step",
      offset: 0.7,
      debug: true
    })
    .onStepEnter(handleStepEnter);

  // setup resize event
  window.addEventListener("resize", handleResize);
}

init();

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
