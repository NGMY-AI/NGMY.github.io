((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEv(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.uw(d)
x.toString
return x}catch(w){return v}return v},
iho(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.ftS.h(0,v)
if(x!=null)return x
w=B.bEv(v)
if(w!=null){if($.ftS.a>64)$.ftS.a9(0)
$.ftS.n(0,v,w)}return w},
aR3(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aGb(i,j,f,e,g,h,v),C.aq)
x=B.iho(i)
if(x!=null)return A.bx(u,A.tE(C.A,v,C.hc,e,!0,f,x,!1,v,j),C.aq)
w=C.d_.j(0.15)
return A.p(v,A.Y(g,h==null?C.d_:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGb:function aGb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bmN:function bmN(){this.c=this.a=this.d=null},
eT6:function eT6(d,e){this.a=d
this.b=e},
hbb(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zu.Mt(x,"ngmy_worksheet_thumbs_v1",new B.fuD(),1)},
i2o(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cb(d))
if(y.i.b(d))return new Uint8Array(A.cb(J.eC(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cb(A.wI(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cG.aM(d)
return x}catch(w){return v}return v},
aRH(d){return B.imr(d)},
imr(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aRH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aP3
x=7
return A.b(o==null?$.aP3=B.hbb():o,$async$aRH)
case 7:s=f
r=J.mY(s,"thumbs","readonly")
x=8
return A.b(C.j6.zY(J.mX(r,"thumbs"),m),$async$aRH)
case 8:q=f
x=9
return A.b(J.pS(r),$async$aRH)
case 9:m=B.i2o(q)
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
fuD:function fuD(){},
hC0(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cnC(d){var x=0,w=A.j(y.n),v,u
var $async$cnC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hC0(d)
if(u==null){v=null
x=1
break}v=B.cnB(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cnC,w)},
cnB(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cnB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cnz.h(0,s)
if(u!=null&&!C.aH.gav(u)){v=u
x=1
break}x=3
return A.b(B.aRH(s),$async$cnB)
case 3:t=f
if(t!=null&&!C.aH.gav(t)){$.cnz.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cnB,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[60],B)
B.aGb.prototype={
S(){return new B.bmN()}}
B.bmN.prototype={
Z(){this.a3()
this.a03()},
by(d){this.bH(d)
if(d.c!==this.a.c)this.a03()},
a03(){var x=0,w=A.j(y.v),v=this,u
var $async$a03=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cnC(v.a.c),$async$a03)
case 2:u=e
if(v.c!=null)v.m(new B.eT6(v,u))
return A.h(null,w)}})
return A.i($async$a03,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gav(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tE(C.A,s,C.hc,x.f,!0,v,new A.q5(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.d_.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.Y(u,v==null?C.d_:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eT6.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fuD.prototype={
$1(d){var x=y.h.a(new A.r3([],[]).oH(d.target.result,!1)),w=C.yp.q(x.objectStoreNames,"thumbs")
if(!w)C.yl.Lf(x,"thumbs")},
$S:184};(function inheritance(){var x=a.inherit
x(B.aGb,A.ag)
x(B.bmN,A.ah)
x(B.eT6,A.iG)
x(B.fuD,A.hu)})()
A.j0(b.typeUniverse,JSON.parse('{"aGb":{"ag":[],"v":[]},"bmN":{"ah":["aGb"]}}'))
var y={i:A.as("uD"),h:A.as("ro"),w:A.as("ai<F>"),A:A.as("m_"),o:A.as("dJ"),n:A.as("dJ?"),v:A.as("~")};(function staticFields(){$.ftS=A.U(A.as("m"),A.as("mi<aF>"))
$.cnz=A.U(A.as("m"),y.o)
$.aP3=null})()};
(a=>{a["8/eLk+L0jn2db2+3BVp4pfI+O44="]=a.current})($__dart_deferred_initializers__);