((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
ivW(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
Dj(d){var x=0,w=B.j(y.f),v
var $async$Dj=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fIE?2:4
break
case 2:x=5
return B.b(C.kW.hi("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$Dj)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kW.hi("SystemChrome.setEnabledSystemUIOverlays",A.ivW(null),v),$async$Dj)
case 6:case 3:return B.h(null,w)}})
return B.i($async$Dj,w)},
azq:function azq(d,e){this.a=d
this.b=e},
huz(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.ek(w,y.a).bC(new A.h04(),y.f).eG(new A.h05())}}else if(d)A.hNk()}catch(u){}},
hNk(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.ek(w,y.a).eG(new A.fFq())}catch(v){}},
bId(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
h04:function h04(){},
h05:function h05(){},
fFq:function fFq(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[46],A)
D=c[171]
A.azq.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.h04.prototype={
$1(d){return A.hNk()},
$S:48}
A.h05.prototype={
$1(d){return null},
$S:29}
A.fFq.prototype={
$1(d){return null},
$S:29};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.azq,B.ln)
w(B.hq,[A.h04,A.h05,A.fFq])})()
var y={h:B.as("N<o>"),a:B.as("aH?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Hp=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.ao7=new B.R(10,6,10,0)
D.aDG=x([0.62,1],B.as("N<H>"))
D.dzz=x([C.aS,C.bQ,C.bo,C.an,C.aS],B.as("N<u>"))
D.aY1=new B.hf(C.z,0,6.283185307179586,C.w,D.dzz,null,null)
D.acZ=new A.azq(2,"immersiveSticky")
D.LC=new A.azq(3,"edgeToEdge")
D.fIE=new A.azq(4,"manual")})()};
(a=>{a["Ya46BG4zqD0yJLNNheuw7Gmh0IQ="]=a.current})($__dart_deferred_initializers__);