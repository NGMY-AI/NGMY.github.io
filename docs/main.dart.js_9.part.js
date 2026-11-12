((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hzE(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2Y(d){var y,x,w,v
if(d==null){if(A.fGd()==null)$.hcq="en_US"
y=A.fGd()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hzE(d)
if(x===-1)return d
w=C.a.aC(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hhH(d,e,f){var y,x,w,v
if(d==null){if(A.fGd()==null)$.hcq="en_US"
y=A.fGd()
y.toString
return A.hhH(y,e,f)}if(e.$1(d))return d
x=[A.iiI(),A.iiK(),A.iiJ(),new A.h4z(),new A.h4A(),new A.h4B()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ifd(d)},
ifd(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
heR(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hF6(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hzE(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aC(d,0,x).toLowerCase()},
h4z:function h4z(){},
h4A:function h4A(){},
h4B:function h4B(){},
fGd(){var y=B.aS($.bE.h(0,D.fll))
return y==null?$.hcq:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[285]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h4z.prototype={
$1(d){return A.heR(A.hF6(d))},
$S:17}
A.h4A.prototype={
$1(d){return A.heR(A.a2Y(d))},
$S:17}
A.h4B.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iiI","a2Y",1)
y(A,"iiJ","heR",0)
y(A,"iiK","hF6",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4z,A.h4A,A.h4B])})();(function constants(){D.fll=new B.pD("Intl.locale")})();(function staticFields(){$.hcq=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iCQ","h5l",()=>48)})()};
(a=>{a["OHw8WgW+98XQsT3REMlgDPA+oLM="]=a.current})($__dart_deferred_initializers__);