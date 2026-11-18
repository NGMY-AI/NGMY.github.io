((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hD7(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3i(d){var y,x,w,v
if(d==null){if(A.fIv()==null)$.hfj="en_US"
y=A.fIv()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hD7(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b0(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hkS(d,e,f){var y,x,w,v
if(d==null){if(A.fIv()==null)$.hfj="en_US"
y=A.fIv()
y.toString
return A.hkS(y,e,f)}if(e.$1(d))return d
x=[A.im0(),A.im2(),A.im1(),new A.h7t(),new A.h7u(),new A.h7v()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iiB(d)},
iiB(d){throw B.W(B.dO('Invalid locale "'+d+'"',null))},
hhS(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hIT(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hD7(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h7t:function h7t(){},
h7u:function h7u(){},
h7v:function h7v(){},
fIv(){var y=B.aV($.bF.h(0,D.fvu))
return y==null?$.hfj:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[56],A)
D=c[294]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h7t.prototype={
$1(d){return A.hhS(A.hIT(d))},
$S:17}
A.h7u.prototype={
$1(d){return A.hhS(A.a3i(d))},
$S:17}
A.h7v.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"im0","a3i",1)
y(A,"im1","hhS",0)
y(A,"im2","hIT",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h7t,A.h7u,A.h7v])})();(function constants(){D.fvu=new B.pO("Intl.locale")})();(function staticFields(){$.hfj=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iFD","h8f",()=>48)})()};
(a=>{a["vvOuaAosB3Q+WGrVxJTSCKxVEi0="]=a.current})($__dart_deferred_initializers__);