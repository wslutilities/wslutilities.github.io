(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{380:function(e,t,s){"use strict";s.r(t);var r=s(44),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"contributing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),s("p",[e._v("We love pull requests from everyone. By participating in this project, you agree to abide by "),s("RouterLink",{attrs:{to:"/zh-TW/CODE_OF_CONDUCT.html"}},[e._v("Code of Conduct")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"code-contributions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-contributions"}},[e._v("#")]),e._v(" Code contributions")]),e._v(" "),s("h3",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),s("p",[e._v("Run the following to get started:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone --recursive --branch dev/master https://github.com/wslutilities/wslu.git\n./configure.sh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" res_install\n")])])]),s("h3",{attrs:{id:"structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("wslu\n|-src\n|  |-etc\n|  |  |-wslview.desktop: XDG-style app definition for wslview\n|  |  |-wsl.ico: legacy default icon for wslusc\n|  |  |-wsl-gui.ico: default icon for wslusc GUI shortcut\n|  |  |-wsl-term.ico: default icon for wslusc cli shortcut\n|  |  |-sudo.ps1: helper script for wslgsu\n|  |  |-get_dpi.ps1: helper script for dpi function in wslsys\n|  |  |-wslsc-helper.sh: helper script for wslusc on WSL side\n|  |  \\-runHidden.vbs: helper script for wslusc on Windows side\n|  |-wslu-header: Header file of all script\n|  \\-<components>.sh: Components of script\n|-tests: location for script tests\n\\-extras\n   |-bats: testing utility\n   |-scripts: scripts\n   \\-build\n      |-debian: files for building .deb\n      |-rpm: files for building .rpm\n      |-fedora: files for building Fedora versions of .rpm (4+)\n      |-arch: files for building Arch Linux packages\n      \\-alpine: files for building Alpine Linux packages\n")])])]),s("h3",{attrs:{id:"configure-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-sh"}},[e._v("#")]),e._v(" configure.sh")]),e._v(" "),s("p",[s("code",[e._v("configure.sh")]),e._v(" is the script to complete some preprocessing task for both developing and packaging building.")]),e._v(" "),s("p",[e._v("Following parameter is available for developing:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("-e, --env")]),e._v(" -- Environment Check, check whether it is using Fake WSL Environment, normal Linux or WSL.")]),e._v(" "),s("li",[s("code",[e._v("-p, --prsh")]),e._v(" -- Check Status of "),s("code",[e._v("powershell.exe")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("-P, --pkg")]),e._v(" -- Install Needed Packages required by your system for building.")])]),e._v(" "),s("p",[e._v("Following parameter is available for package building:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("--build")]),e._v(" -- helper to add the version to wslu header.")]),e._v(" "),s("li",[s("code",[e._v("--deb <distro>")]),e._v(" -- preprocessing script for deb packages."),s("code",[e._v("<distro>")]),e._v(" should be version code name like "),s("code",[e._v("bionic")]),e._v(", "),s("code",[e._v("stable")]),e._v(", "),s("code",[e._v("kali-rolling")]),e._v(" or "),s("code",[e._v("buster")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("--rpm")]),e._v(" -- preprocessing script for rpm packages.")])]),e._v(" "),s("h3",{attrs:{id:"build-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-install"}},[e._v("#")]),e._v(" Build & Install")]),e._v(" "),s("p",[e._v("run "),s("code",[e._v("make")]),e._v(" to build executables to "),s("code",[e._v("out")]),e._v(" folder and manages to "),s("code",[e._v("out-docs")]),e._v(" folder.\nrun "),s("code",[e._v("make doc")]),e._v(" to build manpage only.\nrun "),s("code",[e._v("make clean")]),e._v(" to remove "),s("code",[e._v("out")]),e._v(" and "),s("code",[e._v("out-docs")]),e._v(" folder.\nrun "),s("code",[e._v("make test")]),e._v(" to run tests.\nrun "),s("code",[e._v("make install")]),e._v(" to install.\nrun "),s("code",[e._v("make res_install")]),e._v(" to install just resources.\nrun "),s("code",[e._v("make uninstall")]),e._v(" to uninstall.\nrun "),s("code",[e._v("cd extras/scripts && ./builder-docs.sh")]),e._v(" to build docs to "),s("code",[e._v("gendocs")]),e._v(".")]),e._v(" "),s("p",[e._v("Pass necessary environment variables if necessary. The default installation is in "),s("code",[e._v("/usr")]),e._v(" folder:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("DESTDIR")]),e._v(": You can change the destination installation folder. It is empty by default.")]),e._v(" "),s("li",[s("code",[e._v("PREFIX")]),e._v(": You can change the prefix for where to install. It is "),s("code",[e._v("/usr")]),e._v(" by default.")])]),e._v(" "),s("h3",{attrs:{id:"test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[e._v("#")]),e._v(" Test")]),e._v(" "),s("p",[s("code",[e._v("wslu")]),e._v(" use "),s("a",{attrs:{href:"https://github.com/bats-core/bats-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("bats"),s("OutboundLink")],1),e._v(" for testing. Please refer to "),s("a",{attrs:{href:"https://github.com/bats-core/bats-core#writing-tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("its guide"),s("OutboundLink")],1),e._v(" to write tests.")]),e._v(" "),s("h3",{attrs:{id:"push-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#push-requests"}},[e._v("#")]),e._v(" Push Requests")]),e._v(" "),s("p",[e._v("Make sure that the codes changed are tested.")]),e._v(" "),s("p",[e._v("Then create Pull requests "),s("a",{attrs:{href:"https://github.com/wslutilities/wslu/compare",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"financial-contributions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#financial-contributions"}},[e._v("#")]),e._v(" Financial contributions")]),e._v(" "),s("p",[e._v("We also welcome financial contributions in full transparency on our "),s("a",{attrs:{href:"https://opencollective.com/wslu",target:"_blank",rel:"noopener noreferrer"}},[e._v("open collective"),s("OutboundLink")],1),e._v('.\nAnyone can file an expense. If the expense makes sense for the development of the community, it will be "merged" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed.')]),e._v(" "),s("h3",{attrs:{id:"contributors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[e._v("#")]),e._v(" Contributors")]),e._v(" "),s("p",[e._v("Thank you to all the people who have already contributed to wslu!\n"),s("a",{attrs:{href:"graphs/contributors"}},[s("img",{attrs:{src:"https://opencollective.com/wslu/contributors.svg?width=890"}})])]),e._v(" "),s("h3",{attrs:{id:"backers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backers"}},[e._v("#")]),e._v(" Backers")]),e._v(" "),s("p",[e._v("Thank you to all our backers! ["),s("a",{attrs:{href:"https://opencollective.com/wslu#backer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Become a backer"),s("OutboundLink")],1),e._v("]")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://opencollective.com/wslu#backers",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/wslu/backers.svg?width=890"}})])]),e._v(" "),s("h3",{attrs:{id:"sponsors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sponsors"}},[e._v("#")]),e._v(" Sponsors")]),e._v(" "),s("p",[e._v("Thank you to all our sponsors! (please ask your company to also support this open source project by "),s("a",{attrs:{href:"https://opencollective.com/wslu#sponsor",target:"_blank",rel:"noopener noreferrer"}},[e._v("becoming a sponsor"),s("OutboundLink")],1),e._v(")")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://opencollective.com/wslu/sponsor/0/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/wslu/sponsor/0/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/wslu/sponsor/1/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/wslu/sponsor/1/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/wslu/sponsor/2/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/wslu/sponsor/2/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/wslu/sponsor/3/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/wslu/sponsor/3/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/wslu/sponsor/4/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/wslu/sponsor/4/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/wslu/sponsor/5/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/wslu/sponsor/5/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/wslu/sponsor/6/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/wslu/sponsor/6/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/wslu/sponsor/7/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/wslu/sponsor/7/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/wslu/sponsor/8/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/wslu/sponsor/8/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/wslu/sponsor/9/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/wslu/sponsor/9/avatar.svg"}})])])])}),[],!1,null,null,null);t.default=o.exports}}]);