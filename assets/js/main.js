getMeme();

var currentMeme = 0;

var audio = document.getElementById('audio');

function getMeme() {
	var request = new XMLHttpRequest();
	var httpurl = 'https://api.imgur.com/3/g/memes/viral/' + Math.floor((Math.random() * 30) + 1);
	request.open("GET", httpurl, true);
	request.setRequestHeader('Authorization', 'Client-ID 2eeac4357a889f9')
	request.send();

	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText);
			var counter = 0;
			$('#mememeup').on('click', function() {
				if (counter > 55) {
					counter = 0;
				} else {
					var id = data.data[counter].cover;
					$('img.meme').attr('src', 'http://imgur.com/'+id);
					counter++;
				}
			});
		}
	};
}

$('#mememeup').on('click', function() {
	audio.play();
});
