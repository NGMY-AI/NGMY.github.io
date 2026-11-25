((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hKg(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3K(d){var y,x,w,v
if(d==null){if(A.fOu()==null)$.hm5="en_US"
y=A.fOu()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hKg(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hrK(d,e,f){var y,x,w,v
if(d==null){if(A.fOu()==null)$.hm5="en_US"
y=A.fOu()
y.toString
return A.hrK(y,e,f)}if(e.$1(d))return d
x=[A.itV(),A.itX(),A.itW(),new A.hee(),new A.hef(),new A.heg()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iqr(d)},
iqr(d){throw B.Y(B.dL('Invalid locale "'+d+'"',null))},
hoI(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hQ7(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hKg(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hee:function hee(){},
hef:function hef(){},
heg:function heg(){},
fOu(){var y=B.aV($.bG.h(0,D.fBe))
return y==null?$.hm5:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[385]
var z=a.updateTypes(["m(m)","m(m?)"])
A.hee.prototype={
$1(d){return A.hoI(A.hQ7(d))},
$S:15}
A.hef.prototype={
$1(d){return A.hoI(A.a3K(d))},
$S:15}
A.heg.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"itV","a3K",1)
y(A,"itW","hoI",0)
y(A,"itX","hQ7",0)})();(function inheritance(){var y=a.inheritMany
y(B.fR,[A.hee,A.hef,A.heg])})();(function constants(){D.fBe=new B.pX("Intl.locale")})();(function staticFields(){$.hm5=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iNS","hf1",()=>48)})()};
(a=>{a["Y354K3tfroaZhjI08VoyB8fx8Go="]=a.current})($__dart_deferred_initializers__);