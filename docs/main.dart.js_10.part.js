((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hAY(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a38(d){var y,x,w,v
if(d==null){if(A.fH7()==null)$.hdB="en_US"
y=A.fH7()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hAY(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hiV(d,e,f){var y,x,w,v
if(d==null){if(A.fH7()==null)$.hdB="en_US"
y=A.fH7()
y.toString
return A.hiV(y,e,f)}if(e.$1(d))return d
x=[A.ik4(),A.ik6(),A.ik5(),new A.h5J(),new A.h5K(),new A.h5L()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.igB(d)},
igB(d){throw B.W(B.dN('Invalid locale "'+d+'"',null))},
hg2(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hGs(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hAY(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h5J:function h5J(){},
h5K:function h5K(){},
h5L:function h5L(){},
fH7(){var y=B.aU($.bF.h(0,D.fp1))
return y==null?$.hdB:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[289]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h5J.prototype={
$1(d){return A.hg2(A.hGs(d))},
$S:17}
A.h5K.prototype={
$1(d){return A.hg2(A.a38(d))},
$S:17}
A.h5L.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ik4","a38",1)
y(A,"ik5","hg2",0)
y(A,"ik6","hGs",0)})();(function inheritance(){var y=a.inheritMany
y(B.hx,[A.h5J,A.h5K,A.h5L])})();(function constants(){D.fp1=new B.pJ("Intl.locale")})();(function staticFields(){$.hdB=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iEk","h6v",()=>48)})()};
(a=>{a["E0BFevYhfRGHSuqc+jvI7vzsJb8="]=a.current})($__dart_deferred_initializers__);