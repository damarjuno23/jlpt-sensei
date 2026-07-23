document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grammarGrid');
    if (grid) {
        grammarData.forEach(grammar => {
            const card = document.createElement('a');
            card.href = `lessons/${grammar.id}.html`;
            card.className = 'grammar-card';
            card.innerHTML = `
                <div class="number">#${grammar.id}</div>
                <div class="jp">${grammar.jp}</div>
                <div class="romaji">${grammar.romaji}</div>
            `;
            grid.appendChild(card);
        });
    }

});