((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
igo(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
PW(d){var x=0,w=B.j(y.f),v
var $async$PW=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fqc?2:4
break
case 2:x=5
return B.b(C.kE.h9("SystemChrome.setEnabledSystemUIMode",d.a7(),v),$async$PW)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kE.h9("SystemChrome.setEnabledSystemUIOverlays",A.igo(null),v),$async$PW)
case 6:case 3:return B.h(null,w)}})
return B.i($async$PW,w)},
axP:function axP(d,e){this.a=d
this.b=e},
hEu(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.eg(w,y.a).bG(new A.fPs(),y.f).eH(new A.fPt())}}else if(d)A.hzH()}catch(u){}},
hzH(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.eg(w,y.a).eH(new A.fv_())}catch(v){}},
hhn(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fPs:function fPs(){},
fPt:function fPt(){},
fv_:function fv_(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[41],A)
D=c[139]
A.axP.prototype={
a7(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fPs.prototype={
$1(d){return A.hzH()},
$S:44}
A.fPt.prototype={
$1(d){return null},
$S:31}
A.fv_.prototype={
$1(d){return null},
$S:31};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.axP,B.l2)
w(B.hq,[A.fPs,A.fPt,A.fv_])})()
var y={h:B.at("O<n>"),a:B.at("aE?"),f:B.at("~")};(function constants(){var x=a.makeConstList
D.a_i=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.amg=new B.Q(10,6,10,0)
D.aBo=x([0.62,1],B.at("O<G>"))
D.drg=x([C.aS,C.bP,C.bk,C.an,C.aS],B.at("O<u>"))
D.aVo=new B.h1(C.A,0,6.283185307179586,C.x,D.drg,null,null)
D.aVu=new A.axP(2,"immersiveSticky")
D.abm=new A.axP(3,"edgeToEdge")
D.fqc=new A.axP(4,"manual")})()};
(a=>{a["Ar2APgDAPlM27z1f2xEZ0Vx4+lM="]=a.current})($__dart_deferred_initializers__);