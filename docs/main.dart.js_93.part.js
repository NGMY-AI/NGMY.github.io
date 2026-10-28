((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBu(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tU(d)
x.toString
return x}catch(w){return v}return v},
i__(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fhc.h(0,v)
if(x!=null)return x
w=B.bBu(v)
if(w!=null){if($.fhc.a>64)$.fhc.a9(0)
$.fhc.n(0,v,w)}return w},
aOK(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aE_(i,j,f,e,g,h,v),C.aq)
x=B.i__(i)
if(x!=null)return A.bw(u,A.t4(C.A,v,C.fV,e,!0,f,x,!1,v,j),C.aq)
w=C.cV.j(0.15)
return A.p(v,A.X(g,h==null?C.cV:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aE_:function aE_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bk3:function bk3(){this.c=this.a=this.d=null},
eHn:function eHn(d,e){this.a=d
this.b=e},
fW7(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.ys.LB(x,"ngmy_worksheet_thumbs_v1",new B.fhY(),1)},
hLs(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zN(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
aPo(d){return B.i3Y(d)},
i3Y(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPo=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMQ
x=7
return A.b(o==null?$.aMQ=B.fW7():o,$async$aPo)
case 7:s=f
r=J.mE(s,"thumbs","readonly")
x=8
return A.b(C.iD.zg(J.mC(r,"thumbs"),m),$async$aPo)
case 8:q=f
x=9
return A.b(J.pp(r),$async$aPo)
case 9:m=B.hLs(q)
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
return A.i($async$aPo,w)},
fhY:function fhY(){},
hkZ(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b1(d,14)},
cf8(d){var x=0,w=A.j(y.n),v,u
var $async$cf8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hkZ(d)
if(u==null){v=null
x=1
break}v=B.cf7(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf8,w)},
cf7(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cf7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cf5.h(0,s)
if(u!=null&&!C.aG.gam(u)){v=u
x=1
break}x=3
return A.b(B.aPo(s),$async$cf7)
case 3:t=f
if(t!=null&&!C.aG.gam(t)){$.cf5.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf7,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aE_.prototype={
R(){return new B.bk3()}}
B.bk3.prototype={
a_(){this.a1()
this.XX()},
br(d){this.bC(d)
if(d.c!==this.a.c)this.XX()},
XX(){var x=0,w=A.j(y.v),v=this,u
var $async$XX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cf8(v.a.c),$async$XX)
case 2:u=e
if(v.c!=null)v.m(new B.eHn(v,u))
return A.h(null,w)}})
return A.i($async$XX,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.t4(C.A,s,C.fV,x.f,!0,v,new A.pE(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cV.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cV:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eHn.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fhY.prototype={
$1(d){var x=y.h.a(new A.rD([],[]).py(d.target.result,!1)),w=C.xl.t(x.objectStoreNames,"thumbs")
if(!w)C.xh.Kp(x,"thumbs")},
$S:194};(function inheritance(){var x=a.inherit
x(B.aE_,A.ag)
x(B.bk3,A.ah)
x(B.eHn,A.j6)
x(B.fhY,A.hT)})()
A.jW(b.typeUniverse,JSON.parse('{"aE_":{"ag":[],"r":[]},"bk3":{"ah":["aE_"]}}'))
var y={i:A.ax("u_"),h:A.ax("qV"),w:A.ax("ai<H>"),A:A.ax("lG"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.fhc=A.T(A.ax("n"),A.ax("lY<aC>"))
$.cf5=A.T(A.ax("n"),y.o)
$.aMQ=null})()};
(a=>{a["JL6IZtrkCCgrMFkjt24rMda2nEI="]=a.current})($__dart_deferred_initializers__);