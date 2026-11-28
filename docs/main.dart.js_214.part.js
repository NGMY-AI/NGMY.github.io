((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
ixS(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
Dm(d){var x=0,w=B.j(y.f),v
var $async$Dm=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fKZ?2:4
break
case 2:x=5
return B.b(C.kX.hk("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$Dm)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kX.hk("SystemChrome.setEnabledSystemUIOverlays",A.ixS(null),v),$async$Dm)
case 6:case 3:return B.h(null,w)}})
return B.i($async$Dm,w)},
azE:function azE(d,e){this.a=d
this.b=e},
hwa(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.el(w,y.a).bB(new A.h1u(),y.f).eH(new A.h1v())}}else if(d)A.hP3()}catch(u){}},
hP3(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.el(w,y.a).eH(new A.fGD())}catch(v){}},
bID(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
h1u:function h1u(){},
h1v:function h1v(){},
fGD:function fGD(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[46],A)
D=c[172]
A.azE.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.h1u.prototype={
$1(d){return A.hP3()},
$S:47}
A.h1v.prototype={
$1(d){return null},
$S:32}
A.fGD.prototype={
$1(d){return null},
$S:32};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.azE,B.lo)
w(B.hs,[A.h1u,A.h1v,A.fGD])})()
var y={h:B.as("N<o>"),a:B.as("aG?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Hu=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.aoh=new B.Q(10,6,10,0)
D.aDU=x([0.62,1],B.as("N<G>"))
D.dAv=x([C.aS,C.bQ,C.bo,C.an,C.aS],B.as("N<u>"))
D.aYj=new B.hg(C.z,0,6.283185307179586,C.w,D.dAv,null,null)
D.ad8=new A.azE(2,"immersiveSticky")
D.LK=new A.azE(3,"edgeToEdge")
D.fKZ=new A.azE(4,"manual")})()};
(a=>{a["U7byOj+mYE0IWDJl/naZShoR/vk="]=a.current})($__dart_deferred_initializers__);