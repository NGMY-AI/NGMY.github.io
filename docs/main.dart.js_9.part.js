((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hn0(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1J(d){var y,x,w,v
if(d==null){if(A.fvs()==null)$.h0s="en_US"
y=A.fvs()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hn0(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b6(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h5n(d,e,f){var y,x,w,v
if(d==null){if(A.fvs()==null)$.h0s="en_US"
y=A.fvs()
y.toString
return A.h5n(y,e,f)}if(e.$1(d))return d
x=[A.i40(),A.i42(),A.i41(),new A.fTN(),new A.fTO(),new A.fTP()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i0D(d)},
i0D(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h2H(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hs0(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hn0(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fTN:function fTN(){},
fTO:function fTO(){},
fTP:function fTP(){},
fvs(){var y=B.aU($.bz.h(0,D.f2p))
return y==null?$.h0s:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fTN.prototype={
$1(d){return A.h2H(A.hs0(d))},
$S:17}
A.fTO.prototype={
$1(d){return A.h2H(A.a1J(d))},
$S:17}
A.fTP.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i40","a1J",1)
y(A,"i41","h2H",0)
y(A,"i42","hs0",0)})();(function inheritance(){var y=a.inheritMany
y(B.i0,[A.fTN,A.fTO,A.fTP])})();(function constants(){D.f2p=new B.ph("Intl.locale")})();(function staticFields(){$.h0s=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"in6","fUu",()=>48)})()};
(a=>{a["0eCa87WI2t5/iabdi23kZNJ65Lo="]=a.current})($__dart_deferred_initializers__);