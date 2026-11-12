((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bCi(d){return B.i8O(d)},
i8O(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bCi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bQ(new A.bd(1000*(280+t*220)),null,u),$async$bCi)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bCi,w)},
bDp(d,e){return B.idN(d,e)},
idN(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bDp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hK([d],"application/pdf")
p=y.b
r=A.aWt(A.a([s],y.h),e,A.I(["type","application/pdf"],p,p))
q=A.cv(A.I(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ef(A.jN(p,"share",[q]),y.v),$async$bDp)
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
return A.i($async$bDp,w)},
aQb(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aQb=A.e(function(e,f){if(e===1){t.push(f)
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
C.c8.eJ(n,C.c8.ee(n,"opacity"),"0","")
n=o.style
n.toString
C.c8.eJ(n,C.c8.ee(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qp(r,"load",!1,y.c).gH(0).dg(0,C.ej),$async$aQb)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.Rn(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bCi(q),$async$aQb)
case 12:A.cy(C.qq,new B.fyw(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lK(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQb,w)},
fwp(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fwp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lZ.rj(t,u,"_blank")
A.cy(C.akL,new B.fwq(s))
A.bQ(C.qu,new B.fwr(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fwp,w)},
Hr(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Hr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hzf(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aQb(d),$async$Hr)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fwp(d,u),$async$Hr)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bDp(d,u),$async$Hr)
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
return A.b(B.bDp(d,u),$async$Hr)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aQb(d),$async$Hr)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fwp(d,u),$async$Hr)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
s.toString
r=window
r.toString
C.lZ.rj(r,s,"_blank")
A.bQ(C.qu,new B.fQ1(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hr,w)},
fyw:function fyw(d,e){this.a=d
this.b=e},
fwq:function fwq(d){this.a=d},
fwr:function fwr(d){this.a=d},
fQ1:function fQ1(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[44],B)
D=c[234]
var z=a.updateTypes([])
B.fyw.prototype={
$0(){var x
try{C.a1F.fq(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fwq.prototype={
$0(){B.bCi(this.a)},
$S:0}
B.fwr.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fQ1.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iJ,[B.fyw,B.fwq,B.fwr,B.fQ1])})()
var y={w:A.as("O<lS>"),h:A.as("O<aE>"),E:A.as("aE"),x:A.as("n"),c:A.as("qp<dZ>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.ajY=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["6ZiJeoQhGV+K/rMyJ0PipfXDCQo="]=a.current})($__dart_deferred_initializers__);