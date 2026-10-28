((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bA9(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tL(d)
x.toString
return x}catch(w){return v}return v},
hTw(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fc7.h(0,v)
if(x!=null)return x
w=B.bA9(v)
if(w!=null){if($.fc7.a>64)$.fc7.a8(0)
$.fc7.n(0,v,w)}return w},
aNS(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bv(u,new B.aDb(i,j,f,e,g,h,v),C.aq)
x=B.hTw(i)
if(x!=null)return A.bv(u,A.rU(C.A,v,C.fQ,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.W(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aDb:function aDb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
biT:function biT(){this.c=this.a=this.d=null},
eCK:function eCK(d,e){this.a=d
this.b=e},
fQ0(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.U(A.bd("IndexedDB not available"))
return C.y8.Le(x,"ngmy_worksheet_thumbs_v1",new B.fcT(),1)},
hF3(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cp(d))
if(y.i.b(d))return new Uint8Array(A.cp(J.eV(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cp(A.BI(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cp(d))
if(typeof d=="string")try{x=C.cB.aI(d)
return x}catch(w){return v}return v},
aOv(d){return B.hYu(d)},
hYu(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aOv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aLZ
x=7
return A.b(o==null?$.aLZ=B.fQ0():o,$async$aOv)
case 7:s=f
r=J.mw(s,"thumbs","readonly")
x=8
return A.b(C.iz.z2(J.mu(r,"thumbs"),m),$async$aOv)
case 8:q=f
x=9
return A.b(J.pi(r),$async$aOv)
case 9:m=B.hF3(q)
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
return A.i($async$aOv,w)},
fcT:function fcT(){},
heI(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b_(d,14)},
cdl(d){var x=0,w=A.j(y.n),v,u
var $async$cdl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.heI(d)
if(u==null){v=null
x=1
break}v=B.cdk(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdl,w)},
cdk(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cdk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cdi.h(0,s)
if(u!=null&&!C.aG.gal(u)){v=u
x=1
break}x=3
return A.b(B.aOv(s),$async$cdk)
case 3:t=f
if(t!=null&&!C.aG.gal(t)){$.cdi.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdk,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aDb.prototype={
T(){return new B.biT()}}
B.biT.prototype={
a_(){this.a1()
this.Xp()},
br(d){this.bE(d)
if(d.c!==this.a.c)this.Xp()},
Xp(){var x=0,w=A.j(y.v),v=this,u
var $async$Xp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cdl(v.a.c),$async$Xp)
case 2:u=e
if(v.c!=null)v.m(new B.eCK(v,u))
return A.h(null,w)}})
return A.i($async$Xp,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gal(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rU(C.A,s,C.fQ,x.f,!0,v,new A.px(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eCK.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fcT.prototype={
$1(d){var x=y.h.a(new A.rt([],[]).pd(d.target.result,!1)),w=C.wZ.t(x.objectStoreNames,"thumbs")
if(!w)C.wV.K2(x,"thumbs")},
$S:178};(function inheritance(){var x=a.inherit
x(B.aDb,A.ag)
x(B.biT,A.ah)
x(B.eCK,A.j2)
x(B.fcT,A.hS)})()
A.jR(b.typeUniverse,JSON.parse('{"aDb":{"ag":[],"r":[]},"biT":{"ah":["aDb"]}}'))
var y={i:A.ax("tS"),h:A.ax("qL"),w:A.ax("ak<G>"),A:A.ax("lB"),o:A.ax("dC"),n:A.ax("dC?"),v:A.ax("~")};(function staticFields(){$.fc7=A.V(A.ax("n"),A.ax("lT<aC>"))
$.cdi=A.V(A.ax("n"),y.o)
$.aLZ=null})()};
(a=>{a["0LaichO8wbfBTqi8uH8byL8X1Rs="]=a.current})($__dart_deferred_initializers__);