((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bzB(d){return B.hUP(d)},
hUP(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bzB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.ba(1000*(280+t*220)),null,u),$async$bzB)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bzB,w)},
bAH(d,e){return B.hZJ(d,e)},
hZJ(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bAH=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hS([d],"application/pdf")
p=y.b
r=A.aUg(A.a([s],y.h),e,A.F(["type","application/pdf"],p,p))
q=A.cz(A.F(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ek(A.k2(p,"share",[q]),y.v),$async$bAH)
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
return A.i($async$bAH,w)},
aO7(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aO7=A.e(function(e,f){if(e===1){t.push(f)
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
C.c3.eH(n,C.c3.ea(n,"opacity"),"0","")
n=o.style
n.toString
C.c3.eH(n,C.c3.ea(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q6(r,"load",!1,y.c).gI(0).d8(0,C.eg),$async$aO7)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bza(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bzB(q),$async$aO7)
case 12:A.cM(C.pR,new B.fnV(r,s))
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
return A.i($async$aO7,w)},
fm9(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fm9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hS([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lB.qN(t,u,"_blank")
A.cM(C.ahb,new B.fma(s))
A.bN(C.pW,new B.fmb(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fm9,w)},
GC(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$GC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hm3(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aO7(d),$async$GC)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fm9(d,u),$async$GC)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bAH(d,u),$async$GC)
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
return A.b(B.bAH(d,u),$async$GC)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aO7(d),$async$GC)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fm9(d,u),$async$GC)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],"application/pdf"))
s.toString
r=window
r.toString
C.lB.qN(r,s,"_blank")
A.bN(C.pW,new B.fEe(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GC,w)},
fnV:function fnV(d,e){this.a=d
this.b=e},
fma:function fma(d){this.a=d},
fmb:function fmb(d){this.a=d},
fEe:function fEe(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[37],B)
D=c[219]
var z=a.updateTypes([])
B.fnV.prototype={
$0(){var x
try{C.a_y.ff(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fma.prototype={
$0(){B.bzB(this.a)},
$S:0}
B.fmb.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fEe.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.ja,[B.fnV,B.fma,B.fmb,B.fEe])})()
var y={w:A.ax("O<lA>"),h:A.ax("O<aD>"),E:A.ax("aD"),x:A.ax("m"),c:A.ax("q6<dZ>"),e:A.ax("R"),b:A.ax("@"),v:A.ax("~")};(function constants(){D.agt=new A.w(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["dE3qeNvmqPSkA0pvoal1OoNO5AQ="]=a.current})($__dart_deferred_initializers__);