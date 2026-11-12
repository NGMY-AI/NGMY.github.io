((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hzn(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2Y(d){var y,x,w,v
if(d==null){if(A.fFZ()==null)$.hcb="en_US"
y=A.fFZ()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hzn(d)
if(x===-1)return d
w=C.a.aC(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hhr(d,e,f){var y,x,w,v
if(d==null){if(A.fFZ()==null)$.hcb="en_US"
y=A.fFZ()
y.toString
return A.hhr(y,e,f)}if(e.$1(d))return d
x=[A.iin(),A.iip(),A.iio(),new A.h4k(),new A.h4l(),new A.h4m()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ieV(d)},
ieV(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
heC(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hEQ(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hzn(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aC(d,0,x).toLowerCase()},
h4k:function h4k(){},
h4l:function h4l(){},
h4m:function h4m(){},
fFZ(){var y=B.aS($.bE.h(0,D.fl0))
return y==null?$.hcb:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[285]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h4k.prototype={
$1(d){return A.heC(A.hEQ(d))},
$S:17}
A.h4l.prototype={
$1(d){return A.heC(A.a2Y(d))},
$S:17}
A.h4m.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iin","a2Y",1)
y(A,"iio","heC",0)
y(A,"iip","hEQ",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4k,A.h4l,A.h4m])})();(function constants(){D.fl0=new B.pD("Intl.locale")})();(function staticFields(){$.hcb=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iCv","h56",()=>48)})()};
(a=>{a["EVfO/YsN4rTWHy3YglxEDXZqUME="]=a.current})($__dart_deferred_initializers__);