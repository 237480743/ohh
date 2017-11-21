var Meiriq_game = function() {
	function a(a, b) {
		this.haveShare = 1, this.haveGamelist = 0, this.resourceCDN = "", this.orientation = 1, this.gameName = a, this.gameType = b, this.gameScore, this.gameLevel, this.permitStart = 1, this.gameScore = window.localStorage.getItem(a + "Score") ? Number(window.localStorage.getItem(a + "Score")) : 0, this.gameLevel = window.localStorage.getItem(a + "Level") ? Number(window.localStorage.getItem(a + "Level")) : 0
	}
	var b = a.prototype;
	return b.cb_gameover = function(a, b) {
		function o(a, b) {
			var c = document.querySelector("#btnWrap"),
				d = document.createElement("img");
			return c ? (d.setAttribute("src", a), d.style.width = "45%", d.style.padding = "0 2%", c.appendChild(d), d.addEventListener("touchstart", function(a) {
				a.preventDefault(), this.setAttribute("src", b)
			}, !1), d.addEventListener("touchend", function(b) {
				b.preventDefault(), this.setAttribute("src", a)
			}, !1), d) : !1
		}

		function y(a, b) {
			var c, d, e;
			for (t += b, t >= a ? t = a : setTimeout(function() {
					y(a, b)
				}, 50), c = Math.floor(t), d = 0; s - 1 > d; d++) e = Math.pow(10, s - d - 1), q[d].src = p[Math.floor(c / e)], c %= e;
			q[d].src = p[c]
		}
		var c, d, e, f, g, h, i, j, k, l, m, n, p, q, r, s, t, u, v, w, x, z, A, B, C, D, E, F, G, H, I, J, K, L;
		if (a = Number(a), "undefined" == typeof window["post_score"] || 0 !== window["post_score"](a)) {
			for (c = this, d = "", j = this.updateScore(a), k = document.createElement("div"), k.setAttribute("id", "meiriq_over"), k.style.position = "absolute", k.style.width = "100%", k.style.height = "100%", k.style.top = "0", k.style.left = "0", k.style.bottom = "0", k.style.right = "0", k.style.textAlign = "center", k.style.zIndex = "8", k.innerHTML = '<div style="width:100%;height:100%;background-color: #000000;opacity: 0.5;"></div><div id="mainWrap" style="width:80%;background-color: #ffffff;border-radius: 10px;position:absolute;bottom:0;left:0;right:0;top:0;margin:auto;"><div id="scoreWrap" style="text-align: center;margin-top:-20%;width: 100%;"></div><div id="highscoreWrap" style="width:100%;"><span id="highscore" style="font-family: 微软雅黑;color:#565656;font-size: 18px;"></span></div><div id="iconWrap" style="position:relative;width:100%;margin-top: 2%;"></div><div id="btnWrap"  style="text-align: center;position: absolute;bottom: -10%;width: 100%;"></div>', document.body.appendChild(k), l = document.querySelector("#mainWrap"), window.innerHeight >= window.innerWidth ? console.log("竖屏") : (l.style.width = "40%", console.log("横屏")), l.style.height = .85 * l.offsetWidth + "px", m = o(d, e), m.addEventListener("touchend", function() {
					c.cb_restart();
				}, !1), n = null, !this.haveShare && this.haveGamelist ? (n = o(h, i), n.addEventListener("touchend", function() {
					c.cb_more()
				}, !1)) : (this.haveShare || this.haveGamelist) && (n = o(f, g), n.addEventListener("touchend", function() {
					c.cb_share();
				}, !1)), p = [""], q = [], r = document.querySelector("#scoreWrap"), s = a.toString().length, t = 0, u = a / 10, v = "20%", s > 3 && (v = "14%", r.style.marginTop = "-12%"), w = 0; s > w; w++) x = document.createElement("img"), q.push(x), x.id = "score" + w, x.style.width = v, x.src = p[0], r.appendChild(x);
			y(a, u), z = document.querySelector("#highscore"), z.innerHTML = "score" == this.gameType ? "最高分：" + this.gameScore : "最高分：" + this.gameLevel, A = document.querySelector("#iconWrap"), B = document.querySelector("#highscoreWrap"), b ? (C = document.createElement("img"), C.style.width = "70%", C.src = "resource/assets/" + b, A.appendChild(C), C.onload = function() {
				var a, b;
				C.offsetWidth / C.offsetHeight < 1.6 && (C.style.width = "40%"), a = l.offsetHeight, b = (a - B.offsetHeight - .1 * a - (r.offsetHeight - .2 * a) - C.offsetHeight) / 2, A.style.marginTop = b + "px"
			}) : "win" == j ? (D = "", F = document.createElement("img"), F.src = E, F.style.width = "50%", F.id = "winlight", A.appendChild(F), G = document.createElement("img"), G.src = D, G.style.width = "30%", G.style.position = "absolute", A.appendChild(G), G.onload = function() {
				G.style.left = (A.offsetWidth - G.offsetWidth) / 2 + "px", G.style.top = (A.offsetHeight - G.offsetHeight) / 2 + "px";
				var a = 0;
				winIni = setInterval(function() {
					a += 90, F.style.webkitTransform = "rotate(" + a + "deg)"
				}, 100)
			}) : (H = "", I = "下载.png", A.style.marginTop = "10%", J = document.createElement("img"), J.src = I, J.style.width = "20%", J.id = "karas", J.style.position = "absolute", A.appendChild(J), K = document.createElement("img"), K.src = H, K.style.width = "70%", A.appendChild(K), K.onload = function() {
				J.style.top = (K.offsetHeight - J.offsetHeight) / 2 + "px", J.style.left = K.offsetWidth + "px"
			}, L = document.createElement("style"), L.innerHTML = '@-webkit-keyframes "loseAni" {0%{left:' + K.offsetWidth + 'px;opacity:1} 50%{opacity:1;} 100%{left:0px;opacity:0}} #karas{-webkit-animation-name:"loseAni"; -webkit-animation-duration: 1.5s;-webkit-animation-timing-function: ease-in;-webkit-animation-iteration-count: infinite;-webkit-animation-direction:normal;}', document.head.appendChild(L))
		}
	}, b.cb_levelwin = function(a) {
		console.log("cb_levelwin"), this.updateScore(a)
	}, b.cb_finishload = function() {
		console.log("cb_finishload")
	}, b.cb_start = function() {
		
		return console.log("cb_start"), this.permitStart
	}, b.cb_restart = function() {
		
		console.log("cb_restart"), this.removeGameover(), this.home()
	}, b.cb_share = function() {
		//play68_submitScore(score);
		console.log("cb_share")
	}, b.cb_more = function() {
		//Play68.goHome();
		console.log("cb_more")
	}, b.home = function() {
		console.log("home"), window["home"].call(window["home_context"])
	}, b.pause = function() {
		console.log("pause"), window["pause"].call(window["pause_context"])
	}, b.resume = function() {
		console.log("resume"), window["resume"].call(window["resume_context"])
	}, b.removeGameover = function() {
		"undefined" != typeof winIni && clearInterval(winIni);
		var a = document.querySelector("#meiriq_over");
		a && a.parentNode.removeChild(a)
	}, b.updateScore = function(a) {
		score = a;
		//updateShare(score);
		//Play68.setRankingScoreDesc(score);
		if ("score" == this.gameType) {
			if (a > this.gameScore) return window.localStorage.setItem(this.gameName + "Score", String(a)), this.gameScore = a, "win"
		} else if (a > this.gameLevel) return window.localStorage.setItem(this.gameName + "Level", String(a)), this.gameLevel = a, "win";
		return "lose"
	}, b.__class__ = "Meiriq_game", a
}();