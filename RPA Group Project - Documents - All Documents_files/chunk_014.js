(window.webpackJsonpf92bf067_bc19_489e_a556_7fe95f508720_0_1_0=window.webpackJsonpf92bf067_bc19_489e_a556_7fe95f508720_0_1_0||[]).push([[19],{JgQI:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("17wl"),a=n("rFvU"),i=n("6gF6"),o=n("EFk2");function s(e,t,n){var s=this;void 0===n&&(n={});var c=n.cancelToken,u=n.flushOperationQueue,l=n.contextualControlHandlerCache;return function(n){return Object(r.__awaiter)(s,void 0,void 0,function(){var s,d,p,f,v=this;return Object(r.__generator)(this,function(b){switch(b.label){case 0:return s=n(a.b),(d=s.createItemCacheSelector(e,l,"observeItems")).isResolved()?(t(d.get()),[3,5]):[3,1];case 1:p=new i.a,f=void 0,b.label=2;case 2:return b.trys.push([2,,4,5]),f=d.subscribeToDemandResolution(function(){return Object(r.__awaiter)(v,void 0,void 0,function(){var e,n;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return r.trys.push([0,5,,6]),d.isResolved()?(e=t(d.get()))?[4,e]:[3,2]:[3,3];case 1:r.sent(),r.label=2;case 2:return p.resolve(),[3,4];case 3:c&&c.throwIfCanceled(),r.label=4;case 4:return[3,6];case 5:return n=r.sent(),p.reject(n),[3,6];case 6:return[2]}})})}),d.registerDemands(),u&&d.flushDemands(),[4,Object(o.d)(p.promise,c)];case 3:return b.sent(),[3,5];case 4:return f&&f(),d.dispose(),[7];case 5:return[2]}})})}}},W1iS:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n("C4BG"),a=n("17wl"),i=n("RmVY"),o=n("3woD"),s=n("Ql3v"),c=n("UQtj"),u=n("7YMn"),l=n("EFk2"),d=n("T7OJ"),p=n("JgQI"),f=r.a?p.a:function e(t,n,r){var p=this;void 0===r&&(r={});var f=r.cancelToken,v=r.flushOperationQueue,b=r.contextualControlHandlers,m=void 0===b?u.b:b,h=r.owner;return function(r,u){return Object(a.__awaiter)(p,void 0,void 0,function(){var p,b,O,_,g;return Object(a.__generator)(this,function(y){switch(y.label){case 0:p=r(o.a),b=r(d.a),O={selector:t,operation:e,owner:h},y.label=1;case 1:y.trys.push([1,,6,7]),_=function(){var e,o,d,h,_,g;return Object(a.__generator)(this,function(a){switch(a.label){case 0:return e=p.evaluate({selector:t,controlHandlers:m,owner:O,state:u()}),o=e.result,d=e.demands,h=e.dependencies,(_=n(o))?[4,_]:[3,2];case 1:a.sent(),a.label=2;case 2:return g={items:d,flushOperationQueue:v},b.recordLastAccesses(h,Date.now()),r(Object(s.a)(function(e){return Object(c.b)(e,g)}))?(b.registerDemands(O,h),f&&f.throwIfCanceled(),[4,Object(l.d)(r(Object(i.a)(g)),f)]):[2,{value:void 0}];case 3:return a.sent(),[2]}})},y.label=2;case 2:return[5,_()];case 3:if("object"==typeof(g=y.sent()))return[2,g.value];y.label=4;case 4:return[3,2];case 5:return[3,7];case 6:return b.removeDemands(O),[7];case 7:return[2]}})})}}},atgm:function(e,t,n){"use strict";n.r(t),n.d(t,"fileHandlerGetItemsOperationHandler",function(){return F}),n.d(t,"filehandlerPerExtensionGetItemsOperationHandler",function(){return R}),n.d(t,"fetchFileHandlerData",function(){return C});var r=n("17wl"),a=n("sqky"),i=n("wJkO"),o=n("K9kD");function s(e){return!!e.fileHandler}function c(e){return s(e)&&!!e.promoted}function u(e){return s(e)&&e.hidden}var l=/^(?:data|blob|javascript):/i,d=/^(?:data|http|https):/i;function p(e){return!l.test(e)}var f={svg:!0,png1x:!0,png1_5x:!0,png2x:!0};function v(e){var t,n;if(e)for(var r in e)if(f.hasOwnProperty(r)){var a=(n=e[r])&&d.test(n)?n:void 0;a&&(t||(t={}),t[r]=a)}return t}function b(e){return{file:e.file,folder:e.folder,allowMultiSelect:e.allowMultiSelect}}var m=function(){function e(e,t){this._dataRequestor=t.dataRequestor}return e.prototype.getFileHandlerData=function(e){var t=e||{},n=t.language,r=void 0===n?o.Locale.language:n,a=t.accessToken,i=void 0===a?void 0:a,l=t.endpoint,d=void 0===l?"":l,f=t.includePromotedApp,m=void 0!==f&&f,h=t.driveId,O=void 0===h?void 0:h,_=d+"/drive";return O&&(_="me"===O?d+"/me/drive":d+"/drives/"+O),this._dataRequestor.send({path:_+"/apps?"+(m?"select=*,promoted&":"")+"$expand=actions",apiName:"GetDriveApps",headers:{"Accept-Language":r},accessToken:i,useAuthorizationHeaders:!!i}).then(function(e){for(var t={custom:[],create:[],open:[],preview:[]},n={},r=0,a=e.value;r<a.length;r++){var i=a[r];if(s(i)&&!u(i)){var o=m?c(i):void 0,l=i.application,d=i.id,f=i.actions,h=i.fileHandler;if(f){var O=h.fileTypeDisplayName,_=h.fileTypeIconUrl,g=h.version;if(g)for(var y={id:d,appId:l.id,actionMenuDisplayName:h.actionMenuDisplayName,displayName:l.displayName,appIcon:v(h.appIcon),version:g,fileTypeDisplayName:O,fileTypeIcon:v(h.fileTypeIcon||{png1x:_}),isPromoted:o},w=0,j=0,k=f;j<k.length;j++){var I=k[j],D=I.url;if(D&&p(D)){var T=I.displayName,x=I.shortDisplayName,N=I.icon,H=I.availableOn;if(H){var E="newFile"===I.type?"create":I.type,F={type:E,url:D,displayName:T,icon:v(N),availableOn:b(H),handler:y,id:w},R=H.file,C=R&&R.extensions;switch(E){case"custom":if(!T)continue;if(F.shortDisplayName=x,!R&&!H.folder)continue;break;case"create":if(!C||!C[0])continue;break;case"open":case"preview":if(!R)continue;if(C&&!o)for(var S=0,P=C;S<P.length;S++){var Q=P[S];(n[Q]||(n[Q]={open:[],preview:[]}))[E].push(F)}break;default:continue}t[E].push(F),w++}}}}}}return{actions:t,preferences:n,version:4}})},e}(),h=n("VSW6"),O=n("oD9H"),_=n("YB5h"),g=n("FYXF"),y=n("yww6"),w=n("9HFz"),j=n("2YyJ"),k=n("IS2W"),I=n("OagR"),D=n("mCCr"),T=n("qyWO"),x=n("F0Gs"),N=n("kk66");function H(e,t,n,a){var i,o=[];t.forEach(function(t){var n,a=t.handler,i=g.e.serialize({id:a.id,appId:a.appId?a.appId:""}),s=g.c.serialize({handlerId:a.id,appId:a.appId,id:t.id||0}),c={displayName:a.actionMenuDisplayName,url:E(a.appIcon)},u={displayName:a.fileTypeDisplayName||a.displayName,url:E(t.icon||a.fileTypeIcon)},l=Object(r.__assign)(Object(r.__assign)({},x.h.pack(a.actionMenuDisplayName||a.displayName)),y.c.pack(c)),d=Object(r.__assign)(Object(r.__assign)(Object(r.__assign)(Object(r.__assign)(Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({},x.h.pack(t.displayName||a.displayName)),x.z.pack(t.url)),y.a.pack(t.availableOn)),y.g.pack(i)),y.e.pack(u)),y.d.pack(a.appId)),void 0!==a.isPromoted?Object(r.__assign)({},y.f.pack(a.isPromoted)):{});e.resolveItems({items:(n={},n[i]=l,n[s]=d,n)}),-1===o.indexOf(s)&&o.push(s)});var s=g.d.serialize({type:n,extension:a}),c=Object(r.__assign)({},N.a.pack(0===o.length?void 0:{itemKeys:o}));return e.resolveItems({items:(i={},i[s]=c,i)}),s}function E(e){var t=window.devicePixelRatio||1;return e&&(e.svg||t>=1.75&&e.png2x||t>=1.25&&e.png1_5x||e.png1x)}var F=Object(a.e)()(function(e){var t=this,n=e.itemKey,a=g.b.deserialize(n),i=a.endpoint;return function(e){return Object(r.__awaiter)(t,void 0,void 0,function(){var t,s;return Object(r.__generator)(this,function(c){return t=e(Object(k.a)({name:"getFileHandlersOperation"})),s={endpoint:i},[2,e(C(a)).then(function(i){i?(function(e){if("localStorage"in window)try{var t=function(e){var t=e.endpoint,n=e.driveId;return"fileHandlerCache_"+JSON.stringify({endpoint:t,driveId:n})}(e.driveAppsKey);localStorage.setItem(t,JSON.stringify(e.data))}catch(e){}}({driveAppsKey:a,data:i}),e(function(e,t){var n=e.data,a=n.actions,i=n.preferences,o=n.version,s=e.signature,c=g.b.deserialize(t);return function(n){var u,l=new T.a,d=function(e,t){var n={};return["custom","create","open","preview"].forEach(function(r){var a=H(e,t[r],r);n[r]=a}),n}(l,a),p=function(e,t){for(var n,a=new T.a,i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],c=e[s],u={};u.open=H(a,c.open,"open",s),u.preview=H(a,c.preview,"preview",s);for(var l=(c.open||[]).concat(c.preview||[]),d=void 0,p=0;p<l.length;p++){var f=l[p],v=f.handler,b=f&&E(f.icon)||v&&E(v.fileTypeIcon),m=v.fileTypeDisplayName||v.displayName;if(b){d={displayName:m,url:b};break}}var h=g.a.serialize({endpoint:t,extension:s}),O=Object(r.__assign)(Object(r.__assign)({},y.b.pack(u)),y.e.pack(d));a.resolveItems({items:(n={},n[h]=O,n)})}return{preferencesItemResolver:a}}(i,c.endpoint).preferencesItemResolver;l.merge(p),l.resolveItems({items:(u={},u[t]=Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({},y.b.pack(d)),y.i.pack(o)),y.h.pack({data:e.data,signature:s})),u)}),n(l.execute())}}(i,n)),s.fileHandlerRequestEndpoint=i.signature.endpoint,s.accessTokenObtained=!0,e(t({resultType:o.ResultTypeEnum.Success,extraData:s}))):e(t({resultType:o.ResultTypeEnum.Failure,resultCode:"NoFileHandlerData",extraData:s}))}).catch(function(n){throw o.OdspErrorHelper.logError(n),e(t({resultType:o.ResultTypeEnum.Failure,extraData:s})),n})]})})}}),R=Object(a.e)()(function(e){var t=this,n=e.itemKey,a=g.a.deserialize(n).endpoint;return function(e){return Object(r.__awaiter)(t,void 0,void 0,function(){var t;return Object(r.__generator)(this,function(n){switch(n.label){case 0:return t=g.b.serialize({endpoint:a}),[4,e(Object(i.a)(function(e){return e.demandItemFacet(y.b,t)}))];case 1:return n.sent(),[2]}})})}});function C(e){var t=e.endpoint,n=e.driveId;return function(e){var r,a={endpoint:t,driveId:n},i=e(Object(k.a)({name:"fetchFileHandlerData",extraData:a})),s=e(Object(j.a)({getUserOneDriveEndpoint:w.g,useOneDriveEndpoint:w.p})),c=s.getUserOneDriveEndpoint,u=s.useOneDriveEndpoint,l=Object(h.b)({endpoint:t,driveId:n}),d=new m({},{dataRequestor:e(O.a).dataRequestor}),p=Promise.resolve(t);return c&&u&&(p=e(c({endpoint:t}))),p.then(function(t){return r=t,l=Object(h.b)({endpoint:r}),a.fileHandlerRequestEndpoint=r,e(Object(_.b)(r,l,{qosExtraData:{requestor:"GetFileHandlerData",endPoint:r,driveUrl:l}}))}).then(function(t){return a.accessTokenObtained=!!t,d.getFileHandlerData({accessToken:t,endpoint:r,includePromotedApp:!0,driveId:n}).then(function(t){if(t){var s={data:t,lastModified:Date.now(),signature:{endpoint:r,includePromotedApp:!0,driveId:n}};return e(i({resultType:o.ResultTypeEnum.Success,extraData:a})),s}e(i({resultType:o.ResultTypeEnum.Failure,resultCode:"NoDataFromFileHandlerService",extraData:a}))}).catch(function(t){throw e(i(Object(I.a)({resultType:o.ResultTypeEnum.Failure,extraData:a},Object(D.a)(t)))),t})}).catch(function(t){throw e(i(Object(I.a)({resultType:o.ResultTypeEnum.Failure,resultCode:"getSessionTokenError",extraData:a},Object(D.a)(t)))),t})}}},wJkO:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("C4BG"),a=n("17wl"),i=n("W1iS"),o=n("kbGg"),s=n("JgQI"),c=r.a?function(e,t){var n=this;void 0===t&&(t={});var r=t.cancelToken,i=t.flushOperationQueue,c=t.timeout,u=void 0===c?1/0:c,l=t.contextualControlHandlerCache;return function(t){return Object(a.__awaiter)(n,void 0,void 0,function(){var n,c;return Object(a.__generator)(this,function(a){switch(a.label){case 0:c=Object(o.a)({timeout:u,errorProps:{message:"Timeout demanding items"}},r),a.label=1;case 1:return a.trys.push([1,,3,4]),[4,t(Object(s.a)(e,function(e){n={result:e}},{cancelToken:c.token,flushOperationQueue:i,contextualControlHandlerCache:l}))];case 2:return a.sent(),[3,4];case 3:return c.dispose(),[7];case 4:if(!n)throw new Error("No result.");return[2,n.result]}})})}}:function e(t,n){var r=this;void 0===n&&(n={});var s=n.cancelToken,c=n.flushOperationQueue,u=n.timeout,l=void 0===u?1/0:u,d=n.contextualControlHandlers;return function(n){return Object(a.__awaiter)(r,void 0,void 0,function(){var r,u,p;return Object(a.__generator)(this,function(a){switch(a.label){case 0:u={operation:e},p=Object(o.a)({timeout:l,errorProps:{message:"Timeout demanding items"}},s),a.label=1;case 1:return a.trys.push([1,,3,4]),[4,n(Object(i.a)(t,function(e){r={result:e}},{cancelToken:p.token,flushOperationQueue:c,contextualControlHandlers:d,owner:u}))];case 2:return a.sent(),[3,4];case 3:return p.dispose(),[7];case 4:if(!r)throw new Error("No result.");return[2,r.result]}})})}}}}]);