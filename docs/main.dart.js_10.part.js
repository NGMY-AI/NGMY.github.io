((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hyt(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2U(d){var y,x,w,v
if(d==null){if(A.fFb()==null)$.hbi="en_US"
y=A.fFb()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hyt(d)
if(x===-1)return d
w=C.a.aC(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hgx(d,e,f){var y,x,w,v
if(d==null){if(A.fFb()==null)$.hbi="en_US"
y=A.fFb()
y.toString
return A.hgx(y,e,f)}if(e.$1(d))return d
x=[A.iho(),A.ihq(),A.ihp(),new A.h3r(),new A.h3s(),new A.h3t()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.idX(d)},
idX(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
hdJ(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hDU(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hyt(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aC(d,0,x).toLowerCase()},
h3r:function h3r(){},
h3s:function h3s(){},
h3t:function h3t(){},
fFb(){var y=B.aT($.bE.h(0,D.fkv))
return y==null?$.hbi:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[288]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h3r.prototype={
$1(d){return A.hdJ(A.hDU(d))},
$S:17}
A.h3s.prototype={
$1(d){return A.hdJ(A.a2U(d))},
$S:17}
A.h3t.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iho","a2U",1)
y(A,"ihp","hdJ",0)
y(A,"ihq","hDU",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h3r,A.h3s,A.h3t])})();(function constants(){D.fkv=new B.pD("Intl.locale")})();(function staticFields(){$.hbi=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iBu","h4d",()=>48)})()};
(a=>{a["+ea+udRI7e1Vta6cC4+/JoN2L6k="]=a.current})($__dart_deferred_initializers__);