((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hlF(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1E(d){var y,x,w,v
if(d==null){if(A.fud()==null)$.h_7="en_US"
y=A.fud()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hlF(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h41(d,e,f){var y,x,w,v
if(d==null){if(A.fud()==null)$.h_7="en_US"
y=A.fud()
y.toString
return A.h41(y,e,f)}if(e.$1(d))return d
x=[A.i2x(),A.i2z(),A.i2y(),new A.fSw(),new A.fSx(),new A.fSy()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i_c(d)},
i_c(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h1k(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hqE(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hlF(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fSw:function fSw(){},
fSx:function fSx(){},
fSy:function fSy(){},
fud(){var y=B.aU($.bz.h(0,D.f1H))
return y==null?$.h_7:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fSw.prototype={
$1(d){return A.h1k(A.hqE(d))},
$S:17}
A.fSx.prototype={
$1(d){return A.h1k(A.a1E(d))},
$S:17}
A.fSy.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i2x","a1E",1)
y(A,"i2y","h1k",0)
y(A,"i2z","hqE",0)})();(function inheritance(){var y=a.inheritMany
y(B.i_,[A.fSw,A.fSx,A.fSy])})();(function constants(){D.f1H=new B.pg("Intl.locale")})();(function staticFields(){$.h_7=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ilA","fTc",()=>48)})()};
(a=>{a["Sgq4RZ0s4FQwPslv905jY3DAHoE="]=a.current})($__dart_deferred_initializers__);