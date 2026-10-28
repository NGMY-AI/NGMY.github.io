((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBp(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tT(d)
x.toString
return x}catch(w){return v}return v},
hZI(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fgX.h(0,v)
if(x!=null)return x
w=B.bBp(v)
if(w!=null){if($.fgX.a>64)$.fgX.a9(0)
$.fgX.n(0,v,w)}return w},
aOH(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aDX(i,j,f,e,g,h,v),C.aq)
x=B.hZI(i)
if(x!=null)return A.bw(u,A.t3(C.A,v,C.fV,e,!0,f,x,!1,v,j),C.aq)
w=C.cV.j(0.15)
return A.p(v,A.X(g,h==null?C.cV:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aDX:function aDX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjZ:function bjZ(){this.c=this.a=this.d=null},
eH7:function eH7(d,e){this.a=d
this.b=e},
fVQ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yr.LB(x,"ngmy_worksheet_thumbs_v1",new B.fhI(),1)},
hLa(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zN(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
aPl(d){return B.i3G(d)},
i3G(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMN
x=7
return A.b(o==null?$.aMN=B.fVQ():o,$async$aPl)
case 7:s=f
r=J.mE(s,"thumbs","readonly")
x=8
return A.b(C.iD.zg(J.mC(r,"thumbs"),m),$async$aPl)
case 8:q=f
x=9
return A.b(J.pp(r),$async$aPl)
case 9:m=B.hLa(q)
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
return A.i($async$aPl,w)},
fhI:function fhI(){},
hkG(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b1(d,14)},
cf3(d){var x=0,w=A.j(y.n),v,u
var $async$cf3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hkG(d)
if(u==null){v=null
x=1
break}v=B.cf2(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf3,w)},
cf2(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cf2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cf0.h(0,s)
if(u!=null&&!C.aG.gam(u)){v=u
x=1
break}x=3
return A.b(B.aPl(s),$async$cf2)
case 3:t=f
if(t!=null&&!C.aG.gam(t)){$.cf0.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf2,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aDX.prototype={
R(){return new B.bjZ()}}
B.bjZ.prototype={
a_(){this.a1()
this.XX()},
br(d){this.bC(d)
if(d.c!==this.a.c)this.XX()},
XX(){var x=0,w=A.j(y.v),v=this,u
var $async$XX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cf3(v.a.c),$async$XX)
case 2:u=e
if(v.c!=null)v.m(new B.eH7(v,u))
return A.h(null,w)}})
return A.i($async$XX,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.t3(C.A,s,C.fV,x.f,!0,v,new A.pE(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cV.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cV:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eH7.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fhI.prototype={
$1(d){var x=y.h.a(new A.rD([],[]).py(d.target.result,!1)),w=C.xk.t(x.objectStoreNames,"thumbs")
if(!w)C.xg.Kp(x,"thumbs")},
$S:190};(function inheritance(){var x=a.inherit
x(B.aDX,A.ag)
x(B.bjZ,A.ah)
x(B.eH7,A.j5)
x(B.fhI,A.hT)})()
A.jW(b.typeUniverse,JSON.parse('{"aDX":{"ag":[],"r":[]},"bjZ":{"ah":["aDX"]}}'))
var y={i:A.ax("tZ"),h:A.ax("qV"),w:A.ax("ai<H>"),A:A.ax("lG"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.fgX=A.T(A.ax("n"),A.ax("lY<aC>"))
$.cf0=A.T(A.ax("n"),y.o)
$.aMN=null})()};
(a=>{a["+6E0np10kE03R88HW0ugKv5T1u0="]=a.current})($__dart_deferred_initializers__);