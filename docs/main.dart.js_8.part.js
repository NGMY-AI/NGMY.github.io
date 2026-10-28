((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hb9(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0K(d){var y,x,w,v
if(d==null){if(A.fkV()==null)$.fQ3="en_US"
y=A.fkV()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hb9(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b_(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fUL(d,e,f){var y,x,w,v
if(d==null){if(A.fkV()==null)$.fQ3="en_US"
y=A.fkV()
y.toString
return A.fUL(y,e,f)}if(e.$1(d))return d
x=[A.hSD(),A.hSF(),A.hSE(),new A.fIG(),new A.fIH(),new A.fII()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hPk(d)},
hPk(d){throw B.U(B.dI('Invalid locale "'+d+'"',null))},
fSc(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hg1(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hb9(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fIG:function fIG(){},
fIH:function fIH(){},
fII:function fII(){},
fkV(){var y=B.aU($.bw.h(0,D.eNZ))
return y==null?$.fQ3:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[256]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fIG.prototype={
$1(d){return A.fSc(A.hg1(d))},
$S:17}
A.fIH.prototype={
$1(d){return A.fSc(A.a0K(d))},
$S:17}
A.fII.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hSD","a0K",1)
y(A,"hSE","fSc",0)
y(A,"hSF","hg1",0)})();(function inheritance(){var y=a.inheritMany
y(B.hS,[A.fIG,A.fIH,A.fII])})();(function constants(){D.eNZ=new B.p_("Intl.locale")})();(function staticFields(){$.fQ3=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iau","fJh",()=>48)})()};
(a=>{a["LMJyMei38zGmN0cZTM6liaK1SOQ="]=a.current})($__dart_deferred_initializers__);