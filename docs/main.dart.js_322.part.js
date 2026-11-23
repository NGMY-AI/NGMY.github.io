((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bE7(d){return B.ij_(d)},
ij_(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bE7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bL(new A.bg(1000*(280+t*220)),null,u),$async$bE7)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bE7,w)},
bFk(d,e){return B.io3(d,e)},
io3(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bFk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.i3([d],"application/pdf")
p=y.b
r=A.aXU(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cw(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.el(A.jJ(p,"share",[q]),y.v),$async$bFk)
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
return A.i($async$bFk,w)},
aRw(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aRw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.i3([d],"application/pdf"))
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
C.c8.eO(n,C.c8.ek(n,"opacity"),"0","")
n=o.style
n.toString
C.c8.eO(n,C.c8.ek(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q2(r,"load",!1,y.c).gH(0).de(0,C.en),$async$aRw)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.RQ(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bE7(q),$async$aRw)
case 12:A.cy(C.qV,new B.fFt(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.m2(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aRw,w)},
fDf(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fDf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.i3([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.me.ro(t,u,"_blank")
A.cy(C.a1a,new B.fDg(s))
A.bL(C.qY,new B.fDh(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fDf,w)},
HI(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$HI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hIO(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aRw(d),$async$HI)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fDf(d,u),$async$HI)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bFk(d,u),$async$HI)
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
return A.b(B.bFk(d,u),$async$HI)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aRw(d),$async$HI)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fDf(d,u),$async$HI)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.i3([d],"application/pdf"))
s.toString
r=window
r.toString
C.me.ro(r,s,"_blank")
A.bL(C.qY,new B.fXS(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HI,w)},
fFt:function fFt(d,e){this.a=d
this.b=e},
fDg:function fDg(d){this.a=d},
fDh:function fDh(d){this.a=d},
fXS:function fXS(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[57],B)
D=c[330]
var z=a.updateTypes([])
B.fFt.prototype={
$0(){var x
try{C.a3i.fv(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fDg.prototype={
$0(){B.bE7(this.a)},
$S:0}
B.fDh.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fXS.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.hR,[B.fFt,B.fDg,B.fDh,B.fXS])})()
var y={w:A.ar("N<m9>"),h:A.ar("N<aE>"),E:A.ar("aE"),x:A.ar("m"),c:A.ar("q2<e1>"),e:A.ar("P"),b:A.ar("@"),v:A.ar("~")};(function constants(){D.am2=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["qh0Uf4FoEPaq3P6LQimTI8G0K2A="]=a.current})($__dart_deferred_initializers__);