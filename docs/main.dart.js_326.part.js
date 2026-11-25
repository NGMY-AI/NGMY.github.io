((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEi(d){return B.ikh(d)},
ikh(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bEi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bL(new A.bh(1000*(280+t*220)),null,u),$async$bEi)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bEi,w)},
bFw(d,e){return B.ipl(d,e)},
ipl(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bFw=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.i3([d],"application/pdf")
p=y.b
r=A.aY0(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cz(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.en(A.jJ(p,"share",[q]),y.v),$async$bFw)
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
return A.i($async$bFw,w)},
aRC(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aRC=A.e(function(e,f){if(e===1){t.push(f)
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
C.ce.eP(n,C.ce.ek(n,"opacity"),"0","")
n=o.style
n.toString
C.ce.eP(n,C.ce.ek(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q2(r,"load",!1,y.c).gG(0).de(0,C.em),$async$aRC)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.RW(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bEi(q),$async$aRC)
case 12:A.cB(C.r1,new B.fGH(r,s))
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
return A.i($async$aRC,w)},
fEt(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fEt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.i3([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.me.ro(t,u,"_blank")
A.cB(C.a1f,new B.fEu(s))
A.bL(C.r4,new B.fEv(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEt,w)},
HK(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$HK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hK4(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aRC(d),$async$HK)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fEt(d,u),$async$HK)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bFw(d,u),$async$HK)
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
return A.b(B.bFw(d,u),$async$HK)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aRC(d),$async$HK)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fEt(d,u),$async$HK)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.i3([d],"application/pdf"))
s.toString
r=window
r.toString
C.me.ro(r,s,"_blank")
A.bL(C.r4,new B.fZ7(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HK,w)},
fGH:function fGH(d,e){this.a=d
this.b=e},
fEu:function fEu(d){this.a=d},
fEv:function fEv(d){this.a=d},
fZ7:function fZ7(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[57],B)
D=c[332]
var z=a.updateTypes([])
B.fGH.prototype={
$0(){var x
try{C.a3l.fv(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fEu.prototype={
$0(){B.bEi(this.a)},
$S:0}
B.fEv.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fZ7.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.hS,[B.fGH,B.fEu,B.fEv,B.fZ7])})()
var y={w:A.as("N<m9>"),h:A.as("N<aE>"),E:A.as("aE"),x:A.as("m"),c:A.as("q2<e3>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.am2=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["BNzcOFXlJz3kWODXI5UkRVI2Ncg="]=a.current})($__dart_deferred_initializers__);