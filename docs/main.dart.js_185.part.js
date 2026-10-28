((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bxY(d){return B.hLK(d)},
hLK(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bxY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.b9(1000*(280+t*220)),null,u),$async$bxY)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bxY,w)},
bz3(d,e){return B.hQz(d,e)},
hQz(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bz3=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hL([d],"application/pdf")
p=y.b
r=A.aT_(A.a([s],y.h),e,A.F(["type","application/pdf"],p,p))
q=A.cA(A.F(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.eg(A.jU(p,"share",[q]),y.v),$async$bz3)
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
return A.i($async$bz3,w)},
aMX(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aMX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hL([d],"application/pdf"))
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
C.c0.ew(n,C.c0.e4(n,"opacity"),"0","")
n=o.style
n.toString
C.c0.ew(n,C.c0.e4(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.pR(r,"load",!1,y.c).gK(0).cM(0,C.ed),$async$aMX)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bxw(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bxY(q),$async$aMX)
case 12:A.cM(C.nL,new B.fgC(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lP(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMX,w)},
ffo(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$ffo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hL([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.ls.us(t,u,"_blank")
A.cM(C.afr,new B.ffp(s))
A.bN(C.pA,new B.ffq(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ffo,w)},
G6(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$G6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hdc(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aMX(d),$async$G6)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.ffo(d,u),$async$G6)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bz3(d,u),$async$G6)
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
return A.b(B.bz3(d,u),$async$G6)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aMX(d),$async$G6)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.ffo(d,u),$async$G6)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hL([d],"application/pdf"))
s.toString
r=window
r.toString
C.ls.us(r,s,"_blank")
A.bN(C.pA,new B.fw8(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$G6,w)},
fgC:function fgC(d,e){this.a=d
this.b=e},
ffp:function ffp(d){this.a=d},
ffq:function ffq(d){this.a=d},
fw8:function fw8(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[37],B)
D=c[216]
var z=a.updateTypes([])
B.fgC.prototype={
$0(){var x
try{C.Zh.f8(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.ffp.prototype={
$0(){B.bxY(this.a)},
$S:0}
B.ffq.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fw8.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.j3,[B.fgC,B.ffp,B.ffq,B.fw8])})()
var y={w:A.ax("P<ls>"),h:A.ax("P<aC>"),E:A.ax("aC"),x:A.ax("n"),c:A.ax("pR<dW>"),e:A.ax("R"),b:A.ax("@"),v:A.ax("~")};(function constants(){D.aeM=new A.w(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["1NIAnFkqKB959+RRc+/+uRiOsyk="]=a.current})($__dart_deferred_initializers__);