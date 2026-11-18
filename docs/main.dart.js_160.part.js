((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
iii(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
CW(d){var x=0,w=B.j(y.f),v
var $async$CW=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fvv?2:4
break
case 2:x=5
return B.b(C.kH.ha("SystemChrome.setEnabledSystemUIMode",d.a7(),v),$async$CW)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kH.ha("SystemChrome.setEnabledSystemUIOverlays",A.iii(null),v),$async$CW)
case 6:case 3:return B.h(null,w)}})
return B.i($async$CW,w)},
ayb:function ayb(d,e){this.a=d
this.b=e},
hj_(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.eh(w,y.a).bG(new A.fQL(),y.f).eF(new A.fQM())}}else if(d)A.hBs()}catch(u){}},
hBs(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.eh(w,y.a).eF(new A.fwc())}catch(v){}},
bFO(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fQL:function fQL(){},
fQM:function fQM(){},
fwc:function fwc(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[42],A)
D=c[140]
A.ayb.prototype={
a7(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fQL.prototype={
$1(d){return A.hBs()},
$S:44}
A.fQM.prototype={
$1(d){return null},
$S:29}
A.fwc.prototype={
$1(d){return null},
$S:29};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ayb,B.l8)
w(B.ht,[A.fQL,A.fQM,A.fwc])})()
var y={h:B.at("O<n>"),a:B.at("aF?"),f:B.at("~")};(function constants(){var x=a.makeConstList
D.GI=new B.t(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.amK=new B.Q(10,6,10,0)
D.aBW=x([0.62,1],B.at("O<F>"))
D.dt1=x([C.aS,C.bP,C.bm,C.an,C.aS],B.at("O<t>"))
D.aVZ=new B.h4(C.z,0,6.283185307179586,C.x,D.dt1,null,null)
D.abN=new A.ayb(2,"immersiveSticky")
D.KS=new A.ayb(3,"edgeToEdge")
D.fvv=new A.ayb(4,"manual")})()};
(a=>{a["3TS+0NI4SQ6eA3kECbYxpzBazOY="]=a.current})($__dart_deferred_initializers__);