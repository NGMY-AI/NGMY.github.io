((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
inU(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
D6(d){var x=0,w=B.j(y.f),v
var $async$D6=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fB5?2:4
break
case 2:x=5
return B.b(C.kO.hf("SystemChrome.setEnabledSystemUIMode",d.a7(),v),$async$D6)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kO.hf("SystemChrome.setEnabledSystemUIOverlays",A.inU(null),v),$async$D6)
case 6:case 3:return B.h(null,w)}})
return B.i($async$D6,w)},
ayz:function ayz(d,e){this.a=d
this.b=e},
hnW(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.ek(w,y.a).bE(new A.fV6(),y.f).eE(new A.fV7())}}else if(d)A.hGA()}catch(u){}},
hGA(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.ek(w,y.a).eE(new A.fAf())}catch(v){}},
bGA(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fV6:function fV6(){},
fV7:function fV7(){},
fAf:function fAf(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[52],A)
D=c[200]
A.ayz.prototype={
a7(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fV6.prototype={
$1(d){return A.hGA()},
$S:48}
A.fV7.prototype={
$1(d){return null},
$S:32}
A.fAf.prototype={
$1(d){return null},
$S:32};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ayz,B.kO)
w(B.fO,[A.fV6,A.fV7,A.fAf])})()
var y={h:B.as("N<m>"),a:B.as("aE?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.H8=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.ani=new B.R(10,6,10,0)
D.aCD=x([0.62,1],B.as("N<G>"))
D.dwL=x([C.aS,C.bP,C.bn,C.an,C.aS],B.as("N<u>"))
D.aWK=new B.hb(C.z,0,6.283185307179586,C.x,D.dwL,null,null)
D.aci=new A.ayz(2,"immersiveSticky")
D.Ll=new A.ayz(3,"edgeToEdge")
D.fB5=new A.ayz(4,"manual")})()};
(a=>{a["f9f63oeGR6pa9DEyquPC8zbjOH4="]=a.current})($__dart_deferred_initializers__);