((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEw(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.uw(d)
x.toString
return x}catch(w){return v}return v},
igl(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.ftv.h(0,v)
if(x!=null)return x
w=B.bEw(v)
if(w!=null){if($.ftv.a>64)$.ftv.aa(0)
$.ftv.n(0,v,w)}return w},
aR3(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aG8(i,j,f,e,g,h,v),C.ap)
x=B.igl(i)
if(x!=null)return A.bx(u,A.tB(C.A,v,C.h9,e,!0,f,x,!1,v,j),C.ap)
w=C.cY.j(0.15)
return A.p(v,A.X(g,h==null?C.cY:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aG8:function aG8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bmS:function bmS(){this.c=this.a=this.d=null},
eSz:function eSz(d,e){this.a=d
this.b=e},
haD(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.be("IndexedDB not available"))
return C.zk.Mu(x,"ngmy_worksheet_thumbs_v1",new B.fug(),1)},
i1c(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cn(d))
if(y.i.b(d))return new Uint8Array(A.cn(J.eH(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cn(A.yr(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cn(d))
if(typeof d=="string")try{x=C.cF.aP(d)
return x}catch(w){return v}return v},
aRH(d){return B.ilo(d)},
ilo(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aRH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aP3
x=7
return A.b(o==null?$.aP3=B.haD():o,$async$aRH)
case 7:s=f
r=J.n_(s,"thumbs","readonly")
x=8
return A.b(C.j5.zK(J.mZ(r,"thumbs"),m),$async$aRH)
case 8:q=f
x=9
return A.b(J.pQ(r),$async$aRH)
case 9:m=B.i1c(q)
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
return A.i($async$aRH,w)},
fug:function fug(){},
hBg(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b3(d,14)},
cnh(d){var x=0,w=A.j(y.n),v,u
var $async$cnh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hBg(d)
if(u==null){v=null
x=1
break}v=B.cng(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cnh,w)},
cng(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cng=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cne.h(0,s)
if(u!=null&&!C.aG.gan(u)){v=u
x=1
break}x=3
return A.b(B.aRH(s),$async$cng)
case 3:t=f
if(t!=null&&!C.aG.gan(t)){$.cne.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cng,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aG8.prototype={
R(){return new B.bmS()}}
B.bmS.prototype={
Z(){this.a3()
this.a02()},
bz(d){this.bH(d)
if(d.c!==this.a.c)this.a02()},
a02(){var x=0,w=A.j(y.v),v=this,u
var $async$a02=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cnh(v.a.c),$async$a02)
case 2:u=e
if(v.c!=null)v.m(new B.eSz(v,u))
return A.h(null,w)}})
return A.i($async$a02,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gan(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tB(C.A,s,C.h9,x.f,!0,v,new A.q4(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cY.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cY:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eSz.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fug.prototype={
$1(d){var x=y.h.a(new A.r4([],[]).oC(d.target.result,!1)),w=C.yi.q(x.objectStoreNames,"thumbs")
if(!w)C.ye.Lc(x,"thumbs")},
$S:197};(function inheritance(){var x=a.inherit
x(B.aG8,A.af)
x(B.bmS,A.ah)
x(B.eSz,A.iI)
x(B.fug,A.hz)})()
A.j2(b.typeUniverse,JSON.parse('{"aG8":{"af":[],"v":[]},"bmS":{"ah":["aG8"]}}'))
var y={i:A.as("uD"),h:A.as("ro"),w:A.as("ai<G>"),A:A.as("m_"),o:A.as("dL"),n:A.as("dL?"),v:A.as("~")};(function staticFields(){$.ftv=A.U(A.as("m"),A.as("mj<aD>"))
$.cne=A.U(A.as("m"),y.o)
$.aP3=null})()};
(a=>{a["Dsjw4FChPyX2V8ZRsy7nYFbj/kA="]=a.current})($__dart_deferred_initializers__);