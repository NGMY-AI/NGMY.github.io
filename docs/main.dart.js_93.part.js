((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bAH(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tO(d)
x.toString
return x}catch(w){return v}return v},
hX8(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.feV.h(0,v)
if(x!=null)return x
w=B.bAH(v)
if(w!=null){if($.feV.a>64)$.feV.a9(0)
$.feV.n(0,v,w)}return w},
aOa(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aDv(i,j,f,e,g,h,v),C.aq)
x=B.hX8(i)
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
bjn:function bjn(){this.c=this.a=this.d=null},
eFt:function eFt(d,e){this.a=d
this.b=e},
fTr(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yj.Lp(x,"ngmy_worksheet_thumbs_v1",new B.ffG(),1)},
hID(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eX(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zD(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cE.aJ(d)
return x}catch(w){return v}return v},
aOO(d){return B.i16(d)},
i16(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aOO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMh
x=7
return A.b(o==null?$.aMh=B.fTr():o,$async$aOO)
case 7:s=f
r=J.mB(s,"thumbs","readonly")
x=8
return A.b(C.iD.za(J.mz(r,"thumbs"),m),$async$aOO)
case 8:q=f
x=9
return A.b(J.pl(r),$async$aOO)
case 9:m=B.hID(q)
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
ffG:function ffG(){},
hic(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b0(d,14)},
cen(d){var x=0,w=A.j(y.n),v,u
var $async$cen=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hic(d)
if(u==null){v=null
x=1
break}v=B.cem(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cen,w)},
cem(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cem=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cek.h(0,s)
if(u!=null&&!C.aG.gam(u)){v=u
x=1
break}x=3
return A.b(B.aOO(s),$async$cem)
case 3:t=f
if(t!=null&&!C.aG.gam(t)){$.cek.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cem,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aDv.prototype={
U(){return new B.bjn()}}
B.bjn.prototype={
a_(){this.a1()
this.XK()},
br(d){this.bE(d)
if(d.c!==this.a.c)this.XK()},
XK(){var x=0,w=A.j(y.v),v=this,u
var $async$XK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cen(v.a.c),$async$XK)
case 2:u=e
if(v.c!=null)v.m(new B.eFt(v,u))
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
B.eFt.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.ffG.prototype={
$1(d){var x=y.h.a(new A.rx([],[]).pn(d.target.result,!1)),w=C.xb.t(x.objectStoreNames,"thumbs")
if(!w)C.x7.Kd(x,"thumbs")},
$S:192};(function inheritance(){var x=a.inherit
x(B.aDv,A.ag)
x(B.bjn,A.ah)
x(B.eFt,A.j3)
x(B.ffG,A.hT)})()
A.jT(b.typeUniverse,JSON.parse('{"aDv":{"ag":[],"r":[]},"bjn":{"ah":["aDv"]}}'))
var y={i:A.ax("tV"),h:A.ax("qP"),w:A.ax("aj<H>"),A:A.ax("lE"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.feV=A.T(A.ax("n"),A.ax("lW<aC>"))
$.cek=A.T(A.ax("n"),y.o)
$.aMh=null})()};
(a=>{a["RLFe+CvEYQABNx0dBhjBm4lSDYY="]=a.current})($__dart_deferred_initializers__);