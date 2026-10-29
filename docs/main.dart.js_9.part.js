((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hiQ(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1l(d){var y,x,w,v
if(d==null){if(A.frL()==null)$.fXo="en_US"
y=A.frL()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hiQ(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b4(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h1d(d,e,f){var y,x,w,v
if(d==null){if(A.frL()==null)$.fXo="en_US"
y=A.frL()
y.toString
return A.h1d(y,e,f)}if(e.$1(d))return d
x=[A.i_F(),A.i_H(),A.i_G(),new A.fPT(),new A.fPU(),new A.fPV()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hXk(d)},
hXk(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fZB(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hnM(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hiQ(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fPT:function fPT(){},
fPU:function fPU(){},
fPV:function fPV(){},
frL(){var y=B.aU($.bz.h(0,D.eXe))
return y==null?$.fXo:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[262]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fPT.prototype={
$1(d){return A.fZB(A.hnM(d))},
$S:17}
A.fPU.prototype={
$1(d){return A.fZB(A.a1l(d))},
$S:17}
A.fPV.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i_F","a1l",1)
y(A,"i_G","fZB",0)
y(A,"i_H","hnM",0)})();(function inheritance(){var y=a.inheritMany
y(B.hV,[A.fPT,A.fPU,A.fPV])})();(function constants(){D.eXe=new B.pa("Intl.locale")})();(function staticFields(){$.fXo=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iiF","fQy",()=>48)})()};
(a=>{a["iY8kGShzstlF3DppFL/HaahwhPw="]=a.current})($__dart_deferred_initializers__);