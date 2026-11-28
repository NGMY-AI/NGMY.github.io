((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hQJ(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a4m(d){var y,x,w,v
if(d==null){if(A.fTe()==null)$.hs3="en_US"
y=A.fTe()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hQJ(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hxV(d,e,f){var y,x,w,v
if(d==null){if(A.fTe()==null)$.hs3="en_US"
y=A.fTe()
y.toString
return A.hxV(y,e,f)}if(e.$1(d))return d
x=[A.iBs(),A.iBu(),A.iBt(),new A.hk4(),new A.hk5(),new A.hk6()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ixT(d)},
ixT(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
huJ(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hWN(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hQJ(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hk4:function hk4(){},
hk5:function hk5(){},
hk6:function hk6(){},
fTe(){var y=B.aW($.bG.h(0,D.fKE))
return y==null?$.hs3:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[323]
var z=a.updateTypes(["o(o)","o(o?)"])
A.hk4.prototype={
$1(d){return A.huJ(A.hWN(d))},
$S:15}
A.hk5.prototype={
$1(d){return A.huJ(A.a4m(d))},
$S:15}
A.hk6.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iBs","a4m",1)
y(A,"iBt","huJ",0)
y(A,"iBu","hWN",0)})();(function inheritance(){var y=a.inheritMany
y(B.hr,[A.hk4,A.hk5,A.hk6])})();(function constants(){D.fKE=new B.q2("Intl.locale")})();(function staticFields(){$.hs3=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iW4","hkR",()=>48)})()};
(a=>{a["kfOzeGZsuQDSuxzMbDDmHGuRu+s="]=a.current})($__dart_deferred_initializers__);