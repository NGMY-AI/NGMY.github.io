((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
by4(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tn(d)
x.toString
return x}catch(w){return v}return v},
hHs(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f2J.h(0,v)
if(x!=null)return x
w=B.by4(v)
if(w!=null){if($.f2J.a>64)$.f2J.a8(0)
$.f2J.m(0,v,w)}return w},
aM9(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bv(u,new B.aBD(i,j,f,e,g,h,v),C.ap)
x=B.hHs(i)
if(x!=null)return A.bv(u,A.rx(C.B,v,C.fG,e,!0,f,x,!1,v,j),C.ap)
w=C.cS.j(0.15)
return A.p(v,A.V(g,h==null?C.cS:h,v,v,v,32),C.h,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBD:function aBD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgZ:function bgZ(){this.c=this.a=this.d=null},
etT:function etT(d,e){this.a=d
this.b=e},
fF5(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.P(A.b9("IndexedDB not available"))
return C.xk.Kl(x,"ngmy_worksheet_thumbs_v1",new B.f3u(),1)},
htA(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cl(d))
if(y.i.b(d))return new Uint8Array(A.cl(J.eO(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cl(A.AZ(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aF(d)
return x}catch(w){return v}return v},
aMN(d){return B.hMm(d)},
hMm(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aMN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aKk
x=7
return A.b(o==null?$.aKk=B.fF5():o,$async$aMN)
case 7:s=f
r=J.mg(s,"thumbs","readonly")
x=8
return A.b(C.ip.yw(J.me(r,"thumbs"),m),$async$aMN)
case 8:q=f
x=9
return A.b(J.oY(r),$async$aMN)
case 9:m=B.htA(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a4(l)
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
return A.i($async$aMN,w)},
f3u:function f3u(){},
h3o(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aV(d,14)},
cau(d){var x=0,w=A.j(y.n),v,u
var $async$cau=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h3o(d)
if(u==null){v=null
x=1
break}v=B.cat(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cau,w)},
cat(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cat=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.car.h(0,s)
if(u!=null&&!C.aE.gah(u)){v=u
x=1
break}x=3
return A.b(B.aMN(s),$async$cat)
case 3:t=f
if(t!=null&&!C.aE.gah(t)){$.car.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cat,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aBD.prototype={
S(){return new B.bgZ()}}
B.bgZ.prototype={
Z(){this.a0()
this.Wl()},
bo(d){this.bA(d)
if(d.c!==this.a.c)this.Wl()},
Wl(){var x=0,w=A.j(y.v),v=this,u
var $async$Wl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cau(v.a.c),$async$Wl)
case 2:u=e
if(v.c!=null)v.n(new B.etT(v,u))
return A.h(null,w)}})
return A.i($async$Wl,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aE.gah(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rx(C.B,s,C.fG,x.f,!0,v,new A.pg(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cS.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cS:v,s,s,s,32),C.h,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.etT.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f3u.prototype={
$1(d){var x=y.h.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wc.q(x.objectStoreNames,"thumbs")
if(!w)C.w8.Jc(x,"thumbs")},
$S:198};(function inheritance(){var x=a.inherit
x(B.aBD,A.ae)
x(B.bgZ,A.ag)
x(B.etT,A.jk)
x(B.f3u,A.i2)})()
A.kd(b.typeUniverse,JSON.parse('{"aBD":{"ae":[],"r":[]},"bgZ":{"ag":["aBD"]}}'))
var y={i:A.aA("tu"),h:A.aA("qp"),w:A.aA("ak<I>"),A:A.aA("lq"),o:A.aA("dz"),n:A.aA("dz?"),v:A.aA("~")};(function staticFields(){$.f2J=A.S(A.aA("n"),A.aA("lG<aB>"))
$.car=A.S(A.aA("n"),y.o)
$.aKk=null})()};
(a=>{a["mwPXDC6EpYSFQAlcC2X0rBJEhqI="]=a.current})($__dart_deferred_initializers__);