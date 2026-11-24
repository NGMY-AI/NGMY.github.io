((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bH6(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.Y(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.Y(d,"data:image"))try{x=A.uN(d)
x.toString
return x}catch(w){return v}return v},
ivn(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fDi.h(0,v)
if(x!=null)return x
w=B.bH6(v)
if(w!=null){if($.fDi.a>64)$.fDi.a6(0)
$.fDi.n(0,v,w)}return w},
aSZ(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.Y(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aHQ(i,j,f,e,g,h,v),C.aq)
x=B.ivn(i)
if(x!=null)return A.bx(u,A.tT(C.z,v,C.he,e,!0,f,x,!1,v,j),C.aq)
w=C.cE.j(0.15)
return A.p(v,A.V(g,h==null?C.cE:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.m),v,f,v,v,v,v,v,j)},
aHQ:function aHQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bp1:function bp1(){this.c=this.a=this.d=null},
f0M:function f0M(d,e){this.a=d
this.b=e},
hmU(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bc("IndexedDB not available"))
return C.xy.Hd(x,"ngmy_worksheet_thumbs_v1",new B.fE5(),1)},
ige(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cb(d))
if(y.i.b(d))return new Uint8Array(A.cb(J.ez(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cb(A.vW(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cH.aK(d)
return x}catch(w){return v}return v},
aTD(d){return B.iAK(d)},
iAK(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aTD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aQR
x=7
return A.b(o==null?$.aQR=B.hmU():o,$async$aTD)
case 7:s=f
r=J.my(s,"thumbs","readonly")
x=8
return A.b(C.iR.xU(J.mx(r,"thumbs"),m),$async$aTD)
case 8:q=f
x=9
return A.b(J.oM(r),$async$aTD)
case 9:m=B.ige(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
$.am.$1("[worksheet-thumb idb get] "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aTD,w)},
fE5:function fE5(){},
hP_(d){if(!(d!=null&&C.a.Y(d,"ngmy:ws-thumb:")))return null
return C.a.aY(d,14)},
crc(d){var x=0,w=A.j(y.n),v,u
var $async$crc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hP_(d)
if(u==null){v=null
x=1
break}v=B.crb(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$crc,w)},
crb(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$crb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cr9.h(0,s)
if(u!=null&&!C.aI.gar(u)){v=u
x=1
break}x=3
return A.b(B.aTD(s),$async$crb)
case 3:t=f
if(t!=null&&!C.aI.gar(t)){$.cr9.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$crb,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[77],B)
B.aHQ.prototype={
R(){return new B.bp1()}}
B.bp1.prototype={
a_(){this.a3()
this.a12()},
by(d){this.bJ(d)
if(d.c!==this.a.c)this.a12()},
a12(){var x=0,w=A.j(y.v),v=this,u
var $async$a12=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.crc(v.a.c),$async$a12)
case 2:u=e
if(v.c!=null)v.l(new B.f0M(v,u))
return A.h(null,w)}})
return A.i($async$a12,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gar(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tT(C.z,s,C.he,x.f,!0,v,new A.p1(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cE.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cE:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.f0M.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fE5.prototype={
$1(d){var x=y.h.a(new A.qI([],[]).o6(d.target.result,!1)),w=C.wX.q(x.objectStoreNames,"thumbs")
if(!w)C.wU.GD(x,"thumbs")},
$S:170};(function inheritance(){var x=a.inherit
x(B.aHQ,A.af)
x(B.bp1,A.ah)
x(B.f0M,A.hS)
x(B.fE5,A.fR)})()
A.i0(b.typeUniverse,JSON.parse('{"aHQ":{"af":[],"w":[]},"bp1":{"ah":["aHQ"]}}'))
var y={i:A.ar("mA"),h:A.ar("qV"),w:A.ar("ai<F>"),A:A.ar("lX"),o:A.ar("dC"),n:A.ar("dC?"),v:A.ar("~")};(function staticFields(){$.fDi=A.S(A.ar("m"),A.ar("mD<aE>"))
$.cr9=A.S(A.ar("m"),y.o)
$.aQR=null})()};
(a=>{a["oaBV7m/3Mu1NJzOl+imauE2bAEs="]=a.current})($__dart_deferred_initializers__);