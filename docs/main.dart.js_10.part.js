((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hBX(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a39(d){var y,x,w,v
if(d==null){if(A.fHO()==null)$.hep="en_US"
y=A.fHO()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hBX(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b4(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hjN(d,e,f){var y,x,w,v
if(d==null){if(A.fHO()==null)$.hep="en_US"
y=A.fHO()
y.toString
return A.hjN(y,e,f)}if(e.$1(d))return d
x=[A.ikL(),A.ikN(),A.ikM(),new A.h6y(),new A.h6z(),new A.h6A()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ihm(d)},
ihm(d){throw B.X(B.dO('Invalid locale "'+d+'"',null))},
hgQ(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hHJ(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hBX(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h6y:function h6y(){},
h6z:function h6z(){},
h6A:function h6A(){},
fHO(){var y=B.aV($.bE.h(0,D.fqT))
return y==null?$.hep:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[291]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h6y.prototype={
$1(d){return A.hgQ(A.hHJ(d))},
$S:17}
A.h6z.prototype={
$1(d){return A.hgQ(A.a39(d))},
$S:17}
A.h6A.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ikL","a39",1)
y(A,"ikM","hgQ",0)
y(A,"ikN","hHJ",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.h6y,A.h6z,A.h6A])})();(function constants(){D.fqT=new B.pJ("Intl.locale")})();(function staticFields(){$.hep=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iEe","h7k",()=>48)})()};
(a=>{a["5qx4JntxWD1L3WIEzprbXhxYOW0="]=a.current})($__dart_deferred_initializers__);