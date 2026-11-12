((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hyh(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2U(d){var y,x,w,v
if(d==null){if(A.fF7()==null)$.hb9="en_US"
y=A.fF7()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hyh(d)
if(x===-1)return d
w=C.a.aC(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hgo(d,e,f){var y,x,w,v
if(d==null){if(A.fF7()==null)$.hb9="en_US"
y=A.fF7()
y.toString
return A.hgo(y,e,f)}if(e.$1(d))return d
x=[A.ihb(),A.ihd(),A.ihc(),new A.h3i(),new A.h3j(),new A.h3k()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.idK(d)},
idK(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
hdA(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hDI(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hyh(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aC(d,0,x).toLowerCase()},
h3i:function h3i(){},
h3j:function h3j(){},
h3k:function h3k(){},
fF7(){var y=B.aT($.bE.h(0,D.fkk))
return y==null?$.hb9:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h3i.prototype={
$1(d){return A.hdA(A.hDI(d))},
$S:17}
A.h3j.prototype={
$1(d){return A.hdA(A.a2U(d))},
$S:17}
A.h3k.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ihb","a2U",1)
y(A,"ihc","hdA",0)
y(A,"ihd","hDI",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h3i,A.h3j,A.h3k])})();(function constants(){D.fkk=new B.pD("Intl.locale")})();(function staticFields(){$.hb9=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iBd","h44",()=>48)})()};
(a=>{a["f1DGC1waiMTvYFDf1PD5FPZafdc="]=a.current})($__dart_deferred_initializers__);