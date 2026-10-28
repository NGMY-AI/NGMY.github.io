((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBz(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tX(d)
x.toString
return x}catch(w){return v}return v},
i_X(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fhM.h(0,v)
if(x!=null)return x
w=B.bBz(v)
if(w!=null){if($.fhM.a>64)$.fhM.a9(0)
$.fhM.n(0,v,w)}return w},
aOP(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aE5(i,j,f,e,g,h,v),C.aq)
x=B.i_X(i)
if(x!=null)return A.bw(u,A.t6(C.A,v,C.fW,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.X(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aE5:function aE5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bk8:function bk8(){this.c=this.a=this.d=null},
eHW:function eHW(d,e){this.a=d
this.b=e},
fWU(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yw.LB(x,"ngmy_worksheet_thumbs_v1",new B.fix(),1)},
hMn(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zS(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
aPt(d){return B.i4V(d)},
i4V(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMW
x=7
return A.b(o==null?$.aMW=B.fWU():o,$async$aPt)
case 7:s=f
r=J.mF(s,"thumbs","readonly")
x=8
return A.b(C.iE.zm(J.mD(r,"thumbs"),m),$async$aPt)
case 8:q=f
x=9
return A.b(J.ps(r),$async$aPt)
case 9:m=B.hMn(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
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
return A.i($async$aPt,w)},
fix:function fix(){},
hlR(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b1(d,14)},
cfg(d){var x=0,w=A.j(y.n),v,u
var $async$cfg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hlR(d)
if(u==null){v=null
x=1
break}v=B.cff(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfg,w)},
cff(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cff=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cfd.h(0,s)
if(u!=null&&!C.aG.gam(u)){v=u
x=1
break}x=3
return A.b(B.aPt(s),$async$cff)
case 3:t=f
if(t!=null&&!C.aG.gam(t)){$.cfd.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cff,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aE5.prototype={
R(){return new B.bk8()}}
B.bk8.prototype={
a_(){this.a1()
this.XZ()},
bs(d){this.bD(d)
if(d.c!==this.a.c)this.XZ()},
XZ(){var x=0,w=A.j(y.v),v=this,u
var $async$XZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cfg(v.a.c),$async$XZ)
case 2:u=e
if(v.c!=null)v.m(new B.eHW(v,u))
return A.h(null,w)}})
return A.i($async$XZ,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.t6(C.A,s,C.fW,x.f,!0,v,new A.pH(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eHW.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fix.prototype={
$1(d){var x=y.h.a(new A.rG([],[]).py(d.target.result,!1)),w=C.xn.t(x.objectStoreNames,"thumbs")
if(!w)C.xj.Kp(x,"thumbs")},
$S:180};(function inheritance(){var x=a.inherit
x(B.aE5,A.ag)
x(B.bk8,A.ah)
x(B.eHW,A.j7)
x(B.fix,A.hV)})()
A.jW(b.typeUniverse,JSON.parse('{"aE5":{"ag":[],"r":[]},"bk8":{"ah":["aE5"]}}'))
var y={i:A.ax("u2"),h:A.ax("qX"),w:A.ax("ai<H>"),A:A.ax("lG"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.fhM=A.T(A.ax("n"),A.ax("lY<aC>"))
$.cfd=A.T(A.ax("n"),y.o)
$.aMW=null})()};
(a=>{a["2ysvQTlLGeHT5wDywVXTDMAcFPY="]=a.current})($__dart_deferred_initializers__);