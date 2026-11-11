((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D={
hUe(b3,b4,b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=C.o.ao(22050*b4,1000),b0=a9*2,b1=new DataView(new ArrayBuffer(44+b0)),b2=new D.clG(b1)
b2.$2(0,"RIFF")
b1.setUint32(4,36+b0,!0)
b2.$2(8,"WAVE")
b2.$2(12,"fmt ")
b1.setUint32(16,16,!0)
b1.setUint16(20,1,!0)
b1.setUint16(22,1,!0)
b1.setUint32(24,22050,!0)
b1.setUint32(28,44100,!0)
b1.setUint16(32,2,!0)
b1.setUint16(34,16,!0)
b2.$2(36,"data")
b1.setUint32(40,b0,!0)
x=new B.e6()
x.cZ(3)
w=3
v=0.006
u=!1
t=0
switch(b7){case"piano":s=A.d4O
r=A.dap
w=3.4
break
case"organ":s=A.d9e
r=A.dpN
v=0.02
u=!0
break
case"bell":s=A.d0a
r=A.cZV
w=2.4
break
case"pluck":s=A.d4N
r=A.cLs
w=7
break
case"synth":s=A.dqI
r=A.dsw
v=0.012
u=!0
break
case"flute":s=A.dx6
r=A.clA
v=0.07
u=!0
t=0.035
break
default:s=A.asO
r=A.asO}b0=s.length
q=B.bZ(b0,0,!1,y.b)
for(p="saw"===b5,o="tri"===b5,n="noise"===b5,m="square"===b5,l=b7.length!==0,k=-w,j=k*0.12,i=t>0,h=b7!=="bell",g=b7!=="piano",f=b7==="pluck",e=0,d=0;d<a9;++d){a0=d/22050
a1=1-d/a9
a2=b3*(1+b6*a1)
if(l){for(a1=6.283185307179586*a2,a3=k*a0,a4=0,a5=0;a5<b0;++a5){a6=q[a5]+a1*r[a5]/22050
q[a5]=a6
a7=!h||!g||f?Math.exp(a3*(1+a5*0.35)):1
a4+=Math.sin(a6)*s[a5]*a7}a4/=1.9
if(i)a4+=(x.ag()*2-1)*t
a8=Math.min(1,a0/v)*Math.min(1,(a9-d)/1984.5)
a4*=u?a8:a8*Math.exp(j*a0)}else{e+=6.283185307179586*a2/22050
A:{if(m){a3=Math.sin(e)>=0?0.6:-0.6
break A}if(n){a3=(x.ag()*2-1)*0.8
break A}if(o){a3=0.6366197723675814*Math.asin(Math.sin(e))
break A}if(p){a3=C.k.F(e/6.283185307179586,1)*1.2-0.6
break A}a3=Math.sin(e)
break A}a4=a3*(Math.min(1,d/120)*Math.pow(a1,1.6))}b1.setInt16(44+d*2,C.o.E(C.k.V(a4*0.8*32e3),-32768,32767),!0)}return J.eT(C.dK.gaS(b1))},
dG(d,e,f,g,h,i){return D.hUg(d,e,f,g,h,i)},
hUg(d,e,f,g,h,i){var x=0,w=B.j(y.f),v=1,u=[],t,s,r,q,p,o
var $async$dG=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+C.k.V(d)+"|"+f+"|"+i+"|"+B.w(g)+"|"+e
s=$.hUd.c3(0,t,new D.clI(d,f,i,g,e))
if($.clF.length<12){q=B.ajc()
q.Nv(C.aR4)
$.clF.push(q)}q=$.hnZ
$.hnZ=q+1
r=$.clF[C.o.F(q,$.clF.length)]
x=6
return B.b(J.hHi(r,new B.a3T(s,null),h),$async$dG)
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
return B.i($async$dG,w)},
clG:function clG(d){this.a=d},
clI:function clI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},A
J=c[1]
B=c[0]
C=c[2]
D=a.updateHolder(c[38],D)
A=c[108]
var z=a.updateTypes([])
D.clG.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.aj(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:573}
D.clI.prototype={
$0(){var x=this
return D.hUe(x.a,x.b,x.c,x.d,x.e)},
$S:286};(function inheritance(){var x=a.inherit
x(D.clG,B.jx)
x(D.clI,B.iI)})()
var y={h:B.as("O<I>"),b:B.as("I"),f:B.as("~")};(function constants(){var x=a.makeConstList
A.ahv=new B.t(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,C.q)
A.Bt=new B.t(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,C.q)
A.m4=new B.t(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,C.q)
A.N8=new B.t(1,1,0.8784313725490196,0.4,C.q)
A.oh=new B.Q(0,0,7,0)
A.a2K=new B.a0(983467,"MaterialIcons",!1)
A.asO=x([1],y.h)
A.clA=x([1,2,3],y.h)
A.aws=x([1,-1],y.h)
A.cLs=x([1,2,3,4,5,6,7],y.h)
A.cZV=x([1,2.76,5.4,8.93,13.3],y.h)
A.d0a=x([1,0.6,0.38,0.22,0.12],y.h)
A.d4N=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.h)
A.d4O=x([1,0.55,0.32,0.2,0.12,0.07],y.h)
A.d9e=x([1,0.6,0.45,0.3,0.22,0.15],y.h)
A.dap=x([1,2,3,4,5,6],y.h)
A.dpN=x([1,2,3,4,6,8],y.h)
A.dqI=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.h)
A.dsw=x([1,2,3,4,5,6,7,8],y.h)
A.dx6=x([1,0.18,0.06],y.h)
A.eh4={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"FIREWORK DESIGNER":5,"CIRCUIT LAB":6,"PERIODIC TABLE":7,"BODY EXPLORER":8,"SPIN THE WHEEL":9,"FOCUS TIMER":10,"MEMORY MATCH":11,"LUCKY POCKET":12,"ELECTRONICS LAB":13,"CONSTRUCTION LAB":14,"AI INVENTOR":15,"MAGNET LAB":16,"RADIO LAB":17,"POWER PLANT":18,"POWER GRID":19,"INTERNET JOURNEY":20,"ROBOT CODER":21,"BUG SMASHER":22,"ROCKET LANDER":23,"DATA SNAKE":24,"BINARY 2048":25,"SIGNAL BREAKER":26,"PASSWORD LAB":27,"WAVE LAB":28,"BUG HUNT":29,"OPTICS LAB":30,"ATOM BUILDER":31,"PIXEL TV":32}
A.aI_=new B.bu(A.eh4,["sparkle","sparkle","whoosh","click","bounce","pop","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","sparkle","lab","tech"],B.as("bu<m,m>"))
A.EA=new B.F(!0,C.ac,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hUd=B.U(B.as("m"),B.as("dL"))
$.clF=B.a([],B.as("O<ajb>"))
$.hnZ=0
$.asY="music"})()};
(a=>{a["k+E6oco3x5aQbSmISE5Tm1PYEUk="]=a.current})($__dart_deferred_initializers__);