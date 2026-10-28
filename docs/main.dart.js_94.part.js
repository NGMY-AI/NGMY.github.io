((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBw(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tV(d)
x.toString
return x}catch(w){return v}return v},
i_k(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fhs.h(0,v)
if(x!=null)return x
w=B.bBw(v)
if(w!=null){if($.fhs.a>64)$.fhs.a9(0)
$.fhs.n(0,v,w)}return w},
aOK(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aE0(i,j,f,e,g,h,v),C.aq)
x=B.i_k(i)
if(x!=null)return A.bw(u,A.t4(C.A,v,C.fW,e,!0,f,x,!1,v,j),C.aq)
w=C.cV.j(0.15)
return A.p(v,A.X(g,h==null?C.cV:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aE0:function aE0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bk5:function bk5(){this.c=this.a=this.d=null},
eHC:function eHC(d,e){this.a=d
this.b=e},
fWr(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yu.LB(x,"ngmy_worksheet_thumbs_v1",new B.fid(),1)},
hLN(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zO(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
aPo(d){return B.i4i(d)},
i4i(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPo=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMR
x=7
return A.b(o==null?$.aMR=B.fWr():o,$async$aPo)
case 7:s=f
r=J.mF(s,"thumbs","readonly")
x=8
return A.b(C.iD.zh(J.mD(r,"thumbs"),m),$async$aPo)
case 8:q=f
x=9
return A.b(J.pq(r),$async$aPo)
case 9:m=B.hLN(q)
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
return A.i($async$aPo,w)},
fid:function fid(){},
hli(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b1(d,14)},
cfc(d){var x=0,w=A.j(y.n),v,u
var $async$cfc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hli(d)
if(u==null){v=null
x=1
break}v=B.cfb(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfc,w)},
cfb(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cfb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cf9.h(0,s)
if(u!=null&&!C.aG.gam(u)){v=u
x=1
break}x=3
return A.b(B.aPo(s),$async$cfb)
case 3:t=f
if(t!=null&&!C.aG.gam(t)){$.cf9.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfb,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aE0.prototype={
R(){return new B.bk5()}}
B.bk5.prototype={
a_(){this.a1()
this.XY()},
br(d){this.bC(d)
if(d.c!==this.a.c)this.XY()},
XY(){var x=0,w=A.j(y.v),v=this,u
var $async$XY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cfc(v.a.c),$async$XY)
case 2:u=e
if(v.c!=null)v.m(new B.eHC(v,u))
return A.h(null,w)}})
return A.i($async$XY,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.t4(C.A,s,C.fW,x.f,!0,v,new A.pF(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cV.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cV:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eHC.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fid.prototype={
$1(d){var x=y.h.a(new A.rE([],[]).py(d.target.result,!1)),w=C.xm.t(x.objectStoreNames,"thumbs")
if(!w)C.xi.Kp(x,"thumbs")},
$S:191};(function inheritance(){var x=a.inherit
x(B.aE0,A.ag)
x(B.bk5,A.ah)
x(B.eHC,A.j6)
x(B.fid,A.hU)})()
A.jW(b.typeUniverse,JSON.parse('{"aE0":{"ag":[],"r":[]},"bk5":{"ah":["aE0"]}}'))
var y={i:A.ax("u0"),h:A.ax("qW"),w:A.ax("ai<H>"),A:A.ax("lG"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.fhs=A.T(A.ax("n"),A.ax("lY<aC>"))
$.cf9=A.T(A.ax("n"),y.o)
$.aMR=null})()};
(a=>{a["CkcY+DDdmQmaFE3Spy42K0hCVR0="]=a.current})($__dart_deferred_initializers__);