((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
byN(d){return B.hOK(d)},
hOK(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$byN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.b9(1000*(280+t*220)),null,u),$async$byN)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$byN,w)},
bzT(d,e){return B.hTA(d,e)},
hTA(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bzT=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hM([d],"application/pdf")
p=y.b
r=A.aTA(A.a([s],y.h),e,A.F(["type","application/pdf"],p,p))
q=A.cB(A.F(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.eh(A.jX(p,"share",[q]),y.v),$async$bzT)
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
return A.i($async$bzT,w)},
aNv(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aNv=A.e(function(e,f){if(e===1){t.push(f)
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
C.c2.ey(n,C.c2.e6(n,"opacity"),"0","")
n=o.style
n.toString
C.c2.ey(n,C.c2.e6(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.pV(r,"load",!1,y.c).gL(0).cM(0,C.ed),$async$aNv)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.byl(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.byN(q),$async$aNv)
case 12:A.cM(C.nQ,new B.fj0(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lS(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNv,w)},
fhP(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fhP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hM([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lu.uz(t,u,"_blank")
A.cM(C.afR,new B.fhQ(s))
A.bN(C.pH,new B.fhR(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fhP,w)},
Gi(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Gi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hg4(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aNv(d),$async$Gi)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fhP(d,u),$async$Gi)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bzT(d,u),$async$Gi)
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
return A.b(B.bzT(d,u),$async$Gi)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aNv(d),$async$Gi)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fhP(d,u),$async$Gi)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hM([d],"application/pdf"))
s.toString
r=window
r.toString
C.lu.uz(r,s,"_blank")
A.bN(C.pH,new B.fyI(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gi,w)},
fj0:function fj0(d,e){this.a=d
this.b=e},
fhQ:function fhQ(d){this.a=d},
fhR:function fhR(d){this.a=d},
fyI:function fyI(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[37],B)
D=c[218]
var z=a.updateTypes([])
B.fj0.prototype={
$0(){var x
try{C.Zz.fb(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fhQ.prototype={
$0(){B.byN(this.a)},
$S:0}
B.fhR.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fyI.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.j5,[B.fj0,B.fhQ,B.fhR,B.fyI])})()
var y={w:A.ax("O<lv>"),h:A.ax("O<aC>"),E:A.ax("aC"),x:A.ax("n"),c:A.ax("pV<dX>"),e:A.ax("R"),b:A.ax("@"),v:A.ax("~")};(function constants(){D.af8=new A.w(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["NpdwC2fWZhIETYSCzUq8GNlwGik="]=a.current})($__dart_deferred_initializers__);