((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
byI(d){return B.hRl(d)},
hRl(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$byI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bM(new A.ba(1000*(280+t*220)),null,u),$async$byI)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$byI,w)},
bzO(d,e){return B.hWg(d,e)},
hWg(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bzO=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hR([d],"application/pdf")
p=y.b
r=A.aTM(A.a([s],y.h),e,A.F(["type","application/pdf"],p,p))
q=A.cz(A.F(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ei(A.k0(p,"share",[q]),y.v),$async$bzO)
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
return A.i($async$bzO,w)},
aNF(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aNF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hR([d],"application/pdf"))
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
return A.b(new A.q5(r,"load",!1,y.c).gH(0).d8(0,C.ei),$async$aNF)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.byh(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.byI(q),$async$aNF)
case 12:A.cM(C.pQ,new B.fjV(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lY(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNF,w)},
fia(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fia=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hR([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lF.qN(t,u,"_blank")
A.cM(C.agZ,new B.fib(s))
A.bM(C.pV,new B.fic(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fia,w)},
Gz(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Gz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hiu(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aNF(d),$async$Gz)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fia(d,u),$async$Gz)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bzO(d,u),$async$Gz)
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
return A.b(B.bzO(d,u),$async$Gz)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aNF(d),$async$Gz)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fia(d,u),$async$Gz)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hR([d],"application/pdf"))
s.toString
r=window
r.toString
C.lF.qN(r,s,"_blank")
A.bM(C.pV,new B.fAy(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gz,w)},
fjV:function fjV(d,e){this.a=d
this.b=e},
fib:function fib(d){this.a=d},
fic:function fic(d){this.a=d},
fAy:function fAy(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[37],B)
D=c[220]
var z=a.updateTypes([])
B.fjV.prototype={
$0(){var x
try{C.a_s.fg(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fib.prototype={
$0(){B.byI(this.a)},
$S:0}
B.fic.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fAy.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.ja,[B.fjV,B.fib,B.fic,B.fAy])})()
var y={w:A.ax("O<lz>"),h:A.ax("O<aD>"),E:A.ax("aD"),x:A.ax("m"),c:A.ax("q5<dW>"),e:A.ax("R"),b:A.ax("@"),v:A.ax("~")};(function constants(){D.agf=new A.v(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["pAQY/4ocj1vYBstcVM0QppNDH9s="]=a.current})($__dart_deferred_initializers__);