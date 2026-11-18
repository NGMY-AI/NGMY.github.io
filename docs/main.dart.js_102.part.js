((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFK(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uG(d)
x.toString
return x}catch(w){return v}return v},
in6(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fxi.h(0,v)
if(x!=null)return x
w=B.bFK(v)
if(w!=null){if($.fxi.a>64)$.fxi.a8(0)
$.fxi.n(0,v,w)}return w},
aSb(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aH9(i,j,f,e,g,h,v),C.aq)
x=B.in6(i)
if(x!=null)return A.bu(u,A.tM(C.z,v,C.h2,e,!0,f,x,!1,v,j),C.aq)
w=C.cC.j(0.15)
return A.p(v,A.W(g,h==null?C.cC:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aH9:function aH9(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnV:function bnV(){this.c=this.a=this.d=null},
eWe:function eWe(d,e){this.a=d
this.b=e},
hfQ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.X(A.bc("IndexedDB not available"))
return C.x5.GW(x,"ngmy_worksheet_thumbs_v1",new B.fy5(),1)},
i8e(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cc(d))
if(y.i.b(d))return new Uint8Array(A.cc(J.eu(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cc(A.wS(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cL.aN(d)
return x}catch(w){return v}return v},
aSO(d){return B.isj(d)},
isj(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aQ7
x=7
return A.b(o==null?$.aQ7=B.hfQ():o,$async$aSO)
case 7:s=f
r=J.mo(s,"thumbs","readonly")
x=8
return A.b(C.iE.xP(J.mn(r,"thumbs"),m),$async$aSO)
case 8:q=f
x=9
return A.b(J.oC(r),$async$aSO)
case 9:m=B.i8e(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
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
return A.i($async$aSO,w)},
fy5:function fy5(){},
hHu(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b4(d,14)},
cpw(d){var x=0,w=A.j(y.n),v,u
var $async$cpw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hHu(d)
if(u==null){v=null
x=1
break}v=B.cpv(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cpw,w)},
cpv(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cpv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cpt.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSO(s),$async$cpv)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.cpt.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cpv,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aH9.prototype={
S(){return new B.bnV()}}
B.bnV.prototype={
Y(){this.a3()
this.a0z()},
bz(d){this.bK(d)
if(d.c!==this.a.c)this.a0z()},
a0z(){var x=0,w=A.j(y.v),v=this,u
var $async$a0z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cpw(v.a.c),$async$a0z)
case 2:u=e
if(v.c!=null)v.m(new B.eWe(v,u))
return A.h(null,w)}})
return A.i($async$a0z,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tM(C.z,s,C.h2,x.f,!0,v,new A.qg(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cC.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cC:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eWe.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fy5.prototype={
$1(d){var x=y.h.a(new A.qy([],[]).o4(d.target.result,!1)),w=C.wy.q(x.objectStoreNames,"thumbs")
if(!w)C.wv.Gm(x,"thumbs")},
$S:164};(function inheritance(){var x=a.inherit
x(B.aH9,A.af)
x(B.bnV,A.ah)
x(B.eWe,A.iR)
x(B.fy5,A.hs)})()
A.ja(b.typeUniverse,JSON.parse('{"aH9":{"af":[],"v":[]},"bnV":{"ah":["aH9"]}}'))
var y={i:A.at("mL"),h:A.at("ry"),w:A.at("ai<F>"),A:A.at("m8"),o:A.at("dH"),n:A.at("dH?"),v:A.at("~")};(function staticFields(){$.fxi=A.T(A.at("n"),A.at("mu<aF>"))
$.cpt=A.T(A.at("n"),y.o)
$.aQ7=null})()};
(a=>{a["fZ7LQX0yVHaiJ7Bh00naRWpqwzE="]=a.current})($__dart_deferred_initializers__);