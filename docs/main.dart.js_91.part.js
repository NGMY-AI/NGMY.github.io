((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bAk(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tL(d)
x.toString
return x}catch(w){return v}return v},
hUX(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fda.h(0,v)
if(x!=null)return x
w=B.bAk(v)
if(w!=null){if($.fda.a>64)$.fda.a8(0)
$.fda.n(0,v,w)}return w},
aNW(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bv(u,new B.aDg(i,j,f,e,g,h,v),C.aq)
x=B.hUX(i)
if(x!=null)return A.bv(u,A.rV(C.A,v,C.fQ,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.W(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aDg:function aDg(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bj1:function bj1(){this.c=this.a=this.d=null},
eDN:function eDN(d,e){this.a=d
this.b=e},
fRr(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.U(A.bd("IndexedDB not available"))
return C.yb.Lh(x,"ngmy_worksheet_thumbs_v1",new B.fdW(),1)},
hGr(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cq(d))
if(y.i.b(d))return new Uint8Array(A.cq(J.eW(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cq(A.BH(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cq(d))
if(typeof d=="string")try{x=C.cB.aI(d)
return x}catch(w){return v}return v},
aOz(d){return B.hZV(d)},
hZV(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aOz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aM2
x=7
return A.b(o==null?$.aM2=B.fRr():o,$async$aOz)
case 7:s=f
r=J.my(s,"thumbs","readonly")
x=8
return A.b(C.iz.z9(J.mw(r,"thumbs"),m),$async$aOz)
case 8:q=f
x=9
return A.b(J.pk(r),$async$aOz)
case 9:m=B.hGr(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a9(l)
$.am.$1("[worksheet-thumb idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aOz,w)},
fdW:function fdW(){},
hg5(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b_(d,14)},
cdy(d){var x=0,w=A.j(y.n),v,u
var $async$cdy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hg5(d)
if(u==null){v=null
x=1
break}v=B.cdx(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdy,w)},
cdx(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cdx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cdv.h(0,s)
if(u!=null&&!C.aG.gam(u)){v=u
x=1
break}x=3
return A.b(B.aOz(s),$async$cdx)
case 3:t=f
if(t!=null&&!C.aG.gam(t)){$.cdv.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdx,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aDg.prototype={
T(){return new B.bj1()}}
B.bj1.prototype={
a_(){this.a1()
this.Xx()},
br(d){this.bE(d)
if(d.c!==this.a.c)this.Xx()},
Xx(){var x=0,w=A.j(y.v),v=this,u
var $async$Xx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cdy(v.a.c),$async$Xx)
case 2:u=e
if(v.c!=null)v.m(new B.eDN(v,u))
return A.h(null,w)}})
return A.i($async$Xx,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rV(C.A,s,C.fQ,x.f,!0,v,new A.py(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eDN.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fdW.prototype={
$1(d){var x=y.h.a(new A.ru([],[]).pl(d.target.result,!1)),w=C.x2.t(x.objectStoreNames,"thumbs")
if(!w)C.wZ.K6(x,"thumbs")},
$S:186};(function inheritance(){var x=a.inherit
x(B.aDg,A.ag)
x(B.bj1,A.ah)
x(B.eDN,A.j2)
x(B.fdW,A.hS)})()
A.jR(b.typeUniverse,JSON.parse('{"aDg":{"ag":[],"r":[]},"bj1":{"ah":["aDg"]}}'))
var y={i:A.ax("tS"),h:A.ax("qM"),w:A.ax("ak<G>"),A:A.ax("lC"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.fda=A.V(A.ax("n"),A.ax("lT<aC>"))
$.cdv=A.V(A.ax("n"),y.o)
$.aM2=null})()};
(a=>{a["co/ssIVTueyq5pCs8RGc38WZppI="]=a.current})($__dart_deferred_initializers__);