((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
iox(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
D8(d){var x=0,w=B.j(y.f),v
var $async$D8=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fB6?2:4
break
case 2:x=5
return B.b(C.kO.hg("SystemChrome.setEnabledSystemUIMode",d.a8(),v),$async$D8)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kO.hg("SystemChrome.setEnabledSystemUIOverlays",A.iox(null),v),$async$D8)
case 6:case 3:return B.h(null,w)}})
return B.i($async$D8,w)},
ayC:function ayC(d,e){this.a=d
this.b=e},
hoh(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.ek(w,y.a).bE(new A.fVs(),y.f).eE(new A.fVt())}}else if(d)A.hGV()}catch(u){}},
hGV(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.ek(w,y.a).eE(new A.fAx())}catch(v){}},
bGL(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fVs:function fVs(){},
fVt:function fVt(){},
fAx:function fAx(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[53],A)
D=c[201]
A.ayC.prototype={
a8(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fVs.prototype={
$1(d){return A.hGV()},
$S:46}
A.fVt.prototype={
$1(d){return null},
$S:32}
A.fAx.prototype={
$1(d){return null},
$S:32};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ayC,B.kP)
w(B.fN,[A.fVs,A.fVt,A.fAx])})()
var y={h:B.as("N<m>"),a:B.as("aE?"),f:B.as("~")};(function constants(){var x=a.makeConstList
D.H8=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.ani=new B.R(10,6,10,0)
D.aCD=x([0.62,1],B.as("N<G>"))
D.dwM=x([C.aS,C.bP,C.bn,C.an,C.aS],B.as("N<u>"))
D.aWK=new B.hb(C.z,0,6.283185307179586,C.x,D.dwM,null,null)
D.aci=new A.ayC(2,"immersiveSticky")
D.Ll=new A.ayC(3,"edgeToEdge")
D.fB6=new A.ayC(4,"manual")})()};
(a=>{a["7O4pVDUVkS5+87cKAZqlzbXccs4="]=a.current})($__dart_deferred_initializers__);