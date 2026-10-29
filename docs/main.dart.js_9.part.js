((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hj4(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1m(d){var y,x,w,v
if(d==null){if(A.fs_()==null)$.fXD="en_US"
y=A.fs_()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hj4(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b4(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h1s(d,e,f){var y,x,w,v
if(d==null){if(A.fs_()==null)$.fXD="en_US"
y=A.fs_()
y.toString
return A.h1s(y,e,f)}if(e.$1(d))return d
x=[A.i_V(),A.i_X(),A.i_W(),new A.fQ7(),new A.fQ8(),new A.fQ9()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hXz(d)},
hXz(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fZQ(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
ho0(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hj4(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fQ7:function fQ7(){},
fQ8:function fQ8(){},
fQ9:function fQ9(){},
fs_(){var y=B.aU($.bz.h(0,D.eXW))
return y==null?$.fXD:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[262]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fQ7.prototype={
$1(d){return A.fZQ(A.ho0(d))},
$S:17}
A.fQ8.prototype={
$1(d){return A.fZQ(A.a1m(d))},
$S:17}
A.fQ9.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i_V","a1m",1)
y(A,"i_W","fZQ",0)
y(A,"i_X","ho0",0)})();(function inheritance(){var y=a.inheritMany
y(B.hV,[A.fQ7,A.fQ8,A.fQ9])})();(function constants(){D.eXW=new B.pa("Intl.locale")})();(function staticFields(){$.fXD=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iiV","fQN",()=>48)})()};
(a=>{a["2FRVJ7ZvA+G4AhV9mcBydBN+5mQ="]=a.current})($__dart_deferred_initializers__);