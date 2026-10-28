((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bAn(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.tN(d)
x.toString
return x}catch(w){return v}return v},
hVk(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fdo.h(0,v)
if(x!=null)return x
w=B.bAn(v)
if(w!=null){if($.fdo.a>64)$.fdo.a8(0)
$.fdo.n(0,v,w)}return w},
aNY(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aDi(i,j,f,e,g,h,v),C.aq)
x=B.hVk(i)
if(x!=null)return A.bw(u,A.rW(C.A,v,C.fR,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.W(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aDi:function aDi(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bj3:function bj3(){this.c=this.a=this.d=null},
eDZ:function eDZ(d,e){this.a=d
this.b=e},
fRO(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.U(A.bd("IndexedDB not available"))
return C.ye.Li(x,"ngmy_worksheet_thumbs_v1",new B.fe9(),1)},
hGS(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cr(d))
if(y.i.b(d))return new Uint8Array(A.cr(J.eW(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cr(A.BI(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cr(d))
if(typeof d=="string")try{x=C.cB.aJ(d)
return x}catch(w){return v}return v},
aOB(d){return B.i_i(d)},
i_i(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aOB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aM4
x=7
return A.b(o==null?$.aM4=B.fRO():o,$async$aOB)
case 7:s=f
r=J.mz(s,"thumbs","readonly")
x=8
return A.b(C.iA.z9(J.mx(r,"thumbs"),m),$async$aOB)
case 8:q=f
x=9
return A.b(J.pk(r),$async$aOB)
case 9:m=B.hGS(q)
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
return A.i($async$aOB,w)},
fe9:function fe9(){},
hgv(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b0(d,14)},
cdG(d){var x=0,w=A.j(y.n),v,u
var $async$cdG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hgv(d)
if(u==null){v=null
x=1
break}v=B.cdF(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdG,w)},
cdF(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cdF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cdD.h(0,s)
if(u!=null&&!C.aG.gam(u)){v=u
x=1
break}x=3
return A.b(B.aOB(s),$async$cdF)
case 3:t=f
if(t!=null&&!C.aG.gam(t)){$.cdD.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdF,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aDi.prototype={
T(){return new B.bj3()}}
B.bj3.prototype={
a_(){this.a1()
this.Xz()},
br(d){this.bE(d)
if(d.c!==this.a.c)this.Xz()},
Xz(){var x=0,w=A.j(y.v),v=this,u
var $async$Xz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cdG(v.a.c),$async$Xz)
case 2:u=e
if(v.c!=null)v.m(new B.eDZ(v,u))
return A.h(null,w)}})
return A.i($async$Xz,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rW(C.A,s,C.fR,x.f,!0,v,new A.pz(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eDZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fe9.prototype={
$1(d){var x=y.h.a(new A.rv([],[]).pl(d.target.result,!1)),w=C.x6.t(x.objectStoreNames,"thumbs")
if(!w)C.x2.K7(x,"thumbs")},
$S:185};(function inheritance(){var x=a.inherit
x(B.aDi,A.ag)
x(B.bj3,A.ah)
x(B.eDZ,A.j3)
x(B.fe9,A.hT)})()
A.jS(b.typeUniverse,JSON.parse('{"aDi":{"ag":[],"r":[]},"bj3":{"ah":["aDi"]}}'))
var y={i:A.ax("tU"),h:A.ax("qN"),w:A.ax("ak<G>"),A:A.ax("lD"),o:A.ax("dD"),n:A.ax("dD?"),v:A.ax("~")};(function staticFields(){$.fdo=A.V(A.ax("n"),A.ax("lU<aC>"))
$.cdD=A.V(A.ax("n"),y.o)
$.aM4=null})()};
(a=>{a["hVwqEQXmQaWYuW+CUnx0o6iwLak="]=a.current})($__dart_deferred_initializers__);