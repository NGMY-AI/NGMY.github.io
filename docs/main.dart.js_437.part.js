((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D={
i8b(a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=C.o.ao(22050*b0,1000),a6=a5*2,a7=new DataView(new ArrayBuffer(44+a6)),a8=new D.cpb(a7)
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
x=new B.e2()
x.cT(3)
w=3
v=0.006
u=!1
t=0
switch(b3){case"piano":s=A.dds
r=A.djH
w=3.4
break
case"organ":s=A.dip
r=A.dAh
v=0.02
u=!0
break
case"bell":s=A.d8g
r=A.d6T
w=2.4
break
case"pluck":s=A.ddr
r=A.cSK
w=7
break
case"synth":s=A.dBm
r=A.dDi
v=0.012
u=!0
break
case"flute":s=A.dIo
r=A.cst
v=0.07
u=!0
t=0.035
break
default:s=A.avF
r=A.avF}a6=s.length
q=B.c3(a6,0,!1,y.b)
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
case"saw":d=C.i.F(i/6.283185307179586,1)*1.2-0.6
break
default:d=Math.sin(i)
break}a0=d*(Math.min(1,h/120)*Math.pow(f,1.6))}a7.setInt16(44+h*2,C.o.D(C.i.S(a0*0.8*32e3),-32768,32767),!0)}return J.eU(C.dM.gaS(a7))},
dF(d,e,f,g,h,i){return D.i8d(d,e,f,g,h,i)},
i8d(d,e,f,g,h,i){var x=0,w=B.j(y.f),v=1,u=[],t,s,r,q,p,o
var $async$dF=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+C.i.S(d)+"|"+f+"|"+i+"|"+B.v(g)+"|"+e
s=$.i8a.c_(0,t,new D.cpd(d,f,i,g,e))
if($.cpa.length<12){q=B.akE()
q.O7(C.aU6)
$.cpa.push(q)}q=$.hBb
$.hBb=q+1
r=$.cpa[C.o.F(q,$.cpa.length)]
x=6
return B.b(J.hVN(r,new B.a5f(s,null),h),$async$dF)
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
cpb:function cpb(d){this.a=d},
cpd:function cpd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},A
J=c[1]
B=c[0]
C=c[2]
D=a.updateHolder(c[50],D)
A=c[165]
var z=a.updateTypes([])
D.cpb.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.ak(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:766}
D.cpd.prototype={
$0(){var x=this
return D.i8b(x.a,x.b,x.c,x.d,x.e)},
$S:247};(function inheritance(){var x=a.inherit
x(D.cpb,B.ie)
x(D.cpd,B.hS)})()
var y={h:B.ar("N<H>"),b:B.ar("H"),f:B.ar("~")};(function constants(){var x=a.makeConstList
A.CA=new B.u(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,C.q)
A.mn=new B.u(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,C.q)
A.qV=new B.u(1,1,0.8784313725490196,0.4,C.q)
A.oS=new B.R(0,0,7,0)
A.a4K=new B.a_(983467,"MaterialIcons",!1)
A.avF=x([1],y.h)
A.cst=x([1,2,3],y.h)
A.azk=x([1,-1],y.h)
A.cSK=x([1,2,3,4,5,6,7],y.h)
A.d6T=x([1,2.76,5.4,8.93,13.3],y.h)
A.d8g=x([1,0.6,0.38,0.22,0.12],y.h)
A.ddr=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.h)
A.dds=x([1,0.55,0.32,0.2,0.12,0.07],y.h)
A.dip=x([1,0.6,0.45,0.3,0.22,0.15],y.h)
A.djH=x([1,2,3,4,5,6],y.h)
A.dAh=x([1,2,3,4,6,8],y.h)
A.dBm=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.h)
A.dDi=x([1,2,3,4,5,6,7,8],y.h)
A.dIo=x([1,0.18,0.06],y.h)
A.ev4={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"FIREWORK DESIGNER":5,"CIRCUIT LAB":6,"PERIODIC TABLE":7,"BODY EXPLORER":8,"SPIN THE WHEEL":9,"FOCUS TIMER":10,"MEMORY MATCH":11,"LUCKY POCKET":12,"ELECTRONICS LAB":13,"CONSTRUCTION LAB":14,"AI INVENTOR":15,"MAGNET LAB":16,"RADIO LAB":17,"POWER PLANT":18,"POWER GRID":19,"INTERNET JOURNEY":20,"ROBOT CODER":21,"BUG SMASHER":22,"ROCKET LANDER":23,"DATA SNAKE":24,"BINARY 2048":25,"SIGNAL BREAKER":26,"PASSWORD LAB":27,"WAVE LAB":28,"BUG HUNT":29,"OPTICS LAB":30,"ATOM BUILDER":31,"PIXEL TV":32}
A.aKX=new B.bl(A.ev4,["sparkle","sparkle","whoosh","click","bounce","pop","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","sparkle","lab","tech"],B.ar("bl<m,m>"))
A.ada=new B.G(!0,C.aF,null,null,null,null,10.5,C.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.i8a=B.S(B.ar("m"),B.ar("dC"))
$.cpa=B.a([],B.ar("N<akD>"))
$.hBb=0
$.aux="music"})()};
(a=>{a["hiRDBQpEcN+IMQBxZR01ZqQQfS4="]=a.current})($__dart_deferred_initializers__);