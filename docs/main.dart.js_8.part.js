((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hdJ(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a10(d){var y,x,w,v
if(d==null){if(A.fnb()==null)$.fSu="en_US"
y=A.fnb()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hdJ(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b0(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fXd(d,e,f){var y,x,w,v
if(d==null){if(A.fnb()==null)$.fSu="en_US"
y=A.fnb()
y.toString
return A.fXd(y,e,f)}if(e.$1(d))return d
x=[A.hVj(),A.hVl(),A.hVk(),new A.fL_(),new A.fL0(),new A.fL1()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hS0(d)},
hS0(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fUD(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hiB(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hdJ(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fL_:function fL_(){},
fL0:function fL0(){},
fL1:function fL1(){},
fnb(){var y=B.aT($.bx.h(0,D.eRG))
return y==null?$.fSu:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[258]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fL_.prototype={
$1(d){return A.fUD(A.hiB(d))},
$S:17}
A.fL0.prototype={
$1(d){return A.fUD(A.a10(d))},
$S:17}
A.fL1.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hVj","a10",1)
y(A,"hVk","fUD",0)
y(A,"hVl","hiB",0)})();(function inheritance(){var y=a.inheritMany
y(B.hT,[A.fL_,A.fL0,A.fL1])})();(function constants(){D.eRG=new B.p2("Intl.locale")})();(function staticFields(){$.fSu=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"idb","fLF",()=>48)})()};
(a=>{a["D4TO31RYGPUZoSrlQZlI0ByMk1g="]=a.current})($__dart_deferred_initializers__);