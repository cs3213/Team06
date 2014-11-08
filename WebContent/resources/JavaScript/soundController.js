/**
 * 
 */
function playSound(soundIndex) {
	var mp3snd = "resources/music/" + soundIndex + ".mp3";
	var bkcolor = "000000";

	var player = document.getElementById("soundPlayer");

	var text = '<audio src="' + mp3snd
			+ '" autoplay="autoplay" +style="display:none">'
			+ '<object data="'
			+ mp3snd
			+ '" type="application/x-mplayer2" width="0" height="0">'
			+ '<param name="filename" value="'
			+ mp3snd
			+ '">'
			+ '<param name="autostart" value="1">'
			+ +'<embed height="2" width="2" src="'
			+ mp3snd
			+ '" pluginspage="http://www.apple.com/quicktime/download/" type="video/quicktime" controller="false" controls="false" autoplay="true" autostart="true" loop="false" bgcolor="#'
			+ bkcolor + '"><br>' + +'</embed></object>' + +'</audio>';
	
	player.innerHTML = text;

}

function stopSound(){
	var player = document.getElementById("soundPlayer");
	player.innerHTML= "";
}

function playTimeSound(soundIndex, time){
	alert("play");
	playSound(1);
	var mp3snd = "resources/music/" + soundIndex + ".mp3";
	var bkcolor = "000000";

	var player = document.getElementById("soundPlayer");

	var text = '<audio src="' + mp3snd
			+ '" autoplay="autoplay" +style="display:none">'
			+ '<object data="'
			+ mp3snd
			+ '" type="application/x-mplayer2" width="0" height="0">'
			+ '<param name="filename" value="'
			+ mp3snd
			+ '">'
			+ '<param name="autostart" value="1">'
			+ +'<embed height="2" width="2" src="'
			+ mp3snd
			+ '" pluginspage="http://www.apple.com/quicktime/download/" type="video/quicktime" controller="false" controls="false" autoplay="true" autostart="true" loop="false" bgcolor="#'
			+ bkcolor + '"><br>' + +'</embed></object>' + +'</audio>';
	
	player.innerHTML = text;
	var duration = time*1000;
	setTimeout(function(){player.innerHTML = "";},duration);
}