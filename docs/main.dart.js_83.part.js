((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
byK(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tw(d)
x.toString
return x}catch(w){return v}return v},
hKJ(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f50.h(0,v)
if(x!=null)return x
w=B.byK(v)
if(w!=null){if($.f50.a>64)$.f50.a7(0)
$.f50.n(0,v,w)}return w},
aMF(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bt(u,new B.aC2(i,j,f,e,g,h,v),C.ap)
x=B.hKJ(i)
if(x!=null)return A.bt(u,A.rF(C.A,v,C.fN,e,!0,f,x,!1,v,j),C.ap)
w=C.cU.j(0.15)
return A.p(v,A.W(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aC2:function aC2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bhx:function bhx(){this.c=this.a=this.d=null},
ew0:function ew0(d,e){this.a=d
this.b=e},
fHM(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.R(A.bb("IndexedDB not available"))
return C.xy.Ks(x,"ngmy_worksheet_thumbs_v1",new B.f5M(),1)},
hwq(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cn(d))
if(y.i.b(d))return new Uint8Array(A.cn(J.eQ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cn(A.Be(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cn(d))
if(typeof d=="string")try{x=C.cy.aG(d)
return x}catch(w){return v}return v},
aNi(d){return B.hPH(d)},
hPH(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aNi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aKN
x=7
return A.b(o==null?$.aKN=B.fHM():o,$async$aNi)
case 7:s=f
r=J.mo(s,"thumbs","readonly")
x=8
return A.b(C.iy.yz(J.mm(r,"thumbs"),m),$async$aNi)
case 8:q=f
x=9
return A.b(J.p5(r),$async$aNi)
case 9:m=B.hwq(q)
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
return A.i($async$aNi,w)},
f5M:function f5M(){},
h6a(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aY(d,14)},
cbD(d){var x=0,w=A.j(y.n),v,u
var $async$cbD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h6a(d)
if(u==null){v=null
x=1
break}v=B.cbC(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbD,w)},
cbC(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cbC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cbA.h(0,s)
if(u!=null&&!C.aG.gai(u)){v=u
x=1
break}x=3
return A.b(B.aNi(s),$async$cbC)
case 3:t=f
if(t!=null&&!C.aG.gai(t)){$.cbA.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbC,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[53],B)
B.aC2.prototype={
S(){return new B.bhx()}}
B.bhx.prototype={
Z(){this.a0()
this.Wx()},
bq(d){this.bD(d)
if(d.c!==this.a.c)this.Wx()},
Wx(){var x=0,w=A.j(y.v),v=this,u
var $async$Wx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cbD(v.a.c),$async$Wx)
case 2:u=e
if(v.c!=null)v.m(new B.ew0(v,u))
return A.h(null,w)}})
return A.i($async$Wx,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gai(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rF(C.A,s,C.fN,x.f,!0,v,new A.pl(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.ew0.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f5M.prototype={
$1(d){var x=y.h.a(new A.re([],[]).oT(d.target.result,!1)),w=C.wr.t(x.objectStoreNames,"thumbs")
if(!w)C.wn.Ji(x,"thumbs")},
$S:189};(function inheritance(){var x=a.inherit
x(B.aC2,A.af)
x(B.bhx,A.ag)
x(B.ew0,A.jm)
x(B.f5M,A.i4)})()
A.kg(b.typeUniverse,JSON.parse('{"aC2":{"af":[],"r":[]},"bhx":{"ag":["aC2"]}}'))
var y={i:A.az("tD"),h:A.az("qx"),w:A.az("ak<I>"),A:A.az("lu"),o:A.az("dA"),n:A.az("dA?"),v:A.az("~")};(function staticFields(){$.f50=A.T(A.az("n"),A.az("lM<aB>"))
$.cbA=A.T(A.az("n"),y.o)
$.aKN=null})()};
(a=>{a["8RuX//VxiGsKyBC0dNGAATUa9/k="]=a.current})($__dart_deferred_initializers__);