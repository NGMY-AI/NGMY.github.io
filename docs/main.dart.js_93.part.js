((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bAz(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tO(d)
x.toString
return x}catch(w){return v}return v},
hWw(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.feq.h(0,v)
if(x!=null)return x
w=B.bAz(v)
if(w!=null){if($.feq.a>64)$.feq.a9(0)
$.feq.n(0,v,w)}return w},
aO8(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bv(u,new B.aDt(i,j,f,e,g,h,v),C.aq)
x=B.hWw(i)
if(x!=null)return A.bv(u,A.rY(C.A,v,C.fU,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.W(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aDt:function aDt(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjf:function bjf(){this.c=this.a=this.d=null},
eF_:function eF_(d,e){this.a=d
this.b=e},
fST(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.U(A.bd("IndexedDB not available"))
return C.yj.Ln(x,"ngmy_worksheet_thumbs_v1",new B.ffb(),1)},
hI1(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cr(d))
if(y.i.b(d))return new Uint8Array(A.cr(J.eX(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cr(A.BK(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cr(d))
if(typeof d=="string")try{x=C.cD.aJ(d)
return x}catch(w){return v}return v},
aOM(d){return B.i0u(d)},
i0u(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aOM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMf
x=7
return A.b(o==null?$.aMf=B.fST():o,$async$aOM)
case 7:s=f
r=J.mA(s,"thumbs","readonly")
x=8
return A.b(C.iC.za(J.my(r,"thumbs"),m),$async$aOM)
case 8:q=f
x=9
return A.b(J.pl(r),$async$aOM)
case 9:m=B.hI1(q)
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
return A.i($async$aOM,w)},
ffb:function ffb(){},
hhD(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b0(d,14)},
ce_(d){var x=0,w=A.j(y.n),v,u
var $async$ce_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hhD(d)
if(u==null){v=null
x=1
break}v=B.cdZ(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ce_,w)},
cdZ(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cdZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cdX.h(0,s)
if(u!=null&&!C.aG.gam(u)){v=u
x=1
break}x=3
return A.b(B.aOM(s),$async$cdZ)
case 3:t=f
if(t!=null&&!C.aG.gam(t)){$.cdX.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdZ,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aDt.prototype={
T(){return new B.bjf()}}
B.bjf.prototype={
a_(){this.a1()
this.XI()},
br(d){this.bE(d)
if(d.c!==this.a.c)this.XI()},
XI(){var x=0,w=A.j(y.v),v=this,u
var $async$XI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.ce_(v.a.c),$async$XI)
case 2:u=e
if(v.c!=null)v.m(new B.eF_(v,u))
return A.h(null,w)}})
return A.i($async$XI,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rY(C.A,s,C.fU,x.f,!0,v,new A.pA(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eF_.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.ffb.prototype={
$1(d){var x=y.h.a(new A.rx([],[]).pl(d.target.result,!1)),w=C.xb.t(x.objectStoreNames,"thumbs")
if(!w)C.x7.Kb(x,"thumbs")},
$S:196};(function inheritance(){var x=a.inherit
x(B.aDt,A.ag)
x(B.bjf,A.ah)
x(B.eF_,A.j3)
x(B.ffb,A.hT)})()
A.jT(b.typeUniverse,JSON.parse('{"aDt":{"ag":[],"r":[]},"bjf":{"ah":["aDt"]}}'))
var y={i:A.ax("tW"),h:A.ax("qP"),w:A.ax("ai<H>"),A:A.ax("lD"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.feq=A.V(A.ax("n"),A.ax("lV<aC>"))
$.cdX=A.V(A.ax("n"),y.o)
$.aMf=null})()};
(a=>{a["ZQdEfKmQmEtIE/J9663smPUN6wE="]=a.current})($__dart_deferred_initializers__);