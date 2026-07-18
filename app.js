// Data Grammar lengkap N3
const grammarData = [
    { id: 1, jp: '上げる', romaji: 'ageru', meaning: 'selesai melakukan-', page: 8 },
    { id: 2, jp: 'あまり', romaji: 'amari', meaning: 'begitu... sampai', page: 10 },
    { id: 3, jp: 'あまりにも', romaji: 'amari ni mo', meaning: 'terlalu...; begitu... sampai; berlebihan-', page: 12 },
    { id: 4, jp: '合う', romaji: 'au', meaning: 'melakukan sesuatu bersama', page: 14 },
    { id: 5, jp: 'ばいい', romaji: 'ba ii', meaning: 'sebaiknya, bisa, akan baik jika', page: 16 },
    { id: 6, jp: 'ばよかった', romaji: 'ba yokatta', meaning: 'seharusnya, akan lebih baik jika-', page: 18 },
    { id: 7, jp: 'ば〜ほど', romaji: 'ba~hodo', meaning: 'semakin... semakin', page: 20 },
    { id: 8, jp: 'ば〜のに', romaji: 'ba~noni', meaning: 'seharusnya; andaikan saja-', page: 22 },
    { id: 9, jp: 'ばかりで', romaji: 'bakari de', meaning: 'hanya; cuma (deskripsi negatif)', page: 24 },
    { id: 10, jp: 'ばかりでなく', romaji: 'bakari denaku', meaning: 'tidak hanya.. tetapi juga', page: 26 },
    { id: 11, jp: 'べきだ', romaji: 'beki da', meaning: 'seharusnya melakukan-; harus melakukan-', page: 28 },
    { id: 12, jp: 'べきではない', romaji: 'beki dewa nai', meaning: 'seharusnya tidak melakukan~; tidak boleh~', page: 30 },
    { id: 13, jp: '別に〜ない', romaji: 'betsu ni~nai', meaning: 'tidak juga, tidak terlalu', page: 32 },
    { id: 14, jp: 'ぶりに', romaji: 'buri ni', meaning: 'untuk pertama kalinya dalam (periode waktu)', page: 34 },
    { id: 15, jp: '中', romaji: 'chuu/juu', meaning: 'sedang; selama; sepanjang', page: 36 },
    { id: 16, jp: 'だけ', romaji: 'dake', meaning: 'sebanyak-', page: 38 },
    { id: 17, jp: 'だけでなく', romaji: 'dake de naku', meaning: 'tidak hanya... tetapi juga', page: 40 },
    { id: 18, jp: 'だけど', romaji: 'dakedo', meaning: 'namun; tetapi', page: 42 },
    { id: 19, jp: 'だらけ', romaji: 'darake', meaning: 'penuh dengan; dipenuhi; banyak-', page: 44 },
    { id: 20, jp: 'どんなに〜ても', romaji: 'donna ni~temo', meaning: 'tidak peduli seberapa (banyak)', page: 46 },
    { id: 21, jp: 'どうしても', romaji: 'doushitemo', meaning: 'bagaimanapun juga; dengan cara apapun; tetap saja', page: 48 },
    { id: 22, jp: 'ふりをする', romaji: 'furi o suru', meaning: 'berpura-pura; bersikap seolah-olah-', page: 50 },
    { id: 23, jp: 'ふと', romaji: 'futo', meaning: 'tiba-tiba; tanpa sengaja; tak terduga', page: 52 },
    { id: 24, jp: 'がち', romaji: 'gachi', meaning: 'cenderung; sering; kerap kali~', page: 54 },
    { id: 25, jp: 'がたい', romaji: 'gatai', meaning: 'sangat sulit untuk; mustahil untuk', page: 56 },
    { id: 26, jp: '気味', romaji: 'gimi', meaning: 'agak-; terlihat-; nampak-; cenderung', page: 58 },
    { id: 27, jp: 'ごとに', romaji: 'goto ni', meaning: 'setiap; tiap; dengan interval', page: 60 },
    { id: 28, jp: 'ほど', romaji: 'hodo', meaning: 'tingkat; sejauh; batas; batas atas', page: 62 },
    { id: 29, jp: 'ほど〜ない', romaji: 'hodo~nai', meaning: 'tidak se... seperti', page: 64 },
    { id: 30, jp: '一度に', romaji: 'ichido ni', meaning: 'sekaligus; sekaligus semua', page: 66 },
    { id: 31, jp: 'いくら〜ても', romaji: 'ikura~temo', meaning: 'tidak peduli seberapa~', page: 68 },
    { id: 32, jp: '一方だ', romaji: 'ippou da', meaning: 'semakin; terus menjadi', page: 70 },
    { id: 33, jp: '一体', romaji: 'ittai', meaning: 'penekanan; apa sih sebenarnya?', page: 72 },
    { id: 34, jp: 'じゃない', romaji: 'janai', meaning: 'mungkin; kemungkinan besar; konfirmasi', page: 74 },
    { id: 35, jp: 'か何か', romaji: 'ka nani ka', meaning: 'atau sesuatu', page: 76 },
    { id: 36, jp: 'かける', romaji: 'kakeru', meaning: 'setengah-; belum selesai; di tengah-', page: 78 },
    { id: 37, jp: 'から〜にかけて', romaji: 'kara~ni kakete', meaning: 'melalui; dari [A] ke [B]', page: 80 },
    { id: 38, jp: '代わりに', romaji: 'kawari ni', meaning: 'sebagai ganti; sebagai imbalan-', page: 82 },
    { id: 39, jp: '結果', romaji: 'kekka', meaning: 'sebagai hasil dari; setelah', page: 84 },
    { id: 40, jp: '結局', romaji: 'kekkyoku', meaning: 'pada akhirnya; akhirnya; ujung-ujungnya', page: 86 },
    { id: 41, jp: '決して〜ない', romaji: 'kesshite~nai', meaning: 'tidak pernah; sama sekali tidak', page: 88 },
    { id: 42, jp: '切れない', romaji: 'kirenai', meaning: 'tidak mampu; terlalu banyak untuk diselesaikan', page: 90 },
    { id: 43, jp: 'きり', romaji: 'kiri', meaning: 'hanya; saja; sejak; setelah', page: 92 },
    { id: 44, jp: '切る', romaji: 'kiru', meaning: 'melakukan sesuatu sepenuhnya sampai akhir', page: 94 },
    { id: 45, jp: 'っけ', romaji: 'kke', meaning: 'akhiran informal untuk mengkonfirmasi sesuatu', page: 96 },
    { id: 46, jp: '込む', romaji: 'komu', meaning: 'masuk ke dalam; melakukan dalam waktu lama', page: 98 },
    { id: 47, jp: 'こそ', romaji: 'koso', meaning: 'pastilah; tepatnya; sudah pasti', page: 100 },
    { id: 48, jp: 'こと', romaji: 'koto', meaning: '(harus) melakukan', page: 102 },
    { id: 49, jp: 'ことから', romaji: 'koto kara', meaning: 'dari fakta bahwa-', page: 104 },
    { id: 50, jp: 'ことになっている', romaji: 'koto ni natteiru', meaning: 'diharapkan untuk; sudah diputuskan-', page: 106 },
    { id: 51, jp: 'ことはない', romaji: 'koto wa nai', meaning: 'tidak perlu; tidak ada kemungkinan bahwa-', page: 108 },
    { id: 52, jp: 'ことは〜が', romaji: 'koto wa~ga', meaning: 'meskipun; tetapi', page: 110 },
    { id: 53, jp: 'くらい・ぐらい', romaji: 'kurai/gurai', meaning: 'sekitar; kira-kira; sampai tingkat', page: 112 }
];

