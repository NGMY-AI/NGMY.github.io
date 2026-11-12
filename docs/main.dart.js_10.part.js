((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hxT(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2P(d){var y,x,w,v
if(d==null){if(A.fEN()==null)$.haO="en_US"
y=A.fEN()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hxT(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hg_(d,e,f){var y,x,w,v
if(d==null){if(A.fEN()==null)$.haO="en_US"
y=A.fEN()
y.toString
return A.hg_(y,e,f)}if(e.$1(d))return d
x=[A.ign(),A.igp(),A.igo(),new A.h2Y(),new A.h2Z(),new A.h3_()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.icY(d)},
icY(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
hdb(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hDi(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hxT(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h2Y:function h2Y(){},
h2Z:function h2Z(){},
h3_:function h3_(){},
fEN(){var y=B.aT($.bD.h(0,D.fjT))
return y==null?$.haO:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[54],A)
D=c[284]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h2Y.prototype={
$1(d){return A.hdb(A.hDi(d))},
$S:17}
A.h2Z.prototype={
$1(d){return A.hdb(A.a2P(d))},
$S:17}
A.h3_.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ign","a2P",1)
y(A,"igo","hdb",0)
y(A,"igp","hDi",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h2Y,A.h2Z,A.h3_])})();(function constants(){D.fjT=new B.pA("Intl.locale")})();(function staticFields(){$.haO=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"izS","h3K",()=>48)})()};
(a=>{a["gYJ4/8RhmDFThKwUHzmJZsY+Utw="]=a.current})($__dart_deferred_initializers__);