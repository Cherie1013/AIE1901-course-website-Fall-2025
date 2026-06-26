// ===== Shared chrome: top header (brand + nav) and footer =====
(function () {
    const C = window.COURSE || {};

    function esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    const BOOK_ICON =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
        'stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5z"/>' +
        '<path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5A1.5 1.5 0 0 0 20 17.5z"/>' +
        '</svg>';

    function navLinks(activeKey, asFooter) {
        return (C.navPages || [])
            .map(p => {
                const cls = (!asFooter && p.key === activeKey) ? ' class="active"' : '';
                return `<li><a href="${esc(p.href)}"${cls}>${esc(p.label)}</a></li>`;
            }).join('');
    }

    function renderHeader(activeKey) {
        const el = document.getElementById('site-header');
        if (!el) return;
        el.innerHTML = `
            <div class="header-inner">
                <a class="brand" href="index.html">
                    <span class="brand-mark">${BOOK_ICON}</span>${esc(C.code || 'Course')}
                </a>
                <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
                <nav class="main-nav" id="main-nav">
                    <ul>${navLinks(activeKey, false)}</ul>
                </nav>
            </div>`;

        const toggle = el.querySelector('.nav-toggle');
        const nav = el.querySelector('.main-nav');
        if (toggle && nav) {
            toggle.addEventListener('click', function () {
                const open = nav.classList.toggle('open');
                toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            });
        }
    }

    function renderFooter() {
        const el = document.getElementById('site-footer');
        if (!el) return;
        el.innerHTML = `
            <div class="footer-inner">
                <p class="f-line">${esc(C.code || '')} — ${esc(C.title || '')} · ${esc(C.semester || '')}</p>
                <p class="f-sub">${esc(C.institution || '')} · ${esc(C.address || '')}</p>
            </div>`;
    }

    // Public API
    window.renderChrome = function (activeKey) {
        renderHeader(activeKey);
        renderFooter();
    };
})();
