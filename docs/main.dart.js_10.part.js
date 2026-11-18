((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hCF(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3c(d){var y,x,w,v
if(d==null){if(A.fI4()==null)$.heR="en_US"
y=A.fI4()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hCF(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b3(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hkn(d,e,f){var y,x,w,v
if(d==null){if(A.fI4()==null)$.heR="en_US"
y=A.fI4()
y.toString
return A.hkn(y,e,f)}if(e.$1(d))return d
x=[A.ilz(),A.ilB(),A.ilA(),new A.h70(),new A.h71(),new A.h72()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ii9(d)},
ii9(d){throw B.X(B.dO('Invalid locale "'+d+'"',null))},
hhm(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hIs(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hCF(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h70:function h70(){},
h71:function h71(){},
h72:function h72(){},
fI4(){var y=B.aV($.bE.h(0,D.fsc))
return y==null?$.heR:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[56],A)
D=c[294]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h70.prototype={
$1(d){return A.hhm(A.hIs(d))},
$S:17}
A.h71.prototype={
$1(d){return A.hhm(A.a3c(d))},
$S:17}
A.h72.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ilz","a3c",1)
y(A,"ilA","hhm",0)
y(A,"ilB","hIs",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h70,A.h71,A.h72])})();(function constants(){D.fsc=new B.pM("Intl.locale")})();(function staticFields(){$.heR=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iF8","h7N",()=>48)})()};
(a=>{a["WdWYWLMV888Ym/bcFgslzK48mLU="]=a.current})($__dart_deferred_initializers__);