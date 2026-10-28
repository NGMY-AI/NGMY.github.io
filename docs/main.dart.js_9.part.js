((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hhl(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1h(d){var y,x,w,v
if(d==null){if(A.fqj()==null)$.fVW="en_US"
y=A.fqj()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hhl(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b1(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h_N(d,e,f){var y,x,w,v
if(d==null){if(A.fqj()==null)$.fVW="en_US"
y=A.fqj()
y.toString
return A.h_N(y,e,f)}if(e.$1(d))return d
x=[A.hZ7(),A.hZ9(),A.hZ8(),new A.fOo(),new A.fOp(),new A.fOq()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hVO(d)},
hVO(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fY9(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hmg(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hhl(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fOo:function fOo(){},
fOp:function fOp(){},
fOq:function fOq(){},
fqj(){var y=B.aU($.bz.h(0,D.eV1))
return y==null?$.fVW:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[261]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fOo.prototype={
$1(d){return A.fY9(A.hmg(d))},
$S:17}
A.fOp.prototype={
$1(d){return A.fY9(A.a1h(d))},
$S:17}
A.fOq.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hZ7","a1h",1)
y(A,"hZ8","fY9",0)
y(A,"hZ9","hmg",0)})();(function inheritance(){var y=a.inheritMany
y(B.hV,[A.fOo,A.fOp,A.fOq])})();(function constants(){D.eV1=new B.p8("Intl.locale")})();(function staticFields(){$.fVW=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ih7","fP3",()=>48)})()};
(a=>{a["WrWsK4MOCLNExvL4ThC8l59dctM="]=a.current})($__dart_deferred_initializers__);