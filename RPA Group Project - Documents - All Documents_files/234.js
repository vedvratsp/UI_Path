(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([["234"],{"1585":function(e,t,n){"use strict";n.d(t,"e",function(){return m});var r=n(0),i=n("knockout-lib"),s=n(1382),o=n(183),u=n(1566),a=n(102),f=n(158),l=n(30),c=n(97),h=n(54),p=n(7),d=n(248),v=(function(e){Object(r.__extends)(t,e);function t(t,n){var r=e.call(this,t,n)||this;r._currentView=n.currentView;r._currentItem=n.currentItem;r._itemUrlHelper=n.itemUrlHelper;r._itemParentHelper=n.itemParentHelper;r._pageContext=n.pageContext;r._newDocumentTemplates=n.newDocumentTemplates;r.fields=r.observables.createArray([]);r.views=r.observables.createArray([]);r._deletedViewIds=[];return r}t.prototype.updateTemplates=function(e){var t=this,r=this._currentView.peek();if(!r.isDefault)for(var i=0,s=this.views.peek();i<s.length;i++){var o=s[i];if(o.isDefault){r=o;break}}var u,a=r.getDomParts().newDocumentTemplates;a&&(u=a.textContent);n.e("279").then(n.bind(null,1683)).then(d.e).then(function(n){try{t._saveTemplatesToView(JSON.parse(u),e,n)}catch(r){t._saveTemplatesToView(n.getTemplates(),e,n)}})};t.prototype.getView=function(e){var t=this;return this._getListDataSource().then(function(n){return n.getView(e,t._getListUrl())}).then(function(e){t.registerView(e);return e})};t.prototype.getFields=function(e){var t=this;return e?this._getListDataSourceExtension().then(function(e){return e.getFields(t._getListUrl()).then(function(e){t.fields(e);return e})}):h.n.wrap(this.fields.peek())};t.prototype.getCurrentListUrl=function(e){var t=e?this._currentItem():this._currentItem.peek(),n=t&&this._itemUrlHelper.getItemUrlParts(t.key);return n&&n.fullListUrl};t.prototype.registerView=function(e){if(-1===this._deletedViewIds.indexOf(e.id)){for(var t=this.views.peek(),n=!1,r=0;r<t.length;r++){var i=t[r];if(e===i){n=!0;break}if(i.id===e.id){t.splice(r,1);break}}n||this._insertViewSorted(e)}};t.prototype.getViews=function(e,t){var n=this;if(e){var r=this._itemParentHelper.getFacetedAncestorOrSelf(this._currentItem.peek(),"list"),s=this.peekUnwrapObservable(r),o=s&&s.list.templateType,u=t||this._getListUrl();return this._getListDataSource().then(function(e){return e.getViews(u,o)}).then(function(e){var t=n._currentView.peek();if(t){var r=i.utils.arrayFirst(e,function(e){return e.id===t.id});if(r){t.title=r.title;t.isDefault=r.isDefault;t.isDirty()||(t.baseViewXml=r.baseViewXml);n._currentView.valueHasMutated();i.utils.arrayRemoveItem(e,r);e.push(t)}}e.sort(function(e,t){return e.compareTo(t)});n.views(e);return e})}return h.n.wrap(this.views.peek())};t.prototype.createView=function(e){var t=this;return this._getListDataSource().then(function(n){return n.createView(e,t._getListUrl())}).then(function(e){t._insertViewSorted(e);return e})};t.prototype.saveView=function(e,t){var n=this;return this._getListDataSource().then(function(r){return r.saveView(e,n._getListUrl(),t)})};t.prototype.deleteView=function(e){var t=this;return this._getListDataSource().then(function(n){return n.deleteView(e,t._getListUrl())}).then(function(){t._deletedViewIds.push(e);t.views.remove(function(t){return t.id===e})})};t.prototype.modifyView=function(e){var t=this;return this._getListDataSource().then(function(n){return n.modifyView(e,t._getListUrl())}).then(function(){for(var n,r,i=t.views.peek(),s=0;s<i.length;s++)if(i[s].id===e.id){n=i[s];r=s;break}if(n){var o=!1;if("boolean"==typeof e.isDefault){if(e.isDefault)for(var u=0,a=i;u<a.length;u++){var f=a[u];if(f.isDefault){f.isDefault=!1;break}}n.isDefault=e.isDefault;o=!0}if("number"==typeof e.scope&&n.scope!==e.scope){n.scope=e.scope;o=!0}if("string"==typeof e.title&&n.title!==e.title){n.title=e.title;i.splice(r,1);t._insertViewSorted(n);o=!1}o&&t.views.valueHasMutated()}})};t.prototype.createMappedView=function(e,t){var n=this;return this._getListDataSource().then(function(r){return r.createMappedView(e,t,n._getListUrl())}).then(function(e){n._insertViewSorted(e);return e})};t.prototype.getMappedApp=function(e,t){var n=this;return this._getListDataSource().then(function(r){return r.getMappedApp(e,t,n._getListUrl())})};t.prototype.getMappedApps=function(e){var t=this;return this._getListDataSource().then(function(n){return n.getMappedApps(e,t._getListUrl())})};t.prototype.publishMappedView=function(e,t,n){var r=this;return this._getListDataSource().then(function(e){return e.publishMappedView(t,n,r._getListUrl())}).then(function(t){r.views.remove(function(t){return t.id===e});r._insertViewSorted(t);return t})};t.prototype.unpublishMappedView=function(e,t,n){var r=this;return this._getListDataSource().then(function(e){return e.unpublishMappedView(t,n,r._getListUrl())}).then(function(t){r.views.remove(function(t){return t.id===e});r._insertViewSorted(t);return t})};t.prototype.createField=function(e,t,n,r,i){var s=this,o=this._getFieldCreationSchema(e,t,r);return this._getListDataSourceExtension().then(function(e){return e.createField(o,n||s._getListUrl(),i)})};t.prototype.modifyFieldProperties=function(e){var t=this;return this._getListDataSource().then(function(n){return n.modifyFieldProperties(e,t._getListUrl())})};t.prototype.getFieldPropertyAsString=function(e,t){var n=this;return this._getListDataSourceExtension().then(function(r){return r.getField(e,n._getListUrl()).then(function(e){return e[t]})})};t.prototype.setContentApproval=function(e){var t=this;return this._getListDataSource().then(function(n){return n.setContentApproval(e,t._getListUrl())})};t.prototype.ensureSignoffStatusField=function(){var e=this;return this._getListDataSource().then(function(t){return t.ensureSignoffStatusField(e._getListUrl())})};t.prototype.setFieldPropertyValueAsString=function(e,t,n){var r=this;return this._getListDataSourceExtension().then(function(i){return i.setFieldPropertyValueAsString(e,t,n,r._getListUrl())})};t.prototype._getListUrl=function(){var e=this.getCurrentListUrl();if(!e)throw new Error("List URL is not known");return e};t.prototype._insertViewSorted=function(e){for(var t=this.views.peek(),n=!1,r=0;r<t.length;r++)if(e.compareTo(t[r])<1){this.views.splice(r,0,e);n=!0;break}n||this.views.push(e)};t.prototype._getListDataSourceExtension=function(){var e=this,t=h.n.resolve(n.e("45").then(n.bind(null,1618))).then(function(t){var n=t.ListDataSource;return new(e.managed(n))(e._pageContext)});this._getListDataSourceExtension=function(){return t};return t};t.prototype._getFieldCreationSchema=function(e,t,n){var r={Type:t,DisplayName:e,Title:e};n&&(r.StaticName=n);if(t===a.t.User||t===a.t.UserMulti){r.UserSelectionMode="1";r.UserSelectionScope=0}else t===a.t.DateTime&&(r.Format="DateOnly");t===a.t.UserMulti&&(r.Mult=!0);return r};t.prototype._saveTemplatesToView=function(e,t,n){for(var r=this,i=n.getDefaultContentTypeId(),s=n.getDefaultView(this.views.peek()),o=0,u=t;o<u.length;o++){var a=u[o].peek(),f=a.id,l=a.displayName.replace(/\.[^.]+$/,"");e.push({isUpload:!0,visible:!0,title:l,url:f,contentTypeId:i,templateId:l})}s.updateNewDocumentTemplates(n.prepareJsonForSaving(e));this.saveView({sourceView:s,updateViewXml:!0,viewParams:{}},!0).then(function(){r._newDocumentTemplates.valueHasMutated()})};t.prototype._getListDataSource=function(){return this.resources.consumeAsync(c.F)};t.dependencies=Object(r.__assign)(Object(r.__assign)({},s.default.dependencies),{pageContext:l.h,currentView:f.l,currentItem:f.o,itemUrlHelper:o.r,itemParentHelper:u.e,newDocumentTemplates:l.l.optional});return t})(s.default),m=Object(p.s)("ListProvider",v)},"2408":function(e,t,n){"use strict";n.d(t,"e",function(){return o});var r=n(123),i=n(83),s=n(217);function o(e){return function(t){var n=e.itemSetKey,o=e.internalName;return t(Object(r.e)(function(e){var t=e.demandItemFacet(i.e,n);return t&&s.e.serialize({listKey:{webAbsoluteUrl:t.webAbsoluteUrl,listFullUrl:t.listFullUrl},internalName:o})}))}}},"3319":function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1592),s=n(1585),o=n(54),u=n(1386),a=n(1390),f=n(31),l=n(95),c=n(1804),h=n(128),p=n(118),d=n(668),v=n(1673),m=n(3060),g=n(939),y=n(2408),b=n(1961),w=n(2346),E=(function(e){Object(r.__extends)(t,e);function t(t){var n=e.call(this,t)||this;n.name="ModifyShowInFiltersPane";n._showInFiltersPane=t.showInFiltersPane;n._column=t.column;n._listProvider=n.resources.consume(s.e);n._eventScope=n.resources.consume(h.n);n._smartFilters=n.resources.consume(b.e.optional);n._isFiltersPaneExpanded=n.resources.consume(a.resourceKey);n._isItemsScopeEnabled=n.resources.consume(g.h.lazy);if(n._isItemsScopeEnabled()){n._itemCacheStore=n.resources.consume(d.e);n._itemsScopeCurrentItemKey=n.resources.consume(v.e);n._gridEventSource=n._itemCacheStore.dispatch(w.e)}return n}t.prototype.onExecute=function(e,t){return this._modifyShowInFiltersPaneProperty().then(function(){return o.n.resolve({resultType:f.e.Success})},function(){return o.n.resolve({resultType:f.e.Failure})})};t.prototype.onIsAvailable=function(){var e=this.getParent(this.item(),"list"),t=e&&e.list.permissions;return!!(t&&t.manageLists&&this._column.filterable)&&(this._showInFiltersPane===p.t.Auto?this._column.showInFiltersPane===p.t.Pinned:this._column.showInFiltersPane!==this._showInFiltersPane)};t.prototype._getModifyFieldPropertiesPromiseFromItemCache=function(){var e,t,n=this._itemsScopeCurrentItemKey.peek();if(!n||!this._column.internalName)return o.n.resolve();var r=this._itemCacheStore.dispatch(Object(y.e)({itemSetKey:n,internalName:this._column.internalName}));if(!r)return o.n.resolve();var i=this._itemCacheStore.dispatch(Object(m.e)({items:(e={},e[n]={fields:(t={},t[r]={showInFiltersPane:this._showInFiltersPane},t)},e)}));return o.n.resolve(i)};t.prototype._modifyShowInFiltersPaneProperty=function(){var e=this,t={id:this._column.id,showInFiltersPane:this._showInFiltersPane};return(this._isItemsScopeEnabled()?this._getModifyFieldPropertiesPromiseFromItemCache():this._listProvider.modifyFieldProperties(t)).then(function(){if(e._isFiltersPaneExpanded.peek())e._eventScope&&l.t.raise(e._eventScope,c.t.showInFiltersPaneChanged,{fieldName:e._column.internalName,showInFiltersPane:e._showInFiltersPane});else if(e._smartFilters){e._smartFilters.updateShowInFiltersPaneProperty(e._column.internalName,e._showInFiltersPane,!0);var t=e.resources.consume(u.resourceKey);e._isFiltersPaneExpanded(!0);t(!1);e.resources.consume(h.e.columnCustomizationPane.isColumnCustomizationPaneExpanded)(!1)}e._gridEventSource&&l.t.raise(e._gridEventSource,c.t.showInFiltersPaneChanged,{fieldName:e._column.internalName,showInFiltersPane:e._showInFiltersPane})})};return t})(i.e);t.default=E}}]);