((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
by8(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.to(d)
x.toString
return x}catch(w){return v}return v},
hHB(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f2O.h(0,v)
if(x!=null)return x
w=B.by8(v)
if(w!=null){if($.f2O.a>64)$.f2O.a8(0)
$.f2O.m(0,v,w)}return w},
aMc(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bv(u,new B.aBF(i,j,f,e,g,h,v),C.ap)
x=B.hHB(i)
if(x!=null)return A.bv(u,A.rx(C.B,v,C.fG,e,!0,f,x,!1,v,j),C.ap)
w=C.cS.j(0.15)
return A.p(v,A.V(g,h==null?C.cS:h,v,v,v,32),C.h,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBF:function aBF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bh1:function bh1(){this.c=this.a=this.d=null},
etY:function etY(d,e){this.a=d
this.b=e},
fFc(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.P(A.b9("IndexedDB not available"))
return C.xk.Kl(x,"ngmy_worksheet_thumbs_v1",new B.f3z(),1)},
htJ(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cl(d))
if(y.i.b(d))return new Uint8Array(A.cl(J.eO(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cl(A.B0(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aF(d)
return x}catch(w){return v}return v},
aMQ(d){return B.hMy(d)},
hMy(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aMQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aKm
x=7
return A.b(o==null?$.aKm=B.fFc():o,$async$aMQ)
case 7:s=f
r=J.mg(s,"thumbs","readonly")
x=8
return A.b(C.ip.yw(J.me(r,"thumbs"),m),$async$aMQ)
case 8:q=f
x=9
return A.b(J.oY(r),$async$aMQ)
case 9:m=B.htJ(q)
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
return A.i($async$aMQ,w)},
f3z:function f3z(){},
h3w(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aV(d,14)},
cay(d){var x=0,w=A.j(y.n),v,u
var $async$cay=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h3w(d)
if(u==null){v=null
x=1
break}v=B.cax(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cay,w)},
cax(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cax=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cav.h(0,s)
if(u!=null&&!C.aE.gah(u)){v=u
x=1
break}x=3
return A.b(B.aMQ(s),$async$cax)
case 3:t=f
if(t!=null&&!C.aE.gah(t)){$.cav.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cax,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aBF.prototype={
S(){return new B.bh1()}}
B.bh1.prototype={
Z(){this.a0()
this.Wn()},
bo(d){this.bA(d)
if(d.c!==this.a.c)this.Wn()},
Wn(){var x=0,w=A.j(y.v),v=this,u
var $async$Wn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cay(v.a.c),$async$Wn)
case 2:u=e
if(v.c!=null)v.n(new B.etY(v,u))
return A.h(null,w)}})
return A.i($async$Wn,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aE.gah(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rx(C.B,s,C.fG,x.f,!0,v,new A.pg(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cS.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cS:v,s,s,s,32),C.h,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.etY.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f3z.prototype={
$1(d){var x=y.h.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wc.q(x.objectStoreNames,"thumbs")
if(!w)C.w8.Jc(x,"thumbs")},
$S:198};(function inheritance(){var x=a.inherit
x(B.aBF,A.ae)
x(B.bh1,A.ag)
x(B.etY,A.jk)
x(B.f3z,A.i2)})()
A.kd(b.typeUniverse,JSON.parse('{"aBF":{"ae":[],"r":[]},"bh1":{"ag":["aBF"]}}'))
var y={i:A.az("tv"),h:A.az("qp"),w:A.az("al<I>"),A:A.az("lq"),o:A.az("dz"),n:A.az("dz?"),v:A.az("~")};(function staticFields(){$.f2O=A.S(A.az("n"),A.az("lG<aB>"))
$.cav=A.S(A.az("n"),y.o)
$.aKm=null})()};
(a=>{a["vZoDbp2+CzRsx24SP6qmYc6KnRg="]=a.current})($__dart_deferred_initializers__);