((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hl8(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1H(d){var y,x,w,v
if(d==null){if(A.ft9()==null)$.fZr="en_US"
y=A.ft9()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hl8(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h3p(d,e,f){var y,x,w,v
if(d==null){if(A.ft9()==null)$.fZr="en_US"
y=A.ft9()
y.toString
return A.h3p(y,e,f)}if(e.$1(d))return d
x=[A.i2n(),A.i2p(),A.i2o(),new A.fRK(),new A.fRL(),new A.fRM()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hZX(d)},
hZX(d){throw B.V(B.dH('Invalid locale "'+d+'"',null))},
h0G(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hqe(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hl8(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fRK:function fRK(){},
fRL:function fRL(){},
fRM:function fRM(){},
ft9(){var y=B.aU($.bA.h(0,D.f4d))
return y==null?$.fZr:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[52],A)
D=c[264]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fRK.prototype={
$1(d){return A.h0G(A.hqe(d))},
$S:17}
A.fRL.prototype={
$1(d){return A.h0G(A.a1H(d))},
$S:17}
A.fRM.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i2n","a1H",1)
y(A,"i2o","h0G",0)
y(A,"i2p","hqe",0)})();(function inheritance(){var y=a.inheritMany
y(B.hS,[A.fRK,A.fRL,A.fRM])})();(function constants(){D.f4d=new B.pf("Intl.locale")})();(function staticFields(){$.fZr=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ils","fSr",()=>48)})()};
(a=>{a["p+76Q+28vEIitbSPPGBI//EzQQA="]=a.current})($__dart_deferred_initializers__);