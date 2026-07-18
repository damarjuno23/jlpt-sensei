const allQuizData = [
    // Lesson 1: 上げる
    { lessonId: 1, sentence: '彼女は小説を書き＿＿＿。', blank: '上げた', options: ['上げた', 'あまり', '合い', 'きり'], correct: 0 },
    { lessonId: 1, sentence: '研究のレポートを一日で書き＿＿＿。', blank: '上げた', options: ['切った', '合った', '上げた', '込んだ'], correct: 2 },
    { lessonId: 1, sentence: 'この会社は新製品を作り＿＿＿。', blank: '上げた', options: ['上げた', '出した', '合った', 'きった'], correct: 0 },

    // Lesson 2: あまり
    { lessonId: 2, sentence: '嬉しさの＿＿＿、彼女は涙を流しました。', blank: 'あまり', options: ['あまり', 'あまりにも', 'ばかり', 'ほど'], correct: 0 },
    { lessonId: 2, sentence: '父は娘を心配する＿＿＿、倒れてしまった。', blank: 'あまり', options: ['あまり', 'ばかり', 'かわりに', 'ように'], correct: 0 },
    { lessonId: 2, sentence: '怒りの＿＿＿口がきけなかった。', blank: 'あまり', options: ['ことに', 'あまり', 'ばかり', 'ほど'], correct: 1 },

    // Lesson 3: あまりにも
    { lessonId: 3, sentence: '最近＿＿＿暑すぎる。', blank: 'あまりに', options: ['あまり', 'あまりに', 'ばかり', 'ほど'], correct: 1 },
    { lessonId: 3, sentence: '彼は＿＿＿変わった。', blank: 'あまりにも', options: ['あまりにも', 'ばかりで', 'かわりに', 'ように'], correct: 0 },
    { lessonId: 3, sentence: '＿＿＿疲れているので仕事ができない。', blank: 'あまりにも', options: ['あまり', 'ばかり', 'あまりにも', 'ほど'], correct: 2 },

    // Lesson 4: 合う
    { lessonId: 4, sentence: '困った時は助け＿＿＿ましょう。', blank: '合い', options: ['合い', 'あまり', '上げ', 'きり'], correct: 0 },
    { lessonId: 4, sentence: 'お互い助け＿＿＿べきだ。', blank: '合う', options: ['上げる', 'あまり', '合う', '切る'], correct: 2 },
    { lessonId: 4, sentence: '隣の人と相談し＿＿＿答えを考えてください。', blank: '合って', options: ['上げて', '合って', '切って', '出して'], correct: 1 },

    // Lesson 5: ばいい
    { lessonId: 5, sentence: 'どうすれ＿＿＿ですか？', blank: 'ばいい', options: ['ばいい', 'ばかり', 'ても', 'たら'], correct: 0 },
    { lessonId: 5, sentence: 'どこに行け＿＿＿ですか？', blank: 'ばいい', options: ['ばかり', 'ばいい', 'ても', 'のに'], correct: 1 },
    { lessonId: 5, sentence: 'もう少し雨が降れ＿＿＿な。', blank: 'ばいい', options: ['ばかり', 'ても', 'ばいい', 'のに'], correct: 2 },

    // Lesson 6: ばよかった
    { lessonId: 6, sentence: '傘を持ってくれ＿＿＿。', blank: 'ばよかった', options: ['ばよかった', 'ばかりで', 'ても', 'ばいい'], correct: 0 },
    { lessonId: 6, sentence: 'もっと早く家を出れ＿＿＿。', blank: 'ばよかった', options: ['ばかり', 'ばよかった', 'ても', 'ばいい'], correct: 1 },
    { lessonId: 6, sentence: '早く連絡してくれれ＿＿＿のに。', blank: 'ばよかった', options: ['ばかり', 'ても', 'ばよかった', 'ばいい'], correct: 2 },

    // Lesson 7: ば〜ほど
    { lessonId: 7, sentence: '勉強すれ＿＿＿する＿＿＿、日本語が上手になります。', blank: 'ば〜ほど', options: ['ば〜ほど', 'ても〜ても', 'たり〜たり', 'ながら〜ながら'], correct: 0 },
    { lessonId: 7, sentence: '考えれ＿＿＿考える＿＿＿わからなくなる。', blank: 'ば〜ほど', options: ['ても〜ても', 'ば〜ほど', 'たら〜たら', 'たり〜たり'], correct: 1 },
    { lessonId: 7, sentence: 'スーパーは家から近けれ＿＿＿近い＿＿＿便利です。', blank: 'ば〜ほど', options: ['ても〜ても', 'たら〜たら', 'ば〜ほど', 'ながら〜ながら'], correct: 2 },

    // Lesson 8: ば〜のに
    { lessonId: 8, sentence: 'もっと安けれ＿＿＿いい＿＿＿。', blank: 'ば〜のに', options: ['ば〜のに', 'ても〜ても', 'ばかり', 'ほど'], correct: 0 },
    { lessonId: 8, sentence: '車で行け＿＿＿、間に合った＿＿＿。', blank: 'ば〜のに', options: ['ても〜ても', 'ばかり', 'ば〜のに', 'ほど'], correct: 2 },
    { lessonId: 8, sentence: 'あと10分があれ＿＿＿、全部解ける＿＿＿。', blank: 'ば〜のに', options: ['ばかり', 'ば〜のに', 'ても', 'ほど'], correct: 1 },

    // Lesson 9: ばかりで
    { lessonId: 9, sentence: '夏は暑い＿＿＿楽しくないですよ。', blank: 'ばかりで', options: ['ばかりで', 'ばかりでなく', 'あまり', 'ほど'], correct: 0 },
    { lessonId: 9, sentence: 'うちの子は毎日遊んでいる＿＿＿勉強をしない。', blank: 'ばかりで', options: ['ばかりでなく', 'あまり', 'ばかりで', 'かわりに'], correct: 2 },
    { lessonId: 9, sentence: 'この仕事は忙しい＿＿＿、意味がない。', blank: 'ばかりで', options: ['ばかりでなく', 'あまり', 'ほど', 'ばかりで'], correct: 3 },

    // Lesson 10: ばかりでなく
    { lessonId: 10, sentence: '彼は歌＿＿＿ダンスも上手です。', blank: 'ばかりでなく', options: ['ばかりで', 'ばかりでなく', 'あまり', 'ほど'], correct: 1 },
    { lessonId: 10, sentence: 'このレストランは味が悪い＿＿＿、店員の態度もひどい。', blank: 'ばかりでなく', options: ['ばかりで', 'あまり', 'ばかりでなく', 'かわりに'], correct: 2 },
    { lessonId: 10, sentence: '東京を案内してくれた＿＿＿、食事もごちそうしてくれた。', blank: 'ばかりでなく', options: ['ばかりで', 'ばかりでなく', 'あまり', 'ほど'], correct: 1 }
];