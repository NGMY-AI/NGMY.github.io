((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bvJ(d){return B.hxJ(d)},
hxJ(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bvJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bM(new A.b8(1000*(280+t*220)),null,u),$async$bvJ)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bvJ,w)},
bwP(d,e){return B.hCr(d,e)},
hCr(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bwP=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hD([d],"application/pdf")
p=y.b
r=A.aR6(A.a([s],y.h),e,A.E(["type","application/pdf"],p,p))
q=A.cv(A.E(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ea(A.jL(p,"share",[q]),y.v),$async$bwP)
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
return A.i($async$bwP,w)},
aLb(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aLb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hD([d],"application/pdf"))
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
C.bX.er(n,C.bX.e_(n,"opacity"),"0","")
n=o.style
n.toString
C.bX.er(n,C.bX.e_(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.px(r,"load",!1,y.c).gK(0).cJ(0,C.ea),$async$aLb)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bvi(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bvJ(q),$async$aLb)
case 12:A.cN(C.nh,new B.f54(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lE(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aLb,w)},
f4e(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$f4e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hD([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.l9.tT(t,u,"_blank")
A.cN(C.abS,new B.f4f(s))
A.bM(C.oY,new B.f4g(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f4e,w)},
Fa(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Fa=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.h_E(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aLb(d),$async$Fa)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.f4e(d,u),$async$Fa)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bwP(d,u),$async$Fa)
case 7:if(h){v=!0
x=1
break}v=!1
x=1
break
case 4:t=window.navigator.userAgent.toLowerCase()
s=!0
if(!C.a.t(t,"iphone"))if(!C.a.t(t,"ipad"))if(!C.a.t(t,"ipod"))s=C.a.t(t,"macintosh")&&C.a.t(t,"mobile")
q=s
if(q){x=8
break}else h=q
x=9
break
case 8:x=10
return A.b(B.bwP(d,u),$async$Fa)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aLb(d),$async$Fa)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.f4e(d,u),$async$Fa)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hD([d],"application/pdf"))
s.toString
r=window
r.toString
C.l9.tT(r,s,"_blank")
A.bM(C.oY,new B.fjz(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Fa,w)},
f54:function f54(d,e){this.a=d
this.b=e},
f4f:function f4f(d){this.a=d},
f4g:function f4g(d){this.a=d},
fjz:function fjz(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[35],B)
D=c[192]
var z=a.updateTypes([])
B.f54.prototype={
$0(){var x
try{C.WI.f0(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.f4f.prototype={
$0(){B.bvJ(this.a)},
$S:0}
B.f4g.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fjz.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.jk,[B.f54,B.f4f,B.f4g,B.fjz])})()
var y={w:A.az("O<lh>"),h:A.az("O<aB>"),E:A.az("aB"),x:A.az("n"),c:A.az("px<dR>"),e:A.az("T"),b:A.az("@"),v:A.az("~")};(function constants(){D.abi=new A.w(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["EU7l9/nl4uXKQJqMNEy5k+k3h54="]=a.current})($__dart_deferred_initializers__);