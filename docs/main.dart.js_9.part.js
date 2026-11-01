((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hmb(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1F(d){var y,x,w,v
if(d==null){if(A.fuG()==null)$.h_D="en_US"
y=A.fuG()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hmb(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h4y(d,e,f){var y,x,w,v
if(d==null){if(A.fuG()==null)$.h_D="en_US"
y=A.fuG()
y.toString
return A.h4y(y,e,f)}if(e.$1(d))return d
x=[A.i37(),A.i39(),A.i38(),new A.fSZ(),new A.fT_(),new A.fT0()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i_M(d)},
i_M(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h1R(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hra(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hmb(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fSZ:function fSZ(){},
fT_:function fT_(){},
fT0:function fT0(){},
fuG(){var y=B.aU($.bz.h(0,D.f1V))
return y==null?$.h_D:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fSZ.prototype={
$1(d){return A.h1R(A.hra(d))},
$S:17}
A.fT_.prototype={
$1(d){return A.h1R(A.a1F(d))},
$S:17}
A.fT0.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i37","a1F",1)
y(A,"i38","h1R",0)
y(A,"i39","hra",0)})();(function inheritance(){var y=a.inheritMany
y(B.i_,[A.fSZ,A.fT_,A.fT0])})();(function constants(){D.f1V=new B.pg("Intl.locale")})();(function staticFields(){$.h_D=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"imd","fTG",()=>48)})()};
(a=>{a["VadUpZ7SsBygy85P1CYFDHac5Sg="]=a.current})($__dart_deferred_initializers__);