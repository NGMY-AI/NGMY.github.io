((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hK1(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3J(d){var y,x,w,v
if(d==null){if(A.fOf()==null)$.hlR="en_US"
y=A.fOf()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hK1(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hrv(d,e,f){var y,x,w,v
if(d==null){if(A.fOf()==null)$.hlR="en_US"
y=A.fOf()
y.toString
return A.hrv(y,e,f)}if(e.$1(d))return d
x=[A.itF(),A.itH(),A.itG(),new A.he_(),new A.he0(),new A.he1()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iqb(d)},
iqb(d){throw B.Y(B.dK('Invalid locale "'+d+'"',null))},
hot(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hPS(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hK1(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
he_:function he_(){},
he0:function he0(){},
he1:function he1(){},
fOf(){var y=B.aV($.bG.h(0,D.fBb))
return y==null?$.hlR:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[385]
var z=a.updateTypes(["m(m)","m(m?)"])
A.he_.prototype={
$1(d){return A.hot(A.hPS(d))},
$S:15}
A.he0.prototype={
$1(d){return A.hot(A.a3J(d))},
$S:15}
A.he1.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"itF","a3J",1)
y(A,"itG","hot",0)
y(A,"itH","hPS",0)})();(function inheritance(){var y=a.inheritMany
y(B.fR,[A.he_,A.he0,A.he1])})();(function constants(){D.fBb=new B.pW("Intl.locale")})();(function staticFields(){$.hlR=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iNC","heN",()=>48)})()};
(a=>{a["seGL+KbR7vioZuqLLKoTGEoccy4="]=a.current})($__dart_deferred_initializers__);