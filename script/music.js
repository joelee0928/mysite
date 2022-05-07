function rand(num)
{
return Math.floor(Math.random()*num)+1;
}
document.write("<embed src=audio/"+rand(18)+".mp3"+" hidden=true autostart=true volume=100 loop=no>"+"</embed>");

