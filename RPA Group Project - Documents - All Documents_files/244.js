(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([["244"],{"1585":function(e,t,n){"use strict";n.d(t,"e",function(){return m});var r=n(0),i=n("knockout-lib"),s=n(1382),o=n(183),u=n(1566),a=n(102),f=n(158),l=n(30),c=n(97),h=n(54),p=n(7),d=n(248),v=(function(e){Object(r.__extends)(t,e);function t(t,n){var r=e.call(this,t,n)||this;r._currentView=n.currentView;r._currentItem=n.currentItem;r._itemUrlHelper=n.itemUrlHelper;r._itemParentHelper=n.itemParentHelper;r._pageContext=n.pageContext;r._newDocumentTemplates=n.newDocumentTemplates;r.fields=r.observables.createArray([]);r.views=r.observables.createArray([]);r._deletedViewIds=[];return r}t.prototype.updateTemplates=function(e){var t=this,r=this._currentView.peek();if(!r.isDefault)for(var i=0,s=this.views.peek();i<s.length;i++){var o=s[i];if(o.isDefault){r=o;break}}var u,a=r.getDomParts().newDocumentTemplates;a&&(u=a.textContent);n.e("279").then(n.bind(null,1683)).then(d.e).then(function(n){try{t._saveTemplatesToView(JSON.parse(u),e,n)}catch(r){t._saveTemplatesToView(n.getTemplates(),e,n)}})};t.prototype.getView=function(e){var t=this;return this._getListDataSource().then(function(n){return n.getView(e,t._getListUrl())}).then(function(e){t.registerView(e);return e})};t.prototype.getFields=function(e){var t=this;return e?this._getListDataSourceExtension().then(function(e){return e.getFields(t._getListUrl()).then(function(e){t.fields(e);return e})}):h.n.wrap(this.fields.peek())};t.prototype.getCurrentListUrl=function(e){var t=e?this._currentItem():this._currentItem.peek(),n=t&&this._itemUrlHelper.getItemUrlParts(t.key);return n&&n.fullListUrl};t.prototype.registerView=function(e){if(-1===this._deletedViewIds.indexOf(e.id)){for(var t=this.views.peek(),n=!1,r=0;r<t.length;r++){var i=t[r];if(e===i){n=!0;break}if(i.id===e.id){t.splice(r,1);break}}n||this._insertViewSorted(e)}};t.prototype.getViews=function(e,t){var n=this;if(e){var r=this._itemParentHelper.getFacetedAncestorOrSelf(this._currentItem.peek(),"list"),s=this.peekUnwrapObservable(r),o=s&&s.list.templateType,u=t||this._getListUrl();return this._getListDataSource().then(function(e){return e.getViews(u,o)}).then(function(e){var t=n._currentView.peek();if(t){var r=i.utils.arrayFirst(e,function(e){return e.id===t.id});if(r){t.title=r.title;t.isDefault=r.isDefault;t.isDirty()||(t.baseViewXml=r.baseViewXml);n._currentView.valueHasMutated();i.utils.arrayRemoveItem(e,r);e.push(t)}}e.sort(function(e,t){return e.compareTo(t)});n.views(e);return e})}return h.n.wrap(this.views.peek())};t.prototype.createView=function(e){var t=this;return this._getListDataSource().then(function(n){return n.createView(e,t._getListUrl())}).then(function(e){t._insertViewSorted(e);return e})};t.prototype.saveView=function(e,t){var n=this;return this._getListDataSource().then(function(r){return r.saveView(e,n._getListUrl(),t)})};t.prototype.deleteView=function(e){var t=this;return this._getListDataSource().then(function(n){return n.deleteView(e,t._getListUrl())}).then(function(){t._deletedViewIds.push(e);t.views.remove(function(t){return t.id===e})})};t.prototype.modifyView=function(e){var t=this;return this._getListDataSource().then(function(n){return n.modifyView(e,t._getListUrl())}).then(function(){for(var n,r,i=t.views.peek(),s=0;s<i.length;s++)if(i[s].id===e.id){n=i[s];r=s;break}if(n){var o=!1;if("boolean"==typeof e.isDefault){if(e.isDefault)for(var u=0,a=i;u<a.length;u++){var f=a[u];if(f.isDefault){f.isDefault=!1;break}}n.isDefault=e.isDefault;o=!0}if("number"==typeof e.scope&&n.scope!==e.scope){n.scope=e.scope;o=!0}if("string"==typeof e.title&&n.title!==e.title){n.title=e.title;i.splice(r,1);t._insertViewSorted(n);o=!1}o&&t.views.valueHasMutated()}})};t.prototype.createMappedView=function(e,t){var n=this;return this._getListDataSource().then(function(r){return r.createMappedView(e,t,n._getListUrl())}).then(function(e){n._insertViewSorted(e);return e})};t.prototype.getMappedApp=function(e,t){var n=this;return this._getListDataSource().then(function(r){return r.getMappedApp(e,t,n._getListUrl())})};t.prototype.getMappedApps=function(e){var t=this;return this._getListDataSource().then(function(n){return n.getMappedApps(e,t._getListUrl())})};t.prototype.publishMappedView=function(e,t,n){var r=this;return this._getListDataSource().then(function(e){return e.publishMappedView(t,n,r._getListUrl())}).then(function(t){r.views.remove(function(t){return t.id===e});r._insertViewSorted(t);return t})};t.prototype.unpublishMappedView=function(e,t,n){var r=this;return this._getListDataSource().then(function(e){return e.unpublishMappedView(t,n,r._getListUrl())}).then(function(t){r.views.remove(function(t){return t.id===e});r._insertViewSorted(t);return t})};t.prototype.createField=function(e,t,n,r,i){var s=this,o=this._getFieldCreationSchema(e,t,r);return this._getListDataSourceExtension().then(function(e){return e.createField(o,n||s._getListUrl(),i)})};t.prototype.modifyFieldProperties=function(e){var t=this;return this._getListDataSource().then(function(n){return n.modifyFieldProperties(e,t._getListUrl())})};t.prototype.getFieldPropertyAsString=function(e,t){var n=this;return this._getListDataSourceExtension().then(function(r){return r.getField(e,n._getListUrl()).then(function(e){return e[t]})})};t.prototype.setContentApproval=function(e){var t=this;return this._getListDataSource().then(function(n){return n.setContentApproval(e,t._getListUrl())})};t.prototype.ensureSignoffStatusField=function(){var e=this;return this._getListDataSource().then(function(t){return t.ensureSignoffStatusField(e._getListUrl())})};t.prototype.setFieldPropertyValueAsString=function(e,t,n){var r=this;return this._getListDataSourceExtension().then(function(i){return i.setFieldPropertyValueAsString(e,t,n,r._getListUrl())})};t.prototype._getListUrl=function(){var e=this.getCurrentListUrl();if(!e)throw new Error("List URL is not known");return e};t.prototype._insertViewSorted=function(e){for(var t=this.views.peek(),n=!1,r=0;r<t.length;r++)if(e.compareTo(t[r])<1){this.views.splice(r,0,e);n=!0;break}n||this.views.push(e)};t.prototype._getListDataSourceExtension=function(){var e=this,t=h.n.resolve(n.e("45").then(n.bind(null,1618))).then(function(t){var n=t.ListDataSource;return new(e.managed(n))(e._pageContext)});this._getListDataSourceExtension=function(){return t};return t};t.prototype._getFieldCreationSchema=function(e,t,n){var r={Type:t,DisplayName:e,Title:e};n&&(r.StaticName=n);if(t===a.t.User||t===a.t.UserMulti){r.UserSelectionMode="1";r.UserSelectionScope=0}else t===a.t.DateTime&&(r.Format="DateOnly");t===a.t.UserMulti&&(r.Mult=!0);return r};t.prototype._saveTemplatesToView=function(e,t,n){for(var r=this,i=n.getDefaultContentTypeId(),s=n.getDefaultView(this.views.peek()),o=0,u=t;o<u.length;o++){var a=u[o].peek(),f=a.id,l=a.displayName.replace(/\.[^.]+$/,"");e.push({isUpload:!0,visible:!0,title:l,url:f,contentTypeId:i,templateId:l})}s.updateNewDocumentTemplates(n.prepareJsonForSaving(e));this.saveView({sourceView:s,updateViewXml:!0,viewParams:{}},!0).then(function(){r._newDocumentTemplates.valueHasMutated()})};t.prototype._getListDataSource=function(){return this.resources.consumeAsync(c.F)};t.dependencies=Object(r.__assign)(Object(r.__assign)({},s.default.dependencies),{pageContext:l.h,currentView:f.l,currentItem:f.o,itemUrlHelper:o.r,itemParentHelper:u.e,newDocumentTemplates:l.l.optional});return t})(s.default),m=Object(p.s)("ListProvider",v)},"1620":function(e,t,n){"use strict";var r=n(0),i=n(1563),s=n(177),o=(function(e){Object(r.__extends)(t,e);function t(t){var n=e.call(this,t)||this,i=n.valueAccessor();n._platform=n.resources.consume(s.e.optional);n._isPermanent="object"==typeof i&&i.isPermanent||!1;n._isReentrant="object"==typeof i&&i.isReentrant||!1;document.activeElement===n.element&&n._select();var o=Object(r.__assign)({focus:n._onFocus,focusin:n._onFocus,mouseup:n._onMouseUp},n._isReentrant?{focusout:n._onFocusOut}:{});n.events.onAll(n.element,o);return n}t.prototype._select=function(){var e=this.element;if((this._isPermanent||!this._hasSelected)&&"function"==typeof this.element.select){e.select();try{this._platform.isIOS&&e.value&&e.setSelectionRange(0,e.value.length)}catch(e){}this._hasSelected=!0;return!0}return!1};t.prototype._onFocus=function(e){this._select();return!0};t.prototype._onFocusOut=function(){this._hasSelected=!1;return!0};t.prototype._onMouseUp=function(e){if(this._select())return!1};return t})(i.t);t.e=o},"1705":function(e,t,n){"use strict";var r=n(150);Object(r.n)([{rawString:".od-Prompt-input{width:100%;display:block}.od-Prompt-status{font-size:12px;font-weight:400;color:"},{theme:"themePrimary",defaultValue:"#0078d4"},{rawString:";word-wrap:break-word}.od-Prompt-status--error{color:"},{theme:"redDark",defaultValue:"#a4262c"},{rawString:"}.od-Prompt-input--error{border-color:"},{theme:"redDark",defaultValue:"#a4262c"},{rawString:"!important}"}]);var i=n(0),s=n(1551),o=n(1620),u=(function(e){Object(i.__extends)(t,e);function t(t){var n=e.call(this,t)||this,r=t.state;n.text=r.text;n.isEnabled=r.isEnabled;n.explanation=r.explanation;n.status=r.status;n.checkbox=r.checkbox;n.hasFocus=n.createPureComputed(function(){return n.isEnabled()});n.inputFocused=n.createObservable(!1);n.subscribe(n.status,function(e){e.isError&&n.async.setTimeout(function(){return n.isEnabled(!0)},100);n._shouldClearError=e.isError});n.subscribe(n.text,function(){if(n._shouldClearError){n._shouldClearError=!1;n.status.peek().isError&&r.clearStatus()}});n.addBindingHandlers({selectOnFocus:o.e});return n}return t})(s.t),a=n(1552).e({tagName:"ms-prompt",template:'<div class="od-Prompt"><div class="od-TextField"><label class="od-Label" for="Prompt-input" data-bind="text:explanation"></label><span class="od-Prompt-input"><input class="od-TextField-field" id="Prompt-input" type="text" maxlength="255" data-bind="textInput:text,enable:isEnabled,hasFocus:hasFocus,selectOnFocus,css:{\'od-Prompt-input--error\':status().isError},automation:\'Prompt-input\'"></span></div><div class="od-Prompt-status" aria-live="assertive" role="status" data-bind="text:status().message,css:{\'od-Prompt-status--error\':status().isError}"></div>\x3c!--ko if:checkbox--\x3e<div class="od-CheckBox" data-bind="with:checkbox"><label class="od-CheckBox-field" data-bind="css:{\'is-checked\':isChecked,\'is-disabled\':!isEnabled(),\'in-focus\':$parent.inputFocused()}"><input class="od-CheckBox-input" type="checkbox" data-bind="checked:isChecked,enable:isEnabled,hasFocus:$parent.inputFocused"><span class="od-Label" data-bind="text:label"></span></label></div>\x3c!--/ko--\x3e</div>',viewModel:u,synchronous:!0});t.e=a},"1774":function(e,t,n){"use strict";var r=n("knockout-lib"),i=(function(){function e(e){void 0===e&&(e={});var t=e.text,n=void 0===t?r.observable(""):t,i=e.explanation,s=void 0===i?"":i,o=e.status,u=void 0===o?r.observable({message:"",isError:!1}):o,a=e.checkbox;this.text=n;this.explanation=s;this.status=u;this.checkbox=a;this.isEnabled=r.observable(!0)}e.prototype.setWaitingStatus=function(e){this.status({message:e,isError:!1});this.isEnabled(!1)};e.prototype.setErrorStatus=function(e){this.status({message:e,isError:!0})};e.prototype.clearStatus=function(){this.status({message:"",isError:!1})};return e})();t.e=i},"1781":function(e,t,n){"use strict";n.d(t,"e",function(){return m});var r=n(0),i=n(6),s=n(1673),o=n(668),u=n(1),a=n(83),f=n(189),l=n(9),c=n(175),h=n(1239),p=n(123),d=(new i.t({name:"ItemsScopeViewHelper",factory:{dependencies:{itemCacheStore:o.e},create:function(e){var t=e.itemCacheStore;return{instance:function(e){var n=void 0;e&&(n=t.dispatch(Object(p.e)(function(t){return t.demandItemFacet(u.wt,e)})));return n}}}}}),new i.t({name:"ItemsScopeViewHelper",factory:{dependencies:{itemCacheStore:o.e,itemsScopeCurrentItemKey:s.e},create:function(e){var t=e.itemCacheStore,n=e.itemsScopeCurrentItemKey;return{instance:function(){var e=n.peek(),r=t.dispatch(Object(p.e)(function(t){return t.demandItemFacet(a.e,e)}));return r&&r.viewKey&&f.e.serialize(r.viewKey)}}}}})),v=new i.t({name:"ItemsScopeViewHelper",factory:{dependencies:{itemCacheStore:o.e},create:function(e){var t=e.itemCacheStore;return{instance:function(e){var n=void 0;e&&(n=t.dispatch(Object(p.e)(function(t){return t.demandItemFacet(u.v,e)})));return n}}}}}),m=new i.t({name:"ItemsScopeViewHelper",factory:{dependencies:{itemCacheStore:o.e,itemsScopeCurrentItemKey:s.e,getItemsScopeCurrentViewKey:d,getItemsScopeCurrentDerivedView:v},create:function(e){var t=e.itemCacheStore,n=e.itemsScopeCurrentItemKey,i=e.getItemsScopeCurrentViewKey,s=e.getItemsScopeCurrentDerivedView;return{instance:function(e){var o,a,f=i(),p=s(f);if(p){p=e(p);t.dispatch(Object(c.e)({items:(o={},o[f]=Object(r.__assign)({},u.v.pack(p)),o)}));t.dispatch(Object(h.e)({items:(a={},a[n.peek()]=[l.e],a[f]=[u.v],a)}))}}}}}})},"1792":function(e,t,n){"use strict";n.d(t,"e",function(){return w});var r=n(1939),i=n(1705),s=n(957),o=n(1806),u=n(1807),a=n(1585),f=n(1568),l=n(1383),c=n(158),h=n(30),p=n(54),d=n(1561),v=n(31),m=n(6),g=n(7),y=n(8),b=(function(){function e(e,t){this._currentView=t.currentView;this._viewParams=t.viewParams;this._dialogProvider=t.dialogProvider;this._listProvider=t.listProvider;this._listContext=t.listContext;this._currentItem=t.currentItem;this._itemProvider=t.itemProvider;this._isColumnTakenKSActive=y.e.isActivated("5FA9698E-E9BA-45B3-8390-B4901FFD9196","3/10/21","Check internalName")}e.prototype.showDialog=function(e){e.listFields&&this._listProvider.getFields(!0).then(function(t){e.listFields(t)});return this._dialogProvider.requestDialog({title:e.title,component:{name:i.e.tagName,params:{state:e.promptState}},actions:[{name:e.confirmButtonText||r.e.columnNameSave,execute:e.onConfirmClick,isDefault:!0,isAvailable:e.promptState.isEnabled,icon:new d.e("Save"),automationId:"ColumnPropertyOK"},{name:r.e.columnNameCancel,execute:function(){return p.n.wrap(3)},isAvailable:e.promptState.isEnabled,icon:new d.e("Cancel"),automationId:"ColumnPropertyCancel"}]}).wait().then(function(){return{resultType:v.e.Success}})};e.prototype.isColumnNameTaken=function(e,t){if(!t)return!1;e=e.toLocaleLowerCase();if(!this._isColumnTakenKSActive){return t.filter(function(e){return!e.isHidden&&"LinkTitle"!==e.internalName&&"LinkTitleNoMenu"!==e.internalName}).some(function(t){return e===t.title.toLocaleLowerCase()})}return t.some(function(t){return e===t.title.toLocaleLowerCase()})};e.prototype.isColumnStaticNameTaken=function(e,t){if(!t)return!1;e=e.toLocaleLowerCase();return t.some(function(t){return t.staticName&&e===t.staticName.toLocaleLowerCase()})};e.prototype.getAddToViewAction=function(e,t){var n;if(this.hasViewBeenModified())n={action:o.ModifyColumnAction,params:{action:1,fieldToActOn:e,fieldToAddAfter:t}};else{var r=this._currentView.peek(),i=r.getEffectiveFieldNames(),s=void 0;t&&(s=i.indexOf(t)+1);s=s||i.length;r.updateField(e,s);n={action:u.default,params:{skipDialog:!0}}}return n};e.prototype.getRemoveFromViewAction=function(e){var t;if(this.hasViewBeenModified())t={action:o.ModifyColumnAction,params:{action:0,fieldToActOn:e}};else{this._currentView.peek().updateField(e);t={action:u.default,params:{skipDialog:!0}}}return t};e.prototype.getAddOrRemoveFromViewAction=function(e,t,n){var r;if(this.hasViewBeenModified())r={action:o.ModifyColumnAction,params:{action:2,fieldToAddAfter:e,addFields:t,removeFields:n}};else{var i=this._currentView.peek(),s=i.getEffectiveFieldNames(),a=void 0;e&&(a=s.indexOf(e)+1);a=a||s.length;if(t)for(var f=0,l=t;f<l.length;f++){var c=l[f];i.updateField(c,a);a++}if(n)for(var h=0,p=n;h<p.length;h++){c=p[h];i.updateField(c)}r={action:u.default,params:{skipDialog:!0}}}return r};e.prototype.invalidateSchema=function(){this._listContext.listSchema=null;this._listContext.rawListSchema=null;this._listContext.needContentTypes=!0;this._itemProvider.invalidateItem(this._currentItem.peek().key,{triggerFetch:!0,emptyAllOtherSets:!0,refreshSchema:!0});this.invalidateInfoPaneCache()};e.prototype.invalidateInfoPaneCache=function(){this._listContext.refreshClientForm=!0};e.prototype.hasViewBeenModified=function(){if(this._currentView.peek().isDirty())return!0;var e=this._viewParams.peek();return Object.keys(e).some(function(e){return s.t.test(e)||s.e.test(e)})};e.prototype.getCurrentViewFields=function(){return this._currentView.peek().getEffectiveFieldNames()};e.dependencies={currentView:c.l,viewParams:c.j,dialogProvider:f.e,listProvider:a.e,listContext:h.o,currentItem:c.o,itemProvider:l.resourceKey};return e})(),w=new m.t({name:"ColumnActionsHelper",factory:new g.n(b)})},"1806":function(e,t,n){"use strict";n.r(t);n.d(t,"ModifyColumnAction",function(){return E});var r=n(0),i=n(1557),s=n(54),o=n(31),u=n(158),a=n(30),f=n(128),l=n(132),c=n(1781),h=n(83),p=n(189),d=n(1177),v=n(1842),m=n(123),g=n(668),y=n(1673),b=n(939),w=n(89),E=(function(e){Object(r.__extends)(t,e);function t(t){var n=e.call(this,t)||this;n.name="ModifyColumn";n._action=t.action;n._fieldToActOn=t.fieldToActOn;n._addFields=t.addFields;n._removeFields=t.removeFields;n._fieldToAddAfter=t.fieldToAddAfter;n._listContext=n.resources.consume(a.o);n._currentView=n.resources.consume(u.l);n._dataManager=n.resources.consume(f.t.optional);n._isItemsScopeEnabled=n.resources.consume(b.h.lazy);return n}t.prototype.onExecute=function(e,t){var n=this;switch(this._action){case 1:this._unhideColumn();break;case 0:this._hideColumn();break;case 2:this._hideUnhideColumns();break;case 3:case 4:this._moveField()}this._isItemsScopeEnabled()&&this.resources.consumeAsync(c.e).then(function(e){e(function(e){var t=n._currentView.peek().getEffectiveFieldNames();e.replaceFields(t);return e})});Object(l.isFeatureEnabled)(l.ColumnFieldsAutoSave)&&this._isItemsScopeEnabled()&&this.resources.load({itemCacheStore:g.e,itemsScopetemKey:y.e}).then(function(){var e,t,r=n.resources.consume(g.e),i=n.resources.consume(y.e),s=r.dispatch(Object(m.e)(function(e){var t=e.demandItemFacet(h.e,i.peek());return{setKey:t,viewKey:t&&t.viewKey&&p.e.serialize(t.viewKey)}}));s.setKey&&s.viewKey&&r.dispatch(Object(v.e)({items:(e={},e[d.e.serialize(s.setKey)]={views:(t={},t[s.viewKey]={shouldSaveViewFieldsOnly:!0},t),qosName:"autoSaveAddDelete"},e)})).catch(function(e){w.e.logError(e,{eventName:"AddDeleteAutoSave",feature:"ColumnFieldsAutoSave",errorCode:e&&e.errorData&&e.errorData.code,correlationId:e&&e.errorData&&e.errorData.correlationId,status:e&&e.errorData&&e.errorData.status});throw e})});return s.n.wrap({resultType:o.e.Success})};t.prototype.onIsAvailable=function(){var e=this._currentView();if(!e||!e.baseViewXml)return!1;if(3===this._action||4===this._action){var t=e.getEffectiveFieldNames();if(t&&t.length){var n=t.indexOf(this._fieldToActOn),r=this._listContext.isGrouped?1:0;return 3===this._action?n>r+1:n>=r&&n<t.length-1}return!1}return!0};t.prototype._moveField=function(){var e,t=this._currentView.peek(),n=t.getEffectiveFieldNames().indexOf(this._fieldToActOn);e=3===this._action?n-1:n+1;t.updateField(this._fieldToActOn,e);this._currentView.valueHasMutated()};t.prototype._hideColumn=function(){this._currentView.peek().updateField(this._fieldToActOn);this._currentView.valueHasMutated()};t.prototype._unhideColumn=function(){var e=this._currentView.peek(),t=e.getEffectiveFieldNames(),n=t.indexOf(this._fieldToAddAfter);-1===n?e.updateField(this._fieldToActOn,t.length):e.updateField(this._fieldToActOn,n+1);this._currentView.valueHasMutated()};t.prototype._hideUnhideColumns=function(){if(this._addFields)for(var e=0,t=this._addFields;e<t.length;e++){var n=t[e];this._fieldToActOn=n;this._unhideColumn();this._fieldToAddAfter=this._fieldToActOn}if(this._removeFields)for(var r=0,i=this._removeFields;r<i.length;r++){n=i[r];this._fieldToActOn=n;this._hideColumn()}};return t})(i.e);t.default=E},"1807":function(e,t,n){"use strict";n.r(t);n.d(t,"SaveViewAction",function(){return E});var r=n(0),i=n(1557),s=n(1559),o=n(1705),u=n(1774),a=n(33),f=n(1568),l=n(1383),c=n(1585),h=n(158),p=n(30),d=n(1561),v=n(20),m=n(54),g=n(31),y=n(956),b=n(939),w=n(947),E=(function(e){Object(r.__extends)(t,e);function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;n.name="SaveView";n._skipDialog=t.skipDialog;n._viewParams=n.resources.consume(h.j);n._currentView=n.resources.consume(h.l);n._currentItem=n.resources.consume(h.o);n._dialogProvider=n.resources.consume(f.e);n._itemProvider=n.resources.consume(l.resourceKey);n._listProvider=n.resources.consume(c.e);n._listContext=n.resources.consume(p.o);n._isItemsScopeEnabled=n.resources.consume(b.h.lazy);return n}t.prototype.onExecute=function(e,t){var n=this;delete this._result;delete this._switchTo;var r,i,a=this._currentView.peek();if(!a)return m.n.wrap({resultType:g.e.Failure});if(this._skipDialog){r=this._doSaveView(a.title,!1);i={resultType:g.e.Failure}}else{this._viewsPromise=this._listProvider.getViews(!0);var f,l,c=this.observables.create(!1);if(this._listContext.permissions&&this._listContext.permissions.manageLists){f=this.observables.create(a.title||"");l=this.observables.create(!a.isPersonal);this.subscribe(f,function(e){if(e===a.title){c(!1);l(!a.isPersonal)}else c(!0)})}else{l=this.observables.create(!1);f=this.observables.create(a.isPersonal&&a.title||"")}a.isReadOnly&&f("");this._promptState=new u.e({text:f,explanation:s.e.SaveViewExplanation,checkbox:{label:s.e.SaveViewMakePublic,isChecked:l,isEnabled:c}});r=this._dialogProvider.requestDialog({title:s.e.SaveAs,component:{name:o.e.tagName,params:{state:this._promptState}},actions:[{name:s.e.SaveViewCommit,execute:this._saveViewFromDialog.bind(this),isDefault:!0,isAvailable:this.createPureComputed(function(){return n._promptState.isEnabled()&&!!f()}),icon:new d.e("Save"),automationId:"saveViewDialogCommit"},{name:s.e.cancelActionText,execute:function(){return m.n.wrap(3)},isAvailable:this._promptState.isEnabled,icon:new d.e("Cancel"),automationId:"saveViewDialogCancel"}]}).wait();i={resultType:g.e.ExpectedFailure}}return r.then(function(){var t=n._result||i;if(t.resultType===g.e.Success){n._itemProvider.invalidateItem(n._currentItem.peek().key,{triggerFetch:!1,emptyAllOtherSets:!0});var r=n.resources.consume(h.e),s=function(){n._listContext.listSchema=null;n._listContext.needContentTypes=!0;n._itemProvider.invalidateItem(n._currentItem.peek().key,{triggerFetch:!0,emptyAllOtherSets:!0,refreshSchema:!0});n._isItemsScopeEnabled()&&n.resources.consumeAsync(y.e).then(function(e){e.invalidateCurrentItemSet();e.invalidateCurrentView();e.invalidateListContentTypes()});return t};return new(n.managed(r.SwitchViewAction))({newView:n._switchTo}).execute(e).then(s,s)}return t})};t.prototype.onIsAvailable=function(){var e=this._currentItem(),t=this._currentView(),n=this._listContext&&this._listContext.permissions,r=this._viewParams();return t&&!Object(w.t)(t.viewType)&&e&&e.queryType===a.e.Files&&n&&(n.managePersonalViews||n.manageLists)&&!r.needsAttentionView};t.prototype._saveViewFromDialog=function(){var e=this,t=this._promptState.text.peek(),n=t!==this._currentView.peek().title;if(n){t=t.trim();this._promptState.text(t);if(!t){this._promptState.setErrorStatus(s.e.SaveViewErrorNoName);return m.n.wrap(1)}}this._promptState.isEnabled(!1);return this._isViewNameValid(t,n).then(function(r){if(r)return e._doSaveView(t,n);e._promptState.setErrorStatus(v.format(s.e.SaveViewErrorCannotOverwrite,t));return m.n.wrap(1)})};t.prototype._isViewNameValid=function(e,t){var n=this,r=this._currentView.peek();return t?new m.n(function(t){n._viewsPromise.done(function(n){t(!n.some(function(t){return t.title===e}))},function(){t(!0)})}):e!==r.title||r.canUserEdit(this._listContext&&this._listContext.permissions)&&!r.isReadOnly?m.n.wrap(!0):m.n.wrap(!1)};t.prototype._doSaveView=function(e,t){var n=this,r=this._currentView.peek(),i=this._viewParams.peek();if(t){var s={title:e,viewParams:i,sourceView:r,isPublic:this._promptState?this._promptState.checkbox.isChecked.peek():!r.isPersonal};return this._listProvider.createView(s).then(function(e){return n._onComplete(e)},function(e){return n._onError("CreatingView",e)})}s={sourceView:r,viewParams:i,updateViewXml:!0};return this._listProvider.saveView(s).then(function(){return n._onComplete(r)},function(e){return n._onError("SavingView",e)})};t.prototype._onComplete=function(e){this._switchTo=e;this._result={resultType:g.e.Success};return 2};t.prototype._onError=function(e,t){this._promptState&&this._promptState.setErrorStatus(s.e.SaveViewError);this._result={resultType:g.e.Failure,resultCode:e,error:t};return 1};return t})(i.e);t.default=E},"3325":function(e,t,n){"use strict";n.r(t);n.d(t,"RenameColumnAction",function(){return p});var r=n(0),i=n(1939),s=n(1792),o=n(1592),u=n(1774),a=n(1585),f=n(158),l=n(54),c=n(956),h=n(939),p=(function(e){Object(r.__extends)(t,e);function t(t){var n=e.call(this,t)||this;n.name="RenameColumn";n._internalName=t.internalName;n._id=t.id;n._currentDisplayName=t.currentDisplayName;n._itemSet=n.resources.consume(f.u);n._columnActionsHelper=n.resources.consume(s.e);n._isItemsScopeEnabled=n.resources.consume(h.h.lazy);return n}t.prototype.onExecute=function(e,t){this._promptState=new u.e({text:this.observables.create(this._currentDisplayName),explanation:i.e.columnName});this._listFields=this.observables.createArray([]);return this._columnActionsHelper.showDialog({promptState:this._promptState,onConfirmClick:this._renameColumnInner.bind(this),title:i.e.renameColumn,listFields:this._listFields})};t.prototype.onIsAvailable=function(){var e=this.getParent(this.item(),"list"),t=e&&e.list.permissions;return!(!t||!t.manageLists)};t.prototype._renameColumnInner=function(){var e,t=this,n=this._promptState.text.peek();if(n)if(this._columnActionsHelper.isColumnNameTaken(n,this._listFields.peek()))e=i.e.columnNameIsTaken;else{if(0!==this._listFields.peek().length){this._promptState.isEnabled(!1);var s=this.resources.consume(a.e),o={id:this._id,displayName:n};return s.modifyFieldProperties(o).then(function(){for(var e=t._itemSet.peek().schema.peek(),i=0;i<e.length;i++){var s=e[i];if(s.internalName===t._internalName){t._itemSet.peek().schema(Object(r.__spreadArrays)(e.slice(0,i),[Object(r.__assign)(Object(r.__assign)({},s),{name:n})],e.slice(i+1)));break}}t._isItemsScopeEnabled()&&t.resources.consumeAsync(c.e).then(function(e){e.invalidateCurrentItemSet();e.invalidateCurrentView()});t._columnActionsHelper.invalidateInfoPaneCache();return 2},function(e){t._promptState.setErrorStatus(i.e.columnOperationFailed);return 1})}e=i.e.columnOperationFailed}else e=i.e.columnNameEmpty;this._promptState.setErrorStatus(e);return l.n.wrap(1)};return t})(o.e);t.default=p}}]);