((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bxD(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tj(d)
x.toString
return x}catch(w){return v}return v},
hFF(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f1y.h(0,v)
if(x!=null)return x
w=B.bxD(v)
if(w!=null){if($.f1y.a>64)$.f1y.a8(0)
$.f1y.m(0,v,w)}return w},
aLT(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aBm(i,j,f,e,g,h,v),C.ap)
x=B.hFF(i)
if(x!=null)return A.bw(u,A.rv(C.B,v,C.fP,e,!0,f,x,!1,v,j),C.ap)
w=C.cR.j(0.15)
return A.p(v,A.V(g,h==null?C.cR:h,v,v,v,32),C.h,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBm:function aBm(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgC:function bgC(){this.c=this.a=this.d=null},
esQ:function esQ(d,e){this.a=d
this.b=e},
fDD(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.b9("IndexedDB not available"))
return C.xi.Kh(x,"ngmy_worksheet_thumbs_v1",new B.f2j(),1)},
hrP(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ck(d))
if(y.i.b(d))return new Uint8Array(A.ck(J.eO(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ck(A.AS(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ck(d))
if(typeof d=="string")try{x=C.cw.aE(d)
return x}catch(w){return v}return v},
aMv(d){return B.hKz(d)},
hKz(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aMv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aK3
x=7
return A.b(o==null?$.aK3=B.fDD():o,$async$aMv)
case 7:s=f
r=J.md(s,"thumbs","readonly")
x=8
return A.b(C.ik.yp(J.mb(r,"thumbs"),m),$async$aMv)
case 8:q=f
x=9
return A.b(J.oY(r),$async$aMv)
case 9:m=B.hrP(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a4(l)
$.ak.$1("[worksheet-thumb idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMv,w)},
f2j:function f2j(){},
h1E(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aV(d,14)},
c9T(d){var x=0,w=A.j(y.n),v,u
var $async$c9T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h1E(d)
if(u==null){v=null
x=1
break}v=B.c9S(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9T,w)},
c9S(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$c9S=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.c9Q.h(0,s)
if(u!=null&&!C.aD.gah(u)){v=u
x=1
break}x=3
return A.b(B.aMv(s),$async$c9S)
case 3:t=f
if(t!=null&&!C.aD.gah(t)){$.c9Q.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9S,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aBm.prototype={
S(){return new B.bgC()}}
B.bgC.prototype={
Z(){this.a0()
this.W7()},
bo(d){this.bz(d)
if(d.c!==this.a.c)this.W7()},
W7(){var x=0,w=A.j(y.v),v=this,u
var $async$W7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.c9T(v.a.c),$async$W7)
case 2:u=e
if(v.c!=null)v.n(new B.esQ(v,u))
return A.h(null,w)}})
return A.i($async$W7,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aD.gah(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rv(C.B,s,C.fP,x.f,!0,v,new A.pQ(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cR.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cR:v,s,s,s,32),C.h,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.esQ.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f2j.prototype={
$1(d){var x=y.h.a(new A.r5([],[]).oP(d.target.result,!1)),w=C.wa.q(x.objectStoreNames,"thumbs")
if(!w)C.w6.J6(x,"thumbs")},
$S:180};(function inheritance(){var x=a.inherit
x(B.aBm,A.ae)
x(B.bgC,A.ag)
x(B.esQ,A.jl)
x(B.f2j,A.i2)})()
A.kc(b.typeUniverse,JSON.parse('{"aBm":{"ae":[],"r":[]},"bgC":{"ag":["aBm"]}}'))
var y={i:A.az("tq"),h:A.az("qp"),w:A.az("al<G>"),A:A.az("ln"),o:A.az("dz"),n:A.az("dz?"),v:A.az("~")};(function staticFields(){$.f1y=A.Q(A.az("n"),A.az("lD<aC>"))
$.c9Q=A.Q(A.az("n"),y.o)
$.aK3=null})()};
(a=>{a["n08VbxufzxwIicYtH1kc7Lmd1qY="]=a.current})($__dart_deferred_initializers__);