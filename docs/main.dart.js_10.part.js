((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
htu(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2f(d){var y,x,w,v
if(d==null){if(A.fB_()==null)$.h6J="en_US"
y=A.fB_()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.htu(d)
if(x===-1)return d
w=C.a.ar(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hbG(d,e,f){var y,x,w,v
if(d==null){if(A.fB_()==null)$.h6J="en_US"
y=A.fB_()
y.toString
return A.hbG(y,e,f)}if(e.$1(d))return d
x=[A.ib8(),A.iba(),A.ib9(),new A.fZY(),new A.fZZ(),new A.h__()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i7H(d)},
i7H(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h9_(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hyF(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.htu(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ar(d,0,x).toLowerCase()},
fZY:function fZY(){},
fZZ:function fZZ(){},
h__:function h__(){},
fB_(){var y=B.aT($.bB.h(0,D.ffc))
return y==null?$.h6J:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fZY.prototype={
$1(d){return A.h9_(A.hyF(d))},
$S:17}
A.fZZ.prototype={
$1(d){return A.h9_(A.a2f(d))},
$S:17}
A.h__.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ib8","a2f",1)
y(A,"ib9","h9_",0)
y(A,"iba","hyF",0)})();(function inheritance(){var y=a.inheritMany
y(B.hx,[A.fZY,A.fZZ,A.h__])})();(function constants(){D.ffc=new B.pt("Intl.locale")})();(function staticFields(){$.h6J=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iun","h_H",()=>48)})()};
(a=>{a["ZJWBcaHuW6UBsqFmWKYMOwHX620="]=a.current})($__dart_deferred_initializers__);