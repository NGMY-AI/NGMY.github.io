((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
ih5(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
CS(d){var x=0,w=B.j(y.f),v
var $async$CS=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fqU?2:4
break
case 2:x=5
return B.b(C.kF.h9("SystemChrome.setEnabledSystemUIMode",d.a7(),v),$async$CS)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kF.h9("SystemChrome.setEnabledSystemUIOverlays",A.ih5(null),v),$async$CS)
case 6:case 3:return B.h(null,w)}})
return B.i($async$CS,w)},
ay0:function ay0(d,e){this.a=d
this.b=e},
hhY(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.eg(w,y.a).bG(new A.fQ2(),y.f).eF(new A.fQ3())}}else if(d)A.hAl()}catch(u){}},
hAl(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.eg(w,y.a).eF(new A.fvz())}catch(v){}},
bFu(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fQ2:function fQ2(){},
fQ3:function fQ3(){},
fvz:function fvz(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[41],A)
D=c[139]
A.ay0.prototype={
a7(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fQ2.prototype={
$1(d){return A.hAl()},
$S:44}
A.fQ3.prototype={
$1(d){return null},
$S:30}
A.fvz.prototype={
$1(d){return null},
$S:30};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ay0,B.l3)
w(B.hq,[A.fQ2,A.fQ3,A.fvz])})()
var y={h:B.at("O<n>"),a:B.at("aF?"),f:B.at("~")};(function constants(){var x=a.makeConstList
D.Gz=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.aml=new B.Q(10,6,10,0)
D.aBx=x([0.62,1],B.at("O<H>"))
D.drD=x([C.aS,C.bP,C.bl,C.an,C.aS],B.at("O<u>"))
D.aVz=new B.h2(C.z,0,6.283185307179586,C.x,D.drD,null,null)
D.abo=new A.ay0(2,"immersiveSticky")
D.KJ=new A.ay0(3,"edgeToEdge")
D.fqU=new A.ay0(4,"manual")})()};
(a=>{a["2SOW/FcXvX88oENI3YVi0m6bpxk="]=a.current})($__dart_deferred_initializers__);