((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hl2(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1z(d){var y,x,w,v
if(d==null){if(A.ftE()==null)$.fZx="en_US"
y=A.ftE()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hl2(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h3q(d,e,f){var y,x,w,v
if(d==null){if(A.ftE()==null)$.fZx="en_US"
y=A.ftE()
y.toString
return A.h3q(y,e,f)}if(e.$1(d))return d
x=[A.i1V(),A.i1X(),A.i1W(),new A.fRX(),new A.fRY(),new A.fRZ()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hZA(d)},
hZA(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h0K(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hq1(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hl2(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fRX:function fRX(){},
fRY:function fRY(){},
fRZ:function fRZ(){},
ftE(){var y=B.aU($.bz.h(0,D.f1y))
return y==null?$.fZx:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[262]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fRX.prototype={
$1(d){return A.h0K(A.hq1(d))},
$S:17}
A.fRY.prototype={
$1(d){return A.h0K(A.a1z(d))},
$S:17}
A.fRZ.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i1V","a1z",1)
y(A,"i1W","h0K",0)
y(A,"i1X","hq1",0)})();(function inheritance(){var y=a.inheritMany
y(B.hZ,[A.fRX,A.fRY,A.fRZ])})();(function constants(){D.f1y=new B.pf("Intl.locale")})();(function staticFields(){$.fZx=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ikY","fSD",()=>48)})()};
(a=>{a["37ii3Ny04HYGPSk9WcBIwdunj8A="]=a.current})($__dart_deferred_initializers__);