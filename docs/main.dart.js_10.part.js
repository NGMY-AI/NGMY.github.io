((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hAh(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a34(d){var y,x,w,v
if(d==null){if(A.fGF()==null)$.hcY="en_US"
y=A.fGF()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hAh(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hif(d,e,f){var y,x,w,v
if(d==null){if(A.fGF()==null)$.hcY="en_US"
y=A.fGF()
y.toString
return A.hif(y,e,f)}if(e.$1(d))return d
x=[A.ijk(),A.ijm(),A.ijl(),new A.h56(),new A.h57(),new A.h58()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ifR(d)},
ifR(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
hfq(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hFK(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hAh(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h56:function h56(){},
h57:function h57(){},
h58:function h58(){},
fGF(){var y=B.aV($.bF.h(0,D.fmO))
return y==null?$.hcY:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[290]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h56.prototype={
$1(d){return A.hfq(A.hFK(d))},
$S:17}
A.h57.prototype={
$1(d){return A.hfq(A.a34(d))},
$S:17}
A.h58.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ijk","a34",1)
y(A,"ijl","hfq",0)
y(A,"ijm","hFK",0)})();(function inheritance(){var y=a.inheritMany
y(B.hu,[A.h56,A.h57,A.h58])})();(function constants(){D.fmO=new B.pH("Intl.locale")})();(function staticFields(){$.hcY=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iDA","h5T",()=>48)})()};
(a=>{a["/NBdcYrCGeEqJVI164JpqzSK5NI="]=a.current})($__dart_deferred_initializers__);