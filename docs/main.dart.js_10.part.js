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
a33(d){var y,x,w,v
if(d==null){if(A.fHi()==null)$.hdR="en_US"
y=A.fHi()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hBj(d)
if(x===-1)return d
w=C.a.az(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hje(d,e,f){var y,x,w,v
if(d==null){if(A.fHi()==null)$.hdR="en_US"
y=A.fHi()
y.toString
return A.hje(y,e,f)}if(e.$1(d))return d
x=[A.ik7(),A.ik9(),A.ik8(),new A.h6_(),new A.h60(),new A.h61()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.igJ(d)},
igJ(d){throw B.W(B.dO('Invalid locale "'+d+'"',null))},
hgi(d){switch(d){case"iw":return"he"
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
h6_:function h6_(){},
h60:function h60(){},
h61:function h61(){},
fHi(){var y=B.aV($.bE.h(0,D.fqc))
return y==null?$.hdR:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[54],A)
D=c[288]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h6_.prototype={
$1(d){return A.hgi(A.hH8(d))},
$S:17}
A.h60.prototype={
$1(d){return A.hgi(A.a33(d))},
$S:17}
A.h61.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ik7","a33",1)
y(A,"ik8","hgi",0)
y(A,"ik9","hH8",0)})();(function inheritance(){var y=a.inheritMany
y(B.hx,[A.h6_,A.h60,A.h61])})();(function constants(){D.fqc=new B.pI("Intl.locale")})();(function staticFields(){$.hdR=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iDC","h6M",()=>48)})()};
(a=>{a["7g9qCb80KaBQnzA4Nd5ErM4ueWI="]=a.current})($__dart_deferred_initializers__);