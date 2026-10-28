((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h9S(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0A(d){var y,x,w,v
if(d==null){if(A.fjD()==null)$.fOI="en_US"
y=A.fjD()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h9S(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b_(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fTr(d,e,f){var y,x,w,v
if(d==null){if(A.fjD()==null)$.fOI="en_US"
y=A.fjD()
y.toString
return A.fTr(y,e,f)}if(e.$1(d))return d
x=[A.hRh(),A.hRj(),A.hRi(),new A.fHm(),new A.fHn(),new A.fHo()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hO_(d)},
hO_(d){throw B.T(B.dI('Invalid locale "'+d+'"',null))},
fQR(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
heL(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h9S(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fHm:function fHm(){},
fHn:function fHn(){},
fHo:function fHo(){},
fjD(){var y=B.aT($.bw.h(0,D.eNh))
return y==null?$.fOI:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[234]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fHm.prototype={
$1(d){return A.fQR(A.heL(d))},
$S:17}
A.fHn.prototype={
$1(d){return A.fQR(A.a0A(d))},
$S:17}
A.fHo.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hRh","a0A",1)
y(A,"hRi","fQR",0)
y(A,"hRj","heL",0)})();(function inheritance(){var y=a.inheritMany
y(B.i7,[A.fHm,A.fHn,A.fHo])})();(function constants(){D.eNh=new B.oX("Intl.locale")})();(function staticFields(){$.fOI=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"i99","fHY",()=>48)})()};
(a=>{a["tBMmGDi9rm6j3rLjrqH6gf0dA3Y="]=a.current})($__dart_deferred_initializers__);