((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bCV(d){return B.ibn(d)},
ibn(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bCV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.bd(1000*(280+t*220)),null,u),$async$bCV)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bCV,w)},
bE3(d,e){return B.igl(d,e)},
igl(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bE3=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hO([d],"application/pdf")
p=y.b
r=A.aX0(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cv(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.eg(A.jS(p,"share",[q]),y.v),$async$bE3)
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
return A.i($async$bE3,w)},
aQK(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aQK=A.e(function(e,f){if(e===1){t.push(f)
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
C.c9.eL(n,C.c9.ee(n,"opacity"),"0","")
n=o.style
n.toString
C.c9.eL(n,C.c9.ee(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qw(r,"load",!1,y.c).gH(0).dg(0,C.ei),$async$aQK)
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
return A.b(B.bCV(q),$async$aQK)
case 12:A.cz(C.qz,new B.fAd(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lM(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQK,w)},
fy1(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fy1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hO([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.m0.rp(t,u,"_blank")
A.cz(C.alP,new B.fy2(s))
A.bN(C.qD,new B.fy3(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fy1,w)},
Hu(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Hu=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hBN(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aQK(d),$async$Hu)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fy1(d,u),$async$Hu)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bE3(d,u),$async$Hu)
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
return A.b(B.bE3(d,u),$async$Hu)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aQK(d),$async$Hu)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fy1(d,u),$async$Hu)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hO([d],"application/pdf"))
s.toString
r=window
r.toString
C.m0.rp(r,s,"_blank")
A.bN(C.qD,new B.fRS(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hu,w)},
fAd:function fAd(d,e){this.a=d
this.b=e},
fy2:function fy2(d){this.a=d},
fy3:function fy3(d){this.a=d},
fRS:function fRS(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[44],B)
D=c[240]
var z=a.updateTypes([])
B.fAd.prototype={
$0(){var x
try{C.a2y.fs(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fy2.prototype={
$0(){B.bCV(this.a)},
$S:0}
B.fy3.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fRS.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.iO,[B.fAd,B.fy2,B.fy3,B.fRS])})()
var y={w:A.at("O<lU>"),h:A.at("O<aF>"),E:A.at("aF"),x:A.at("n"),c:A.at("qw<e0>"),e:A.at("R"),b:A.at("@"),v:A.at("~")};(function constants(){D.al2=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["7M0Wmxlgp23E4WM+6fcUdFOCtD4="]=a.current})($__dart_deferred_initializers__);