((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFN(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uG(d)
x.toString
return x}catch(w){return v}return v},
inl(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fxm.h(0,v)
if(x!=null)return x
w=B.bFN(v)
if(w!=null){if($.fxm.a>64)$.fxm.a8(0)
$.fxm.n(0,v,w)}return w},
aSe(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aHb(i,j,f,e,g,h,v),C.aq)
x=B.inl(i)
if(x!=null)return A.bu(u,A.tM(C.z,v,C.h2,e,!0,f,x,!1,v,j),C.aq)
w=C.cC.j(0.15)
return A.p(v,A.W(g,h==null?C.cC:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aHb:function aHb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnY:function bnY(){this.c=this.a=this.d=null},
eWi:function eWi(d,e){this.a=d
this.b=e},
hfY(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.X(A.bc("IndexedDB not available"))
return C.x6.GW(x,"ngmy_worksheet_thumbs_v1",new B.fy9(),1)},
i8t(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cc(d))
if(y.i.b(d))return new Uint8Array(A.cc(J.es(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cc(A.wT(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cL.aN(d)
return x}catch(w){return v}return v},
aSR(d){return B.isz(d)},
isz(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aQ9
x=7
return A.b(o==null?$.aQ9=B.hfY():o,$async$aSR)
case 7:s=f
r=J.mp(s,"thumbs","readonly")
x=8
return A.b(C.iE.xP(J.mo(r,"thumbs"),m),$async$aSR)
case 8:q=f
x=9
return A.b(J.oC(r),$async$aSR)
case 9:m=B.i8t(q)
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
return A.i($async$aSR,w)},
fy9:function fy9(){},
hHJ(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b3(d,14)},
cpz(d){var x=0,w=A.j(y.n),v,u
var $async$cpz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hHJ(d)
if(u==null){v=null
x=1
break}v=B.cpy(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cpz,w)},
cpy(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cpy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cpw.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSR(s),$async$cpy)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.cpw.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cpy,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[62],B)
B.aHb.prototype={
S(){return new B.bnY()}}
B.bnY.prototype={
Y(){this.a3()
this.a0A()},
bz(d){this.bK(d)
if(d.c!==this.a.c)this.a0A()},
a0A(){var x=0,w=A.j(y.v),v=this,u
var $async$a0A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cpz(v.a.c),$async$a0A)
case 2:u=e
if(v.c!=null)v.m(new B.eWi(v,u))
return A.h(null,w)}})
return A.i($async$a0A,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tM(C.z,s,C.h2,x.f,!0,v,new A.qh(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cC.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cC:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eWi.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fy9.prototype={
$1(d){var x=y.h.a(new A.qz([],[]).o4(d.target.result,!1)),w=C.wz.q(x.objectStoreNames,"thumbs")
if(!w)C.ww.Gm(x,"thumbs")},
$S:164};(function inheritance(){var x=a.inherit
x(B.aHb,A.af)
x(B.bnY,A.ah)
x(B.eWi,A.iT)
x(B.fy9,A.ht)})()
A.j0(b.typeUniverse,JSON.parse('{"aHb":{"af":[],"v":[]},"bnY":{"ah":["aHb"]}}'))
var y={i:A.at("mL"),h:A.at("ry"),w:A.at("ai<F>"),A:A.at("m9"),o:A.at("dH"),n:A.at("dH?"),v:A.at("~")};(function staticFields(){$.fxm=A.T(A.at("n"),A.at("mv<aF>"))
$.cpw=A.T(A.at("n"),y.o)
$.aQ9=null})()};
(a=>{a["FubqtDP4SpMvs30UvB7iAUaCtdA="]=a.current})($__dart_deferred_initializers__);