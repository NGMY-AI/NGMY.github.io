((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hlt(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1J(d){var y,x,w,v
if(d==null){if(A.fts()==null)$.fZL="en_US"
y=A.fts()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hlt(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h3J(d,e,f){var y,x,w,v
if(d==null){if(A.fts()==null)$.fZL="en_US"
y=A.fts()
y.toString
return A.h3J(y,e,f)}if(e.$1(d))return d
x=[A.i2M(),A.i2O(),A.i2N(),new A.fS2(),new A.fS3(),new A.fS4()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i_m(d)},
i_m(d){throw B.V(B.dH('Invalid locale "'+d+'"',null))},
h1_(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hqz(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hlt(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fS2:function fS2(){},
fS3:function fS3(){},
fS4:function fS4(){},
fts(){var y=B.aU($.bB.h(0,D.f75))
return y==null?$.fZL:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[52],A)
D=c[265]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fS2.prototype={
$1(d){return A.h1_(A.hqz(d))},
$S:17}
A.fS3.prototype={
$1(d){return A.h1_(A.a1J(d))},
$S:17}
A.fS4.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i2M","a1J",1)
y(A,"i2N","h1_",0)
y(A,"i2O","hqz",0)})();(function inheritance(){var y=a.inheritMany
y(B.hS,[A.fS2,A.fS3,A.fS4])})();(function constants(){D.f75=new B.pj("Intl.locale")})();(function staticFields(){$.fZL=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ilR","fSK",()=>48)})()};
(a=>{a["mrFo2KM+OIe9KdZYMTtgWNbvDig="]=a.current})($__dart_deferred_initializers__);