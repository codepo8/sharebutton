sharebutton = function() {
  var config = {
    hashtags: '',
    link: '',
    account: '',
  }
  function set(elm, text) {
    var url = 'https://twitter.com/intent/tweet';
    url += '?text=' + encodeURIComponent(text);
    if (config.hashtags.length > 0) {
      url += '&hashtags=' + config.hashtags;
    }
    if (config.account !== '') {
      url += '&via=' + encodeURIComponent(config.account);
    }
    if (config.link !== '') {
      url += '&url=' + encodeURIComponent(config.link);
    }
    document.querySelector(elm).href = url;
  }
  return {set:set, config:config}
}();
