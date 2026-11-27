((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
ix5(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
Dl(d){var x=0,w=B.j(y.f),v
var $async$Dl=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fJQ?2:4
break
case 2:x=5
return B.b(C.kW.hk("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$Dl)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kW.hk("SystemChrome.setEnabledSystemUIOverlays",A.ix5(null),v),$async$Dl)
case 6:case 3:return B.h(null,w)}})
return B.i($async$Dl,w)},
azz:function azz(d,e){this.a=d
this.b=e},
hvw(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.el(w,y.a).bB(new A.h0Z(),y.f).eH(new A.h1_())}}else if(d)A.hOl()}catch(u){}},
hOl(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.el(w,y.a).eH(new A.fGf())}catch(v){}},
bIs(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
h0Z:function h0Z(){},
h1_:function h1_(){},
fGf:function fGf(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[46],A)
D=c[171]
A.azz.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.h0Z.prototype={
$1(d){return A.hOl()},
$S:48}
A.h1_.prototype={
$1(d){return null},
$S:32}
A.fGf.prototype={
$1(d){return null},
$S:32};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.azz,B.ln)
w(B.hr,[A.h0Z,A.h1_,A.fGf])})()
var y={h:B.as("N<o>"),a:B.as("aH?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Hs=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.aoe=new B.R(10,6,10,0)
D.aDQ=x([0.62,1],B.as("N<G>"))
D.dA1=x([C.aS,C.bQ,C.bo,C.an,C.aS],B.as("N<u>"))
D.aYf=new B.hg(C.z,0,6.283185307179586,C.w,D.dA1,null,null)
D.ad3=new A.azz(2,"immersiveSticky")
D.LE=new A.azz(3,"edgeToEdge")
D.fJQ=new A.azz(4,"manual")})()};
(a=>{a["tai1axpNXUh4a9fWI46ZCVRAZMU="]=a.current})($__dart_deferred_initializers__);