((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bAH(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tQ(d)
x.toString
return x}catch(w){return v}return v},
hXm(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.ff5.h(0,v)
if(x!=null)return x
w=B.bAH(v)
if(w!=null){if($.ff5.a>64)$.ff5.a9(0)
$.ff5.n(0,v,w)}return w},
aOb(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aDw(i,j,f,e,g,h,v),C.aq)
x=B.hXm(i)
if(x!=null)return A.bw(u,A.t_(C.A,v,C.fU,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.W(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aDw:function aDw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjn:function bjn(){this.c=this.a=this.d=null},
eFE:function eFE(d,e){this.a=d
this.b=e},
fTE(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yj.Ls(x,"ngmy_worksheet_thumbs_v1",new B.ffR(),1)},
hIR(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eX(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zE(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cE.aJ(d)
return x}catch(w){return v}return v},
aOP(d){return B.i1k(d)},
i1k(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aOP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMi
x=7
return A.b(o==null?$.aMi=B.fTE():o,$async$aOP)
case 7:s=f
r=J.mD(s,"thumbs","readonly")
x=8
return A.b(C.iE.zb(J.mB(r,"thumbs"),m),$async$aOP)
case 8:q=f
x=9
return A.b(J.pn(r),$async$aOP)
case 9:m=B.hIR(q)
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
return A.i($async$aOP,w)},
ffR:function ffR(){},
hip(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b0(d,14)},
cel(d){var x=0,w=A.j(y.n),v,u
var $async$cel=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hip(d)
if(u==null){v=null
x=1
break}v=B.cek(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cel,w)},
cek(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cek=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cei.h(0,s)
if(u!=null&&!C.aG.gam(u)){v=u
x=1
break}x=3
return A.b(B.aOP(s),$async$cek)
case 3:t=f
if(t!=null&&!C.aG.gam(t)){$.cei.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cek,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aDw.prototype={
U(){return new B.bjn()}}
B.bjn.prototype={
a_(){this.a1()
this.XL()},
br(d){this.bE(d)
if(d.c!==this.a.c)this.XL()},
XL(){var x=0,w=A.j(y.v),v=this,u
var $async$XL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cel(v.a.c),$async$XL)
case 2:u=e
if(v.c!=null)v.m(new B.eFE(v,u))
return A.h(null,w)}})
return A.i($async$XL,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.t_(C.A,s,C.fU,x.f,!0,v,new A.pC(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eFE.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.ffR.prototype={
$1(d){var x=y.h.a(new A.rz([],[]).po(d.target.result,!1)),w=C.xb.t(x.objectStoreNames,"thumbs")
if(!w)C.x7.Ke(x,"thumbs")},
$S:179};(function inheritance(){var x=a.inherit
x(B.aDw,A.ag)
x(B.bjn,A.ah)
x(B.eFE,A.j3)
x(B.ffR,A.hT)})()
A.jT(b.typeUniverse,JSON.parse('{"aDw":{"ag":[],"r":[]},"bjn":{"ah":["aDw"]}}'))
var y={i:A.ax("tX"),h:A.ax("qR"),w:A.ax("aj<H>"),A:A.ax("lE"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.ff5=A.T(A.ax("n"),A.ax("lX<aC>"))
$.cei=A.T(A.ax("n"),y.o)
$.aMi=null})()};
(a=>{a["m/gudxjrTiS3pHFnwpws6acE4Lw="]=a.current})($__dart_deferred_initializers__);