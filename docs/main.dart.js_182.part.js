((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bxJ(d){return B.hJH(d)},
hJH(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bxJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.b9(1000*(280+t*220)),null,u),$async$bxJ)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bxJ,w)},
byP(d,e){return B.hOw(d,e)},
hOw(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$byP=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hK([d],"application/pdf")
p=y.b
r=A.aSL(A.a([s],y.h),e,A.E(["type","application/pdf"],p,p))
q=A.cA(A.E(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ef(A.jS(p,"share",[q]),y.v),$async$byP)
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
return A.i($async$byP,w)},
aMK(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aMK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
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
C.c0.ew(n,C.c0.e4(n,"opacity"),"0","")
n=o.style
n.toString
C.c0.ew(n,C.c0.e4(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.pN(r,"load",!1,y.c).gL(0).cN(0,C.ed),$async$aMK)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bxh(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bxJ(q),$async$aMK)
case 12:A.cM(C.nB,new B.feU(r,s))
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
return A.i($async$aMK,w)},
fe0(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fe0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.ll.uo(t,u,"_blank")
A.cM(C.aeU,new B.fe1(s))
A.bN(C.po,new B.fe2(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fe0,w)},
G_(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$G_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hbe(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aMK(d),$async$G_)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fe0(d,u),$async$G_)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.byP(d,u),$async$G_)
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
return A.b(B.byP(d,u),$async$G_)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aMK(d),$async$G_)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fe0(d,u),$async$G_)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
s.toString
r=window
r.toString
C.ll.uo(r,s,"_blank")
A.bN(C.po,new B.fuk(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$G_,w)},
feU:function feU(d,e){this.a=d
this.b=e},
fe1:function fe1(d){this.a=d},
fe2:function fe2(d){this.a=d},
fuk:function fuk(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[37],B)
D=c[214]
var z=a.updateTypes([])
B.feU.prototype={
$0(){var x
try{C.Z4.f6(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fe1.prototype={
$0(){B.bxJ(this.a)},
$S:0}
B.fe2.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fuk.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.j2,[B.feU,B.fe1,B.fe2,B.fuk])})()
var y={w:A.ax("P<lq>"),h:A.ax("P<aC>"),E:A.ax("aC"),x:A.ax("n"),c:A.ax("pN<dV>"),e:A.ax("R"),b:A.ax("@"),v:A.ax("~")};(function constants(){D.aee=new A.w(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["S1kgSHd78YKPcEUHEcQW9o5DCQw="]=a.current})($__dart_deferred_initializers__);