((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bAz(d){return B.hZ_(d)},
hZ_(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bAz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bP(new A.b9(1000*(280+t*220)),null,u),$async$bAz)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bAz,w)},
bBF(d,e){return B.i2X(d,e)},
i2X(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bBF=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hK([d],"application/pdf")
p=y.b
r=A.aVb(A.a([s],y.h),e,A.G(["type","application/pdf"],p,p))
q=A.cA(A.G(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.eb(A.jU(p,"share",[q]),y.v),$async$bBF)
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
return A.i($async$bBF,w)},
aOY(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aOY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
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
C.c4.eH(n,C.c4.ec(n,"opacity"),"0","")
n=o.style
n.toString
C.c4.eH(n,C.c4.ec(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.qc(r,"load",!1,y.c).gI(0).da(0,C.eo),$async$aOY)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bA8(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bAz(q),$async$aOY)
case 12:A.cK(C.q4,new B.fqu(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lB(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aOY,w)},
fos(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fos=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lQ.qZ(t,u,"_blank")
A.cK(C.aiW,new B.fot(s))
A.bP(C.q9,new B.fou(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fos,w)},
GV(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$GV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hpK(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aOY(d),$async$GV)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fos(d,u),$async$GV)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bBF(d,u),$async$GV)
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
return A.b(B.bBF(d,u),$async$GV)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aOY(d),$async$GV)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fos(d,u),$async$GV)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],"application/pdf"))
s.toString
r=window
r.toString
C.lQ.qZ(r,s,"_blank")
A.bP(C.q9,new B.fHa(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GV,w)},
fqu:function fqu(d,e){this.a=d
this.b=e},
fot:function fot(d){this.a=d},
fou:function fou(d){this.a=d},
fHa:function fHa(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[40],B)
D=c[225]
var z=a.updateTypes([])
B.fqu.prototype={
$0(){var x
try{C.a0D.fl(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fot.prototype={
$0(){B.bAz(this.a)},
$S:0}
B.fou.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.fHa.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.jc,[B.fqu,B.fot,B.fou,B.fHa])})()
var y={w:A.av("O<lJ>"),h:A.av("O<aD>"),E:A.av("aD"),x:A.av("n"),c:A.av("qc<dW>"),e:A.av("R"),b:A.av("@"),v:A.av("~")};(function constants(){D.aia=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["GQ4tWjZWEMvqQCa99QEUuMsO0b0="]=a.current})($__dart_deferred_initializers__);