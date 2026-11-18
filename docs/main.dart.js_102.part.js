((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFW(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.Z(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.Z(d,"data:image"))try{x=A.uH(d)
x.toString
return x}catch(w){return v}return v},
inN(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fxN.h(0,v)
if(x!=null)return x
w=B.bFW(v)
if(w!=null){if($.fxN.a>64)$.fxN.a8(0)
$.fxN.n(0,v,w)}return w},
aSj(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.Z(i,"ngmy:ws-thumb:"))return A.bv(u,new B.aHh(i,j,f,e,g,h,v),C.aq)
x=B.inN(i)
if(x!=null)return A.bv(u,A.tO(C.z,v,C.h2,e,!0,f,x,!1,v,j),C.aq)
w=C.cC.j(0.15)
return A.p(v,A.X(g,h==null?C.cC:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aHh:function aHh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bo3:function bo3(){this.c=this.a=this.d=null},
eWC:function eWC(d,e){this.a=d
this.b=e},
hgs(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.x8.GW(x,"ngmy_worksheet_thumbs_v1",new B.fyA(),1)},
i8U(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cc(d))
if(y.i.b(d))return new Uint8Array(A.cc(J.er(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cc(A.wV(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cJ.aL(d)
return x}catch(w){return v}return v},
aSY(d){return B.it3(d)},
it3(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aQf
x=7
return A.b(o==null?$.aQf=B.hgs():o,$async$aSY)
case 7:s=f
r=J.mp(s,"thumbs","readonly")
x=8
return A.b(C.iE.xP(J.mo(r,"thumbs"),m),$async$aSY)
case 8:q=f
x=9
return A.b(J.oC(r),$async$aSY)
case 9:m=B.i8U(q)
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
return A.i($async$aSY,w)},
fyA:function fyA(){},
hI9(d){if(!(d!=null&&C.a.Z(d,"ngmy:ws-thumb:")))return null
return C.a.b0(d,14)},
cpJ(d){var x=0,w=A.j(y.n),v,u
var $async$cpJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hI9(d)
if(u==null){v=null
x=1
break}v=B.cpI(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cpJ,w)},
cpI(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cpI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cpG.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSY(s),$async$cpI)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.cpG.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cpI,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[62],B)
B.aHh.prototype={
S(){return new B.bo3()}}
B.bo3.prototype={
Y(){this.a3()
this.a0D()},
bz(d){this.bK(d)
if(d.c!==this.a.c)this.a0D()},
a0D(){var x=0,w=A.j(y.v),v=this,u
var $async$a0D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cpJ(v.a.c),$async$a0D)
case 2:u=e
if(v.c!=null)v.m(new B.eWC(v,u))
return A.h(null,w)}})
return A.i($async$a0D,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tO(C.z,s,C.h2,x.f,!0,v,new A.pu(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cC.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cC:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eWC.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fyA.prototype={
$1(d){var x=y.h.a(new A.qz([],[]).o4(d.target.result,!1)),w=C.wA.q(x.objectStoreNames,"thumbs")
if(!w)C.wx.Gm(x,"thumbs")},
$S:161};(function inheritance(){var x=a.inherit
x(B.aHh,A.af)
x(B.bo3,A.ah)
x(B.eWC,A.iT)
x(B.fyA,A.ht)})()
A.j1(b.typeUniverse,JSON.parse('{"aHh":{"af":[],"v":[]},"bo3":{"ah":["aHh"]}}'))
var y={i:A.at("mL"),h:A.at("rz"),w:A.at("ai<G>"),A:A.at("ma"),o:A.at("dH"),n:A.at("dH?"),v:A.at("~")};(function staticFields(){$.fxN=A.T(A.at("n"),A.at("mv<aF>"))
$.cpG=A.T(A.at("n"),y.o)
$.aQf=null})()};
(a=>{a["XA69w90vw2WCvWe/Q88X/u0vsWw="]=a.current})($__dart_deferred_initializers__);