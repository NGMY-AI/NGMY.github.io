((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBR(d){return B.i4K(d)},
i4K(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bBR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bP(new A.bc(1000*(280+t*220)),null,u),$async$bBR)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bBR,w)},
bCX(d,e){return B.i9L(d,e)},
i9L(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bCX=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hP([d],"application/pdf")
p=y.b
r=A.aW3(A.a([s],y.h),e,A.H(["type","application/pdf"],p,p))
q=A.cC(A.H(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ed(A.k0(p,"share",[q]),y.v),$async$bCX)
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
return A.i($async$bCX,w)},
aPL(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aPL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hP([d],"application/pdf"))
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
C.c7.eI(n,C.c7.ed(n,"opacity"),"0","")
n=o.style
n.toString
C.c7.eI(n,C.c7.ed(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.ql(r,"load",!1,y.c).gI(0).dc(0,C.eq),$async$aPL)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.R4(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bBR(q),$async$aPL)
case 12:A.cD(C.qg,new B.fwn(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lG(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPL,w)},
fuf(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fuf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hP([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lT.r8(t,u,"_blank")
A.cD(C.akl,new B.fug(s))
A.bP(C.qk,new B.fuh(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fuf,w)},
H9(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$H9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hwa(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aPL(d),$async$H9)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fuf(d,u),$async$H9)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bCX(d,u),$async$H9)
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
return A.b(B.bCX(d,u),$async$H9)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aPL(d),$async$H9)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fuf(d,u),$async$H9)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hP([d],"application/pdf"))
s.toString
r=window
r.toString
C.lT.r8(r,s,"_blank")
A.bP(C.qk,new B.fNv(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H9,w)},
fwn:function fwn(d,e){this.a=d
this.b=e},
fug:function fug(d){this.a=d},
fuh:function fuh(d){this.a=d},
fNv:function fNv(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[43],B)
D=c[234]
var z=a.updateTypes([])
B.fwn.prototype={
$0(){var x
try{C.a1h.fn(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fug.prototype={
$0(){B.bBR(this.a)},
$S:0}
B.fuh.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fNv.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iI,[B.fwn,B.fug,B.fuh,B.fNv])})()
var y={w:A.as("O<lP>"),h:A.as("O<aD>"),E:A.as("aD"),x:A.as("m"),c:A.as("ql<dZ>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.ajx=new A.t(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["mwBx7cluL7hR5KejC9cQEn+9j3w="]=a.current})($__dart_deferred_initializers__);