((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bET(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.uB(d)
x.toString
return x}catch(w){return v}return v},
ikd(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fvk.h(0,v)
if(x!=null)return x
w=B.bET(v)
if(w!=null){if($.fvk.a>64)$.fvk.a8(0)
$.fvk.n(0,v,w)}return w},
aRr(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.by(u,new B.aGw(i,j,f,e,g,h,v),C.aq)
x=B.ikd(i)
if(x!=null)return A.by(u,A.tJ(C.A,v,C.hf,e,!0,f,x,!1,v,j),C.aq)
w=C.d0.j(0.15)
return A.q(v,A.X(g,h==null?C.d0:h,v,v,v,32),C.f,v,v,new A.p(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGw:function aGw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bn9:function bn9(){this.c=this.a=this.d=null},
eUf:function eUf(d,e){this.a=d
this.b=e},
hdb(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zA.My(x,"ngmy_worksheet_thumbs_v1",new B.fw5(),1)},
i4O(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cb(d))
if(y.i.b(d))return new Uint8Array(A.cb(J.eD(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cb(A.wQ(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cI.aN(d)
return x}catch(w){return v}return v},
aS3(d){return B.ipi(d)},
ipi(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aS3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPq
x=7
return A.b(o==null?$.aPq=B.hdb():o,$async$aS3)
case 7:s=f
r=J.n2(s,"thumbs","readonly")
x=8
return A.b(C.j6.A3(J.n1(r,"thumbs"),m),$async$aS3)
case 8:q=f
x=9
return A.b(J.pX(r),$async$aS3)
case 9:m=B.i4O(q)
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
return A.i($async$aS3,w)},
fw5:function fw5(){},
hEf(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cob(d){var x=0,w=A.j(y.n),v,u
var $async$cob=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hEf(d)
if(u==null){v=null
x=1
break}v=B.coa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cob,w)},
coa(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$coa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.co8.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aS3(s),$async$coa)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.co8.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coa,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGw.prototype={
S(){return new B.bn9()}}
B.bn9.prototype={
Y(){this.a4()
this.a0f()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0f()},
a0f(){var x=0,w=A.j(y.v),v=this,u
var $async$a0f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cob(v.a.c),$async$a0f)
case 2:u=e
if(v.c!=null)v.m(new B.eUf(v,u))
return A.h(null,w)}})
return A.i($async$a0f,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tJ(C.A,s,C.hf,x.f,!0,v,new A.qa(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.d0.j(0.12)
v=t.a
u=v.r
v=v.w
return A.q(s,A.X(u,v==null?C.d0:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eUf.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fw5.prototype={
$1(d){var x=y.h.a(new A.r7([],[]).oL(d.target.result,!1)),w=C.yv.q(x.objectStoreNames,"thumbs")
if(!w)C.yr.Ll(x,"thumbs")},
$S:179};(function inheritance(){var x=a.inherit
x(B.aGw,A.af)
x(B.bn9,A.ah)
x(B.eUf,A.iJ)
x(B.fw5,A.ht)})()
A.iT(b.typeUniverse,JSON.parse('{"aGw":{"af":[],"v":[]},"bn9":{"ah":["aGw"]}}'))
var y={i:A.as("uK"),h:A.as("rs"),w:A.as("ai<H>"),A:A.as("m3"),o:A.as("dK"),n:A.as("dK?"),v:A.as("~")};(function staticFields(){$.fvk=A.T(A.as("n"),A.as("mm<aE>"))
$.co8=A.T(A.as("n"),y.o)
$.aPq=null})()};
(a=>{a["Bz4q5TXJZzXCD0EiV3qODWUU8t0="]=a.current})($__dart_deferred_initializers__);