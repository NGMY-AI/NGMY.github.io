((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
byq(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tq(d)
x.toString
return x}catch(w){return v}return v},
hJj(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f40.h(0,v)
if(x!=null)return x
w=B.byq(v)
if(w!=null){if($.f40.a>64)$.f40.a7(0)
$.f40.m(0,v,w)}return w},
aMs(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aBS(i,j,f,e,g,h,v),C.ao)
x=B.hJj(i)
if(x!=null)return A.bu(u,A.rz(C.A,v,C.fL,e,!0,f,x,!1,v,j),C.ao)
w=C.cV.j(0.15)
return A.p(v,A.V(g,h==null?C.cV:h,v,v,v,32),C.h,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBS:function aBS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bhh:function bhh(){this.c=this.a=this.d=null},
ev0:function ev0(d,e){this.a=d
this.b=e},
fGy(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.R(A.ba("IndexedDB not available"))
return C.xt.Ko(x,"ngmy_worksheet_thumbs_v1",new B.f4M(),1)},
hvb(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cm(d))
if(y.i.b(d))return new Uint8Array(A.cm(J.eO(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cm(A.B9(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cm(d))
if(typeof d=="string")try{x=C.cw.aG(d)
return x}catch(w){return v}return v},
aN5(d){return B.hOg(d)},
hOg(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aN5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aKC
x=7
return A.b(o==null?$.aKC=B.fGy():o,$async$aN5)
case 7:s=f
r=J.mk(s,"thumbs","readonly")
x=8
return A.b(C.iz.yz(J.mi(r,"thumbs"),m),$async$aN5)
case 8:q=f
x=9
return A.b(J.p0(r),$async$aN5)
case 9:m=B.hvb(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a6(l)
$.al.$1("[worksheet-thumb idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aN5,w)},
f4M:function f4M(){},
h4V(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aX(d,14)},
cb6(d){var x=0,w=A.j(y.n),v,u
var $async$cb6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h4V(d)
if(u==null){v=null
x=1
break}v=B.cb5(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cb6,w)},
cb5(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cb5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cb3.h(0,s)
if(u!=null&&!C.aG.gai(u)){v=u
x=1
break}x=3
return A.b(B.aN5(s),$async$cb5)
case 3:t=f
if(t!=null&&!C.aG.gai(t)){$.cb3.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cb5,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aBS.prototype={
S(){return new B.bhh()}}
B.bhh.prototype={
Z(){this.a0()
this.Ws()},
bp(d){this.bC(d)
if(d.c!==this.a.c)this.Ws()},
Ws(){var x=0,w=A.j(y.v),v=this,u
var $async$Ws=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cb6(v.a.c),$async$Ws)
case 2:u=e
if(v.c!=null)v.n(new B.ev0(v,u))
return A.h(null,w)}})
return A.i($async$Ws,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gai(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rz(C.A,s,C.fL,x.f,!0,v,new A.pj(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cV.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cV:v,s,s,s,32),C.h,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.ev0.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f4M.prototype={
$1(d){var x=y.h.a(new A.r8([],[]).oS(d.target.result,!1)),w=C.wm.t(x.objectStoreNames,"thumbs")
if(!w)C.wi.Jf(x,"thumbs")},
$S:181};(function inheritance(){var x=a.inherit
x(B.aBS,A.af)
x(B.bhh,A.ag)
x(B.ev0,A.jl)
x(B.f4M,A.i3)})()
A.kf(b.typeUniverse,JSON.parse('{"aBS":{"af":[],"r":[]},"bhh":{"ag":["aBS"]}}'))
var y={i:A.az("ty"),h:A.az("qr"),w:A.az("ak<I>"),A:A.az("lu"),o:A.az("dz"),n:A.az("dz?"),v:A.az("~")};(function staticFields(){$.f40=A.T(A.az("n"),A.az("lK<aB>"))
$.cb3=A.T(A.az("n"),y.o)
$.aKC=null})()};
(a=>{a["RYnokrRlqr6lzR/r7I+owxquzPg="]=a.current})($__dart_deferred_initializers__);