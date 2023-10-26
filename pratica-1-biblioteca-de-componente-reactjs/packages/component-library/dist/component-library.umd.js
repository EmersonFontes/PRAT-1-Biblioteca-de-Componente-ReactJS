(function(b,_){typeof exports=="object"&&typeof module<"u"?_(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],_):(b=typeof globalThis<"u"?globalThis:b||self,_(b.ComponentLibrary={},b.React,b.styled))})(this,function(b,_,p){"use strict";var q={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function Ae(){if(ie)return $;ie=1;var n=_,u=Symbol.for("react.element"),g=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,h=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function W(k,m,O){var E,w={},S=null,V=null;O!==void 0&&(S=""+O),m.key!==void 0&&(S=""+m.key),m.ref!==void 0&&(V=m.ref);for(E in m)v.call(m,E)&&!M.hasOwnProperty(E)&&(w[E]=m[E]);if(k&&k.defaultProps)for(E in m=k.defaultProps,m)w[E]===void 0&&(w[E]=m[E]);return{$$typeof:u,type:k,key:S,ref:V,props:w,_owner:h.current}}return $.Fragment=g,$.jsx=W,$.jsxs=W,$}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce;function $e(){return ce||(ce=1,process.env.NODE_ENV!=="production"&&function(){var n=_,u=Symbol.for("react.element"),g=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),k=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),le=Symbol.iterator,ir="@@iterator";function cr(e){if(e===null||typeof e!="object")return null;var r=le&&e[le]||e[ir];return typeof r=="function"?r:null}var F=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function x(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];sr("error",e,t)}}function sr(e,r,t){{var o=F.ReactDebugCurrentFrame,c=o.getStackAddendum();c!==""&&(r+="%s",t=t.concat([c]));var l=t.map(function(i){return String(i)});l.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,l)}}var lr=!1,ur=!1,fr=!1,dr=!1,pr=!1,ue;ue=Symbol.for("react.module.reference");function vr(e){return!!(typeof e=="string"||typeof e=="function"||e===v||e===M||pr||e===h||e===O||e===E||dr||e===V||lr||ur||fr||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===w||e.$$typeof===W||e.$$typeof===k||e.$$typeof===m||e.$$typeof===ue||e.getModuleId!==void 0))}function hr(e,r,t){var o=e.displayName;if(o)return o;var c=r.displayName||r.name||"";return c!==""?t+"("+c+")":t}function fe(e){return e.displayName||"Context"}function C(e){if(e==null)return null;if(typeof e.tag=="number"&&x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case v:return"Fragment";case g:return"Portal";case M:return"Profiler";case h:return"StrictMode";case O:return"Suspense";case E:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case k:var r=e;return fe(r)+".Consumer";case W:var t=e;return fe(t._context)+".Provider";case m:return hr(e,e.render,"ForwardRef");case w:var o=e.displayName||null;return o!==null?o:C(e.type)||"Memo";case S:{var c=e,l=c._payload,i=c._init;try{return C(i(l))}catch{return null}}}return null}var T=Object.assign,N=0,de,pe,ve,he,be,ge,me;function xe(){}xe.__reactDisabledLog=!0;function br(){{if(N===0){de=console.log,pe=console.info,ve=console.warn,he=console.error,be=console.group,ge=console.groupCollapsed,me=console.groupEnd;var e={configurable:!0,enumerable:!0,value:xe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}N++}}function gr(){{if(N--,N===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:de}),info:T({},e,{value:pe}),warn:T({},e,{value:ve}),error:T({},e,{value:he}),group:T({},e,{value:be}),groupCollapsed:T({},e,{value:ge}),groupEnd:T({},e,{value:me})})}N<0&&x("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Z=F.ReactCurrentDispatcher,Q;function U(e,r,t){{if(Q===void 0)try{throw Error()}catch(c){var o=c.stack.trim().match(/\n( *(at )?)/);Q=o&&o[1]||""}return`
`+Q+e}}var ee=!1,B;{var mr=typeof WeakMap=="function"?WeakMap:Map;B=new mr}function ye(e,r){if(!e||ee)return"";{var t=B.get(e);if(t!==void 0)return t}var o;ee=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var l;l=Z.current,Z.current=null,br();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){o=j}Reflect.construct(e,[],i)}else{try{i.call()}catch(j){o=j}e.call(i.prototype)}}else{try{throw Error()}catch(j){o=j}e()}}catch(j){if(j&&o&&typeof j.stack=="string"){for(var a=j.stack.split(`
`),y=o.stack.split(`
`),f=a.length-1,d=y.length-1;f>=1&&d>=0&&a[f]!==y[d];)d--;for(;f>=1&&d>=0;f--,d--)if(a[f]!==y[d]){if(f!==1||d!==1)do if(f--,d--,d<0||a[f]!==y[d]){var R=`
`+a[f].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),typeof e=="function"&&B.set(e,R),R}while(f>=1&&d>=0);break}}}finally{ee=!1,Z.current=l,gr(),Error.prepareStackTrace=c}var A=e?e.displayName||e.name:"",De=A?U(A):"";return typeof e=="function"&&B.set(e,De),De}function xr(e,r,t){return ye(e,!1)}function yr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function G(e,r,t){if(e==null)return"";if(typeof e=="function")return ye(e,yr(e));if(typeof e=="string")return U(e);switch(e){case O:return U("Suspense");case E:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case m:return xr(e.render);case w:return G(e.type,r,t);case S:{var o=e,c=o._payload,l=o._init;try{return G(l(c),r,t)}catch{}}}return""}var J=Object.prototype.hasOwnProperty,Ee={},Re=F.ReactDebugCurrentFrame;function H(e){if(e){var r=e._owner,t=G(e.type,e._source,r?r.type:null);Re.setExtraStackFrame(t)}else Re.setExtraStackFrame(null)}function Er(e,r,t,o,c){{var l=Function.call.bind(J);for(var i in e)if(l(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var y=Error((o||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw y.name="Invariant Violation",y}a=e[i](r,i,o,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(f){a=f}a&&!(a instanceof Error)&&(H(c),x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",t,i,typeof a),H(null)),a instanceof Error&&!(a.message in Ee)&&(Ee[a.message]=!0,H(c),x("Failed %s type: %s",t,a.message),H(null))}}}var Rr=Array.isArray;function re(e){return Rr(e)}function _r(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function wr(e){try{return _e(e),!1}catch{return!0}}function _e(e){return""+e}function we(e){if(wr(e))return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",_r(e)),_e(e)}var Y=F.ReactCurrentOwner,Cr={key:!0,ref:!0,__self:!0,__source:!0},Ce,je,te;te={};function jr(e){if(J.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function kr(e){if(J.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Sr(e,r){if(typeof e.ref=="string"&&Y.current&&r&&Y.current.stateNode!==r){var t=C(Y.current.type);te[t]||(x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C(Y.current.type),e.ref),te[t]=!0)}}function Tr(e,r){{var t=function(){Ce||(Ce=!0,x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Pr(e,r){{var t=function(){je||(je=!0,x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Or=function(e,r,t,o,c,l,i){var a={$$typeof:u,type:e,key:r,ref:t,props:i,_owner:l};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function Fr(e,r,t,o,c){{var l,i={},a=null,y=null;t!==void 0&&(we(t),a=""+t),kr(r)&&(we(r.key),a=""+r.key),jr(r)&&(y=r.ref,Sr(r,c));for(l in r)J.call(r,l)&&!Cr.hasOwnProperty(l)&&(i[l]=r[l]);if(e&&e.defaultProps){var f=e.defaultProps;for(l in f)i[l]===void 0&&(i[l]=f[l])}if(a||y){var d=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Tr(i,d),y&&Pr(i,d)}return Or(e,a,y,c,o,Y.current,i)}}var ne=F.ReactCurrentOwner,ke=F.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=G(e.type,e._source,r?r.type:null);ke.setExtraStackFrame(t)}else ke.setExtraStackFrame(null)}var oe;oe=!1;function ae(e){return typeof e=="object"&&e!==null&&e.$$typeof===u}function Se(){{if(ne.current){var e=C(ne.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Dr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Te={};function Ar(e){{var r=Se();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Pe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Ar(r);if(Te[t])return;Te[t]=!0;var o="";e&&e._owner&&e._owner!==ne.current&&(o=" It was passed a child from "+C(e._owner.type)+"."),D(e),x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,o),D(null)}}function Oe(e,r){{if(typeof e!="object")return;if(re(e))for(var t=0;t<e.length;t++){var o=e[t];ae(o)&&Pe(o,r)}else if(ae(e))e._store&&(e._store.validated=!0);else if(e){var c=cr(e);if(typeof c=="function"&&c!==e.entries)for(var l=c.call(e),i;!(i=l.next()).done;)ae(i.value)&&Pe(i.value,r)}}}function $r(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===m||r.$$typeof===w))t=r.propTypes;else return;if(t){var o=C(r);Er(t,e.props,"prop",o,e)}else if(r.PropTypes!==void 0&&!oe){oe=!0;var c=C(r);x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",c||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ir(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var o=r[t];if(o!=="children"&&o!=="key"){D(e),x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),D(null);break}}e.ref!==null&&(D(e),x("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}function Fe(e,r,t,o,c,l){{var i=vr(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var y=Dr(c);y?a+=y:a+=Se();var f;e===null?f="null":re(e)?f="array":e!==void 0&&e.$$typeof===u?(f="<"+(C(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):f=typeof e,x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",f,a)}var d=Fr(e,r,t,c,l);if(d==null)return d;if(i){var R=r.children;if(R!==void 0)if(o)if(re(R)){for(var A=0;A<R.length;A++)Oe(R[A],e);Object.freeze&&Object.freeze(R)}else x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(R,e)}return e===v?Ir(d):$r(d),d}}function Lr(e,r,t){return Fe(e,r,t,!0)}function Wr(e,r,t){return Fe(e,r,t,!1)}var Nr=Wr,Yr=Lr;I.Fragment=v,I.jsx=Nr,I.jsxs=Yr}()),I}process.env.NODE_ENV==="production"?q.exports=Ae():q.exports=$e();var s=q.exports;const Ie=p.button`
    border: none;
    border-radius: 0.5rem;
    background-color: #2e836e;
    color: hsl(0deg, 0%, 98%);
    padding: 0.75rem;
    cursor: pointer;
    &:hover {
        background-color: #7b29a1;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #DF9453;
        background-color: #7B400C;
    }
    
    border-radius: 12px;

    height: min-content;
    width: min-content;

    min-height: 1rem;
    min-width: 1rem; 
    text-align: center;
    white-space: nowrap;
`,Le=({caption:n,onClick:u})=>s.jsxs(s.Fragment,{children:[s.jsx("div",{children:s.jsx("p",{children:"Monorepo com TurboRepo"})}),s.jsx("div",{children:s.jsx(Ie,{onClick:u,children:n})})]});var z=(n=>(n[n.Vertical=0]="Vertical",n[n.Horizontal=1]="Horizontal",n))(z||{});const We=_.createContext({}),Ne=p.styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    background-color: ${({backgroundcolor:n})=>n??""};
    color: ${({color:n})=>n??""};

    ${n=>n.orientacao==z.Vertical&&p.css`
        grid-template-rows: ${n.splitterpercent?`minmax(max-content, ${n.splitterpercent}%)`:"max-content"} minmax(max-content, auto);
         ;
    `}

    ${n=>n.orientacao==z.Horizontal&&p.css`
        grid-template-columns: ${n.splitterpercent?`minmax(max-content, ${n.splitterpercent}%)`:"max-content"} minmax(max-content, auto);
    `}

`,Ye=n=>{const{orientacao:u,children:g,...v}=n;return s.jsx(We.Provider,{value:{orientacao:u},children:s.jsx(Ne,{orientacao:u,...v,children:g})})},ze=p.styled.section`
    color: ${({color:n})=>n||""};
    background-color: ${({backgroundcolor:n})=>n??""};
    padding: ${({padding:n})=>n??""};
    
`,Me=n=>{const{children:u,...g}=n;return s.jsx(ze,{...g,children:u})},Ve=p.styled.div`
    display: flex;
    width: max-content;
    align-items: baseline;
    cursor: pointer;
    gap: calc(${({fontsize:n})=>n??"1rem"} * 0.3);

    &:hover > input:not(:checked)::before {
        background-color: #e5f1ff;
        border-color: #037ee2;
    }

    &:hover > input:checked::before {
        background-color: #0967d3;
        border-color: #07467a;
    }
`,Ue=p.styled.input`

    --checkbox-size: ${({fontsize:n})=>n??"1rem"};

    cursor: pointer;
    width: calc(var(--checkbox-size) * 0.8);
    height: calc(var(--checkbox-size) * 0.8);
    visibility: hidden;
    display: grid;
    grid-template: 'content';
    overflow: hidden;
    margin: unset;

    &::before {
        content: '';
        visibility: visible;
        grid-area: content;
        box-sizing: border-box;
        border: 1px solid #737373;
        background-color: #FFFFFF;
        border-radius: calc(var(--checkbox-size) * 0.15);
        transition: all linear .15s;
    }

    &::after {
        content: '✔';
        opacity: 0;
        box-sizing: border-box;
        visibility: visible;
        grid-area: content;
        display: flex;
        align-items: center;
        justify-content: center;
        color: whitesmoke;
        transform: rotate(12deg);
        line-height: 0px;
        font-size: calc(var(--checkbox-size) * 0.6);
        transition: all linear .15s;
        font-weight: bold;
    }

    &:checked::before {
        background-color: #0075FF;
        border-color: #024d89;
    }

    &:checked::after {
        opacity: 1;
    }
`,Be=p.styled.label`
    cursor: pointer;
    font-size: ${({fontsize:n})=>n??"1rem"};
`,K={Container:Ve,Checkbox:Ue,Label:Be},se=n=>{const{label:u,name:g,...v}=n;let h=_.useId();return h=g??h,s.jsxs(K.Container,{children:[s.jsx(K.Checkbox,{id:h,name:h,type:"checkbox",...v}),s.jsx(K.Label,{htmlFor:h,...v,children:u})]})},Ge=p.styled.fieldset`
    padding: 0.5rem;
    width: 100%;
`,Je=p.styled.legend`
    margin: 0px .5rem;
    padding: 0px .5rem;
    font-size: ${({fontsize:n})=>n??"1rem"};
`,He=p.styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(${({fontsize:n})=>n??"1rem"} * 4));
    gap: 0.5rem;
    justify-items: center;
    justify-content: space-evenly;
    padding: 0 .5rem;
