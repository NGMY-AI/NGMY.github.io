((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEX(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uE(d)
x.toString
return x}catch(w){return v}return v},
ikt(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fvr.h(0,v)
if(x!=null)return x
w=B.bEX(v)
if(w!=null){if($.fvr.a>64)$.fvr.a8(0)
$.fvr.n(0,v,w)}return w},
aRx(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.by(u,new B.aGw(i,j,f,e,g,h,v),C.aq)
x=B.ikt(i)
if(x!=null)return A.by(u,A.tL(C.A,v,C.hg,e,!0,f,x,!1,v,j),C.aq)
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
bne:function bne(){this.c=this.a=this.d=null},
eUn:function eUn(d,e){this.a=d
this.b=e},
hdp(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wT.GQ(x,"ngmy_worksheet_thumbs_v1",new B.fwc(),1)},
i53(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cc(d))
if(y.i.b(d))return new Uint8Array(A.cc(J.eD(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cc(A.wT(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cI.aN(d)
return x}catch(w){return v}return v},
aS9(d){return B.ipA(d)},
ipA(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aS9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPs
x=7
return A.b(o==null?$.aPs=B.hdp():o,$async$aS9)
case 7:s=f
r=J.mj(s,"thumbs","readonly")
x=8
return A.b(C.iA.xL(J.mi(r,"thumbs"),m),$async$aS9)
case 8:q=f
x=9
return A.b(J.ow(r),$async$aS9)
case 9:m=B.i53(q)
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
return A.i($async$aS9,w)},
fwc:function fwc(){},
hEv(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
coh(d){var x=0,w=A.j(y.n),v,u
var $async$coh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hEv(d)
if(u==null){v=null
x=1
break}v=B.cog(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coh,w)},
cog(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cog=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.coe.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aS9(s),$async$cog)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.coe.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cog,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGw.prototype={
S(){return new B.bne()}}
B.bne.prototype={
Y(){this.a4()
this.a0e()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0e()},
a0e(){var x=0,w=A.j(y.v),v=this,u
var $async$a0e=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.coh(v.a.c),$async$a0e)
case 2:u=e
if(v.c!=null)v.m(new B.eUn(v,u))
return A.h(null,w)}})
return A.i($async$a0e,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tL(C.A,s,C.hg,x.f,!0,v,new A.qc(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.d0.j(0.12)
v=t.a
u=v.r
v=v.w
return A.q(s,A.X(u,v==null?C.d0:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eUn.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fwc.prototype={
$1(d){var x=y.h.a(new A.qt([],[]).nY(d.target.result,!1)),w=C.wh.q(x.objectStoreNames,"thumbs")
if(!w)C.we.Gh(x,"thumbs")},
$S:168};(function inheritance(){var x=a.inherit
x(B.aGw,A.af)
x(B.bne,A.ah)
x(B.eUn,A.iJ)
x(B.fwc,A.ht)})()
A.iT(b.typeUniverse,JSON.parse('{"aGw":{"af":[],"v":[]},"bne":{"ah":["aGw"]}}'))
var y={i:A.at("uN"),h:A.at("rt"),w:A.at("ai<H>"),A:A.at("m4"),o:A.at("dK"),n:A.at("dK?"),v:A.at("~")};(function staticFields(){$.fvr=A.T(A.at("n"),A.at("mp<aE>"))
$.coe=A.T(A.at("n"),y.o)
$.aPs=null})()};
(a=>{a["+fdzvnW7sURFYyyASkhzKe/Qj+k="]=a.current})($__dart_deferred_initializers__);