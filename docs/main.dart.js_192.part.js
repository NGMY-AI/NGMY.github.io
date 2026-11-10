((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bB9(d){return B.i07(d)},
i07(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bB9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bQ(new A.ba(1000*(280+t*220)),null,u),$async$bB9)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bB9,w)},
bCf(d,e){return B.i54(d,e)},
i54(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bCf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hL([d],"application/pdf")
p=y.b
r=A.aVD(A.a([s],y.h),e,A.G(["type","application/pdf"],p,p))
q=A.cA(A.G(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ec(A.jU(p,"share",[q]),y.v),$async$bCf)
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
return A.i($async$bCf,w)},
aPp(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aPp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hL([d],"application/pdf"))
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
C.c6.eI(n,C.c6.ec(n,"opacity"),"0","")
n=o.style
n.toString
C.c6.eI(n,C.c6.ec(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qf(r,"load",!1,y.c).gI(0).d7(0,C.ep),$async$aPp)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.QX(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bB9(q),$async$aPp)
case 12:A.cI(C.q6,new B.fsA(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lB(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPp,w)},
fqy(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fqy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hL([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lS.r0(t,u,"_blank")
A.cI(C.ajg,new B.fqz(s))
A.bQ(C.qa,new B.fqA(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqy,w)},
H2(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$H2=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hrS(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aPp(d),$async$H2)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fqy(d,u),$async$H2)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bCf(d,u),$async$H2)
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
return A.b(B.bCf(d,u),$async$H2)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aPp(d),$async$H2)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fqy(d,u),$async$H2)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hL([d],"application/pdf"))
s.toString
r=window
r.toString
C.lS.r0(r,s,"_blank")
A.bQ(C.qa,new B.fJi(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H2,w)},
fsA:function fsA(d,e){this.a=d
this.b=e},
fqz:function fqz(d){this.a=d},
fqA:function fqA(d){this.a=d},
fJi:function fJi(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[40],B)
D=c[226]
var z=a.updateTypes([])
B.fsA.prototype={
$0(){var x
try{C.a0N.fl(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fqz.prototype={
$0(){B.bB9(this.a)},
$S:0}
B.fqA.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fJi.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.jc,[B.fsA,B.fqz,B.fqA,B.fJi])})()
var y={w:A.aw("O<lJ>"),h:A.aw("O<aD>"),E:A.aw("aD"),x:A.aw("n"),c:A.aw("qf<dW>"),e:A.aw("R"),b:A.aw("@"),v:A.aw("~")};(function constants(){D.aiu=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["uBV0fQ7urYRADyQ27NlTju63S+c="]=a.current})($__dart_deferred_initializers__);