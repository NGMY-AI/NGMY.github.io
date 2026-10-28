((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hd8(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0T(d){var y,x,w,v
if(d==null){if(A.fmH()==null)$.fRW="en_US"
y=A.fmH()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hd8(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b0(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fWF(d,e,f){var y,x,w,v
if(d==null){if(A.fmH()==null)$.fRW="en_US"
y=A.fmH()
y.toString
return A.fWF(y,e,f)}if(e.$1(d))return d
x=[A.hUH(),A.hUJ(),A.hUI(),new A.fKu(),new A.fKv(),new A.fKw()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hRo(d)},
hRo(d){throw B.U(B.dI('Invalid locale "'+d+'"',null))},
fU5(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hi1(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hd8(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fKu:function fKu(){},
fKv:function fKv(){},
fKw:function fKw(){},
fmH(){var y=B.aU($.bx.h(0,D.eQU))
return y==null?$.fRW:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[258]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fKu.prototype={
$1(d){return A.fU5(A.hi1(d))},
$S:17}
A.fKv.prototype={
$1(d){return A.fU5(A.a0T(d))},
$S:17}
A.fKw.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hUH","a0T",1)
y(A,"hUI","fU5",0)
y(A,"hUJ","hi1",0)})();(function inheritance(){var y=a.inheritMany
y(B.hT,[A.fKu,A.fKv,A.fKw])})();(function constants(){D.eQU=new B.p2("Intl.locale")})();(function staticFields(){$.fRW=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"icz","fL9",()=>48)})()};
(a=>{a["GRPqm9jH0OXUmz2bPqWUhq4RM1Y="]=a.current})($__dart_deferred_initializers__);