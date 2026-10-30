((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hma(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1F(d){var y,x,w,v
if(d==null){if(A.fuF()==null)$.h_B="en_US"
y=A.fuF()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hma(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h4v(d,e,f){var y,x,w,v
if(d==null){if(A.fuF()==null)$.h_B="en_US"
y=A.fuF()
y.toString
return A.h4v(y,e,f)}if(e.$1(d))return d
x=[A.i35(),A.i37(),A.i36(),new A.fSY(),new A.fSZ(),new A.fT_()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i_K(d)},
i_K(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h1O(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hr9(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hma(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fSY:function fSY(){},
fSZ:function fSZ(){},
fT_:function fT_(){},
fuF(){var y=B.aU($.bz.h(0,D.f1U))
return y==null?$.h_B:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fSY.prototype={
$1(d){return A.h1O(A.hr9(d))},
$S:17}
A.fSZ.prototype={
$1(d){return A.h1O(A.a1F(d))},
$S:17}
A.fT_.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i35","a1F",1)
y(A,"i36","h1O",0)
y(A,"i37","hr9",0)})();(function inheritance(){var y=a.inheritMany
y(B.i_,[A.fSY,A.fSZ,A.fT_])})();(function constants(){D.f1U=new B.pg("Intl.locale")})();(function staticFields(){$.h_B=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ima","fTF",()=>48)})()};
(a=>{a["XeHOFSJ26+UZLB3GE1l2GKjGSWM="]=a.current})($__dart_deferred_initializers__);