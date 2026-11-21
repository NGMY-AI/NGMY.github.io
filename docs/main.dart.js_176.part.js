((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bGY(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.Y(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.Y(d,"data:image"))try{x=A.uN(d)
x.toString
return x}catch(w){return v}return v},
iun(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fCl.h(0,v)
if(x!=null)return x
w=B.bGY(v)
if(w!=null){if($.fCl.a>64)$.fCl.a5(0)
$.fCl.n(0,v,w)}return w},
aSV(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.Y(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aHL(i,j,f,e,g,h,v),C.aq)
x=B.iun(i)
if(x!=null)return A.bw(u,A.tT(C.z,v,C.hd,e,!0,f,x,!1,v,j),C.aq)
w=C.cB.j(0.15)
return A.p(v,A.W(g,h==null?C.cB:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.m),v,f,v,v,v,v,v,j)},
aHL:function aHL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
boV:function boV(){this.c=this.a=this.d=null},
f_S:function f_S(d,e){this.a=d
this.b=e},
hlW(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bb("IndexedDB not available"))
return C.xt.H8(x,"ngmy_worksheet_thumbs_v1",new B.fD8(),1)},
ife(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ca(d))
if(y.i.b(d))return new Uint8Array(A.ca(J.ew(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ca(A.vW(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ca(d))
if(typeof d=="string")try{x=C.cD.aK(d)
return x}catch(w){return v}return v},
aTz(d){return B.izK(d)},
izK(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aTz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aQM
x=7
return A.b(o==null?$.aQM=B.hlW():o,$async$aTz)
case 7:s=f
r=J.my(s,"thumbs","readonly")
x=8
return A.b(C.iO.xU(J.mx(r,"thumbs"),m),$async$aTz)
case 8:q=f
x=9
return A.b(J.oL(r),$async$aTz)
case 9:m=B.ife(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
$.am.$1("[worksheet-thumb idb get] "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aTz,w)},
fD8:function fD8(){},
hO0(d){if(!(d!=null&&C.a.Y(d,"ngmy:ws-thumb:")))return null
return C.a.aY(d,14)},
cr4(d){var x=0,w=A.j(y.n),v,u
var $async$cr4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hO0(d)
if(u==null){v=null
x=1
break}v=B.cr3(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cr4,w)},
cr3(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cr3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cr1.h(0,s)
if(u!=null&&!C.aI.gar(u)){v=u
x=1
break}x=3
return A.b(B.aTz(s),$async$cr3)
case 3:t=f
if(t!=null&&!C.aI.gar(t)){$.cr1.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cr3,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[77],B)
B.aHL.prototype={
S(){return new B.boV()}}
B.boV.prototype={
a_(){this.a3()
this.a0Y()},
bx(d){this.bJ(d)
if(d.c!==this.a.c)this.a0Y()},
a0Y(){var x=0,w=A.j(y.v),v=this,u
var $async$a0Y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cr4(v.a.c),$async$a0Y)
case 2:u=e
if(v.c!=null)v.l(new B.f_S(v,u))
return A.h(null,w)}})
return A.i($async$a0Y,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gar(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tT(C.z,s,C.hd,x.f,!0,v,new A.p0(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cB.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cB:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.f_S.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fD8.prototype={
$1(d){var x=y.h.a(new A.qI([],[]).o6(d.target.result,!1)),w=C.wR.q(x.objectStoreNames,"thumbs")
if(!w)C.wO.Gy(x,"thumbs")},
$S:168};(function inheritance(){var x=a.inherit
x(B.aHL,A.af)
x(B.boV,A.ah)
x(B.f_S,A.hQ)
x(B.fD8,A.fN)})()
A.i_(b.typeUniverse,JSON.parse('{"aHL":{"af":[],"w":[]},"boV":{"ah":["aHL"]}}'))
var y={i:A.ar("mA"),h:A.ar("qV"),w:A.ar("ai<F>"),A:A.ar("lX"),o:A.ar("dz"),n:A.ar("dz?"),v:A.ar("~")};(function staticFields(){$.fCl=A.S(A.ar("m"),A.ar("mD<aE>"))
$.cr1=A.S(A.ar("m"),y.o)
$.aQM=null})()};
(a=>{a["j2cv7HZHBwmGSBxtDUJm7LAuroA="]=a.current})($__dart_deferred_initializers__);