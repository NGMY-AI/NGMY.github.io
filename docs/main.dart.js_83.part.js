((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
byg(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tp(d)
x.toString
return x}catch(w){return v}return v},
hIf(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f3h.h(0,v)
if(x!=null)return x
w=B.byg(v)
if(w!=null){if($.f3h.a>64)$.f3h.a7(0)
$.f3h.m(0,v,w)}return w},
aMl(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aBN(i,j,f,e,g,h,v),C.ap)
x=B.hIf(i)
if(x!=null)return A.bu(u,A.ry(C.A,v,C.fI,e,!0,f,x,!1,v,j),C.ap)
w=C.cT.j(0.15)
return A.p(v,A.V(g,h==null?C.cT:h,v,v,v,32),C.h,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBN:function aBN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bh8:function bh8(){this.c=this.a=this.d=null},
eup:function eup(d,e){this.a=d
this.b=e},
fFJ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.R(A.b9("IndexedDB not available"))
return C.xr.Kn(x,"ngmy_worksheet_thumbs_v1",new B.f42(),1)},
hug(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cl(d))
if(y.i.b(d))return new Uint8Array(A.cl(J.eO(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cl(A.B2(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aF(d)
return x}catch(w){return v}return v},
aMZ(d){return B.hNc(d)},
hNc(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aMZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aKv
x=7
return A.b(o==null?$.aKv=B.fFJ():o,$async$aMZ)
case 7:s=f
r=J.mh(s,"thumbs","readonly")
x=8
return A.b(C.it.yw(J.mf(r,"thumbs"),m),$async$aMZ)
case 8:q=f
x=9
return A.b(J.oZ(r),$async$aMZ)
case 9:m=B.hug(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a4(l)
$.al.$1("[worksheet-thumb idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMZ,w)},
f42:function f42(){},
h42(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aW(d,14)},
caS(d){var x=0,w=A.j(y.n),v,u
var $async$caS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h42(d)
if(u==null){v=null
x=1
break}v=B.caR(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$caS,w)},
caR(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$caR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.caP.h(0,s)
if(u!=null&&!C.aE.gah(u)){v=u
x=1
break}x=3
return A.b(B.aMZ(s),$async$caR)
case 3:t=f
if(t!=null&&!C.aE.gah(t)){$.caP.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$caR,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aBN.prototype={
S(){return new B.bh8()}}
B.bh8.prototype={
Z(){this.a0()
this.Wq()},
bp(d){this.bA(d)
if(d.c!==this.a.c)this.Wq()},
Wq(){var x=0,w=A.j(y.v),v=this,u
var $async$Wq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.caS(v.a.c),$async$Wq)
case 2:u=e
if(v.c!=null)v.n(new B.eup(v,u))
return A.h(null,w)}})
return A.i($async$Wq,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aE.gah(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.ry(C.A,s,C.fI,x.f,!0,v,new A.ph(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cT.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cT:v,s,s,s,32),C.h,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eup.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f42.prototype={
$1(d){var x=y.h.a(new A.r6([],[]).oR(d.target.result,!1)),w=C.wj.t(x.objectStoreNames,"thumbs")
if(!w)C.wf.Je(x,"thumbs")},
$S:198};(function inheritance(){var x=a.inherit
x(B.aBN,A.af)
x(B.bh8,A.ag)
x(B.eup,A.jl)
x(B.f42,A.i2)})()
A.ke(b.typeUniverse,JSON.parse('{"aBN":{"af":[],"r":[]},"bh8":{"ag":["aBN"]}}'))
var y={i:A.az("tw"),h:A.az("qp"),w:A.az("ak<I>"),A:A.az("lr"),o:A.az("dz"),n:A.az("dz?"),v:A.az("~")};(function staticFields(){$.f3h=A.S(A.az("n"),A.az("lH<aB>"))
$.caP=A.S(A.az("n"),y.o)
$.aKv=null})()};
(a=>{a["p7cK9aEwC0MFjrDi/bpjrwk8eEY="]=a.current})($__dart_deferred_initializers__);