((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
ipF(d){var x,w,v=B.a([],y.h)
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
return B.b(C.kQ.hg("SystemChrome.setEnabledSystemUIOverlays",A.ipF(null),v),$async$D9)
case 6:case 3:return B.h(null,w)}})
return B.i($async$D9,w)},
ayI:function ayI(d,e){this.a=d
this.b=e},
hpn(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.em(w,y.a).bE(new A.fWu(),y.f).eD(new A.fWv())}}else if(d)A.hI0()}catch(u){}},
hI0(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.em(w,y.a).eD(new A.fBx())}catch(v){}},
bGW(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fWu:function fWu(){},
fWv:function fWv(){},
fBx:function fBx(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[53],A)
D=c[201]
A.ayI.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fWu.prototype={
$1(d){return A.hI0()},
$S:47}
A.fWv.prototype={
$1(d){return null},
$S:31}
A.fBx.prototype={
$1(d){return null},
$S:31};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ayI,B.kQ)
w(B.fR,[A.fWu,A.fWv,A.fBx])})()
var y={h:B.ar("N<n>"),a:B.ar("aE?"),f:B.ar("~")};(function constants(){var x=a.makeConstList
D.H9=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.ank=new B.R(10,6,10,0)
D.aCH=x([0.62,1],B.ar("N<G>"))
D.dwH=x([C.aS,C.bP,C.bn,C.an,C.aS],B.ar("N<u>"))
D.aWO=new B.he(C.z,0,6.283185307179586,C.x,D.dwH,null,null)
D.aci=new A.ayI(2,"immersiveSticky")
D.Lm=new A.ayI(3,"edgeToEdge")
D.fB8=new A.ayI(4,"manual")})()};
(a=>{a["d9BbA8S7dHIHd7lj7x87sEw+rDc="]=a.current})($__dart_deferred_initializers__);