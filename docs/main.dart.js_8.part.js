((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fZL(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_u(d){var y,x,w,v
if(d==null){if(A.f9L()==null)$.fDW="en_US"
y=A.f9L()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fZL(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fIw(d,e,f){var y,x,w,v
if(d==null){if(A.f9L()==null)$.fDW="en_US"
y=A.f9L()
y.toString
return A.fIw(y,e,f)}if(e.$1(d))return d
x=[A.hFp(),A.hFr(),A.hFq(),new A.fwC(),new A.fwD(),new A.fwE()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hCe(d)},
hCe(d){throw B.P(B.dF('Invalid locale "'+d+'"',null))},
fG1(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h3z(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fZL(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fwC:function fwC(){},
fwD:function fwD(){},
fwE:function fwE(){},
f9L(){var y=B.aR($.bs.h(0,D.etF))
return y==null?$.fDW:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[233]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fwC.prototype={
$1(d){return A.fG1(A.h3z(d))},
$S:17}
A.fwD.prototype={
$1(d){return A.fG1(A.a_u(d))},
$S:17}
A.fwE.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hFp","a_u",1)
y(A,"hFq","fG1",0)
y(A,"hFr","h3z",0)})();(function inheritance(){var y=a.inheritMany
y(B.i2,[A.fwC,A.fwD,A.fwE])})();(function constants(){D.etF=new B.oG("Intl.locale")})();(function staticFields(){$.fDW=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hY1","fxc",()=>48)})()};
(a=>{a["MQRm+hdpFK56R/5Xkqq1pyRy058="]=a.current})($__dart_deferred_initializers__);