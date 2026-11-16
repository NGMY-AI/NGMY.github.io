((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFq(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uG(d)
x.toString
return x}catch(w){return v}return v},
imt(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fwC.h(0,v)
if(x!=null)return x
w=B.bFq(v)
if(w!=null){if($.fwC.a>64)$.fwC.a8(0)
$.fwC.n(0,v,w)}return w},
aRV(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aGT(i,j,f,e,g,h,v),C.aq)
x=B.imt(i)
if(x!=null)return A.bx(u,A.tM(C.A,v,C.hl,e,!0,f,x,!1,v,j),C.aq)
w=C.cB.j(0.15)
return A.r(v,A.X(g,h==null?C.cB:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGT:function aGT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnG:function bnG(){this.c=this.a=this.d=null},
eVs:function eVs(d,e){this.a=d
this.b=e},
heT(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.x0.GS(x,"ngmy_worksheet_thumbs_v1",new B.fxn(),1)},
i77(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cf(d))
if(y.i.b(d))return new Uint8Array(A.cf(J.eF(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cf(A.wT(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cM.aO(d)
return x}catch(w){return v}return v},
aSx(d){return B.irD(d)},
irD(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPQ
x=7
return A.b(o==null?$.aPQ=B.heT():o,$async$aSx)
case 7:s=f
r=J.mk(s,"thumbs","readonly")
x=8
return A.b(C.iE.xO(J.mj(r,"thumbs"),m),$async$aSx)
case 8:q=f
x=9
return A.b(J.oy(r),$async$aSx)
case 9:m=B.i77(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
$.am.$1("[worksheet-thumb idb get] "+A.w(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSx,w)},
fxn:function fxn(){},
hGh(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cp3(d){var x=0,w=A.j(y.n),v,u
var $async$cp3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hGh(d)
if(u==null){v=null
x=1
break}v=B.cp2(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cp3,w)},
cp2(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cp2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cp0.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSx(s),$async$cp2)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.cp0.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cp2,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGT.prototype={
S(){return new B.bnG()}}
B.bnG.prototype={
Y(){this.a4()
this.a0o()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0o()},
a0o(){var x=0,w=A.j(y.v),v=this,u
var $async$a0o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cp3(v.a.c),$async$a0o)
case 2:u=e
if(v.c!=null)v.m(new B.eVs(v,u))
return A.h(null,w)}})
return A.i($async$a0o,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tM(C.A,s,C.hl,x.f,!0,v,new A.qd(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cB.j(0.12)
v=t.a
u=v.r
v=v.w
return A.r(s,A.X(u,v==null?C.cB:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eVs.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fxn.prototype={
$1(d){var x=y.h.a(new A.qu([],[]).o_(d.target.result,!1)),w=C.wu.q(x.objectStoreNames,"thumbs")
if(!w)C.wr.Gj(x,"thumbs")},
$S:167};(function inheritance(){var x=a.inherit
x(B.aGT,A.af)
x(B.bnG,A.ah)
x(B.eVs,A.iO)
x(B.fxn,A.hx)})()
A.iW(b.typeUniverse,JSON.parse('{"aGT":{"af":[],"v":[]},"bnG":{"ah":["aGT"]}}'))
var y={i:A.at("uP"),h:A.at("rw"),w:A.at("ai<H>"),A:A.at("m7"),o:A.at("dJ"),n:A.at("dJ?"),v:A.at("~")};(function staticFields(){$.fwC=A.T(A.at("n"),A.at("mq<aE>"))
$.cp0=A.T(A.at("n"),y.o)
$.aPQ=null})()};
(a=>{a["SZPlEXBefQm5mp54ri2Kdng44YA="]=a.current})($__dart_deferred_initializers__);