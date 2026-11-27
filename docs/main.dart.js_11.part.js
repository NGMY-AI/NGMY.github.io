((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hOO(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a4c(d){var y,x,w,v
if(d==null){if(A.fRI()==null)$.hqo="en_US"
y=A.fRI()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hOO(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hwa(d,e,f){var y,x,w,v
if(d==null){if(A.fRI()==null)$.hqo="en_US"
y=A.fRI()
y.toString
return A.hwa(y,e,f)}if(e.$1(d))return d
x=[A.izf(),A.izh(),A.izg(),new A.hiq(),new A.hir(),new A.his()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ivK(d)},
ivK(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
ht2(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hUQ(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hOO(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hiq:function hiq(){},
hir:function hir(){},
his:function his(){},
fRI(){var y=B.aV($.bG.h(0,D.fIq))
return y==null?$.hqo:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[323]
var z=a.updateTypes(["o(o)","o(o?)"])
A.hiq.prototype={
$1(d){return A.ht2(A.hUQ(d))},
$S:15}
A.hir.prototype={
$1(d){return A.ht2(A.a4c(d))},
$S:15}
A.his.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"izf","a4c",1)
y(A,"izg","ht2",0)
y(A,"izh","hUQ",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.hiq,A.hir,A.his])})();(function constants(){D.fIq=new B.q2("Intl.locale")})();(function staticFields(){$.hqo=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iTF","hjc",()=>48)})()};
(a=>{a["eNAp9zKBu9cOb2l5ZMYMXsm3udU="]=a.current})($__dart_deferred_initializers__);