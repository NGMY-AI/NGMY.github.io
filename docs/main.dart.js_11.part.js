((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hMK(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a41(d){var y,x,w,v
if(d==null){if(A.fQx()==null)$.hos="en_US"
y=A.fQx()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hMK(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hu7(d,e,f){var y,x,w,v
if(d==null){if(A.fQx()==null)$.hos="en_US"
y=A.fQx()
y.toString
return A.hu7(y,e,f)}if(e.$1(d))return d
x=[A.iwD(),A.iwF(),A.iwE(),new A.hgw(),new A.hgx(),new A.hgy()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.it9(d)},
it9(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
hr4(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hSH(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hMK(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hgw:function hgw(){},
hgx:function hgx(){},
hgy:function hgy(){},
fQx(){var y=B.aV($.bG.h(0,D.fFv))
return y==null?$.hos:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[321]
var z=a.updateTypes(["n(n)","n(n?)"])
A.hgw.prototype={
$1(d){return A.hr4(A.hSH(d))},
$S:15}
A.hgx.prototype={
$1(d){return A.hr4(A.a41(d))},
$S:15}
A.hgy.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iwD","a41",1)
y(A,"iwE","hr4",0)
y(A,"iwF","hSH",0)})();(function inheritance(){var y=a.inheritMany
y(B.hp,[A.hgw,A.hgx,A.hgy])})();(function constants(){D.fFv=new B.pZ("Intl.locale")})();(function staticFields(){$.hos=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iQL","hhi",()=>48)})()};
(a=>{a["sq8CodYugCuxr71LwEnIjWWUDYQ="]=a.current})($__dart_deferred_initializers__);