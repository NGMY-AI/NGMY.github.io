((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hBj(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a34(d){var y,x,w,v
if(d==null){if(A.fHg()==null)$.hdP="en_US"
y=A.fHg()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hBj(d)
if(x===-1)return d
w=C.a.az(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hjd(d,e,f){var y,x,w,v
if(d==null){if(A.fHg()==null)$.hdP="en_US"
y=A.fHg()
y.toString
return A.hjd(y,e,f)}if(e.$1(d))return d
x=[A.ik7(),A.ik9(),A.ik8(),new A.h5Y(),new A.h5Z(),new A.h6_()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.igJ(d)},
igJ(d){throw B.W(B.dO('Invalid locale "'+d+'"',null))},
hgg(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hH8(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hBj(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.az(d,0,x).toLowerCase()},
h5Y:function h5Y(){},
h5Z:function h5Z(){},
h6_:function h6_(){},
fHg(){var y=B.aV($.bE.h(0,D.fqb))
return y==null?$.hdP:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[289]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h5Y.prototype={
$1(d){return A.hgg(A.hH8(d))},
$S:17}
A.h5Z.prototype={
$1(d){return A.hgg(A.a34(d))},
$S:17}
A.h6_.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ik7","a34",1)
y(A,"ik8","hgg",0)
y(A,"ik9","hH8",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.h5Y,A.h5Z,A.h6_])})();(function constants(){D.fqb=new B.pI("Intl.locale")})();(function staticFields(){$.hdP=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iDA","h6K",()=>48)})()};
(a=>{a["Pa0rHC4qO5ffXgGLPGYqHsa2Raw="]=a.current})($__dart_deferred_initializers__);