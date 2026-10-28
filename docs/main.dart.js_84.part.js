((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bzV(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tH(d)
x.toString
return x}catch(w){return v}return v},
hRR(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.faI.h(0,v)
if(x!=null)return x
w=B.bzV(v)
if(w!=null){if($.faI.a>64)$.faI.a8(0)
$.faI.n(0,v,w)}return w},
aNI(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bv(u,new B.aD1(i,j,f,e,g,h,v),C.ap)
x=B.hRR(i)
if(x!=null)return A.bv(u,A.rQ(C.A,v,C.fQ,e,!0,f,x,!1,v,j),C.ap)
w=C.cU.j(0.15)
return A.p(v,A.V(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aD1:function aD1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
biE:function biE(){this.c=this.a=this.d=null},
eBi:function eBi(d,e){this.a=d
this.b=e},
fOt(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.S(A.bd("IndexedDB not available"))
return C.y1.KX(x,"ngmy_worksheet_thumbs_v1",new B.fbt(),1)},
hDr(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cp(d))
if(y.i.b(d))return new Uint8Array(A.cp(J.eU(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cp(A.Bz(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cp(d))
if(typeof d=="string")try{x=C.cB.aI(d)
return x}catch(w){return v}return v},
aOl(d){return B.hWP(d)},
hWP(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aOl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aLP
x=7
return A.b(o==null?$.aLP=B.fOt():o,$async$aOl)
case 7:s=f
r=J.mv(s,"thumbs","readonly")
x=8
return A.b(C.iz.yV(J.mt(r,"thumbs"),m),$async$aOl)
case 8:q=f
x=9
return A.b(J.pe(r),$async$aOl)
case 9:m=B.hDr(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a8(l)
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
return A.i($async$aOl,w)},
fbt:function fbt(){},
hd5(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b_(d,14)},
cd9(d){var x=0,w=A.j(y.n),v,u
var $async$cd9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hd5(d)
if(u==null){v=null
x=1
break}v=B.cd8(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cd9,w)},
cd8(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cd8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cd6.h(0,s)
if(u!=null&&!C.aG.gal(u)){v=u
x=1
break}x=3
return A.b(B.aOl(s),$async$cd8)
case 3:t=f
if(t!=null&&!C.aG.gal(t)){$.cd6.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cd8,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aD1.prototype={
T(){return new B.biE()}}
B.biE.prototype={
a_(){this.a1()
this.X6()},
br(d){this.bE(d)
if(d.c!==this.a.c)this.X6()},
X6(){var x=0,w=A.j(y.v),v=this,u
var $async$X6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cd9(v.a.c),$async$X6)
case 2:u=e
if(v.c!=null)v.m(new B.eBi(v,u))
return A.h(null,w)}})
return A.i($async$X6,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gal(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rQ(C.A,s,C.fQ,x.f,!0,v,new A.pt(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eBi.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fbt.prototype={
$1(d){var x=y.h.a(new A.ro([],[]).pb(d.target.result,!1)),w=C.wS.t(x.objectStoreNames,"thumbs")
if(!w)C.wO.JN(x,"thumbs")},
$S:184};(function inheritance(){var x=a.inherit
x(B.aD1,A.ag)
x(B.biE,A.ah)
x(B.eBi,A.jq)
x(B.fbt,A.i7)})()
A.kj(b.typeUniverse,JSON.parse('{"aD1":{"ag":[],"r":[]},"biE":{"ah":["aD1"]}}'))
var y={i:A.aA("tO"),h:A.aA("qG"),w:A.aA("ak<H>"),A:A.aA("ly"),o:A.aA("dB"),n:A.aA("dB?"),v:A.aA("~")};(function staticFields(){$.faI=A.U(A.aA("n"),A.aA("lQ<aC>"))
$.cd6=A.U(A.aA("n"),y.o)
$.aLP=null})()};
(a=>{a["8UuhTxshcjhEZKA+NDRrQ8Ym+4Q="]=a.current})($__dart_deferred_initializers__);