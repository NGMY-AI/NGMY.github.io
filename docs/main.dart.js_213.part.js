((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
iuj(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
Dh(d){var x=0,w=B.j(y.f),v
var $async$Dh=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fGx?2:4
break
case 2:x=5
return B.b(C.kV.hi("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$Dh)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kV.hi("SystemChrome.setEnabledSystemUIOverlays",A.iuj(null),v),$async$Dh)
case 6:case 3:return B.h(null,w)}})
return B.i($async$Dh,w)},
azh:function azh(d,e){this.a=d
this.b=e},
hth(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.ej(w,y.a).bD(new A.fZZ(),y.f).eG(new A.h__())}}else if(d)A.hLZ()}catch(u){}},
hLZ(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.ej(w,y.a).eG(new A.fEo())}catch(v){}},
bHS(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fZZ:function fZZ(){},
h__:function h__(){},
fEo:function fEo(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[46],A)
D=c[169]
A.azh.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fZZ.prototype={
$1(d){return A.hLZ()},
$S:47}
A.h__.prototype={
$1(d){return null},
$S:27}
A.fEo.prototype={
$1(d){return null},
$S:27};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.azh,B.lm)
w(B.hq,[A.fZZ,A.h__,A.fEo])})()
var y={h:B.as("N<o>"),a:B.as("aF?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Hl=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.anP=new B.R(10,6,10,0)
D.aDi=x([0.62,1],B.as("N<H>"))
D.dyn=x([C.aS,C.bQ,C.bn,C.an,C.aS],B.as("N<u>"))
D.aXw=new B.hf(C.z,0,6.283185307179586,C.w,D.dyn,null,null)
D.acH=new A.azh(2,"immersiveSticky")
D.Ly=new A.azh(3,"edgeToEdge")
D.fGx=new A.azh(4,"manual")})()};
(a=>{a["ZdZbCvKpmjVMwjkMG1u/fCYtDWM="]=a.current})($__dart_deferred_initializers__);