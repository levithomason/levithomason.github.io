function initDateSince() {
  var $sinceReadouts = document.querySelectorAll('[data-since-year]')
  var thisYear = new Date().getFullYear()

  $sinceReadouts.forEach(function forEachSinceReadout($readout) {
    var years = +thisYear - $readout.getAttribute('data-since-year')

    $readout.innerText = years + ' years'
  })
}

function initLinks() {
  var $externalLinks = document.querySelectorAll('a[href]')
  $externalLinks.forEach(function forEachLink($link) {
    if ($link.getAttribute('href')[0] !== '#') $link.target = '_blank'
  })
}

window.addEventListener('load', function handleWindowLoad(e) {
  initDateSince()
  initLinks()
})
