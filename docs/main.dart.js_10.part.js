((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hur(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2f(d){var y,x,w,v
if(d==null){if(A.fBV()==null)$.h7D="en_US"
y=A.fBV()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hur(d)
if(x===-1)return d
w=C.a.au(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hcB(d,e,f){var y,x,w,v
if(d==null){if(A.fBV()==null)$.h7D="en_US"
y=A.fBV()
y.toString
return A.hcB(y,e,f)}if(e.$1(d))return d
x=[A.ica(),A.icc(),A.icb(),new A.h_R(),new A.h_S(),new A.h_T()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i8J(d)},
i8J(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h9U(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hzE(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hur(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.au(d,0,x).toLowerCase()},
h_R:function h_R(){},
h_S:function h_S(){},
h_T:function h_T(){},
fBV(){var y=B.aS($.bB.h(0,D.fgc))
return y==null?$.h7D:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h_R.prototype={
$1(d){return A.h9U(A.hzE(d))},
$S:17}
A.h_S.prototype={
$1(d){return A.h9U(A.a2f(d))},
$S:17}
A.h_T.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ica","a2f",1)
y(A,"icb","h9U",0)
y(A,"icc","hzE",0)})();(function inheritance(){var y=a.inheritMany
y(B.hy,[A.h_R,A.h_S,A.h_T])})();(function constants(){D.fgc=new B.pu("Intl.locale")})();(function staticFields(){$.h7D=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ivp","h0A",()=>48)})()};
(a=>{a["4JbHgOU4KI8GjksCbCh3hA6k/Zw="]=a.current})($__dart_deferred_initializers__);