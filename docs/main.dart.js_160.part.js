((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bvA(d){return B.hx0(d)},
hx0(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bvA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bK(new A.b7(1000*(280+t*220)),null,u),$async$bvA)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bvA,w)},
bwG(d,e){return B.hBH(d,e)},
hBH(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bwG=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hB([d],"application/pdf")
p=y.b
r=A.aQZ(A.a([s],y.h),e,A.E(["type","application/pdf"],p,p))
q=A.cu(A.E(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ea(A.jJ(p,"share",[q]),y.v),$async$bwG)
case 7:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$bwG,w)},
aL2(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aL2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hB([d],"application/pdf"))
p.toString
s=p
p=document
o=p.createElement("iframe")
n=o.style
n.position="fixed"
n=o.style
n.left="-10000px"
n=o.style
n.top="0"
n=o.style
n.width="900px"
n=o.style
n.height="1200px"
n=o.style
n.border="0"
n=o.style
n.toString
C.bW.er(n,C.bW.e_(n,"opacity"),"0","")
n=o.style
n.toString
C.bW.er(n,C.bW.e_(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.pv(r,"load",!1,y.c).gI(0).cJ(0,C.ea),$async$aL2)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bv9(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bvA(q),$async$aL2)
case 12:A.cV(C.nf,new B.f4w(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lC(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aL2,w)},
f3G(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$f3G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hB([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.l9.tT(t,u,"_blank")
A.cV(C.abE,new B.f3H(s))
A.bK(C.oV,new B.f3I(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f3G,w)},
F7(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$F7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.fZZ(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aL2(d),$async$F7)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.f3G(d,u),$async$F7)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bwG(d,u),$async$F7)
case 7:if(h){v=!0
x=1
break}v=!1
x=1
break
case 4:t=window.navigator.userAgent.toLowerCase()
s=!0
if(!C.a.q(t,"iphone"))if(!C.a.q(t,"ipad"))if(!C.a.q(t,"ipod"))s=C.a.q(t,"macintosh")&&C.a.q(t,"mobile")
q=s
if(q){x=8
break}else h=q
x=9
break
case 8:x=10
return A.b(B.bwG(d,u),$async$F7)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aL2(d),$async$F7)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.f3G(d,u),$async$F7)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hB([d],"application/pdf"))
s.toString
r=window
r.toString
C.l9.tT(r,s,"_blank")
A.bK(C.oV,new B.fj_(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$F7,w)},
f4w:function f4w(d,e){this.a=d
this.b=e},
f3H:function f3H(d){this.a=d},
f3I:function f3I(d){this.a=d},
fj_:function fj_(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[35],B)
D=c[192]
var z=a.updateTypes([])
B.f4w.prototype={
$0(){var x
try{C.Ws.f0(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.f3H.prototype={
$0(){B.bvA(this.a)},
$S:0}
B.f3I.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fj_.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.jk,[B.f4w,B.f3H,B.f3I,B.fj_])})()
var y={w:A.az("N<lf>"),h:A.az("N<aB>"),E:A.az("aB"),x:A.az("n"),c:A.az("pv<dQ>"),e:A.az("R"),b:A.az("@"),v:A.az("~")};(function constants(){D.ab4=new A.x(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["xHEo74yfZkqIy8Wl5KAZDGiIJVc="]=a.current})($__dart_deferred_initializers__);