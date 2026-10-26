((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fYu(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_s(d){var y,x,w,v
if(d==null){if(A.f8V()==null)$.fCT="en_US"
y=A.f8V()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fYu(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fHo(d,e,f){var y,x,w,v
if(d==null){if(A.f8V()==null)$.fCT="en_US"
y=A.f8V()
y.toString
return A.fHo(y,e,f)}if(e.$1(d))return d
x=[A.hE6(),A.hE8(),A.hE7(),new A.fvy(),new A.fvz(),new A.fvA()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hAV(d)},
hAV(d){throw B.O(B.dD('Invalid locale "'+d+'"',null))},
fEX(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h2g(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fYu(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fvy:function fvy(){},
fvz:function fvz(){},
fvA:function fvA(){},
f8V(){var y=B.aR($.bs.h(0,D.elP))
return y==null?$.fCT:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[232]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fvy.prototype={
$1(d){return A.fEX(A.h2g(d))},
$S:17}
A.fvz.prototype={
$1(d){return A.fEX(A.a_s(d))},
$S:17}
A.fvA.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hE6","a_s",1)
y(A,"hE7","fEX",0)
y(A,"hE8","h2g",0)})();(function inheritance(){var y=a.inheritMany
y(B.i2,[A.fvy,A.fvz,A.fvA])})();(function constants(){D.elP=new B.oG("Intl.locale")})();(function staticFields(){$.fCT=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hWF","fw8",()=>48)})()};
(a=>{a["ipSQv1XMoihEs5oR5DbGG9kTucI="]=a.current})($__dart_deferred_initializers__);