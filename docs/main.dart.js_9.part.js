((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hh3(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1f(d){var y,x,w,v
if(d==null){if(A.fqa()==null)$.fVJ="en_US"
y=A.fqa()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hh3(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b1(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h_w(d,e,f){var y,x,w,v
if(d==null){if(A.fqa()==null)$.fVJ="en_US"
y=A.fqa()
y.toString
return A.h_w(y,e,f)}if(e.$1(d))return d
x=[A.hYN(),A.hYP(),A.hYO(),new A.fOb(),new A.fOc(),new A.fOd()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hVu(d)},
hVu(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fXV(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hlZ(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hh3(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fOb:function fOb(){},
fOc:function fOc(){},
fOd:function fOd(){},
fqa(){var y=B.aU($.by.h(0,D.eUm))
return y==null?$.fVJ:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[261]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fOb.prototype={
$1(d){return A.fXV(A.hlZ(d))},
$S:17}
A.fOc.prototype={
$1(d){return A.fXV(A.a1f(d))},
$S:17}
A.fOd.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hYN","a1f",1)
y(A,"hYO","fXV",0)
y(A,"hYP","hlZ",0)})();(function inheritance(){var y=a.inheritMany
y(B.hU,[A.fOb,A.fOc,A.fOd])})();(function constants(){D.eUm=new B.p7("Intl.locale")})();(function staticFields(){$.fVJ=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"igM","fOR",()=>48)})()};
(a=>{a["Iwg7rfQren5prdSa0k4F6ABksxM="]=a.current})($__dart_deferred_initializers__);