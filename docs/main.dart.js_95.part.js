((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBZ(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.ua(d)
x.toString
return x}catch(w){return v}return v},
i4B(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fjK.h(0,v)
if(x!=null)return x
w=B.bBZ(v)
if(w!=null){if($.fjK.a>64)$.fjK.a8(0)
$.fjK.n(0,v,w)}return w},
aPt(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aEO(i,j,f,e,g,h,v),C.aq)
x=B.i4B(i)
if(x!=null)return A.bx(u,A.tj(C.A,v,C.h3,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.X(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aEO:function aEO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bkG:function bkG(){this.c=this.a=this.d=null},
eJP:function eJP(d,e){this.a=d
this.b=e},
h_J(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yW.M0(x,"ngmy_worksheet_thumbs_v1",new B.fkv(),1)},
hQP(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ch(d))
if(y.i.b(d))return new Uint8Array(A.ch(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ch(A.Ab(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ch(d))
if(typeof d=="string")try{x=C.cF.aM(d)
return x}catch(w){return v}return v},
aQ5(d){return B.i9z(d)},
i9z(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aQ5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aNv
x=7
return A.b(o==null?$.aNv=B.h_J():o,$async$aQ5)
case 7:s=f
r=J.mO(s,"thumbs","readonly")
x=8
return A.b(C.iU.zw(J.mN(r,"thumbs"),m),$async$aQ5)
case 8:q=f
x=9
return A.b(J.pD(r),$async$aQ5)
case 9:m=B.hQP(q)
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
return A.i($async$aQ5,w)},
fkv:function fkv(){},
hq3(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cij(d){var x=0,w=A.j(y.n),v,u
var $async$cij=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hq3(d)
if(u==null){v=null
x=1
break}v=B.cii(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cij,w)},
cii(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cii=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cig.h(0,s)
if(u!=null&&!C.aH.gam(u)){v=u
x=1
break}x=3
return A.b(B.aQ5(s),$async$cii)
case 3:t=f
if(t!=null&&!C.aH.gam(t)){$.cig.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cii,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[56],B)
B.aEO.prototype={
U(){return new B.bkG()}}
B.bkG.prototype={
a_(){this.a1()
this.a_h()},
bv(d){this.bE(d)
if(d.c!==this.a.c)this.a_h()},
a_h(){var x=0,w=A.j(y.v),v=this,u
var $async$a_h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cij(v.a.c),$async$a_h)
case 2:u=e
if(v.c!=null)v.m(new B.eJP(v,u))
return A.h(null,w)}})
return A.i($async$a_h,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tj(C.A,s,C.h3,x.f,!0,v,new A.pU(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eJP.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fkv.prototype={
$1(d){var x=y.h.a(new A.rT([],[]).pH(d.target.result,!1)),w=C.xS.q(x.objectStoreNames,"thumbs")
if(!w)C.xO.KP(x,"thumbs")},
$S:197};(function inheritance(){var x=a.inherit
x(B.aEO,A.ag)
x(B.bkG,A.ah)
x(B.eJP,A.jb)
x(B.fkv,A.hS)})()
A.jL(b.typeUniverse,JSON.parse('{"aEO":{"ag":[],"v":[]},"bkG":{"ah":["aEO"]}}'))
var y={i:A.ax("ug"),h:A.ax("r7"),w:A.ax("ai<H>"),A:A.ax("lS"),o:A.ax("dI"),n:A.ax("dI?"),v:A.ax("~")};(function staticFields(){$.fjK=A.U(A.ax("n"),A.ax("m9<aD>"))
$.cig=A.U(A.ax("n"),y.o)
$.aNv=null})()};
(a=>{a["4x8AXd3nVz353fvTTp37HSjJX0k="]=a.current})($__dart_deferred_initializers__);