((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bxS(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tn(d)
x.toString
return x}catch(w){return v}return v},
hGM(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f2b.h(0,v)
if(x!=null)return x
w=B.bxS(v)
if(w!=null){if($.f2b.a>64)$.f2b.a8(0)
$.f2b.m(0,v,w)}return w},
aM1(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aBw(i,j,f,e,g,h,v),C.ap)
x=B.hGM(i)
if(x!=null)return A.bu(u,A.rx(C.B,v,C.fG,e,!0,f,x,!1,v,j),C.ap)
w=C.cS.j(0.15)
return A.p(v,A.V(g,h==null?C.cS:h,v,v,v,32),C.h,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBw:function aBw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgO:function bgO(){this.c=this.a=this.d=null},
etl:function etl(d,e){this.a=d
this.b=e},
fEx(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.b9("IndexedDB not available"))
return C.xl.Kl(x,"ngmy_worksheet_thumbs_v1",new B.f2X(),1)},
hsV(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cl(d))
if(y.i.b(d))return new Uint8Array(A.cl(J.eP(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cl(A.AY(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aE(d)
return x}catch(w){return v}return v},
aME(d){return B.hLG(d)},
hLG(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aME=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aKc
x=7
return A.b(o==null?$.aKc=B.fEx():o,$async$aME)
case 7:s=f
r=J.mg(s,"thumbs","readonly")
x=8
return A.b(C.im.yu(J.me(r,"thumbs"),m),$async$aME)
case 8:q=f
x=9
return A.b(J.oZ(r),$async$aME)
case 9:m=B.hsV(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a4(l)
$.ak.$1("[worksheet-thumb idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aME,w)},
f2X:function f2X(){},
h2I(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aU(d,14)},
cab(d){var x=0,w=A.j(y.n),v,u
var $async$cab=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h2I(d)
if(u==null){v=null
x=1
break}v=B.caa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cab,w)},
caa(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$caa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.ca8.h(0,s)
if(u!=null&&!C.aE.gah(u)){v=u
x=1
break}x=3
return A.b(B.aME(s),$async$caa)
case 3:t=f
if(t!=null&&!C.aE.gah(t)){$.ca8.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$caa,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aBw.prototype={
S(){return new B.bgO()}}
B.bgO.prototype={
Z(){this.a0()
this.Wj()},
bo(d){this.bA(d)
if(d.c!==this.a.c)this.Wj()},
Wj(){var x=0,w=A.j(y.v),v=this,u
var $async$Wj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cab(v.a.c),$async$Wj)
case 2:u=e
if(v.c!=null)v.n(new B.etl(v,u))
return A.h(null,w)}})
return A.i($async$Wj,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aE.gah(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rx(C.B,s,C.fG,x.f,!0,v,new A.ph(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cS.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cS:v,s,s,s,32),C.h,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.etl.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f2X.prototype={
$1(d){var x=y.h.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wc.q(x.objectStoreNames,"thumbs")
if(!w)C.w8.Jc(x,"thumbs")},
$S:196};(function inheritance(){var x=a.inherit
x(B.aBw,A.ae)
x(B.bgO,A.ag)
x(B.etl,A.jk)
x(B.f2X,A.i1)})()
A.kd(b.typeUniverse,JSON.parse('{"aBw":{"ae":[],"r":[]},"bgO":{"ag":["aBw"]}}'))
var y={i:A.aA("tu"),h:A.aA("qq"),w:A.aA("al<H>"),A:A.aA("lq"),o:A.aA("dz"),n:A.aA("dz?"),v:A.aA("~")};(function staticFields(){$.f2b=A.R(A.aA("n"),A.aA("lG<aC>"))
$.ca8=A.R(A.aA("n"),y.o)
$.aKc=null})()};
(a=>{a["Eaxuvf5WD11XwDtate385XpRl2s="]=a.current})($__dart_deferred_initializers__);