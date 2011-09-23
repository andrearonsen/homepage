var ANDRE = this.ANDRE || {};

(function (jQuery) { 
  "use strict";
  
  function displayTweets(container) {
    var items = [];

    jQuery.getJSON('http://twitter.com/status/user_timeline/andrearonsen.json?count=10&callback=?', function (data) {
          jQuery.each(data, function (key, val) {
            items.push('<p><dt><img src="design/images/tweet.png"/></dt>' + '<dd>' + val.text + '</dd></p>');
          }); 
          
          jQuery('<dl/>', {
            'class': 'tweets',
            html: items.join('')
          }).appendTo(container);
    });
  } 
  
  ANDRE.social = {
    displayTweets: displayTweets
  };  
}(jQuery));