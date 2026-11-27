((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFv(d){return B.ipV(d)},
ipV(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bFv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bM(new A.bh(1000*(280+t*220)),null,u),$async$bFv)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bFv,w)},
bGJ(d,e){return B.ivb(d,e)},
ivb(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bGJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.i4([d],"application/pdf")
p=y.b
r=A.aZ0(A.a([s],y.h),e,A.J(["type","application/pdf"],p,p))
q=A.cz(A.J(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ek(A.jN(p,"share",[q]),y.v),$async$bGJ)
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
return A.i($async$bGJ,w)},
aSw(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aSw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.i4([d],"application/pdf"))
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
C.ci.eS(n,C.ci.em(n,"opacity"),"0","")
n=o.style
n.toString
C.ci.eS(n,C.ci.em(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q8(r,"load",!1,y.c).gH(0).d9(0,C.eo),$async$aSw)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.Sh(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bFv(q),$async$aSw)
case 12:A.cD(C.rf,new B.fKf(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.me(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSw,w)},
fI1(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fI1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.i4([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.mj.rE(t,u,"_blank")
A.cD(C.a1K,new B.fI2(s))
A.bM(C.ri,new B.fI3(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fI1,w)},
HW(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$HW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hP6(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aSw(d),$async$HW)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fI1(d,u),$async$HW)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bGJ(d,u),$async$HW)
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
return A.b(B.bGJ(d,u),$async$HW)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aSw(d),$async$HW)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fI1(d,u),$async$HW)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.i4([d],"application/pdf"))
s.toString
r=window
r.toString
C.mj.rE(r,s,"_blank")
A.bM(C.ri,new B.h2m(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HW,w)},
fKf:function fKf(d,e){this.a=d
this.b=e},
fI2:function fI2(d){this.a=d},
fI3:function fI3(d){this.a=d},
h2m:function h2m(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[50],B)
D=c[273]
var z=a.updateTypes([])
B.fKf.prototype={
$0(){var x
try{C.a3W.fo(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fI2.prototype={
$0(){B.bFv(this.a)},
$S:0}
B.fI3.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12}
B.h2m.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:12};(function inheritance(){var x=a.inheritMany
x(A.j0,[B.fKf,B.fI2,B.fI3,B.h2m])})()
var y={w:A.as("N<ml>"),h:A.as("N<aH>"),E:A.as("aH"),x:A.as("o"),c:A.as("q8<e7>"),e:A.as("P"),b:A.as("@"),v:A.as("~")};(function constants(){D.amR=new A.u(1,0.058823529411764705,0.10588235294117647,0.2,C.q)})()};
(a=>{a["CHbBUtEZFBqZuhOS2Bypw7gLycc="]=a.current})($__dart_deferred_initializers__);