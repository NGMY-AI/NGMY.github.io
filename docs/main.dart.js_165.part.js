((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bw5(d){return B.hzh(d)},
hzh(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bw5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.b8(1000*(280+t*220)),null,u),$async$bw5)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bw5,w)},
bxb(d,e){return B.hE3(d,e)},
hE3(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bxb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hF([d],"application/pdf")
p=y.b
r=A.aRm(A.a([s],y.h),e,A.E(["type","application/pdf"],p,p))
q=A.cx(A.E(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ec(A.jM(p,"share",[q]),y.v),$async$bxb)
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
return A.i($async$bxb,w)},
aLq(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aLq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hF([d],"application/pdf"))
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
C.bZ.er(n,C.bZ.e_(n,"opacity"),"0","")
n=o.style
n.toString
C.bZ.er(n,C.bZ.e_(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.pz(r,"load",!1,y.c).gL(0).cK(0,C.ee),$async$aLq)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bvF(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bw5(q),$async$aLq)
case 12:A.cP(C.no,new B.f6n(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lF(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aLq,w)},
f5x(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$f5x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hF([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lf.tV(t,u,"_blank")
A.cP(C.aci,new B.f5y(s))
A.bN(C.p7,new B.f5z(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f5x,w)},
Fn(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Fn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.h12(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aLq(d),$async$Fn)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.f5x(d,u),$async$Fn)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bxb(d,u),$async$Fn)
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
return A.b(B.bxb(d,u),$async$Fn)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aLq(d),$async$Fn)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.f5x(d,u),$async$Fn)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hF([d],"application/pdf"))
s.toString
r=window
r.toString
C.lf.tV(r,s,"_blank")
A.bN(C.p7,new B.fkU(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Fn,w)},
f6n:function f6n(d,e){this.a=d
this.b=e},
f5y:function f5y(d){this.a=d},
f5z:function f5z(d){this.a=d},
fkU:function fkU(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[36],B)
D=c[195]
var z=a.updateTypes([])
B.f6n.prototype={
$0(){var x
try{C.X5.f1(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.f5y.prototype={
$0(){B.bw5(this.a)},
$S:0}
B.f5z.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fkU.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.jl,[B.f6n,B.f5y,B.f5z,B.fkU])})()
var y={w:A.az("O<li>"),h:A.az("O<aB>"),E:A.az("aB"),x:A.az("n"),c:A.az("pz<dR>"),e:A.az("S"),b:A.az("@"),v:A.az("~")};(function constants(){D.abG=new A.w(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["H8mUuzdz081oIyjsXCtJXXjUKUs="]=a.current})($__dart_deferred_initializers__);