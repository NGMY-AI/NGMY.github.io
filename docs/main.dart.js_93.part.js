((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBV(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.u7(d)
x.toString
return x}catch(w){return v}return v},
i3K(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fkp.h(0,v)
if(x!=null)return x
w=B.bBV(v)
if(w!=null){if($.fkp.a>64)$.fkp.a8(0)
$.fkp.n(0,v,w)}return w},
aPa(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aEn(i,j,f,e,g,h,v),C.aq)
x=B.i3K(i)
if(x!=null)return A.bw(u,A.tg(C.A,v,C.fZ,e,!0,f,x,!1,v,j),C.aq)
w=C.cX.j(0.15)
return A.p(v,A.X(g,h==null?C.cX:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aEn:function aEn(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bkw:function bkw(){this.c=this.a=this.d=null},
eKz:function eKz(d,e){this.a=d
this.b=e},
h_v(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yJ.LQ(x,"ngmy_worksheet_thumbs_v1",new B.fla(),1)},
hQb(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.f0(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.A4(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cI.aK(d)
return x}catch(w){return v}return v},
aPN(d){return B.i8I(d)},
i8I(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aNd
x=7
return A.b(o==null?$.aNd=B.h_v():o,$async$aPN)
case 7:s=f
r=J.mI(s,"thumbs","readonly")
x=8
return A.b(C.iM.zt(J.mG(r,"thumbs"),m),$async$aPN)
case 8:q=f
x=9
return A.b(J.pB(r),$async$aPN)
case 9:m=B.hQb(q)
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
return A.i($async$aPN,w)},
fla:function fla(){},
hpB(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b5(d,14)},
cg5(d){var x=0,w=A.j(y.n),v,u
var $async$cg5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hpB(d)
if(u==null){v=null
x=1
break}v=B.cg4(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cg5,w)},
cg4(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cg4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cg2.h(0,s)
if(u!=null&&!C.aH.gam(u)){v=u
x=1
break}x=3
return A.b(B.aPN(s),$async$cg4)
case 3:t=f
if(t!=null&&!C.aH.gam(t)){$.cg2.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cg4,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aEn.prototype={
S(){return new B.bkw()}}
B.bkw.prototype={
a_(){this.a1()
this.Yd()},
bv(d){this.bG(d)
if(d.c!==this.a.c)this.Yd()},
Yd(){var x=0,w=A.j(y.v),v=this,u
var $async$Yd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cg5(v.a.c),$async$Yd)
case 2:u=e
if(v.c!=null)v.m(new B.eKz(v,u))
return A.h(null,w)}})
return A.i($async$Yd,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tg(C.A,s,C.fZ,x.f,!0,v,new A.pR(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cX.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cX:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eKz.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fla.prototype={
$1(d){var x=y.h.a(new A.rP([],[]).pB(d.target.result,!1)),w=C.xB.t(x.objectStoreNames,"thumbs")
if(!w)C.xx.KD(x,"thumbs")},
$S:202};(function inheritance(){var x=a.inherit
x(B.aEn,A.ag)
x(B.bkw,A.ah)
x(B.eKz,A.ja)
x(B.fla,A.hZ)})()
A.k0(b.typeUniverse,JSON.parse('{"aEn":{"ag":[],"t":[]},"bkw":{"ah":["aEn"]}}'))
var y={i:A.ax("ud"),h:A.ax("r3"),w:A.ax("ai<G>"),A:A.ax("lK"),o:A.ax("dL"),n:A.ax("dL?"),v:A.ax("~")};(function staticFields(){$.fkp=A.U(A.ax("m"),A.ax("m3<aD>"))
$.cg2=A.U(A.ax("m"),y.o)
$.aNd=null})()};
(a=>{a["5qapDQDjzJlQmhxGN5g4rNLEst8="]=a.current})($__dart_deferred_initializers__);