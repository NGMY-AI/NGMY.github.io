((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
ipL(d){var x,w,v=B.a([],y.h)
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
return B.b(C.kQ.hg("SystemChrome.setEnabledSystemUIOverlays",A.ipL(null),v),$async$D9)
case 6:case 3:return B.h(null,w)}})
return B.i($async$D9,w)},
ayI:function ayI(d,e){this.a=d
this.b=e},
hpt(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.em(w,y.a).bE(new A.fWA(),y.f).eD(new A.fWB())}}else if(d)A.hI6()}catch(u){}},
hI6(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.em(w,y.a).eD(new A.fBD())}catch(v){}},
bGZ(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fWA:function fWA(){},
fWB:function fWB(){},
fBD:function fBD(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[53],A)
D=c[201]
A.ayI.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fWA.prototype={
$1(d){return A.hI6()},
$S:47}
A.fWB.prototype={
$1(d){return null},
$S:31}
A.fBD.prototype={
$1(d){return null},
$S:31};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ayI,B.kQ)
w(B.fR,[A.fWA,A.fWB,A.fBD])})()
var y={h:B.ar("N<n>"),a:B.ar("aE?"),f:B.ar("~")};(function constants(){var x=a.makeConstList
D.Ha=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.ank=new B.R(10,6,10,0)
D.aCH=x([0.62,1],B.ar("N<H>"))
D.dwI=x([C.aS,C.bP,C.bn,C.an,C.aS],B.ar("N<u>"))
D.aWO=new B.he(C.z,0,6.283185307179586,C.x,D.dwI,null,null)
D.aci=new A.ayI(2,"immersiveSticky")
D.Ln=new A.ayI(3,"edgeToEdge")
D.fB8=new A.ayI(4,"manual")})()};
(a=>{a["AS/kx6zacMTG1iCjqf9whcprN1Q="]=a.current})($__dart_deferred_initializers__);