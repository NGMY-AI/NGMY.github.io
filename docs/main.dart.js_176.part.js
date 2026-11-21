((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bGT(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.Y(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.Y(d,"data:image"))try{x=A.uM(d)
x.toString
return x}catch(w){return v}return v},
iu8(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fCb.h(0,v)
if(x!=null)return x
w=B.bGT(v)
if(w!=null){if($.fCb.a>64)$.fCb.a6(0)
$.fCb.n(0,v,w)}return w},
aST(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.Y(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aHJ(i,j,f,e,g,h,v),C.aq)
x=B.iu8(i)
if(x!=null)return A.bw(u,A.tS(C.z,v,C.hd,e,!0,f,x,!1,v,j),C.aq)
w=C.cB.j(0.15)
return A.p(v,A.W(g,h==null?C.cB:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.m),v,f,v,v,v,v,v,j)},
aHJ:function aHJ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
boT:function boT(){this.c=this.a=this.d=null},
f_J:function f_J(d,e){this.a=d
this.b=e},
hlM(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bb("IndexedDB not available"))
return C.xt.H8(x,"ngmy_worksheet_thumbs_v1",new B.fCZ(),1)},
if_(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ca(d))
if(y.i.b(d))return new Uint8Array(A.ca(J.ew(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ca(A.vV(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ca(d))
if(typeof d=="string")try{x=C.cD.aK(d)
return x}catch(w){return v}return v},
aTx(d){return B.izu(d)},
izu(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aTx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aQK
x=7
return A.b(o==null?$.aQK=B.hlM():o,$async$aTx)
case 7:s=f
r=J.my(s,"thumbs","readonly")
x=8
return A.b(C.iO.xU(J.mx(r,"thumbs"),m),$async$aTx)
case 8:q=f
x=9
return A.b(J.oK(r),$async$aTx)
case 9:m=B.if_(q)
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
return A.i($async$aTx,w)},
fCZ:function fCZ(){},
hNN(d){if(!(d!=null&&C.a.Y(d,"ngmy:ws-thumb:")))return null
return C.a.aY(d,14)},
cr_(d){var x=0,w=A.j(y.n),v,u
var $async$cr_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hNN(d)
if(u==null){v=null
x=1
break}v=B.cqZ(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cr_,w)},
cqZ(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cqZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cqX.h(0,s)
if(u!=null&&!C.aI.gar(u)){v=u
x=1
break}x=3
return A.b(B.aTx(s),$async$cqZ)
case 3:t=f
if(t!=null&&!C.aI.gar(t)){$.cqX.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cqZ,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[77],B)
B.aHJ.prototype={
S(){return new B.boT()}}
B.boT.prototype={
a_(){this.a3()
this.a0Y()},
bx(d){this.bJ(d)
if(d.c!==this.a.c)this.a0Y()},
a0Y(){var x=0,w=A.j(y.v),v=this,u
var $async$a0Y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cr_(v.a.c),$async$a0Y)
case 2:u=e
if(v.c!=null)v.l(new B.f_J(v,u))
return A.h(null,w)}})
return A.i($async$a0Y,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gar(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tS(C.z,s,C.hd,x.f,!0,v,new A.p_(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cB.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cB:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.f_J.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fCZ.prototype={
$1(d){var x=y.h.a(new A.qH([],[]).o6(d.target.result,!1)),w=C.wR.q(x.objectStoreNames,"thumbs")
if(!w)C.wO.Gy(x,"thumbs")},
$S:170};(function inheritance(){var x=a.inherit
x(B.aHJ,A.af)
x(B.boT,A.ah)
x(B.f_J,A.hQ)
x(B.fCZ,A.fN)})()
A.i_(b.typeUniverse,JSON.parse('{"aHJ":{"af":[],"w":[]},"boT":{"ah":["aHJ"]}}'))
var y={i:A.as("mA"),h:A.as("qU"),w:A.as("ai<F>"),A:A.as("lX"),o:A.as("dz"),n:A.as("dz?"),v:A.as("~")};(function staticFields(){$.fCb=A.S(A.as("m"),A.as("mD<aE>"))
$.cqX=A.S(A.as("m"),y.o)
$.aQK=null})()};
(a=>{a["pPlWXA9RU3EQ6ARJTufl1MFz09k="]=a.current})($__dart_deferred_initializers__);