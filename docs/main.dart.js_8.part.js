((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hdX(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0Y(d){var y,x,w,v
if(d==null){if(A.fnn()==null)$.fSH="en_US"
y=A.fnn()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hdX(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b0(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fXr(d,e,f){var y,x,w,v
if(d==null){if(A.fnn()==null)$.fSH="en_US"
y=A.fnn()
y.toString
return A.fXr(y,e,f)}if(e.$1(d))return d
x=[A.hVx(),A.hVz(),A.hVy(),new A.fLb(),new A.fLc(),new A.fLd()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hSe(d)},
hSe(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fUQ(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hiO(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hdX(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fLb:function fLb(){},
fLc:function fLc(){},
fLd:function fLd(){},
fnn(){var y=B.aT($.bx.h(0,D.eS1))
return y==null?$.fSH:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[258]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fLb.prototype={
$1(d){return A.fUQ(A.hiO(d))},
$S:17}
A.fLc.prototype={
$1(d){return A.fUQ(A.a0Y(d))},
$S:17}
A.fLd.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hVx","a0Y",1)
y(A,"hVy","fUQ",0)
y(A,"hVz","hiO",0)})();(function inheritance(){var y=a.inheritMany
y(B.hT,[A.fLb,A.fLc,A.fLd])})();(function constants(){D.eS1=new B.p4("Intl.locale")})();(function staticFields(){$.fSH=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"idr","fLR",()=>48)})()};
(a=>{a["YjpULZwCizdoDql7MVQiUiCISaM="]=a.current})($__dart_deferred_initializers__);