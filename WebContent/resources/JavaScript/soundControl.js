/**
 * 
 */
function playSound(index){
var mp3snd = "resources/music/"+index+".mp3";
var bkcolor = "000000";

document.write('<audio src="'+mp3snd+'" autoplay="autoplay" +style="display:none">');
document.write('<object data="'+mp3snd+'" type="application/x-mplayer2" width="0" height="0">');
document.write('<param name="filename" value="'+mp3snd+'">');
document.write('<param name="autostart" value="1">');
document.write('<embed height="2" width="2" src="'+mp3snd+'" pluginspage="http://www.apple.com/quicktime/download/" type="video/quicktime" controller="false" controls="false" autoplay="true" autostart="true" loop="false" bgcolor="#'+bkcolor+'"><br>');
document.write('</embed></object>');
document.write('</audio>');

}