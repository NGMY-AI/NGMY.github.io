((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hJN(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3J(d){var y,x,w,v
if(d==null){if(A.fO2()==null)$.hlE="en_US"
y=A.fO2()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hJN(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hrg(d,e,f){var y,x,w,v
if(d==null){if(A.fO2()==null)$.hlE="en_US"
y=A.fO2()
y.toString
return A.hrg(y,e,f)}if(e.$1(d))return d
x=[A.itr(),A.itt(),A.its(),new A.hdN(),new A.hdO(),new A.hdP()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ipY(d)},
ipY(d){throw B.Y(B.dK('Invalid locale "'+d+'"',null))},
hoe(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hPE(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hJN(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hdN:function hdN(){},
hdO:function hdO(){},
hdP:function hdP(){},
fO2(){var y=B.aV($.bG.h(0,D.fB7))
return y==null?$.hlE:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[384]
var z=a.updateTypes(["n(n)","n(n?)"])
A.hdN.prototype={
$1(d){return A.hoe(A.hPE(d))},
$S:15}
A.hdO.prototype={
$1(d){return A.hoe(A.a3J(d))},
$S:15}
A.hdP.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"itr","a3J",1)
y(A,"its","hoe",0)
y(A,"itt","hPE",0)})();(function inheritance(){var y=a.inheritMany
y(B.fR,[A.hdN,A.hdO,A.hdP])})();(function constants(){D.fB7=new B.pW("Intl.locale")})();(function staticFields(){$.hlE=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iNo","heA",()=>48)})()};
(a=>{a["gZeh9RThaurYAc7ZNBhMZB9he0Y="]=a.current})($__dart_deferred_initializers__);