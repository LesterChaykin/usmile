﻿function getFullUrl(e) { let a; switch (e.LINK_CONTENT_TYPE) { case 0: switch (e.LINK_TYPE) { case 1: a = "/main_pics/pages/medium/" + e.LINK_REDIRECT_PIC; break; case 2: a = "/files/" + e.LINK_REDIRECT_FILE; break; case 3: a = e.LINK_REDIRECT_LINK; break; default: a = "/Home/Detail/" + e.LINK_ID + "/" + e.LINK_URL }break; case 1: a = "/Product/Index/"; break; case 2: a = "/News/Index/"; break; case 3: a = "/Reference/Index/"; break; case 10: a = "/Blog/Index/"; break; case 99: a = "/Home/Contact/"; break; case 100: a = "/"; break; default: a = "/Home/Detail/" + item.LINK_ID + "/" + item.LINK_URL }return a } function UpdateUserLanguage(e, a) { let t = window.location.pathname.split("/"), n = t[1], l = t[2]; $.ajax({ url: "/Home/UpdateUserLanguage", data: { langID: e }, async: !0, dataType: "text", type: "POST", success: function (e, t, r) { ReloadTopLevelWindow(), void 0 !== n && 2 === n.length && void 0 !== l ? window.location = "/" + a + "/" + l : window.location = "/" }, error: function (e, a, t) { } }) } function ReloadTopLevelWindow() { for (var e = window; null != e.parent && e.parent != e;)e = e.parent; e.location.reload(!0) } function GetCurrentMenuItem() { var e = window.location.href.split("/"); switch (e[3]) { case "Product": $("#main_menu > li > a[href*=Product]").parent("li").addClass("active"); break; case "News": $("#main_menu > li > a[href*=News]").parent("li").addClass("active"); break; case "Blog": $("#main_menu > li > a[href*=Blog]").parent("li").addClass("active"); break; case "Reference": $("#main_menu > li > a[href*=Reference]").parent("li").addClass("active"); break; case "Home": switch (e[4]) { case "Contact": $("#main_menu > li > a[href*=Contact]").parent("li").addClass("active"); break; case "Index": $("#main_menu > li > a[href*=Home\\/Index]").parent("li").addClass("active"), $("#main_menu > li > a[href=\\/]").parent("li").addClass("active"); break; case "Detail": var a = e[5]; "0" == $("#main_menu > li  a[href*=Home\\/Detail\\/" + a + "]").parent("li").attr("data-level") ? $("#main_menu > li  a[href*=Home\\/Detail\\/" + a + "]").parent("li").addClass("active") : $("#main_menu > li  a[href*=Home\\/Detail\\/" + a + "]").parents("li.dropdown").addClass("active") }break; default: $("#main_menu > li > a[href*=Home\\/Index]").parent("li").addClass("active"), $("#main_menu > li > a[href=\\/]").parent("li").addClass("active") } } function ShowLoading(e) { let a = document.querySelector(e); a.dataset.displayStyle = window.getComputedStyle(a).display, $(e).css("display", "none"), $(e).after("<div class='throbber m20' style='display:block;text-align:center;'><img src='/img/loading.gif' /> <br/> Loading...</div>") } function HideLoading(e) { $(".throbber").remove(); let a = document.querySelector(e); a.style.display = a.dataset.displayStyle } function ConvertUrl(e) { if (null === e) return ""; var a = { çÇ: "c", ğĞ: "g", şŞ: "s", üÜ: "u", ıİI: "i", öÖ: "o" }; for (var t in a) e = e.replace(RegExp("[" + t + "]", "g"), a[t]); return e.replace(/[^-a-zA-Z0-9\s]+/gi, "").replace(/\s/gi, "-").replace(/[-]+/gi, "-").toLowerCase() } function GetUrlParameter() { return document.location.href.split("/")[5] } $(document).ready(function () { new WOW().init(), $(".email").inputmask({ mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]", greedy: !1, onBeforePaste: function (e, a) { return (e = e.toLowerCase()).replace("mailto:", "") }, definitions: { "*": { validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]", cardinality: 1, casing: "lower" } } }), $("img").error(function () { $(this).unbind("error").attr("src", "/img/no-pic.jpg") }) }), window.scrollTo(0, 0), document.addEventListener("DOMContentLoaded", function () { "use strict"; let e = document.querySelectorAll(".language-switch"); for (let a = 0; a < e.length; a++) { let t = e[a], n = document.querySelector(t.dataset.selector); null !== n && (void 0 !== t.dataset.attr ? n[t.dataset.attr] = t.value : n.outerHTML = t.value) } let l = document.querySelector(".go-top"); l.addEventListener("click", function () { window.scrollTo({ left: 0, top: 0, behavior: "smooth" }) }), document.addEventListener("scroll", function () { l.style.opacity = 2 * window.scrollY / document.body.scrollHeight }), window.innerWidth <= 800 && f.addEventListener("click", function () { let e = "tr-TR"; switch (i.value) { case "en": e = "en-US"; break; case "de": e = "de-DE"; break; case "ru": e = "ru-RU"; break; case "fr": e = "fr-FR"; break; case "ar": e = "ar-SA"; break; case "fa": e = "fa-IR"; break; case "cn": e = "zh-CN"; break; case "ro": e = "ro-RO" } }), document.querySelector("footer .footer-menu"); let r = new XMLHttpRequest; r.onload = function () { if (200 === r.status) { let e = JSON.parse(r.response); for (let a = 0; a < e.length; a++) { let t = ""; for (let n = 0; n < e[a].CHILDS.length; n++) { let l = e[a].CHILDS[n], o = "/home/detail/" + l.LINK_ID + "/" + l.LINK_URL; 3 === l.LINK_TYPE && (o = l.LINK_REDIRECT_LINK), t += '<li><a href="' + o + '">' + l.LINK_NAME + "</a></li>" } let d = "/home/detail/" + e[a].LINK_ID + "/" + e[a].LINK_URL; 3 === e[a].LINK_TYPE && (d = e[a].LINK_REDIRECT_LINK) } } let s = document.querySelectorAll("footer a"); for (let c = 0; c < s.length; c++) { let u = s[c], p = new URL(u.href); u.addEventListener("click", function (e) { e.stopPropagation(), e.preventDefault(), p.hostname !== window.location.hostname ? window.open(p, "_blank") : window.location = p }) } } }); let hotelUrl = "", hotelId = 0, language = "tr"; function generateHotelLinkOrBypass(e, a, t) { return null != e && "" !== e ? "/" + language + "/" + e + "/" + a : "/" + a } $(document).ready(function () { { let e = document.querySelector("#hotelId"), a = document.querySelector("#hotelUrl"), t = document.querySelector("#language"); null !== t && (language = t.value), null !== e && (hotelId = parseInt(e.value), hotelUrl = a.value) } LoadLINK_MAINMENU(hotelId), GetCurrentMenuItem(); let n = document.querySelectorAll("a.nav-link,.footer-menu a"); if (window.innerWidth > 800) for (let l = 0; l < n.length; l++) { let r = n[l]; r.addEventListener("click", e => { e.preventDefault(), e.stopPropagation(), new URL(r.href).host !== window.location.host ? window.open(r.href, "_blank") : window.location = r.href }) } else for (let o = 0; o < n.length; o++)n[o].addEventListener("click", e => { e.preventDefault(), e.stopPropagation(); let a = e.srcElement || e.target, t = a.nextSibling; null != t ? (a.setAttribute("aria-expanded", "true" != a.getAttribute("aria-expanded") && "true"), t.classList.toggle("show")) : window.location = a.href }) }); var catData, htm = ""; function LoadLINK_MAINMENU(e) { $.ajax({ contentType: "application/json; charset=utf-8", dataType: "json", type: "GET", async: !1, cache: !1, url: "/Home/GetAllMenuItems?hotelId=" + e, data: {}, beforeSend: function () { ShowLoading("#main_menu") }, success: function (e) { GetMenu(e, 0), $("#main_menu").html(htm), htm = "", $("#main_menu > li > a[href*='/Product/Index']").parent().addClass("dropdown"), HideLoading("#main_menu") }, error: function (e, a, t) { } }) } function GetCategories() { $.ajax({ contentType: "application/json; charset=utf-8", dataType: "json", async: !1, type: "GET", cache: !1, url: "/Product/GetCategories", data: { parent: 0 }, success: function (e) { catData = e }, error: function (e, a, t) { } }) } function GetMenu(e, a) { htm += '<li class="nav-item active" data-level="0"><a data-page-id="4" href="/" class="nav-link ">Home</a></li>', $.each(e, function (e, t) { if (99 != t.LINK_CONTENT_TYPE && 100 != t.LINK_CONTENT_TYPE) { switch (t.CHILDS.length > 0 ? (0 == t.LINK_UID && (a = 0), htm += a > 0 ? "<li class='nav-item dropdown'>" : "<li class='nav-item dropdown' data-level='" + a + "'>") : htm += "<li class='nav-item' data-level='" + a + "'>", t.LINK_CONTENT_TYPE) { case 0: switch (t.LINK_TYPE) { case 1: htm += "<a data-page-id='" + t.LINK_ID + "'  target='_blank'  class='nav-link dropdown-toggle' href='/main_pics/pages/medium/" + t.LINK_REDIRECT_PIC + "'  " + (t.CHILDS.length > 0 ? "role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded=false" : "") + ">" + t.LINK_NAME + "</a>"; break; case 2: htm += "<a data-page-id='" + t.LINK_ID + "'  target='_blank'  class='nav-link  dropdown-toggle' href='/files/" + t.LINK_REDIRECT_FILE + "'  " + (t.CHILDS.length > 0 ? "role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded=false" : "") + ">" + t.LINK_NAME + "</a>"; break; case 3: htm += "<a data-page-id='" + t.LINK_ID + "'  target='_blank'  class='nav-link dropdown-toggle' href='" + t.LINK_REDIRECT_LINK + "'  " + (t.CHILDS.length > 0 ? "role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded=false" : "") + ">" + t.LINK_NAME + "</a>"; break; default: htm += "<a data-page-id='" + t.LINK_ID + "'  class='nav-link dropdown-toggle' href='" + generateHotelLinkOrBypass(hotelUrl, t.LINK_URL, t.LINK_ID) + "'  " + (t.CHILDS.length > 0 ? "role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded=false" : "") + ">" + t.LINK_NAME + "</a>" }break; case 1: htm += "<a data-page-id='" + t.LINK_ID + "'  class='nav-link dropdown-toggle' href='/Product/Index/' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded=false>" + t.LINK_NAME + "</a>", htm += "<ul class='dropdown-menu'>", $.each(catData, function (e, a) { htm += "<li><a data-page-id='" + a.LINK_ID + "'  class='nav-link' href='/Product/Results/" + a.id + "/" + ConvertUrl(a.label) + "'>" + a.label + "</a></li>" }), htm += "</ul>"; break; case 2: htm += "<a data-page-id='" + t.LINK_ID + "'  class='nav-link dropdown-toggle' href='/News/Index/'  " + (t.CHILDS.length > 0 ? "role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded=false" : "") + ">" + t.LINK_NAME + "</a>"; break; case 3: htm += "<a data-page-id='" + t.LINK_ID + "'  class='nav-link ' href='/Reference/Index/' " + (t.CHILDS.length > 0 ? "role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded=false" : "") + ">" + t.LINK_NAME + "</a>"; break; case 10: htm += "<a data-page-id='" + t.LINK_ID + "'  class='nav-link ' href='/Blog/Index/' " + (t.CHILDS.length > 0 ? "role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded=false" : "") + ">" + t.LINK_NAME + "</a>"; break; case 99: htm += "<a data-page-id='" + item.LINK_ID + "'  class='nav-link ' href='/Home/Contact/' " + (item.CHILDS.length > 0 ? "role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded=false" : "") + ">" + item.LINK_NAME + "</a>"; break; case 100: htm += "<a data-page-id='" + t.LINK_ID + "'  href='/' class='nav-link ' " + (t.CHILDS.length > 0 ? "role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded=false" : "") + ">" + t.LINK_NAME + "</a>"; break; default: htm += "<a data-page-id='" + t.LINK_ID + "'  class='dropdown-toggle nav-link' href='/Home/Detail/" + t.LINK_ID + "/" + t.LINK_URL + "'  " + (t.CHILDS.length > 0 ? "role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded=false" : "") + ">" + t.LINK_NAME + "</a>" }t.CHILDS.length > 0 && (a++, htm += "<ul class='dropdown-menu'>", GetMenu(t.CHILDS, a), htm += "</ul>"), htm += "</li>" } }), htm += '<li class="nav-item" data-level="0"><a data-page-id="12" class="nav-link " href="/Home/Contact/">Contact</a></li>' }