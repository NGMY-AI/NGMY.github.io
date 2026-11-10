((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
huj(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2f(d){var y,x,w,v
if(d==null){if(A.fBM()==null)$.h7u="en_US"
y=A.fBM()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.huj(d)
if(x===-1)return d
w=C.a.ar(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hcs(d,e,f){var y,x,w,v
if(d==null){if(A.fBM()==null)$.h7u="en_US"
y=A.fBM()
y.toString
return A.hcs(y,e,f)}if(e.$1(d))return d
x=[A.ic2(),A.ic4(),A.ic3(),new A.h_I(),new A.h_J(),new A.h_K()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i8B(d)},
i8B(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h9L(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hzw(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.huj(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ar(d,0,x).toLowerCase()},
h_I:function h_I(){},
h_J:function h_J(){},
h_K:function h_K(){},
fBM(){var y=B.aT($.bB.h(0,D.ffD))
return y==null?$.h7u:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h_I.prototype={
$1(d){return A.h9L(A.hzw(d))},
$S:17}
A.h_J.prototype={
$1(d){return A.h9L(A.a2f(d))},
$S:17}
A.h_K.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ic2","a2f",1)
y(A,"ic3","h9L",0)
y(A,"ic4","hzw",0)})();(function inheritance(){var y=a.inheritMany
y(B.hy,[A.h_I,A.h_J,A.h_K])})();(function constants(){D.ffD=new B.pt("Intl.locale")})();(function staticFields(){$.h7u=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ivh","h0r",()=>48)})()};
(a=>{a["cn65NuHV8r0cpDdA9e4fJS3l/BQ="]=a.current})($__dart_deferred_initializers__);