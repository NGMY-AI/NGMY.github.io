((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
byZ(d){return B.hRz(d)},
hRz(d){var x=0,w=A.j(y.v),v,u,t,s
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
bA4(d,e){return B.hWr(d,e)},
hWr(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
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
return A.b(A.ei(A.jW(p,"share",[q]),y.v),$async$bA4)
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
C.c3.eD(n,C.c3.ea(n,"opacity"),"0","")
n=o.style
n.toString
C.c3.eD(n,C.c3.ea(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q0(r,"load",!1,y.c).gI(0).d6(0,C.ee),$async$aNG)
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
case 12:A.cM(C.pL,new B.fll(r,s))
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
fjO(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fjO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hO([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lz.uF(t,u,"_blank")
A.cM(C.agp,new B.fjP(s))
A.bN(C.pQ,new B.fjQ(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fjO,w)},
Gp(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Gp=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hiV(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aNG(d),$async$Gp)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fjO(d,u),$async$Gp)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bA4(d,u),$async$Gp)
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
return A.b(B.bA4(d,u),$async$Gp)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aNG(d),$async$Gp)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fjO(d,u),$async$Gp)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hO([d],"application/pdf"))
s.toString
r=window
r.toString
C.lz.uF(r,s,"_blank")
A.bN(C.pQ,new B.fBh(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gp,w)},
fll:function fll(d,e){this.a=d
this.b=e},
fjP:function fjP(d){this.a=d},
fjQ:function fjQ(d){this.a=d},
fBh:function fBh(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[37],B)
D=c[222]
var z=a.updateTypes([])
B.fll.prototype={
$0(){var x
try{C.a_0.fe(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fjP.prototype={
$0(){B.byZ(this.a)},
$S:0}
B.fjQ.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fBh.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.j6,[B.fll,B.fjP,B.fjQ,B.fBh])})()
var y={w:A.ax("O<lw>"),h:A.ax("O<aC>"),E:A.ax("aC"),x:A.ax("n"),c:A.ax("q0<dX>"),e:A.ax("R"),b:A.ax("@"),v:A.ax("~")};(function constants(){D.afH=new A.w(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["EfXivysj/WIlkqWkmT+V7qMYmrE="]=a.current})($__dart_deferred_initializers__);