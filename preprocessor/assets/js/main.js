var currentMeme = 0;

$left = $('#left');

$left.css({"cursor":"pointer"});
$left.click(function() {
  prevMeme();
  getMeme();
});

$right = $('#right');

$right.css({"cursor":"pointer"});
$right.click(function() {
  nextMeme();
  getMeme();
});

$(function() {
  $('a[href^="#static"]').bind('click', function(event) {
    event.preventDefault();
  });
});

function nextMeme() {
	currentMeme += 1;
}

function prevMeme() {
	if (currentMeme > 0) {
		currentMeme -= 1;
	}
}

function getMeme() {
	console.log(currentMeme);
	// return url;
}