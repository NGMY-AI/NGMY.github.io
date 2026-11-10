((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bDb(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.ui(d)
x.toString
return x}catch(w){return v}return v},
i9d(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fnz.h(0,v)
if(x!=null)return x
w=B.bDb(v)
if(w!=null){if($.fnz.a>64)$.fnz.a9(0)
$.fnz.n(0,v,w)}return w},
aQd(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aFp(i,j,f,e,g,h,v),C.ap)
x=B.i9d(i)
if(x!=null)return A.bx(u,A.tp(C.A,v,C.h6,e,!0,f,x,!1,v,j),C.ap)
w=C.cX.j(0.15)
return A.p(v,A.X(g,h==null?C.cX:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aFp:function aFp(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
blL:function blL(){this.c=this.a=this.d=null},
eNa:function eNa(d,e){this.a=d
this.b=e},
h46(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.z5.Mh(x,"ngmy_worksheet_thumbs_v1",new B.fok(),1)},
hVj(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ck(d))
if(y.i.b(d))return new Uint8Array(A.ck(J.eG(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ck(A.yh(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ck(d))
if(typeof d=="string")try{x=C.cF.aM(d)
return x}catch(w){return v}return v},
aQR(d){return B.ieg(d)},
ieg(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aQR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aOe
x=7
return A.b(o==null?$.aOe=B.h46():o,$async$aQR)
case 7:s=f
r=J.mP(s,"thumbs","readonly")
x=8
return A.b(C.j_.zE(J.mO(r,"thumbs"),m),$async$aQR)
case 8:q=f
x=9
return A.b(J.pG(r),$async$aQR)
case 9:m=B.hVj(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
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
return A.i($async$aQR,w)},
fok:function fok(){},
hut(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b7(d,14)},
ckM(d){var x=0,w=A.j(y.n),v,u
var $async$ckM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hut(d)
if(u==null){v=null
x=1
break}v=B.ckL(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ckM,w)},
ckL(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$ckL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.ckJ.h(0,s)
if(u!=null&&!C.aG.gan(u)){v=u
x=1
break}x=3
return A.b(B.aQR(s),$async$ckL)
case 3:t=f
if(t!=null&&!C.aG.gan(t)){$.ckJ.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ckL,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[58],B)
B.aFp.prototype={
T(){return new B.blL()}}
B.blL.prototype={
Z(){this.a2()
this.a_G()},
bx(d){this.bH(d)
if(d.c!==this.a.c)this.a_G()},
a_G(){var x=0,w=A.j(y.v),v=this,u
var $async$a_G=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.ckM(v.a.c),$async$a_G)
case 2:u=e
if(v.c!=null)v.m(new B.eNa(v,u))
return A.h(null,w)}})
return A.i($async$a_G,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gan(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tp(C.A,s,C.h6,x.f,!0,v,new A.pV(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cX.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cX:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eNa.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fok.prototype={
$1(d){var x=y.h.a(new A.rV([],[]).pN(d.target.result,!1)),w=C.y_.t(x.objectStoreNames,"thumbs")
if(!w)C.xW.L0(x,"thumbs")},
$S:192};(function inheritance(){var x=a.inherit
x(B.aFp,A.ag)
x(B.blL,A.ah)
x(B.eNa,A.jc)
x(B.fok,A.hL)})()
A.jk(b.typeUniverse,JSON.parse('{"aFp":{"ag":[],"v":[]},"blL":{"ah":["aFp"]}}'))
var y={i:A.av("uo"),h:A.av("rb"),w:A.av("ai<H>"),A:A.av("lV"),o:A.av("dK"),n:A.av("dK?"),v:A.av("~")};(function staticFields(){$.fnz=A.U(A.av("n"),A.av("mc<aD>"))
$.ckJ=A.U(A.av("n"),y.o)
$.aOe=null})()};
(a=>{a["OqFUDAcGs164eUPoJhKIHABfEMU="]=a.current})($__dart_deferred_initializers__);