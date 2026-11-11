((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEv(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.uw(d)
x.toString
return x}catch(w){return v}return v},
ige(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fto.h(0,v)
if(x!=null)return x
w=B.bEv(v)
if(w!=null){if($.fto.a>64)$.fto.aa(0)
$.fto.n(0,v,w)}return w},
aR2(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aG6(i,j,f,e,g,h,v),C.ap)
x=B.ige(i)
if(x!=null)return A.bx(u,A.tB(C.A,v,C.h9,e,!0,f,x,!1,v,j),C.ap)
w=C.cY.j(0.15)
return A.p(v,A.X(g,h==null?C.cY:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aG6:function aG6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bmR:function bmR(){this.c=this.a=this.d=null},
eSs:function eSs(d,e){this.a=d
this.b=e},
haw(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.be("IndexedDB not available"))
return C.zk.Ms(x,"ngmy_worksheet_thumbs_v1",new B.fu9(),1)},
i15(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cn(d))
if(y.i.b(d))return new Uint8Array(A.cn(J.eH(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cn(A.yr(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cn(d))
if(typeof d=="string")try{x=C.cF.aP(d)
return x}catch(w){return v}return v},
aRG(d){return B.ilh(d)},
ilh(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aRG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aP1
x=7
return A.b(o==null?$.aP1=B.haw():o,$async$aRG)
case 7:s=f
r=J.mZ(s,"thumbs","readonly")
x=8
return A.b(C.j5.zK(J.mY(r,"thumbs"),m),$async$aRG)
case 8:q=f
x=9
return A.b(J.pQ(r),$async$aRG)
case 9:m=B.i15(q)
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
return A.i($async$aRG,w)},
fu9:function fu9(){},
hB9(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b3(d,14)},
cna(d){var x=0,w=A.j(y.n),v,u
var $async$cna=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hB9(d)
if(u==null){v=null
x=1
break}v=B.cn9(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cna,w)},
cn9(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cn9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cn7.h(0,s)
if(u!=null&&!C.aG.gan(u)){v=u
x=1
break}x=3
return A.b(B.aRG(s),$async$cn9)
case 3:t=f
if(t!=null&&!C.aG.gan(t)){$.cn7.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cn9,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aG6.prototype={
R(){return new B.bmR()}}
B.bmR.prototype={
Z(){this.a3()
this.a01()},
bz(d){this.bH(d)
if(d.c!==this.a.c)this.a01()},
a01(){var x=0,w=A.j(y.v),v=this,u
var $async$a01=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cna(v.a.c),$async$a01)
case 2:u=e
if(v.c!=null)v.m(new B.eSs(v,u))
return A.h(null,w)}})
return A.i($async$a01,w)},
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
B.eSs.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fu9.prototype={
$1(d){var x=y.h.a(new A.r4([],[]).oC(d.target.result,!1)),w=C.yi.q(x.objectStoreNames,"thumbs")
if(!w)C.ye.La(x,"thumbs")},
$S:197};(function inheritance(){var x=a.inherit
x(B.aG6,A.af)
x(B.bmR,A.ah)
x(B.eSs,A.iI)
x(B.fu9,A.hz)})()
A.j2(b.typeUniverse,JSON.parse('{"aG6":{"af":[],"v":[]},"bmR":{"ah":["aG6"]}}'))
var y={i:A.as("uD"),h:A.as("ro"),w:A.as("ai<G>"),A:A.as("m_"),o:A.as("dL"),n:A.as("dL?"),v:A.as("~")};(function staticFields(){$.fto=A.U(A.as("m"),A.as("mi<aD>"))
$.cn7=A.U(A.as("m"),y.o)
$.aP1=null})()};
(a=>{a["XkykgnL0MkMtebs/ZKfKqzIaZdY="]=a.current})($__dart_deferred_initializers__);