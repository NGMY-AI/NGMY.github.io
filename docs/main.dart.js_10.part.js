((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hAl(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a34(d){var y,x,w,v
if(d==null){if(A.fGG()==null)$.hd2="en_US"
y=A.fGG()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hAl(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hik(d,e,f){var y,x,w,v
if(d==null){if(A.fGG()==null)$.hd2="en_US"
y=A.fGG()
y.toString
return A.hik(y,e,f)}if(e.$1(d))return d
x=[A.ijq(),A.ijs(),A.ijr(),new A.h5b(),new A.h5c(),new A.h5d()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ifX(d)},
ifX(d){throw B.W(B.dN('Invalid locale "'+d+'"',null))},
hfv(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hFQ(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hAl(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h5b:function h5b(){},
h5c:function h5c(){},
h5d:function h5d(){},
fGG(){var y=B.aV($.bF.h(0,D.fmO))
return y==null?$.hd2:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[290]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h5b.prototype={
$1(d){return A.hfv(A.hFQ(d))},
$S:17}
A.h5c.prototype={
$1(d){return A.hfv(A.a34(d))},
$S:17}
A.h5d.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ijq","a34",1)
y(A,"ijr","hfv",0)
y(A,"ijs","hFQ",0)})();(function inheritance(){var y=a.inheritMany
y(B.hu,[A.h5b,A.h5c,A.h5d])})();(function constants(){D.fmO=new B.pH("Intl.locale")})();(function staticFields(){$.hd2=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iDG","h5Y",()=>48)})()};
(a=>{a["s5rbk0JjTptuF0MyBVS/3pQkYDI="]=a.current})($__dart_deferred_initializers__);