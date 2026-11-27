((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
iuN(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
Dh(d){var x=0,w=B.j(y.f),v
var $async$Dh=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fHb?2:4
break
case 2:x=5
return B.b(C.kV.hi("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$Dh)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kV.hi("SystemChrome.setEnabledSystemUIOverlays",A.iuN(null),v),$async$Dh)
case 6:case 3:return B.h(null,w)}})
return B.i($async$Dh,w)},
azi:function azi(d,e){this.a=d
this.b=e},
htG(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.ej(w,y.a).bD(new A.h_i(),y.f).eG(new A.h_j())}}else if(d)A.hMn()}catch(u){}},
hMn(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.ej(w,y.a).eG(new A.fEH())}catch(v){}},
bHX(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
h_i:function h_i(){},
h_j:function h_j(){},
fEH:function fEH(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[46],A)
D=c[169]
A.azi.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.h_i.prototype={
$1(d){return A.hMn()},
$S:47}
A.h_j.prototype={
$1(d){return null},
$S:27}
A.fEH.prototype={
$1(d){return null},
$S:27};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.azi,B.lm)
w(B.hq,[A.h_i,A.h_j,A.fEH])})()
var y={h:B.as("N<o>"),a:B.as("aH?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Hl=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.anU=new B.R(10,6,10,0)
D.aDq=x([0.62,1],B.as("N<H>"))
D.dyP=x([C.aS,C.bQ,C.bn,C.an,C.aS],B.as("N<u>"))
D.aXE=new B.hf(C.z,0,6.283185307179586,C.w,D.dyP,null,null)
D.acJ=new A.azi(2,"immersiveSticky")
D.Ly=new A.azi(3,"edgeToEdge")
D.fHb=new A.azi(4,"manual")})()};
(a=>{a["HI4gNCEDwe7ikl5mg0M8nK4Pba0="]=a.current})($__dart_deferred_initializers__);