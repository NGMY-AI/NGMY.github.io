((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
igr(d){var x,w,v=B.a([],y.h)
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
return B.b(C.kE.h9("SystemChrome.setEnabledSystemUIOverlays",A.igr(null),v),$async$PW)
case 6:case 3:return B.h(null,w)}})
return B.i($async$PW,w)},
axP:function axP(d,e){this.a=d
this.b=e},
hEx(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.eg(w,y.a).bG(new A.fPv(),y.f).eH(new A.fPw())}}else if(d)A.hzK()}catch(u){}},
hzK(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.eg(w,y.a).eH(new A.fv2())}catch(v){}},
hhq(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fPv:function fPv(){},
fPw:function fPw(){},
fv2:function fv2(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[41],A)
D=c[139]
A.axP.prototype={
a7(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fPv.prototype={
$1(d){return A.hzK()},
$S:44}
A.fPw.prototype={
$1(d){return null},
$S:31}
A.fv2.prototype={
$1(d){return null},
$S:31};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.axP,B.l2)
w(B.hq,[A.fPv,A.fPw,A.fv2])})()
var y={h:B.at("O<n>"),a:B.at("aE?"),f:B.at("~")};(function constants(){var x=a.makeConstList
D.a_h=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.amg=new B.Q(10,6,10,0)
D.aBo=x([0.62,1],B.at("O<G>"))
D.drh=x([C.aS,C.bP,C.bk,C.an,C.aS],B.at("O<u>"))
D.aVo=new B.h1(C.A,0,6.283185307179586,C.x,D.drh,null,null)
D.aVu=new A.axP(2,"immersiveSticky")
D.abm=new A.axP(3,"edgeToEdge")
D.fqc=new A.axP(4,"manual")})()};
(a=>{a["SUw1jqrkGyKzRz9/HTiFS1ggnq0="]=a.current})($__dart_deferred_initializers__);