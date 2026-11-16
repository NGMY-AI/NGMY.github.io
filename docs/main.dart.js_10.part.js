((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hBa(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3a(d){var y,x,w,v
if(d==null){if(A.fHe()==null)$.hdL="en_US"
y=A.fHe()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hBa(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hj8(d,e,f){var y,x,w,v
if(d==null){if(A.fHe()==null)$.hdL="en_US"
y=A.fHe()
y.toString
return A.hj8(y,e,f)}if(e.$1(d))return d
x=[A.ikB(),A.ikD(),A.ikC(),new A.h5T(),new A.h5U(),new A.h5V()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ih7(d)},
ih7(d){throw B.W(B.dN('Invalid locale "'+d+'"',null))},
hgd(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hGW(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hBa(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h5T:function h5T(){},
h5U:function h5U(){},
h5V:function h5V(){},
fHe(){var y=B.aU($.bF.h(0,D.fpl))
return y==null?$.hdL:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[288]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h5T.prototype={
$1(d){return A.hgd(A.hGW(d))},
$S:17}
A.h5U.prototype={
$1(d){return A.hgd(A.a3a(d))},
$S:17}
A.h5V.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ikB","a3a",1)
y(A,"ikC","hgd",0)
y(A,"ikD","hGW",0)})();(function inheritance(){var y=a.inheritMany
y(B.hx,[A.h5T,A.h5U,A.h5V])})();(function constants(){D.fpl=new B.pJ("Intl.locale")})();(function staticFields(){$.hdL=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iEC","h6F",()=>48)})()};
(a=>{a["cLpnd8BCB2sS6mUXsHpdZJN73LA="]=a.current})($__dart_deferred_initializers__);