// Floating menu button untuk mobile
function createFloatingMenuBtn() {
    const btn = document.createElement('button');
    btn.className = 'floating-menu-btn';
    btn.onclick = toggleSidebar;
    btn.innerHTML = '☰';
    btn.setAttribute('aria-label', 'Toggle menu');
    document.body.appendChild(btn);
}

// Fungsi untuk generate sidebar
function generateSidebar(currentPageId = null) {
    const homeLink = (currentPageId !== null) ? '../index.html' : 'index.html';
    
    const sidebarHTML = `
        <nav class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h2><a href="${homeLink}" style="color: white; text-decoration: none;">N3 文法</a></h2>
                <button class="close-btn" onclick="toggleSidebar()">✕</button>
            </div>
            <div class="sidebar-search">
                <input type="text" id="searchInput" placeholder="Search words..." onkeyup="searchGrammar()">
            </div>
            <ul class="nav-menu" id="grammarList">
                <li class="nav-section">📖 Daftar Grammar</li>
                ${grammarData.map(g => {
                    const pagePrefix = (currentPageId && g.id === currentPageId) ? '' : (currentPageId !== null ? '../' : '');
                    const activeClass = (currentPageId && g.id === currentPageId) ? ' active' : '';
                    const href = (currentPageId !== null) ? `${pagePrefix}lessons/${g.id}.html` : `lessons/${g.id}.html`;
                    return `<li><a href="${href}" class="nav-link${activeClass}"><span class="grammar-number">${g.id}.</span>${g.jp} (${g.romaji})</a></li>`;
                }).join('')}
            </ul>
        </nav>
    `;
    
    // Hapus sidebar lama jika ada
    const oldSidebar = document.getElementById('sidebar');
    if (oldSidebar) oldSidebar.remove();
    
    // Masukkan sidebar baru di awal body
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    
    // Buat floating menu button
    createFloatingMenuBtn();
}

// Toggle kana / romaji / arti per item
function toggleRow(btn, type) {
    const item = btn.closest('.example-item');
    const row = item.querySelector(`.row-${type}`);
    
    row.classList.toggle('show');
    btn.classList.toggle('active');
}

// Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('open');
}

// Search function
function searchGrammar() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const filter = input.value.toLowerCase();
    const links = document.querySelectorAll('#grammarList .nav-link');
    
    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes(filter)) {
            link.classList.remove('hidden');
        } else {
            link.classList.add('hidden');
        }
    });
}

// Close sidebar on outside click (mobile)
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const floatingBtn = document.querySelector('.floating-menu-btn');
    
    if (sidebar && window.innerWidth <= 768 && 
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) && 
        e.target !== floatingBtn) {
        sidebar.classList.remove('open');
    }
});

// Keyboard shortcut
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('open');
    }
});

// Auto-detect current page ID dari URL
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const match = path.match(/lessons\/(\d+)\.html/);
    if (match) {
        generateSidebar(parseInt(match[1]));
    } else if (path.includes('index.html') || path.endsWith('/N3/') || path.endsWith('/')) {
        generateSidebar(null);
    }
});