((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBB(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tZ(d)
x.toString
return x}catch(w){return v}return v},
i0v(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fif.h(0,v)
if(x!=null)return x
w=B.bBB(v)
if(w!=null){if($.fif.a>64)$.fif.a9(0)
$.fif.n(0,v,w)}return w},
aOR(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aE7(i,j,f,e,g,h,v),C.aq)
x=B.i0v(i)
if(x!=null)return A.bw(u,A.t7(C.A,v,C.fW,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.X(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aE7:function aE7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bka:function bka(){this.c=this.a=this.d=null},
eIp:function eIp(d,e){this.a=d
this.b=e},
fXq(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yx.LD(x,"ngmy_worksheet_thumbs_v1",new B.fj0(),1)},
hMW(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zV(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
aPv(d){return B.i5t(d)},
i5t(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMY
x=7
return A.b(o==null?$.aMY=B.fXq():o,$async$aPv)
case 7:s=f
r=J.mG(s,"thumbs","readonly")
x=8
return A.b(C.iE.zo(J.mE(r,"thumbs"),m),$async$aPv)
case 8:q=f
x=9
return A.b(J.pt(r),$async$aPv)
case 9:m=B.hMW(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
$.am.$1("[worksheet-thumb idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPv,w)},
fj0:function fj0(){},
hmo(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cfp(d){var x=0,w=A.j(y.n),v,u
var $async$cfp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hmo(d)
if(u==null){v=null
x=1
break}v=B.cfo(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfp,w)},
cfo(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cfo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cfm.h(0,s)
if(u!=null&&!C.aH.gam(u)){v=u
x=1
break}x=3
return A.b(B.aPv(s),$async$cfo)
case 3:t=f
if(t!=null&&!C.aH.gam(t)){$.cfm.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfo,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aE7.prototype={
R(){return new B.bka()}}
B.bka.prototype={
a_(){this.a1()
this.Y0()},
bt(d){this.bD(d)
if(d.c!==this.a.c)this.Y0()},
Y0(){var x=0,w=A.j(y.v),v=this,u
var $async$Y0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cfp(v.a.c),$async$Y0)
case 2:u=e
if(v.c!=null)v.m(new B.eIp(v,u))
return A.h(null,w)}})
return A.i($async$Y0,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.t7(C.A,s,C.fW,x.f,!0,v,new A.pI(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eIp.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fj0.prototype={
$1(d){var x=y.h.a(new A.rH([],[]).pA(d.target.result,!1)),w=C.xp.t(x.objectStoreNames,"thumbs")
if(!w)C.xl.Kr(x,"thumbs")},
$S:183};(function inheritance(){var x=a.inherit
x(B.aE7,A.ag)
x(B.bka,A.ah)
x(B.eIp,A.j8)
x(B.fj0,A.hV)})()
A.jY(b.typeUniverse,JSON.parse('{"aE7":{"ag":[],"r":[]},"bka":{"ah":["aE7"]}}'))
var y={i:A.ax("u4"),h:A.ax("qY"),w:A.ax("ai<H>"),A:A.ax("lI"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.fif=A.T(A.ax("n"),A.ax("m_<aC>"))
$.cfm=A.T(A.ax("n"),y.o)
$.aMY=null})()};
(a=>{a["fym0FN6/+k4S2/Unru0vsDX5bt8="]=a.current})($__dart_deferred_initializers__);