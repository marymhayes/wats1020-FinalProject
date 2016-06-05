$(document).on('ready', function(){
  
// Added on click event listener for That Thing email address submit button
// and that hides email form and shows thank you note.
  $( '#thatthingform .btn' ).on( 'click', function() {
    console.log( "email address submitted" );
    
    $('#thatthingform').hide();
    
    $('#thanks').show('fast');
});
  
  // Added variable and function for Twitter Post Fetcher created by 
  // Jason Mayes https://github.com/jasonmayes/Twitter-Post-Fetcher
  // Limited shown tweets to single most recent. Links enabled, hid
  // retweet, reply options.
  var twitterFeed = {
  "id": '738830171759738880',
  "domId": 'twitterFeed',
  "maxTweets": 1,
  "enableLinks": true,
  "showPermalinks": false,
  "showInteraction": false
};
twitterFetcher.fetch(twitterFeed);

// added Scroll reveal...fixed and made work thanks to help from Mary Pringle!
  window.sr = ScrollReveal();
  sr.reveal('#introimage');
  sr.reveal('#bio');
  sr.reveal('#links');
  sr.reveal('#videoheader');
  sr.reveal('#thatthing');


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
