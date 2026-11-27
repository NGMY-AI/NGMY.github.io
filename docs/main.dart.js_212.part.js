((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
isQ(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
Db(d){var x=0,w=B.j(y.f),v
var $async$Db=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fFw?2:4
break
case 2:x=5
return B.b(C.kV.hg("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$Db)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kV.hg("SystemChrome.setEnabledSystemUIOverlays",A.isQ(null),v),$async$Db)
case 6:case 3:return B.h(null,w)}})
return B.i($async$Db,w)},
az4:function az4(d,e){this.a=d
this.b=e},
hsc(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.ek(w,y.a).bD(new A.fZ2(),y.f).eD(new A.fZ3())}}else if(d)A.hKU()}catch(u){}},
hKU(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.ek(w,y.a).eD(new A.fE_())}catch(v){}},
bHB(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fZ2:function fZ2(){},
fZ3:function fZ3(){},
fE_:function fE_(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[46],A)
D=c[168]
A.az4.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fZ2.prototype={
$1(d){return A.hKU()},
$S:47}
A.fZ3.prototype={
$1(d){return null},
$S:26}
A.fE_.prototype={
$1(d){return null},
$S:26};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.az4,B.lk)
w(B.hp,[A.fZ2,A.fZ3,A.fE_])})()
var y={h:B.as("N<n>"),a:B.as("aG?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Hi=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.anG=new B.R(10,6,10,0)
D.aD7=x([0.62,1],B.as("N<H>"))
D.dxN=x([C.aS,C.bQ,C.bn,C.an,C.aS],B.as("N<u>"))
D.aXg=new B.hf(C.z,0,6.283185307179586,C.w,D.dxN,null,null)
D.acB=new A.az4(2,"immersiveSticky")
D.Lx=new A.az4(3,"edgeToEdge")
D.fFw=new A.az4(4,"manual")})()};
(a=>{a["hezi8+VfW1priFEmjhwHtWzjm1c="]=a.current})($__dart_deferred_initializers__);