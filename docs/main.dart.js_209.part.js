((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bD2(d){return B.ibU(d)},
ibU(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bD2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.bd(1000*(280+t*220)),null,u),$async$bD2)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bD2,w)},
bEb(d,e){return B.igU(d,e)},
igU(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bEb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hP([d],"application/pdf")
p=y.b
r=A.aX8(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cv(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.eg(A.jU(p,"share",[q]),y.v),$async$bEb)
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
return A.i($async$bEb,w)},
aQR(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aQR=A.e(function(e,f){if(e===1){t.push(f)
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
C.ca.eL(n,C.ca.ee(n,"opacity"),"0","")
n=o.style
n.toString
C.ca.eL(n,C.ca.ee(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qz(r,"load",!1,y.c).gH(0).dg(0,C.ei),$async$aQR)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.RA(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bD2(q),$async$aQR)
case 12:A.cz(C.qA,new B.fAp(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lO(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQR,w)},
fyc(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fyc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hP([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.m0.rp(t,u,"_blank")
A.cz(C.am0,new B.fyd(s))
A.bN(C.qE,new B.fye(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fyc,w)},
Hw(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Hw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hCi(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aQR(d),$async$Hw)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fyc(d,u),$async$Hw)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bEb(d,u),$async$Hw)
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
return A.b(B.bEb(d,u),$async$Hw)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aQR(d),$async$Hw)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fyc(d,u),$async$Hw)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hP([d],"application/pdf"))
s.toString
r=window
r.toString
C.m0.rp(r,s,"_blank")
A.bN(C.qE,new B.fS6(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hw,w)},
fAp:function fAp(d,e){this.a=d
this.b=e},
fyd:function fyd(d){this.a=d},
fye:function fye(d){this.a=d},
fS6:function fS6(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[44],B)
D=c[240]
var z=a.updateTypes([])
B.fAp.prototype={
$0(){var x
try{C.a2A.fs(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fyd.prototype={
$0(){B.bD2(this.a)},
$S:0}
B.fye.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fS6.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iR,[B.fAp,B.fyd,B.fye,B.fS6])})()
var y={w:A.at("O<lW>"),h:A.at("O<aF>"),E:A.at("aF"),x:A.at("n"),c:A.at("qz<e1>"),e:A.at("R"),b:A.at("@"),v:A.at("~")};(function constants(){D.ale=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["wR1rtk+kRwiFpyqcPYnMZ4xXny0="]=a.current})($__dart_deferred_initializers__);