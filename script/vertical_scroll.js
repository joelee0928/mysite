var content='<p>Visit <a href="http://www.javascriptkit.com">JavaScript Kit</a> for JavaScript tutorials and over 400 free scripts</p><p><a href="http://freewarejava.com">Freewarejava.com</a>- direct links to Java applets and resources</p><p>Stay up to date on current news and events. Visit <a href="http://www.msnbc.com">MSNBC.com</a></p><p><a href="http://www.dynamicdrive.com">Dynamic Drive</a> is your definitive source for DHTML scripts and components.</p>';

var boxheight=150;        // BACKGROUND BOX HEIGHT IN PIXELS.
var boxwidth=150;         // BACKGROUND BOX WIDTH IN PIXELS.
var boxcolor="#FFF6e9";   // BACKGROUND BOX COLOR.
var speed=50;             // SPEED OF SCROLL IN MILLISECONDS (1 SECOND=1000 MILLISECONDS)..
var pixelstep=2;          // PIXELS "STEPS" PER REPITITION.
var godown=false;         // TOP TO BOTTOM=TRUE , BOTTOM TO TOP=FALSE

// DO NOT EDIT BEYOND THIS POINT

var outer,inner,elementheight,ref,refX,refY;
var w3c=(document.getElementById)?true:false;
var ns4=(document.layers)?true:false;
var ie4=(document.all && !w3c)?true:false;
var ie5=(document.all && w3c)?true:false;
var ns6=(w3c && navigator.appName.indexOf("Netscape")>=0)?true:false;
var txt='';
if(ns4){
txt+='<table cellpadding=0 cellspacing=0 border=0 height='+boxheight+' width='+boxwidth+'><tr><td>';
txt+='<ilayer name="ref" bgcolor="'+boxcolor+'" width='+boxwidth+' height='+boxheight+'></ilayer>';
txt+='</td></tr></table>'
txt+='<layer name="outer" bgcolor="'+boxcolor+'" visibility="hidden" width='+boxwidth+' height='+boxheight+'>';
txt+='<layer  name="inner"  width='+(boxwidth-4)+' height='+(boxheight-4)+' visibility="hidden" left="2" top="2" >'+content+'</layer>';
txt+='</layer>';
}else{
txt+='<div id="ref" style="position:relative; width:'+boxwidth+'; height:'+boxheight+'; background-color:'+boxcolor+';" ></div>';
txt+='<div id="outer" style="position:absolute; width:'+boxwidth+'; height:'+boxheight+'; visibility:hidden; background-color:'+boxcolor+'; overflow:hidden" >';
txt+='<div id="inner"  style="position:absolute; visibility:visible; left:2px; top:2px; width:'+(boxwidth-4)+'; overflow:hidden; cursor:default;">'+content+'</div>';
txt+='</div>';
}
document.write(txt);

function getElHeight(el){
if(ns4)return (el.document.height)? el.document.height : el.clip.bottom-el.clip.top;
else if(ie4||ie5)return (el.style.height)? el.style.height : el.clientHeight;
else return (el.style.height)? parseInt(el.style.height):parseInt(el.offsetHeight);
}

function getPageLeft(el){
var x;
if(ns4)return el.pageX;
if(ie4||w3c){
x = 0;
while(el.offsetParent!=null){
x+=el.offsetLeft;
el=el.offsetParent;
}
x+=el.offsetLeft;
return x;
}}

function getPageTop(el){
var y;
if(ns4)return el.pageY;
if(ie4||w3c){
y=0;
while(el.offsetParent!=null){
y+=el.offsetTop;
el=el.offsetParent;
}
y+=el.offsetTop;
return y;
}}

function scrollbox(){
if(ns4){
inner.top+=(godown)? pixelstep: -pixelstep;
if(godown){
if(inner.top>boxheight)inner.top=-elementheight;
}else{
if(inner.top<2-elementheight)inner.top=boxheight+2;
}}else{
inner.style.top=parseInt(inner.style.top)+((godown)? pixelstep: -pixelstep)+'px';
if(godown){
if(parseInt(inner.style.top)>boxheight)inner.style.top=-elementheight+'px';
}else{
if(parseInt(inner.style.top)<2-elementheight)inner.style.top=boxheight+2+'px';
}}}

window.onresize=function(){
if(ns4)setTimeout('history.go(0)', 400);
else{
outer.style.left=getPageLeft(ref)+'px';
outer.style.top=getPageTop(ref)+'px';
}}

window.onload=function(){
outer=(ns4)?document.layers['outer']:(ie4)?document.all['outer']:document.getElementById('outer');
inner=(ns4)?outer.document.layers['inner']:(ie4)?document.all['inner']:document.getElementById('inner');
ref=(ns4)?document.layers['ref']:(ie4)?document.all['ref']:document.getElementById('ref');
elementheight=getElHeight(inner);
if(ns4){
outer.moveTo(getPageLeft(ref),getPageTop(ref));
outer.clip.width=boxwidth;
outer.clip.height=boxheight;
inner.top=(godown)? -elementheight : boxheight-2;
inner.clip.width=boxwidth-4;
inner.clip.height=elementheight;
outer.visibility="show";
inner.visibility="show";
}else{
outer.style.left=getPageLeft(ref)+'px';
outer.style.top=getPageTop(ref)+'px';
inner.style.top=((godown)? -elementheight : boxheight)+'px';
inner.style.clip='rect(0px, '+(boxwidth-4)+'px, '+(elementheight)+'px, 0px)';
outer.style.visibility="visible";
}
setInterval('scrollbox()',speed);
}
</script>

<p align="center">This free script provided by<br />
<a href="http://www.javascriptkit.com">JavaScript
Kit</a></p><script language="javascript">

