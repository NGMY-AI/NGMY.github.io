((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEy(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.uw(d)
x.toString
return x}catch(w){return v}return v},
ihD(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fu5.h(0,v)
if(x!=null)return x
w=B.bEy(v)
if(w!=null){if($.fu5.a>64)$.fu5.a9(0)
$.fu5.n(0,v,w)}return w},
aR5(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aGc(i,j,f,e,g,h,v),C.aq)
x=B.ihD(i)
if(x!=null)return A.bx(u,A.tE(C.A,v,C.hc,e,!0,f,x,!1,v,j),C.aq)
w=C.d_.j(0.15)
return A.p(v,A.Y(g,h==null?C.d_:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGc:function aGc(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bmQ:function bmQ(){this.c=this.a=this.d=null},
eTk:function eTk(d,e){this.a=d
this.b=e},
hbp(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zu.Mt(x,"ngmy_worksheet_thumbs_v1",new B.fuR(),1)},
i2D(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cb(d))
if(y.i.b(d))return new Uint8Array(A.cb(J.eC(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cb(A.wH(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cG.aM(d)
return x}catch(w){return v}return v},
aRJ(d){return B.imG(d)},
imG(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aRJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aP4
x=7
return A.b(o==null?$.aP4=B.hbp():o,$async$aRJ)
case 7:s=f
r=J.mY(s,"thumbs","readonly")
x=8
return A.b(C.j6.A_(J.mX(r,"thumbs"),m),$async$aRJ)
case 8:q=f
x=9
return A.b(J.pS(r),$async$aRJ)
case 9:m=B.i2D(q)
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
return A.i($async$aRJ,w)},
fuR:function fuR(){},
hCf(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cnK(d){var x=0,w=A.j(y.n),v,u
var $async$cnK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hCf(d)
if(u==null){v=null
x=1
break}v=B.cnJ(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cnK,w)},
cnJ(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cnJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cnH.h(0,s)
if(u!=null&&!C.aH.gav(u)){v=u
x=1
break}x=3
return A.b(B.aRJ(s),$async$cnJ)
case 3:t=f
if(t!=null&&!C.aH.gav(t)){$.cnH.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cnJ,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[60],B)
B.aGc.prototype={
S(){return new B.bmQ()}}
B.bmQ.prototype={
Y(){this.a3()
this.a05()},
by(d){this.bH(d)
if(d.c!==this.a.c)this.a05()},
a05(){var x=0,w=A.j(y.v),v=this,u
var $async$a05=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cnK(v.a.c),$async$a05)
case 2:u=e
if(v.c!=null)v.m(new B.eTk(v,u))
return A.h(null,w)}})
return A.i($async$a05,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gav(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tE(C.A,s,C.hc,x.f,!0,v,new A.q5(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.d_.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.Y(u,v==null?C.d_:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eTk.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fuR.prototype={
$1(d){var x=y.h.a(new A.r3([],[]).oH(d.target.result,!1)),w=C.yp.q(x.objectStoreNames,"thumbs")
if(!w)C.yl.Lf(x,"thumbs")},
$S:184};(function inheritance(){var x=a.inherit
x(B.aGc,A.af)
x(B.bmQ,A.ah)
x(B.eTk,A.iG)
x(B.fuR,A.hu)})()
A.j0(b.typeUniverse,JSON.parse('{"aGc":{"af":[],"v":[]},"bmQ":{"ah":["aGc"]}}'))
var y={i:A.as("uD"),h:A.as("ro"),w:A.as("ai<F>"),A:A.as("m_"),o:A.as("dJ"),n:A.as("dJ?"),v:A.as("~")};(function staticFields(){$.fu5=A.U(A.as("m"),A.as("mi<aF>"))
$.cnH=A.U(A.as("m"),y.o)
$.aP4=null})()};
(a=>{a["KzpGmIMC7TuQfRxkzRtWGfFxG0g="]=a.current})($__dart_deferred_initializers__);