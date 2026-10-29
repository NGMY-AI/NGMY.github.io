((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBD(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.u0(d)
x.toString
return x}catch(w){return v}return v},
i1u(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fj_.h(0,v)
if(x!=null)return x
w=B.bBD(v)
if(w!=null){if($.fj_.a>64)$.fj_.a9(0)
$.fj_.n(0,v,w)}return w},
aOV(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aEa(i,j,f,e,g,h,v),C.aq)
x=B.i1u(i)
if(x!=null)return A.bw(u,A.t9(C.A,v,C.fW,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.X(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aEa:function aEa(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bkd:function bkd(){this.c=this.a=this.d=null},
eJ9:function eJ9(d,e){this.a=d
this.b=e},
fYm(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yz.LI(x,"ngmy_worksheet_thumbs_v1",new B.fjL(),1)},
hNS(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zV(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
aPy(d){return B.i6s(d)},
i6s(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aN0
x=7
return A.b(o==null?$.aN0=B.fYm():o,$async$aPy)
case 7:s=f
r=J.mG(s,"thumbs","readonly")
x=8
return A.b(C.iF.zq(J.mE(r,"thumbs"),m),$async$aPy)
case 8:q=f
x=9
return A.b(J.pu(r),$async$aPy)
case 9:m=B.hNS(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
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
return A.i($async$aPy,w)},
fjL:function fjL(){},
hnm(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b4(d,14)},
cfs(d){var x=0,w=A.j(y.n),v,u
var $async$cfs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hnm(d)
if(u==null){v=null
x=1
break}v=B.cfr(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfs,w)},
cfr(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cfr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cfp.h(0,s)
if(u!=null&&!C.aH.gam(u)){v=u
x=1
break}x=3
return A.b(B.aPy(s),$async$cfr)
case 3:t=f
if(t!=null&&!C.aH.gam(t)){$.cfp.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfr,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aEa.prototype={
S(){return new B.bkd()}}
B.bkd.prototype={
a_(){this.a1()
this.Y6()},
bu(d){this.bF(d)
if(d.c!==this.a.c)this.Y6()},
Y6(){var x=0,w=A.j(y.v),v=this,u
var $async$Y6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cfs(v.a.c),$async$Y6)
case 2:u=e
if(v.c!=null)v.m(new B.eJ9(v,u))
return A.h(null,w)}})
return A.i($async$Y6,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.t9(C.A,s,C.fW,x.f,!0,v,new A.pJ(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eJ9.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fjL.prototype={
$1(d){var x=y.h.a(new A.rJ([],[]).pB(d.target.result,!1)),w=C.xq.t(x.objectStoreNames,"thumbs")
if(!w)C.xm.Kv(x,"thumbs")},
$S:191};(function inheritance(){var x=a.inherit
x(B.aEa,A.ag)
x(B.bkd,A.ah)
x(B.eJ9,A.j9)
x(B.fjL,A.hV)})()
A.jY(b.typeUniverse,JSON.parse('{"aEa":{"ag":[],"r":[]},"bkd":{"ah":["aEa"]}}'))
var y={i:A.ax("u6"),h:A.ax("qY"),w:A.ax("ai<H>"),A:A.ax("lJ"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.fj_=A.T(A.ax("m"),A.ax("m0<aC>"))
$.cfp=A.T(A.ax("m"),y.o)
$.aN0=null})()};
(a=>{a["Sql4DwAKr7csUwjXtyQb7pgWdVs="]=a.current})($__dart_deferred_initializers__);