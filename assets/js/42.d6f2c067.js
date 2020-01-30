(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{223:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"uninstall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uninstall","aria-hidden":"true"}},[t._v("#")]),t._v(" Uninstall")]),t._v(" "),s("h2",{attrs:{id:"how-to-uninstall-imunify360"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-uninstall-imunify360","aria-hidden":"true"}},[t._v("#")]),t._v(" How to uninstall Imunify360")]),t._v(" "),s("p",[t._v("To uninstall Imunify360, run:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("bash i360deploy.sh --uninstall\n")])])])]),t._v(" "),s("p",[t._v("If you have already deleted "),s("span",{staticClass:"notranslate"},[s("code",[t._v("i360deploy.sh")])]),t._v(" then download it by running:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wget http://repo.imunify360.cloudlinux.com/defence360/i360deploy.sh\n")])])])]),t._v(" "),s("p",[t._v("and proceed to the directory with the script.")]),t._v(" "),s("p",[t._v("For CloudLinux OS, please run the following commands:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/usr/sbin/cagefsctl  --force-update\n/usr/sbin/cagefsctl  --remount-all\n")])])])]),t._v(" "),s("p",[t._v("to remount "),s("span",{staticClass:"notranslate"},[t._v("CageFS")]),t._v(" and remove files from user's local directories as after uninstallation these files are not removed automatically and can generate errors to Apache log.")]),t._v(" "),s("h2",{attrs:{id:"how-to-stop-imunify360"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-stop-imunify360","aria-hidden":"true"}},[t._v("#")]),t._v(" How to stop Imunify360")]),t._v(" "),s("p",[t._v("For CentOS6/CloudLinux6, run the following command:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("service imunify360 stop\n")])])])]),t._v(" "),s("p",[t._v("For all other operating systems, run the following command:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("systemctl stop imunify360\n")])])])])])}],!1,null,null,null);a.default=n.exports}}]);