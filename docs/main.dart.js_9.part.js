((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hiL(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1m(d){var y,x,w,v
if(d==null){if(A.frH()==null)$.fXk="en_US"
y=A.frH()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hiL(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b4(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h19(d,e,f){var y,x,w,v
if(d==null){if(A.frH()==null)$.fXk="en_US"
y=A.frH()
y.toString
return A.h19(y,e,f)}if(e.$1(d))return d
x=[A.i_y(),A.i_A(),A.i_z(),new A.fPP(),new A.fPQ(),new A.fPR()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hXe(d)},
hXe(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fZx(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hnG(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hiL(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fPP:function fPP(){},
fPQ:function fPQ(){},
fPR:function fPR(){},
frH(){var y=B.aU($.bz.h(0,D.eXh))
return y==null?$.fXk:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[262]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fPP.prototype={
$1(d){return A.fZx(A.hnG(d))},
$S:17}
A.fPQ.prototype={
$1(d){return A.fZx(A.a1m(d))},
$S:17}
A.fPR.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i_y","a1m",1)
y(A,"i_z","fZx",0)
y(A,"i_A","hnG",0)})();(function inheritance(){var y=a.inheritMany
y(B.hV,[A.fPP,A.fPQ,A.fPR])})();(function constants(){D.eXh=new B.pa("Intl.locale")})();(function staticFields(){$.fXk=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iiy","fQu",()=>48)})()};
(a=>{a["dgoc47qC5Ky43UuLp0ibor7IPFY="]=a.current})($__dart_deferred_initializers__);