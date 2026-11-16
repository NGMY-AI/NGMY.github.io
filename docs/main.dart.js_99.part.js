((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFh(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uF(d)
x.toString
return x}catch(w){return v}return v},
ily(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fwb.h(0,v)
if(x!=null)return x
w=B.bFh(v)
if(w!=null){if($.fwb.a>64)$.fwb.a8(0)
$.fwb.n(0,v,w)}return w},
aRM(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aGK(i,j,f,e,g,h,v),C.aq)
x=B.ily(i)
if(x!=null)return A.bx(u,A.tL(C.A,v,C.hi,e,!0,f,x,!1,v,j),C.aq)
w=C.cz.j(0.15)
return A.q(v,A.X(g,h==null?C.cz:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGK:function aGK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bny:function bny(){this.c=this.a=this.d=null},
eV6:function eV6(d,e){this.a=d
this.b=e},
hem(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wV.GR(x,"ngmy_worksheet_thumbs_v1",new B.fwX(),1)},
i68(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eE(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.wS(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cM.aN(d)
return x}catch(w){return v}return v},
aSo(d){return B.iqG(d)},
iqG(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSo=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPH
x=7
return A.b(o==null?$.aPH=B.hem():o,$async$aSo)
case 7:s=f
r=J.mj(s,"thumbs","readonly")
x=8
return A.b(C.iE.xO(J.mi(r,"thumbs"),m),$async$aSo)
case 8:q=f
x=9
return A.b(J.ov(r),$async$aSo)
case 9:m=B.i68(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
$.am.$1("[worksheet-thumb idb get] "+A.w(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSo,w)},
fwX:function fwX(){},
hFy(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
coP(d){var x=0,w=A.j(y.n),v,u
var $async$coP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hFy(d)
if(u==null){v=null
x=1
break}v=B.coO(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coP,w)},
coO(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$coO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.coM.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSo(s),$async$coO)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.coM.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coO,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGK.prototype={
S(){return new B.bny()}}
B.bny.prototype={
Y(){this.a4()
this.a0k()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0k()},
a0k(){var x=0,w=A.j(y.v),v=this,u
var $async$a0k=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.coP(v.a.c),$async$a0k)
case 2:u=e
if(v.c!=null)v.m(new B.eV6(v,u))
return A.h(null,w)}})
return A.i($async$a0k,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tL(C.A,s,C.hi,x.f,!0,v,new A.qb(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cz.j(0.12)
v=t.a
u=v.r
v=v.w
return A.q(s,A.X(u,v==null?C.cz:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eV6.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fwX.prototype={
$1(d){var x=y.h.a(new A.qs([],[]).o_(d.target.result,!1)),w=C.wm.q(x.objectStoreNames,"thumbs")
if(!w)C.wj.Gi(x,"thumbs")},
$S:171};(function inheritance(){var x=a.inherit
x(B.aGK,A.af)
x(B.bny,A.ah)
x(B.eV6,A.iK)
x(B.fwX,A.hu)})()
A.iU(b.typeUniverse,JSON.parse('{"aGK":{"af":[],"v":[]},"bny":{"ah":["aGK"]}}'))
var y={i:A.at("uO"),h:A.at("ru"),w:A.at("ai<H>"),A:A.at("m4"),o:A.at("dL"),n:A.at("dL?"),v:A.at("~")};(function staticFields(){$.fwb=A.T(A.at("n"),A.at("mp<aE>"))
$.coM=A.T(A.at("n"),y.o)
$.aPH=null})()};
(a=>{a["vH481yT8cOm4iPuL5iINK3/o5X0="]=a.current})($__dart_deferred_initializers__);