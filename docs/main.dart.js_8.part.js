((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h18(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_Q(d){var y,x,w,v
if(d==null){if(A.fbT()==null)$.fGe="en_US"
y=A.fbT()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h18(d)
if(x===-1)return d
w=C.a.an(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fKR(d,e,f){var y,x,w,v
if(d==null){if(A.fbT()==null)$.fGe="en_US"
y=A.fbT()
y.toString
return A.fKR(y,e,f)}if(e.$1(d))return d
x=[A.hIh(),A.hIj(),A.hIi(),new A.fyX(),new A.fyY(),new A.fyZ()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hF1(d)},
hF1(d){throw B.R(B.dF('Invalid locale "'+d+'"',null))},
fIk(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h5Z(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h18(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.an(d,0,x).toLowerCase()},
fyX:function fyX(){},
fyY:function fyY(){},
fyZ:function fyZ(){},
fbT(){var y=B.aS($.bu.h(0,D.eBA))
return y==null?$.fGe:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[49],A)
D=c[235]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fyX.prototype={
$1(d){return A.fIk(A.h5Z(d))},
$S:17}
A.fyY.prototype={
$1(d){return A.fIk(A.a_Q(d))},
$S:17}
A.fyZ.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hIh","a_Q",1)
y(A,"hIi","fIk",0)
y(A,"hIj","h5Z",0)})();(function inheritance(){var y=a.inheritMany
y(B.i4,[A.fyX,A.fyY,A.fyZ])})();(function constants(){D.eBA=new B.oJ("Intl.locale")})();(function staticFields(){$.fGe=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"i02","fzx",()=>48)})()};
(a=>{a["diClxEOLH32ub24SNn5uAjwsYMk="]=a.current})($__dart_deferred_initializers__);