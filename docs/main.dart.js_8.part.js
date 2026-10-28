((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hew(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0Z(d){var y,x,w,v
if(d==null){if(A.fnX()==null)$.fTh="en_US"
y=A.fnX()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hew(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b0(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fY0(d,e,f){var y,x,w,v
if(d==null){if(A.fnX()==null)$.fTh="en_US"
y=A.fnX()
y.toString
return A.fY0(y,e,f)}if(e.$1(d))return d
x=[A.hW5(),A.hW7(),A.hW6(),new A.fLM(),new A.fLN(),new A.fLO()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hSN(d)},
hSN(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fVr(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hjn(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hew(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fLM:function fLM(){},
fLN:function fLN(){},
fLO:function fLO(){},
fnX(){var y=B.aT($.bx.h(0,D.eSq))
return y==null?$.fTh:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[258]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fLM.prototype={
$1(d){return A.fVr(A.hjn(d))},
$S:17}
A.fLN.prototype={
$1(d){return A.fVr(A.a0Z(d))},
$S:17}
A.fLO.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hW5","a0Z",1)
y(A,"hW6","fVr",0)
y(A,"hW7","hjn",0)})();(function inheritance(){var y=a.inheritMany
y(B.hT,[A.fLM,A.fLN,A.fLO])})();(function constants(){D.eSq=new B.p5("Intl.locale")})();(function staticFields(){$.fTh=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ie2","fMr",()=>48)})()};
(a=>{a["72u3f1LhSgReCnlOBMZK5cnt6FM="]=a.current})($__dart_deferred_initializers__);