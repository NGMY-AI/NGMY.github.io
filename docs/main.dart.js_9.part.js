((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hn_(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1U(d){var y,x,w,v
if(d==null){if(A.fuN()==null)$.h0i="en_US"
y=A.fuN()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hn_(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b4(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h5d(d,e,f){var y,x,w,v
if(d==null){if(A.fuN()==null)$.h0i="en_US"
y=A.fuN()
y.toString
return A.h5d(y,e,f)}if(e.$1(d))return d
x=[A.i4l(),A.i4n(),A.i4m(),new A.fTx(),new A.fTy(),new A.fTz()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i0X(d)},
i0X(d){throw B.W(B.dI('Invalid locale "'+d+'"',null))},
h2x(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hs6(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hn_(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fTx:function fTx(){},
fTy:function fTy(){},
fTz:function fTz(){},
fuN(){var y=B.aU($.bB.h(0,D.f7D))
return y==null?$.h0i:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[52],A)
D=c[266]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fTx.prototype={
$1(d){return A.h2x(A.hs6(d))},
$S:17}
A.fTy.prototype={
$1(d){return A.h2x(A.a1U(d))},
$S:17}
A.fTz.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i4l","a1U",1)
y(A,"i4m","h2x",0)
y(A,"i4n","hs6",0)})();(function inheritance(){var y=a.inheritMany
y(B.hK,[A.fTx,A.fTy,A.fTz])})();(function constants(){D.f7D=new B.pl("Intl.locale")})();(function staticFields(){$.h0i=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"inw","fUg",()=>48)})()};
(a=>{a["qdKhmFU68uA6crfEdTZkJ2NMwv4="]=a.current})($__dart_deferred_initializers__);