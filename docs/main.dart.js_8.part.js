((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h_5(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_A(d){var y,x,w,v
if(d==null){if(A.fa0()==null)$.fEf="en_US"
y=A.fa0()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h_5(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fIQ(d,e,f){var y,x,w,v
if(d==null){if(A.fa0()==null)$.fEf="en_US"
y=A.fa0()
y.toString
return A.fIQ(y,e,f)}if(e.$1(d))return d
x=[A.hFM(),A.hFO(),A.hFN(),new A.fwW(),new A.fwX(),new A.fwY()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hCB(d)},
hCB(d){throw B.P(B.dF('Invalid locale "'+d+'"',null))},
fGl(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h3V(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h_5(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fwW:function fwW(){},
fwX:function fwX(){},
fwY:function fwY(){},
fa0(){var y=B.aR($.bs.h(0,D.eua))
return y==null?$.fEf:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[233]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fwW.prototype={
$1(d){return A.fGl(A.h3V(d))},
$S:17}
A.fwX.prototype={
$1(d){return A.fGl(A.a_A(d))},
$S:17}
A.fwY.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hFM","a_A",1)
y(A,"hFN","fGl",0)
y(A,"hFO","h3V",0)})();(function inheritance(){var y=a.inheritMany
y(B.i2,[A.fwW,A.fwX,A.fwY])})();(function constants(){D.eua=new B.oG("Intl.locale")})();(function staticFields(){$.fEf=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hYr","fxw",()=>48)})()};
(a=>{a["ixLf4QWKSJ91Tl9H7tjn4AI3oOQ="]=a.current})($__dart_deferred_initializers__);