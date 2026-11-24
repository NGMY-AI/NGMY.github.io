((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hJr(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3G(d){var y,x,w,v
if(d==null){if(A.fNF()==null)$.hli="en_US"
y=A.fNF()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hJr(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hqV(d,e,f){var y,x,w,v
if(d==null){if(A.fNF()==null)$.hli="en_US"
y=A.fNF()
y.toString
return A.hqV(y,e,f)}if(e.$1(d))return d
x=[A.it2(),A.it4(),A.it3(),new A.hdp(),new A.hdq(),new A.hdr()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ipA(d)},
ipA(d){throw B.Y(B.dK('Invalid locale "'+d+'"',null))},
hnT(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hPi(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hJr(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hdp:function hdp(){},
hdq:function hdq(){},
hdr:function hdr(){},
fNF(){var y=B.aW($.bG.h(0,D.fB7))
return y==null?$.hli:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[384]
var z=a.updateTypes(["m(m)","m(m?)"])
A.hdp.prototype={
$1(d){return A.hnT(A.hPi(d))},
$S:15}
A.hdq.prototype={
$1(d){return A.hnT(A.a3G(d))},
$S:15}
A.hdr.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"it2","a3G",1)
y(A,"it3","hnT",0)
y(A,"it4","hPi",0)})();(function inheritance(){var y=a.inheritMany
y(B.fQ,[A.hdp,A.hdq,A.hdr])})();(function constants(){D.fB7=new B.pW("Intl.locale")})();(function staticFields(){$.hli=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iN_","hec",()=>48)})()};
(a=>{a["+wddMeea/xRdiLKmFBOFvAG6YD8="]=a.current})($__dart_deferred_initializers__);