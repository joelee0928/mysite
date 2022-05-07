function rand(num)
{
return Math.floor(Math.random()*num)+1
}
document.write('<object data="audio"+rand(26)+".mid" width="0" height="0" hidden="yes">');
document.write('<param name="controller" value="false">');
document.write('<param name="autoplay" value="yes">');
document.write('<param name="volume" value="100">');
document.write('</object>');
