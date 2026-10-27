((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h4H(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a07(d){var y,x,w,v
if(d==null){if(A.feY()==null)$.fJH="en_US"
y=A.feY()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h4H(d)
if(x===-1)return d
w=C.a.ao(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fOo(d,e,f){var y,x,w,v
if(d==null){if(A.feY()==null)$.fJH="en_US"
y=A.feY()
y.toString
return A.fOo(y,e,f)}if(e.$1(d))return d
x=[A.hM0(),A.hM2(),A.hM1(),new A.fCn(),new A.fCo(),new A.fCp()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hII(d)},
hII(d){throw B.S(B.dH('Invalid locale "'+d+'"',null))},
fLP(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h9z(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h4H(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ao(d,0,x).toLowerCase()},
fCn:function fCn(){},
fCo:function fCo(){},
fCp:function fCp(){},
feY(){var y=B.aT($.bw.h(0,D.eGf))
return y==null?$.fJH:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[49],A)
D=c[234]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fCn.prototype={
$1(d){return A.fLP(A.h9z(d))},
$S:17}
A.fCo.prototype={
$1(d){return A.fLP(A.a07(d))},
$S:17}
A.fCp.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hM0","a07",1)
y(A,"hM1","fLP",0)
y(A,"hM2","h9z",0)})();(function inheritance(){var y=a.inheritMany
y(B.i6,[A.fCn,A.fCo,A.fCp])})();(function constants(){D.eGf=new B.oQ("Intl.locale")})();(function staticFields(){$.fJH=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"i3R","fCZ",()=>48)})()};
(a=>{a["ipU5P2HhdsSDQnZLQx5Sr6LSggk="]=a.current})($__dart_deferred_initializers__);