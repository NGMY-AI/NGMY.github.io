((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hJT(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3J(d){var y,x,w,v
if(d==null){if(A.fO8()==null)$.hlK="en_US"
y=A.fO8()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hJT(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hrm(d,e,f){var y,x,w,v
if(d==null){if(A.fO8()==null)$.hlK="en_US"
y=A.fO8()
y.toString
return A.hrm(y,e,f)}if(e.$1(d))return d
x=[A.itx(),A.itz(),A.ity(),new A.hdT(),new A.hdU(),new A.hdV()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iq3(d)},
iq3(d){throw B.Y(B.dK('Invalid locale "'+d+'"',null))},
hok(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hPK(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hJT(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hdT:function hdT(){},
hdU:function hdU(){},
hdV:function hdV(){},
fO8(){var y=B.aV($.bG.h(0,D.fB7))
return y==null?$.hlK:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[384]
var z=a.updateTypes(["n(n)","n(n?)"])
A.hdT.prototype={
$1(d){return A.hok(A.hPK(d))},
$S:15}
A.hdU.prototype={
$1(d){return A.hok(A.a3J(d))},
$S:15}
A.hdV.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"itx","a3J",1)
y(A,"ity","hok",0)
y(A,"itz","hPK",0)})();(function inheritance(){var y=a.inheritMany
y(B.fR,[A.hdT,A.hdU,A.hdV])})();(function constants(){D.fB7=new B.pW("Intl.locale")})();(function staticFields(){$.hlK=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iNu","heG",()=>48)})()};
(a=>{a["wg+QJLXWMONCKPaXgFWpkEBIZ9o="]=a.current})($__dart_deferred_initializers__);