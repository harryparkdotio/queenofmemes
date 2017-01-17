var currentMeme = 0;

var audio = document.getElementById('audio');

$left = $('#left');

$left.css({"cursor":"pointer"});
$left.click(function() {
	audio.play();
	prevMeme();
	getMeme();
});

$right = $('#right');

$right.css({"cursor":"pointer"});
$right.click(function() {
	audio.play();
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
