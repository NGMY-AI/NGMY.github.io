((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,C={
hR7(b3,b4,b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=D.o.ao(22050*b4,1000),b0=a9*2,b1=new DataView(new ArrayBuffer(44+b0)),b2=new C.cks(b1)
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
x=new B.e4()
x.cY(3)
w=3
v=0.006
u=!1
t=0
switch(b7){case"piano":s=A.d2M
r=A.d8k
w=3.4
break
case"organ":s=A.d79
r=A.dnC
v=0.02
u=!0
break
case"bell":s=A.cZ9
r=A.cXU
w=2.4
break
case"pluck":s=A.d2L
r=A.cJt
w=7
break
case"synth":s=A.dow
r=A.dqk
v=0.012
u=!0
break
case"flute":s=A.duV
r=A.cjC
v=0.07
u=!0
t=0.035
break
default:s=A.as_
r=A.as_}b0=s.length
q=B.bZ(b0,0,!1,y.b)
for(p="saw"===b5,o="tri"===b5,n="noise"===b5,m="square"===b5,l=b7.length!==0,k=-w,j=k*0.12,i=t>0,h=b7!=="bell",g=b7!=="piano",f=b7==="pluck",e=0,d=0;d<a9;++d){a0=d/22050
a1=1-d/a9
a2=b3*(1+b6*a1)
if(l){for(a1=6.283185307179586*a2,a3=k*a0,a4=0,a5=0;a5<b0;++a5){a6=q[a5]+a1*r[a5]/22050
q[a5]=a6
a7=!h||!g||f?Math.exp(a3*(1+a5*0.35)):1
a4+=Math.sin(a6)*s[a5]*a7}a4/=1.9
if(i)a4+=(x.af()*2-1)*t
a8=Math.min(1,a0/v)*Math.min(1,(a9-d)/1984.5)
a4*=u?a8:a8*Math.exp(j*a0)}else{e+=6.283185307179586*a2/22050
A:{if(m){a3=Math.sin(e)>=0?0.6:-0.6
break A}if(n){a3=(x.af()*2-1)*0.8
break A}if(o){a3=0.6366197723675814*Math.asin(Math.sin(e))
break A}if(p){a3=D.k.F(e/6.283185307179586,1)*1.2-0.6
break A}a3=Math.sin(e)
break A}a4=a3*(Math.min(1,d/120)*Math.pow(a1,1.6))}b1.setInt16(44+d*2,D.o.E(D.k.V(a4*0.8*32e3),-32768,32767),!0)}return J.eS(D.dK.gaR(b1))},
dF(d,e,f,g,h,i){return C.hR9(d,e,f,g,h,i)},
hR9(d,e,f,g,h,i){var x=0,w=B.j(y.f),v=1,u=[],t,s,r,q,p,o
var $async$dF=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+D.k.V(d)+"|"+f+"|"+i+"|"+B.w(g)+"|"+e
s=$.hR6.c3(0,t,new C.cku(d,f,i,g,e))
if($.ckr.length<12){q=B.aiU()
q.Nm(D.aQ4)
$.ckr.push(q)}q=$.hl7
$.hl7=q+1
r=$.ckr[D.o.F(q,$.ckr.length)]
x=6
return B.b(J.hEd(r,new B.a3F(s,null),h),$async$dF)
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
return B.i($async$dF,w)},
cks:function cks(d){this.a=d},
cku:function cku(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},A
J=c[1]
B=c[0]
D=c[2]
C=a.updateHolder(c[38],C)
A=c[109]
var z=a.updateTypes([])
C.cks.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.aj(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:748}
C.cku.prototype={
$0(){var x=this
return C.hR7(x.a,x.b,x.c,x.d,x.e)},
$S:321};(function inheritance(){var x=a.inherit
x(C.cks,B.ju)
x(C.cku,B.iG)})()
var y={h:B.as("O<J>"),b:B.as("J"),f:B.as("~")};(function constants(){var x=a.makeConstList
A.agM=new B.u(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,D.q)
A.Bl=new B.u(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,D.q)
A.nj=new B.u(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,D.q)
A.rv=new B.Q(0,0,7,0)
A.as_=x([1],y.h)
A.cjC=x([1,2,3],y.h)
A.avD=x([1,-1],y.h)
A.cJt=x([1,2,3,4,5,6,7],y.h)
A.cXU=x([1,2.76,5.4,8.93,13.3],y.h)
A.cZ9=x([1,0.6,0.38,0.22,0.12],y.h)
A.d2L=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.h)
A.d2M=x([1,0.55,0.32,0.2,0.12,0.07],y.h)
A.d79=x([1,0.6,0.45,0.3,0.22,0.15],y.h)
A.d8k=x([1,2,3,4,5,6],y.h)
A.dnC=x([1,2,3,4,6,8],y.h)
A.dow=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.h)
A.dqk=x([1,2,3,4,5,6,7,8],y.h)
A.duV=x([1,0.18,0.06],y.h)
A.eeJ={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"FIREWORK DESIGNER":5,"CIRCUIT LAB":6,"PERIODIC TABLE":7,"BODY EXPLORER":8,"SPIN THE WHEEL":9,"FOCUS TIMER":10,"MEMORY MATCH":11,"LUCKY POCKET":12,"ELECTRONICS LAB":13,"CONSTRUCTION LAB":14,"AI INVENTOR":15,"MAGNET LAB":16,"RADIO LAB":17,"POWER PLANT":18,"POWER GRID":19,"INTERNET JOURNEY":20,"ROBOT CODER":21,"BUG SMASHER":22,"ROCKET LANDER":23,"DATA SNAKE":24,"BINARY 2048":25,"SIGNAL BREAKER":26,"PASSWORD LAB":27,"WAVE LAB":28,"BUG HUNT":29,"OPTICS LAB":30,"ATOM BUILDER":31,"PIXEL TV":32}
A.aH3=new B.bw(A.eeJ,["sparkle","sparkle","whoosh","click","bounce","pop","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","sparkle","lab","tech"],B.as("bw<m,m>"))
A.Ej=new B.F(!0,D.ad,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hR6=B.U(B.as("m"),B.as("dK"))
$.ckr=B.a([],B.as("O<aiT>"))
$.hl7=0
$.asD="music"})()};
(a=>{a["Yi0xR0X1xXjUCcHoAPPV0F4qXmA="]=a.current})($__dart_deferred_initializers__);