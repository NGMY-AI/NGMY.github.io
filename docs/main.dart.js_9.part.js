((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hlq(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1E(d){var y,x,w,v
if(d==null){if(A.ftZ()==null)$.fZT="en_US"
y=A.ftZ()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hlq(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h3N(d,e,f){var y,x,w,v
if(d==null){if(A.ftZ()==null)$.fZT="en_US"
y=A.ftZ()
y.toString
return A.h3N(y,e,f)}if(e.$1(d))return d
x=[A.i2i(),A.i2k(),A.i2j(),new A.fSh(),new A.fSi(),new A.fSj()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hZY(d)},
hZY(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h15(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hqp(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hlq(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fSh:function fSh(){},
fSi:function fSi(){},
fSj:function fSj(){},
ftZ(){var y=B.aU($.bz.h(0,D.f1G))
return y==null?$.fZT:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fSh.prototype={
$1(d){return A.h15(A.hqp(d))},
$S:17}
A.fSi.prototype={
$1(d){return A.h15(A.a1E(d))},
$S:17}
A.fSj.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i2i","a1E",1)
y(A,"i2j","h15",0)
y(A,"i2k","hqp",0)})();(function inheritance(){var y=a.inheritMany
y(B.i_,[A.fSh,A.fSi,A.fSj])})();(function constants(){D.f1G=new B.pg("Intl.locale")})();(function staticFields(){$.fZT=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ill","fSY",()=>48)})()};
(a=>{a["+b3uL52jxD1XiqCBs+RnPIRnIPc="]=a.current})($__dart_deferred_initializers__);