((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bCe(d){return B.i8M(d)},
i8M(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bCe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bP(new A.bd(1000*(280+t*220)),null,u),$async$bCe)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bCe,w)},
bDl(d,e){return B.idM(d,e)},
idM(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bDl=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hK([d],"application/pdf")
p=y.b
r=A.aWp(A.a([s],y.h),e,A.I(["type","application/pdf"],p,p))
q=A.cv(A.I(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ef(A.jO(p,"share",[q]),y.v),$async$bDl)
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
return A.i($async$bDl,w)},
aQa(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aQa=A.e(function(e,f){if(e===1){t.push(f)
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
C.c9.eL(n,C.c9.ee(n,"opacity"),"0","")
n=o.style
n.toString
C.c9.eL(n,C.c9.ee(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qr(r,"load",!1,y.c).gH(0).dh(0,C.ek),$async$aQa)
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
return A.b(B.bCe(q),$async$aQa)
case 12:A.cy(C.qt,new B.fyn(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lL(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQa,w)},
fwc(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fwc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lY.rk(t,u,"_blank")
A.cy(C.akM,new B.fwd(s))
A.bP(C.qx,new B.fwe(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fwc,w)},
Hr(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Hr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hze(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aQa(d),$async$Hr)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fwc(d,u),$async$Hr)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bDl(d,u),$async$Hr)
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
return A.b(B.bDl(d,u),$async$Hr)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aQa(d),$async$Hr)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fwc(d,u),$async$Hr)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
s.toString
r=window
r.toString
C.lY.rk(r,s,"_blank")
A.bP(C.qx,new B.fPW(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hr,w)},
fyn:function fyn(d,e){this.a=d
this.b=e},
fwd:function fwd(d){this.a=d},
fwe:function fwe(d){this.a=d},
fPW:function fPW(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[44],B)
D=c[236]
var z=a.updateTypes([])
B.fyn.prototype={
$0(){var x
try{C.a1N.fq(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fwd.prototype={
$0(){B.bCe(this.a)},
$S:0}
B.fwe.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fPW.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iJ,[B.fyn,B.fwd,B.fwe,B.fPW])})()
var y={w:A.as("O<lT>"),h:A.as("O<aE>"),E:A.as("aE"),x:A.as("n"),c:A.as("qr<e_>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.ak0=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["n/LzIBpaCe5GOcTgaIixieGuLd0="]=a.current})($__dart_deferred_initializers__);