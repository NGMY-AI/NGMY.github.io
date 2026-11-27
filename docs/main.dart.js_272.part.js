((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEQ(d){return B.imR(d)},
imR(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bEQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bO(new A.bh(1000*(280+t*220)),null,u),$async$bEQ)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bEQ,w)},
bG3(d,e){return B.irV(d,e)},
irV(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bG3=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.i2([d],"application/pdf")
p=y.b
r=A.aYs(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cz(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ej(A.jJ(p,"share",[q]),y.v),$async$bG3)
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
return A.i($async$bG3,w)},
aS1(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aS1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.i2([d],"application/pdf"))
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
C.cg.eP(n,C.cg.ek(n,"opacity"),"0","")
n=o.style
n.toString
C.cg.eP(n,C.cg.ek(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q4(r,"load",!1,y.c).gG(0).d7(0,C.em),$async$aS1)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.S3(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bEQ(q),$async$aS1)
case 12:A.cC(C.r8,new B.fIF(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.m7(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aS1,w)},
fGr(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fGr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.i2([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.mh.rs(t,u,"_blank")
A.cC(C.a1v,new B.fGs(s))
A.bO(C.rb,new B.fGt(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGr,w)},
HO(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$HO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hMs(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aS1(d),$async$HO)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fGr(d,u),$async$HO)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bG3(d,u),$async$HO)
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
return A.b(B.bG3(d,u),$async$HO)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aS1(d),$async$HO)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fGr(d,u),$async$HO)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.i2([d],"application/pdf"))
s.toString
r=window
r.toString
C.mh.rs(r,s,"_blank")
A.bO(C.rb,new B.h0a(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HO,w)},
fIF:function fIF(d,e){this.a=d
this.b=e},
fGs:function fGs(d){this.a=d},
fGt:function fGt(d){this.a=d},
h0a:function h0a(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[50],B)
D=c[271]
var z=a.updateTypes([])
B.fIF.prototype={
$0(){var x
try{C.a3G.fl(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fGs.prototype={
$0(){B.bEQ(this.a)},
$S:0}
B.fGt.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.h0a.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iV,[B.fIF,B.fGs,B.fGt,B.h0a])})()
var y={w:A.as("N<me>"),h:A.as("N<aG>"),E:A.as("aG"),x:A.as("n"),c:A.as("q4<e5>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.amp=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["utSulUvrUseoXZF8GfZSyI3qBvc="]=a.current})($__dart_deferred_initializers__);