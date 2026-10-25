((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
buZ(d){return B.huc(d)},
huc(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$buZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bK(new A.b6(1000*(280+t*220)),null,u),$async$buZ)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$buZ,w)},
bw4(d,e){return B.hyR(d,e)},
hyR(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bw4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hC([d],"application/pdf")
p=y.b
r=A.aQx(A.a([s],y.h),e,A.D(["type","application/pdf"],p,p))
q=A.cr(A.D(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.e9(A.jH(p,"share",[q]),y.v),$async$bw4)
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
return A.i($async$bw4,w)},
aKC(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aKC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hC([d],"application/pdf"))
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
C.bW.er(n,C.bW.dY(n,"opacity"),"0","")
n=o.style
n.toString
C.bW.er(n,C.bW.dY(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.pu(r,"load",!1,y.c).gI(0).cI(0,C.ea),$async$aKC)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.buy(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.buZ(q),$async$aKC)
case 12:A.cV(C.nY,new B.f2B(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.ly(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKC,w)},
f1L(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$f1L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hC([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.l5.tQ(t,u,"_blank")
A.cV(C.abw,new B.f1M(s))
A.bK(C.oT,new B.f1N(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f1L,w)},
EX(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$EX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.fXg(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aKC(d),$async$EX)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.f1L(d,u),$async$EX)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bw4(d,u),$async$EX)
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
return A.b(B.bw4(d,u),$async$EX)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aKC(d),$async$EX)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.f1L(d,u),$async$EX)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hC([d],"application/pdf"))
s.toString
r=window
r.toString
C.l5.tQ(r,s,"_blank")
A.bK(C.oT,new B.fgF(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$EX,w)},
f2B:function f2B(d,e){this.a=d
this.b=e},
f1M:function f1M(d){this.a=d},
f1N:function f1N(d){this.a=d},
fgF:function fgF(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[35],B)
D=c[190]
var z=a.updateTypes([])
B.f2B.prototype={
$0(){var x
try{C.Wm.f1(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.f1M.prototype={
$0(){B.buZ(this.a)},
$S:0}
B.f1N.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fgF.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.jj,[B.f2B,B.f1M,B.f1N,B.fgF])})()
var y={w:A.az("M<lb>"),h:A.az("M<aC>"),E:A.az("aC"),x:A.az("n"),c:A.az("pu<dO>"),e:A.az("R"),b:A.az("@"),v:A.az("~")};(function constants(){D.aaW=new A.x(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["WJxE7NZiREOsXvLKGD02xNB4Db4="]=a.current})($__dart_deferred_initializers__);