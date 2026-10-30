((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bCa(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.u7(d)
x.toString
return x}catch(w){return v}return v},
i4N(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fl9.h(0,v)
if(x!=null)return x
w=B.bCa(v)
if(w!=null){if($.fl9.a>64)$.fl9.a8(0)
$.fl9.n(0,v,w)}return w},
aPm(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aEz(i,j,f,e,g,h,v),C.aq)
x=B.i4N(i)
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
bkK:function bkK(){this.c=this.a=this.d=null},
eLj:function eLj(d,e){this.a=d
this.b=e},
h0r(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yJ.LU(x,"ngmy_worksheet_thumbs_v1",new B.flV(),1)},
hRc(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cf(d))
if(y.i.b(d))return new Uint8Array(A.cf(J.f1(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cf(A.A5(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cI.aL(d)
return x}catch(w){return v}return v},
aPZ(d){return B.i9L(d)},
i9L(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aNp
x=7
return A.b(o==null?$.aNp=B.h0r():o,$async$aPZ)
case 7:s=f
r=J.mK(s,"thumbs","readonly")
x=8
return A.b(C.iN.zv(J.mI(r,"thumbs"),m),$async$aPZ)
case 8:q=f
x=9
return A.b(J.pB(r),$async$aPZ)
case 9:m=B.hRc(q)
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
return A.i($async$aPZ,w)},
flV:function flV(){},
hqB(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b5(d,14)},
cgs(d){var x=0,w=A.j(y.n),v,u
var $async$cgs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hqB(d)
if(u==null){v=null
x=1
break}v=B.cgr(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgs,w)},
cgr(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cgr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cgp.h(0,s)
if(u!=null&&!C.aH.gan(u)){v=u
x=1
break}x=3
return A.b(B.aPZ(s),$async$cgr)
case 3:t=f
if(t!=null&&!C.aH.gan(t)){$.cgp.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgr,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aEz.prototype={
T(){return new B.bkK()}}
B.bkK.prototype={
Z(){this.a1()
this.Yh()},
bv(d){this.bG(d)
if(d.c!==this.a.c)this.Yh()},
Yh(){var x=0,w=A.j(y.v),v=this,u
var $async$Yh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cgs(v.a.c),$async$Yh)
case 2:u=e
if(v.c!=null)v.m(new B.eLj(v,u))
return A.h(null,w)}})
return A.i($async$Yh,w)},
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
B.eLj.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.flV.prototype={
$1(d){var x=y.h.a(new A.rQ([],[]).pD(d.target.result,!1)),w=C.xC.t(x.objectStoreNames,"thumbs")
if(!w)C.xy.KH(x,"thumbs")},
$S:195};(function inheritance(){var x=a.inherit
x(B.aEz,A.ag)
x(B.bkK,A.ah)
x(B.eLj,A.ja)
x(B.flV,A.i_)})()
A.k0(b.typeUniverse,JSON.parse('{"aEz":{"ag":[],"t":[]},"bkK":{"ah":["aEz"]}}'))
var y={i:A.ax("ud"),h:A.ax("r3"),w:A.ax("ai<G>"),A:A.ax("lM"),o:A.ax("dL"),n:A.ax("dL?"),v:A.ax("~")};(function staticFields(){$.fl9=A.U(A.ax("m"),A.ax("m4<aD>"))
$.cgp=A.U(A.ax("m"),y.o)
$.aNp=null})()};
(a=>{a["j/2D9R7riDsJtwWvQGb574bpqbQ="]=a.current})($__dart_deferred_initializers__);