((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
byy(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.ts(d)
x.toString
return x}catch(w){return v}return v},
hJJ(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f4h.h(0,v)
if(x!=null)return x
w=B.byy(v)
if(w!=null){if($.f4h.a>64)$.f4h.a7(0)
$.f4h.m(0,v,w)}return w},
aMw(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aBV(i,j,f,e,g,h,v),C.ao)
x=B.hJJ(i)
if(x!=null)return A.bu(u,A.rA(C.A,v,C.fM,e,!0,f,x,!1,v,j),C.ao)
w=C.cW.j(0.15)
return A.p(v,A.V(g,h==null?C.cW:h,v,v,v,32),C.h,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBV:function aBV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bho:function bho(){this.c=this.a=this.d=null},
evh:function evh(d,e){this.a=d
this.b=e},
fGR(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.R(A.ba("IndexedDB not available"))
return C.xu.Ks(x,"ngmy_worksheet_thumbs_v1",new B.f52(),1)},
hvu(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cm(d))
if(y.i.b(d))return new Uint8Array(A.cm(J.eO(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cm(A.Ba(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cm(d))
if(typeof d=="string")try{x=C.cw.aG(d)
return x}catch(w){return v}return v},
aN9(d){return B.hOG(d)},
hOG(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aN9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aKG
x=7
return A.b(o==null?$.aKG=B.fGR():o,$async$aN9)
case 7:s=f
r=J.mn(s,"thumbs","readonly")
x=8
return A.b(C.iy.yz(J.ml(r,"thumbs"),m),$async$aN9)
case 8:q=f
x=9
return A.b(J.p0(r),$async$aN9)
case 9:m=B.hvu(q)
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
return A.i($async$aN9,w)},
f52:function f52(){},
h5d(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aY(d,14)},
cbe(d){var x=0,w=A.j(y.n),v,u
var $async$cbe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h5d(d)
if(u==null){v=null
x=1
break}v=B.cbd(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbe,w)},
cbd(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cbd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cbb.h(0,s)
if(u!=null&&!C.aG.gai(u)){v=u
x=1
break}x=3
return A.b(B.aN9(s),$async$cbd)
case 3:t=f
if(t!=null&&!C.aG.gai(t)){$.cbb.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbd,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[53],B)
B.aBV.prototype={
S(){return new B.bho()}}
B.bho.prototype={
Z(){this.a0()
this.Wv()},
bq(d){this.bC(d)
if(d.c!==this.a.c)this.Wv()},
Wv(){var x=0,w=A.j(y.v),v=this,u
var $async$Wv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cbe(v.a.c),$async$Wv)
case 2:u=e
if(v.c!=null)v.n(new B.evh(v,u))
return A.h(null,w)}})
return A.i($async$Wv,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gai(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rA(C.A,s,C.fM,x.f,!0,v,new A.pj(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cW.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cW:v,s,s,s,32),C.h,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.evh.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f52.prototype={
$1(d){var x=y.h.a(new A.r9([],[]).oS(d.target.result,!1)),w=C.wm.t(x.objectStoreNames,"thumbs")
if(!w)C.wi.Ji(x,"thumbs")},
$S:198};(function inheritance(){var x=a.inherit
x(B.aBV,A.af)
x(B.bho,A.ag)
x(B.evh,A.jm)
x(B.f52,A.i3)})()
A.kh(b.typeUniverse,JSON.parse('{"aBV":{"af":[],"r":[]},"bho":{"ag":["aBV"]}}'))
var y={i:A.az("tB"),h:A.az("qr"),w:A.az("ak<I>"),A:A.az("lu"),o:A.az("dz"),n:A.az("dz?"),v:A.az("~")};(function staticFields(){$.f4h=A.T(A.az("n"),A.az("lL<aB>"))
$.cbb=A.T(A.az("n"),y.o)
$.aKG=null})()};
(a=>{a["YukEt10Ga7mqn/rdC4t4fjUn+YA="]=a.current})($__dart_deferred_initializers__);