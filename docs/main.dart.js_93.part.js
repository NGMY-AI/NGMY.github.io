((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bAS(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tS(d)
x.toString
return x}catch(w){return v}return v},
hXV(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.ffD.h(0,v)
if(x!=null)return x
w=B.bAS(v)
if(w!=null){if($.ffD.a>64)$.ffD.a9(0)
$.ffD.n(0,v,w)}return w},
aOh(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aDA(i,j,f,e,g,h,v),C.aq)
x=B.hXV(i)
if(x!=null)return A.bw(u,A.t2(C.A,v,C.fV,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.X(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aDA:function aDA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjx:function bjx(){this.c=this.a=this.d=null},
eG6:function eG6(d,e){this.a=d
this.b=e},
fUf(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.ym.Lv(x,"ngmy_worksheet_thumbs_v1",new B.fgo(),1)},
hJo(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eY(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zG(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cE.aJ(d)
return x}catch(w){return v}return v},
aOW(d){return B.i1T(d)},
i1T(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aOW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMn
x=7
return A.b(o==null?$.aMn=B.fUf():o,$async$aOW)
case 7:s=f
r=J.mD(s,"thumbs","readonly")
x=8
return A.b(C.iD.zd(J.mB(r,"thumbs"),m),$async$aOW)
case 8:q=f
x=9
return A.b(J.po(r),$async$aOW)
case 9:m=B.hJo(q)
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
return A.i($async$aOW,w)},
fgo:function fgo(){},
hiZ(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b0(d,14)},
cev(d){var x=0,w=A.j(y.n),v,u
var $async$cev=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hiZ(d)
if(u==null){v=null
x=1
break}v=B.ceu(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cev,w)},
ceu(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$ceu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.ces.h(0,s)
if(u!=null&&!C.aG.gam(u)){v=u
x=1
break}x=3
return A.b(B.aOW(s),$async$ceu)
case 3:t=f
if(t!=null&&!C.aG.gam(t)){$.ces.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceu,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aDA.prototype={
U(){return new B.bjx()}}
B.bjx.prototype={
a_(){this.a1()
this.XO()},
br(d){this.bF(d)
if(d.c!==this.a.c)this.XO()},
XO(){var x=0,w=A.j(y.v),v=this,u
var $async$XO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cev(v.a.c),$async$XO)
case 2:u=e
if(v.c!=null)v.m(new B.eG6(v,u))
return A.h(null,w)}})
return A.i($async$XO,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.t2(C.A,s,C.fV,x.f,!0,v,new A.pD(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eG6.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fgo.prototype={
$1(d){var x=y.h.a(new A.rC([],[]).pq(d.target.result,!1)),w=C.xe.t(x.objectStoreNames,"thumbs")
if(!w)C.xa.Ki(x,"thumbs")},
$S:182};(function inheritance(){var x=a.inherit
x(B.aDA,A.ag)
x(B.bjx,A.ah)
x(B.eG6,A.j4)
x(B.fgo,A.hT)})()
A.jU(b.typeUniverse,JSON.parse('{"aDA":{"ag":[],"r":[]},"bjx":{"ah":["aDA"]}}'))
var y={i:A.ax("tY"),h:A.ax("qU"),w:A.ax("ai<H>"),A:A.ax("lG"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.ffD=A.T(A.ax("n"),A.ax("lY<aC>"))
$.ces=A.T(A.ax("n"),y.o)
$.aMn=null})()};
(a=>{a["erKaRj34o7tX09+F6QNcrqLKjC4="]=a.current})($__dart_deferred_initializers__);