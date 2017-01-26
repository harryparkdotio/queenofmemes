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
	var request = new XMLHttpRequest();
	var httpurl = 'https://api.imgur.com/3/g/memes/viral/' + Math.floor((Math.random() * 30) + 1);
	request.open("GET", httpurl, true);
	request.setRequestHeader('Authorization', 'Client-ID 2eeac4357a889f9')
	request.send();

	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText).data[0].link;
			console.log(data);
		}
	};
}
