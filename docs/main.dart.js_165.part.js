((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bxj(d){return B.hGI(d)},
hGI(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bxj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.b9(1000*(280+t*220)),null,u),$async$bxj)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bxj,w)},
byp(d,e){return B.hLv(d,e)},
hLv(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$byp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hI([d],"application/pdf")
p=y.b
r=A.aSu(A.a([s],y.h),e,A.E(["type","application/pdf"],p,p))
q=A.cA(A.E(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ef(A.jQ(p,"share",[q]),y.v),$async$byp)
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
return A.i($async$byp,w)},
aMu(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aMu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hI([d],"application/pdf"))
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
C.c_.eu(n,C.c_.e1(n,"opacity"),"0","")
n=o.style
n.toString
C.c_.eu(n,C.c_.e1(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.pJ(r,"load",!1,y.c).gK(0).cL(0,C.eh),$async$aMu)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bwS(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bxj(q),$async$aMu)
case 12:A.cL(C.nt,new B.fce(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lL(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMu,w)},
fbm(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fbm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hI([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.li.uf(t,u,"_blank")
A.cL(C.aek,new B.fbn(s))
A.bN(C.pl,new B.fbo(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fbm,w)},
FQ(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$FQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.h8h(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aMu(d),$async$FQ)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fbm(d,u),$async$FQ)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.byp(d,u),$async$FQ)
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
return A.b(B.byp(d,u),$async$FQ)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aMu(d),$async$FQ)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fbm(d,u),$async$FQ)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hI([d],"application/pdf"))
s.toString
r=window
r.toString
C.li.uf(r,s,"_blank")
A.bN(C.pl,new B.frs(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FQ,w)},
fce:function fce(d,e){this.a=d
this.b=e},
fbn:function fbn(d){this.a=d},
fbo:function fbo(d){this.a=d},
frs:function frs(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[36],B)
D=c[195]
var z=a.updateTypes([])
B.fce.prototype={
$0(){var x
try{C.Yt.f4(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fbn.prototype={
$0(){B.bxj(this.a)},
$S:0}
B.fbo.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.frs.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.jq,[B.fce,B.fbn,B.fbo,B.frs])})()
var y={w:A.az("P<lm>"),h:A.az("P<aC>"),E:A.az("aC"),x:A.az("n"),c:A.az("pJ<dU>"),e:A.az("R"),b:A.az("@"),v:A.az("~")};(function constants(){D.adF=new A.w(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["+9IYIts9Iffh4c+q6S3G7BLeXeQ="]=a.current})($__dart_deferred_initializers__);