((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hzU(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a33(d){var y,x,w,v
if(d==null){if(A.fGn()==null)$.hcE="en_US"
y=A.fGn()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hzU(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hhU(d,e,f){var y,x,w,v
if(d==null){if(A.fGn()==null)$.hcE="en_US"
y=A.fGn()
y.toString
return A.hhU(y,e,f)}if(e.$1(d))return d
x=[A.iiW(),A.iiY(),A.iiX(),new A.h4P(),new A.h4Q(),new A.h4R()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ifs(d)},
ifs(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
hf4(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hFm(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hzU(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h4P:function h4P(){},
h4Q:function h4Q(){},
h4R:function h4R(){},
fGn(){var y=B.aV($.bF.h(0,D.flX))
return y==null?$.hcE:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[287]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h4P.prototype={
$1(d){return A.hf4(A.hFm(d))},
$S:17}
A.h4Q.prototype={
$1(d){return A.hf4(A.a33(d))},
$S:17}
A.h4R.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iiW","a33",1)
y(A,"iiX","hf4",0)
y(A,"iiY","hFm",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4P,A.h4Q,A.h4R])})();(function constants(){D.flX=new B.pI("Intl.locale")})();(function staticFields(){$.hcE=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iD9","h5B",()=>48)})()};
(a=>{a["L1KULx08oItASfB0wsiaSz2TgsQ="]=a.current})($__dart_deferred_initializers__);