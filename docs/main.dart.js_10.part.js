((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
htW(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2e(d){var y,x,w,v
if(d==null){if(A.fBo()==null)$.h78="en_US"
y=A.fBo()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.htW(d)
if(x===-1)return d
w=C.a.ar(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hc5(d,e,f){var y,x,w,v
if(d==null){if(A.fBo()==null)$.h78="en_US"
y=A.fBo()
y.toString
return A.hc5(y,e,f)}if(e.$1(d))return d
x=[A.ibB(),A.ibD(),A.ibC(),new A.h_m(),new A.h_n(),new A.h_o()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i89(d)},
i89(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h9p(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hz6(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.htW(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ar(d,0,x).toLowerCase()},
h_m:function h_m(){},
h_n:function h_n(){},
h_o:function h_o(){},
fBo(){var y=B.aT($.bB.h(0,D.ffh))
return y==null?$.h78:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[285]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h_m.prototype={
$1(d){return A.h9p(A.hz6(d))},
$S:17}
A.h_n.prototype={
$1(d){return A.h9p(A.a2e(d))},
$S:17}
A.h_o.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ibB","a2e",1)
y(A,"ibC","h9p",0)
y(A,"ibD","hz6",0)})();(function inheritance(){var y=a.inheritMany
y(B.hy,[A.h_m,A.h_n,A.h_o])})();(function constants(){D.ffh=new B.pt("Intl.locale")})();(function staticFields(){$.h78=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iuQ","h05",()=>48)})()};
(a=>{a["pesscjNIeSYxgiIraZRc+QbAoB8="]=a.current})($__dart_deferred_initializers__);