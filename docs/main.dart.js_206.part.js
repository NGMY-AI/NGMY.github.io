((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBQ(d){return B.i67(d)},
i67(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bBQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bP(new A.bd(1000*(280+t*220)),null,u),$async$bBQ)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bBQ,w)},
bCX(d,e){return B.ib8(d,e)},
ib8(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bCX=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hK([d],"application/pdf")
p=y.b
r=A.aW6(A.a([s],y.h),e,A.I(["type","application/pdf"],p,p))
q=A.cv(A.I(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ef(A.jK(p,"share",[q]),y.v),$async$bCX)
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
return A.i($async$bCX,w)},
aPO(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aPO=A.e(function(e,f){if(e===1){t.push(f)
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
C.c8.eI(n,C.c8.ed(n,"opacity"),"0","")
n=o.style
n.toString
C.c8.eI(n,C.c8.ed(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qm(r,"load",!1,y.c).gH(0).df(0,C.eh),$async$aPO)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.Re(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bBQ(q),$async$aPO)
case 12:A.cB(C.qn,new B.fwR(r,s))
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
return A.i($async$aPO,w)},
fuK(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fuK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lW.rh(t,u,"_blank")
A.cB(C.aku,new B.fuL(s))
A.bP(C.qr,new B.fuM(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fuK,w)},
Hk(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Hk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hx3(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aPO(d),$async$Hk)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fuK(d,u),$async$Hk)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bCX(d,u),$async$Hk)
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
return A.b(B.bCX(d,u),$async$Hk)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aPO(d),$async$Hk)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fuK(d,u),$async$Hk)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
s.toString
r=window
r.toString
C.lW.rh(r,s,"_blank")
A.bP(C.qr,new B.fO9(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hk,w)},
fwR:function fwR(d,e){this.a=d
this.b=e},
fuL:function fuL(d){this.a=d},
fuM:function fuM(d){this.a=d},
fO9:function fO9(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[43],B)
D=c[233]
var z=a.updateTypes([])
B.fwR.prototype={
$0(){var x
try{C.a1u.fq(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fuL.prototype={
$0(){B.bBQ(this.a)},
$S:0}
B.fuM.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fO9.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iG,[B.fwR,B.fuL,B.fuM,B.fO9])})()
var y={w:A.as("O<lP>"),h:A.as("O<aF>"),E:A.as("aF"),x:A.as("m"),c:A.as("qm<dY>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.ajH=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["AaYhFxFLr7VD9f5WsydPqpLlsv4="]=a.current})($__dart_deferred_initializers__);