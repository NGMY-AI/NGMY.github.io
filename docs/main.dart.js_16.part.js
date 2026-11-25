((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hKc(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3K(d){var y,x,w,v
if(d==null){if(A.fOq()==null)$.hm1="en_US"
y=A.fOq()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hKc(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hrG(d,e,f){var y,x,w,v
if(d==null){if(A.fOq()==null)$.hm1="en_US"
y=A.fOq()
y.toString
return A.hrG(y,e,f)}if(e.$1(d))return d
x=[A.itR(),A.itT(),A.itS(),new A.hea(),new A.heb(),new A.hec()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iqn(d)},
iqn(d){throw B.Y(B.dL('Invalid locale "'+d+'"',null))},
hoE(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hQ3(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hKc(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hea:function hea(){},
heb:function heb(){},
hec:function hec(){},
fOq(){var y=B.aV($.bG.h(0,D.fBe))
return y==null?$.hm1:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[385]
var z=a.updateTypes(["m(m)","m(m?)"])
A.hea.prototype={
$1(d){return A.hoE(A.hQ3(d))},
$S:15}
A.heb.prototype={
$1(d){return A.hoE(A.a3K(d))},
$S:15}
A.hec.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"itR","a3K",1)
y(A,"itS","hoE",0)
y(A,"itT","hQ3",0)})();(function inheritance(){var y=a.inheritMany
y(B.fR,[A.hea,A.heb,A.hec])})();(function constants(){D.fBe=new B.pX("Intl.locale")})();(function staticFields(){$.hm1=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iNO","heY",()=>48)})()};
(a=>{a["AJ9zuINkKQ5b0iK67REpzgkZt1s="]=a.current})($__dart_deferred_initializers__);