((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBg(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.u8(d)
x.toString
return x}catch(w){return v}return v},
i1m(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fha.h(0,v)
if(x!=null)return x
w=B.bBg(v)
if(w!=null){if($.fha.a>64)$.fha.a8(0)
$.fha.n(0,v,w)}return w},
aOS(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aEe(i,j,f,e,g,h,v),C.aq)
x=B.i1m(i)
if(x!=null)return A.bw(u,A.th(C.A,v,C.fZ,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.X(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aEe:function aEe(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bk0:function bk0(){this.c=this.a=this.d=null},
eHo:function eHo(d,e){this.a=d
this.b=e},
fXQ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yG.LX(x,"ngmy_worksheet_thumbs_v1",new B.fhW(),1)},
hNH(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eY(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.A6(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cF.aK(d)
return x}catch(w){return v}return v},
aPu(d){return B.i6k(d)},
i6k(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMV
x=7
return A.b(o==null?$.aMV=B.fXQ():o,$async$aPu)
case 7:s=f
r=J.mI(s,"thumbs","readonly")
x=8
return A.b(C.iP.zt(J.mH(r,"thumbs"),m),$async$aPu)
case 8:q=f
x=9
return A.b(J.pz(r),$async$aPu)
case 9:m=B.hNH(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
$.am.$1("[worksheet-thumb idb get] "+A.u(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPu,w)},
fhW:function fhW(){},
hn0(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b3(d,14)},
cgj(d){var x=0,w=A.j(y.n),v,u
var $async$cgj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hn0(d)
if(u==null){v=null
x=1
break}v=B.cgi(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgj,w)},
cgi(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cgi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cgg.h(0,s)
if(u!=null&&!C.aH.gal(u)){v=u
x=1
break}x=3
return A.b(B.aPu(s),$async$cgi)
case 3:t=f
if(t!=null&&!C.aH.gal(t)){$.cgg.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgi,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aEe.prototype={
U(){return new B.bk0()}}
B.bk0.prototype={
a_(){this.a1()
this.Ym()},
bu(d){this.bC(d)
if(d.c!==this.a.c)this.Ym()},
Ym(){var x=0,w=A.j(y.v),v=this,u
var $async$Ym=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cgj(v.a.c),$async$Ym)
case 2:u=e
if(v.c!=null)v.m(new B.eHo(v,u))
return A.h(null,w)}})
return A.i($async$Ym,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gal(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.th(C.A,s,C.fZ,x.f,!0,v,new A.pP(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eHo.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fhW.prototype={
$1(d){var x=y.h.a(new A.rR([],[]).pF(d.target.result,!1)),w=C.xF.t(x.objectStoreNames,"thumbs")
if(!w)C.xB.KK(x,"thumbs")},
$S:198};(function inheritance(){var x=a.inherit
x(B.aEe,A.ag)
x(B.bk0,A.ah)
x(B.eHo,A.ja)
x(B.fhW,A.i_)})()
A.k_(b.typeUniverse,JSON.parse('{"aEe":{"ag":[],"t":[]},"bk0":{"ah":["aEe"]}}'))
var y={i:A.ax("ue"),h:A.ax("r4"),w:A.ax("ai<H>"),A:A.ax("lN"),o:A.ax("dI"),n:A.ax("dI?"),v:A.ax("~")};(function staticFields(){$.fha=A.U(A.ax("m"),A.ax("m3<aD>"))
$.cgg=A.U(A.ax("m"),y.o)
$.aMV=null})()};
(a=>{a["QS10xiDb0M6/7SOkWYqya1cgeFk="]=a.current})($__dart_deferred_initializers__);