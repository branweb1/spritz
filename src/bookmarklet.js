javascript:(function() {
  var alreadyCreated = !!Array.prototype.slice
                              .call(document.querySelectorAll('script'))
                              .map(function(el){return el.getAttribute('src')})
                              .filter(function(src) {
                                return src && src.toLowerCase().indexOf('branweb1') > -1;
                              })
                              .length;
  if (alreadyCreated) {
    readerInit();
    return;
  }

  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('async', 'true');
  script.setAttribute('src', 'https://branweb1.github.io/reader/dist/reader.js');
  document.documentElement.appendChild(script);
  script.onload = function(){
    readerInit();
  }
})();
