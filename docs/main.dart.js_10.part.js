((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
htb(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2f(d){var y,x,w,v
if(d==null){if(A.fAO()==null)$.h6q="en_US"
y=A.fAO()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.htb(d)
if(x===-1)return d
w=C.a.ar(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hbn(d,e,f){var y,x,w,v
if(d==null){if(A.fAO()==null)$.h6q="en_US"
y=A.fAO()
y.toString
return A.hbn(y,e,f)}if(e.$1(d))return d
x=[A.iaN(),A.iaP(),A.iaO(),new A.fZF(),new A.fZG(),new A.fZH()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i7l(d)},
i7l(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h8H(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hym(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.htb(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ar(d,0,x).toLowerCase()},
fZF:function fZF(){},
fZG:function fZG(){},
fZH:function fZH(){},
fAO(){var y=B.aT($.bB.h(0,D.fen))
return y==null?$.h6q:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fZF.prototype={
$1(d){return A.h8H(A.hym(d))},
$S:17}
A.fZG.prototype={
$1(d){return A.h8H(A.a2f(d))},
$S:17}
A.fZH.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iaN","a2f",1)
y(A,"iaO","h8H",0)
y(A,"iaP","hym",0)})();(function inheritance(){var y=a.inheritMany
y(B.hx,[A.fZF,A.fZG,A.fZH])})();(function constants(){D.fen=new B.pr("Intl.locale")})();(function staticFields(){$.h6q=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iu1","h_o",()=>48)})()};
(a=>{a["kaBxbREKJnUXeOQi/HzSCYGi6A8="]=a.current})($__dart_deferred_initializers__);