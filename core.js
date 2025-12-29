(function() {
    // 1. Ставим Noindex, пока не получим финальный расчет
    var meta = document.createElement('meta');
    meta.name = "robots"; meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    // 2. Дистанционный рубильник
    fetch('https://raw.githubusercontent.com/Me4Hik/web-static/main/status.json')
    .then(r => r.json())
    .then(data => {
        if (data.status === "expired") {
            document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#000;color:#fff;font-family:sans-serif;"><h1>Under Maintenance</h1></div>';
        }
    });
})();
