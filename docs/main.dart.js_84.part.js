((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bzU(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tH(d)
x.toString
return x}catch(w){return v}return v},
hRC(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fau.h(0,v)
if(x!=null)return x
w=B.bzU(v)
if(w!=null){if($.fau.a>64)$.fau.a8(0)
$.fau.n(0,v,w)}return w},
aNG(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bv(u,new B.aD_(i,j,f,e,g,h,v),C.ap)
x=B.hRC(i)
if(x!=null)return A.bv(u,A.rQ(C.A,v,C.fO,e,!0,f,x,!1,v,j),C.ap)
w=C.cU.j(0.15)
return A.p(v,A.V(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aD_:function aD_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
biD:function biD(){this.c=this.a=this.d=null},
eB3:function eB3(d,e){this.a=d
this.b=e},
fOf(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.S(A.bd("IndexedDB not available"))
return C.xV.KW(x,"ngmy_worksheet_thumbs_v1",new B.fbf(),1)},
hDc(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.co(d))
if(y.i.b(d))return new Uint8Array(A.co(J.eU(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.co(A.By(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.co(d))
if(typeof d=="string")try{x=C.cB.aI(d)
return x}catch(w){return v}return v},
aOj(d){return B.hWA(d)},
hWA(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aOj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aLN
x=7
return A.b(o==null?$.aLN=B.fOf():o,$async$aOj)
case 7:s=f
r=J.mv(s,"thumbs","readonly")
x=8
return A.b(C.iz.yV(J.mt(r,"thumbs"),m),$async$aOj)
case 8:q=f
x=9
return A.b(J.pe(r),$async$aOj)
case 9:m=B.hDc(q)
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
return A.i($async$aOj,w)},
fbf:function fbf(){},
hcR(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b_(d,14)},
cd7(d){var x=0,w=A.j(y.n),v,u
var $async$cd7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hcR(d)
if(u==null){v=null
x=1
break}v=B.cd6(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cd7,w)},
cd6(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cd6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cd4.h(0,s)
if(u!=null&&!C.aG.gal(u)){v=u
x=1
break}x=3
return A.b(B.aOj(s),$async$cd6)
case 3:t=f
if(t!=null&&!C.aG.gal(t)){$.cd4.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cd6,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[53],B)
B.aD_.prototype={
T(){return new B.biD()}}
B.biD.prototype={
a_(){this.a1()
this.X4()},
br(d){this.bE(d)
if(d.c!==this.a.c)this.X4()},
X4(){var x=0,w=A.j(y.v),v=this,u
var $async$X4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cd7(v.a.c),$async$X4)
case 2:u=e
if(v.c!=null)v.m(new B.eB3(v,u))
return A.h(null,w)}})
return A.i($async$X4,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gal(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rQ(C.A,s,C.fO,x.f,!0,v,new A.pt(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eB3.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fbf.prototype={
$1(d){var x=y.h.a(new A.ro([],[]).pc(d.target.result,!1)),w=C.wO.t(x.objectStoreNames,"thumbs")
if(!w)C.wK.JM(x,"thumbs")},
$S:184};(function inheritance(){var x=a.inherit
x(B.aD_,A.ag)
x(B.biD,A.ah)
x(B.eB3,A.jq)
x(B.fbf,A.i7)})()
A.kj(b.typeUniverse,JSON.parse('{"aD_":{"ag":[],"r":[]},"biD":{"ah":["aD_"]}}'))
var y={i:A.az("tO"),h:A.az("qG"),w:A.az("ak<H>"),A:A.az("lx"),o:A.az("dB"),n:A.az("dB?"),v:A.az("~")};(function staticFields(){$.fau=A.U(A.az("n"),A.az("lQ<aC>"))
$.cd4=A.U(A.az("n"),y.o)
$.aLN=null})()};
(a=>{a["UvvJEMYoVjm/ftyi+0kOVKXNxGA="]=a.current})($__dart_deferred_initializers__);