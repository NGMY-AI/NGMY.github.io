((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
byE(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tv(d)
x.toString
return x}catch(w){return v}return v},
hK6(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f4E.h(0,v)
if(x!=null)return x
w=B.byE(v)
if(w!=null){if($.f4E.a>64)$.f4E.a7(0)
$.f4E.m(0,v,w)}return w},
aMB(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bt(u,new B.aBZ(i,j,f,e,g,h,v),C.ap)
x=B.hK6(i)
if(x!=null)return A.bt(u,A.rE(C.A,v,C.fM,e,!0,f,x,!1,v,j),C.ap)
w=C.cU.j(0.15)
return A.p(v,A.W(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBZ:function aBZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bht:function bht(){this.c=this.a=this.d=null},
evF:function evF(d,e){this.a=d
this.b=e},
fHb(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.R(A.ba("IndexedDB not available"))
return C.xz.Kr(x,"ngmy_worksheet_thumbs_v1",new B.f5p(),1)},
hvO(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cm(d))
if(y.i.b(d))return new Uint8Array(A.cm(J.eQ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cm(A.Bd(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cm(d))
if(typeof d=="string")try{x=C.cy.aG(d)
return x}catch(w){return v}return v},
aNe(d){return B.hP3(d)},
hP3(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aNe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aKJ
x=7
return A.b(o==null?$.aKJ=B.fHb():o,$async$aNe)
case 7:s=f
r=J.mn(s,"thumbs","readonly")
x=8
return A.b(C.iz.yy(J.ml(r,"thumbs"),m),$async$aNe)
case 8:q=f
x=9
return A.b(J.p1(r),$async$aNe)
case 9:m=B.hvO(q)
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
return A.i($async$aNe,w)},
f5p:function f5p(){},
h5z(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aY(d,14)},
cbw(d){var x=0,w=A.j(y.n),v,u
var $async$cbw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h5z(d)
if(u==null){v=null
x=1
break}v=B.cbv(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbw,w)},
cbv(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cbv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cbt.h(0,s)
if(u!=null&&!C.aG.gai(u)){v=u
x=1
break}x=3
return A.b(B.aNe(s),$async$cbv)
case 3:t=f
if(t!=null&&!C.aG.gai(t)){$.cbt.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbv,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[53],B)
B.aBZ.prototype={
S(){return new B.bht()}}
B.bht.prototype={
Z(){this.a0()
this.Ww()},
bq(d){this.bD(d)
if(d.c!==this.a.c)this.Ww()},
Ww(){var x=0,w=A.j(y.v),v=this,u
var $async$Ww=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cbw(v.a.c),$async$Ww)
case 2:u=e
if(v.c!=null)v.n(new B.evF(v,u))
return A.h(null,w)}})
return A.i($async$Ww,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gai(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rE(C.A,s,C.fM,x.f,!0,v,new A.pk(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.evF.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f5p.prototype={
$1(d){var x=y.h.a(new A.rb([],[]).oS(d.target.result,!1)),w=C.wr.t(x.objectStoreNames,"thumbs")
if(!w)C.wn.Jh(x,"thumbs")},
$S:198};(function inheritance(){var x=a.inherit
x(B.aBZ,A.af)
x(B.bht,A.ag)
x(B.evF,A.jl)
x(B.f5p,A.i4)})()
A.kg(b.typeUniverse,JSON.parse('{"aBZ":{"af":[],"r":[]},"bht":{"ag":["aBZ"]}}'))
var y={i:A.az("tC"),h:A.az("qu"),w:A.az("ak<I>"),A:A.az("lt"),o:A.az("dz"),n:A.az("dz?"),v:A.az("~")};(function staticFields(){$.f4E=A.T(A.az("n"),A.az("lK<aB>"))
$.cbt=A.T(A.az("n"),y.o)
$.aKJ=null})()};
(a=>{a["3EOQZhx8mo3ABh+B9cVvSYSr5Qg="]=a.current})($__dart_deferred_initializers__);