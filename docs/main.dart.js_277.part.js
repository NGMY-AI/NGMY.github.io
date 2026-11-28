((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFU(d){return B.irD(d)},
irD(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bFU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bM(new A.bh(1000*(280+t*220)),null,u),$async$bFU)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bFU,w)},
bH8(d,e){return B.ix_(d,e)},
ix_(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bH8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.i4([d],"application/pdf")
p=y.b
r=A.aZf(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cz(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.el(A.jN(p,"share",[q]),y.v),$async$bH8)
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
return A.i($async$bH8,w)},
aSM(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aSM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.i4([d],"application/pdf"))
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
C.ci.eT(n,C.ci.en(n,"opacity"),"0","")
n=o.style
n.toString
C.ci.eT(n,C.ci.en(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q8(r,"load",!1,y.c).gH(0).d9(0,C.ep),$async$aSM)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.Sm(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bFU(q),$async$aSM)
case 12:A.cD(C.rg,new B.fLo(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.mf(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSM,w)},
fJa(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fJa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.i4([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.ml.rI(t,u,"_blank")
A.cD(C.a1S,new B.fJb(s))
A.bM(C.rj,new B.fJc(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJa,w)},
HY(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$HY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hQM(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aSM(d),$async$HY)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fJa(d,u),$async$HY)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bH8(d,u),$async$HY)
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
return A.b(B.bH8(d,u),$async$HY)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aSM(d),$async$HY)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fJa(d,u),$async$HY)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.i4([d],"application/pdf"))
s.toString
r=window
r.toString
C.ml.rI(r,s,"_blank")
A.bM(C.rj,new B.h3I(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HY,w)},
fLo:function fLo(d,e){this.a=d
this.b=e},
fJb:function fJb(d){this.a=d},
fJc:function fJc(d){this.a=d},
h3I:function h3I(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[50],B)
D=c[274]
var z=a.updateTypes([])
B.fLo.prototype={
$0(){var x
try{C.a41.fs(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fJb.prototype={
$0(){B.bFU(this.a)},
$S:0}
B.fJc.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.h3I.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.j0,[B.fLo,B.fJb,B.fJc,B.h3I])})()
var y={w:A.as("N<mm>"),h:A.as("N<aG>"),E:A.as("aG"),x:A.as("o"),c:A.as("q8<e8>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.amZ=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["l/WcE+OY5QwTBlqzni/us9vAO1c="]=a.current})($__dart_deferred_initializers__);