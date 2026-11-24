((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
iph(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
D9(d){var x=0,w=B.j(y.f),v
var $async$D9=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fB8?2:4
break
case 2:x=5
return B.b(C.kQ.hg("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$D9)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kQ.hg("SystemChrome.setEnabledSystemUIOverlays",A.iph(null),v),$async$D9)
case 6:case 3:return B.h(null,w)}})
return B.i($async$D9,w)},
ayH:function ayH(d,e){this.a=d
this.b=e},
hp1(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.el(w,y.a).bE(new A.fW6(),y.f).eE(new A.fW7())}}else if(d)A.hHF()}catch(u){}},
hHF(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.el(w,y.a).eE(new A.fBa())}catch(v){}},
bGU(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fW6:function fW6(){},
fW7:function fW7(){},
fBa:function fBa(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[53],A)
D=c[201]
A.ayH.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fW6.prototype={
$1(d){return A.hHF()},
$S:48}
A.fW7.prototype={
$1(d){return null},
$S:32}
A.fBa.prototype={
$1(d){return null},
$S:32};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ayH,B.kQ)
w(B.fQ,[A.fW6,A.fW7,A.fBa])})()
var y={h:B.ar("N<m>"),a:B.ar("aE?"),f:B.ar("~")};(function constants(){var x=a.makeConstList
D.H9=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.ank=new B.R(10,6,10,0)
D.aCI=x([0.62,1],B.ar("N<G>"))
D.dwK=x([C.aS,C.bP,C.bn,C.an,C.aS],B.ar("N<u>"))
D.aWP=new B.hc(C.z,0,6.283185307179586,C.x,D.dwK,null,null)
D.aci=new A.ayH(2,"immersiveSticky")
D.Ll=new A.ayH(3,"edgeToEdge")
D.fB8=new A.ayH(4,"manual")})()};
(a=>{a["9GqaABsDxKtc4wn9fysggj079VI="]=a.current})($__dart_deferred_initializers__);