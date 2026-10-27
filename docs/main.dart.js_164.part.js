((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bwP(d){return B.hCW(d)},
hCW(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bwP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bO(new A.b9(1000*(280+t*220)),null,u),$async$bwP)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bwP,w)},
bxV(d,e){return B.hHI(d,e)},
hHI(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bxV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hH([d],"application/pdf")
p=y.b
r=A.aS0(A.a([s],y.h),e,A.E(["type","application/pdf"],p,p))
q=A.cA(A.E(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ed(A.jP(p,"share",[q]),y.v),$async$bxV)
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
return A.i($async$bxV,w)},
aM2(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aM2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hH([d],"application/pdf"))
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
C.c_.er(n,C.c_.e_(n,"opacity"),"0","")
n=o.style
n.toString
C.c_.er(n,C.c_.e_(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.pD(r,"load",!1,y.c).gK(0).cK(0,C.ef),$async$aM2)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bwo(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bwP(q),$async$aM2)
case 12:A.cM(C.np,new B.f9b(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lJ(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aM2,w)},
f8l(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$f8l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hH([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.li.u6(t,u,"_blank")
A.cM(C.adg,new B.f8m(s))
A.bO(C.pd,new B.f8n(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f8l,w)},
Fz(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Fz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.h4A(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aM2(d),$async$Fz)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.f8l(d,u),$async$Fz)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bxV(d,u),$async$Fz)
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
return A.b(B.bxV(d,u),$async$Fz)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aM2(d),$async$Fz)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.f8l(d,u),$async$Fz)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hH([d],"application/pdf"))
s.toString
r=window
r.toString
C.li.u6(r,s,"_blank")
A.bO(C.pd,new B.fo2(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Fz,w)},
f9b:function f9b(d,e){this.a=d
this.b=e},
f8m:function f8m(d){this.a=d},
f8n:function f8n(d){this.a=d},
fo2:function fo2(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[36],B)
D=c[194]
var z=a.updateTypes([])
B.f9b.prototype={
$0(){var x
try{C.XC.f1(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.f8m.prototype={
$0(){B.bwP(this.a)},
$S:0}
B.f8n.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fo2.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.jp,[B.f9b,B.f8m,B.f8n,B.fo2])})()
var y={w:A.aA("P<ll>"),h:A.aA("P<aC>"),E:A.aA("aC"),x:A.aA("n"),c:A.aA("pD<dT>"),e:A.aA("R"),b:A.aA("@"),v:A.aA("~")};(function constants(){D.acC=new A.w(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["jD2vdZRx2g7t8/YHR6eLtrK+L9w="]=a.current})($__dart_deferred_initializers__);