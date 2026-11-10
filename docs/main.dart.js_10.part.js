((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hus(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2f(d){var y,x,w,v
if(d==null){if(A.fBW()==null)$.h7E="en_US"
y=A.fBW()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hus(d)
if(x===-1)return d
w=C.a.au(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hcC(d,e,f){var y,x,w,v
if(d==null){if(A.fBW()==null)$.h7E="en_US"
y=A.fBW()
y.toString
return A.hcC(y,e,f)}if(e.$1(d))return d
x=[A.icc(),A.ice(),A.icd(),new A.h_S(),new A.h_T(),new A.h_U()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i8L(d)},
i8L(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
h9V(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hzF(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hus(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.au(d,0,x).toLowerCase()},
h_S:function h_S(){},
h_T:function h_T(){},
h_U:function h_U(){},
fBW(){var y=B.aS($.bB.h(0,D.fgo))
return y==null?$.h7E:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h_S.prototype={
$1(d){return A.h9V(A.hzF(d))},
$S:17}
A.h_T.prototype={
$1(d){return A.h9V(A.a2f(d))},
$S:17}
A.h_U.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"icc","a2f",1)
y(A,"icd","h9V",0)
y(A,"ice","hzF",0)})();(function inheritance(){var y=a.inheritMany
y(B.hy,[A.h_S,A.h_T,A.h_U])})();(function constants(){D.fgo=new B.pu("Intl.locale")})();(function staticFields(){$.h7E=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ivr","h0B",()=>48)})()};
(a=>{a["J24XLF4ilFfKKP1Tq1ip1ilB/B4="]=a.current})($__dart_deferred_initializers__);