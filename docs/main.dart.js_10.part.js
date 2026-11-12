((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hxU(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2R(d){var y,x,w,v
if(d==null){if(A.fEO()==null)$.haP="en_US"
y=A.fEO()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hxU(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hg0(d,e,f){var y,x,w,v
if(d==null){if(A.fEO()==null)$.haP="en_US"
y=A.fEO()
y.toString
return A.hg0(y,e,f)}if(e.$1(d))return d
x=[A.ign(),A.igp(),A.igo(),new A.h2Z(),new A.h3_(),new A.h30()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.icZ(d)},
icZ(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
hdc(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hDj(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hxU(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h2Z:function h2Z(){},
h3_:function h3_(){},
h30:function h30(){},
fEO(){var y=B.aT($.bE.h(0,D.fk_))
return y==null?$.haP:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[54],A)
D=c[285]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h2Z.prototype={
$1(d){return A.hdc(A.hDj(d))},
$S:17}
A.h3_.prototype={
$1(d){return A.hdc(A.a2R(d))},
$S:17}
A.h30.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ign","a2R",1)
y(A,"igo","hdc",0)
y(A,"igp","hDj",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h2Z,A.h3_,A.h30])})();(function constants(){D.fk_=new B.pA("Intl.locale")})();(function staticFields(){$.haP=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"izT","h3L",()=>48)})()};
(a=>{a["iJLXoqN2sbsOh69sVwo6ptM5SIE="]=a.current})($__dart_deferred_initializers__);