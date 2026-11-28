((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hQU(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a4n(d){var y,x,w,v
if(d==null){if(A.fTi()==null)$.hsd="en_US"
y=A.fTi()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hQU(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hy4(d,e,f){var y,x,w,v
if(d==null){if(A.fTi()==null)$.hsd="en_US"
y=A.fTi()
y.toString
return A.hy4(y,e,f)}if(e.$1(d))return d
x=[A.iBE(),A.iBG(),A.iBF(),new A.hke(),new A.hkf(),new A.hkg()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iy4(d)},
iy4(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
huT(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hWY(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hQU(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hke:function hke(){},
hkf:function hkf(){},
hkg:function hkg(){},
fTi(){var y=B.aW($.bG.h(0,D.fKV))
return y==null?$.hsd:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[324]
var z=a.updateTypes(["o(o)","o(o?)"])
A.hke.prototype={
$1(d){return A.huT(A.hWY(d))},
$S:15}
A.hkf.prototype={
$1(d){return A.huT(A.a4n(d))},
$S:15}
A.hkg.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iBE","a4n",1)
y(A,"iBF","huT",0)
y(A,"iBG","hWY",0)})();(function inheritance(){var y=a.inheritMany
y(B.hs,[A.hke,A.hkf,A.hkg])})();(function constants(){D.fKV=new B.q2("Intl.locale")})();(function staticFields(){$.hsd=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iWg","hl0",()=>48)})()};
(a=>{a["0CT414hcREGzTqw6bfe9sWig3zw="]=a.current})($__dart_deferred_initializers__);