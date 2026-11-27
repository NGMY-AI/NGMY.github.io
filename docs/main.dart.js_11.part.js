((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hPH(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a4f(d){var y,x,w,v
if(d==null){if(A.fSx()==null)$.hre="en_US"
y=A.fSx()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hPH(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hx_(d,e,f){var y,x,w,v
if(d==null){if(A.fSx()==null)$.hre="en_US"
y=A.fSx()
y.toString
return A.hx_(y,e,f)}if(e.$1(d))return d
x=[A.iAl(),A.iAn(),A.iAm(),new A.hjg(),new A.hjh(),new A.hji()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iwO(d)},
iwO(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
htT(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hVK(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hPH(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hjg:function hjg(){},
hjh:function hjh(){},
hji:function hji(){},
fSx(){var y=B.aV($.bG.h(0,D.fJo))
return y==null?$.hre:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[323]
var z=a.updateTypes(["o(o)","o(o?)"])
A.hjg.prototype={
$1(d){return A.htT(A.hVK(d))},
$S:15}
A.hjh.prototype={
$1(d){return A.htT(A.a4f(d))},
$S:15}
A.hji.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iAl","a4f",1)
y(A,"iAm","htT",0)
y(A,"iAn","hVK",0)})();(function inheritance(){var y=a.inheritMany
y(B.hr,[A.hjg,A.hjh,A.hji])})();(function constants(){D.fJo=new B.q2("Intl.locale")})();(function staticFields(){$.hre=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iUO","hk2",()=>48)})()};
(a=>{a["1/FzulYl3YVuM6Dleonv2/zIT/4="]=a.current})($__dart_deferred_initializers__);