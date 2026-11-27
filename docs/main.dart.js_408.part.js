((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D={
idc(a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=C.n.ao(22050*b0,1000),a6=a5*2,a7=new DataView(new ArrayBuffer(44+a6)),a8=new D.cqo(a7)
a8.$2(0,"RIFF")
a7.setUint32(4,36+a6,!0)
a8.$2(8,"WAVE")
a8.$2(12,"fmt ")
a7.setUint32(16,16,!0)
a7.setUint16(20,1,!0)
a7.setUint16(22,1,!0)
a7.setUint32(24,22050,!0)
a7.setUint32(28,44100,!0)
a7.setUint16(32,2,!0)
a7.setUint16(34,16,!0)
a8.$2(36,"data")
a7.setUint32(40,a6,!0)
x=new B.e6()
x.cW(3)
w=3
v=0.006
u=!1
t=0
switch(b3){case"piano":s=A.dfv
r=A.dlX
w=3.4
break
case"organ":s=A.dkE
r=A.dD8
v=0.02
u=!0
break
case"bell":s=A.dab
r=A.d8J
w=2.4
break
case"pluck":s=A.dfu
r=A.cUv
w=7
break
case"synth":s=A.dEf
r=A.dGg
v=0.012
u=!0
break
case"flute":s=A.dLo
r=A.cu8
v=0.07
u=!0
t=0.035
break
default:s=A.awA
r=A.awA}a6=s.length
q=B.c4(a6,0,!1,y.b)
for(p=b3.length!==0,o=-w,n=o*0.12,m=t>0,l=b3!=="bell",k=b3!=="piano",j=b3==="pluck",i=0,h=0;h<a5;++h){g=h/22050
f=1-h/a5
e=a9*(1+b2*f)
if(p){for(f=6.283185307179586*e,d=o*g,a0=0,a1=0;a1<a6;++a1){a2=q[a1]+f*r[a1]/22050
q[a1]=a2
a3=!l||!k||j?Math.exp(d*(1+a1*0.35)):1
a0+=Math.sin(a2)*s[a1]*a3}a0/=1.9
if(m)a0+=(x.ai()*2-1)*t
a4=Math.min(1,g/v)*Math.min(1,(a5-h)/1984.5)
a0*=u?a4:a4*Math.exp(n*g)}else{i+=6.283185307179586*e/22050
switch(b1){case"square":d=Math.sin(i)>=0?0.6:-0.6
break
case"noise":d=(x.ai()*2-1)*0.8
break
case"tri":d=0.6366197723675814*Math.asin(Math.sin(i))
break
case"saw":d=C.h.F(i/6.283185307179586,1)*1.2-0.6
break
default:d=Math.sin(i)
break}a0=d*(Math.min(1,h/120)*Math.pow(f,1.6))}a7.setInt16(44+h*2,C.n.D(C.h.S(a0*0.8*32e3),-32768,32767),!0)}return J.eX(C.dM.gaS(a7))},
dI(d,e,f,g,h,i){return D.ide(d,e,f,g,h,i)},
ide(d,e,f,g,h,i){var x=0,w=B.j(y.f),v=1,u=[],t,s,r,q,p,o
var $async$dI=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+C.h.S(d)+"|"+f+"|"+i+"|"+B.v(g)+"|"+e
s=$.idb.c0(0,t,new D.cqq(d,f,i,g,e))
if($.cqn.length<12){q=B.ale()
q.Ot(C.aVf)
$.cqn.push(q)}q=$.hFK
$.hFK=q+1
r=$.cqn[C.n.F(q,$.cqn.length)]
x=6
return B.b(J.i_J(r,new B.a5K(s,null),h),$async$dI)
case 6:v=1
x=5
break
case 3:v=2
o=u.pop()
x=5
break
case 2:x=1
break
case 5:return B.h(null,w)
case 1:return B.f(u.at(-1),w)}})
return B.i($async$dI,w)},
cqo:function cqo(d){this.a=d},
cqq:function cqq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},A
J=c[1]
B=c[0]
C=c[2]
D=a.updateHolder(c[45],D)
A=c[141]
var z=a.updateTypes([])
D.cqo.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.ak(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:785}
D.cqq.prototype={
$0(){var x=this
return D.idc(x.a,x.b,x.c,x.d,x.e)},
$S:248};(function inheritance(){var x=a.inherit
x(D.cqo,B.j0)
x(D.cqq,B.j_)})()
var y={h:B.as("N<H>"),b:B.as("H"),f:B.as("~")};(function constants(){var x=a.makeConstList
A.CK=new B.u(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,C.q)
A.mt=new B.u(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,C.q)
A.r8=new B.u(1,1,0.8784313725490196,0.4,C.q)
A.p0=new B.R(0,0,7,0)
A.a5e=new B.a_(983467,"MaterialIcons",!1)
A.awA=x([1],y.h)
A.cu8=x([1,2,3],y.h)
A.aAf=x([1,-1],y.h)
A.cUv=x([1,2,3,4,5,6,7],y.h)
A.d8J=x([1,2.76,5.4,8.93,13.3],y.h)
A.dab=x([1,0.6,0.38,0.22,0.12],y.h)
A.dfu=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.h)
A.dfv=x([1,0.55,0.32,0.2,0.12,0.07],y.h)
A.dkE=x([1,0.6,0.45,0.3,0.22,0.15],y.h)
A.dlX=x([1,2,3,4,5,6],y.h)
A.dD8=x([1,2,3,4,6,8],y.h)
A.dEf=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.h)
A.dGg=x([1,2,3,4,5,6,7,8],y.h)
A.dLo=x([1,0.18,0.06],y.h)
A.eBS={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"FIREWORK DESIGNER":5,"CIRCUIT LAB":6,"PERIODIC TABLE":7,"BODY EXPLORER":8,"SPIN THE WHEEL":9,"FOCUS TIMER":10,"MEMORY MATCH":11,"LUCKY POCKET":12,"ELECTRONICS LAB":13,"CONSTRUCTION LAB":14,"AI INVENTOR":15,"MAGNET LAB":16,"RADIO LAB":17,"POWER PLANT":18,"POWER GRID":19,"INTERNET JOURNEY":20,"ROBOT CODER":21,"BUG SMASHER":22,"ROCKET LANDER":23,"DATA SNAKE":24,"BINARY 2048":25,"SIGNAL BREAKER":26,"PASSWORD LAB":27,"WAVE LAB":28,"BUG HUNT":29,"OPTICS LAB":30,"ATOM BUILDER":31,"PIXEL TV":32}
A.aLX=new B.bl(A.eBS,["sparkle","sparkle","whoosh","click","bounce","pop","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","sparkle","lab","tech"],B.as("bl<o,o>"))
A.adQ=new B.G(!0,C.aE,null,null,null,null,10.5,C.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.idb=B.S(B.as("o"),B.as("dG"))
$.cqn=B.a([],B.as("N<ald>"))
$.hFK=0
$.avd="music"})()};
(a=>{a["7xNbjiSi44MNft2AI0fH+u6xACI="]=a.current})($__dart_deferred_initializers__);