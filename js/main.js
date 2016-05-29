$(document).on('ready', function(){


//Added code to optimize experience depending on viewport size found at https://andylangton.co.uk/blog/development/get-viewportwindow-size-width-and-height-javascript.
  function getViewport() {

   var viewPortWidth;
   var viewPortHeight;

   // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
   if (typeof window.innerWidth != 'undefined') {
     viewPortWidth = window.innerWidth,
     viewPortHeight = window.innerHeight
   }

  // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
   else if (typeof document.documentElement != 'undefined'&& typeof document.documentElement.clientWidth !=
   'undefined' && document.documentElement.clientWidth !== 0) {
      viewPortWidth = document.documentElement.clientWidth,
      viewPortHeight = document.documentElement.clientHeight
   }

   // older versions of IE
   else {
     viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
     viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
   }
   return [viewPortWidth, viewPortHeight];
  }

});

// added Scroll reveal

/* ******* Need to work through *******
window.sr = ScrollReveal();
sr.reveal('#navigation');
sr.reveal('#aboutimage');
sr.reveal('#imageheader');
sr.reveal('#videoheader');
*/
