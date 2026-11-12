((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEE(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.uw(d)
x.toString
return x}catch(w){return v}return v},
iic(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fuq.h(0,v)
if(x!=null)return x
w=B.bEE(v)
if(w!=null){if($.fuq.a>64)$.fuq.a8(0)
$.fuq.n(0,v,w)}return w},
aRd(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aGl(i,j,f,e,g,h,v),C.aq)
x=B.iic(i)
if(x!=null)return A.bx(u,A.tF(C.A,v,C.hb,e,!0,f,x,!1,v,j),C.aq)
w=C.d_.j(0.15)
return A.q(v,A.X(g,h==null?C.d_:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGl:function aGl(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bmX:function bmX(){this.c=this.a=this.d=null},
eTC:function eTC(d,e){this.a=d
this.b=e},
hbQ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zu.Mv(x,"ngmy_worksheet_thumbs_v1",new B.fvb(),1)},
i3d(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cb(d))
if(y.i.b(d))return new Uint8Array(A.cb(J.eE(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cb(A.wI(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cG.aM(d)
return x}catch(w){return v}return v},
aRR(d){return B.inf(d)},
inf(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aRR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPd
x=7
return A.b(o==null?$.aPd=B.hbQ():o,$async$aRR)
case 7:s=f
r=J.mY(s,"thumbs","readonly")
x=8
return A.b(C.j6.A3(J.mX(r,"thumbs"),m),$async$aRR)
case 8:q=f
x=9
return A.b(J.pS(r),$async$aRR)
case 9:m=B.i3d(q)
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
return A.i($async$aRR,w)},
fvb:function fvb(){},
hCL(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cnW(d){var x=0,w=A.j(y.n),v,u
var $async$cnW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hCL(d)
if(u==null){v=null
x=1
break}v=B.cnV(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cnW,w)},
cnV(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cnV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cnT.h(0,s)
if(u!=null&&!C.aH.gau(u)){v=u
x=1
break}x=3
return A.b(B.aRR(s),$async$cnV)
case 3:t=f
if(t!=null&&!C.aH.gau(t)){$.cnT.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cnV,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[60],B)
B.aGl.prototype={
S(){return new B.bmX()}}
B.bmX.prototype={
Y(){this.a3()
this.a08()},
by(d){this.bJ(d)
if(d.c!==this.a.c)this.a08()},
a08(){var x=0,w=A.j(y.v),v=this,u
var $async$a08=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cnW(v.a.c),$async$a08)
case 2:u=e
if(v.c!=null)v.m(new B.eTC(v,u))
return A.h(null,w)}})
return A.i($async$a08,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tF(C.A,s,C.hb,x.f,!0,v,new A.q5(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.d_.j(0.12)
v=t.a
u=v.r
v=v.w
return A.q(s,A.X(u,v==null?C.d_:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eTC.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fvb.prototype={
$1(d){var x=y.h.a(new A.r2([],[]).oL(d.target.result,!1)),w=C.yp.q(x.objectStoreNames,"thumbs")
if(!w)C.yl.Lh(x,"thumbs")},
$S:201};(function inheritance(){var x=a.inherit
x(B.aGl,A.af)
x(B.bmX,A.ah)
x(B.eTC,A.iH)
x(B.fvb,A.ht)})()
A.j1(b.typeUniverse,JSON.parse('{"aGl":{"af":[],"v":[]},"bmX":{"ah":["aGl"]}}'))
var y={i:A.as("uD"),h:A.as("rn"),w:A.as("ai<F>"),A:A.as("m_"),o:A.as("dK"),n:A.as("dK?"),v:A.as("~")};(function staticFields(){$.fuq=A.T(A.as("m"),A.as("mi<aE>"))
$.cnT=A.T(A.as("m"),y.o)
$.aPd=null})()};
(a=>{a["9IXjb6+y/3EEvX+FlAbfHxDectA="]=a.current})($__dart_deferred_initializers__);