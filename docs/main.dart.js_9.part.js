((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hm1(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1F(d){var y,x,w,v
if(d==null){if(A.fux()==null)$.h_t="en_US"
y=A.fux()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hm1(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h4m(d,e,f){var y,x,w,v
if(d==null){if(A.fux()==null)$.h_t="en_US"
y=A.fux()
y.toString
return A.h4m(y,e,f)}if(e.$1(d))return d
x=[A.i2Y(),A.i3_(),A.i2Z(),new A.fSQ(),new A.fSR(),new A.fSS()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i_C(d)},
i_C(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h1G(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hr1(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hm1(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fSQ:function fSQ(){},
fSR:function fSR(){},
fSS:function fSS(){},
fux(){var y=B.aU($.bz.h(0,D.f1S))
return y==null?$.h_t:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fSQ.prototype={
$1(d){return A.h1G(A.hr1(d))},
$S:17}
A.fSR.prototype={
$1(d){return A.h1G(A.a1F(d))},
$S:17}
A.fSS.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i2Y","a1F",1)
y(A,"i2Z","h1G",0)
y(A,"i3_","hr1",0)})();(function inheritance(){var y=a.inheritMany
y(B.i_,[A.fSQ,A.fSR,A.fSS])})();(function constants(){D.f1S=new B.pg("Intl.locale")})();(function staticFields(){$.h_t=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"im1","fTw",()=>48)})()};
(a=>{a["0HBFUXEvmm5hnqKVAss1ABgqovM="]=a.current})($__dart_deferred_initializers__);