((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bCE(d){return B.iaL(d)},
iaL(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bCE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.bd(1000*(280+t*220)),null,u),$async$bCE)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bCE,w)},
bDN(d,e){return B.ifJ(d,e)},
ifJ(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bDN=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hP([d],"application/pdf")
p=y.b
r=A.aWL(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cv(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.eg(A.jR(p,"share",[q]),y.v),$async$bDN)
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
return A.i($async$bDN,w)},
aQt(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aQt=A.e(function(e,f){if(e===1){t.push(f)
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
C.c9.eN(n,C.c9.eg(n,"opacity"),"0","")
n=o.style
n.toString
C.c9.eN(n,C.c9.eg(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qu(r,"load",!1,y.c).gH(0).dg(0,C.ej),$async$aQt)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.Ru(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bCE(q),$async$aQt)
case 12:A.cy(C.qz,new B.fzI(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lN(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQt,w)},
fxw(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fxw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hP([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.m_.rn(t,u,"_blank")
A.cy(C.alH,new B.fxx(s))
A.bN(C.qD,new B.fxy(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fxw,w)},
Hq(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Hq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hBb(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aQt(d),$async$Hq)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fxw(d,u),$async$Hq)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bDN(d,u),$async$Hq)
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
return A.b(B.bDN(d,u),$async$Hq)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aQt(d),$async$Hq)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fxw(d,u),$async$Hq)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hP([d],"application/pdf"))
s.toString
r=window
r.toString
C.m_.rn(r,s,"_blank")
A.bN(C.qD,new B.fRm(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hq,w)},
fzI:function fzI(d,e){this.a=d
this.b=e},
fxx:function fxx(d){this.a=d},
fxy:function fxy(d){this.a=d},
fRm:function fRm(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[43],B)
D=c[237]
var z=a.updateTypes([])
B.fzI.prototype={
$0(){var x
try{C.a2t.fs(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fxx.prototype={
$0(){B.bCE(this.a)},
$S:0}
B.fxy.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fRm.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.iO,[B.fzI,B.fxx,B.fxy,B.fRm])})()
var y={w:A.at("O<lV>"),h:A.at("O<aE>"),E:A.at("aE"),x:A.at("n"),c:A.at("qu<e_>"),e:A.at("R"),b:A.at("@"),v:A.at("~")};(function constants(){D.akW=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["whalk7fEuECw2io0/KBJ4FuxNnY="]=a.current})($__dart_deferred_initializers__);