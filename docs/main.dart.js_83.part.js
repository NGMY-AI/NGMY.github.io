((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
by_(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tn(d)
x.toString
return x}catch(w){return v}return v},
hHe(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f2y.h(0,v)
if(x!=null)return x
w=B.by_(v)
if(w!=null){if($.f2y.a>64)$.f2y.a8(0)
$.f2y.m(0,v,w)}return w},
aM6(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aBA(i,j,f,e,g,h,v),C.ap)
x=B.hHe(i)
if(x!=null)return A.bu(u,A.rx(C.B,v,C.fG,e,!0,f,x,!1,v,j),C.ap)
w=C.cS.j(0.15)
return A.p(v,A.V(g,h==null?C.cS:h,v,v,v,32),C.h,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBA:function aBA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgU:function bgU(){this.c=this.a=this.d=null},
etI:function etI(d,e){this.a=d
this.b=e},
fET(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.P(A.b9("IndexedDB not available"))
return C.xj.Kl(x,"ngmy_worksheet_thumbs_v1",new B.f3j(),1)},
htm(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cl(d))
if(y.i.b(d))return new Uint8Array(A.cl(J.eO(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cl(A.AY(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aF(d)
return x}catch(w){return v}return v},
aMK(d){return B.hM8(d)},
hM8(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aMK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aKh
x=7
return A.b(o==null?$.aKh=B.fET():o,$async$aMK)
case 7:s=f
r=J.mg(s,"thumbs","readonly")
x=8
return A.b(C.io.yv(J.me(r,"thumbs"),m),$async$aMK)
case 8:q=f
x=9
return A.b(J.oY(r),$async$aMK)
case 9:m=B.htm(q)
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
return A.i($async$aMK,w)},
f3j:function f3j(){},
h3a(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aV(d,14)},
cap(d){var x=0,w=A.j(y.n),v,u
var $async$cap=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h3a(d)
if(u==null){v=null
x=1
break}v=B.cao(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cap,w)},
cao(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cao=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cam.h(0,s)
if(u!=null&&!C.aE.gah(u)){v=u
x=1
break}x=3
return A.b(B.aMK(s),$async$cao)
case 3:t=f
if(t!=null&&!C.aE.gah(t)){$.cam.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cao,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aBA.prototype={
S(){return new B.bgU()}}
B.bgU.prototype={
Z(){this.a0()
this.Wk()},
bo(d){this.bA(d)
if(d.c!==this.a.c)this.Wk()},
Wk(){var x=0,w=A.j(y.v),v=this,u
var $async$Wk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cap(v.a.c),$async$Wk)
case 2:u=e
if(v.c!=null)v.n(new B.etI(v,u))
return A.h(null,w)}})
return A.i($async$Wk,w)},
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
B.etI.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f3j.prototype={
$1(d){var x=y.h.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wc.q(x.objectStoreNames,"thumbs")
if(!w)C.w8.Jc(x,"thumbs")},
$S:198};(function inheritance(){var x=a.inherit
x(B.aBA,A.ae)
x(B.bgU,A.ag)
x(B.etI,A.jk)
x(B.f3j,A.i2)})()
A.kd(b.typeUniverse,JSON.parse('{"aBA":{"ae":[],"r":[]},"bgU":{"ag":["aBA"]}}'))
var y={i:A.aA("tu"),h:A.aA("qp"),w:A.aA("ak<I>"),A:A.aA("lq"),o:A.aA("dz"),n:A.aA("dz?"),v:A.aA("~")};(function staticFields(){$.f2y=A.R(A.aA("n"),A.aA("lG<aB>"))
$.cam=A.R(A.aA("n"),y.o)
$.aKh=null})()};
(a=>{a["zMdRq/kqGs2TrrI6+b29n/OWUlU="]=a.current})($__dart_deferred_initializers__);