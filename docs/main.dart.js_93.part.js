((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bCb(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.u7(d)
x.toString
return x}catch(w){return v}return v},
i4V(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.flh.h(0,v)
if(x!=null)return x
w=B.bCb(v)
if(w!=null){if($.flh.a>64)$.flh.a8(0)
$.flh.n(0,v,w)}return w},
aPn(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aEz(i,j,f,e,g,h,v),C.aq)
x=B.i4V(i)
if(x!=null)return A.bw(u,A.th(C.A,v,C.fZ,e,!0,f,x,!1,v,j),C.aq)
w=C.cX.j(0.15)
return A.p(v,A.X(g,h==null?C.cX:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aEz:function aEz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bkL:function bkL(){this.c=this.a=this.d=null},
eLp:function eLp(d,e){this.a=d
this.b=e},
h0z(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yK.LU(x,"ngmy_worksheet_thumbs_v1",new B.fm2(),1)},
hRk(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cf(d))
if(y.i.b(d))return new Uint8Array(A.cf(J.f1(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cf(A.A4(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cI.aL(d)
return x}catch(w){return v}return v},
aQ_(d){return B.i9T(d)},
i9T(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aQ_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aNp
x=7
return A.b(o==null?$.aNp=B.h0z():o,$async$aQ_)
case 7:s=f
r=J.mK(s,"thumbs","readonly")
x=8
return A.b(C.iN.zv(J.mI(r,"thumbs"),m),$async$aQ_)
case 8:q=f
x=9
return A.b(J.pB(r),$async$aQ_)
case 9:m=B.hRk(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
$.am.$1("[worksheet-thumb idb get] "+A.u(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQ_,w)},
fm2:function fm2(){},
hqJ(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b5(d,14)},
cgw(d){var x=0,w=A.j(y.n),v,u
var $async$cgw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hqJ(d)
if(u==null){v=null
x=1
break}v=B.cgv(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgw,w)},
cgv(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cgv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cgt.h(0,s)
if(u!=null&&!C.aH.gan(u)){v=u
x=1
break}x=3
return A.b(B.aQ_(s),$async$cgv)
case 3:t=f
if(t!=null&&!C.aH.gan(t)){$.cgt.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgv,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aEz.prototype={
T(){return new B.bkL()}}
B.bkL.prototype={
Z(){this.a1()
this.Yg()},
bv(d){this.bG(d)
if(d.c!==this.a.c)this.Yg()},
Yg(){var x=0,w=A.j(y.v),v=this,u
var $async$Yg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cgw(v.a.c),$async$Yg)
case 2:u=e
if(v.c!=null)v.m(new B.eLp(v,u))
return A.h(null,w)}})
return A.i($async$Yg,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gan(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.th(C.A,s,C.fZ,x.f,!0,v,new A.pR(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cX.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cX:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eLp.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fm2.prototype={
$1(d){var x=y.h.a(new A.rQ([],[]).pD(d.target.result,!1)),w=C.xD.t(x.objectStoreNames,"thumbs")
if(!w)C.xz.KH(x,"thumbs")},
$S:195};(function inheritance(){var x=a.inherit
x(B.aEz,A.ag)
x(B.bkL,A.ah)
x(B.eLp,A.ja)
x(B.fm2,A.i_)})()
A.k1(b.typeUniverse,JSON.parse('{"aEz":{"ag":[],"t":[]},"bkL":{"ah":["aEz"]}}'))
var y={i:A.ax("ud"),h:A.ax("r3"),w:A.ax("ai<G>"),A:A.ax("lM"),o:A.ax("dL"),n:A.ax("dL?"),v:A.ax("~")};(function staticFields(){$.flh=A.U(A.ax("m"),A.ax("m4<aD>"))
$.cgt=A.U(A.ax("m"),y.o)
$.aNp=null})()};
(a=>{a["30WeRGWXkOkRanMI3ivM9OZrrlU="]=a.current})($__dart_deferred_initializers__);