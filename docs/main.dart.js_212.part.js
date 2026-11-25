((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
iqA(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
D8(d){var x=0,w=B.j(y.f),v
var $async$D8=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fBf?2:4
break
case 2:x=5
return B.b(C.kR.hg("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$D8)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kR.hg("SystemChrome.setEnabledSystemUIOverlays",A.iqA(null),v),$async$D8)
case 6:case 3:return B.h(null,w)}})
return B.i($async$D8,w)},
ayJ:function ayJ(d,e){this.a=d
this.b=e},
hqd(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.ei(w,y.a).bE(new A.fXa(),y.f).eD(new A.fXb())}}else if(d)A.hIU()}catch(u){}},
hIU(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.ei(w,y.a).eD(new A.fCc())}catch(v){}},
bH3(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fXa:function fXa(){},
fXb:function fXb(){},
fCc:function fCc(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[47],A)
D=c[171]
A.ayJ.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fXa.prototype={
$1(d){return A.hIU()},
$S:48}
A.fXb.prototype={
$1(d){return null},
$S:27}
A.fCc.prototype={
$1(d){return null},
$S:27};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ayJ,B.lg)
w(B.hf,[A.fXa,A.fXb,A.fCc])})()
var y={h:B.as("N<n>"),a:B.as("aF?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Ha=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.ank=new B.R(10,6,10,0)
D.aCI=x([0.62,1],B.as("N<H>"))
D.dwM=x([C.aS,C.bQ,C.bn,C.an,C.aS],B.as("N<u>"))
D.aWP=new B.hd(C.z,0,6.283185307179586,C.x,D.dwM,null,null)
D.aci=new A.ayJ(2,"immersiveSticky")
D.Lo=new A.ayJ(3,"edgeToEdge")
D.fBf=new A.ayJ(4,"manual")})()};
(a=>{a["uqBHEErfvPzYnBHRN5wblViDbUM="]=a.current})($__dart_deferred_initializers__);