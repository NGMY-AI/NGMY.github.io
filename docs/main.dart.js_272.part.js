((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEL(d){return B.imI(d)},
imI(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bEL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bO(new A.bh(1000*(280+t*220)),null,u),$async$bEL)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bEL,w)},
bFZ(d,e){return B.irM(d,e)},
irM(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bFZ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.i2([d],"application/pdf")
p=y.b
r=A.aYo(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cz(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ej(A.jJ(p,"share",[q]),y.v),$async$bFZ)
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
return A.i($async$bFZ,w)},
aRZ(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aRZ=A.e(function(e,f){if(e===1){t.push(f)
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
return A.b(new A.q4(r,"load",!1,y.c).gG(0).d7(0,C.em),$async$aRZ)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.S2(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bEL(q),$async$aRZ)
case 12:A.cC(C.r7,new B.fIy(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.m6(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aRZ,w)},
fGk(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fGk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.i2([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.mh.rr(t,u,"_blank")
A.cC(C.a1v,new B.fGl(s))
A.bO(C.ra,new B.fGm(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGk,w)},
HN(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$HN=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hMl(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aRZ(d),$async$HN)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fGk(d,u),$async$HN)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bFZ(d,u),$async$HN)
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
return A.b(B.bFZ(d,u),$async$HN)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aRZ(d),$async$HN)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fGk(d,u),$async$HN)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.i2([d],"application/pdf"))
s.toString
r=window
r.toString
C.mh.rr(r,s,"_blank")
A.bO(C.ra,new B.h03(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HN,w)},
fIy:function fIy(d,e){this.a=d
this.b=e},
fGl:function fGl(d){this.a=d},
fGm:function fGm(d){this.a=d},
h03:function h03(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[50],B)
D=c[271]
var z=a.updateTypes([])
B.fIy.prototype={
$0(){var x
try{C.a3G.fl(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fGl.prototype={
$0(){B.bEL(this.a)},
$S:0}
B.fGm.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.h03.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iV,[B.fIy,B.fGl,B.fGm,B.h03])})()
var y={w:A.as("N<md>"),h:A.as("N<aG>"),E:A.as("aG"),x:A.as("n"),c:A.as("q4<e5>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.amp=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["9V5GXm3jVT7edIGUCsSHIC0fdqQ="]=a.current})($__dart_deferred_initializers__);