// Follow check shown on every visit (2026-11-14 owner request: ask "did you follow?" every time, even for existing followers).
// Zorcha already verifies non-followers in the DM; this screen makes the check visible to everyone, every time.
(function () {
  var KEY = "jgcc_follow_ok";
  try { if (sessionStorage.getItem(KEY) === "1") return; } catch (e) {}
  var root = document.currentScript && document.currentScript.src.indexOf("/assets/gate.js") > -1 ? document.currentScript.src.replace(/assets\/gate\.js.*$/, "") : "/";
  var g = document.createElement("div");
  g.id = "fgate";
  g.innerHTML =
    '<div class="fg-card" role="dialog" aria-modal="true" aria-labelledby="fg-t">' +
    '<img src="' + root + 'assets/avatar.png" alt="" />' +
    '<p class="fg-k">팔로워 전용 자료예요</p>' +
    '<h2 id="fg-t">@jungle.gcc<br />팔로우하셨나요?</h2>' +
    '<p class="fg-s">팔로우하면 다음 AI 꿀팁 자료도 계속 받아 보실 수 있어요.</p>' +
    '<a class="fg-go" href="https://www.instagram.com/jungle.gcc/" target="_blank" rel="noopener">인스타에서 팔로우하기</a>' +
    '<button class="fg-ok" type="button">팔로우했어요 ✅ 자료 보기</button>' +
    "</div>";
  document.documentElement.classList.add("fg-on");
  function open() { document.body.appendChild(g); }
  if (document.body) open(); else document.addEventListener("DOMContentLoaded", open);
  g.addEventListener("click", function (e) {
    if (!e.target.classList.contains("fg-ok")) return;
    try { sessionStorage.setItem(KEY, "1"); } catch (err) {}
    document.documentElement.classList.remove("fg-on");
    g.remove();
  });
})();
