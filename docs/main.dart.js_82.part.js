((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bxQ(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tn(d)
x.toString
return x}catch(w){return v}return v},
hGH(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f26.h(0,v)
if(x!=null)return x
w=B.bxQ(v)
if(w!=null){if($.f26.a>64)$.f26.a8(0)
$.f26.m(0,v,w)}return w},
aM_(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aBv(i,j,f,e,g,h,v),C.ap)
x=B.hGH(i)
if(x!=null)return A.bu(u,A.rx(C.B,v,C.fG,e,!0,f,x,!1,v,j),C.ap)
w=C.cS.j(0.15)
return A.p(v,A.V(g,h==null?C.cS:h,v,v,v,32),C.h,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBv:function aBv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgM:function bgM(){this.c=this.a=this.d=null},
etg:function etg(d,e){this.a=d
this.b=e},
fEs(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.b9("IndexedDB not available"))
return C.xk.Kl(x,"ngmy_worksheet_thumbs_v1",new B.f2S(),1)},
hsQ(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cl(d))
if(y.i.b(d))return new Uint8Array(A.cl(J.eP(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cl(A.AX(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aE(d)
return x}catch(w){return v}return v},
aMC(d){return B.hLB(d)},
hLB(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aMC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aKb
x=7
return A.b(o==null?$.aKb=B.fEs():o,$async$aMC)
case 7:s=f
r=J.mg(s,"thumbs","readonly")
x=8
return A.b(C.im.yu(J.me(r,"thumbs"),m),$async$aMC)
case 8:q=f
x=9
return A.b(J.oZ(r),$async$aMC)
case 9:m=B.hsQ(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a5(l)
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
return A.i($async$aMC,w)},
f2S:function f2S(){},
h2D(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aU(d,14)},
ca9(d){var x=0,w=A.j(y.n),v,u
var $async$ca9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h2D(d)
if(u==null){v=null
x=1
break}v=B.ca8(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ca9,w)},
ca8(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$ca8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.ca6.h(0,s)
if(u!=null&&!C.aD.gah(u)){v=u
x=1
break}x=3
return A.b(B.aMC(s),$async$ca8)
case 3:t=f
if(t!=null&&!C.aD.gah(t)){$.ca6.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ca8,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aBv.prototype={
S(){return new B.bgM()}}
B.bgM.prototype={
Z(){this.a0()
this.Wj()},
bo(d){this.bA(d)
if(d.c!==this.a.c)this.Wj()},
Wj(){var x=0,w=A.j(y.v),v=this,u
var $async$Wj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.ca9(v.a.c),$async$Wj)
case 2:u=e
if(v.c!=null)v.n(new B.etg(v,u))
return A.h(null,w)}})
return A.i($async$Wj,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aD.gah(r)){r=t.d
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
B.etg.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f2S.prototype={
$1(d){var x=y.h.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wb.q(x.objectStoreNames,"thumbs")
if(!w)C.w7.Jc(x,"thumbs")},
$S:195};(function inheritance(){var x=a.inherit
x(B.aBv,A.ae)
x(B.bgM,A.ag)
x(B.etg,A.jk)
x(B.f2S,A.i1)})()
A.kd(b.typeUniverse,JSON.parse('{"aBv":{"ae":[],"r":[]},"bgM":{"ag":["aBv"]}}'))
var y={i:A.aA("tu"),h:A.aA("qq"),w:A.aA("ak<H>"),A:A.aA("lp"),o:A.aA("dz"),n:A.aA("dz?"),v:A.aA("~")};(function staticFields(){$.f26=A.R(A.aA("n"),A.aA("lG<aC>"))
$.ca6=A.R(A.aA("n"),y.o)
$.aKb=null})()};
(a=>{a["qXkOhMQJRuSPMmY8FJwC/Y9cY48="]=a.current})($__dart_deferred_initializers__);