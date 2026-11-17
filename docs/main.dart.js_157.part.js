((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
igA(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
CP(d){var x=0,w=B.j(y.f),v
var $async$CP=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fqb?2:4
break
case 2:x=5
return B.b(C.kF.h9("SystemChrome.setEnabledSystemUIMode",d.a7(),v),$async$CP)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kF.h9("SystemChrome.setEnabledSystemUIOverlays",A.igA(null),v),$async$CP)
case 6:case 3:return B.h(null,w)}})
return B.i($async$CP,w)},
axP:function axP(d,e){this.a=d
this.b=e},
hhy(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.eg(w,y.a).bG(new A.fPF(),y.f).eH(new A.fPG())}}else if(d)A.hzU()}catch(u){}},
hzU(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.eg(w,y.a).eH(new A.fvc())}catch(v){}},
bFf(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fPF:function fPF(){},
fPG:function fPG(){},
fvc:function fvc(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[41],A)
D=c[139]
A.axP.prototype={
a7(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fPF.prototype={
$1(d){return A.hzU()},
$S:45}
A.fPG.prototype={
$1(d){return null},
$S:30}
A.fvc.prototype={
$1(d){return null},
$S:30};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.axP,B.l2)
w(B.hq,[A.fPF,A.fPG,A.fvc])})()
var y={h:B.at("O<n>"),a:B.at("aF?"),f:B.at("~")};(function constants(){var x=a.makeConstList
D.a_l=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.amh=new B.Q(10,6,10,0)
D.aBr=x([0.62,1],B.at("O<G>"))
D.drg=x([C.aS,C.bP,C.bk,C.an,C.aS],B.at("O<u>"))
D.aVs=new B.h1(C.A,0,6.283185307179586,C.x,D.drg,null,null)
D.abo=new A.axP(2,"immersiveSticky")
D.KI=new A.axP(3,"edgeToEdge")
D.fqb=new A.axP(4,"manual")})()};
(a=>{a["p3EJfURvQSDsmUeS55VAUyY1Deo="]=a.current})($__dart_deferred_initializers__);