import{o as a,c as l,r as V,a as e,p as x,b as y,d as p,e as m,t as g,f as d,F as z,g as j,h as k,i as w,w as $,j as v,k as Y}from"./vendor.e48db287.js";const E=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};E();var r=(s,o)=>{const i=s.__vccOpts||s;for(const[c,t]of o)i[c]=t;return i};const G={},J={class:"bg-championGreen relative"};function K(s,o){return a(),l("div",J,[V(s.$slots,"default")])}var R=r(G,[["render",K]]),L="/vue-swietone-vite/assets/waves.99398f1b.svg";const Z={data(){return{waves:L}}},q=s=>(x("data-v-75329526"),s=s(),y(),s),U={class:"min-h-screen flex justify-center items-center relative",id:"home"},Q=q(()=>e("div",{class:"p-6 text-center"},[e("h1",{class:"text-white text-3xl font-serif xxs:text-xl"},[p(" Modernizacja strony "),e("br"),p(" internetowej lub brandingu? ")]),e("h2",{class:"text-white text-lg font-sans font-light mt-2 mb-6"},"A mo\u017Ce jeszcze nie masz strony?"),e("a",{class:"text-white text-md font-serif p-1",href:"#"},"brzmi nie\u017Ale.")],-1)),X={class:"w-full waves absolute bottom-16 overflow-hidden"},ee=["src"],te={class:"w-full waves absolute bottom-2 overflow-hidden"},se=["src"];function oe(s,o,i,c,t,n){return a(),l("section",U,[Q,e("div",X,[e("img",{src:t.waves,alt:"wave-svg",class:"overflow-hidden"},null,8,ee)]),e("div",te,[e("img",{src:t.waves,alt:"wave-svg",class:"overflow-hidden"},null,8,se)])])}var ie=r(Z,[["render",oe],["__scopeId","data-v-75329526"]]),C="/vue-swietone-vite/assets/swietone-main-logo.611e3fc4.svg",ne="/vue-swietone-vite/assets/swietone-horizontal-logo.ee11b89e.svg";const ae={data(){return{swietoneMainLogo:C,swietoneHorizontalLogo:ne}}},ce={class:"px-6 py-10 flex justify-between items-center bg-transparent absolute w-screen z-10"},le={class:"max-w-[115px] md:max-w-[150px]"},re=["src"],de=m('<div class="menu-kebab"><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div></div>',1),_e=[de];function ve(s,o,i,c,t,n){return a(),l("header",null,[e("nav",ce,[e("div",le,[e("img",{class:"max-w-[100%]",src:t.swietoneHorizontalLogo,alt:"swietone-main-logo"},null,8,re)]),e("div",{class:"menu",onClick:o[0]||(o[0]=_=>s.$emit("toggleMenu",!0))},_e)])])}var ue=r(ae,[["render",ve]]),pe="/vue-swietone-vite/assets/mobile-divider.d3fb8589.svg",I="/vue-swietone-vite/assets/divider.11c889fd.svg",S="/vue-swietone-vite/assets/linkedin-icon.68d69692.svg",M="/vue-swietone-vite/assets/git-icon.0b904c0d.svg",P="/vue-swietone-vite/assets/behance-icon.e159dbf2.svg";const me={data(){return{divider:I,linkedInIcon:S,gitIcon:M,behanceIcon:P,mobileDivider:pe}}},O=s=>(x("data-v-d91e1704"),s=s(),y(),s),he={class:"min-h-screen text-center flex justify-center items-center relative"},we={class:"px-6 py-4 leading-8 text-white font-serif text-2xl"},fe=m('<div class="options" data-v-d91e1704><ul class="leading-relaxed" data-v-d91e1704><li data-v-d91e1704><a href="#about" data-v-d91e1704>Misja</a></li><li data-v-d91e1704><a href="#swietone" data-v-d91e1704>O swietone</a></li><li data-v-d91e1704><a href="#bio" data-v-d91e1704>O mnie</a></li><li data-v-d91e1704><a href="#" data-v-d91e1704>Portfolio</a></li><li data-v-d91e1704><a href="#branding" data-v-d91e1704>Branding</a></li><li data-v-d91e1704><a href="#footer" data-v-d91e1704> Wsp\xF3\u0142praca</a></li></ul></div>',1),ge={class:"my-4 w-max"},xe=["src"],ye=O(()=>e("div",null,[e("h1",{class:"text-3xl"},"Kontakt"),e("a",{class:"block font-sans font-hairline text-lg",href:"mailto:czarnocki.w@wp.pl"},"czarnocki.w@wp.pl"),e("a",{class:"block font-sans font-hairline text-lg",href:"mailto:czarnocki.w@wp.pl"},"kontakt@swietone.pl")],-1)),be={class:"my-4 text-2xl"},$e=O(()=>e("h2",null,"Media",-1)),ze={class:"flex justify-center items-center"},je={href:"https://www.linkedin.com/in/wojciechczarnocki/",target:"_blank"},ke=["src"],Le={href:"https://github.com/caren1",target:"_blank"},Ce=["src"],Ie={href:"https://www.behance.net/wojtczarny",target:"_blank"},Se=["src"],Me=m('<div class="menu-kebab" data-v-d91e1704><div class="circle" data-v-d91e1704></div><div class="circle" data-v-d91e1704></div><div class="circle" data-v-d91e1704></div><div class="circle" data-v-d91e1704></div><div class="circle" data-v-d91e1704></div></div>',1),Pe=[Me];function Oe(s,o,i,c,t,n){return a(),l("div",he,[e("div",we,[fe,e("div",ge,[e("img",{src:t.mobileDivider,alt:"divider-svg",class:"w-100"},null,8,xe)]),e("div",null,[ye,e("div",be,[$e,e("div",ze,[e("a",je,[e("img",{class:"p-2 w-8",src:t.linkedInIcon,alt:"linkedin-icon"},null,8,ke)]),e("a",Le,[e("img",{class:"p-2 w-8",src:t.gitIcon,alt:"github-icon"},null,8,Ce)]),e("a",Ie,[e("img",{class:"p-2 w-8",src:t.behanceIcon,alt:"behance-icon"},null,8,Se)])])])])]),e("div",{class:"absolute top-6 right-10",onClick:o[0]||(o[0]=_=>s.$emit("toggleMenu",!1))},Pe)])}var Ne=r(me,[["render",Oe],["__scopeId","data-v-d91e1704"]]);const Fe={data(){return{swietoneMainLogo:C}}},Be={class:"md:hidden min-h-screen flex justify-center items-center",id:"intro"},Ae=["src"];function He(s,o,i,c,t,n){return a(),l("section",Be,[e("img",{src:t.swietoneMainLogo,alt:"swietone-main-logo"},null,8,Ae)])}var We=r(Fe,[["render",He]]),De="/vue-swietone-vite/assets/big-cloud.c98f8aa6.svg";const Te={data(){return{waves:L,bigCloud:De}}},Ve={class:"min-h-screen flex justify-center items-center relative",id:"about"},Ye=m('<div class="w-full absolute top-0" data-v-5ff82576></div><div class="about-info" data-v-5ff82576><div class="faded-circle" data-v-5ff82576></div><div class="" data-v-5ff82576><h1 class="text-white text-center text-xl font-serif mb-4" data-v-5ff82576>Co mo\u017Cemy dla Ciebie zrobi\u0107?</h1><ul class="leading-[40px] xxs:leading-[40px] px-6 py-6 text-white text-[15px] font-sans font-light ml-[0.75rem] xxs:text-sm" data-v-5ff82576><li data-v-5ff82576>stworzy\u0107 nowoczesn\u0105 stron\u0119 internetow\u0105</li><li data-v-5ff82576>przygotowa\u0107 dla niej unikalny szablon</li><li data-v-5ff82576>zoptymalizowa\u0107 j\u0105 pod przegl\u0105darki</li><li data-v-5ff82576>zadba\u0107 o odpowiedni User Experience</li><li data-v-5ff82576>zaprojektowa\u0107 branding</li><li data-v-5ff82576>od\u015Bwie\u017Cy\u0107 wizerunek twojej dzia\u0142alno\u015Bci</li><li data-v-5ff82576>zmodernizowa\u0107 twoj\u0105 istniej\u0105c\u0105 stron\u0119</li><p class="mt-10 text-right text-sm" data-v-5ff82576>Chyba, \u017Ce potrzebujesz czego\u015B wi\u0119cej?</p></ul></div></div>',2),Ee={class:"flex absolute -bottom-2 z-1 max-w-[55%] md:max-w-[50%] right-0 fixed overflow-hidden"},Ge=["src"];function Je(s,o,i,c,t,n){return a(),l("section",Ve,[Ye,e("div",Ee,[e("img",{src:t.bigCloud,alt:"bigCloud-svg",class:"w-100 overflow-hidden relative -right-8"},null,8,Ge)])])}var Ke=r(Te,[["render",Je],["__scopeId","data-v-5ff82576"]]),Re="/vue-swietone-vite/assets/small-cloud.30f72a1d.svg";const Ze={data(){return{smallCloud:Re}}},qe={class:"min-h-screen flex justify-center items-center text-center p-8",id:"swietone"},Ue={class:""},Qe=e("div",null,[e("h2",{class:"font-serif font-light text-white text-2xl mb-4"},[p("Czym jest "),e("span",{class:"text-croissantYellow"},"swietone"),p("?")]),e("p",{class:"font-sans font-light text-white text-sm"},"Miejscem, w kt\xF3rym wykorzystuje si\u0119 kreatywno\u015B\u0107, aby tworzy\u0107 i budowa\u0107 innowacyjne, minimalistyczne i pi\u0119kne rzeczy.")],-1),Xe={class:"font-sans my-8 text-white font-light text-sm xxs:text-xs"},et={class:"max-w-[110px] m-auto flex-col justify-center items-center"},tt={class:"flex items-center cloudy"},st=["src"],ot=e("span",{class:"ml-2"},"Kontakt",-1),it={class:"flex items-center cloudy"},nt=["src"],at=e("span",{class:"ml-2"},"Szczeg\xF3\u0142y",-1),ct={class:"flex items-center cloudy"},lt=["src"],rt=e("span",{class:"ml-2"},"Formalno\u015Bci",-1),dt={class:"flex items-center cloudy"},_t=["src"],vt=e("span",{class:"ml-2"},"Realizacja",-1),ut={class:"flex items-center cloudy"},pt=["src"],mt=e("span",{class:"ml-2"},"Weryfikacja",-1),ht={class:"flex items-center cloudy"},wt=["src"],ft=e("span",{class:"ml-2"},"Finalizacja",-1),gt={class:"flex items-center cloudy"},xt=["src"],yt=e("span",{class:"ml-2"},"Moderacja",-1),bt=e("div",{class:"font-sans font-hairline text-white text-sm"},[e("p",{class:"mb-4"},"Tym co cenimy sobie najbardziej przy wsp\xF3\u0142pracy z klientem jest czysta, jasna i otwarta komunikacja oraz precyzja, terminowo\u015B\u0107 i satysfakcja zleceniodawcy."),e("p",null,"Z tego powodu wszystkie us\u0142ugi obj\u0119te s\u0105 30 dniow\u0105 gwarancj\u0105, kt\xF3ra obejmuje dodatkowe modyfikacje i poprawki. Dodatkowo, z naszej strony mo\u017Cemy zagwarantowa\u0107 w pe\u0142ni indywidualn\u0105 oraz profesjonaln\u0105 realizacj\u0119 wymaga\u0144 klienta.")],-1);function $t(s,o,i,c,t,n){return a(),l("section",qe,[e("div",Ue,[Qe,e("div",Xe,[e("div",et,[e("div",tt,[e("img",{src:t.smallCloud,alt:"small-cloud-svg",class:"opacity-10 max-w-[40px]"},null,8,st),ot]),e("div",it,[e("img",{src:t.smallCloud,alt:"small-cloud-svg",class:"opacity-30 max-w-[40px]"},null,8,nt),at]),e("div",ct,[e("img",{src:t.smallCloud,alt:"small-cloud-svg",class:"opacity-50 max-w-[40px]"},null,8,lt),rt]),e("div",dt,[e("img",{src:t.smallCloud,alt:"small-cloud-svg",class:"opacity-70 max-w-[40px]"},null,8,_t),vt]),e("div",ut,[e("img",{src:t.smallCloud,alt:"small-cloud-svg",class:"opacity-80 max-w-[40px]"},null,8,pt),mt]),e("div",ht,[e("img",{src:t.smallCloud,alt:"small-cloud-svg",class:"opacity-90 max-w-[40px]"},null,8,wt),ft]),e("div",gt,[e("img",{src:t.smallCloud,alt:"small-cloud-svg",class:"opacity-100 max-w-[40px]"},null,8,xt),yt])])]),bt])])}var zt=r(Ze,[["render",$t]]),jt="/vue-swietone-vite/assets/me.47f07628.svg";const kt={data(){return{linkedInIcon:S,gitIcon:M,behanceIcon:P,selfPortrait:jt}}},Lt={id:"bio"},Ct={class:"min-h-screen flex justify-center relative p-6 z-5"},It={class:"leading-5 relative top-[55px] z-5 p-4"},St=m('<h3 class="text-white text-2xl font-serif mb-4 xxs:text-xl">Wojciech Czarnocki</h3><div class="text-sm"><p class="text-white font-sans font-thin mb-4"> Obecnie pracuj\u0119 jako Fullstack Developer w firmie Hapag Lloyd, wcze\u015Bniej przez 2 lata pracowa\u0142em jako Junior Java Engineer, natomiast interesuj\u0119 si\u0119 r\xF3wnie\u017C web developmentem jak i szeroko poj\u0119tym projektowaniem intefejs\xF3w u\u017Cytkownika oraz designem. </p><p class="text-white font-sans font-thin mb-4"> Moje realizacje wyr\xF3\u017Cniaj\u0105 si\u0119 niestandarowym, nowoczesnym i minimalistycznym wygl\u0105dem, skrojonym pod oczekiwania klienta. Przy ka\u017Cdym projekcie dbam o ka\u017Cdy detal, dzi\u0119ki czemu tworz\u0119 szybkie, zoptymalizowane i responsywne strony internetowe. </p><p class="text-white font-sans font-thin"> Pracuj\u0105c nad ka\u017Cdym projektem, dobieram stosowne technologie, kt\xF3re w jak najlepszym stopniu sprostaj\u0105 wymaganiom. </p></div>',2),Mt={class:"flex my-2"},Pt=["src"],Ot=["src"],Nt=["src"],Ft={class:"max-w-[100%] absolute bottom-5 right-0 -z-1"},Bt=["src"];function At(s,o,i,c,t,n){return a(),l("section",Lt,[e("div",Ct,[e("div",It,[St,e("div",Mt,[e("img",{class:"w-6 p-1 social-icon",src:t.linkedInIcon,alt:"linkedin-icon"},null,8,Pt),e("img",{class:"mx-2 p-1 w-6 social-icon",src:t.gitIcon,alt:"github-icon"},null,8,Ot),e("img",{class:"w-7 p-1 social-icon",src:t.behanceIcon,alt:"behance-icon"},null,8,Nt)])]),e("div",Ft,[e("img",{src:t.selfPortrait,alt:"wojciech-czarnocki-portrait -z-1"},null,8,Bt)])])])}var Ht=r(kt,[["render",At]]);const Wt={props:["project"]},Dt={class:"flex-col p-6 items-center justify-center text-center"},Tt={class:"w-[40%] max-w-[180px] m-auto p-4"},Vt=["src","alt"],Yt={class:"leading-5"},Et={class:"font-serif text-croissantYellow mb-2"},Gt={class:"font-sans text-[12px] font-hairline text-white"},Jt={class:"font-sans text-[12px] font-hairline text-white my-2"},Kt=["href"];function Rt(s,o,i,c,t,n){return a(),l("div",Dt,[e("div",Tt,[e("img",{src:i.project.img,alt:i.project.alt,class:"w-full"},null,8,Vt)]),e("div",Yt,[e("h4",Et,g(i.project.title),1),e("p",Gt,g(i.project.goal),1),e("p",Jt,g(i.project.description),1),e("a",{href:i.project.url,target:"_blank",class:"block text-[10px] font-serif text-croissantYellow"},"zobacz realizacj\u0119.",8,Kt)])])}var Zt=r(Wt,[["render",Rt],["__scopeId","data-v-1ec92c65"]]),qt="/vue-swietone-vite/assets/mct-project.1b05b4b0.svg",Ut="/vue-swietone-vite/assets/gswet-project.afe4158a.svg";const Qt={components:{SingleProject:Zt},data(){return{projects:[{title:"MC Trade",goal:"Realizacja dla klienta indywidualnego - firma og\xF3lnobudowlana",description:"Zbudowanie ca\u0142ego brandingu, zaprojektowanie logo oraz materia\u0142\xF3w marketingowych. Stworzenie strony internetowej wraz z jej pe\u0142n\u0105 responsywno\u015Bci\u0105 na urz\u0105dzeniach mobilnych.",img:qt,alt:"mc-trade-logo",url:"https://mc-trade.pl"},{title:"Gdy\u0144ski Szpital Weterynaryjny",goal:"Realizacja dla prywatnego szpitala weterynaryjnego w Gdyni",description:"Od\u015Bwie\u017Cenie logotypu oraz wizerunku, odwzorowanie i udoskonalenie logo i jego wariant\xF3w. Stworzenie strony internetowej wraz z jej pe\u0142n\u0105 responsywno\u015Bci\u0105 na urz\u0105dzeniach mobilnych.",img:Ut,alt:"gswet-logo",url:"https://gswet.pl"}]}}},Xt={class:"min-h-screen flex justify-center items-center relative w-full",id:"projects"},es={key:0,class:""};function ts(s,o,i,c,t,n){const _=d("SingleProject");return a(),l("section",Xt,[t.projects?(a(),l("div",es,[(a(!0),l(z,null,j(t.projects,u=>(a(),w(_,{project:u,key:u.alt},null,8,["project"]))),128))])):k("",!0)])}var ss=r(Qt,[["render",ts]]),os="/vue-swietone-vite/assets/mct.2213d9f8.svg",is="/vue-swietone-vite/assets/w2.006efa28.svg",ns="/vue-swietone-vite/assets/moon.09108e99.svg",as="/vue-swietone-vite/assets/zsips.8d1ee395.svg",cs="/vue-swietone-vite/assets/theflier.ec23e39f.svg",ls="/vue-swietone-vite/assets/torch.e99858fc.svg",rs="/vue-swietone-vite/assets/w1.4ad11de8.svg",ds="/vue-swietone-vite/assets/swietone-horizontal-logo.ee11b89e.svg",_s="/vue-swietone-vite/assets/gswet.bdc67f94.svg",vs="/vue-swietone-vite/assets/w3.ee16c735.svg",us="/vue-swietone-vite/assets/trener.e4a36cc9.svg",ps="/vue-swietone-vite/assets/gswetstore.ac834d0a.svg",ms="/vue-swietone-vite/assets/elsafe.07c97a26.svg";const hs={props:["logo"]},ws={class:"h-50px max-w-[28%] flex justify-center items-center m-2 p-2"},fs=["src"];function gs(s,o,i,c,t,n){return a(),l("div",ws,[e("img",{src:i.logo.path,alt:"logo.alt",class:"w-[100%] h-[100%]"},null,8,fs)])}var xs=r(hs,[["render",gs]]);const ys={components:{SingleLogo:xs},data(){return{logos:[{alt:"gswet-logo",path:_s},{alt:"mctrade-logo",path:os},{alt:"w2-logo",path:is},{alt:"elsafe-logo",path:ms},{alt:"moon-logo",path:ns},{alt:"zsips-logo",path:as},{alt:"theflier-logo",path:cs},{alt:"torch-logo",path:ls},{alt:"w1-logo",path:rs},{alt:"swietone-logo",path:ds},{alt:"w3-logo",path:vs},{alt:"trener-logo",path:us},{alt:"gswet.store-logo",path:ps}]}}},bs={class:"min-h-screen flex justify-center items-center relative w-full",id:"branding"},$s={key:0,class:"flex flex-wrap justify-center lg:justify-center items-center relative max-w-[85%] h-100"};function zs(s,o,i,c,t,n){const _=d("SingleLogo");return a(),l("section",bs,[t.logos?(a(),l("div",$s,[(a(!0),l(z,null,j(t.logos,u=>(a(),w(_,{logo:u,key:u.alt},null,8,["logo"]))),128))])):k("",!0)])}var js=r(ys,[["render",zs]]),ks="/vue-swietone-vite/assets/phone-cloud.f99ab64e.svg",Ls="/vue-swietone-vite/assets/mail-cloud.bc91b0de.svg",Cs="/vue-swietone-vite/assets/arrow.dea46791.svg";const Is={data(){return{divider:I,phoneCloud:ks,mailCloud:Ls,arrow:Cs}}},h=s=>(x("data-v-25d28166"),s=s(),y(),s),Ss={class:"min-h-screen flex justify-center items-center relative p-6",id:"footer"},Ms={class:"flex-col w-100 align-center justify-around p-2 min-h-[70vh] p-3"},Ps=h(()=>e("div",{class:"font-serif"},[e("h4",{class:"text-4xl text-white mb-2 text-right"},[p(" Od "),e("span",{class:"text-croissantYellow"},"brandingu,"),e("br"),p(" a\u017C po "),e("span",null,"stron\u0119!")])],-1)),Os={class:"divider hidden"},Ns=["src"],Fs={class:"partnership text-right text-white"},Bs=h(()=>e("h6",{class:"text-4xl text-white my-4"},"Wsp\xF3\u0142praca?",-1)),As=h(()=>e("p",{class:"text-sm text-white font-light font-sans max-w-[90%] ml-auto p-1"}," Je\u017Celi s\u0105 Pa\u0144stwo zainteresowani skorzystaniem z naszych us\u0142ug, prosimy kontaktowa\u0107 si\u0119 telefonicznie b\u0105d\u017A mailowo. Z przyjemno\u015Bci\u0105 odpowiemy na wszelkie pytania i znajdziemy odpowiednie rozwi\u0105zanie. ",-1)),Hs={class:"flex ml-auto w-100 justify-end my-2"},Ws={href:"tel:+48513192155"},Ds=["src"],Ts={href:"mailto:czarnocki.w@wp.pl"},Vs=["src"],Ys=h(()=>e("div",{class:"mt-8"},[e("h5",{class:"text-4xl text-croissantYellow"},"swietone."),e("ul",{class:"list-none text-sm text-white font-sans font-hairline leading-5"},[e("li",null,"NIP: 5783130795"),e("li",null,"kontakt@swietone.pl"),e("li",null,"czarnocki.w@wp.pl"),e("li",null,"Wojciech Czarnocki"),e("li",null,"(+48) 513 192 155")])],-1)),Es=h(()=>e("p",{class:"absolute bottom-6 text-center font-sans text-white font-hairline opacity-50"},[p(" powered by "),e("br"),e("span",{class:"font-serif font-light"},"swietone.")],-1)),Gs={class:"absolute bottom-6 right-6 max-w-[10%]"},Js={href:"#home"},Ks=["src"];function Rs(s,o,i,c,t,n){return a(),l("footer",Ss,[e("div",Ms,[Ps,e("div",Os,[e("img",{src:t.divider,alt:"divider-svg"},null,8,Ns)]),e("div",Fs,[Bs,As,e("div",Hs,[e("a",Ws,[e("img",{src:t.phoneCloud,alt:"phone-cloud-svg",class:"p-2"},null,8,Ds)]),e("a",Ts,[e("img",{src:t.mailCloud,alt:"mail-cloud-svg",class:"p-2"},null,8,Vs)])])]),Ys]),Es,e("div",Gs,[e("a",Js,[e("img",{src:t.arrow,alt:"back-to-top-arrow-icon",class:"w-100"},null,8,Ks)])])])}var Zs=r(Is,[["render",Rs],["__scopeId","data-v-25d28166"]]);const qs={components:{Layout:R,Home:ie,Navbar:ue,Menu:Ne,Intro:We,About:Ke,Swietone:zt,Bio:Ht,Projects:ss,Logos:js,Footer:Zs},data(){return{isMenuOpen:!1}}};function Us(s,o,i,c,t,n){const _=d("Intro"),u=d("Navbar"),N=d("Home"),F=d("About"),B=d("Swietone"),A=d("Bio"),H=d("Projects"),W=d("Logos"),D=d("Footer"),b=d("Layout"),T=d("Menu");return t.isMenuOpen?(a(),w(b,{key:1},{default:$(()=>[v(T,{onToggleMenu:o[1]||(o[1]=f=>t.isMenuOpen=f)})]),_:1})):(a(),w(b,{key:0},{default:$(()=>[v(_),v(u,{onToggleMenu:o[0]||(o[0]=f=>t.isMenuOpen=f)}),v(N),v(F),v(B),v(A),v(H),v(W),v(D)]),_:1}))}var Qs=r(qs,[["render",Us]]);Y(Qs).mount("#app");
