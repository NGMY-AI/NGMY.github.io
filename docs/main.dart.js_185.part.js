((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bzJ(d){return B.hW6(d)},
hW6(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bzJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bM(new A.ba(1000*(280+t*220)),null,u),$async$bzJ)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bzJ,w)},
bAQ(d,e){return B.i01(d,e)},
i01(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bAQ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hS([d],"application/pdf")
p=y.b
r=A.aUo(A.a([s],y.h),e,A.F(["type","application/pdf"],p,p))
q=A.cA(A.F(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ek(A.k4(p,"share",[q]),y.v),$async$bAQ)
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
return A.i($async$bAQ,w)},
aOe(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aOe=A.e(function(e,f){if(e===1){t.push(f)
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
C.c5.eH(n,C.c5.eb(n,"opacity"),"0","")
n=o.style
n.toString
C.c5.eH(n,C.c5.eb(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q6(r,"load",!1,y.c).gI(0).d8(0,C.ei),$async$aOe)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bzi(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bzJ(q),$async$aOe)
case 12:A.cM(C.pS,new B.foP(r,s))
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
return A.i($async$aOe,w)},
fn2(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fn2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hS([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lG.qN(t,u,"_blank")
A.cM(C.ahl,new B.fn3(s))
A.bM(C.pX,new B.fn4(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fn2,w)},
GF(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$GF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hnf(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aOe(d),$async$GF)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fn2(d,u),$async$GF)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bAQ(d,u),$async$GF)
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
return A.b(B.bAQ(d,u),$async$GF)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aOe(d),$async$GF)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fn2(d,u),$async$GF)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],"application/pdf"))
s.toString
r=window
r.toString
C.lG.qN(r,s,"_blank")
A.bM(C.pX,new B.fFl(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GF,w)},
foP:function foP(d,e){this.a=d
this.b=e},
fn3:function fn3(d){this.a=d},
fn4:function fn4(d){this.a=d},
fFl:function fFl(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[37],B)
D=c[219]
var z=a.updateTypes([])
B.foP.prototype={
$0(){var x
try{C.a_E.fg(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fn3.prototype={
$0(){B.bzJ(this.a)},
$S:0}
B.fn4.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fFl.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.ja,[B.foP,B.fn3,B.fn4,B.fFl])})()
var y={w:A.ax("O<lA>"),h:A.ax("O<aD>"),E:A.ax("aD"),x:A.ax("m"),c:A.ax("q6<dZ>"),e:A.ax("Q"),b:A.ax("@"),v:A.ax("~")};(function constants(){D.agD=new A.w(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["h1r0wLclIO24o4JYsK8SWV+Jycs="]=a.current})($__dart_deferred_initializers__);