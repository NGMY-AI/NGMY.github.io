((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
htA(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2f(d){var y,x,w,v
if(d==null){if(A.fB5()==null)$.h6P="en_US"
y=A.fB5()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.htA(d)
if(x===-1)return d
w=C.a.ar(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hbM(d,e,f){var y,x,w,v
if(d==null){if(A.fB5()==null)$.h6P="en_US"
y=A.fB5()
y.toString
return A.hbM(y,e,f)}if(e.$1(d))return d
x=[A.ibe(),A.ibg(),A.ibf(),new A.h_3(),new A.h_4(),new A.h_5()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i7N(d)},
i7N(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h95(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hyL(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.htA(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ar(d,0,x).toLowerCase()},
h_3:function h_3(){},
h_4:function h_4(){},
h_5:function h_5(){},
fB5(){var y=B.aT($.bB.h(0,D.ffg))
return y==null?$.h6P:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h_3.prototype={
$1(d){return A.h95(A.hyL(d))},
$S:17}
A.h_4.prototype={
$1(d){return A.h95(A.a2f(d))},
$S:17}
A.h_5.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ibe","a2f",1)
y(A,"ibf","h95",0)
y(A,"ibg","hyL",0)})();(function inheritance(){var y=a.inheritMany
y(B.hx,[A.h_3,A.h_4,A.h_5])})();(function constants(){D.ffg=new B.pt("Intl.locale")})();(function staticFields(){$.h6P=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iut","h_N",()=>48)})()};
(a=>{a["j1vAlbWewrEAEEDLHk9+Ttf0nvs="]=a.current})($__dart_deferred_initializers__);