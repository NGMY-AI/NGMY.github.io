((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h_C(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_F(d){var y,x,w,v
if(d==null){if(A.fav()==null)$.fEM="en_US"
y=A.fav()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h_C(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aW(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fJm(d,e,f){var y,x,w,v
if(d==null){if(A.fav()==null)$.fEM="en_US"
y=A.fav()
y.toString
return A.fJm(y,e,f)}if(e.$1(d))return d
x=[A.hGq(),A.hGs(),A.hGr(),new A.fxs(),new A.fxt(),new A.fxu()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hDe(d)},
hDe(d){throw B.R(B.dF('Invalid locale "'+d+'"',null))},
fGS(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h4s(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h_C(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fxs:function fxs(){},
fxt:function fxt(){},
fxu:function fxu(){},
fav(){var y=B.aR($.bt.h(0,D.ewB))
return y==null?$.fEM:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[233]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fxs.prototype={
$1(d){return A.fGS(A.h4s(d))},
$S:17}
A.fxt.prototype={
$1(d){return A.fGS(A.a_F(d))},
$S:17}
A.fxu.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hGq","a_F",1)
y(A,"hGr","fGS",0)
y(A,"hGs","h4s",0)})();(function inheritance(){var y=a.inheritMany
y(B.i2,[A.fxs,A.fxt,A.fxu])})();(function constants(){D.ewB=new B.oH("Intl.locale")})();(function staticFields(){$.fEM=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hZ8","fy2",()=>48)})()};
(a=>{a["wtJlnxhH+jSj8fukqwWxJGgAIYU="]=a.current})($__dart_deferred_initializers__);