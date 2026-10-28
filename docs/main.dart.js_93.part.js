((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bAG(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tP(d)
x.toString
return x}catch(w){return v}return v},
hX6(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.feT.h(0,v)
if(x!=null)return x
w=B.bAG(v)
if(w!=null){if($.feT.a>64)$.feT.a9(0)
$.feT.n(0,v,w)}return w},
aOa(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aDv(i,j,f,e,g,h,v),C.aq)
x=B.hX6(i)
if(x!=null)return A.bw(u,A.rZ(C.A,v,C.fU,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.W(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aDv:function aDv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjm:function bjm(){this.c=this.a=this.d=null},
eFr:function eFr(d,e){this.a=d
this.b=e},
fTp(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yj.Lq(x,"ngmy_worksheet_thumbs_v1",new B.ffE(),1)},
hIB(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cf(d))
if(y.i.b(d))return new Uint8Array(A.cf(J.eQ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cf(A.zD(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cE.aJ(d)
return x}catch(w){return v}return v},
aOO(d){return B.i14(d)},
i14(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aOO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMh
x=7
return A.b(o==null?$.aMh=B.fTp():o,$async$aOO)
case 7:s=f
r=J.mB(s,"thumbs","readonly")
x=8
return A.b(C.iD.za(J.mz(r,"thumbs"),m),$async$aOO)
case 8:q=f
x=9
return A.b(J.pl(r),$async$aOO)
case 9:m=B.hIB(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a9(l)
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
return A.i($async$aOO,w)},
ffE:function ffE(){},
hia(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b0(d,14)},
cel(d){var x=0,w=A.j(y.n),v,u
var $async$cel=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hia(d)
if(u==null){v=null
x=1
break}v=B.cek(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cel,w)},
cek(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cek=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cei.h(0,s)
if(u!=null&&!C.aG.gam(u)){v=u
x=1
break}x=3
return A.b(B.aOO(s),$async$cek)
case 3:t=f
if(t!=null&&!C.aG.gam(t)){$.cei.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cek,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aDv.prototype={
T(){return new B.bjm()}}
B.bjm.prototype={
a_(){this.a1()
this.XK()},
br(d){this.bE(d)
if(d.c!==this.a.c)this.XK()},
XK(){var x=0,w=A.j(y.v),v=this,u
var $async$XK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cel(v.a.c),$async$XK)
case 2:u=e
if(v.c!=null)v.m(new B.eFr(v,u))
return A.h(null,w)}})
return A.i($async$XK,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rZ(C.A,s,C.fU,x.f,!0,v,new A.pA(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eFr.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.ffE.prototype={
$1(d){var x=y.h.a(new A.rx([],[]).pm(d.target.result,!1)),w=C.xb.t(x.objectStoreNames,"thumbs")
if(!w)C.x7.Kf(x,"thumbs")},
$S:192};(function inheritance(){var x=a.inherit
x(B.aDv,A.ag)
x(B.bjm,A.ah)
x(B.eFr,A.j3)
x(B.ffE,A.hT)})()
A.jT(b.typeUniverse,JSON.parse('{"aDv":{"ag":[],"r":[]},"bjm":{"ah":["aDv"]}}'))
var y={i:A.ax("tW"),h:A.ax("qP"),w:A.ax("aj<H>"),A:A.ax("lE"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.feT=A.T(A.ax("n"),A.ax("lW<aC>"))
$.cei=A.T(A.ax("n"),y.o)
$.aMh=null})()};
(a=>{a["TOmZeNSQmX6UPiHf8BL+6OzHn4s="]=a.current})($__dart_deferred_initializers__);