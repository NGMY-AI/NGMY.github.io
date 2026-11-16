((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFa(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uE(d)
x.toString
return x}catch(w){return v}return v},
ilb(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fvX.h(0,v)
if(x!=null)return x
w=B.bFa(v)
if(w!=null){if($.fvX.a>64)$.fvX.a8(0)
$.fvX.n(0,v,w)}return w},
aRJ(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aGH(i,j,f,e,g,h,v),C.aq)
x=B.ilb(i)
if(x!=null)return A.bw(u,A.tL(C.A,v,C.hh,e,!0,f,x,!1,v,j),C.aq)
w=C.cz.j(0.15)
return A.q(v,A.X(g,h==null?C.cz:h,v,v,v,32),C.f,v,v,new A.p(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGH:function aGH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bns:function bns(){this.c=this.a=this.d=null},
eUS:function eUS(d,e){this.a=d
this.b=e},
he0(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wS.GR(x,"ngmy_worksheet_thumbs_v1",new B.fwI(),1)},
i5M(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cd(d))
if(y.i.b(d))return new Uint8Array(A.cd(J.eE(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cd(A.wS(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cM.aN(d)
return x}catch(w){return v}return v},
aSl(d){return B.iqj(d)},
iqj(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPE
x=7
return A.b(o==null?$.aPE=B.he0():o,$async$aSl)
case 7:s=f
r=J.mj(s,"thumbs","readonly")
x=8
return A.b(C.iE.xO(J.mi(r,"thumbs"),m),$async$aSl)
case 8:q=f
x=9
return A.b(J.ov(r),$async$aSl)
case 9:m=B.i5M(q)
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
return A.i($async$aSl,w)},
fwI:function fwI(){},
hFb(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
coD(d){var x=0,w=A.j(y.n),v,u
var $async$coD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hFb(d)
if(u==null){v=null
x=1
break}v=B.coC(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coD,w)},
coC(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$coC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.coA.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSl(s),$async$coC)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.coA.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coC,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGH.prototype={
S(){return new B.bns()}}
B.bns.prototype={
Y(){this.a4()
this.a0i()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0i()},
a0i(){var x=0,w=A.j(y.v),v=this,u
var $async$a0i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.coD(v.a.c),$async$a0i)
case 2:u=e
if(v.c!=null)v.m(new B.eUS(v,u))
return A.h(null,w)}})
return A.i($async$a0i,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tL(C.A,s,C.hh,x.f,!0,v,new A.qa(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cz.j(0.12)
v=t.a
u=v.r
v=v.w
return A.q(s,A.X(u,v==null?C.cz:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eUS.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fwI.prototype={
$1(d){var x=y.h.a(new A.qr([],[]).o_(d.target.result,!1)),w=C.wk.q(x.objectStoreNames,"thumbs")
if(!w)C.wh.Gi(x,"thumbs")},
$S:173};(function inheritance(){var x=a.inherit
x(B.aGH,A.af)
x(B.bns,A.ah)
x(B.eUS,A.iJ)
x(B.fwI,A.hu)})()
A.iT(b.typeUniverse,JSON.parse('{"aGH":{"af":[],"v":[]},"bns":{"ah":["aGH"]}}'))
var y={i:A.at("uN"),h:A.at("ru"),w:A.at("ai<H>"),A:A.at("m4"),o:A.at("dK"),n:A.at("dK?"),v:A.at("~")};(function staticFields(){$.fvX=A.T(A.at("n"),A.at("mp<aE>"))
$.coA=A.T(A.at("n"),y.o)
$.aPE=null})()};
(a=>{a["vBj6zw0DM15KgjuznDnn1gb/4ZI="]=a.current})($__dart_deferred_initializers__);