((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hxq(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2K(d){var y,x,w,v
if(d==null){if(A.fEs()==null)$.hao="en_US"
y=A.fEs()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hxq(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hfz(d,e,f){var y,x,w,v
if(d==null){if(A.fEs()==null)$.hao="en_US"
y=A.fEs()
y.toString
return A.hfz(y,e,f)}if(e.$1(d))return d
x=[A.ifO(),A.ifQ(),A.ifP(),new A.h2z(),new A.h2A(),new A.h2B()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.icq(d)},
icq(d){throw B.W(B.dK('Invalid locale "'+d+'"',null))},
hcM(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hCO(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hxq(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h2z:function h2z(){},
h2A:function h2A(){},
h2B:function h2B(){},
fEs(){var y=B.aT($.bD.h(0,D.fk1))
return y==null?$.hao:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[54],A)
D=c[285]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h2z.prototype={
$1(d){return A.hcM(A.hCO(d))},
$S:17}
A.h2A.prototype={
$1(d){return A.hcM(A.a2K(d))},
$S:17}
A.h2B.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ifO","a2K",1)
y(A,"ifP","hcM",0)
y(A,"ifQ","hCO",0)})();(function inheritance(){var y=a.inheritMany
y(B.hu,[A.h2z,A.h2A,A.h2B])})();(function constants(){D.fk1=new B.pA("Intl.locale")})();(function staticFields(){$.hao=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"izh","h3k",()=>48)})()};
(a=>{a["IWtIWk7cKdQu/ivmG58OO/+Qzqw="]=a.current})($__dart_deferred_initializers__);