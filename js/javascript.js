const $arrow = $('#arrow');
const $body = $('body, html');
let $top = $('main').offset().top;
const $main = $('main');

$arrow.on('click', function () {
  $body.animate(
    {
      scrollTop: $top,
    },
    1000
  );
});
