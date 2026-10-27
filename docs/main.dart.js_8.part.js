((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h_L(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_F(d){var y,x,w,v
if(d==null){if(A.faA()==null)$.fEV="en_US"
y=A.faA()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h_L(d)
if(x===-1)return d
w=C.a.an(d,0,x)
v=C.a.aW(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fJv(d,e,f){var y,x,w,v
if(d==null){if(A.faA()==null)$.fEV="en_US"
y=A.faA()
y.toString
return A.fJv(y,e,f)}if(e.$1(d))return d
x=[A.hGA(),A.hGC(),A.hGB(),new A.fxB(),new A.fxC(),new A.fxD()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hDo(d)},
hDo(d){throw B.R(B.dF('Invalid locale "'+d+'"',null))},
fH0(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h4B(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h_L(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.an(d,0,x).toLowerCase()},
fxB:function fxB(){},
fxC:function fxC(){},
fxD:function fxD(){},
faA(){var y=B.aS($.bt.h(0,D.ey7))
return y==null?$.fEV:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[233]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fxB.prototype={
$1(d){return A.fH0(A.h4B(d))},
$S:17}
A.fxC.prototype={
$1(d){return A.fH0(A.a_F(d))},
$S:17}
A.fxD.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hGA","a_F",1)
y(A,"hGB","fH0",0)
y(A,"hGC","h4B",0)})();(function inheritance(){var y=a.inheritMany
y(B.i3,[A.fxB,A.fxC,A.fxD])})();(function constants(){D.ey7=new B.oI("Intl.locale")})();(function staticFields(){$.fEV=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hZi","fyb",()=>48)})()};
(a=>{a["2YrXkpiPc2QSVMXGRa+yZy2LjJo="]=a.current})($__dart_deferred_initializers__);