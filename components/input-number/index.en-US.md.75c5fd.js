(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{3080:function(t,e){t.exports={content:["section",["p","Enter a number within certain range with the mouse or keyboard."],["h2","When To Use"],["p","When a numeric value needs to be provided."]],meta:{category:"Components",type:"Data Entry",title:"InputNumber",cover:"https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg",filename:"components/input-number/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Methods",title:"Methods"},"Methods"]],["li",["a",{className:"bisheng-toc-h2",href:"#Notes",title:"Notes"},"Notes"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","autoFocus"],["td","If get focus when component mounted"],["td","boolean"],["td","false"],["td","-"]],["tr",["td","decimalSeparator"],["td","Decimal separator"],["td","string"],["td","-"],["td","-"]],["tr",["td","defaultValue"],["td","The initial value"],["td","number"],["td","-"],["td","-"]],["tr",["td","disabled"],["td","If disable the input"],["td","boolean"],["td","false"],["td","-"]],["tr",["td","formatter"],["td","Specifies the format of the value presented"],["td","function(value: number ","|"," string): string"],["td","-"],["td","-"]],["tr",["td","max"],["td","The max value"],["td","number"],["td",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"},"Number.MAX_SAFE_INTEGER"]],["td","-"]],["tr",["td","min"],["td","The min value"],["td","number"],["td",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER"},"Number.MIN_SAFE_INTEGER"]],["td","-"]],["tr",["td","parser"],["td","Specifies the value extracted from formatter"],["td","function(string): number"],["td","-"],["td","-"]],["tr",["td","precision"],["td","The precision of input value"],["td","number"],["td","-"],["td","-"]],["tr",["td","readOnly"],["td","If readonly the input"],["td","boolean"],["td","false"],["td","-"]],["tr",["td","size"],["td","The height of input box"],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td","-"],["td","-"]],["tr",["td","step"],["td","The number to which the current value is increased or decreased. It can be an integer or decimal"],["td","number ","|"," string"],["td","1"],["td","-"]],["tr",["td","value"],["td","The current value"],["td","number"],["td","-"],["td","-"]],["tr",["td","onChange"],["td","The callback triggered when the value is changed"],["td","function(value: number ","|"," string ","|"," null)"],["td","-"],["td","-"]],["tr",["td","onPressEnter"],["td","The callback function that is triggered when Enter key is pressed"],["td","function(e)"],["td","-"],["td","-"]],["tr",["td","onStep"],["td","The callback function that is triggered when click up or down buttons"],["td","(value: number, info: { offset: number, type: 'up' ","|"," 'down' }) => void"],["td","-"],["td","4.7.0"]]]],["h2","Methods"],["table",["thead",["tr",["th","Name"],["th","Description"]]],["tbody",["tr",["td","blur()"],["td","Remove focus"]],["tr",["td","focus()"],["td","Get focus"]]]],["h2","Notes"],["p","Per issues ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/21158"},"#21158"],", ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/17344"},"#17344"],", ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/9421"},"#9421"],", and ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#Using_number_inputs"},"documentation about inputs"],", it appears this community does not support native inclusion of the ",["code",'type="number"']," in the ",["code","<Input />"]," attributes, so please feel free to include it as needed, and be aware that it is heavily suggested that server side validation be utilized, as client side validation can be edited by power users."]]}}}]);