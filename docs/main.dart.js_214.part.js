((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
iwC(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
Dk(d){var x=0,w=B.j(y.f),v
var $async$Dk=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fJr?2:4
break
case 2:x=5
return B.b(C.kW.hk("SystemChrome.setEnabledSystemUIMode",d.a9(),v),$async$Dk)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kW.hk("SystemChrome.setEnabledSystemUIOverlays",A.iwC(null),v),$async$Dk)
case 6:case 3:return B.h(null,w)}})
return B.i($async$Dk,w)},
azu:function azu(d,e){this.a=d
this.b=e},
hv8(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.el(w,y.a).bB(new A.h0D(),y.f).eG(new A.h0E())}}else if(d)A.hNX()}catch(u){}},
hNX(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.el(w,y.a).eG(new A.fFX())}catch(v){}},
bIk(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
h0D:function h0D(){},
h0E:function h0E(){},
fFX:function fFX(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[46],A)
D=c[171]
A.azu.prototype={
a9(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.h0D.prototype={
$1(d){return A.hNX()},
$S:48}
A.h0E.prototype={
$1(d){return null},
$S:29}
A.fFX.prototype={
$1(d){return null},
$S:29};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.azu,B.ln)
w(B.hr,[A.h0D,A.h0E,A.fFX])})()
var y={h:B.as("N<o>"),a:B.as("aH?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.Hr=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.aoc=new B.R(10,6,10,0)
D.aDN=x([0.62,1],B.as("N<H>"))
D.dzR=x([C.aS,C.bQ,C.bo,C.an,C.aS],B.as("N<u>"))
D.aYc=new B.hg(C.z,0,6.283185307179586,C.w,D.dzR,null,null)
D.ad1=new A.azu(2,"immersiveSticky")
D.LD=new A.azu(3,"edgeToEdge")
D.fJr=new A.azu(4,"manual")})()};
(a=>{a["UDzJwjUqWTYmAi3Ua0H/Eee9lZM="]=a.current})($__dart_deferred_initializers__);