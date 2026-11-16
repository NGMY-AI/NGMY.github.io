((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFp(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uH(d)
x.toString
return x}catch(w){return v}return v},
imn(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fwx.h(0,v)
if(x!=null)return x
w=B.bFp(v)
if(w!=null){if($.fwx.a>64)$.fwx.a8(0)
$.fwx.n(0,v,w)}return w},
aRT(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aGR(i,j,f,e,g,h,v),C.aq)
x=B.imn(i)
if(x!=null)return A.bx(u,A.tN(C.A,v,C.hk,e,!0,f,x,!1,v,j),C.aq)
w=C.cB.j(0.15)
return A.r(v,A.X(g,h==null?C.cB:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGR:function aGR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnF:function bnF(){this.c=this.a=this.d=null},
eVn:function eVn(d,e){this.a=d
this.b=e},
heO(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.x0.GR(x,"ngmy_worksheet_thumbs_v1",new B.fxi(),1)},
i71(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cf(d))
if(y.i.b(d))return new Uint8Array(A.cf(J.eF(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cf(A.wU(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cM.aO(d)
return x}catch(w){return v}return v},
aSv(d){return B.irx(d)},
irx(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPO
x=7
return A.b(o==null?$.aPO=B.heO():o,$async$aSv)
case 7:s=f
r=J.mk(s,"thumbs","readonly")
x=8
return A.b(C.iE.xO(J.mj(r,"thumbs"),m),$async$aSv)
case 8:q=f
x=9
return A.b(J.oy(r),$async$aSv)
case 9:m=B.i71(q)
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
return A.i($async$aSv,w)},
fxi:function fxi(){},
hGb(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cp1(d){var x=0,w=A.j(y.n),v,u
var $async$cp1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hGb(d)
if(u==null){v=null
x=1
break}v=B.cp0(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cp1,w)},
cp0(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cp0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.coZ.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSv(s),$async$cp0)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.coZ.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cp0,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGR.prototype={
S(){return new B.bnF()}}
B.bnF.prototype={
Y(){this.a4()
this.a0l()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0l()},
a0l(){var x=0,w=A.j(y.v),v=this,u
var $async$a0l=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cp1(v.a.c),$async$a0l)
case 2:u=e
if(v.c!=null)v.m(new B.eVn(v,u))
return A.h(null,w)}})
return A.i($async$a0l,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tN(C.A,s,C.hk,x.f,!0,v,new A.qe(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cB.j(0.12)
v=t.a
u=v.r
v=v.w
return A.r(s,A.X(u,v==null?C.cB:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eVn.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fxi.prototype={
$1(d){var x=y.h.a(new A.qv([],[]).o_(d.target.result,!1)),w=C.wu.q(x.objectStoreNames,"thumbs")
if(!w)C.wr.Gi(x,"thumbs")},
$S:166};(function inheritance(){var x=a.inherit
x(B.aGR,A.af)
x(B.bnF,A.ah)
x(B.eVn,A.iN)
x(B.fxi,A.hx)})()
A.iW(b.typeUniverse,JSON.parse('{"aGR":{"af":[],"v":[]},"bnF":{"ah":["aGR"]}}'))
var y={i:A.at("uQ"),h:A.at("rw"),w:A.at("ai<H>"),A:A.at("m7"),o:A.at("dL"),n:A.at("dL?"),v:A.at("~")};(function staticFields(){$.fwx=A.T(A.at("n"),A.at("mq<aE>"))
$.coZ=A.T(A.at("n"),y.o)
$.aPO=null})()};
(a=>{a["Od2nxj5rSRDPud0Ma7d+ew/DRm8="]=a.current})($__dart_deferred_initializers__);