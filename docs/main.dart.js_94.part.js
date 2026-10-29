((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBE(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.u_(d)
x.toString
return x}catch(w){return v}return v},
i1n(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fj2.h(0,v)
if(x!=null)return x
w=B.bBE(v)
if(w!=null){if($.fj2.a>64)$.fj2.a9(0)
$.fj2.n(0,v,w)}return w},
aOV(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aEa(i,j,f,e,g,h,v),C.aq)
x=B.i1n(i)
if(x!=null)return A.bw(u,A.t7(C.A,v,C.fW,e,!0,f,x,!1,v,j),C.aq)
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
eJc:function eJc(d,e){this.a=d
this.b=e},
fYi(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yz.LH(x,"ngmy_worksheet_thumbs_v1",new B.fjO(),1)},
hNN(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zV(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
aPy(d){return B.i6l(d)},
i6l(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aN1
x=7
return A.b(o==null?$.aN1=B.fYi():o,$async$aPy)
case 7:s=f
r=J.mG(s,"thumbs","readonly")
x=8
return A.b(C.iF.zq(J.mE(r,"thumbs"),m),$async$aPy)
case 8:q=f
x=9
return A.b(J.pu(r),$async$aPy)
case 9:m=B.hNN(q)
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
fjO:function fjO(){},
hng(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b4(d,14)},
cfs(d){var x=0,w=A.j(y.n),v,u
var $async$cfs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hng(d)
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
T(){return new B.bkd()}}
B.bkd.prototype={
a_(){this.a1()
this.Y5()},
bu(d){this.bE(d)
if(d.c!==this.a.c)this.Y5()},
Y5(){var x=0,w=A.j(y.v),v=this,u
var $async$Y5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cfs(v.a.c),$async$Y5)
case 2:u=e
if(v.c!=null)v.m(new B.eJc(v,u))
return A.h(null,w)}})
return A.i($async$Y5,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.t7(C.A,s,C.fW,x.f,!0,v,new A.pJ(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eJc.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fjO.prototype={
$1(d){var x=y.h.a(new A.rH([],[]).pB(d.target.result,!1)),w=C.xq.t(x.objectStoreNames,"thumbs")
if(!w)C.xm.Ku(x,"thumbs")},
$S:183};(function inheritance(){var x=a.inherit
x(B.aEa,A.ag)
x(B.bkd,A.ah)
x(B.eJc,A.j9)
x(B.fjO,A.hV)})()
A.jY(b.typeUniverse,JSON.parse('{"aEa":{"ag":[],"r":[]},"bkd":{"ah":["aEa"]}}'))
var y={i:A.ax("u5"),h:A.ax("qY"),w:A.ax("ai<H>"),A:A.ax("lJ"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.fj2=A.T(A.ax("m"),A.ax("m_<aC>"))
$.cfp=A.T(A.ax("m"),y.o)
$.aN1=null})()};
(a=>{a["d0dc4bbqBRTr9fUjxKhlGreZNzk="]=a.current})($__dart_deferred_initializers__);