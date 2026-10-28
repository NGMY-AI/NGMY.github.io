((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hgb(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1a(d){var y,x,w,v
if(d==null){if(A.fpl()==null)$.fUS="en_US"
y=A.fpl()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hgb(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b1(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fZD(d,e,f){var y,x,w,v
if(d==null){if(A.fpl()==null)$.fUS="en_US"
y=A.fpl()
y.toString
return A.fZD(y,e,f)}if(e.$1(d))return d
x=[A.hXT(),A.hXV(),A.hXU(),new A.fNl(),new A.fNm(),new A.fNn()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hUA(d)},
hUA(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fX3(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hl4(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hgb(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fNl:function fNl(){},
fNm:function fNm(){},
fNn:function fNn(){},
fpl(){var y=B.aU($.bx.h(0,D.eTj))
return y==null?$.fUS:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fNl.prototype={
$1(d){return A.fX3(A.hl4(d))},
$S:17}
A.fNm.prototype={
$1(d){return A.fX3(A.a1a(d))},
$S:17}
A.fNn.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hXT","a1a",1)
y(A,"hXU","fX3",0)
y(A,"hXV","hl4",0)})();(function inheritance(){var y=a.inheritMany
y(B.hT,[A.fNl,A.fNm,A.fNn])})();(function constants(){D.eTj=new B.p6("Intl.locale")})();(function staticFields(){$.fUS=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ifR","fO0",()=>48)})()};
(a=>{a["2rn5aT3V43wc7Qe16FQL+2yXflE="]=a.current})($__dart_deferred_initializers__);