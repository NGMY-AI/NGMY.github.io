((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hgt(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1b(d){var y,x,w,v
if(d==null){if(A.fpB()==null)$.fV9="en_US"
y=A.fpB()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hgt(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b1(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fZW(d,e,f){var y,x,w,v
if(d==null){if(A.fpB()==null)$.fV9="en_US"
y=A.fpB()
y.toString
return A.fZW(y,e,f)}if(e.$1(d))return d
x=[A.hYa(),A.hYc(),A.hYb(),new A.fNC(),new A.fND(),new A.fNE()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hUS(d)},
hUS(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fXl(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hln(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hgt(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fNC:function fNC(){},
fND:function fND(){},
fNE:function fNE(){},
fpB(){var y=B.aU($.bx.h(0,D.eTy))
return y==null?$.fV9:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fNC.prototype={
$1(d){return A.fXl(A.hln(d))},
$S:17}
A.fND.prototype={
$1(d){return A.fXl(A.a1b(d))},
$S:17}
A.fNE.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hYa","a1b",1)
y(A,"hYb","fXl",0)
y(A,"hYc","hln",0)})();(function inheritance(){var y=a.inheritMany
y(B.hT,[A.fNC,A.fND,A.fNE])})();(function constants(){D.eTy=new B.p6("Intl.locale")})();(function staticFields(){$.fV9=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ig8","fOh",()=>48)})()};
(a=>{a["8mrgdjf9mHhvQZZR6VxT9bsqc4o="]=a.current})($__dart_deferred_initializers__);