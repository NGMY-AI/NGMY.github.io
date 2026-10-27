((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bzp(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tz(d)
x.toString
return x}catch(w){return v}return v},
hNQ(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f7t.h(0,v)
if(x!=null)return x
w=B.bzp(v)
if(w!=null){if($.f7t.a>64)$.f7t.a7(0)
$.f7t.n(0,v,w)}return w},
aNe(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aCx(i,j,f,e,g,h,v),C.ao)
x=B.hNQ(i)
if(x!=null)return A.bu(u,A.rI(C.A,v,C.fO,e,!0,f,x,!1,v,j),C.ao)
w=C.cU.j(0.15)
return A.p(v,A.W(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aCx:function aCx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bi8:function bi8(){this.c=this.a=this.d=null},
ey_:function ey_(d,e){this.a=d
this.b=e},
fKE(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.S(A.bd("IndexedDB not available"))
return C.xJ.KM(x,"ngmy_worksheet_thumbs_v1",new B.f8e(),1)},
hzr(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.co(d))
if(y.i.b(d))return new Uint8Array(A.co(J.eR(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.co(A.Bl(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.co(d))
if(typeof d=="string")try{x=C.cA.aG(d)
return x}catch(w){return v}return v},
aNS(d){return B.hSO(d)},
hSO(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aNS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aLk
x=7
return A.b(o==null?$.aLk=B.fKE():o,$async$aNS)
case 7:s=f
r=J.mq(s,"thumbs","readonly")
x=8
return A.b(C.iy.yN(J.mo(r,"thumbs"),m),$async$aNS)
case 8:q=f
x=9
return A.b(J.p8(r),$async$aNS)
case 9:m=B.hzr(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a7(l)
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
return A.i($async$aNS,w)},
f8e:function f8e(){},
h98(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aY(d,14)},
ccs(d){var x=0,w=A.j(y.n),v,u
var $async$ccs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h98(d)
if(u==null){v=null
x=1
break}v=B.ccr(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccs,w)},
ccr(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$ccr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.ccp.h(0,s)
if(u!=null&&!C.aG.gaj(u)){v=u
x=1
break}x=3
return A.b(B.aNS(s),$async$ccr)
case 3:t=f
if(t!=null&&!C.aG.gaj(t)){$.ccp.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccr,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[53],B)
B.aCx.prototype={
S(){return new B.bi8()}}
B.bi8.prototype={
Z(){this.a0()
this.WT()},
bq(d){this.bD(d)
if(d.c!==this.a.c)this.WT()},
WT(){var x=0,w=A.j(y.v),v=this,u
var $async$WT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.ccs(v.a.c),$async$WT)
case 2:u=e
if(v.c!=null)v.m(new B.ey_(v,u))
return A.h(null,w)}})
return A.i($async$WT,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gaj(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rI(C.A,s,C.fO,x.f,!0,v,new A.po(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.ey_.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f8e.prototype={
$1(d){var x=y.h.a(new A.rh([],[]).p0(d.target.result,!1)),w=C.wD.t(x.objectStoreNames,"thumbs")
if(!w)C.wz.JC(x,"thumbs")},
$S:189};(function inheritance(){var x=a.inherit
x(B.aCx,A.af)
x(B.bi8,A.ag)
x(B.ey_,A.jp)
x(B.f8e,A.i6)})()
A.ki(b.typeUniverse,JSON.parse('{"aCx":{"af":[],"r":[]},"bi8":{"ag":["aCx"]}}'))
var y={i:A.aA("tG"),h:A.aA("qA"),w:A.aA("ak<H>"),A:A.aA("lw"),o:A.aA("dB"),n:A.aA("dB?"),v:A.aA("~")};(function staticFields(){$.f7t=A.T(A.aA("n"),A.aA("lO<aC>"))
$.ccp=A.T(A.aA("n"),y.o)
$.aLk=null})()};
(a=>{a["6BLgAdiALCSLLoYnxikmXvAIBwg="]=a.current})($__dart_deferred_initializers__);