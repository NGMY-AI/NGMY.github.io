((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hll(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1D(d){var y,x,w,v
if(d==null){if(A.ftU()==null)$.fZO="en_US"
y=A.ftU()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hll(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h3I(d,e,f){var y,x,w,v
if(d==null){if(A.ftU()==null)$.fZO="en_US"
y=A.ftU()
y.toString
return A.h3I(y,e,f)}if(e.$1(d))return d
x=[A.i2d(),A.i2f(),A.i2e(),new A.fSc(),new A.fSd(),new A.fSe()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hZT(d)},
hZT(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h10(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hqk(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hll(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fSc:function fSc(){},
fSd:function fSd(){},
fSe:function fSe(){},
ftU(){var y=B.aU($.bz.h(0,D.f1E))
return y==null?$.fZO:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fSc.prototype={
$1(d){return A.h10(A.hqk(d))},
$S:17}
A.fSd.prototype={
$1(d){return A.h10(A.a1D(d))},
$S:17}
A.fSe.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i2d","a1D",1)
y(A,"i2e","h10",0)
y(A,"i2f","hqk",0)})();(function inheritance(){var y=a.inheritMany
y(B.i_,[A.fSc,A.fSd,A.fSe])})();(function constants(){D.f1E=new B.pf("Intl.locale")})();(function staticFields(){$.fZO=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ilg","fST",()=>48)})()};
(a=>{a["t7GXbKIM8/dUI/s2m+LIDFnH1K0="]=a.current})($__dart_deferred_initializers__);