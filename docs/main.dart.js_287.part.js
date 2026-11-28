((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFU(d){return B.isa(d)},
isa(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bFU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.bh(1000*(280+t*220)),null,u),$async$bFU)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bFU,w)},
bH9(d,e){return B.ixw(d,e)},
ixw(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bH9=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.i5([d],"application/pdf")
p=y.b
r=A.aZg(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cz(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.el(A.jO(p,"share",[q]),y.v),$async$bH9)
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
return A.i($async$bH9,w)},
aSN(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aSN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.i5([d],"application/pdf"))
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
C.ch.eT(n,C.ch.en(n,"opacity"),"0","")
n=o.style
n.toString
C.ch.eT(n,C.ch.en(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qb(r,"load",!1,y.c).gH(0).d4(0,C.ep),$async$aSN)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.Sn(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bFU(q),$async$aSN)
case 12:A.cE(C.rg,new B.fLO(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.mf(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSN,w)},
fJC(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fJC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.i5([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.ml.rK(t,u,"_blank")
A.cE(C.a1V,new B.fJD(s))
A.bN(C.rj,new B.fJE(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJC,w)},
HW(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$HW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hRi(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aSN(d),$async$HW)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fJC(d,u),$async$HW)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bH9(d,u),$async$HW)
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
return A.b(B.bH9(d,u),$async$HW)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aSN(d),$async$HW)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fJC(d,u),$async$HW)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.i5([d],"application/pdf"))
s.toString
r=window
r.toString
C.ml.rK(r,s,"_blank")
A.bN(C.rj,new B.h49(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HW,w)},
fLO:function fLO(d,e){this.a=d
this.b=e},
fJD:function fJD(d){this.a=d},
fJE:function fJE(d){this.a=d},
h49:function h49(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[50],B)
D=c[274]
var z=a.updateTypes([])
B.fLO.prototype={
$0(){var x
try{C.a44.fv(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fJD.prototype={
$0(){B.bFU(this.a)},
$S:0}
B.fJE.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.h49.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.j0,[B.fLO,B.fJD,B.fJE,B.h49])})()
var y={w:A.as("N<mm>"),h:A.as("N<aG>"),E:A.as("aG"),x:A.as("o"),c:A.as("qb<e8>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.an3=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["I0x0x+IK33my5FBvltHX51kGLT4="]=a.current})($__dart_deferred_initializers__);