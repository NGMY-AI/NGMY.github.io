((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEU(d){return B.in2(d)},
in2(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bEU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bM(new A.bh(1000*(280+t*220)),null,u),$async$bEU)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bEU,w)},
bG7(d,e){return B.is6(d,e)},
is6(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bG7=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.i2([d],"application/pdf")
p=y.b
r=A.aYu(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cz(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ej(A.jK(p,"share",[q]),y.v),$async$bG7)
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
return A.i($async$bG7,w)},
aS4(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aS4=A.e(function(e,f){if(e===1){t.push(f)
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
return A.b(new A.q4(r,"load",!1,y.c).gG(0).d7(0,C.em),$async$aS4)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.S7(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bEU(q),$async$aS4)
case 12:A.cC(C.r9,new B.fIO(r,s))
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
return A.i($async$aS4,w)},
fGA(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fGA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.i2([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.mi.rs(t,u,"_blank")
A.cC(C.a1v,new B.fGB(s))
A.bM(C.rc,new B.fGC(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGA,w)},
HO(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$HO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hMC(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aS4(d),$async$HO)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fGA(d,u),$async$HO)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bG7(d,u),$async$HO)
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
return A.b(B.bG7(d,u),$async$HO)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aS4(d),$async$HO)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fGA(d,u),$async$HO)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.i2([d],"application/pdf"))
s.toString
r=window
r.toString
C.mi.rs(r,s,"_blank")
A.bM(C.rc,new B.h0j(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HO,w)},
fIO:function fIO(d,e){this.a=d
this.b=e},
fGB:function fGB(d){this.a=d},
fGC:function fGC(d){this.a=d},
h0j:function h0j(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[50],B)
D=c[271]
var z=a.updateTypes([])
B.fIO.prototype={
$0(){var x
try{C.a3G.fl(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fGB.prototype={
$0(){B.bEU(this.a)},
$S:0}
B.fGC.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.h0j.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iW,[B.fIO,B.fGB,B.fGC,B.h0j])})()
var y={w:A.as("N<me>"),h:A.as("N<aG>"),E:A.as("aG"),x:A.as("n"),c:A.as("q4<e6>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.amp=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["sokNkmLyCcjPfGEVtoPkeirsNuI="]=a.current})($__dart_deferred_initializers__);