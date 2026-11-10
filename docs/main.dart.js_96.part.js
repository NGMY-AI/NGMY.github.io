((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bCQ(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.ui(d)
x.toString
return x}catch(w){return v}return v},
i7E(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fm5.h(0,v)
if(x!=null)return x
w=B.bCQ(v)
if(w!=null){if($.fm5.a>64)$.fm5.a9(0)
$.fm5.n(0,v,w)}return w},
aPY(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.by(u,new B.aFf(i,j,f,e,g,h,v),C.aq)
x=B.i7E(i)
if(x!=null)return A.by(u,A.tq(C.A,v,C.h6,e,!0,f,x,!1,v,j),C.aq)
w=C.cX.j(0.15)
return A.p(v,A.X(g,h==null?C.cX:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aFf:function aFf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
blr:function blr(){this.c=this.a=this.d=null},
eM0:function eM0(d,e){this.a=d
this.b=e},
h2z(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.z3.Mg(x,"ngmy_worksheet_thumbs_v1",new B.fmR(),1)},
hTK(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ci(d))
if(y.i.b(d))return new Uint8Array(A.ci(J.eG(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ci(A.yf(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ci(d))
if(typeof d=="string")try{x=C.cF.aM(d)
return x}catch(w){return v}return v},
aQB(d){return B.icH(d)},
icH(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aQB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aNY
x=7
return A.b(o==null?$.aNY=B.h2z():o,$async$aQB)
case 7:s=f
r=J.mP(s,"thumbs","readonly")
x=8
return A.b(C.j_.zD(J.mO(r,"thumbs"),m),$async$aQB)
case 8:q=f
x=9
return A.b(J.pE(r),$async$aQB)
case 9:m=B.hTK(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
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
return A.i($async$aQB,w)},
fmR:function fmR(){},
hsV(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b7(d,14)},
cjT(d){var x=0,w=A.j(y.n),v,u
var $async$cjT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hsV(d)
if(u==null){v=null
x=1
break}v=B.cjS(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cjT,w)},
cjS(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cjS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cjQ.h(0,s)
if(u!=null&&!C.aG.gan(u)){v=u
x=1
break}x=3
return A.b(B.aQB(s),$async$cjS)
case 3:t=f
if(t!=null&&!C.aG.gan(t)){$.cjQ.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cjS,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[58],B)
B.aFf.prototype={
U(){return new B.blr()}}
B.blr.prototype={
a_(){this.a2()
this.a_E()},
bx(d){this.bH(d)
if(d.c!==this.a.c)this.a_E()},
a_E(){var x=0,w=A.j(y.v),v=this,u
var $async$a_E=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cjT(v.a.c),$async$a_E)
case 2:u=e
if(v.c!=null)v.m(new B.eM0(v,u))
return A.h(null,w)}})
return A.i($async$a_E,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gan(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tq(C.A,s,C.h6,x.f,!0,v,new A.pU(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cX.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cX:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eM0.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fmR.prototype={
$1(d){var x=y.h.a(new A.rW([],[]).pM(d.target.result,!1)),w=C.xZ.t(x.objectStoreNames,"thumbs")
if(!w)C.xV.L_(x,"thumbs")},
$S:193};(function inheritance(){var x=a.inherit
x(B.aFf,A.ag)
x(B.blr,A.ah)
x(B.eM0,A.jc)
x(B.fmR,A.hL)})()
A.jk(b.typeUniverse,JSON.parse('{"aFf":{"ag":[],"v":[]},"blr":{"ah":["aFf"]}}'))
var y={i:A.av("uo"),h:A.av("rc"),w:A.av("ai<H>"),A:A.av("lV"),o:A.av("dI"),n:A.av("dI?"),v:A.av("~")};(function staticFields(){$.fm5=A.T(A.av("n"),A.av("mc<aD>"))
$.cjQ=A.T(A.av("n"),y.o)
$.aNY=null})()};
(a=>{a["2F85oJmvqNZABF/oto21BiLKjUE="]=a.current})($__dart_deferred_initializers__);