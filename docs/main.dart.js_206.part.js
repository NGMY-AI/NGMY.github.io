((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bCn(d){return B.i9q(d)},
i9q(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bCn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bQ(new A.bd(1000*(280+t*220)),null,u),$async$bCn)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bCn,w)},
bDu(d,e){return B.iep(d,e)},
iep(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bDu=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hM([d],"application/pdf")
p=y.b
r=A.aWy(A.a([s],y.h),e,A.I(["type","application/pdf"],p,p))
q=A.cv(A.I(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ef(A.jP(p,"share",[q]),y.v),$async$bDu)
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
return A.i($async$bDu,w)},
aQg(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aQg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hM([d],"application/pdf"))
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
C.c9.eM(n,C.c9.ee(n,"opacity"),"0","")
n=o.style
n.toString
C.c9.eM(n,C.c9.ee(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qs(r,"load",!1,y.c).gH(0).dh(0,C.em),$async$aQg)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.Rx(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bCn(q),$async$aQg)
case 12:A.cy(C.qu,new B.fyO(r,s))
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
return A.i($async$aQg,w)},
fwA(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fwA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hM([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lY.rl(t,u,"_blank")
A.cy(C.akW,new B.fwB(s))
A.bQ(C.qy,new B.fwC(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fwA,w)},
Hv(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Hv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hzR(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aQg(d),$async$Hv)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fwA(d,u),$async$Hv)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bDu(d,u),$async$Hv)
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
return A.b(B.bDu(d,u),$async$Hv)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aQg(d),$async$Hv)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fwA(d,u),$async$Hv)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hM([d],"application/pdf"))
s.toString
r=window
r.toString
C.lY.rl(r,s,"_blank")
A.bQ(C.qy,new B.fQr(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hv,w)},
fyO:function fyO(d,e){this.a=d
this.b=e},
fwB:function fwB(d){this.a=d},
fwC:function fwC(d){this.a=d},
fQr:function fQr(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[44],B)
D=c[235]
var z=a.updateTypes([])
B.fyO.prototype={
$0(){var x
try{C.a1S.fs(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fwB.prototype={
$0(){B.bCn(this.a)},
$S:0}
B.fwC.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fQr.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iJ,[B.fyO,B.fwB,B.fwC,B.fQr])})()
var y={w:A.at("O<lT>"),h:A.at("O<aE>"),E:A.at("aE"),x:A.at("m"),c:A.at("qs<e_>"),e:A.at("P"),b:A.at("@"),v:A.at("~")};(function constants(){D.aka=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["is/y/gX1ZaBZrBEfJp2YGO0HioA="]=a.current})($__dart_deferred_initializers__);