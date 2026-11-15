((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bF2(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uE(d)
x.toString
return x}catch(w){return v}return v},
ikU(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fvJ.h(0,v)
if(x!=null)return x
w=B.bF2(v)
if(w!=null){if($.fvJ.a>64)$.fvJ.a8(0)
$.fvJ.n(0,v,w)}return w},
aRB(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.by(u,new B.aGA(i,j,f,e,g,h,v),C.aq)
x=B.ikU(i)
if(x!=null)return A.by(u,A.tL(C.A,v,C.hh,e,!0,f,x,!1,v,j),C.aq)
w=C.d0.j(0.15)
return A.r(v,A.X(g,h==null?C.d0:h,v,v,v,32),C.f,v,v,new A.p(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGA:function aGA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnk:function bnk(){this.c=this.a=this.d=null},
eUF:function eUF(d,e){this.a=d
this.b=e},
hdJ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wT.GR(x,"ngmy_worksheet_thumbs_v1",new B.fwu(),1)},
i5u(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cd(d))
if(y.i.b(d))return new Uint8Array(A.cd(J.eD(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cd(A.wT(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cJ.aN(d)
return x}catch(w){return v}return v},
aSd(d){return B.iq0(d)},
iq0(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPw
x=7
return A.b(o==null?$.aPw=B.hdJ():o,$async$aSd)
case 7:s=f
r=J.mk(s,"thumbs","readonly")
x=8
return A.b(C.iA.xM(J.mj(r,"thumbs"),m),$async$aSd)
case 8:q=f
x=9
return A.b(J.ow(r),$async$aSd)
case 9:m=B.i5u(q)
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
return A.i($async$aSd,w)},
fwu:function fwu(){},
hEV(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cot(d){var x=0,w=A.j(y.n),v,u
var $async$cot=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hEV(d)
if(u==null){v=null
x=1
break}v=B.cos(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cot,w)},
cos(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cos=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.coq.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSd(s),$async$cos)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.coq.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cos,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGA.prototype={
S(){return new B.bnk()}}
B.bnk.prototype={
Y(){this.a4()
this.a0g()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0g()},
a0g(){var x=0,w=A.j(y.v),v=this,u
var $async$a0g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cot(v.a.c),$async$a0g)
case 2:u=e
if(v.c!=null)v.m(new B.eUF(v,u))
return A.h(null,w)}})
return A.i($async$a0g,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tL(C.A,s,C.hh,x.f,!0,v,new A.qb(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.d0.j(0.12)
v=t.a
u=v.r
v=v.w
return A.r(s,A.X(u,v==null?C.d0:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eUF.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fwu.prototype={
$1(d){var x=y.h.a(new A.qs([],[]).o_(d.target.result,!1)),w=C.wh.q(x.objectStoreNames,"thumbs")
if(!w)C.we.Gi(x,"thumbs")},
$S:179};(function inheritance(){var x=a.inherit
x(B.aGA,A.af)
x(B.bnk,A.ah)
x(B.eUF,A.iJ)
x(B.fwu,A.ht)})()
A.iT(b.typeUniverse,JSON.parse('{"aGA":{"af":[],"v":[]},"bnk":{"ah":["aGA"]}}'))
var y={i:A.at("uN"),h:A.at("ru"),w:A.at("ai<G>"),A:A.at("m5"),o:A.at("dK"),n:A.at("dK?"),v:A.at("~")};(function staticFields(){$.fvJ=A.T(A.at("m"),A.at("mq<aE>"))
$.coq=A.T(A.at("m"),y.o)
$.aPw=null})()};
(a=>{a["/J8DX05k9Y1StFlgTtu8PF6s/Og="]=a.current})($__dart_deferred_initializers__);