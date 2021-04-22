(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([["31"],{"2913":function(e,t,n){"use strict";var r;(function(e){e[e.Recycle=2]="Recycle";e[e.PermanantDelete=3]="PermanantDelete";e[e.MoveToSecondStage=4]="MoveToSecondStage"})(r||(r={}));t.e=r},"4541":function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(64),s=n(16),o=n(822),u=n(2913);function a(e){var t=e.webAbsoluteUrl,n=e.listFullUrl,r=e.serverRelativeItemUrl,i=e.deletionType,s=e.uniqueId,a=e.isFolder,f=e.listId,l=e.itemId,c=Object(o.r)({webAbsoluteUrl:t,listOrItemFullUrl:n});c=a?s?c.method("GetFolderById",s):c.methodWithAliases("GetFolderByServerRelativePath",{DecodedUrl:r}):f&&l?c.method("Lists",f).method("GetItemById",l):c.methodWithAliases("GetFileByServerRelativePath",{DecodedUrl:r});i===u.e.Recycle&&(c=c.segment("recycle"));return c.toString()}var f=n(106),l=n(345),c=n(745),h=n(1),p=n(227),d=n(240),v=n(2134),m=n(77),g=n(372),y=n(5),b=n(249),w=n(123),E=n(184),S=n(193),x=n(39),T=n(27),N=n(194),C=n(330),k=n(9),L=n(71),A=n(2346),O=n(90),M=n(2345),_=n(51),D=n(2861),P=n(127),H=n(399),B=n(36),j=n(2);n.d(t,"spItemDeleteItemsOperationHandler",function(){return F});n.d(t,"deleteItemsCore",function(){return I});n.d(t,"getDeleteSingleItemUrl",function(){return a});var F=Object(s.n)()(I);function I(e){var t=this;return function(o){return Object(r.__awaiter)(t,void 0,void 0,function(){var t,F,I,q,R,U,z,W,X,V,$,J,K,Q,G,Y,Z,ee,te,ne,re,ie,se,oe,ue,ae,fe,le,ce,he,pe,de,ve,me,ge,ye,be,we,Ee,Se,xe,Te,Ne;return Object(r.__generator)(this,function(Ce){switch(Ce.label){case 0:t=e.items;F=void 0;I=void 0;q=void 0;R=void 0;U=o(A.e);z={};W=function(e){for(var t=[],n=0,r=e;n<r.length;n++){var i=r[n],s=z[i];s&&s.id&&t.push(s.id)}t.length&&O.e.raise(U,M.e.deleteCompletedEventName,{itemIds:t})};X=[];V=o(Object(N.e)({enableOverrideDeleteFileLocks:T.g,enableDeleteCommandForMountPointConfiguration:h.N})),$=V.enableOverrideDeleteFileLocks,J=V.enableDeleteCommandForMountPointConfiguration;K=function(e){R=t[e].currentItemSetKey;var n=o(Object(w.e)(function(t){return t.demandItem({key:i.e,folder:y.d,uniqueId:h.fn,folderPath:h.fe,oneNote:E.i,itemId:h.Ie,mountPoint:h.$e},e)}));if(n)if(J&&n.mountPoint)X.push(e);else if(n.key&&n.folderPath){I=n.key.webAbsoluteUrl;q=n.key.listFullUrl;if(!F){var r=f.e.serialize({webAbsoluteUrl:I,listFullUrl:q}),s=o(Object(w.e)(function(e){return e.demandItemFacet(h.Be,r)}));F={webAbsoluteUrl:I,listFullUrl:q,items:[],deletionType:u.e.Recycle,listId:s&&s.id}}var a={key:e,serverRelativeItemUrl:n.folderPath,id:n.itemId,uniqueId:n.uniqueId,isFolder:!!n.folder||!!n.oneNote};F.items.push(a);z[a.key]=a}};for(Q=0,G=Object.keys(t);Q<G.length;Q++){Y=G[Q];K(Y)}if(!(X&&X.length>0))return[3,2];Z={currentItemSetKey:R};ee={items:Object(P.e)(X,function(){return Z})};return[4,o(Object(D.e)(ee))];case 1:Ce.sent();Ce.label=2;case 2:te=F;ne=[];re=o(Object(w.e)(function(e){return I&&q?e.demandItemFacet(h.Qt,l.e.serialize({webAbsoluteUrl:I,listFullUrl:q})):void 0}));if(!te||!te.items.length)return[3,7];if(1!==te.items.length)return[3,4];ie=te.items[0];se=a({webAbsoluteUrl:te.webAbsoluteUrl,listFullUrl:te.listFullUrl,deletionType:te.deletionType,listId:te.listId,serverRelativeItemUrl:ie.serverRelativeItemUrl,uniqueId:ie.uniqueId,isFolder:!!ie.isFolder,itemId:ie.id});oe={};te.deletionType===u.e.PermanantDelete&&(oe["X-HTTP-Method"]="DELETE");pe=t[Object.keys(t)[0]];(ue=!!pe.breakLock)&&(oe.Prefer="bypass-shared-lock");return[4,o(Object(p.t)({webAbsoluteUrl:te.webAbsoluteUrl,listFullUrl:q||"",url:se,body:void 0,method:"POST",additionalHeaders:oe,qosName:"deleteSingleItem",telemetryHandler:function(e){var t=e.errorData,n=e.eventData;if(t){var i=t.status===g.t||$&&t.code&&t.code.indexOf("-2130575306")>-1?x.t.expectedFailure:x.t.failure;return{eventData:Object(r.__assign)(Object(r.__assign)({},n),{resultType:i})}}return{eventData:n}}})).then(function(){ne.push(ie.key);W(ne)}).catch(function(e){if(e instanceof d.e){if(e.code&&e.code.indexOf("-2130575306")>-1){$&&o(Object(C.e)({name:"DeleteOperationFileLockedWithForcedDeleteEnabled",isIntentional:!1,extraData:{errorCode:e.code,overrideFileLocksEnabled:$,isBatch:!1}}));throw new g.e({innerError:e,facets:Object(r.__assign)({},b.o.pack({}))})}ue&&o(Object(C.e)({name:"DeleteOperationOverrideFilelockedFailed",isIntentional:!1,extraData:{errorCode:e.code,overrideFileLocksEnabled:$,isBatch:!1}}));if(e.errorData.status===g.t)throw new g.e({innerError:e,facets:Object(r.__assign)({},b.m.pack({}))})}throw e})];case 3:Ce.sent();return[3,6];case 4:if(!(te.items.length>1))return[3,6];ae=m.e.generate();fe="multipart/mixed; boundary=batch_"+ae;return[4,o(Object(p.t)({webAbsoluteUrl:te.webAbsoluteUrl,listFullUrl:q||"",url:v.e.getBatchOperationUrl(te.webAbsoluteUrl),body:n(te,ae),method:"POST",additionalHeaders:void 0,contentType:fe,parseResponse:function(e){return v.e.processBatchResponse(e,te.items)},qosName:"deleteMultipleItems"})).then(function(e){for(var t=0,n=e.items;t<n.length;t++){!(f=n[t]).error&&f.key&&ne.push(f.key)}W(ne);if(e.hasError){for(var i={items:{}},u=0,a=e.items;u<a.length;u++){var f;if((f=a[u]).error&&f.key){var l=f.error.code&&"-2130575306"===f.error.code.toString();$&&o(Object(C.e)({name:"DeleteOperationFileLockedInBatchWithForcedDeleteEnabled",isIntentional:!1,extraData:{errorCode:f.error.code,overrideFileLocksEnabled:$,isBatch:!0}}));i.items[f.key]=new g.e({message:f.error.message,facets:l?Object(r.__assign)({},b.o.pack({})):void 0})}}throw new s.e(i)}return Promise.resolve({data:e})})];case 5:Ce.sent();Ce.label=6;case 6:le=new S.e;for(ce=0,he=te.items;ce<he.length;ce++){pe=he[ce];le.invalidateItems({items:(Se={},Se[pe.key]=[y.f],Se)});le.resolveItems({items:(xe={},xe[pe.key]=y.f.pack({}),xe)})}de=!re||!Object(L.t)(re).isActivated("C5C6F559-B975-4336-BEFB-0483A5A24929","02/14/2020","Resolve remaining items for current itemSet after delete to avoid going back to first page for current itemSet.");ve=!re||!Object(L.t)(re).isActivated("53BF5F56-AF6E-4509-AB0C-6E6F3923C492","08/07/2020","Do not resolve remaining items for current itemSet after delete for group by view");de&&R&&ne.length&&(me=o(Object(w.e)(function(e){var t=e.demandItemFacet(k.e,R);if(t&&t.itemKeys){for(var n=[],r=0,s=t.itemKeys;r<s.length;r++){var o=s[r];if(ve&&c.e.matches(o))return;var u=e.demandItemFacet(i.e,o),a=u&&i.e.serialize(u)||o;ne.indexOf(a)<0&&n.push(o)}return n}})))&&le.resolveItems({items:(Te={},Te[R]=k.e.pack({itemKeys:me}),Te)});re&&!Object(L.t)(re).isActivated("445a1e80-95c9-44fa-8845-c1d701b1a548","01/26/2021","Deleted pinned items")&&(ge=o(Object(w.e)(function(e){var t=e.demandItemFacet(H.e,R);return t&&H.e.serialize(t)})))&&le.resolveItems({items:(Ne={},Ne[ge]=Object(j.n)({childItems:k.e},{childItems:{itemKeys:new B.r(function(e){return-1!==ne.indexOf(e)},{defaultToEmptyArray:!0})}}),Ne)});if(!re||!Object(L.t)(re).isActivated("126A8F89-8146-4B38-A8DE-6F115DCF594C","03/26/2020","Invalidate parent folder countFacet of the deleted items")){ye=function(e){var t,n=o(Object(w.e)(function(t){return t.demandItemFacet(y.A,e)}));n&&n.itemKey&&le.invalidateItems({items:(t={},t[n.itemKey]=[_.e],t)})};for(be=0,we=ne;be<we.length;be++){Ee=we[be];ye(Ee)}}o(le.execute());Ce.label=7;case 7:return[2]}})})};function n(e,t){var n=e.items,r=e.deletionType===u.e.PermanantDelete?"DELETE":"POST",i=e.deletionType===u.e.PermanantDelete?"If-Match: *":v.e.defaultBatchRequestPostData,s=n.map(function(t){return a({webAbsoluteUrl:e.webAbsoluteUrl,listFullUrl:e.listFullUrl,deletionType:e.deletionType,serverRelativeItemUrl:t.serverRelativeItemUrl,uniqueId:t.uniqueId,isFolder:t.isFolder,listId:e.listId,itemId:t.id})});return v.e.getBatchContentExtended(t,s,r,i)}}}}]);