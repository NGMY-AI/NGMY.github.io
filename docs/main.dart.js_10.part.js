((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hCs(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3b(d){var y,x,w,v
if(d==null){if(A.fI0()==null)$.heJ="en_US"
y=A.fI0()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hCs(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b4(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hkd(d,e,f){var y,x,w,v
if(d==null){if(A.fI0()==null)$.heJ="en_US"
y=A.fI0()
y.toString
return A.hkd(y,e,f)}if(e.$1(d))return d
x=[A.ilk(),A.ilm(),A.ill(),new A.h6T(),new A.h6U(),new A.h6V()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ihV(d)},
ihV(d){throw B.X(B.dO('Invalid locale "'+d+'"',null))},
hhe(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hId(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hCs(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h6T:function h6T(){},
h6U:function h6U(){},
h6V:function h6V(){},
fI0(){var y=B.aV($.bE.h(0,D.frI))
return y==null?$.heJ:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[292]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h6T.prototype={
$1(d){return A.hhe(A.hId(d))},
$S:17}
A.h6U.prototype={
$1(d){return A.hhe(A.a3b(d))},
$S:17}
A.h6V.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ilk","a3b",1)
y(A,"ill","hhe",0)
y(A,"ilm","hId",0)})();(function inheritance(){var y=a.inheritMany
y(B.hs,[A.h6T,A.h6U,A.h6V])})();(function constants(){D.frI=new B.pM("Intl.locale")})();(function staticFields(){$.heJ=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iET","h7F",()=>48)})()};
(a=>{a["RhT0QITN0ZT81wE+MxJkU7HtEDM="]=a.current})($__dart_deferred_initializers__);