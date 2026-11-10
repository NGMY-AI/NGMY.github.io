((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hrD(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2g(d){var y,x,w,v
if(d==null){if(A.fzh()==null)$.h4T="en_US"
y=A.fzh()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hrD(d)
if(x===-1)return d
w=C.a.aq(d,0,x)
v=C.a.b7(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h9P(d,e,f){var y,x,w,v
if(d==null){if(A.fzh()==null)$.h4T="en_US"
y=A.fzh()
y.toString
return A.h9P(y,e,f)}if(e.$1(d))return d
x=[A.i98(),A.i9a(),A.i99(),new A.fY7(),new A.fY8(),new A.fY9()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i5I(d)},
i5I(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h78(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hwM(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hrD(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aq(d,0,x).toLowerCase()},
fY7:function fY7(){},
fY8:function fY8(){},
fY9:function fY9(){},
fzh(){var y=B.aT($.bB.h(0,D.fdn))
return y==null?$.h4T:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[53],A)
D=c[264]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fY7.prototype={
$1(d){return A.h78(A.hwM(d))},
$S:17}
A.fY8.prototype={
$1(d){return A.h78(A.a2g(d))},
$S:17}
A.fY9.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i98","a2g",1)
y(A,"i99","h78",0)
y(A,"i9a","hwM",0)})();(function inheritance(){var y=a.inheritMany
y(B.hM,[A.fY7,A.fY8,A.fY9])})();(function constants(){D.fdn=new B.pp("Intl.locale")})();(function staticFields(){$.h4T=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"isn","fYR",()=>48)})()};
(a=>{a["lkuwnUxpMJjEL/hOfFz3Q6XaHXs="]=a.current})($__dart_deferred_initializers__);