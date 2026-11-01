((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hnb(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1J(d){var y,x,w,v
if(d==null){if(A.fvB()==null)$.h0B="en_US"
y=A.fvB()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hnb(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b6(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h5x(d,e,f){var y,x,w,v
if(d==null){if(A.fvB()==null)$.h0B="en_US"
y=A.fvB()
y.toString
return A.h5x(y,e,f)}if(e.$1(d))return d
x=[A.i4a(),A.i4c(),A.i4b(),new A.fTW(),new A.fTX(),new A.fTY()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i0O(d)},
i0O(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h2R(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hsb(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hnb(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fTW:function fTW(){},
fTX:function fTX(){},
fTY:function fTY(){},
fvB(){var y=B.aU($.bz.h(0,D.f2B))
return y==null?$.h0B:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fTW.prototype={
$1(d){return A.h2R(A.hsb(d))},
$S:17}
A.fTX.prototype={
$1(d){return A.h2R(A.a1J(d))},
$S:17}
A.fTY.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i4a","a1J",1)
y(A,"i4b","h2R",0)
y(A,"i4c","hsb",0)})();(function inheritance(){var y=a.inheritMany
y(B.i0,[A.fTW,A.fTX,A.fTY])})();(function constants(){D.f2B=new B.ph("Intl.locale")})();(function staticFields(){$.h0B=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ing","fUD",()=>48)})()};
(a=>{a["0hdM7j7pd+cMT3YTmHzOnVhieEo="]=a.current})($__dart_deferred_initializers__);