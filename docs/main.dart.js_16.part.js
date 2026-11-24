((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hJM(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3J(d){var y,x,w,v
if(d==null){if(A.fO1()==null)$.hlD="en_US"
y=A.fO1()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hJM(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hrf(d,e,f){var y,x,w,v
if(d==null){if(A.fO1()==null)$.hlD="en_US"
y=A.fO1()
y.toString
return A.hrf(y,e,f)}if(e.$1(d))return d
x=[A.itq(),A.its(),A.itr(),new A.hdM(),new A.hdN(),new A.hdO()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ipX(d)},
ipX(d){throw B.X(B.dK('Invalid locale "'+d+'"',null))},
hod(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hPD(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hJM(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hdM:function hdM(){},
hdN:function hdN(){},
hdO:function hdO(){},
fO1(){var y=B.aV($.bG.h(0,D.fB4))
return y==null?$.hlD:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[384]
var z=a.updateTypes(["n(n)","n(n?)"])
A.hdM.prototype={
$1(d){return A.hod(A.hPD(d))},
$S:15}
A.hdN.prototype={
$1(d){return A.hod(A.a3J(d))},
$S:15}
A.hdO.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"itq","a3J",1)
y(A,"itr","hod",0)
y(A,"its","hPD",0)})();(function inheritance(){var y=a.inheritMany
y(B.fR,[A.hdM,A.hdN,A.hdO])})();(function constants(){D.fB4=new B.pW("Intl.locale")})();(function staticFields(){$.hlD=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iNn","hez",()=>48)})()};
(a=>{a["nsSZuEGvI7D2K1U5EUI4NNEJLak="]=a.current})($__dart_deferred_initializers__);