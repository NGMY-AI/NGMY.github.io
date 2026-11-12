((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hyn(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2U(d){var y,x,w,v
if(d==null){if(A.fF8()==null)$.hbf="en_US"
y=A.fF8()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hyn(d)
if(x===-1)return d
w=C.a.aC(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hgu(d,e,f){var y,x,w,v
if(d==null){if(A.fF8()==null)$.hbf="en_US"
y=A.fF8()
y.toString
return A.hgu(y,e,f)}if(e.$1(d))return d
x=[A.ihi(),A.ihk(),A.ihj(),new A.h3o(),new A.h3p(),new A.h3q()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.idR(d)},
idR(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
hdG(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hDO(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hyn(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aC(d,0,x).toLowerCase()},
h3o:function h3o(){},
h3p:function h3p(){},
h3q:function h3q(){},
fF8(){var y=B.aT($.bE.h(0,D.fko))
return y==null?$.hbf:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[288]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h3o.prototype={
$1(d){return A.hdG(A.hDO(d))},
$S:17}
A.h3p.prototype={
$1(d){return A.hdG(A.a2U(d))},
$S:17}
A.h3q.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ihi","a2U",1)
y(A,"ihj","hdG",0)
y(A,"ihk","hDO",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h3o,A.h3p,A.h3q])})();(function constants(){D.fko=new B.pD("Intl.locale")})();(function staticFields(){$.hbf=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iBn","h4a",()=>48)})()};
(a=>{a["le7Yusf0CZPSe7xZiNyzjImp0O8="]=a.current})($__dart_deferred_initializers__);