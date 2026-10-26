((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bxI(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tk(d)
x.toString
return x}catch(w){return v}return v},
hFT(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f1K.h(0,v)
if(x!=null)return x
w=B.bxI(v)
if(w!=null){if($.f1K.a>64)$.f1K.a8(0)
$.f1K.m(0,v,w)}return w},
aLV(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aBo(i,j,f,e,g,h,v),C.ap)
x=B.hFT(i)
if(x!=null)return A.bu(u,A.rw(C.B,v,C.fP,e,!0,f,x,!1,v,j),C.ap)
w=C.cR.j(0.15)
return A.p(v,A.V(g,h==null?C.cR:h,v,v,v,32),C.h,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBo:function aBo(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgG:function bgG(){this.c=this.a=this.d=null},
esY:function esY(d,e){this.a=d
this.b=e},
fDP(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.b9("IndexedDB not available"))
return C.xi.Kk(x,"ngmy_worksheet_thumbs_v1",new B.f2v(),1)},
hs2(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cl(d))
if(y.i.b(d))return new Uint8Array(A.cl(J.eP(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cl(A.AU(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aE(d)
return x}catch(w){return v}return v},
aMx(d){return B.hKM(d)},
hKM(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aMx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aK5
x=7
return A.b(o==null?$.aK5=B.fDP():o,$async$aMx)
case 7:s=f
r=J.me(s,"thumbs","readonly")
x=8
return A.b(C.ik.ys(J.mc(r,"thumbs"),m),$async$aMx)
case 8:q=f
x=9
return A.b(J.oZ(r),$async$aMx)
case 9:m=B.hs2(q)
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
return A.i($async$aMx,w)},
f2v:function f2v(){},
h1S(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aV(d,14)},
ca0(d){var x=0,w=A.j(y.n),v,u
var $async$ca0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h1S(d)
if(u==null){v=null
x=1
break}v=B.ca_(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ca0,w)},
ca_(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$ca_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.c9Y.h(0,s)
if(u!=null&&!C.aD.gah(u)){v=u
x=1
break}x=3
return A.b(B.aMx(s),$async$ca_)
case 3:t=f
if(t!=null&&!C.aD.gah(t)){$.c9Y.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ca_,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aBo.prototype={
S(){return new B.bgG()}}
B.bgG.prototype={
Z(){this.a0()
this.Wf()},
bo(d){this.bz(d)
if(d.c!==this.a.c)this.Wf()},
Wf(){var x=0,w=A.j(y.v),v=this,u
var $async$Wf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.ca0(v.a.c),$async$Wf)
case 2:u=e
if(v.c!=null)v.n(new B.esY(v,u))
return A.h(null,w)}})
return A.i($async$Wf,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aD.gah(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rw(C.B,s,C.fP,x.f,!0,v,new A.pR(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cR.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cR:v,s,s,s,32),C.h,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.esY.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f2v.prototype={
$1(d){var x=y.h.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wa.q(x.objectStoreNames,"thumbs")
if(!w)C.w6.Ja(x,"thumbs")},
$S:182};(function inheritance(){var x=a.inherit
x(B.aBo,A.ae)
x(B.bgG,A.ag)
x(B.esY,A.jk)
x(B.f2v,A.i2)})()
A.kc(b.typeUniverse,JSON.parse('{"aBo":{"ae":[],"r":[]},"bgG":{"ag":["aBo"]}}'))
var y={i:A.aA("tr"),h:A.aA("qq"),w:A.aA("al<G>"),A:A.aA("lo"),o:A.aA("dz"),n:A.aA("dz?"),v:A.aA("~")};(function staticFields(){$.f1K=A.Q(A.aA("n"),A.aA("lE<aC>"))
$.c9Y=A.Q(A.aA("n"),y.o)
$.aK5=null})()};
(a=>{a["8+Z5Dd47DEQcgHSFOyNMRkUc+oc="]=a.current})($__dart_deferred_initializers__);