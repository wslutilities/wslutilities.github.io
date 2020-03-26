(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(t,s,e){"use strict";e.r(s);var a=e(28),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),e("p",[t._v("running the following to get started:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -o- https://raw.githubusercontent.com/wslutilities/wslu/develop/scripts/install.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),e("h2",{attrs:{id:"build-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-structure"}},[t._v("#")]),t._v(" Build Structure")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("wslu\n|-src\n|  |-mime/wslview: mime file for wslview\n|  |-etc\n|  |  |-wsl.ico: default icon for wslusc\n|  |  \\-runHidden.vbs: script for wslusc\n|  |-wslu-header: Header file of all script\n|  \\-<components>.sh: Components of script\n|-scripts: scripts used for building, installing and uninstalling\n|-tests: location for script tests\n\\-extras\n   |-bats: testing utility\n   \\-debian: stuff for \n")])])]),e("h2",{attrs:{id:"build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),e("p",[t._v("run "),e("code",[t._v("make")]),t._v(" to build executable to "),e("code",[t._v("out")]),t._v(" folder.\nrun "),e("code",[t._v("make clean")]),t._v(" to clean "),e("code",[t._v("out")]),t._v(" folder.\nrun "),e("code",[t._v("make test")]),t._v(" to run tests.")]),t._v(" "),e("h2",{attrs:{id:"test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" Test")]),t._v(" "),e("p",[e("code",[t._v("wslu")]),t._v(" use "),e("a",{attrs:{href:"https://github.com/bats-core/bats-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("bats"),e("OutboundLink")],1),t._v(" for testing. Please refer to "),e("a",{attrs:{href:"https://github.com/bats-core/bats-core#writing-tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("its guide"),e("OutboundLink")],1),t._v(" to write tests.")]),t._v(" "),e("h2",{attrs:{id:"build-packages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-packages"}},[t._v("#")]),t._v(" Build Packages")]),t._v(" "),e("p",[t._v("For Debian Package, run:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" script\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./builder-deb.sh\n")])])]),e("p",[t._v("For RPM Package, run:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" script\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./builder-rpm.sh\n")])])]),e("p",[t._v("It is suggested to do such action in Ubuntu 14.04 LTS or its corresponding environment.")])])}),[],!1,null,null,null);s.default=r.exports}}]);