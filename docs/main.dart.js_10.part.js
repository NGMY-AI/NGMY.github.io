((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hwi(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2s(d){var y,x,w,v
if(d==null){if(A.fDF()==null)$.h9t="en_US"
y=A.fDF()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hwi(d)
if(x===-1)return d
w=C.a.au(d,0,x)
v=C.a.b3(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hes(d,e,f){var y,x,w,v
if(d==null){if(A.fDF()==null)$.h9t="en_US"
y=A.fDF()
y.toString
return A.hes(y,e,f)}if(e.$1(d))return d
x=[A.ieh(),A.iej(),A.iei(),new A.h1G(),new A.h1H(),new A.h1I()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iaN(d)},
iaN(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
hbL(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hBB(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hwi(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.au(d,0,x).toLowerCase()},
h1G:function h1G(){},
h1H:function h1H(){},
h1I:function h1I(){},
fDF(){var y=B.aS($.bB.h(0,D.fi0))
return y==null?$.h9t:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h1G.prototype={
$1(d){return A.hbL(A.hBB(d))},
$S:17}
A.h1H.prototype={
$1(d){return A.hbL(A.a2s(d))},
$S:17}
A.h1I.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ieh","a2s",1)
y(A,"iei","hbL",0)
y(A,"iej","hBB",0)})();(function inheritance(){var y=a.inheritMany
y(B.hz,[A.h1G,A.h1H,A.h1I])})();(function constants(){D.fi0=new B.py("Intl.locale")})();(function staticFields(){$.h9t=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ixx","h2q",()=>48)})()};
(a=>{a["ceVups7Zvimkfw2GMqQo8dbgt0M="]=a.current})($__dart_deferred_initializers__);