//Vertical Scroller v1.2- by Brian of www.ScriptAsylum.com
//Updated for bug fixes
//Visit JavaScript Kit (http://javascriptkit.com) for script

//ENTER CONTENT TO SCROLL BELOW.
var content='<p>Visit <a href="http://www.javascriptkit.com">JavaScript Kit</a> for JavaScript tutorials and over 400 free scripts</p><p><a href="http://freewarejava.com">Freewarejava.com</a>- direct links to Java applets and resources</p><p>Stay up to date on current news and events. Visit <a href="http://www.msnbc.com">MSNBC.com</a></p><p><a href="http://www.dynamicdrive.com">Dynamic Drive</a> is your definitive source for DHTML scripts and components.</p>';

var boxheight=150;        // BACKGROUND BOX HEIGHT IN PIXELS.
var boxwidth=150;         // BACKGROUND BOX WIDTH IN PIXELS.
var boxcolor="#FFF6e9";   // BACKGROUND BOX COLOR.
var speed=50;             // SPEED OF SCROLL IN MILLISECONDS (1 SECOND=1000 MILLISECONDS)..
var pixelstep=2;          // PIXELS "STEPS" PER REPITITION.
var godown=false;         // TOP TO BOTTOM=TRUE , BOTTOM TO TOP=FALSE

// DO NOT EDIT BEYOND THIS POINT

var outer,inner,elementheight,ref,refX,refY;
var w3c=(document.getElementById)?true:false;
var ns4=(document.layers)?true:false;
var ie4=(document.all && !w3c)?true:false;
var ie5=(document.all && w3c)?true:false;
var ns6=(w3c && navigator.appName.indexOf("Netscape")>=0)?true:false;
var txt='';
if(ns4){
txt+='<table cellpadding=0 cellspacing=0 border=0 height='+boxheight+' width='+boxwidth+'><tr><td>';
txt+='<ilayer name="ref" bgcolor="'+boxcolor+'" width='+boxwidth+' height='+boxheight+'></ilayer>';
txt+='</td></tr></table>'
txt+='<layer name="outer" bgcolor="'+boxcolor+'" visibility="hidden" width='+boxwidth+' height='+boxheight+'>';
txt+='<layer  name="inner"  width='+(boxwidth-4)+' height='+(boxheight-4)+' visibility="hidden" left="2" top="2" >'+content+'</layer>';
txt+='</layer>';
}else{
txt+='<div id="ref" style="position:relative; width:'+boxwidth+'; height:'+boxheight+'; background-color:'+boxcolor+';" ></div>';
txt+='<div id="outer" style="position:absolute; width:'+boxwidth+'; height:'+boxheight+'; visibility:hidden; background-color:'+boxcolor+'; overflow:hidden" >';
txt+='<div id="inner"  style="position:absolute; visibility:visible; left:2px; top:2px; width:'+(boxwidth-4)+'; overflow:hidden; cursor:default;">'+content+'</div>';
txt+='</div>';
}
document.write(txt);

function getElHeight(el){
if(ns4)return (el.document.height)? el.document.height : el.clip.bottom-el.clip.top;
else if(ie4||ie5)return (el.style.height)? el.style.height : el.clientHeight;
else return (el.style.height)? parseInt(el.style.height):parseInt(el.offsetHeight);
}

function getPageLeft(el){
var x;
if(ns4)return el.pageX;
if(ie4||w3c){
x = 0;
while(el.offsetParent!=null){
x+=el.offsetLeft;
el=el.offsetParent;
}
x+=el.offsetLeft;
return x;
}}

function getPageTop(el){
var y;
if(ns4)return el.pageY;
if(ie4||w3c){
y=0;
while(el.offsetParent!=null){
y+=el.offsetTop;
el=el.offsetParent;
}
y+=el.offsetTop;
return y;
}}

function scrollbox(){
if(ns4){
inner.top+=(godown)? pixelstep: -pixelstep;
if(godown){
if(inner.top>boxheight)inner.top=-elementheight;
}else{
if(inner.top<2-elementheight)inner.top=boxheight+2;
}}else{
inner.style.top=parseInt(inner.style.top)+((godown)? pixelstep: -pixelstep)+'px';
if(godown){
if(parseInt(inner.style.top)>boxheight)inner.style.top=-elementheight+'px';
}else{
if(parseInt(inner.style.top)<2-elementheight)inner.style.top=boxheight+2+'px';
}}}

window.onresize=function(){
if(ns4)setTimeout('history.go(0)', 400);
else{
outer.style.left=getPageLeft(ref)+'px';
outer.style.top=getPageTop(ref)+'px';
}}

window.onload=function(){
outer=(ns4)?document.layers['outer']:(ie4)?document.all['outer']:document.getElementById('outer');
inner=(ns4)?outer.document.layers['inner']:(ie4)?document.all['inner']:document.getElementById('inner');
ref=(ns4)?document.layers['ref']:(ie4)?document.all['ref']:document.getElementById('ref');
elementheight=getElHeight(inner);
if(ns4){
outer.moveTo(getPageLeft(ref),getPageTop(ref));
outer.clip.width=boxwidth;
outer.clip.height=boxheight;
inner.top=(godown)? -elementheight : boxheight-2;
inner.clip.width=boxwidth-4;
inner.clip.height=elementheight;
outer.visibility="show";
inner.visibility="show";
}else{
outer.style.left=getPageLeft(ref)+'px';
outer.style.top=getPageTop(ref)+'px';
inner.style.top=((godown)? -elementheight : boxheight)+'px';
inner.style.clip='rect(0px, '+(boxwidth-4)+'px, '+(elementheight)+'px, 0px)';
outer.style.visibility="visible";
}
setInterval('scrollbox()',speed);
}