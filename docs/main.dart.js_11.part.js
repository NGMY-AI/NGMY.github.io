((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hPe(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a4d(d){var y,x,w,v
if(d==null){if(A.fS5()==null)$.hqL="en_US"
y=A.fS5()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hPe(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hwx(d,e,f){var y,x,w,v
if(d==null){if(A.fS5()==null)$.hqL="en_US"
y=A.fS5()
y.toString
return A.hwx(y,e,f)}if(e.$1(d))return d
x=[A.izL(),A.izN(),A.izM(),new A.hiN(),new A.hiO(),new A.hiP()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iwf(d)},
iwf(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
htp(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hVh(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hPe(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hiN:function hiN(){},
hiO:function hiO(){},
hiP:function hiP(){},
fS5(){var y=B.aV($.bG.h(0,D.fID))
return y==null?$.hqL:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[323]
var z=a.updateTypes(["o(o)","o(o?)"])
A.hiN.prototype={
$1(d){return A.htp(A.hVh(d))},
$S:15}
A.hiO.prototype={
$1(d){return A.htp(A.a4d(d))},
$S:15}
A.hiP.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"izL","a4d",1)
y(A,"izM","htp",0)
y(A,"izN","hVh",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.hiN,A.hiO,A.hiP])})();(function constants(){D.fID=new B.q2("Intl.locale")})();(function staticFields(){$.hqL=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iUc","hjz",()=>48)})()};
(a=>{a["9iVQkxqZQW6XeVg0cgALhjY80lw="]=a.current})($__dart_deferred_initializers__);