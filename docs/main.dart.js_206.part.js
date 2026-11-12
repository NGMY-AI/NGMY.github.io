((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBW(d){return B.i6O(d)},
i6O(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bBW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bQ(new A.bd(1000*(280+t*220)),null,u),$async$bBW)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bBW,w)},
bD2(d,e){return B.ibP(d,e)},
ibP(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bD2=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hK([d],"application/pdf")
p=y.b
r=A.aWb(A.a([s],y.h),e,A.H(["type","application/pdf"],p,p))
q=A.cv(A.H(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ef(A.jL(p,"share",[q]),y.v),$async$bD2)
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
return A.i($async$bD2,w)},
aPU(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aPU=A.e(function(e,f){if(e===1){t.push(f)
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
C.c8.eJ(n,C.c8.ed(n,"opacity"),"0","")
n=o.style
n.toString
C.c8.eJ(n,C.c8.ed(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qm(r,"load",!1,y.c).gH(0).df(0,C.eh),$async$aPU)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.Ri(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bBW(q),$async$aPU)
case 12:A.cz(C.qp,new B.fxj(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lH(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPU,w)},
fvc(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fvc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lW.rj(t,u,"_blank")
A.cz(C.aky,new B.fvd(s))
A.bQ(C.qt,new B.fve(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fvc,w)},
Hl(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Hl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hxE(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aPU(d),$async$Hl)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fvc(d,u),$async$Hl)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bD2(d,u),$async$Hl)
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
return A.b(B.bD2(d,u),$async$Hl)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aPU(d),$async$Hl)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fvc(d,u),$async$Hl)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
s.toString
r=window
r.toString
C.lW.rj(r,s,"_blank")
A.bQ(C.qt,new B.fOF(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hl,w)},
fxj:function fxj(d,e){this.a=d
this.b=e},
fvd:function fvd(d){this.a=d},
fve:function fve(d){this.a=d},
fOF:function fOF(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[43],B)
D=c[233]
var z=a.updateTypes([])
B.fxj.prototype={
$0(){var x
try{C.a1u.fq(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fvd.prototype={
$0(){B.bBW(this.a)},
$S:0}
B.fve.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fOF.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iH,[B.fxj,B.fvd,B.fve,B.fOF])})()
var y={w:A.as("O<lP>"),h:A.as("O<aE>"),E:A.as("aE"),x:A.as("m"),c:A.as("qm<dZ>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.ajK=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["tGUfn80uhC8ytjaFOZ8V6LICu1A="]=a.current})($__dart_deferred_initializers__);