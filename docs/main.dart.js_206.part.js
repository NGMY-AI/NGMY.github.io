((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBu(d){return B.i2z(d)},
i2z(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bBu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bP(new A.bb(1000*(280+t*220)),null,u),$async$bBu)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bBu,w)},
bCA(d,e){return B.i7z(d,e)},
i7z(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bCA=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hO([d],"application/pdf")
p=y.b
r=A.aVK(A.a([s],y.h),e,A.H(["type","application/pdf"],p,p))
q=A.cC(A.H(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ed(A.jZ(p,"share",[q]),y.v),$async$bCA)
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
return A.i($async$bCA,w)},
aPu(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aPu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hO([d],"application/pdf"))
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
C.c7.eH(n,C.c7.ed(n,"opacity"),"0","")
n=o.style
n.toString
C.c7.eH(n,C.c7.ed(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qi(r,"load",!1,y.c).gI(0).da(0,C.eq),$async$aPu)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.QR(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bBu(q),$async$aPu)
case 12:A.cG(C.qc,new B.fuH(r,s))
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
return A.i($async$aPu,w)},
fsD(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fsD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hO([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lS.r0(t,u,"_blank")
A.cG(C.ajM,new B.fsE(s))
A.bP(C.qg,new B.fsF(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsD,w)},
H0(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$H0=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hub(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aPu(d),$async$H0)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fsD(d,u),$async$H0)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bCA(d,u),$async$H0)
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
return A.b(B.bCA(d,u),$async$H0)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aPu(d),$async$H0)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fsD(d,u),$async$H0)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hO([d],"application/pdf"))
s.toString
r=window
r.toString
C.lS.r0(r,s,"_blank")
A.bP(C.qg,new B.fLx(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H0,w)},
fuH:function fuH(d,e){this.a=d
this.b=e},
fsE:function fsE(d){this.a=d},
fsF:function fsF(d){this.a=d},
fLx:function fLx(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[43],B)
D=c[234]
var z=a.updateTypes([])
B.fuH.prototype={
$0(){var x
try{C.a0W.fm(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fsE.prototype={
$0(){B.bBu(this.a)},
$S:0}
B.fsF.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fLx.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iG,[B.fuH,B.fsE,B.fsF,B.fLx])})()
var y={w:A.at("O<lO>"),h:A.at("O<aD>"),E:A.at("aD"),x:A.at("n"),c:A.at("qi<dY>"),e:A.at("R"),b:A.at("@"),v:A.at("~")};(function constants(){D.aj_=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["waoIrE+aZ1RECVhlA+HaAFyLptU="]=a.current})($__dart_deferred_initializers__);