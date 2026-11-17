((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFk(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uF(d)
x.toString
return x}catch(w){return v}return v},
ilU(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fwD.h(0,v)
if(x!=null)return x
w=B.bFk(v)
if(w!=null){if($.fwD.a>64)$.fwD.a8(0)
$.fwD.n(0,v,w)}return w},
aRO(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aGP(i,j,f,e,g,h,v),C.aq)
x=B.ilU(i)
if(x!=null)return A.bu(u,A.tL(C.A,v,C.hn,e,!0,f,x,!1,v,j),C.aq)
w=C.cA.j(0.15)
return A.p(v,A.X(g,h==null?C.cA:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGP:function aGP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnz:function bnz(){this.c=this.a=this.d=null},
eVC:function eVC(d,e){this.a=d
this.b=e},
heV(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.x2.GS(x,"ngmy_worksheet_thumbs_v1",new B.fxp(),1)},
i78(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cf(d))
if(y.i.b(d))return new Uint8Array(A.cf(J.eF(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cf(A.wR(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cK.aO(d)
return x}catch(w){return v}return v},
aSq(d){return B.ir3(d)},
ir3(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPL
x=7
return A.b(o==null?$.aPL=B.heV():o,$async$aSq)
case 7:s=f
r=J.mj(s,"thumbs","readonly")
x=8
return A.b(C.iC.xP(J.mi(r,"thumbs"),m),$async$aSq)
case 8:q=f
x=9
return A.b(J.oy(r),$async$aSq)
case 9:m=B.i78(q)
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
return A.i($async$aSq,w)},
fxp:function fxp(){},
hGo(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cp0(d){var x=0,w=A.j(y.n),v,u
var $async$cp0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hGo(d)
if(u==null){v=null
x=1
break}v=B.cp_(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cp0,w)},
cp_(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cp_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.coY.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSq(s),$async$cp_)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.coY.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cp_,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[60],B)
B.aGP.prototype={
S(){return new B.bnz()}}
B.bnz.prototype={
Y(){this.a3()
this.a0u()},
by(d){this.bJ(d)
if(d.c!==this.a.c)this.a0u()},
a0u(){var x=0,w=A.j(y.v),v=this,u
var $async$a0u=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cp0(v.a.c),$async$a0u)
case 2:u=e
if(v.c!=null)v.m(new B.eVC(v,u))
return A.h(null,w)}})
return A.i($async$a0u,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tL(C.A,s,C.hn,x.f,!0,v,new A.qc(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cA.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cA:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eVC.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fxp.prototype={
$1(d){var x=y.h.a(new A.qt([],[]).o0(d.target.result,!1)),w=C.wv.q(x.objectStoreNames,"thumbs")
if(!w)C.ws.Gj(x,"thumbs")},
$S:162};(function inheritance(){var x=a.inherit
x(B.aGP,A.af)
x(B.bnz,A.ah)
x(B.eVC,A.iO)
x(B.fxp,A.hx)})()
A.j6(b.typeUniverse,JSON.parse('{"aGP":{"af":[],"v":[]},"bnz":{"ah":["aGP"]}}'))
var y={i:A.at("uO"),h:A.at("ru"),w:A.at("ai<H>"),A:A.at("m6"),o:A.at("dJ"),n:A.at("dJ?"),v:A.at("~")};(function staticFields(){$.fwD=A.T(A.at("n"),A.at("mp<aE>"))
$.coY=A.T(A.at("n"),y.o)
$.aPL=null})()};
(a=>{a["5SjJ1NWfGgPF1dmoHU3Dn2D9KFM="]=a.current})($__dart_deferred_initializers__);