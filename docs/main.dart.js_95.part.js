((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bCp(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.uc(d)
x.toString
return x}catch(w){return v}return v},
i6b(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fl4.h(0,v)
if(x!=null)return x
w=B.bCp(v)
if(w!=null){if($.fl4.a>64)$.fl4.a8(0)
$.fl4.n(0,v,w)}return w},
aPK(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aF3(i,j,f,e,g,h,v),C.aq)
x=B.i6b(i)
if(x!=null)return A.bx(u,A.tm(C.A,v,C.h5,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.X(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aF3:function aF3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bl5:function bl5(){this.c=this.a=this.d=null},
eL9:function eL9(d,e){this.a=d
this.b=e},
h1g(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.yZ.M4(x,"ngmy_worksheet_thumbs_v1",new B.flQ(),1)},
hSo(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ch(d))
if(y.i.b(d))return new Uint8Array(A.ch(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ch(A.Ae(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ch(d))
if(typeof d=="string")try{x=C.cF.aM(d)
return x}catch(w){return v}return v},
aQm(d){return B.ibd(d)},
ibd(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aQm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aNM
x=7
return A.b(o==null?$.aNM=B.h1g():o,$async$aQm)
case 7:s=f
r=J.mO(s,"thumbs","readonly")
x=8
return A.b(C.iV.zz(J.mN(r,"thumbs"),m),$async$aQm)
case 8:q=f
x=9
return A.b(J.pF(r),$async$aQm)
case 9:m=B.hSo(q)
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
return A.i($async$aQm,w)},
flQ:function flQ(){},
hrA(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b4(d,14)},
ciW(d){var x=0,w=A.j(y.n),v,u
var $async$ciW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hrA(d)
if(u==null){v=null
x=1
break}v=B.ciV(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ciW,w)},
ciV(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$ciV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.ciT.h(0,s)
if(u!=null&&!C.aH.gam(u)){v=u
x=1
break}x=3
return A.b(B.aQm(s),$async$ciV)
case 3:t=f
if(t!=null&&!C.aH.gam(t)){$.ciT.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ciV,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[57],B)
B.aF3.prototype={
U(){return new B.bl5()}}
B.bl5.prototype={
a_(){this.a2()
this.a_q()},
bv(d){this.bG(d)
if(d.c!==this.a.c)this.a_q()},
a_q(){var x=0,w=A.j(y.v),v=this,u
var $async$a_q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.ciW(v.a.c),$async$a_q)
case 2:u=e
if(v.c!=null)v.m(new B.eL9(v,u))
return A.h(null,w)}})
return A.i($async$a_q,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tm(C.A,s,C.h5,x.f,!0,v,new A.pU(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eL9.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.flQ.prototype={
$1(d){var x=y.h.a(new A.rV([],[]).pM(d.target.result,!1)),w=C.xV.q(x.objectStoreNames,"thumbs")
if(!w)C.xR.KT(x,"thumbs")},
$S:190};(function inheritance(){var x=a.inherit
x(B.aF3,A.ag)
x(B.bl5,A.ah)
x(B.eL9,A.jc)
x(B.flQ,A.hK)})()
A.jk(b.typeUniverse,JSON.parse('{"aF3":{"ag":[],"v":[]},"bl5":{"ah":["aF3"]}}'))
var y={i:A.aw("ui"),h:A.aw("ra"),w:A.aw("ai<H>"),A:A.aw("lT"),o:A.aw("dK"),n:A.aw("dK?"),v:A.aw("~")};(function staticFields(){$.fl4=A.T(A.aw("n"),A.aw("mc<aD>"))
$.ciT=A.T(A.aw("n"),y.o)
$.aNM=null})()};
(a=>{a["NDqGQKDcGpRmf9bcjodjcYrtJD8="]=a.current})($__dart_deferred_initializers__);