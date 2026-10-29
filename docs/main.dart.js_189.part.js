((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
byZ(d){return B.hRI(d)},
hRI(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$byZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.ba(1000*(280+t*220)),null,u),$async$byZ)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$byZ,w)},
bA4(d,e){return B.hWA(d,e)},
hWA(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bA4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hO([d],"application/pdf")
p=y.b
r=A.aTL(A.a([s],y.h),e,A.F(["type","application/pdf"],p,p))
q=A.cz(A.F(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ei(A.jX(p,"share",[q]),y.v),$async$bA4)
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
return A.i($async$bA4,w)},
aNG(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aNG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hO([d],"application/pdf"))
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
C.c3.eC(n,C.c3.ea(n,"opacity"),"0","")
n=o.style
n.toString
C.c3.eC(n,C.c3.ea(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q0(r,"load",!1,y.c).gI(0).d6(0,C.ef),$async$aNG)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.byx(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.byZ(q),$async$aNG)
case 12:A.cM(C.pN,new B.flt(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lW(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNG,w)},
fjV(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fjV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hO([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lz.uG(t,u,"_blank")
A.cM(C.agu,new B.fjW(s))
A.bN(C.pS,new B.fjX(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fjV,w)},
Gq(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Gq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hj2(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aNG(d),$async$Gq)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fjV(d,u),$async$Gq)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bA4(d,u),$async$Gq)
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
return A.b(B.bA4(d,u),$async$Gq)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aNG(d),$async$Gq)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fjV(d,u),$async$Gq)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hO([d],"application/pdf"))
s.toString
r=window
r.toString
C.lz.uG(r,s,"_blank")
A.bN(C.pS,new B.fBp(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gq,w)},
flt:function flt(d,e){this.a=d
this.b=e},
fjW:function fjW(d){this.a=d},
fjX:function fjX(d){this.a=d},
fBp:function fBp(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[37],B)
D=c[222]
var z=a.updateTypes([])
B.flt.prototype={
$0(){var x
try{C.a_3.fe(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fjW.prototype={
$0(){B.byZ(this.a)},
$S:0}
B.fjX.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fBp.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.j7,[B.flt,B.fjW,B.fjX,B.fBp])})()
var y={w:A.ax("O<lw>"),h:A.ax("O<aD>"),E:A.ax("aD"),x:A.ax("n"),c:A.ax("q0<dX>"),e:A.ax("R"),b:A.ax("@"),v:A.ax("~")};(function constants(){D.afL=new A.v(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["NQM5fD2WLEF4gCof1P2NwAp4YEU="]=a.current})($__dart_deferred_initializers__);