((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bAg(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tL(d)
x.toString
return x}catch(w){return v}return v},
hUs(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fcY.h(0,v)
if(x!=null)return x
w=B.bAg(v)
if(w!=null){if($.fcY.a>64)$.fcY.a8(0)
$.fcY.n(0,v,w)}return w},
aNV(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bv(u,new B.aDf(i,j,f,e,g,h,v),C.aq)
x=B.hUs(i)
if(x!=null)return A.bv(u,A.rU(C.A,v,C.fQ,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.W(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aDf:function aDf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bj_:function bj_(){this.c=this.a=this.d=null},
eDB:function eDB(d,e){this.a=d
this.b=e},
fR0(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.U(A.bd("IndexedDB not available"))
return C.y9.Lh(x,"ngmy_worksheet_thumbs_v1",new B.fdJ(),1)},
hFZ(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cp(d))
if(y.i.b(d))return new Uint8Array(A.cp(J.eW(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cp(A.BH(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cp(d))
if(typeof d=="string")try{x=C.cB.aI(d)
return x}catch(w){return v}return v},
aOy(d){return B.hZq(d)},
hZq(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aOy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aM1
x=7
return A.b(o==null?$.aM1=B.fR0():o,$async$aOy)
case 7:s=f
r=J.mv(s,"thumbs","readonly")
x=8
return A.b(C.iz.z7(J.mt(r,"thumbs"),m),$async$aOy)
case 8:q=f
x=9
return A.b(J.pi(r),$async$aOy)
case 9:m=B.hFZ(q)
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
return A.i($async$aOy,w)},
fdJ:function fdJ(){},
hfD(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b_(d,14)},
cdt(d){var x=0,w=A.j(y.n),v,u
var $async$cdt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hfD(d)
if(u==null){v=null
x=1
break}v=B.cds(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdt,w)},
cds(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cds=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cdq.h(0,s)
if(u!=null&&!C.aG.gal(u)){v=u
x=1
break}x=3
return A.b(B.aOy(s),$async$cds)
case 3:t=f
if(t!=null&&!C.aG.gal(t)){$.cdq.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cds,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aDf.prototype={
T(){return new B.bj_()}}
B.bj_.prototype={
a_(){this.a1()
this.Xv()},
br(d){this.bE(d)
if(d.c!==this.a.c)this.Xv()},
Xv(){var x=0,w=A.j(y.v),v=this,u
var $async$Xv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cdt(v.a.c),$async$Xv)
case 2:u=e
if(v.c!=null)v.m(new B.eDB(v,u))
return A.h(null,w)}})
return A.i($async$Xv,w)},
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
B.eDB.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fdJ.prototype={
$1(d){var x=y.h.a(new A.rt([],[]).ph(d.target.result,!1)),w=C.x0.t(x.objectStoreNames,"thumbs")
if(!w)C.wX.K6(x,"thumbs")},
$S:186};(function inheritance(){var x=a.inherit
x(B.aDf,A.ag)
x(B.bj_,A.ah)
x(B.eDB,A.j2)
x(B.fdJ,A.hS)})()
A.jR(b.typeUniverse,JSON.parse('{"aDf":{"ag":[],"r":[]},"bj_":{"ah":["aDf"]}}'))
var y={i:A.ax("tS"),h:A.ax("qL"),w:A.ax("ak<G>"),A:A.ax("lB"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.fcY=A.V(A.ax("n"),A.ax("lS<aC>"))
$.cdq=A.V(A.ax("n"),y.o)
$.aM1=null})()};
(a=>{a["yFh9xRmBWaCW94ww0fjb8BN3LOs="]=a.current})($__dart_deferred_initializers__);