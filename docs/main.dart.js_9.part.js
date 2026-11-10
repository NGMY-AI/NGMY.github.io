((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hs0(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2k(d){var y,x,w,v
if(d==null){if(A.fzE()==null)$.h5h="en_US"
y=A.fzE()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hs0(d)
if(x===-1)return d
w=C.a.ar(d,0,x)
v=C.a.b7(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
had(d,e,f){var y,x,w,v
if(d==null){if(A.fzE()==null)$.h5h="en_US"
y=A.fzE()
y.toString
return A.had(y,e,f)}if(e.$1(d))return d
x=[A.i9x(),A.i9z(),A.i9y(),new A.fYw(),new A.fYx(),new A.fYy()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i66(d)},
i66(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h7x(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hx9(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hs0(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ar(d,0,x).toLowerCase()},
fYw:function fYw(){},
fYx:function fYx(){},
fYy:function fYy(){},
fzE(){var y=B.aS($.bB.h(0,D.fdC))
return y==null?$.h5h:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[53],A)
D=c[265]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fYw.prototype={
$1(d){return A.h7x(A.hx9(d))},
$S:17}
A.fYx.prototype={
$1(d){return A.h7x(A.a2k(d))},
$S:17}
A.fYy.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i9x","a2k",1)
y(A,"i9y","h7x",0)
y(A,"i9z","hx9",0)})();(function inheritance(){var y=a.inheritMany
y(B.hM,[A.fYw,A.fYx,A.fYy])})();(function constants(){D.fdC=new B.pp("Intl.locale")})();(function staticFields(){$.h5h=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"isO","fZf",()=>48)})()};
(a=>{a["Kmryrs6+/3EIJlgTyQ8iM1T4JB4="]=a.current})($__dart_deferred_initializers__);