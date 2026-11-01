((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bCi(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.u9(d)
x.toString
return x}catch(w){return v}return v},
i6_(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fm8.h(0,v)
if(x!=null)return x
w=B.bCi(v)
if(w!=null){if($.fm8.a>64)$.fm8.a8(0)
$.fm8.n(0,v,w)}return w},
aPt(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aEF(i,j,f,e,g,h,v),C.aq)
x=B.i6_(i)
if(x!=null)return A.bx(u,A.th(C.A,v,C.h_,e,!0,f,x,!1,v,j),C.aq)
w=C.cX.j(0.15)
return A.p(v,A.X(g,h==null?C.cX:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aEF:function aEF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bkS:function bkS(){this.c=this.a=this.d=null},
eMf:function eMf(d,e){this.a=d
this.b=e},
h1z(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yM.LZ(x,"ngmy_worksheet_thumbs_v1",new B.fmU(),1)},
hSn(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cg(d))
if(y.i.b(d))return new Uint8Array(A.cg(J.f1(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cg(A.A7(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cg(d))
if(typeof d=="string")try{x=C.cG.aK(d)
return x}catch(w){return v}return v},
aQ5(d){return B.iaY(d)},
iaY(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aQ5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aNv
x=7
return A.b(o==null?$.aNv=B.h1z():o,$async$aQ5)
case 7:s=f
r=J.mK(s,"thumbs","readonly")
x=8
return A.b(C.iP.zw(J.mI(r,"thumbs"),m),$async$aQ5)
case 8:q=f
x=9
return A.b(J.pB(r),$async$aQ5)
case 9:m=B.hSn(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
$.am.$1("[worksheet-thumb idb get] "+A.u(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQ5,w)},
fmU:function fmU(){},
hrK(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b6(d,14)},
chk(d){var x=0,w=A.j(y.n),v,u
var $async$chk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hrK(d)
if(u==null){v=null
x=1
break}v=B.chj(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chk,w)},
chj(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$chj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.chh.h(0,s)
if(u!=null&&!C.aH.gan(u)){v=u
x=1
break}x=3
return A.b(B.aQ5(s),$async$chj)
case 3:t=f
if(t!=null&&!C.aH.gan(t)){$.chh.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chj,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aEF.prototype={
S(){return new B.bkS()}}
B.bkS.prototype={
Z(){this.a1()
this.Yq()},
bv(d){this.bG(d)
if(d.c!==this.a.c)this.Yq()},
Yq(){var x=0,w=A.j(y.v),v=this,u
var $async$Yq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.chk(v.a.c),$async$Yq)
case 2:u=e
if(v.c!=null)v.m(new B.eMf(v,u))
return A.h(null,w)}})
return A.i($async$Yq,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gan(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.th(C.A,s,C.h_,x.f,!0,v,new A.pR(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cX.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cX:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eMf.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fmU.prototype={
$1(d){var x=y.h.a(new A.rQ([],[]).pF(d.target.result,!1)),w=C.xF.t(x.objectStoreNames,"thumbs")
if(!w)C.xB.KM(x,"thumbs")},
$S:190};(function inheritance(){var x=a.inherit
x(B.aEF,A.ag)
x(B.bkS,A.ah)
x(B.eMf,A.ja)
x(B.fmU,A.i0)})()
A.k2(b.typeUniverse,JSON.parse('{"aEF":{"ag":[],"t":[]},"bkS":{"ah":["aEF"]}}'))
var y={i:A.ax("ug"),h:A.ax("r3"),w:A.ax("ai<G>"),A:A.ax("lM"),o:A.ax("dL"),n:A.ax("dL?"),v:A.ax("~")};(function staticFields(){$.fm8=A.U(A.ax("m"),A.ax("m4<aD>"))
$.chh=A.U(A.ax("m"),y.o)
$.aNv=null})()};
(a=>{a["Jd0gGkbjxZvXkXyaHTayLxX9UX8="]=a.current})($__dart_deferred_initializers__);