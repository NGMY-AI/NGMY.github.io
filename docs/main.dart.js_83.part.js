((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bxu(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tj(d)
x.toString
return x}catch(w){return v}return v},
hEK(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f0T.h(0,v)
if(x!=null)return x
w=B.bxu(v)
if(w!=null){if($.f0T.a>64)$.f0T.a8(0)
$.f0T.m(0,v,w)}return w},
aLN(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aBf(i,j,f,e,g,h,v),C.ap)
x=B.hEK(i)
if(x!=null)return A.bw(u,A.rv(C.C,v,C.fO,e,!0,f,x,!1,v,j),C.ap)
w=C.cO.j(0.15)
return A.p(v,A.U(g,h==null?C.cO:h,v,v,v,32),C.i,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBf:function aBf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgu:function bgu(){this.c=this.a=this.d=null},
esb:function esb(d,e){this.a=d
this.b=e},
fCJ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.ba("IndexedDB not available"))
return C.xc.Kd(x,"ngmy_worksheet_thumbs_v1",new B.f1E(),1)},
hqV(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ck(d))
if(y.i.b(d))return new Uint8Array(A.ck(J.eQ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ck(A.AP(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ck(d))
if(typeof d=="string")try{x=C.cw.aF(d)
return x}catch(w){return v}return v},
aMp(d){return B.hJC(d)},
hJC(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aMp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aJW
x=7
return A.b(o==null?$.aJW=B.fCJ():o,$async$aMp)
case 7:s=f
r=J.mb(s,"thumbs","readonly")
x=8
return A.b(C.ih.yo(J.m9(r,"thumbs"),m),$async$aMp)
case 8:q=f
x=9
return A.b(J.oX(r),$async$aMp)
case 9:m=B.hqV(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a5(l)
$.ak.$1("[worksheet-thumb idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMp,w)},
f1E:function f1E(){},
h0K(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aV(d,14)},
c9E(d){var x=0,w=A.j(y.n),v,u
var $async$c9E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h0K(d)
if(u==null){v=null
x=1
break}v=B.c9D(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9E,w)},
c9D(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$c9D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.c9B.h(0,s)
if(u!=null&&!C.aD.gag(u)){v=u
x=1
break}x=3
return A.b(B.aMp(s),$async$c9D)
case 3:t=f
if(t!=null&&!C.aD.gag(t)){$.c9B.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9D,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aBf.prototype={
S(){return new B.bgu()}}
B.bgu.prototype={
Z(){this.a0()
this.W2()},
bo(d){this.bz(d)
if(d.c!==this.a.c)this.W2()},
W2(){var x=0,w=A.j(y.v),v=this,u
var $async$W2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.c9E(v.a.c),$async$W2)
case 2:u=e
if(v.c!=null)v.n(new B.esb(v,u))
return A.h(null,w)}})
return A.i($async$W2,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aD.gag(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rv(C.C,s,C.fO,x.f,!0,v,new A.qB(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cO.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.U(u,v==null?C.cO:v,s,s,s,32),C.i,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.esb.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f1E.prototype={
$1(d){var x=y.h.a(new A.r4([],[]).oN(d.target.result,!1)),w=C.w4.q(x.objectStoreNames,"thumbs")
if(!w)C.w0.J4(x,"thumbs")},
$S:180};(function inheritance(){var x=a.inherit
x(B.aBf,A.ae)
x(B.bgu,A.ag)
x(B.esb,A.jj)
x(B.f1E,A.i2)})()
A.ka(b.typeUniverse,JSON.parse('{"aBf":{"ae":[],"r":[]},"bgu":{"ag":["aBf"]}}'))
var y={i:A.az("tp"),h:A.az("qm"),w:A.az("al<G>"),A:A.az("lm"),o:A.az("dQ"),n:A.az("dQ?"),v:A.az("~")};(function staticFields(){$.f0T=A.Q(A.az("n"),A.az("lD<aC>"))
$.c9B=A.Q(A.az("n"),y.o)
$.aJW=null})()};
(a=>{a["uzKnIaqq1VwkXFJDBCcARU6u3bI="]=a.current})($__dart_deferred_initializers__);