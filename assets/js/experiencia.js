setTimeout(function() {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
    document.getElementById('content').style.opacity = 1;
}, 100);    

var links = document.querySelectorAll('header nav ul li a');
links.forEach(function(link) {
  link.addEventListener('mouseenter', function() {
    links.forEach(function(otherLink) {
      if (otherLink !== link) {
        otherLink.classList.add('opaque');
      }
    });
  });

  link.addEventListener('mouseleave', function() {
    links.forEach(function(otherLink) {
      otherLink.classList.remove('opaque');
    });
  });
});