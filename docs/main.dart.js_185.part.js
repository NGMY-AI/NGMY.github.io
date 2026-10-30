((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bzv(d){return B.hUi(d)},
hUi(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bzv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.ba(1000*(280+t*220)),null,u),$async$bzv)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bzv,w)},
bAB(d,e){return B.hZb(d,e)},
hZb(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bAB=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hS([d],"application/pdf")
p=y.b
r=A.aUc(A.a([s],y.h),e,A.F(["type","application/pdf"],p,p))
q=A.cz(A.F(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ek(A.k1(p,"share",[q]),y.v),$async$bAB)
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
return A.i($async$bAB,w)},
aO6(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aO6=A.e(function(e,f){if(e===1){t.push(f)
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
C.c3.eG(n,C.c3.ea(n,"opacity"),"0","")
n=o.style
n.toString
C.c3.eG(n,C.c3.ea(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q6(r,"load",!1,y.c).gI(0).d8(0,C.eg),$async$aO6)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bz4(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bzv(q),$async$aO6)
case 12:A.cM(C.pQ,new B.fnv(r,s))
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
return A.i($async$aO6,w)},
flK(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$flK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hS([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lA.qL(t,u,"_blank")
A.cM(C.ah9,new B.flL(s))
A.bN(C.pV,new B.flM(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$flK,w)},
GC(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$GC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hly(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aO6(d),$async$GC)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.flK(d,u),$async$GC)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bAB(d,u),$async$GC)
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
return A.b(B.bAB(d,u),$async$GC)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aO6(d),$async$GC)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.flK(d,u),$async$GC)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],"application/pdf"))
s.toString
r=window
r.toString
C.lA.qL(r,s,"_blank")
A.bN(C.pV,new B.fDM(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GC,w)},
fnv:function fnv(d,e){this.a=d
this.b=e},
flL:function flL(d){this.a=d},
flM:function flM(d){this.a=d},
fDM:function fDM(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[37],B)
D=c[219]
var z=a.updateTypes([])
B.fnv.prototype={
$0(){var x
try{C.a_z.ff(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.flL.prototype={
$0(){B.bzv(this.a)},
$S:0}
B.flM.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fDM.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.ja,[B.fnv,B.flL,B.flM,B.fDM])})()
var y={w:A.ax("O<lz>"),h:A.ax("O<aD>"),E:A.ax("aD"),x:A.ax("m"),c:A.ax("q6<dZ>"),e:A.ax("R"),b:A.ax("@"),v:A.ax("~")};(function constants(){D.agr=new A.w(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["uj/gmCUoSTf/mgzWy3vVP352hmU="]=a.current})($__dart_deferred_initializers__);