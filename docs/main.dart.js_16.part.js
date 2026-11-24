((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hJR(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3I(d){var y,x,w,v
if(d==null){if(A.fO6()==null)$.hlI="en_US"
y=A.fO6()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hJR(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hrk(d,e,f){var y,x,w,v
if(d==null){if(A.fO6()==null)$.hlI="en_US"
y=A.fO6()
y.toString
return A.hrk(y,e,f)}if(e.$1(d))return d
x=[A.itu(),A.itw(),A.itv(),new A.hdR(),new A.hdS(),new A.hdT()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iq1(d)},
iq1(d){throw B.Y(B.dK('Invalid locale "'+d+'"',null))},
hoi(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hPI(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hJR(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hdR:function hdR(){},
hdS:function hdS(){},
hdT:function hdT(){},
fO6(){var y=B.aV($.bG.h(0,D.fB7))
return y==null?$.hlI:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[384]
var z=a.updateTypes(["m(m)","m(m?)"])
A.hdR.prototype={
$1(d){return A.hoi(A.hPI(d))},
$S:15}
A.hdS.prototype={
$1(d){return A.hoi(A.a3I(d))},
$S:15}
A.hdT.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"itu","a3I",1)
y(A,"itv","hoi",0)
y(A,"itw","hPI",0)})();(function inheritance(){var y=a.inheritMany
y(B.fR,[A.hdR,A.hdS,A.hdT])})();(function constants(){D.fB7=new B.pW("Intl.locale")})();(function staticFields(){$.hlI=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iNr","heE",()=>48)})()};
(a=>{a["jkSM/kW+Ln24yUkGgEg3gXaF/w8="]=a.current})($__dart_deferred_initializers__);