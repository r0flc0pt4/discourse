hljs.registerLanguage("smalltalk",function(e){var s="[a-z][a-zA-Z0-9_]*",a={cN:"string",b:"\\$.{1}"},r={cN:"symbol",b:"#"+e.UIR};return{aliases:["st"],k:"self super nil true false thisContext",c:[e.C('"','"'),e.ASM,{cN:"type",b:"\\b[A-Z][A-Za-z0-9_]*",r:0},{b:s+":",r:0},e.CNM,r,a,{b:"\\|[ ]*"+s+"([ ]+"+s+")*[ ]*\\|",rB:!0,e:/\|/,i:/\S/,c:[{b:"(\\|[ ]*)?"+s}]},{b:"\\#\\(",e:"\\)",c:[e.ASM,a,e.CNM,r]}]}});