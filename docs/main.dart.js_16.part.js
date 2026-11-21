((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hIG(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3C(d){var y,x,w,v
if(d==null){if(A.fN1()==null)$.hkC="en_US"
y=A.fN1()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hIG(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hqa(d,e,f){var y,x,w,v
if(d==null){if(A.fN1()==null)$.hkC="en_US"
y=A.fN1()
y.toString
return A.hqa(y,e,f)}if(e.$1(d))return d
x=[A.isj(),A.isl(),A.isk(),new A.hcK(),new A.hcL(),new A.hcM()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ioQ(d)},
ioQ(d){throw B.Y(B.dJ('Invalid locale "'+d+'"',null))},
hna(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hOx(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hIG(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hcK:function hcK(){},
hcL:function hcL(){},
hcM:function hcM(){},
fN1(){var y=B.aW($.bG.h(0,D.fB5))
return y==null?$.hkC:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[383]
var z=a.updateTypes(["m(m)","m(m?)"])
A.hcK.prototype={
$1(d){return A.hna(A.hOx(d))},
$S:15}
A.hcL.prototype={
$1(d){return A.hna(A.a3C(d))},
$S:15}
A.hcM.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"isj","a3C",1)
y(A,"isk","hna",0)
y(A,"isl","hOx",0)})();(function inheritance(){var y=a.inheritMany
y(B.fN,[A.hcK,A.hcL,A.hcM])})();(function constants(){D.fB5=new B.pV("Intl.locale")})();(function staticFields(){$.hkC=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iMe","hdx",()=>48)})()};
(a=>{a["vazg/OqhW7FFtX9HxX+lxsTaqsM="]=a.current})($__dart_deferred_initializers__);