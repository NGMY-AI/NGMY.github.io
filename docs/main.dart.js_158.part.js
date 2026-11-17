((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
igF(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
CQ(d){var x=0,w=B.j(y.f),v
var $async$CQ=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fqJ?2:4
break
case 2:x=5
return B.b(C.kF.h8("SystemChrome.setEnabledSystemUIMode",d.a7(),v),$async$CQ)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kF.h8("SystemChrome.setEnabledSystemUIOverlays",A.igF(null),v),$async$CQ)
case 6:case 3:return B.h(null,w)}})
return B.i($async$CQ,w)},
axS:function axS(d,e){this.a=d
this.b=e},
hhE(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.eg(w,y.a).bG(new A.fPL(),y.f).eF(new A.fPM())}}else if(d)A.hA_()}catch(u){}},
hA_(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.eg(w,y.a).eF(new A.fvh())}catch(v){}},
bFh(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fPL:function fPL(){},
fPM:function fPM(){},
fvh:function fvh(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[41],A)
D=c[139]
A.axS.prototype={
a7(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fPL.prototype={
$1(d){return A.hA_()},
$S:44}
A.fPM.prototype={
$1(d){return null},
$S:31}
A.fvh.prototype={
$1(d){return null},
$S:31};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.axS,B.l2)
w(B.hq,[A.fPL,A.fPM,A.fvh])})()
var y={h:B.at("O<n>"),a:B.at("aF?"),f:B.at("~")};(function constants(){var x=a.makeConstList
D.Gy=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.aml=new B.Q(10,6,10,0)
D.aBw=x([0.62,1],B.at("O<G>"))
D.dry=x([C.aS,C.bP,C.bk,C.an,C.aS],B.at("O<u>"))
D.aVx=new B.h2(C.z,0,6.283185307179586,C.x,D.dry,null,null)
D.abq=new A.axS(2,"immersiveSticky")
D.KJ=new A.axS(3,"edgeToEdge")
D.fqJ=new A.axS(4,"manual")})()};
(a=>{a["nE8nAofZ6N7+sg1s30wKrs8hrMk="]=a.current})($__dart_deferred_initializers__);