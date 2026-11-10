((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bDL(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.um(d)
x.toString
return x}catch(w){return v}return v},
ibo(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fpH.h(0,v)
if(x!=null)return x
w=B.bDL(v)
if(w!=null){if($.fpH.a>64)$.fpH.a7(0)
$.fpH.n(0,v,w)}return w},
aQD(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aFM(i,j,f,e,g,h,v),C.ap)
x=B.ibo(i)
if(x!=null)return A.bx(u,A.tr(C.A,v,C.h7,e,!0,f,x,!1,v,j),C.ap)
w=C.cY.j(0.15)
return A.p(v,A.X(g,h==null?C.cY:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aFM:function aFM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bme:function bme(){this.c=this.a=this.d=null},
eOd:function eOd(d,e){this.a=d
this.b=e},
h6g(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.z7.Mi(x,"ngmy_worksheet_thumbs_v1",new B.fqs(),1)},
hXr(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cl(d))
if(y.i.b(d))return new Uint8Array(A.cl(J.eH(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cl(A.ym(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cD.aL(d)
return x}catch(w){return v}return v},
aRg(d){return B.igr(d)},
igr(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aRg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aOE
x=7
return A.b(o==null?$.aOE=B.h6g():o,$async$aRg)
case 7:s=f
r=J.mQ(s,"thumbs","readonly")
x=8
return A.b(C.j_.zG(J.mP(r,"thumbs"),m),$async$aRg)
case 8:q=f
x=9
return A.b(J.pJ(r),$async$aRg)
case 9:m=B.hXr(q)
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
return A.i($async$aRg,w)},
fqs:function fqs(){},
hwC(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b7(d,14)},
clB(d){var x=0,w=A.j(y.n),v,u
var $async$clB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hwC(d)
if(u==null){v=null
x=1
break}v=B.clA(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$clB,w)},
clA(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$clA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cly.h(0,s)
if(u!=null&&!C.aG.gan(u)){v=u
x=1
break}x=3
return A.b(B.aRg(s),$async$clA)
case 3:t=f
if(t!=null&&!C.aG.gan(t)){$.cly.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$clA,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[58],B)
B.aFM.prototype={
R(){return new B.bme()}}
B.bme.prototype={
Z(){this.a2()
this.a_L()},
bx(d){this.bH(d)
if(d.c!==this.a.c)this.a_L()},
a_L(){var x=0,w=A.j(y.v),v=this,u
var $async$a_L=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.clB(v.a.c),$async$a_L)
case 2:u=e
if(v.c!=null)v.m(new B.eOd(v,u))
return A.h(null,w)}})
return A.i($async$a_L,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gan(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tr(C.A,s,C.h7,x.f,!0,v,new A.pY(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cY.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cY:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eOd.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fqs.prototype={
$1(d){var x=y.h.a(new A.qW([],[]).ow(d.target.result,!1)),w=C.y3.t(x.objectStoreNames,"thumbs")
if(!w)C.y_.L1(x,"thumbs")},
$S:184};(function inheritance(){var x=a.inherit
x(B.aFM,A.ag)
x(B.bme,A.ah)
x(B.eOd,A.jc)
x(B.fqs,A.hM)})()
A.jl(b.typeUniverse,JSON.parse('{"aFM":{"ag":[],"v":[]},"bme":{"ah":["aFM"]}}'))
var y={i:A.aw("us"),h:A.aw("re"),w:A.aw("ai<H>"),A:A.aw("lV"),o:A.aw("dK"),n:A.aw("dK?"),v:A.aw("~")};(function staticFields(){$.fpH=A.U(A.aw("n"),A.aw("mc<aD>"))
$.cly=A.U(A.aw("n"),y.o)
$.aOE=null})()};
(a=>{a["sKqqKRfN5Azb6yfeojfesGLiUDY="]=a.current})($__dart_deferred_initializers__);