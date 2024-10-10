import T,{Fragment as Q,createContext as X,useContext as W,useEffect as y,useMemo as Y,useRef as c,useState as q}from"react";import{Features as fe,forwardRefWithAs as z,render as Z,RenderStrategy as g}from'../../utils/render.js';import{OpenClosedProvider as Te,State as O,useOpenClosed as $}from'../../internal/open-closed.js';import{match as H}from'../../utils/match.js';import{useIsMounted as ce}from'../../hooks/use-is-mounted.js';import{useIsoMorphicEffect as me}from'../../hooks/use-iso-morphic-effect.js';import{useLatestValue as F}from'../../hooks/use-latest-value.js';import{useServerHandoffComplete as ee}from'../../hooks/use-server-handoff-complete.js';import{useSyncRefs as te}from'../../hooks/use-sync-refs.js';import{useTransition as pe}from'../../hooks/use-transition.js';import{useEvent as N}from'../../hooks/use-event.js';import{useDisposables as ve}from'../../hooks/use-disposables.js';import{classNames as he}from'../../utils/class-names.js';function P(i=""){return i.split(" ").filter(e=>e.trim().length>1)}let A=X(null);A.displayName="TransitionContext";var Ce=(s=>(s.Visible="visible",s.Hidden="hidden",s))(Ce||{});function ge(){let i=W(A);if(i===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return i}function be(){let i=W(M);if(i===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return i}let M=X(null);M.displayName="NestingContext";function I(i){return"children"in i?I(i.children):i.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function ne(i,e){let s=F(i),n=c([]),m=ce(),R=ve(),b=N((l,r=g.Hidden)=>{let t=n.current.findIndex(({el:o})=>o===l);t!==-1&&(H(r,{[g.Unmount](){n.current.splice(t,1)},[g.Hidden](){n.current[t].state="hidden"}}),R.microTask(()=>{var o;!I(n)&&m.current&&((o=s.current)==null||o.call(s))}))}),E=N(l=>{let r=n.current.find(({el:t})=>t===l);return r?r.state!=="visible"&&(r.state="visible"):n.current.push({el:l,state:"visible"}),()=>b(l,g.Unmount)}),S=c([]),u=c(Promise.resolve()),p=c({enter:[],leave:[],idle:[]}),d=N((l,r,t)=>{S.current.splice(0),e&&(e.chains.current[r]=e.chains.current[r].filter(([o])=>o!==l)),e==null||e.chains.current[r].push([l,new Promise(o=>{S.current.push(o)})]),e==null||e.chains.current[r].push([l,new Promise(o=>{Promise.all(p.current[r].map(([f,a])=>a)).then(()=>o())})]),r==="enter"?u.current=u.current.then(()=>e==null?void 0:e.wait.current).then(()=>t(r)):t(r)}),v=N((l,r,t)=>{Promise.all(p.current[r].splice(0).map(([o,f])=>f)).then(()=>{var o;(o=S.current.shift())==null||o()}).then(()=>t(r))});return Y(()=>({children:n,register:E,unregister:b,onStart:d,onStop:v,wait:u,chains:p}),[E,b,n,d,v,p,u])}function Ee(){}let Se=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function re(i){var s;let e={};for(let n of Se)e[n]=(s=i[n])!=null?s:Ee;return e}function xe(i){let e=c(re(i));return y(()=>{e.current=re(i)},[i]),e}let Pe="div",ie=fe.RenderStrategy,oe=z(function(e,s){let{beforeEnter:n,afterEnter:m,beforeLeave:R,afterLeave:b,enter:E,enterFrom:S,enterTo:u,entered:p,leave:d,leaveFrom:v,leaveTo:l,...r}=e,t=c(null),o=te(t,s),f=r.unmount?g.Unmount:g.Hidden,{show:a,appear:x,initial:se}=ge(),[h,_]=q(a?"visible":"hidden"),K=be(),{register:D,unregister:V}=K,j=c(null);y(()=>D(t),[D,t]),y(()=>{if(f===g.Hidden&&!!t.current){if(a&&h!=="visible"){_("visible");return}return H(h,{["hidden"]:()=>V(t),["visible"]:()=>D(t)})}},[h,t,D,V,a,f]);let U=F({enter:P(E),enterFrom:P(S),enterTo:P(u),entered:P(p),leave:P(d),leaveFrom:P(v),leaveTo:P(l)}),w=xe({beforeEnter:n,afterEnter:m,beforeLeave:R,afterLeave:b}),k=ee();y(()=>{if(k&&h==="visible"&&t.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[t,h,k]);let G=se&&!x,le=(()=>!k||G||j.current===a?"idle":a?"enter":"leave")(),ae=N(C=>H(C,{enter:()=>w.current.beforeEnter(),leave:()=>w.current.beforeLeave(),idle:()=>{}})),ue=N(C=>H(C,{enter:()=>w.current.afterEnter(),leave:()=>w.current.afterLeave(),idle:()=>{}})),L=ne(()=>{_("hidden"),V(t)},K);pe({container:t,classes:U,direction:le,onStart:F(C=>{L.onStart(t,C,ae)}),onStop:F(C=>{L.onStop(t,C,ue),C==="leave"&&!I(L)&&(_("hidden"),V(t))})}),y(()=>{!G||(f===g.Hidden?j.current=null:j.current=a)},[a,G,h]);let B=r,de={ref:o};return x&&a&&(typeof window=="undefined"||typeof document=="undefined")&&(B={...B,className:he(r.className,...U.current.enter,...U.current.enterFrom)}),T.createElement(M.Provider,{value:L},T.createElement(Te,{value:H(h,{["visible"]:O.Open,["hidden"]:O.Closed})},Z({ourProps:de,theirProps:B,defaultTag:Pe,features:ie,visible:h==="visible",name:"Transition.Child"})))}),J=z(function(e,s){let{show:n,appear:m=!1,unmount:R,...b}=e,E=c(null),S=te(E,s);ee();let u=$();if(n===void 0&&u!==null&&(n=H(u,{[O.Open]:!0,[O.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,d]=q(n?"visible":"hidden"),v=ne(()=>{d("hidden")}),[l,r]=q(!0),t=c([n]);me(()=>{l!==!1&&t.current[t.current.length-1]!==n&&(t.current.push(n),r(!1))},[t,n]);let o=Y(()=>({show:n,appear:m,initial:l}),[n,m,l]);y(()=>{if(n)d("visible");else if(!I(v))d("hidden");else{let a=E.current;if(!a)return;let x=a.getBoundingClientRect();x.x===0&&x.y===0&&x.width===0&&x.height===0&&d("hidden")}},[n,v]);let f={unmount:R};return T.createElement(M.Provider,{value:v},T.createElement(A.Provider,{value:o},Z({ourProps:{...f,as:Q,children:T.createElement(oe,{ref:S,...f,...b})},theirProps:{},defaultTag:Q,features:ie,visible:p==="visible",name:"Transition"})))}),ye=z(function(e,s){let n=W(A)!==null,m=$()!==null;return T.createElement(T.Fragment,null,!n&&m?T.createElement(J,{ref:s,...e}):T.createElement(oe,{ref:s,...e}))}),Je=Object.assign(J,{Child:ye,Root:J});export{Je as Transition};
