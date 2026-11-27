((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
ivp(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
Di(d){var x=0,w=B.j(y.f),v
var $async$Di=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fIm?2:4
break
case 2:x=5
return B.b(C.kV.hi("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$Di)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kV.hi("SystemChrome.setEnabledSystemUIOverlays",A.ivp(null),v),$async$Di)
case 6:case 3:return B.h(null,w)}})
return B.i($async$Di,w)},
azm:function azm(d,e){this.a=d
this.b=e},
hub(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.ej(w,y.a).bD(new A.h_G(),y.f).eG(new A.h_H())}}else if(d)A.hMW()}catch(u){}},
hMW(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.ej(w,y.a).eG(new A.fF3())}catch(v){}},
bI4(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
h_G:function h_G(){},
h_H:function h_H(){},
fF3:function fF3(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[46],A)
D=c[171]
A.azm.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.h_G.prototype={
$1(d){return A.hMW()},
$S:48}
A.h_H.prototype={
$1(d){return null},
$S:28}
A.fF3.prototype={
$1(d){return null},
$S:28};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.azm,B.ln)
w(B.hq,[A.h_G,A.h_H,A.fF3])})()
var y={h:B.as("N<o>"),a:B.as("aH?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Hn=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.ao4=new B.R(10,6,10,0)
D.aDA=x([0.62,1],B.as("N<H>"))
D.dzs=x([C.aS,C.bQ,C.bn,C.an,C.aS],B.as("N<u>"))
D.aXV=new B.hf(C.z,0,6.283185307179586,C.w,D.dzs,null,null)
D.acX=new A.azm(2,"immersiveSticky")
D.LA=new A.azm(3,"edgeToEdge")
D.fIm=new A.azm(4,"manual")})()};
(a=>{a["v0lr9mB2pHNc0Sie4bus037H0EY="]=a.current})($__dart_deferred_initializers__);