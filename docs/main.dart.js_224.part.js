((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
iyi(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
Dm(d){var x=0,w=B.j(y.f),v
var $async$Dm=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fKG?2:4
break
case 2:x=5
return B.b(C.kY.hk("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$Dm)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kY.hk("SystemChrome.setEnabledSystemUIOverlays",A.iyi(null),v),$async$Dm)
case 6:case 3:return B.h(null,w)}})
return B.i($async$Dm,w)},
azG:function azG(d,e){this.a=d
this.b=e},
hwz(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.el(w,y.a).bB(new A.h1S(),y.f).eH(new A.h1T())}}else if(d)A.hPu()}catch(u){}},
hPu(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.el(w,y.a).eH(new A.fH1())}catch(v){}},
bIE(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
h1S:function h1S(){},
h1T:function h1T(){},
fH1:function fH1(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[46],A)
D=c[173]
A.azG.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.h1S.prototype={
$1(d){return A.hPu()},
$S:48}
A.h1T.prototype={
$1(d){return null},
$S:32}
A.fH1.prototype={
$1(d){return null},
$S:32};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.azG,B.lo)
w(B.hs,[A.h1S,A.h1T,A.fH1])})()
var y={h:B.as("N<o>"),a:B.as("aG?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Hx=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.aok=new B.Q(10,6,10,0)
D.aDW=x([0.62,1],B.as("N<H>"))
D.dAi=x([C.aT,C.bQ,C.bo,C.ao,C.aT],B.as("N<u>"))
D.aYo=new B.hg(C.z,0,6.283185307179586,C.w,D.dAi,null,null)
D.add=new A.azG(2,"immersiveSticky")
D.LL=new A.azG(3,"edgeToEdge")
D.fKG=new A.azG(4,"manual")})()};
(a=>{a["NnTnl3sVsKwZoi5RbrC5HbsnXFY="]=a.current})($__dart_deferred_initializers__);