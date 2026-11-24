((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEg(d){return B.ijY(d)},
ijY(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bEg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bL(new A.bh(1000*(280+t*220)),null,u),$async$bEg)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bEg,w)},
bFu(d,e){return B.ip1(d,e)},
ip1(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bFu=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.i3([d],"application/pdf")
p=y.b
r=A.aXZ(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cy(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.em(A.jJ(p,"share",[q]),y.v),$async$bFu)
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
return A.i($async$bFu,w)},
aRA(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aRA=A.e(function(e,f){if(e===1){t.push(f)
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
C.cc.eO(n,C.cc.ek(n,"opacity"),"0","")
n=o.style
n.toString
C.cc.eO(n,C.cc.ek(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q2(r,"load",!1,y.c).gG(0).de(0,C.em),$async$aRA)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.RV(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bEg(q),$async$aRA)
case 12:A.cB(C.r_,new B.fGq(r,s))
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
return A.i($async$aRA,w)},
fEc(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fEc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.i3([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.md.ro(t,u,"_blank")
A.cB(C.a1d,new B.fEd(s))
A.bL(C.r2,new B.fEe(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEc,w)},
HJ(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$HJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hJL(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aRA(d),$async$HJ)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fEc(d,u),$async$HJ)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bFu(d,u),$async$HJ)
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
return A.b(B.bFu(d,u),$async$HJ)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aRA(d),$async$HJ)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fEc(d,u),$async$HJ)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.i3([d],"application/pdf"))
s.toString
r=window
r.toString
C.md.ro(r,s,"_blank")
A.bL(C.r2,new B.fYQ(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HJ,w)},
fGq:function fGq(d,e){this.a=d
this.b=e},
fEd:function fEd(d){this.a=d},
fEe:function fEe(d){this.a=d},
fYQ:function fYQ(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[57],B)
D=c[331]
var z=a.updateTypes([])
B.fGq.prototype={
$0(){var x
try{C.a3k.fv(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fEd.prototype={
$0(){B.bEg(this.a)},
$S:0}
B.fEe.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fYQ.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.hS,[B.fGq,B.fEd,B.fEe,B.fYQ])})()
var y={w:A.ar("N<m9>"),h:A.ar("N<aE>"),E:A.ar("aE"),x:A.ar("n"),c:A.ar("q2<e3>"),e:A.ar("P"),b:A.ar("@"),v:A.ar("~")};(function constants(){D.am2=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["w7otdoNFLR7QIs7hP2XbcPDb7b4="]=a.current})($__dart_deferred_initializers__);