((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bE4(d){return B.iiK(d)},
iiK(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bE4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bL(new A.bg(1000*(280+t*220)),null,u),$async$bE4)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bE4,w)},
bFf(d,e){return B.inO(d,e)},
inO(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bFf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.i2([d],"application/pdf")
p=y.b
r=A.aXS(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cw(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ek(A.jJ(p,"share",[q]),y.v),$async$bFf)
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
return A.i($async$bFf,w)},
aRu(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aRu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.i2([d],"application/pdf"))
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
return A.b(new A.q1(r,"load",!1,y.c).gH(0).de(0,C.en),$async$aRu)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.RO(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bE4(q),$async$aRu)
case 12:A.cy(C.qU,new B.fFj(r,s))
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
return A.i($async$aRu,w)},
fD5(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fD5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.i2([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.md.ro(t,u,"_blank")
A.cy(C.a1a,new B.fD6(s))
A.bL(C.qY,new B.fD7(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fD5,w)},
HH(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$HH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hIy(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aRu(d),$async$HH)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fD5(d,u),$async$HH)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bFf(d,u),$async$HH)
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
return A.b(B.bFf(d,u),$async$HH)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aRu(d),$async$HH)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fD5(d,u),$async$HH)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.i2([d],"application/pdf"))
s.toString
r=window
r.toString
C.md.ro(r,s,"_blank")
A.bL(C.qY,new B.fXI(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HH,w)},
fFj:function fFj(d,e){this.a=d
this.b=e},
fD6:function fD6(d){this.a=d},
fD7:function fD7(d){this.a=d},
fXI:function fXI(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[57],B)
D=c[330]
var z=a.updateTypes([])
B.fFj.prototype={
$0(){var x
try{C.a3i.fv(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fD6.prototype={
$0(){B.bE4(this.a)},
$S:0}
B.fD7.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fXI.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.hQ,[B.fFj,B.fD6,B.fD7,B.fXI])})()
var y={w:A.as("N<m9>"),h:A.as("N<aE>"),E:A.as("aE"),x:A.as("m"),c:A.as("q1<e1>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.am2=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["xycqCzzumUgs0VJwqDnNvJlE6Xo="]=a.current})($__dart_deferred_initializers__);