((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hal(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0F(d){var y,x,w,v
if(d==null){if(A.fk5()==null)$.fPb="en_US"
y=A.fk5()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hal(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b_(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fTW(d,e,f){var y,x,w,v
if(d==null){if(A.fk5()==null)$.fPb="en_US"
y=A.fk5()
y.toString
return A.fTW(y,e,f)}if(e.$1(d))return d
x=[A.hRP(),A.hRR(),A.hRQ(),new A.fHQ(),new A.fHR(),new A.fHS()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hOw(d)},
hOw(d){throw B.U(B.dI('Invalid locale "'+d+'"',null))},
fRk(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hfe(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hal(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fHQ:function fHQ(){},
fHR:function fHR(){},
fHS:function fHS(){},
fk5(){var y=B.aU($.bw.h(0,D.eNG))
return y==null?$.fPb:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[255]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fHQ.prototype={
$1(d){return A.fRk(A.hfe(d))},
$S:17}
A.fHR.prototype={
$1(d){return A.fRk(A.a0F(d))},
$S:17}
A.fHS.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hRP","a0F",1)
y(A,"hRQ","fRk",0)
y(A,"hRR","hfe",0)})();(function inheritance(){var y=a.inheritMany
y(B.hS,[A.fHQ,A.fHR,A.fHS])})();(function constants(){D.eNG=new B.p_("Intl.locale")})();(function staticFields(){$.fPb=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"i9G","fIr",()=>48)})()};
(a=>{a["9z7A67wUFoz6XVzSmYrfBM0QyDQ="]=a.current})($__dart_deferred_initializers__);