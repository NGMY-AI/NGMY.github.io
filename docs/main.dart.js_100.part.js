((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEv(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.uw(d)
x.toString
return x}catch(w){return v}return v},
ig7(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.ftn.h(0,v)
if(x!=null)return x
w=B.bEv(v)
if(w!=null){if($.ftn.a>64)$.ftn.aa(0)
$.ftn.n(0,v,w)}return w},
aR1(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aG6(i,j,f,e,g,h,v),C.ap)
x=B.ig7(i)
if(x!=null)return A.bx(u,A.tB(C.A,v,C.h9,e,!0,f,x,!1,v,j),C.ap)
w=C.cY.j(0.15)
return A.p(v,A.X(g,h==null?C.cY:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aG6:function aG6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bmQ:function bmQ(){this.c=this.a=this.d=null},
eSr:function eSr(d,e){this.a=d
this.b=e},
hat(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.be("IndexedDB not available"))
return C.zj.Mr(x,"ngmy_worksheet_thumbs_v1",new B.fu8(),1)},
i0Z(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cn(d))
if(y.i.b(d))return new Uint8Array(A.cn(J.eH(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cn(A.yr(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cn(d))
if(typeof d=="string")try{x=C.cF.aP(d)
return x}catch(w){return v}return v},
aRF(d){return B.ila(d)},
ila(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aRF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aP1
x=7
return A.b(o==null?$.aP1=B.hat():o,$async$aRF)
case 7:s=f
r=J.mZ(s,"thumbs","readonly")
x=8
return A.b(C.j5.zK(J.mY(r,"thumbs"),m),$async$aRF)
case 8:q=f
x=9
return A.b(J.pQ(r),$async$aRF)
case 9:m=B.i0Z(q)
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
return A.i($async$aRF,w)},
fu8:function fu8(){},
hB2(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b3(d,14)},
cn9(d){var x=0,w=A.j(y.n),v,u
var $async$cn9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hB2(d)
if(u==null){v=null
x=1
break}v=B.cn8(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cn9,w)},
cn8(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cn8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cn6.h(0,s)
if(u!=null&&!C.aG.gan(u)){v=u
x=1
break}x=3
return A.b(B.aRF(s),$async$cn8)
case 3:t=f
if(t!=null&&!C.aG.gan(t)){$.cn6.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cn8,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aG6.prototype={
R(){return new B.bmQ()}}
B.bmQ.prototype={
Z(){this.a3()
this.a01()},
bz(d){this.bH(d)
if(d.c!==this.a.c)this.a01()},
a01(){var x=0,w=A.j(y.v),v=this,u
var $async$a01=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cn9(v.a.c),$async$a01)
case 2:u=e
if(v.c!=null)v.m(new B.eSr(v,u))
return A.h(null,w)}})
return A.i($async$a01,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gan(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tB(C.A,s,C.h9,x.f,!0,v,new A.q4(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cY.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cY:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eSr.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fu8.prototype={
$1(d){var x=y.h.a(new A.r3([],[]).oC(d.target.result,!1)),w=C.yh.q(x.objectStoreNames,"thumbs")
if(!w)C.yd.L9(x,"thumbs")},
$S:197};(function inheritance(){var x=a.inherit
x(B.aG6,A.af)
x(B.bmQ,A.ah)
x(B.eSr,A.iI)
x(B.fu8,A.hz)})()
A.j2(b.typeUniverse,JSON.parse('{"aG6":{"af":[],"v":[]},"bmQ":{"ah":["aG6"]}}'))
var y={i:A.as("uD"),h:A.as("ro"),w:A.as("ai<G>"),A:A.as("m_"),o:A.as("dL"),n:A.as("dL?"),v:A.as("~")};(function staticFields(){$.ftn=A.U(A.as("m"),A.as("mi<aD>"))
$.cn6=A.U(A.as("m"),y.o)
$.aP1=null})()};
(a=>{a["ae/FO+t6mYjv3ZfodyfB9j2LYAk="]=a.current})($__dart_deferred_initializers__);