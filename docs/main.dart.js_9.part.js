((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hoj(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a20(d){var y,x,w,v
if(d==null){if(A.fw3()==null)$.h1A="en_US"
y=A.fw3()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hoj(d)
if(x===-1)return d
w=C.a.aq(d,0,x)
v=C.a.b7(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h6w(d,e,f){var y,x,w,v
if(d==null){if(A.fw3()==null)$.h1A="en_US"
y=A.fw3()
y.toString
return A.h6w(y,e,f)}if(e.$1(d))return d
x=[A.i5O(),A.i5Q(),A.i5P(),new A.fUP(),new A.fUQ(),new A.fUR()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i2o(d)},
i2o(d){throw B.W(B.dJ('Invalid locale "'+d+'"',null))},
h3Q(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hts(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hoj(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aq(d,0,x).toLowerCase()},
fUP:function fUP(){},
fUQ:function fUQ(){},
fUR:function fUR(){},
fw3(){var y=B.aU($.bB.h(0,D.fbe))
return y==null?$.h1A:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[53],A)
D=c[268]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fUP.prototype={
$1(d){return A.h3Q(A.hts(d))},
$S:17}
A.fUQ.prototype={
$1(d){return A.h3Q(A.a20(d))},
$S:17}
A.fUR.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i5O","a20",1)
y(A,"i5P","h3Q",0)
y(A,"i5Q","hts",0)})();(function inheritance(){var y=a.inheritMany
y(B.hL,[A.fUP,A.fUQ,A.fUR])})();(function constants(){D.fbe=new B.pk("Intl.locale")})();(function staticFields(){$.h1A=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ip1","fVy",()=>48)})()};
(a=>{a["EbByq/o3rSoBntcbOmMAPUgpKUM="]=a.current})($__dart_deferred_initializers__);