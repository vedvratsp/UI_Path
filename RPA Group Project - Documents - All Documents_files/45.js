(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([["45"],{"1618":function(e,t,n){"use strict";n.r(t);var r;(function(e){e[e.richClient=0]="richClient";e[e.browser=1]="browser"})(r||(r={}));var i=n(1957),s=n(102);n.d(t,"VisualizationAppTarget",function(){return r});n.d(t,"ListDataSource",function(){return i.e});n.d(t,"FieldType",function(){return s.e})},"1957":function(e,t,n){"use strict";var r=n(0),i=n(515),s=n(102),o=n(20),u=n(594),a=["AppendOnly","ClientSideComponentId","CommaSeparator","CustomFormatter","CustomUnitName","CustomUnitOnRight","DateFormat","Decimals","Description","DisplayName","EnforceUniqueValues","FieldRef","FillInChoice","FriendlyDisplayFormat","Format","Indexed","IsModern","IsolateStyles","IsRelationship","InternalName","LCID","List","Max","MaxLength","Min","Mult","Name","NumLines","Percentage","RelationshipDeleteBehavior","Required","RichText","RichTextMode","ShowField","StaticName","TimeFormat","Title","Type","Unit","UnlimitedLengthInDocumentLibrary","UserDisplayOptions","UserSelectionMode","UserSelectionScope"],f=["Choices","DefaultValue","DefaultFormula","Validation"],l=" {0}='{1}'",c="<{0}>{1}</{2}>",h="{0}{1}",p=(function(){function e(){var e=this;this._formatProperties={Field:{attributeKeys:a,childElementKeys:f,valueTransformer:function(t){return e.assembleChildElements("Field",t)}},Type:{valueTransformer:function(e){return s.e[e]}},DefaultValue:{nameOverride:"Default"},Choices:{nameOverride:"CHOICES",childElementKeys:["CHOICE"],valueTransformer:function(t){return e.assembleChildElements("Choices",{CHOICE:t},!0)}},Validation:{attributeKeys:["Message"],valueTransformer:function(e){return e.Formula}}}}e.prototype.getFieldSchemaXml=function(e){return this.makeElementSegment("Field",e)};e.prototype.assembleChildElements=function(e,t,n){var r=this;void 0===n&&(n=!1);for(var i="",s=this._formatProperties[e].childElementKeys.filter(function(e){return void 0!==t[e]}),o=function(e){Array.isArray(t[e])&&n?t[e].forEach(function(t){return i+=r.makeElementSegment(e,t)}):i+=u.makeElementSegment(e,t[e])},u=this,a=0,f=s;a<f.length;a++){o(f[a])}return i};e.prototype.assembleAttributes=function(e,t){for(var n="",r=0,i=this._formatProperties[e].attributeKeys.filter(function(e){return void 0!==t[e]});r<i.length;r++){var s=i[r];n+=this.makeAttributeSegment(s,t[s])}return o.format(h,this.getName(e),n)};e.prototype.makeElementSegment=function(e,t){var n=this.getValue(e,t),r=this.getName(e,t),i=this.getName(e);return n||r!==i?o.format(c,r,n,i):""};e.prototype.makeAttributeSegment=function(e,t){var n=this.getValue(e,t),r=this.getName(e);return n?o.format(l,r,n):""};e.prototype.getName=function(e,t){var n=this._formatProperties[e];return n&&n.attributeKeys&&t?this.assembleAttributes(e,t):n&&n.nameOverride?n.nameOverride:e};e.prototype.getValue=function(e,t){var n=this._formatProperties[e],r=n&&n.valueTransformer?n.valueTransformer(t):t;return n&&n.childElementKeys?r:this.formatValue(r)};e.prototype.formatValue=function(e){return"boolean"==typeof e?e.toString().toUpperCase():"string"==typeof e&&e?u.e.encodeText(e):"number"==typeof e?e.toString():null};return e})(),d=n(325),v=n(670),m=n(73),g=n(1629),y=n(1635),b=n(55),w=n(77),E=n(63);n.d(t,"e",function(){return S});var S=(function(e){Object(r.__extends)(t,e);function t(t,n){var r=e.call(this,{},{pageContext:t})||this;r._getValidationFormula=function(e){var t=r._parser.parseFromString(e.SchemaXml,"text/xml");return t.getElementsByTagName("Validation").length>0?t.getElementsByTagName("Validation")[0].innerHTML:e.ValidationFormula};r._fieldSchemaXmlHelper=new p;r._itemUrlHelper=new d.e({},{pageContext:t});r._apiUrlHelper=new v.e({},{pageContext:t,itemUrlHelper:r._itemUrlHelper});r._parser=new DOMParser;if(r._isMMDListFeatureEnabled()){r._getIdentityDSToken=n;r._tokenProvider=new g.e(null,{oAuthTokenDataSource:new y.e(t)})}return r}t.prototype.createField=function(e,t,n){return this.createAndGetField(e,t,n).then(function(e){return e.InternalName})};t.prototype.createAndGetField=function(e,t,n){var r=this;e&&(e.IsModern=!0);var i={parameters:{__metadata:{type:"SP.XmlSchemaFieldCreationInformation"},SchemaXml:this._fieldSchemaXmlHelper.getFieldSchemaXml(e),Options:n}};return this.getData(function(){return r._getListApiUrl(t).segment("Fields").segment("CreateFieldAsXml").toString()},function(e){var t=JSON.parse(e);return t&&t.d},"CreateField",function(){return JSON.stringify(i)},"POST")};t.prototype.createColumn=function(e){var t=this,n=Object(m.r)(this._pageContext);return this._getOAuthToken(n).then(function(n){return t.dataRequestor.getData({url:t._getListFieldsApiUrl(),authToken:n,qosName:"CreateListTypeColumn",method:"POST",contentType:"application/json",additionalHeaders:{accept:"application/json"},additionalPostData:JSON.stringify(e),parseResponse:function(e){return JSON.parse(e)},noRedirect:!0})})};t.prototype.editColumn=function(e,t){var n=this,r=Object(m.r)(this._pageContext);return this._getOAuthToken(r).then(function(r){return n.dataRequestor.getData({url:n._getListFieldsApiUrl()+"/"+e,authToken:r,qosName:"EditListColumn",method:"PATCH",contentType:"application/json",additionalHeaders:{accept:"application/json"},additionalPostData:JSON.stringify(t),parseResponse:function(e){return JSON.parse(e)},noRedirect:!0})})};t.prototype.getFields=function(e,t){var n=this._getListApiUrl(e).segment("Fields").oDataParameter("$select","Id,InternalName,StaticName,Hidden,Required,Title,TypeAsString,FromBaseType");if(t){var r=t.orderby,i=t.filters;(i=i&&i.trim())&&(n=n.oDataParameter("$filter",i));r&&(n=n.oDataParameter("$orderby",r))}return this.getData(function(){return n.toString()},function(e){return JSON.parse(e).d.results.map(function(e){return{id:e.Id,type:e.TypeAsString,fromBaseType:e.FromBaseType,internalName:e.InternalName,isHidden:e.Hidden,isRequired:e.Required,staticName:e.StaticName,title:e.Title}})},"GetFields",null,"GET")};t.prototype.getField=function(e,t){var n=this;return this.getData(function(){return n._getListApiUrl(t).segment("Fields").method("GetByInternalNameOrTitle",e).toString()},function(e){var t=JSON.parse(e),r=t&&t.d;r&&r.ValidationFormula&&(r.ValidationFormula=n._getValidationFormula(r));return r},"GetField",null,"GET")};t.prototype.editField=function(e,t,n){var r=this;t&&(t.IsModern=!0);var i={__metadata:{type:"SP.Field"},SchemaXml:this._fieldSchemaXmlHelper.getFieldSchemaXml(t),Title:t.Title,Description:t.Description};return this.getData(function(){return r._getListApiUrl(n).segment("Fields").method("GetByInternalNameOrTitle",e).toString()},function(e){return e},"EditField",function(){return JSON.stringify(i)},"MERGE")};t.prototype.deleteField=function(e,t){var n=this;return this.getData(function(){return n._getListApiUrl().segment("Fields").method("GetByInternalNameOrTitle",e).segment("DeleteObject").toString()},function(e){return e},"DeleteField",null,"POST")};t.prototype.getCurrencyList=function(){var e=this;return this.getData(function(){return e._pageContext.webAbsoluteUrl+"/_api/SP.CurrencyList.GetList"},function(e){return JSON.parse(e).d.GetList.Items.results},"SP.CurrencyList.GetList",null,"POST")};t.prototype.getRegionalDateTimeSchema=function(){var e=this;return this.getData(function(){return e._pageContext.webAbsoluteUrl+"/_api/web/GetRegionalDateTimeSchema"},function(e){var t=JSON.parse(e);return JSON.parse(t.d.GetRegionalDateTimeSchema)},"GetRegionalDateTimeSchema",null,"POST")};t.prototype.getAllSitesLists=function(){var e=this;return this.getData(function(){return encodeURI(o.format("{0}/_api/v2.1/sites/{1},{2}/lists?$select=system,id,name,displayName,list",Object(m.r)(e._pageContext),e._pageContext.siteId,e._pageContext.webId))},function(e){try{return JSON.parse(e).value}catch(e){return[]}},"GetAllSitesLists",null,"GET")};t.prototype.parseDateTime=function(e,t,n){var r=this,i={value:e,displayFormat:t,calendarType:n};return this.getData(function(){return r._pageContext.webAbsoluteUrl+"/_api/web/ParseDateTime"},function(e){var t=JSON.parse(e);return JSON.parse(t.d.ParseDateTime)},"ParseDateTime",function(){return JSON.stringify(i)},"POST")};t.prototype.setFieldPropertyValueAsString=function(e,t,n,r){var i=this,s={__metadata:{type:"SP.Field"}};s[t]=n;return this.getData(function(){return i._getListApiUrl(r).segment("Fields").method("GetByInternalNameOrTitle",e).toString()},function(e){return e},"setFieldPropertyValueAsString",function(){return JSON.stringify(s)},"MERGE")};t.prototype.getApprovalFlowSettings=function(e){var t=this;return this.getData(function(){return t._getListApiUrl(e).toString()+"&$select=EnableModeration,EnableRequestSignOff"},function(e){var t=JSON.parse(e).d;return{enableContentApproval:t.EnableModeration,enableRequestSignOff:t.EnableRequestSignOff}},"GetContentApproval",function(){return JSON.stringify({})},"POST")};t.prototype.setApprovalFlowSettings=function(e,t){var n=this,r={__metadata:{type:"SP.List"}};if(e){r.EnableModeration=e.enableContentApproval;r.EnableRequestSignOff=e.enableRequestSignOff}return this.getData(function(){return n._getListApiUrl(t).toString()},function(e){return null},"SetContentApproval",function(){return JSON.stringify(r)},"POST",{"IF-MATCH":"*","X-HTTP-Method":"MERGE"})};t.prototype._isMMDListFeatureEnabled=function(){return b.n.isFeatureEnabled({ODB:1786})};t.prototype._getListApiUrl=function(e){var t=this._itemUrlHelper.getUrlParts({path:e||this._pageContext.listUrl,listUrl:e||this._pageContext.listUrl});return this._apiUrlHelper.build().webByItemUrl(t).method("GetList",t.serverRelativeListUrl)};t.prototype._getListFieldsApiUrl=function(){var e=this._getBaseSiteUrl(),t=w.e.normalizeLower(this._pageContext.listId,!1);return encodeURI(o.format("{0}/lists/{1}/columns",e,t))};t.prototype._getBaseSiteUrl=function(e){var t=this._getAPIBaseUrl(e);return t+"/sites/"+new E.t(t).getAuthority()+","+w.e.normalizeLower(this._pageContext.siteId,!1)+","+w.e.normalizeLower(this._pageContext.webId,!1)};t.prototype._getAPIBaseUrl=function(e){return Object(m.r)(this._pageContext)+"/_api/v"+(e=e||"2.1")};t.prototype._getOAuthToken=function(e){return void 0===this._getIdentityDSToken?this._tokenProvider.getToken(e):this._getIdentityDSToken()};return t})(i.t)}}]);