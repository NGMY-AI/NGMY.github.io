((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,C={
hXD(a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=D.o.aq(22050*b0,1000),a6=a5*2,a7=new DataView(new ArrayBuffer(44+a6)),a8=new C.cma(a7)
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
x=new B.e4()
x.d_(3)
w=3
v=0.006
u=!1
t=0
switch(b3){case"piano":s=A.d6I
r=A.dcn
w=3.4
break
case"organ":s=A.dba
r=A.drV
v=0.02
u=!0
break
case"bell":s=A.d2_
r=A.d0J
w=2.4
break
case"pluck":s=A.d6H
r=A.cNf
w=7
break
case"synth":s=A.dsR
r=A.duF
v=0.012
u=!0
break
case"flute":s=A.dzf
r=A.cnh
v=0.07
u=!0
t=0.035
break
default:s=A.atk
r=A.atk}a6=s.length
q=B.c_(a6,0,!1,y.b)
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
case"saw":d=D.j.F(i/6.283185307179586,1)*1.2-0.6
break
default:d=Math.sin(i)
break}a0=d*(Math.min(1,h/120)*Math.pow(f,1.6))}a7.setInt16(44+h*2,D.o.D(D.j.V(a0*0.8*32e3),-32768,32767),!0)}return J.eT(D.dN.gaU(a7))},
dE(d,e,f,g,h,i){return C.hXF(d,e,f,g,h,i)},
hXF(d,e,f,g,h,i){var x=0,w=B.j(y.f),v=1,u=[],t,s,r,q,p,o
var $async$dE=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+D.j.V(d)+"|"+f+"|"+i+"|"+B.w(g)+"|"+e
s=$.hXC.c3(0,t,new C.cmc(d,f,i,g,e))
if($.cm9.length<12){q=B.ajD()
q.Nz(D.aRC)
$.cm9.push(q)}q=$.hqU
$.hqU=q+1
r=$.cm9[D.o.F(q,$.cm9.length)]
x=6
return B.b(J.hKu(r,new B.a4q(s,null),h),$async$dE)
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
return B.i($async$dE,w)},
cma:function cma(d){this.a=d},
cmc:function cmc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},A
J=c[1]
B=c[0]
D=c[2]
C=a.updateHolder(c[38],C)
A=c[108]
var z=a.updateTypes([])
C.cma.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.aj(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:604}
C.cmc.prototype={
$0(){var x=this
return C.hXD(x.a,x.b,x.c,x.d,x.e)},
$S:335};(function inheritance(){var x=a.inherit
x(C.cma,B.jw)
x(C.cmc,B.iJ)})()
var y={h:B.as("O<F>"),b:B.as("F"),f:B.as("~")};(function constants(){var x=a.makeConstList
A.BO=new B.u(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,D.q)
A.m7=new B.u(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,D.q)
A.qp=new B.u(1,1,0.8784313725490196,0.4,D.q)
A.oq=new B.R(0,0,7,0)
A.a3d=new B.a0(983467,"MaterialIcons",!1)
A.atk=x([1],y.h)
A.cnh=x([1,2,3],y.h)
A.ax0=x([1,-1],y.h)
A.cNf=x([1,2,3,4,5,6,7],y.h)
A.d0J=x([1,2.76,5.4,8.93,13.3],y.h)
A.d2_=x([1,0.6,0.38,0.22,0.12],y.h)
A.d6H=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.h)
A.d6I=x([1,0.55,0.32,0.2,0.12,0.07],y.h)
A.dba=x([1,0.6,0.45,0.3,0.22,0.15],y.h)
A.dcn=x([1,2,3,4,5,6],y.h)
A.drV=x([1,2,3,4,6,8],y.h)
A.dsR=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.h)
A.duF=x([1,2,3,4,5,6,7,8],y.h)
A.dzf=x([1,0.18,0.06],y.h)
A.ejE={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"FIREWORK DESIGNER":5,"CIRCUIT LAB":6,"PERIODIC TABLE":7,"BODY EXPLORER":8,"SPIN THE WHEEL":9,"FOCUS TIMER":10,"MEMORY MATCH":11,"LUCKY POCKET":12,"ELECTRONICS LAB":13,"CONSTRUCTION LAB":14,"AI INVENTOR":15,"MAGNET LAB":16,"RADIO LAB":17,"POWER PLANT":18,"POWER GRID":19,"INTERNET JOURNEY":20,"ROBOT CODER":21,"BUG SMASHER":22,"ROCKET LANDER":23,"DATA SNAKE":24,"BINARY 2048":25,"SIGNAL BREAKER":26,"PASSWORD LAB":27,"WAVE LAB":28,"BUG HUNT":29,"OPTICS LAB":30,"ATOM BUILDER":31,"PIXEL TV":32}
A.aIz=new B.bu(A.ejE,["sparkle","sparkle","whoosh","click","bounce","pop","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","sparkle","lab","tech"],B.as("bu<n,n>"))
A.EM=new B.G(!0,D.ab,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hXC=B.T(B.as("n"),B.as("dK"))
$.cm9=B.a([],B.as("O<ajC>"))
$.hqU=0
$.atp="music"})()};
(a=>{a["MFg05MMymghJB7kp0hgdSElYLRY="]=a.current})($__dart_deferred_initializers__);