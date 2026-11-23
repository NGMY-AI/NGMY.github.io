((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hIY(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3E(d){var y,x,w,v
if(d==null){if(A.fNc()==null)$.hkO="en_US"
y=A.fNc()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hIY(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hqq(d,e,f){var y,x,w,v
if(d==null){if(A.fNc()==null)$.hkO="en_US"
y=A.fNc()
y.toString
return A.hqq(y,e,f)}if(e.$1(d))return d
x=[A.isA(),A.isC(),A.isB(),new A.hcX(),new A.hcY(),new A.hcZ()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ip7(d)},
ip7(d){throw B.Y(B.dJ('Invalid locale "'+d+'"',null))},
hno(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hOO(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hIY(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hcX:function hcX(){},
hcY:function hcY(){},
hcZ:function hcZ(){},
fNc(){var y=B.aW($.bG.h(0,D.fB4))
return y==null?$.hkO:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[383]
var z=a.updateTypes(["m(m)","m(m?)"])
A.hcX.prototype={
$1(d){return A.hno(A.hOO(d))},
$S:15}
A.hcY.prototype={
$1(d){return A.hno(A.a3E(d))},
$S:15}
A.hcZ.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"isA","a3E",1)
y(A,"isB","hno",0)
y(A,"isC","hOO",0)})();(function inheritance(){var y=a.inheritMany
y(B.fO,[A.hcX,A.hcY,A.hcZ])})();(function constants(){D.fB4=new B.pW("Intl.locale")})();(function staticFields(){$.hkO=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iMx","hdK",()=>48)})()};
(a=>{a["Qrs7Rzuoepe13B5l8xPiQiYHx0k="]=a.current})($__dart_deferred_initializers__);