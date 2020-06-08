//

// Tooltip hover effect
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(, {
  // options
  autoPlay: true,
});

// Java for Tabs





var options = {
  animateThreshold: 100,
  scrollPollInterval: 20
}
$('.aniview').AniView(options);