`,X={Fieldset:Ge,Legend:Je,Container:He},qe=n=>{const{elementos:u,titulo:g,...v}=n;return s.jsxs(X.Fieldset,{children:[s.jsx(X.Legend,{...v,children:g}),s.jsx(X.Container,{...v,children:u.map(h=>s.jsx(se,{label:h.descricao,name:h.name,...v}))})]})},Ke=p.keyframes`
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Xe=p.div`
z-index: 2;
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background: ${n=>n.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    animation: ${Ke} 0.5s ease-in-out;
`,Ze=p.div`

    display: flex;
    position: relative;
    height: 15%;
    width: 100%;
    align-items: center;
    justify-content: center;
    
`,Qe=p.div`

    display: flex;
    position: relative;
    width: 95%;
    height: 70%;
    flex-direction: column;
   //justify-content: center;
    align-items: center;
    overflow-y: scroll;
   
    &::-webkit-scrollbar {
    width: 8px; 
    
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: red; 
    border-radius: 10px; 
    cursor: pointer;
  }

  
`,er=p.div`

    display: flex;
    width: 100%;
    height: 15%;
    position: relative;
    align-items: center;
    justify-content: center;    
    
`,rr=p.p`
  height: 80%;
  font-size: 22px;
  font-weight: bold;
  color: ${n=>n.color};
`,tr=p.button`
  border: none;
  &:hover{
    transition: 500ms;
    background-color: #9b0101;
    cursor: pointer;
  }
  &:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;

  }

`,P={container:Xe,button:tr,div:Ze,divCetral:Qe,divFinal:er,p:rr},nr=({isOpen:n,setModal:u,children:g,title:v,style:h})=>n?s.jsxs(P.container,{background:h.background,children:[s.jsx(P.div,{children:s.jsx(P.p,{color:h.color,children:v})}),s.jsx(P.divCetral,{children:g}),s.jsx(P.divFinal,{children:s.jsx(P.button,{onClick:()=>u(),children:"fechar"})})]}):null,L={container:p.div`

    .container{
        width: 100%;
        height: 100vh;
    }
    
    .dropdown{
        width: 400px;
        margin: 100px auto;
        position: relative;
        user-select: none;
        font-family: Arial;
        font-size: 20px;
    }

    .dropdown::before{
        content: '';
        position: absolute;
        right: 30px;
        top: 13px;
        z-index:1;
        width: 15px;
        height: 15px;
        border: 3px solid #333;
        border-top: 3px solid #fff;
        border-right: 3px solid #fff;
        transform: rotate(-45deg);
        transition: 0.5s;
        pointer-events: none;
    }
   
    .dropdown-bnt{
        padding: 15px 20px;
        background: #fff;
        box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.6);
        font-weight: bold;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

    }
   
    .dropdown-content{
        position: absolute;
        top: 110%;
        left: 0;
        padding: 10px;
        background: #fff;
        box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.6);
        font-weight: 500;
        color: #333;
        width: 95%;
    }
    
    .dropdown-item{
        padding: 10px;
        cursor: pointer;
        transition: all 0.2s;
        text-align: left;
    }

    .dropdown-item:hover{
        background: #f4f4f4;
    }
    
`},or=["Português","Matemática","Inglês","Geografia"],ar=()=>{const[n,u]=_.useState(!1),[g,v]=_.useState("Escolha uma opção");return s.jsx(L.container,{className:"container",children:s.jsxs(L.container,{className:"dropdown",children:[s.jsx(L.container,{className:"dropdown-bnt",onClick:()=>u(!n),children:g}),n&&s.jsx(L.container,{className:"dropdown-content",children:or.map(h=>s.jsx(L.container,{onClick:()=>{v(h),u(!1)},className:"dropdown-item",children:h}))})]})})};b.Button=Le,b.Checkbox=se,b.CheckboxGroup=qe,b.Dropdawn=ar,b.LayoutSplitter=Ye,b.Modal=nr,b.SplitterDirection=z,b.SplitterPanel=Me,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
