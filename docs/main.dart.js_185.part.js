((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bzI(d){return B.hVT(d)},
hVT(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bzI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bM(new A.ba(1000*(280+t*220)),null,u),$async$bzI)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bzI,w)},
bAO(d,e){return B.i_N(d,e)},
i_N(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bAO=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hS([d],"application/pdf")
p=y.b
r=A.aUn(A.a([s],y.h),e,A.F(["type","application/pdf"],p,p))
q=A.cA(A.F(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ek(A.k3(p,"share",[q]),y.v),$async$bAO)
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
return A.i($async$bAO,w)},
aOd(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aOd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hS([d],"application/pdf"))
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
C.c4.eH(n,C.c4.ea(n,"opacity"),"0","")
n=o.style
n.toString
C.c4.eH(n,C.c4.ea(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q6(r,"load",!1,y.c).gI(0).d8(0,C.ei),$async$aOd)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bzh(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bzI(q),$async$aOd)
case 12:A.cM(C.pS,new B.foN(r,s))
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
return A.i($async$aOd,w)},
fn0(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fn0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hS([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lG.qN(t,u,"_blank")
A.cM(C.ahj,new B.fn1(s))
A.bM(C.pX,new B.fn2(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fn0,w)},
GE(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$GE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hn4(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aOd(d),$async$GE)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fn0(d,u),$async$GE)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bAO(d,u),$async$GE)
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
return A.b(B.bAO(d,u),$async$GE)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aOd(d),$async$GE)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fn0(d,u),$async$GE)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],"application/pdf"))
s.toString
r=window
r.toString
C.lG.qN(r,s,"_blank")
A.bM(C.pX,new B.fFb(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GE,w)},
foN:function foN(d,e){this.a=d
this.b=e},
fn1:function fn1(d){this.a=d},
fn2:function fn2(d){this.a=d},
fFb:function fFb(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[37],B)
D=c[219]
var z=a.updateTypes([])
B.foN.prototype={
$0(){var x
try{C.a_C.fg(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fn1.prototype={
$0(){B.bzI(this.a)},
$S:0}
B.fn2.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fFb.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.ja,[B.foN,B.fn1,B.fn2,B.fFb])})()
var y={w:A.ax("O<lA>"),h:A.ax("O<aD>"),E:A.ax("aD"),x:A.ax("m"),c:A.ax("q6<dZ>"),e:A.ax("Q"),b:A.ax("@"),v:A.ax("~")};(function constants(){D.agB=new A.w(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["nRxYRvQp/hzrmCdwKEgUkqc6iWo="]=a.current})($__dart_deferred_initializers__);