((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
iq4(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
D9(d){var x=0,w=B.j(y.f),v
var $async$D9=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fBf?2:4
break
case 2:x=5
return B.b(C.kR.hg("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$D9)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kR.hg("SystemChrome.setEnabledSystemUIOverlays",A.iq4(null),v),$async$D9)
case 6:case 3:return B.h(null,w)}})
return B.i($async$D9,w)},
ayK:function ayK(d,e){this.a=d
this.b=e},
hpN(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.en(w,y.a).bE(new A.fWS(),y.f).eD(new A.fWT())}}else if(d)A.hIq()}catch(u){}},
hIq(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.en(w,y.a).eD(new A.fBU())}catch(v){}},
bH0(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fWS:function fWS(){},
fWT:function fWT(){},
fBU:function fBU(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[53],A)
D=c[201]
A.ayK.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fWS.prototype={
$1(d){return A.hIq()},
$S:48}
A.fWT.prototype={
$1(d){return null},
$S:32}
A.fBU.prototype={
$1(d){return null},
$S:32};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ayK,B.kQ)
w(B.fR,[A.fWS,A.fWT,A.fBU])})()
var y={h:B.as("N<m>"),a:B.as("aE?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Ha=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.ank=new B.R(10,6,10,0)
D.aCI=x([0.62,1],B.as("N<H>"))
D.dwL=x([C.aS,C.bQ,C.bn,C.an,C.aS],B.as("N<u>"))
D.aWP=new B.he(C.z,0,6.283185307179586,C.x,D.dwL,null,null)
D.aci=new A.ayK(2,"immersiveSticky")
D.Ln=new A.ayK(3,"edgeToEdge")
D.fBf=new A.ayK(4,"manual")})()};
(a=>{a["QxjIHa8uj3qetg5xY77NSArsClM="]=a.current})($__dart_deferred_initializers__);