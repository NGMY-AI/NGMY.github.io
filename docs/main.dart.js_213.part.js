((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
isn(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
Da(d){var x=0,w=B.j(y.f),v
var $async$Da=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fFs?2:4
break
case 2:x=5
return B.b(C.kV.hg("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$Da)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kV.hg("SystemChrome.setEnabledSystemUIOverlays",A.isn(null),v),$async$Da)
case 6:case 3:return B.h(null,w)}})
return B.i($async$Da,w)},
az2:function az2(d,e){this.a=d
this.b=e},
hrQ(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.ej(w,y.a).bE(new A.fYI(),y.f).eD(new A.fYJ())}}else if(d)A.hKy()}catch(u){}},
hKy(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.ej(w,y.a).eD(new A.fDF())}catch(v){}},
bHt(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fYI:function fYI(){},
fYJ:function fYJ(){},
fDF:function fDF(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[46],A)
D=c[169]
A.az2.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fYI.prototype={
$1(d){return A.hKy()},
$S:47}
A.fYJ.prototype={
$1(d){return null},
$S:29}
A.fDF.prototype={
$1(d){return null},
$S:29};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.az2,B.lk)
w(B.hq,[A.fYI,A.fYJ,A.fDF])})()
var y={h:B.as("N<n>"),a:B.as("aG?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Hj=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.anC=new B.R(10,6,10,0)
D.aD1=x([0.62,1],B.as("N<H>"))
D.dxJ=x([C.aS,C.bQ,C.bn,C.an,C.aS],B.as("N<u>"))
D.aXb=new B.he(C.z,0,6.283185307179586,C.w,D.dxJ,null,null)
D.acz=new A.az2(2,"immersiveSticky")
D.Lw=new A.az2(3,"edgeToEdge")
D.fFs=new A.az2(4,"manual")})()};
(a=>{a["T/LW6O/sNqZX/IXuxfnlImAfoSY="]=a.current})($__dart_deferred_initializers__);