((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bAb(d){return B.hX3(d)},
hX3(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bAb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bP(new A.b9(1000*(280+t*220)),null,u),$async$bAb)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bAb,w)},
bBh(d,e){return B.i10(d,e)},
i10(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bBh=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hK([d],"application/pdf")
p=y.b
r=A.aUU(A.a([s],y.h),e,A.G(["type","application/pdf"],p,p))
q=A.cz(A.G(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.eh(A.jT(p,"share",[q]),y.v),$async$bBh)
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
return A.i($async$bBh,w)},
aOG(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aOG=A.e(function(e,f){if(e===1){t.push(f)
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
C.c5.eL(n,C.c5.ee(n,"opacity"),"0","")
n=o.style
n.toString
C.c5.eL(n,C.c5.ee(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qb(r,"load",!1,y.c).gI(0).da(0,C.en),$async$aOG)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bzL(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bAb(q),$async$aOG)
case 12:A.cL(C.q2,new B.foF(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lA(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aOG,w)},
fmS(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fmS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lQ.qZ(t,u,"_blank")
A.cL(C.aiF,new B.fmT(s))
A.bP(C.q7,new B.fmU(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmS,w)},
GS(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$GS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hnQ(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aOG(d),$async$GS)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fmS(d,u),$async$GS)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bBh(d,u),$async$GS)
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
return A.b(B.bBh(d,u),$async$GS)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aOG(d),$async$GS)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fmS(d,u),$async$GS)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
s.toString
r=window
r.toString
C.lQ.qZ(r,s,"_blank")
A.bP(C.q7,new B.fFl(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GS,w)},
foF:function foF(d,e){this.a=d
this.b=e},
fmT:function fmT(d){this.a=d},
fmU:function fmU(d){this.a=d},
fFl:function fFl(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[40],B)
D=c[229]
var z=a.updateTypes([])
B.foF.prototype={
$0(){var x
try{C.a0s.fk(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fmT.prototype={
$0(){B.bAb(this.a)},
$S:0}
B.fmU.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fFl.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.jc,[B.foF,B.fmT,B.fmU,B.fFl])})()
var y={w:A.av("O<lI>"),h:A.av("O<aD>"),E:A.av("aD"),x:A.av("n"),c:A.av("qb<dW>"),e:A.av("R"),b:A.av("@"),v:A.av("~")};(function constants(){D.ahU=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["257a+CBbgqcEvw0P37v4jjBx2BM="]=a.current})($__dart_deferred_initializers__);