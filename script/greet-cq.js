var msg="          -.-.  --.-  -.-.  --.-  -..  .  ...-  .-.  ..---  -..-  -.-.  .-..          CQ CQ de VR2XCL"
var banTime1;
function banner(){
        msg=msg.substring(1,msg.length)+msg.substring(0,1);
        document.banner.text.value=msg;
        banTime1=setTimeout("banner()",150);
}