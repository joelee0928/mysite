var cq="          -.-.  --.-  -.-.  --.-  -..  .  ...-  .-.  ..---  -..-  -.-.  .-..          CQ CQ de VR2XCL"
var xmas="          Wish you merry Christmas and happy new year         May God bless you all through the year          "
var msg=cq
var banTime1;
function banner(){
        msg=msg.substring(1,msg.length)+msg.substring(0,1);
        document.banner.text.value=msg;
        banTime1=setTimeout("banner()",150);
}