((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBf(d){return B.i1n(d)},
i1n(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bBf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bP(new A.bb(1000*(280+t*220)),null,u),$async$bBf)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bBf,w)},
bCl(d,e){return B.i6k(d,e)},
i6k(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bCl=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hN([d],"application/pdf")
p=y.b
r=A.aVB(A.a([s],y.h),e,A.H(["type","application/pdf"],p,p))
q=A.cC(A.H(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ee(A.jX(p,"share",[q]),y.v),$async$bCl)
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
return A.i($async$bCl,w)},
aPn(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aPn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hN([d],"application/pdf"))
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
C.c6.eH(n,C.c6.eb(n,"opacity"),"0","")
n=o.style
n.toString
C.c6.eH(n,C.c6.eb(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qf(r,"load",!1,y.c).gI(0).da(0,C.ep),$async$aPn)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.QQ(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bBf(q),$async$aPn)
case 12:A.cG(C.q9,new B.ftK(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lE(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPn,w)},
frG(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$frG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hN([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lU.r0(t,u,"_blank")
A.cG(C.ajh,new B.frH(s))
A.bP(C.qd,new B.frI(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frG,w)},
H_(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$H_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.ht3(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aPn(d),$async$H_)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.frG(d,u),$async$H_)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bCl(d,u),$async$H_)
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
return A.b(B.bCl(d,u),$async$H_)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aPn(d),$async$H_)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.frG(d,u),$async$H_)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hN([d],"application/pdf"))
s.toString
r=window
r.toString
C.lU.r0(r,s,"_blank")
A.bP(C.qd,new B.fKt(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H_,w)},
ftK:function ftK(d,e){this.a=d
this.b=e},
frH:function frH(d){this.a=d},
frI:function frI(d){this.a=d},
fKt:function fKt(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[43],B)
D=c[234]
var z=a.updateTypes([])
B.ftK.prototype={
$0(){var x
try{C.a0Q.fm(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.frH.prototype={
$0(){B.bBf(this.a)},
$S:0}
B.frI.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fKt.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.iF,[B.ftK,B.frH,B.frI,B.fKt])})()
var y={w:A.at("O<lM>"),h:A.at("O<aD>"),E:A.at("aD"),x:A.at("m"),c:A.at("qf<dY>"),e:A.at("R"),b:A.at("@"),v:A.at("~")};(function constants(){D.aiv=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["2cklAVAAZTUTdIcuBGjjoNtkv7U="]=a.current})($__dart_deferred_initializers__);