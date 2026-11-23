((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
ioP(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
D9(d){var x=0,w=B.j(y.f),v
var $async$D9=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fB5?2:4
break
case 2:x=5
return B.b(C.kO.hg("SystemChrome.setEnabledSystemUIMode",d.a8(),v),$async$D9)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kO.hg("SystemChrome.setEnabledSystemUIOverlays",A.ioP(null),v),$async$D9)
case 6:case 3:return B.h(null,w)}})
return B.i($async$D9,w)},
ayE:function ayE(d,e){this.a=d
this.b=e},
hox(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.ek(w,y.a).bE(new A.fVE(),y.f).eE(new A.fVF())}}else if(d)A.hHb()}catch(u){}},
hHb(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.ek(w,y.a).eE(new A.fAI())}catch(v){}},
bGR(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fVE:function fVE(){},
fVF:function fVF(){},
fAI:function fAI(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[53],A)
D=c[201]
A.ayE.prototype={
a8(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fVE.prototype={
$1(d){return A.hHb()},
$S:48}
A.fVF.prototype={
$1(d){return null},
$S:32}
A.fAI.prototype={
$1(d){return null},
$S:32};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ayE,B.kP)
w(B.fO,[A.fVE,A.fVF,A.fAI])})()
var y={h:B.ar("N<m>"),a:B.ar("aE?"),f:B.ar("~")};(function constants(){var x=a.makeConstList
D.H6=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.anj=new B.R(10,6,10,0)
D.aCE=x([0.62,1],B.ar("N<G>"))
D.dwK=x([C.aS,C.bP,C.bn,C.an,C.aS],B.ar("N<u>"))
D.aWL=new B.hb(C.z,0,6.283185307179586,C.x,D.dwK,null,null)
D.aci=new A.ayE(2,"immersiveSticky")
D.Lj=new A.ayE(3,"edgeToEdge")
D.fB5=new A.ayE(4,"manual")})()};
(a=>{a["aHXnUu7eP5zv4gnQoR+onteceXg="]=a.current})($__dart_deferred_initializers__);