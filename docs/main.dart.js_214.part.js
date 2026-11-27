((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
ivr(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
Di(d){var x=0,w=B.j(y.f),v
var $async$Di=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fIr?2:4
break
case 2:x=5
return B.b(C.kW.hi("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$Di)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kW.hi("SystemChrome.setEnabledSystemUIOverlays",A.ivr(null),v),$async$Di)
case 6:case 3:return B.h(null,w)}})
return B.i($async$Di,w)},
azm:function azm(d,e){this.a=d
this.b=e},
huc(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.ej(w,y.a).bD(new A.h_H(),y.f).eG(new A.h_I())}}else if(d)A.hMX()}catch(u){}},
hMX(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.ej(w,y.a).eG(new A.fF4())}catch(v){}},
bI4(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
h_H:function h_H(){},
h_I:function h_I(){},
fF4:function fF4(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[46],A)
D=c[171]
A.azm.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.h_H.prototype={
$1(d){return A.hMX()},
$S:48}
A.h_I.prototype={
$1(d){return null},
$S:28}
A.fF4.prototype={
$1(d){return null},
$S:28};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.azm,B.ln)
w(B.hq,[A.h_H,A.h_I,A.fF4])})()
var y={h:B.as("N<o>"),a:B.as("aH?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Hp=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.ao6=new B.R(10,6,10,0)
D.aDD=x([0.62,1],B.as("N<H>"))
D.dzx=x([C.aS,C.bQ,C.bn,C.an,C.aS],B.as("N<u>"))
D.aXZ=new B.hf(C.z,0,6.283185307179586,C.w,D.dzx,null,null)
D.acX=new A.azm(2,"immersiveSticky")
D.LB=new A.azm(3,"edgeToEdge")
D.fIr=new A.azm(4,"manual")})()};
(a=>{a["GZawBcuOQVmplhXhBu+MNLR8R0M="]=a.current})($__dart_deferred_initializers__);