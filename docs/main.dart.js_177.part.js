((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bH2(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.Y(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.Y(d,"data:image"))try{x=A.uN(d)
x.toString
return x}catch(w){return v}return v},
ivb(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fD8.h(0,v)
if(x!=null)return x
w=B.bH2(v)
if(w!=null){if($.fD8.a>64)$.fD8.a6(0)
$.fD8.n(0,v,w)}return w},
aSY(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.Y(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aHQ(i,j,f,e,g,h,v),C.aq)
x=B.ivb(i)
if(x!=null)return A.bw(u,A.tT(C.z,v,C.he,e,!0,f,x,!1,v,j),C.aq)
w=C.cD.j(0.15)
return A.p(v,A.W(g,h==null?C.cD:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.m),v,f,v,v,v,v,v,j)},
aHQ:function aHQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
boZ:function boZ(){this.c=this.a=this.d=null},
f0F:function f0F(d,e){this.a=d
this.b=e},
hmJ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bc("IndexedDB not available"))
return C.xy.Hc(x,"ngmy_worksheet_thumbs_v1",new B.fDW(),1)},
ig3(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cb(d))
if(y.i.b(d))return new Uint8Array(A.cb(J.ez(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cb(A.vW(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cG.aK(d)
return x}catch(w){return v}return v},
aTC(d){return B.iAy(d)},
iAy(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aTC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aQQ
x=7
return A.b(o==null?$.aQQ=B.hmJ():o,$async$aTC)
case 7:s=f
r=J.my(s,"thumbs","readonly")
x=8
return A.b(C.iQ.xW(J.mx(r,"thumbs"),m),$async$aTC)
case 8:q=f
x=9
return A.b(J.oM(r),$async$aTC)
case 9:m=B.ig3(q)
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
return A.i($async$aTC,w)},
fDW:function fDW(){},
hOP(d){if(!(d!=null&&C.a.Y(d,"ngmy:ws-thumb:")))return null
return C.a.aY(d,14)},
cra(d){var x=0,w=A.j(y.n),v,u
var $async$cra=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hOP(d)
if(u==null){v=null
x=1
break}v=B.cr9(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cra,w)},
cr9(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cr9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cr7.h(0,s)
if(u!=null&&!C.aI.gar(u)){v=u
x=1
break}x=3
return A.b(B.aTC(s),$async$cr9)
case 3:t=f
if(t!=null&&!C.aI.gar(t)){$.cr7.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cr9,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[77],B)
B.aHQ.prototype={
R(){return new B.boZ()}}
B.boZ.prototype={
a_(){this.a3()
this.a1_()},
bx(d){this.bJ(d)
if(d.c!==this.a.c)this.a1_()},
a1_(){var x=0,w=A.j(y.v),v=this,u
var $async$a1_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cra(v.a.c),$async$a1_)
case 2:u=e
if(v.c!=null)v.l(new B.f0F(v,u))
return A.h(null,w)}})
return A.i($async$a1_,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gar(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tT(C.z,s,C.he,x.f,!0,v,new A.p1(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cD.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cD:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.f0F.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fDW.prototype={
$1(d){var x=y.h.a(new A.qI([],[]).o6(d.target.result,!1)),w=C.wW.q(x.objectStoreNames,"thumbs")
if(!w)C.wT.GC(x,"thumbs")},
$S:169};(function inheritance(){var x=a.inherit
x(B.aHQ,A.af)
x(B.boZ,A.ah)
x(B.f0F,A.hS)
x(B.fDW,A.fR)})()
A.i0(b.typeUniverse,JSON.parse('{"aHQ":{"af":[],"w":[]},"boZ":{"ah":["aHQ"]}}'))
var y={i:A.ar("mA"),h:A.ar("qV"),w:A.ar("ai<F>"),A:A.ar("lX"),o:A.ar("dC"),n:A.ar("dC?"),v:A.ar("~")};(function staticFields(){$.fD8=A.S(A.ar("m"),A.ar("mD<aE>"))
$.cr7=A.S(A.ar("m"),y.o)
$.aQQ=null})()};
(a=>{a["O1CiyK4Iff/Tc5Eu+HFTbXo3s5U="]=a.current})($__dart_deferred_initializers__);