((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hKH(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3J(d){var y,x,w,v
if(d==null){if(A.fOJ()==null)$.hms="en_US"
y=A.fOJ()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hKH(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hs7(d,e,f){var y,x,w,v
if(d==null){if(A.fOJ()==null)$.hms="en_US"
y=A.fOJ()
y.toString
return A.hs7(y,e,f)}if(e.$1(d))return d
x=[A.ium(),A.iuo(),A.iun(),new A.hez(),new A.heA(),new A.heB()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iqT(d)},
iqT(d){throw B.Y(B.dL('Invalid locale "'+d+'"',null))},
hp4(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hQz(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hKH(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hez:function hez(){},
heA:function heA(){},
heB:function heB(){},
fOJ(){var y=B.aV($.bG.h(0,D.fBe))
return y==null?$.hms:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[62],A)
D=c[322]
var z=a.updateTypes(["n(n)","n(n?)"])
A.hez.prototype={
$1(d){return A.hp4(A.hQz(d))},
$S:15}
A.heA.prototype={
$1(d){return A.hp4(A.a3J(d))},
$S:15}
A.heB.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"ium","a3J",1)
y(A,"iun","hp4",0)
y(A,"iuo","hQz",0)})();(function inheritance(){var y=a.inheritMany
y(B.hf,[A.hez,A.heA,A.heB])})();(function constants(){D.fBe=new B.pX("Intl.locale")})();(function staticFields(){$.hms=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iOj","hfm",()=>48)})()};
(a=>{a["RyygrnYhZiyJHDPOQd5JI8qaFJY="]=a.current})($__dart_deferred_initializers__);