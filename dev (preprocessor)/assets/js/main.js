$left = $('#left');

$left.css({"cursor":"pointer"});
$left.click(function() {
  prevMeme();
});

$right = $('#right');

$right.css({"cursor":"pointer"});
$right.click(function() {
  nextMeme();
});


$(function() {
  $('a[href^="#static"]').bind('click', function(event) {
    event.preventDefault();
  });
});

function nextMeme() {

}

function prevMeme() {

}