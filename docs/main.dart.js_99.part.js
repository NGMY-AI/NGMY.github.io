((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bF3(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uE(d)
x.toString
return x}catch(w){return v}return v},
ikZ(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fvN.h(0,v)
if(x!=null)return x
w=B.bF3(v)
if(w!=null){if($.fvN.a>64)$.fvN.a8(0)
$.fvN.n(0,v,w)}return w},
aRC(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aGB(i,j,f,e,g,h,v),C.aq)
x=B.ikZ(i)
if(x!=null)return A.bx(u,A.tL(C.A,v,C.hi,e,!0,f,x,!1,v,j),C.aq)
w=C.d1.j(0.15)
return A.r(v,A.X(g,h==null?C.d1:h,v,v,v,32),C.f,v,v,new A.p(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGB:function aGB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnl:function bnl(){this.c=this.a=this.d=null},
eUI:function eUI(d,e){this.a=d
this.b=e},
hdN(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wV.GR(x,"ngmy_worksheet_thumbs_v1",new B.fwy(),1)},
i5z(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cd(d))
if(y.i.b(d))return new Uint8Array(A.cd(J.eE(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cd(A.wS(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cK.aN(d)
return x}catch(w){return v}return v},
aSe(d){return B.iq5(d)},
iq5(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPx
x=7
return A.b(o==null?$.aPx=B.hdN():o,$async$aSe)
case 7:s=f
r=J.mj(s,"thumbs","readonly")
x=8
return A.b(C.iC.xN(J.mi(r,"thumbs"),m),$async$aSe)
case 8:q=f
x=9
return A.b(J.ov(r),$async$aSe)
case 9:m=B.i5z(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
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
return A.i($async$aSe,w)},
fwy:function fwy(){},
hF_(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cow(d){var x=0,w=A.j(y.n),v,u
var $async$cow=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hF_(d)
if(u==null){v=null
x=1
break}v=B.cov(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cow,w)},
cov(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cov=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cot.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSe(s),$async$cov)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.cot.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cov,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGB.prototype={
S(){return new B.bnl()}}
B.bnl.prototype={
Y(){this.a4()
this.a0g()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0g()},
a0g(){var x=0,w=A.j(y.v),v=this,u
var $async$a0g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cow(v.a.c),$async$a0g)
case 2:u=e
if(v.c!=null)v.m(new B.eUI(v,u))
return A.h(null,w)}})
return A.i($async$a0g,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tL(C.A,s,C.hi,x.f,!0,v,new A.qa(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.d1.j(0.12)
v=t.a
u=v.r
v=v.w
return A.r(s,A.X(u,v==null?C.d1:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eUI.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fwy.prototype={
$1(d){var x=y.h.a(new A.qr([],[]).o_(d.target.result,!1)),w=C.wk.q(x.objectStoreNames,"thumbs")
if(!w)C.wh.Gi(x,"thumbs")},
$S:170};(function inheritance(){var x=a.inherit
x(B.aGB,A.af)
x(B.bnl,A.ah)
x(B.eUI,A.iJ)
x(B.fwy,A.ht)})()
A.iT(b.typeUniverse,JSON.parse('{"aGB":{"af":[],"v":[]},"bnl":{"ah":["aGB"]}}'))
var y={i:A.as("uN"),h:A.as("ru"),w:A.as("ai<H>"),A:A.as("m4"),o:A.as("dK"),n:A.as("dK?"),v:A.as("~")};(function staticFields(){$.fvN=A.T(A.as("n"),A.as("mp<aE>"))
$.cot=A.T(A.as("n"),y.o)
$.aPx=null})()};
(a=>{a["W0LHFdY3/edSgiEVmqhjpXjIKrQ="]=a.current})($__dart_deferred_initializers__);