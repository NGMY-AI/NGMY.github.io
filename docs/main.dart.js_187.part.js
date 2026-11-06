((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
byK(d){return B.hRu(d)},
hRu(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$byK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bM(new A.bb(1000*(280+t*220)),null,u),$async$byK)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$byK,w)},
bzQ(d,e){return B.hWq(d,e)},
hWq(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bzQ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hQ([d],"application/pdf")
p=y.b
r=A.aTO(A.a([s],y.h),e,A.F(["type","application/pdf"],p,p))
q=A.cz(A.F(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ei(A.k0(p,"share",[q]),y.v),$async$bzQ)
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
return A.i($async$bzQ,w)},
aNH(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aNH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hQ([d],"application/pdf"))
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
C.c2.eF(n,C.c2.eb(n,"opacity"),"0","")
n=o.style
n.toString
C.c2.eF(n,C.c2.eb(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q3(r,"load",!1,y.c).gH(0).d7(0,C.ei),$async$aNH)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.byj(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.byK(q),$async$aNH)
case 12:A.cM(C.pP,new B.fk9(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lV(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNH,w)},
fio(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fio=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hQ([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lD.qM(t,u,"_blank")
A.cM(C.ah0,new B.fip(s))
A.bM(C.pU,new B.fiq(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fio,w)},
Gz(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Gz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hiD(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aNH(d),$async$Gz)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fio(d,u),$async$Gz)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bzQ(d,u),$async$Gz)
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
return A.b(B.bzQ(d,u),$async$Gz)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aNH(d),$async$Gz)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fio(d,u),$async$Gz)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hQ([d],"application/pdf"))
s.toString
r=window
r.toString
C.lD.qM(r,s,"_blank")
A.bM(C.pU,new B.fAJ(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gz,w)},
fk9:function fk9(d,e){this.a=d
this.b=e},
fip:function fip(d){this.a=d},
fiq:function fiq(d){this.a=d},
fAJ:function fAJ(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[37],B)
D=c[220]
var z=a.updateTypes([])
B.fk9.prototype={
$0(){var x
try{C.a_t.ff(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fip.prototype={
$0(){B.byK(this.a)},
$S:0}
B.fiq.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fAJ.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.j9,[B.fk9,B.fip,B.fiq,B.fAJ])})()
var y={w:A.ax("O<ly>"),h:A.ax("O<aD>"),E:A.ax("aD"),x:A.ax("m"),c:A.ax("q3<dW>"),e:A.ax("R"),b:A.ax("@"),v:A.ax("~")};(function constants(){D.agh=new A.v(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["x1rFBijpABD92t9vkn7eFSLNSns="]=a.current})($__dart_deferred_initializers__);