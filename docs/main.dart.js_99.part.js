((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFn(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uH(d)
x.toString
return x}catch(w){return v}return v},
ilW(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fwr.h(0,v)
if(x!=null)return x
w=B.bFn(v)
if(w!=null){if($.fwr.a>64)$.fwr.a8(0)
$.fwr.n(0,v,w)}return w},
aRR(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aGP(i,j,f,e,g,h,v),C.aq)
x=B.ilW(i)
if(x!=null)return A.bx(u,A.tN(C.A,v,C.hk,e,!0,f,x,!1,v,j),C.aq)
w=C.cA.j(0.15)
return A.r(v,A.X(g,h==null?C.cA:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGP:function aGP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnD:function bnD(){this.c=this.a=this.d=null},
eVh:function eVh(d,e){this.a=d
this.b=e},
heE(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.x_.GR(x,"ngmy_worksheet_thumbs_v1",new B.fxc(),1)},
i6w(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cf(d))
if(y.i.b(d))return new Uint8Array(A.cf(J.eF(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cf(A.wU(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cM.aO(d)
return x}catch(w){return v}return v},
aSt(d){return B.ir3(d)},
ir3(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPM
x=7
return A.b(o==null?$.aPM=B.heE():o,$async$aSt)
case 7:s=f
r=J.mk(s,"thumbs","readonly")
x=8
return A.b(C.iE.xO(J.mj(r,"thumbs"),m),$async$aSt)
case 8:q=f
x=9
return A.b(J.oy(r),$async$aSt)
case 9:m=B.i6w(q)
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
return A.i($async$aSt,w)},
fxc:function fxc(){},
hFV(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
coZ(d){var x=0,w=A.j(y.n),v,u
var $async$coZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hFV(d)
if(u==null){v=null
x=1
break}v=B.coY(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coZ,w)},
coY(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$coY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.coW.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSt(s),$async$coY)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.coW.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coY,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGP.prototype={
S(){return new B.bnD()}}
B.bnD.prototype={
Y(){this.a4()
this.a0k()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0k()},
a0k(){var x=0,w=A.j(y.v),v=this,u
var $async$a0k=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.coZ(v.a.c),$async$a0k)
case 2:u=e
if(v.c!=null)v.m(new B.eVh(v,u))
return A.h(null,w)}})
return A.i($async$a0k,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tN(C.A,s,C.hk,x.f,!0,v,new A.qe(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cA.j(0.12)
v=t.a
u=v.r
v=v.w
return A.r(s,A.X(u,v==null?C.cA:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eVh.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fxc.prototype={
$1(d){var x=y.h.a(new A.qv([],[]).o_(d.target.result,!1)),w=C.wr.q(x.objectStoreNames,"thumbs")
if(!w)C.wo.Gi(x,"thumbs")},
$S:167};(function inheritance(){var x=a.inherit
x(B.aGP,A.af)
x(B.bnD,A.ah)
x(B.eVh,A.iN)
x(B.fxc,A.hx)})()
A.iW(b.typeUniverse,JSON.parse('{"aGP":{"af":[],"v":[]},"bnD":{"ah":["aGP"]}}'))
var y={i:A.at("uQ"),h:A.at("rw"),w:A.at("ai<H>"),A:A.at("m6"),o:A.at("dL"),n:A.at("dL?"),v:A.at("~")};(function staticFields(){$.fwr=A.T(A.at("n"),A.at("mq<aE>"))
$.coW=A.T(A.at("n"),y.o)
$.aPM=null})()};
(a=>{a["Z+vkBtRULTyvV3Et5jxOxVUHLh4="]=a.current})($__dart_deferred_initializers__);