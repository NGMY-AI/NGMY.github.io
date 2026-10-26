((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bxO(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.tm(d)
x.toString
return x}catch(w){return v}return v},
hGk(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.f29.h(0,v)
if(x!=null)return x
w=B.bxO(v)
if(w!=null){if($.f29.a>64)$.f29.a8(0)
$.f29.m(0,v,w)}return w},
aLZ(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aBu(i,j,f,e,g,h,v),C.ap)
x=B.hGk(i)
if(x!=null)return A.bu(u,A.rx(C.B,v,C.fG,e,!0,f,x,!1,v,j),C.ap)
w=C.cS.j(0.15)
return A.p(v,A.V(g,h==null?C.cS:h,v,v,v,32),C.h,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aBu:function aBu(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgL:function bgL(){this.c=this.a=this.d=null},
etn:function etn(d,e){this.a=d
this.b=e},
fEc(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.b9("IndexedDB not available"))
return C.xi.Kl(x,"ngmy_worksheet_thumbs_v1",new B.f2V(),1)},
hsv(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cl(d))
if(y.i.b(d))return new Uint8Array(A.cl(J.eP(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cl(A.AU(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aE(d)
return x}catch(w){return v}return v},
aMB(d){return B.hLe(d)},
hLe(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aMB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aKa
x=7
return A.b(o==null?$.aKa=B.fEc():o,$async$aMB)
case 7:s=f
r=J.mf(s,"thumbs","readonly")
x=8
return A.b(C.il.yu(J.md(r,"thumbs"),m),$async$aMB)
case 8:q=f
x=9
return A.b(J.oZ(r),$async$aMB)
case 9:m=B.hsv(q)
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
return A.i($async$aMB,w)},
f2V:function f2V(){},
h2i(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.aV(d,14)},
ca7(d){var x=0,w=A.j(y.n),v,u
var $async$ca7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.h2i(d)
if(u==null){v=null
x=1
break}v=B.ca6(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ca7,w)},
ca6(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$ca6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.ca4.h(0,s)
if(u!=null&&!C.aD.gah(u)){v=u
x=1
break}x=3
return A.b(B.aMB(s),$async$ca6)
case 3:t=f
if(t!=null&&!C.aD.gah(t)){$.ca4.m(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ca6,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.aBu.prototype={
S(){return new B.bgL()}}
B.bgL.prototype={
Z(){this.a0()
this.Wh()},
bo(d){this.bA(d)
if(d.c!==this.a.c)this.Wh()},
Wh(){var x=0,w=A.j(y.v),v=this,u
var $async$Wh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.ca7(v.a.c),$async$Wh)
case 2:u=e
if(v.c!=null)v.n(new B.etn(v,u))
return A.h(null,w)}})
return A.i($async$Wh,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aD.gah(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.rx(C.B,s,C.fG,x.f,!0,v,new A.ph(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cS.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cS:v,s,s,s,32),C.h,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.etn.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.f2V.prototype={
$1(d){var x=y.h.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wb.q(x.objectStoreNames,"thumbs")
if(!w)C.w7.Jc(x,"thumbs")},
$S:180};(function inheritance(){var x=a.inherit
x(B.aBu,A.ae)
x(B.bgL,A.ag)
x(B.etn,A.jk)
x(B.f2V,A.i2)})()
A.kd(b.typeUniverse,JSON.parse('{"aBu":{"ae":[],"r":[]},"bgL":{"ag":["aBu"]}}'))
var y={i:A.aA("tt"),h:A.aA("qq"),w:A.aA("al<H>"),A:A.aA("lo"),o:A.aA("dz"),n:A.aA("dz?"),v:A.aA("~")};(function staticFields(){$.f29=A.Q(A.aA("n"),A.aA("lE<aC>"))
$.ca4=A.Q(A.aA("n"),y.o)
$.aKa=null})()};
(a=>{a["PTIg6rQLiQNKnbFcLMJR7iE3b6g="]=a.current})($__dart_deferred_initializers__);