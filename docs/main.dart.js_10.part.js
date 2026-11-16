((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hB2(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a39(d){var y,x,w,v
if(d==null){if(A.fH8()==null)$.hdD="en_US"
y=A.fH8()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hB2(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hj0(d,e,f){var y,x,w,v
if(d==null){if(A.fH8()==null)$.hdD="en_US"
y=A.fH8()
y.toString
return A.hj0(y,e,f)}if(e.$1(d))return d
x=[A.ikt(),A.ikv(),A.iku(),new A.h5L(),new A.h5M(),new A.h5N()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ih_(d)},
ih_(d){throw B.W(B.dN('Invalid locale "'+d+'"',null))},
hg5(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hGO(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hB2(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h5L:function h5L(){},
h5M:function h5M(){},
h5N:function h5N(){},
fH8(){var y=B.aU($.bF.h(0,D.fpa))
return y==null?$.hdD:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[289]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h5L.prototype={
$1(d){return A.hg5(A.hGO(d))},
$S:17}
A.h5M.prototype={
$1(d){return A.hg5(A.a39(d))},
$S:17}
A.h5N.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ikt","a39",1)
y(A,"iku","hg5",0)
y(A,"ikv","hGO",0)})();(function inheritance(){var y=a.inheritMany
y(B.hx,[A.h5L,A.h5M,A.h5N])})();(function constants(){D.fpa=new B.pJ("Intl.locale")})();(function staticFields(){$.hdD=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iEu","h6x",()=>48)})()};
(a=>{a["mCd+KvofCSbifFtvXZsAj+AMlX8="]=a.current})($__dart_deferred_initializers__);