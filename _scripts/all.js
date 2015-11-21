//github.com/verbatim/css_browser_selector | 0.6.1 | creativecommons.org/licenses/by/2.5
function log(e){window.console&&showLog&&console.log(e)}function css_browser_selector(e){function i(){var e=window.outerWidth||m.clientWidth,i=window.outerHeight||m.clientHeight;o.orientation=i>e?"portrait":"landscape",m.className=m.className.replace(/ ?orientation_\w+/g,"").replace(/ [min|max|cl]+[w|h]_\d+/g,"");for(var r=a-1;r>=0;r--)if(e>=n[r]){o.maxw=n[r];break}widthClasses="";for(var t in o)widthClasses+=" "+t+"_"+o[t];return m.className=m.className+widthClasses,widthClasses}var o={},n=[320,480,640,768,1024,1152,1280,1440,1680,1920,2560],a=n.length,r=e.toLowerCase(),t=function(e){return RegExp(e,"i").test(r)},s=function(e,i){i=i.replace(".","_");for(var o=i.indexOf("_"),n="";o>0;)n+=" "+e+i.substring(0,o),o=i.indexOf("_",o+1);return n+=" "+e+i},p="gecko",d="webkit",g="chrome",l="firefox",x="safari",c="opera",w="mobile",E="android",R="blackberry",$="lang_",_="device_",m=document.documentElement,b=[!/opera|webtv/i.test(r)&&/msie\s(\d+)/.test(r)?"ie ie"+(/trident\/4\.0/.test(r)?"8":RegExp.$1):t("firefox/")?p+" "+l+(/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(r)?" "+l+RegExp.$2+" "+l+RegExp.$2+"_"+RegExp.$4:""):t("gecko/")?p:t("opera")?c+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(r)?" "+c+RegExp.$2+" "+c+RegExp.$2+"_"+RegExp.$4:/opera(\s|\/)(\d+)\.(\d+)/.test(r)?" "+c+RegExp.$2+" "+c+RegExp.$2+"_"+RegExp.$3:""):t("konqueror")?"konqueror":t("blackberry")?R+(/Version\/(\d+)(\.(\d+)+)/i.test(r)?" "+R+RegExp.$1+" "+R+RegExp.$1+RegExp.$2.replace(".","_"):/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(r)?" "+R+RegExp.$2+(RegExp.$3?" "+R+RegExp.$2+RegExp.$3:""):""):t("android")?E+(/Version\/(\d+)(\.(\d+))+/i.test(r)?" "+E+RegExp.$1+" "+E+RegExp.$1+RegExp.$2.replace(".","_"):"")+(/Android (.+); (.+) Build/i.test(r)?" "+_+RegExp.$2.replace(/ /g,"_").replace(/-/g,"_"):""):t("chrome")?d+" "+g+(/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(r)?" "+g+RegExp.$2+(RegExp.$4>0?" "+g+RegExp.$2+"_"+RegExp.$4:""):""):t("iron")?d+" iron":t("applewebkit/")?d+" "+x+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(r)?" "+x+RegExp.$2+" "+x+RegExp.$2+RegExp.$3.replace(".","_"):/ Safari\/(\d+)/i.test(r)?"419"==RegExp.$1||"417"==RegExp.$1||"416"==RegExp.$1||"412"==RegExp.$1?" "+x+"2_0":"312"==RegExp.$1?" "+x+"1_3":"125"==RegExp.$1?" "+x+"1_2":"85"==RegExp.$1?" "+x+"1_0":"":""):t("mozilla/")?p:"",t("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk")?w:"",t("j2me")?"j2me":t("ipad|ipod|iphone")?(/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(r)?"ios"+s("ios",RegExp.$2):"")+" "+(/(ip(ad|od|hone))/gi.test(r)?RegExp.$1:""):t("playbook")?"playbook":t("kindle|silk")?"kindle":t("playbook")?"playbook":t("mac")?"mac"+(/mac os x ((\d+)[.|_](\d+))/.test(r)?" mac"+RegExp.$2+" mac"+RegExp.$1.replace(".","_"):""):t("win")?"win"+(t("windows nt 6.2")?" win8":t("windows nt 6.1")?" win7":t("windows nt 6.0")?" vista":t("windows nt 5.2")||t("windows nt 5.1")?" win_xp":t("windows nt 5.0")?" win_2k":t("windows nt 4.0")||t("WinNT4.0")?" win_nt":""):t("freebsd")?"freebsd":t("x11|linux")?"linux":"",/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(r)?($+RegExp.$2).replace("-","_")+(""!=RegExp.$3?(" "+$+RegExp.$1).replace("-","_"):""):"",t("ipad|iphone|ipod")&&!t("safari")?"ipad_app":""];window.onresize=i,i();var f=b.join(" ")+" js ";return m.className=(f+m.className.replace(/\b(no[-|_]?)?js\b/g,"")).replace(/^ /,"").replace(/ +/g," "),f}showLog=!0,css_browser_selector(navigator.userAgent);
//main.js
$(document).ready(function(){function t(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}$.get("https://api.github.com/repos/FLIF-Hub/UGUI_FLIF/releases",function(s){for(var e=[],a=[],o=[],r=[],d=0;d<s.length;d++){var n=s[d].tag_name,l=(n.split("v")[1],s[d].created_at),i=l.split("T")[0],h='<a href="https://github.com/FLIF-Hub/UGUI_FLIF/releases/tag/'+n+'" title="View release notes">'+i+"</a>",u="#",p="N/A",g="N/A";if(s[d].assets[0])for(var v=0;v<s[d].assets.length;v++){u=s[d].assets[v].browser_download_url,p=s[d].assets[v].download_count;var w=s[d].assets[v].size,c=w/1024,f=c/1024;g='<span title="'+t(Math.round(c))+' KB">'+Math.round(10*f)/10+" MB</span>";var b=s[d].assets[v].name;if(download='<a href="'+u+'" title="Download this version">'+b+"</a>",e.push(p),w>2e7){var F=b.split("").reverse().join("").split("piz.")[1],I=F.charAt(0);("2"==I||"4"==I)&&(F=F.substr(2));var m=F.toLowerCase().charAt(2);"w"==m?a.push(p):"l"==m?o.push(p):"o"==m&&r.push(p)}var _="<tr>";0==v&&0==d?_='<tr class="latest-release">':0==v&&(_='<tr class="new-release">'),$("#output tbody").append(_+"<td><strong>"+n+"</strong></td><td>"+download+"</td><td>"+g+"</td><td>"+h+"</td><td>"+p+"</td></tr>")}else $("#output tbody").append("<tr><td><strong>"+n+"</strong></td><td>"+download+"</td><td>"+g+"</td><td>"+h+"</td><td>"+p+"</td></tr>")}for(var L=0,M=0,U=0,y=0,A=0;A<e.length;A++)L+=e[A];for(var B=0;B<a.length;B++)M+=a[B];for(var G=0;G<o.length;G++)U+=o[G];for(var z=0;z<r.length;z++)y+=r[z];$("#total").html("<p>The official releases of UGUI: FLIF have been downloaded <strong>"+L+" times</strong>.</p>");var H=M+U+y;console.log(H),$("#os .win").width(Math.round(M/H*100)+"%").attr("title",M+" downloads"),$("#os .lin").width(Math.round(U/H*100)+"%").attr("title",U+" downloads"),$("#os .osx").width(Math.round(y/H*100)+"%").attr("title",y+" downloads"),$("#os").css("visibility","visible")})});