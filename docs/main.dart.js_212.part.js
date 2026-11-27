((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
it0(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
Db(d){var x=0,w=B.j(y.f),v
var $async$Db=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fFx?2:4
break
case 2:x=5
return B.b(C.kV.hg("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$Db)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kV.hg("SystemChrome.setEnabledSystemUIOverlays",A.it0(null),v),$async$Db)
case 6:case 3:return B.h(null,w)}})
return B.i($async$Db,w)},
az5:function az5(d,e){this.a=d
this.b=e},
hsm(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.ek(w,y.a).bD(new A.fZc(),y.f).eD(new A.fZd())}}else if(d)A.hL3()}catch(u){}},
hL3(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.ek(w,y.a).eD(new A.fEa())}catch(v){}},
bHG(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fZc:function fZc(){},
fZd:function fZd(){},
fEa:function fEa(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[46],A)
D=c[168]
A.az5.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fZc.prototype={
$1(d){return A.hL3()},
$S:48}
A.fZd.prototype={
$1(d){return null},
$S:27}
A.fEa.prototype={
$1(d){return null},
$S:27};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.az5,B.lk)
w(B.hp,[A.fZc,A.fZd,A.fEa])})()
var y={h:B.as("N<n>"),a:B.as("aG?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Hi=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.anH=new B.R(10,6,10,0)
D.aD8=x([0.62,1],B.as("N<H>"))
D.dxO=x([C.aS,C.bQ,C.bn,C.an,C.aS],B.as("N<u>"))
D.aXh=new B.hf(C.z,0,6.283185307179586,C.w,D.dxO,null,null)
D.acB=new A.az5(2,"immersiveSticky")
D.Ly=new A.az5(3,"edgeToEdge")
D.fFx=new A.az5(4,"manual")})()};
(a=>{a["qO1l5ZCshjJ9ZVc8bc1Vas3rgg4="]=a.current})($__dart_deferred_initializers__);