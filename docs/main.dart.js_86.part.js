((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bA8(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tL(d)
x.toString
return x}catch(w){return v}return v},
hT6(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fbO.h(0,v)
if(x!=null)return x
w=B.bA8(v)
if(w!=null){if($.fbO.a>64)$.fbO.a8(0)
$.fbO.n(0,v,w)}return w},
aNR(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bv(u,new B.aDa(i,j,f,e,g,h,v),C.aq)
x=B.hT6(i)
if(x!=null)return A.bv(u,A.rU(C.A,v,C.fQ,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.W(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aDa:function aDa(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
biS:function biS(){this.c=this.a=this.d=null},
eCq:function eCq(d,e){this.a=d
this.b=e},
fPF(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.T(A.bd("IndexedDB not available"))
return C.y4.L8(x,"ngmy_worksheet_thumbs_v1",new B.fcz(),1)},
hEG(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cp(d))
if(y.i.b(d))return new Uint8Array(A.cp(J.eU(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cp(A.BF(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cp(d))
if(typeof d=="string")try{x=C.cB.aI(d)
return x}catch(w){return v}return v},
aOu(d){return B.hY4(d)},
hY4(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aOu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aLY
x=7
return A.b(o==null?$.aLY=B.fPF():o,$async$aOu)
case 7:s=f
r=J.mw(s,"thumbs","readonly")
x=8
return A.b(C.iz.z_(J.mu(r,"thumbs"),m),$async$aOu)
case 8:q=f
x=9
return A.b(J.pg(r),$async$aOu)
case 9:m=B.hEG(q)
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
return A.i($async$aOu,w)},
fcz:function fcz(){},
hel(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b_(d,14)},
cdj(d){var x=0,w=A.j(y.n),v,u
var $async$cdj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hel(d)
if(u==null){v=null
x=1
break}v=B.cdi(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdj,w)},
cdi(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cdi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cdg.h(0,s)
if(u!=null&&!C.aG.gal(u)){v=u
x=1
break}x=3
return A.b(B.aOu(s),$async$cdi)
case 3:t=f
if(t!=null&&!C.aG.gal(t)){$.cdg.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdi,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aDa.prototype={
T(){return new B.biS()}}
B.biS.prototype={
a_(){this.a1()
this.Xn()},
br(d){this.bE(d)
if(d.c!==this.a.c)this.Xn()},
Xn(){var x=0,w=A.j(y.v),v=this,u
var $async$Xn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cdj(v.a.c),$async$Xn)
case 2:u=e
if(v.c!=null)v.m(new B.eCq(v,u))
return A.h(null,w)}})
return A.i($async$Xn,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gal(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rU(C.A,s,C.fQ,x.f,!0,v,new A.pv(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eCq.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fcz.prototype={
$1(d){var x=y.h.a(new A.rt([],[]).pc(d.target.result,!1)),w=C.wW.t(x.objectStoreNames,"thumbs")
if(!w)C.wS.JY(x,"thumbs")},
$S:194};(function inheritance(){var x=a.inherit
x(B.aDa,A.ag)
x(B.biS,A.ah)
x(B.eCq,A.jr)
x(B.fcz,A.i7)})()
A.kl(b.typeUniverse,JSON.parse('{"aDa":{"ag":[],"r":[]},"biS":{"ah":["aDa"]}}'))
var y={i:A.aA("tS"),h:A.aA("qK"),w:A.aA("ak<G>"),A:A.aA("lA"),o:A.aA("dC"),n:A.aA("dC?"),v:A.aA("~")};(function staticFields(){$.fbO=A.V(A.aA("n"),A.aA("lS<aC>"))
$.cdg=A.V(A.aA("n"),y.o)
$.aLY=null})()};
(a=>{a["ioIT/yGwbOUY2dASxxDHr+8jhJw="]=a.current})($__dart_deferred_initializers__);