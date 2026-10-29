((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hl0(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1x(d){var y,x,w,v
if(d==null){if(A.ftC()==null)$.fZv="en_US"
y=A.ftC()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hl0(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h3o(d,e,f){var y,x,w,v
if(d==null){if(A.ftC()==null)$.fZv="en_US"
y=A.ftC()
y.toString
return A.h3o(y,e,f)}if(e.$1(d))return d
x=[A.i1T(),A.i1V(),A.i1U(),new A.fRV(),new A.fRW(),new A.fRX()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hZy(d)},
hZy(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h0I(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hq_(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hl0(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fRV:function fRV(){},
fRW:function fRW(){},
fRX:function fRX(){},
ftC(){var y=B.aU($.bz.h(0,D.f1w))
return y==null?$.fZv:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[262]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fRV.prototype={
$1(d){return A.h0I(A.hq_(d))},
$S:17}
A.fRW.prototype={
$1(d){return A.h0I(A.a1x(d))},
$S:17}
A.fRX.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i1T","a1x",1)
y(A,"i1U","h0I",0)
y(A,"i1V","hq_",0)})();(function inheritance(){var y=a.inheritMany
y(B.hZ,[A.fRV,A.fRW,A.fRX])})();(function constants(){D.f1w=new B.pf("Intl.locale")})();(function staticFields(){$.fZv=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ikW","fSB",()=>48)})()};
(a=>{a["H0xgn7n9vE8gFIqEZQ/2BqdkYGk="]=a.current})($__dart_deferred_initializers__);