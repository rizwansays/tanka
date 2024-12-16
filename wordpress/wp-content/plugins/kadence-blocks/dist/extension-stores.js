(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=window.wp.data,r=window.lodash,n={previewDevice:"Desktop",uniqueIDs:{},uniquePanes:{},webFonts:{},imagePickerQuery:"",imagePickerSelection:0,imagePickerMultiSelection:[],imagePickerResults:{},imagePickerDownloadedImages:[]},i={*setPreviewDeviceType(e){if(!(yield{type:"SET_PREVIEW_DEVICE_TYPE_FOR_CORE",deviceType:e}))return{type:"SET_PREVIEW_DEVICE_TYPE",deviceType:e}},*toggleEditorPanelOpened(e,t){return{type:"TOGGLE_EDITOR_PANEL_OPENED",panelName:e,defaultValue:t}},*switchEditorTabOpened(e,t){return{type:"SWITCH_EDITOR_TAB_OPENED",tabName:e,key:t}},addUniqueID:(e,t)=>({type:"ADD_UNIQUE_ID",uniqueID:e,clientID:t}),addUniquePane:(e,t,r)=>({type:"ADD_UNIQUE_PANE",uniqueID:e,clientID:t,rootID:r}),addWebFont:(e,t)=>({type:"ADD_WEBFONT",font:e,frame:t}),setImagePickerQuery:e=>({type:"SET_IMAGE_PICKER_QUERY",query:e}),setImagePickerSelection:e=>({type:"SET_IMAGE_PICKER_SELECTION",index:e}),setImagePickerMultiSelection:e=>({type:"SET_IMAGE_PICKER_MULTI_SELECTION",selection:e}),setImagePickerResults:e=>({type:"SET_IMAGE_PICKER_RESULTS",results:e}),setImagePickerDownloadedImages:e=>({type:"SET_IMAGE_PICKER_DOWNLOADED_IMAGES",images:e})},s={SET_PREVIEW_DEVICE_TYPE_FOR_CORE:(0,t.createRegistryControl)((e=>function({deviceType:t}){const r=e.dispatch("core/edit-post");if(r)return r.__experimentalSetPreviewDeviceType(t),!0;const n=e.dispatch("core/edit-site");return!!n&&(n.__experimentalSetPreviewDeviceType(t),!0)}))},o=(0,t.createRegistrySelector)((e=>t=>{const r=e("core/edit-post");if(r)return r.__experimentalGetPreviewDeviceType();const n=e("core/edit-site");return n?n.__experimentalGetPreviewDeviceType():t.previewDevice})),a=(0,t.createReduxStore)("kadenceblocks/data",{reducer(e=n,t){switch(t.type){case"TOGGLE_EDITOR_PANEL_OPENED":const{panelName:n,defaultValue:i}=t,s=!0===e[n]||(0,r.get)(e,["editorPanels",n,"opened"],i);return{...e,editorPanels:{...e.editorPanels,[n]:{...e[n],opened:!s}}};case"SWITCH_EDITOR_TAB_OPENED":const{tabName:o,key:a}=t;return{...e,editorTabs:{...e.editorPanels,[o]:a}};case"SET_PREVIEW_DEVICE_TYPE":return{...e,previewDevice:t.deviceType};case"ADD_UNIQUE_ID":const c=e.uniqueIDs;return Object.assign(c,{[t.uniqueID]:t.clientID}),{...e,uniqueIDs:c};case"ADD_UNIQUE_PANE":const u=e.uniquePanes;return u.hasOwnProperty(t.rootID)?Object.assign(u[t.rootID],{[t.uniqueID.toString()]:t.clientID}):(u[t.rootID]={},Object.assign(u[t.rootID],{[t.uniqueID.toString()]:t.clientID})),{...e,uniquePanes:u};case"ADD_WEBFONT":const E=e.webFonts;return E.hasOwnProperty(t.frame)?Object.assign(E[t.frame],{[t.font.toString()]:"loaded"}):(E[t.frame]={},Object.assign(E[t.frame],{[t.font.toString()]:"loaded"})),{...e,webFonts:E};case"SET_IMAGE_PICKER_QUERY":return{...e,imagePickerQuery:t.query};case"SET_IMAGE_PICKER_SELECTION":return{...e,imagePickerSelection:t.index};case"SET_IMAGE_PICKER_MULTI_SELECTION":return{...e,imagePickerMultiSelection:t.selection};case"SET_IMAGE_PICKER_RESULTS":return{...e,imagePickerResults:t.results};case"SET_IMAGE_PICKER_DOWNLOADED_IMAGES":return{...e,imagePickerDownloadedImages:t.images};default:return e}},actions:i,controls:s,selectors:{getPreviewDeviceType:o,getUniqueIDs(e){const{uniqueIDs:t}=e;return t},isUniqueID(e,t){const{uniqueIDs:r}=e;let n=!0;return r.hasOwnProperty(t)&&(n=!1),n},isUniqueBlock(e,t,r){const{uniqueIDs:n}=e;let i=!1;return n.hasOwnProperty(t)&&n[t]===r&&(i=!0),i},isUniquePane(e,t,r){const{uniquePanes:n}=e;let i=!0;return n.hasOwnProperty(r)&&n[r].hasOwnProperty(t.toString())&&(i=!1),i},isUniquePaneBlock(e,t,r,n){const{uniquePanes:i}=e;let s=!1;return i.hasOwnProperty(n)&&i[n].hasOwnProperty(t.toString())&&i[n][t.toString()]===r&&(s=!0),s},isUniqueFont(e,t,r){const{webFonts:n}=e;let i=!0;return n.hasOwnProperty(r)&&n[r].hasOwnProperty(t.toString())&&(i=!1),i},isEditorPanelOpened(e,t,n){const i=(0,r.get)(e,["editorPanels"],{});return!0===(0,r.get)(i,[t])||!0===(0,r.get)(i,[t,"opened"],n)},getOpenSidebarTabKey(e,t,n){const i=(0,r.get)(e,["editorTabs"],{});return(0,r.get)(i,[t],n)},getImagePickerQuery(e){const{imagePickerQuery:t}=e;return t},getImagePickerSelection(e){const{imagePickerSelection:t}=e;return t},getImagePickerMultiSelection(e){const{imagePickerMultiSelection:t}=e;return t},getImagePickerResults(e){const{imagePickerResults:t}=e;return t},getImagePickerDownloadedImages(e){const{imagePickerDownloadedImages:t}=e;return t}}});(0,t.register)(a),(this.kadence=this.kadence||{})["extension-stores"]=e})();