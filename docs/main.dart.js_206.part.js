((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bCp(d){return B.i9x(d)},
i9x(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bCp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bQ(new A.bd(1000*(280+t*220)),null,u),$async$bCp)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bCp,w)},
bDw(d,e){return B.iew(d,e)},
iew(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bDw=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hM([d],"application/pdf")
p=y.b
r=A.aWz(A.a([s],y.h),e,A.I(["type","application/pdf"],p,p))
q=A.cv(A.I(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ef(A.jP(p,"share",[q]),y.v),$async$bDw)
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
return A.i($async$bDw,w)},
aQh(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aQh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hM([d],"application/pdf"))
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
C.c9.eM(n,C.c9.ee(n,"opacity"),"0","")
n=o.style
n.toString
C.c9.eM(n,C.c9.ee(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qs(r,"load",!1,y.c).gH(0).dh(0,C.em),$async$aQh)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.Ry(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bCp(q),$async$aQh)
case 12:A.cy(C.qw,new B.fyT(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lL(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQh,w)},
fwF(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fwF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hM([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lZ.rl(t,u,"_blank")
A.cy(C.akV,new B.fwG(s))
A.bQ(C.qA,new B.fwH(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fwF,w)},
Hw(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Hw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hzY(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aQh(d),$async$Hw)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fwF(d,u),$async$Hw)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bDw(d,u),$async$Hw)
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
return A.b(B.bDw(d,u),$async$Hw)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aQh(d),$async$Hw)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fwF(d,u),$async$Hw)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hM([d],"application/pdf"))
s.toString
r=window
r.toString
C.lZ.rl(r,s,"_blank")
A.bQ(C.qA,new B.fQw(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hw,w)},
fyT:function fyT(d,e){this.a=d
this.b=e},
fwG:function fwG(d){this.a=d},
fwH:function fwH(d){this.a=d},
fQw:function fQw(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[44],B)
D=c[235]
var z=a.updateTypes([])
B.fyT.prototype={
$0(){var x
try{C.a1V.fs(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fwG.prototype={
$0(){B.bCp(this.a)},
$S:0}
B.fwH.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fQw.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iJ,[B.fyT,B.fwG,B.fwH,B.fQw])})()
var y={w:A.as("O<lT>"),h:A.as("O<aE>"),E:A.as("aE"),x:A.as("n"),c:A.as("qs<e_>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.ak9=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["34YnjuY51dHiq5i047Ip1WmAbqQ="]=a.current})($__dart_deferred_initializers__);