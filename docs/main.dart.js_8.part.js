((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h0u(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_L(d){var y,x,w,v
if(d==null){if(A.fbf()==null)$.fFB="en_US"
y=A.fbf()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h0u(d)
if(x===-1)return d
w=C.a.am(d,0,x)
v=C.a.aX(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fKc(d,e,f){var y,x,w,v
if(d==null){if(A.fbf()==null)$.fFB="en_US"
y=A.fbf()
y.toString
return A.fKc(y,e,f)}if(e.$1(d))return d
x=[A.hHu(),A.hHw(),A.hHv(),new A.fyi(),new A.fyj(),new A.fyk()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hEg(d)},
hEg(d){throw B.R(B.dF('Invalid locale "'+d+'"',null))},
fHH(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h5l(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h0u(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.am(d,0,x).toLowerCase()},
fyi:function fyi(){},
fyj:function fyj(){},
fyk:function fyk(){},
fbf(){var y=B.aS($.bt.h(0,D.eA5))
return y==null?$.fFB:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[233]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fyi.prototype={
$1(d){return A.fHH(A.h5l(d))},
$S:17}
A.fyj.prototype={
$1(d){return A.fHH(A.a_L(d))},
$S:17}
A.fyk.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hHu","a_L",1)
y(A,"hHv","fHH",0)
y(A,"hHw","h5l",0)})();(function inheritance(){var y=a.inheritMany
y(B.i3,[A.fyi,A.fyj,A.fyk])})();(function constants(){D.eA5=new B.oJ("Intl.locale")})();(function staticFields(){$.fFB=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"i_d","fyT",()=>48)})()};
(a=>{a["3qUW7cUXYOAd+rxAX6SdPO+HmEY="]=a.current})($__dart_deferred_initializers__);