((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
htC(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2f(d){var y,x,w,v
if(d==null){if(A.fB7()==null)$.h6R="en_US"
y=A.fB7()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.htC(d)
if(x===-1)return d
w=C.a.ar(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hbO(d,e,f){var y,x,w,v
if(d==null){if(A.fB7()==null)$.h6R="en_US"
y=A.fB7()
y.toString
return A.hbO(y,e,f)}if(e.$1(d))return d
x=[A.ibg(),A.ibi(),A.ibh(),new A.h_5(),new A.h_6(),new A.h_7()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i7P(d)},
i7P(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h97(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hyN(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.htC(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ar(d,0,x).toLowerCase()},
h_5:function h_5(){},
h_6:function h_6(){},
h_7:function h_7(){},
fB7(){var y=B.aT($.bB.h(0,D.ffc))
return y==null?$.h6R:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h_5.prototype={
$1(d){return A.h97(A.hyN(d))},
$S:17}
A.h_6.prototype={
$1(d){return A.h97(A.a2f(d))},
$S:17}
A.h_7.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ibg","a2f",1)
y(A,"ibh","h97",0)
y(A,"ibi","hyN",0)})();(function inheritance(){var y=a.inheritMany
y(B.hx,[A.h_5,A.h_6,A.h_7])})();(function constants(){D.ffc=new B.pt("Intl.locale")})();(function staticFields(){$.h6R=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iuv","h_P",()=>48)})()};
(a=>{a["MvXQYH8FXWJakG3JmyR8PKlHit0="]=a.current})($__dart_deferred_initializers__);