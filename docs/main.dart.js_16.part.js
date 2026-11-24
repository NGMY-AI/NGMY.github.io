((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hK6(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3J(d){var y,x,w,v
if(d==null){if(A.fOk()==null)$.hlW="en_US"
y=A.fOk()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hK6(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hrA(d,e,f){var y,x,w,v
if(d==null){if(A.fOk()==null)$.hlW="en_US"
y=A.fOk()
y.toString
return A.hrA(y,e,f)}if(e.$1(d))return d
x=[A.itK(),A.itM(),A.itL(),new A.he4(),new A.he5(),new A.he6()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iqg(d)},
iqg(d){throw B.Y(B.dL('Invalid locale "'+d+'"',null))},
hoy(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hPX(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hK6(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
he4:function he4(){},
he5:function he5(){},
he6:function he6(){},
fOk(){var y=B.aV($.bG.h(0,D.fBc))
return y==null?$.hlW:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[385]
var z=a.updateTypes(["m(m)","m(m?)"])
A.he4.prototype={
$1(d){return A.hoy(A.hPX(d))},
$S:15}
A.he5.prototype={
$1(d){return A.hoy(A.a3J(d))},
$S:15}
A.he6.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"itK","a3J",1)
y(A,"itL","hoy",0)
y(A,"itM","hPX",0)})();(function inheritance(){var y=a.inheritMany
y(B.fR,[A.he4,A.he5,A.he6])})();(function constants(){D.fBc=new B.pX("Intl.locale")})();(function staticFields(){$.hlW=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iNH","heS",()=>48)})()};
(a=>{a["xv0t9iX4xRCD9aGJGOfQxRmiAjk="]=a.current})($__dart_deferred_initializers__);