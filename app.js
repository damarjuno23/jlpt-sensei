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
    { id: 14, jp: 'ぶりに', romaji: 'buri ni', meaning: 'pertama kalinya dalam (periode)', page: 34 },
    { id: 15, jp: '中', romaji: 'chuu/juu', meaning: 'sedang; selama; sepanjang', page: 36 },
    { id: 16, jp: 'だけ', romaji: 'dake', meaning: 'sebanyak-', page: 38 },
    { id: 17, jp: 'だけでなく', romaji: 'dake de naku', meaning: 'tidak hanya... tetapi juga', page: 40 },
    { id: 18, jp: 'だけど', romaji: 'dakedo', meaning: 'namun; tetapi', page: 42 },
    { id: 19, jp: 'だらけ', romaji: 'darake', meaning: 'penuh dengan; dipenuhi; banyak-', page: 44 },
    { id: 20, jp: 'どんなに〜ても', romaji: 'donna ni~temo', meaning: 'tidak peduli seberapa (banyak)', page: 46 },
    { id: 21, jp: 'どうしても', romaji: 'doushitemo', meaning: 'bagaimanapun juga; tetap saja', page: 48 },
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
    { id: 40, jp: '結局', romaji: 'kekkyoku', meaning: 'pada akhirnya; ujung-ujungnya', page: 86 },
    { id: 41, jp: '決して〜ない', romaji: 'kesshite~nai', meaning: 'tidak pernah; sama sekali tidak', page: 88 },
    { id: 42, jp: '切れない', romaji: 'kirenai', meaning: 'tidak mampu; terlalu banyak', page: 90 },
    { id: 43, jp: 'きり', romaji: 'kiri', meaning: 'hanya; saja; sejak; setelah', page: 92 },
    { id: 44, jp: '切る', romaji: 'kiru', meaning: 'melakukan sesuatu sepenuhnya', page: 94 },
    { id: 45, jp: 'っけ', romaji: 'kke', meaning: 'akhiran informal untuk konfirmasi', page: 96 },
    { id: 46, jp: '込む', romaji: 'komu', meaning: 'masuk ke dalam; melakukan lama', page: 98 },
    { id: 47, jp: 'こそ', romaji: 'koso', meaning: 'pastilah; tepatnya; sudah pasti', page: 100 },
    { id: 48, jp: 'こと', romaji: 'koto', meaning: '(harus) melakukan', page: 102 },
    { id: 49, jp: 'ことから', romaji: 'koto kara', meaning: 'dari fakta bahwa-', page: 104 },
    { id: 50, jp: 'ことになっている', romaji: 'koto ni natteiru', meaning: 'diharapkan; sudah diputuskan-', page: 106 },
    { id: 51, jp: 'ことはない', romaji: 'koto wa nai', meaning: 'tidak perlu; tidak ada kemungkinan', page: 108 },
    { id: 52, jp: 'ことは〜が', romaji: 'koto wa~ga', meaning: 'meskipun; tetapi', page: 110 },
    { id: 53, jp: 'くらい・ぐらい', romaji: 'kurai/gurai', meaning: 'sekitar; kira-kira; sampai tingkat', page: 112 },
    { id: 54, jp: 'くせに', romaji: 'kuse ni', meaning: 'meskipun; walaupun faktanya-', page: 115 },
    { id: 55, jp: 'まるで', romaji: 'maru de', meaning: 'seolah-olah; seakan-akan; seperti', page: 117 },
    { id: 56, jp: 'まさか', romaji: 'masaka', meaning: 'mana mungkin; tidak mungkin', page: 119 },
    { id: 57, jp: 'めったに〜ない', romaji: 'metta ni~nai', meaning: 'jarang; hampir tidak pernah', page: 121 },
    { id: 58, jp: 'も〜ば〜も', romaji: 'mo~ba~mo', meaning: 'dan; juga; baik... maupun', page: 123 },
    { id: 59, jp: 'もしかしたら', romaji: 'moshika shitara', meaning: 'mungkin; barangkali; bisa jadi', page: 125 },
    { id: 60, jp: 'もしも〜たら', romaji: 'moshimo~tara', meaning: 'jika; seandainya; andaikata-', page: 127 },
    { id: 61, jp: '向け', romaji: 'muke', meaning: 'ditujukan untuk; diarahkan pada-', page: 129 },
    { id: 62, jp: '向き', romaji: 'muki', meaning: 'cocok untuk-', page: 131 },
    { id: 63, jp: 'むしろ', romaji: 'mushiro', meaning: 'lebih baik; daripada; malah', page: 133 },
    { id: 64, jp: 'ながらも', romaji: 'nagara mo', meaning: 'tetapi; meskipun; walaupun', page: 135 },
    { id: 65, jp: 'ないことはない', romaji: 'nai koto wa nai', meaning: 'bisa melakukan-; bukan tidak mungkin', page: 137 },
    { id: 66, jp: 'ないと', romaji: 'naito', meaning: 'harus melakukan; kecuali jika-', page: 139 },
    { id: 67, jp: 'なかなか', romaji: 'nakanaka', meaning: 'cukup; lumayan; tidak mudah-', page: 141 },
    { id: 68, jp: 'なんか/なんて', romaji: 'nanka/nante', meaning: 'contoh; kerendahan hati; meremehkan', page: 143 },
    { id: 69, jp: '直す', romaji: 'naosu', meaning: 'melakukan lagi; mengulang', page: 145 },
    { id: 70, jp: 'なるべく', romaji: 'naru beku', meaning: 'sebisa mungkin', page: 147 },
    { id: 71, jp: 'なぜなら', romaji: 'nazenara', meaning: 'karena; alasannya adalah', page: 149 },
    { id: 72, jp: 'んだって', romaji: 'ndatte', meaning: 'kudengar; katanya-', page: 151 },
    { id: 73, jp: 'に違いない', romaji: 'ni chigai nai', meaning: 'pasti; tidak diragukan lagi', page: 153 },
    { id: 74, jp: 'に反して', romaji: 'ni hanshite', meaning: 'berlawanan; bertentangan dengan', page: 155 },
    { id: 75, jp: 'にかけて', romaji: 'ni kakete', meaning: 'mengenai; terkait; selama periode', page: 157 },
    { id: 76, jp: 'に関する', romaji: 'ni kan suru', meaning: 'tentang; mengenai; terkait', page: 159 },
    { id: 77, jp: 'にかわって', romaji: 'ni kawatte', meaning: 'atas nama; menggantikan-', page: 161 },
    { id: 78, jp: 'に比べて', romaji: 'ni kurabete', meaning: 'dibandingkan dengan', page: 163 },
    { id: 79, jp: 'に慣れる', romaji: 'ni nareru', meaning: 'terbiasa dengan sesuatu', page: 165 },
    { id: 80, jp: 'において', romaji: 'ni oite', meaning: 'di; pada; mengenai; tentang', page: 167 },
    { id: 81, jp: 'にしたがって', romaji: 'ni shitagatte', meaning: 'sesuai dengan; seiring dengan', page: 169 },
    { id: 82, jp: 'にしても', romaji: 'ni shite mo', meaning: 'bahkan jika; meskipun; terlepas dari', page: 171 },
    { id: 83, jp: 'にしては', romaji: 'ni shite wa', meaning: 'untuk; mengingat bahwa-', page: 173 },
    { id: 84, jp: 'に対して', romaji: 'ni taishite', meaning: 'terhadap; mengenai-', page: 175 },
    { id: 85, jp: 'にとって', romaji: 'ni totte', meaning: 'untuk; bagi; mengenai-', page: 177 },
    { id: 86, jp: 'について', romaji: 'ni tsuite', meaning: 'mengenai; tentang; perihal', page: 179 },
    { id: 87, jp: 'につれて', romaji: 'ni tsurete', meaning: 'seiring dengan; ketika... maka...', page: 181 },
    { id: 88, jp: 'には', romaji: 'ni wa', meaning: 'untuk tujuan; dalam rangka-', page: 183 },
    { id: 89, jp: 'によると/によれば', romaji: 'ni yoru to/ni yoreba', meaning: 'menurut-', page: 185 },
    { id: 90, jp: 'によって/による', romaji: 'ni yotte/ni yoru', meaning: 'oleh karena; disebabkan; dengan', page: 187 },
    { id: 91, jp: 'のでしょうか', romaji: 'no deshou ka', meaning: 'bertanya dengan cara sopan', page: 189 },
    { id: 92, jp: 'を中心に', romaji: 'o chuushin ni', meaning: 'berfokus pada; berpusat pada', page: 191 },
    { id: 93, jp: 'をはじめ', romaji: 'o hajime', meaning: 'misalnya; dimulai dengan', page: 193 },
    { id: 94, jp: 'を込めて', romaji: 'o komete', meaning: 'penuh dengan; diisi dengan', page: 195 },
    { id: 95, jp: 'を通じて/を通して', romaji: 'o tsuujite/o tooshite', meaning: 'melalui; lewat; sepanjang', page: 197 },
    { id: 96, jp: 'おかげで', romaji: 'okage de', meaning: 'berkat ...; karena ...', page: 199 },
    { id: 97, jp: 'っぱなし', romaji: 'ppanashi', meaning: 'meninggalkan (sesuatu) tetap menyala', page: 201 },
    { id: 98, jp: 'っぽい', romaji: 'ppoi', meaning: 'tampak; agak; -ish; mudah~', page: 203 },
    { id: 99, jp: 'さえ', romaji: 'sae', meaning: 'bahkan; saja; tidak bahkan', page: 206 },
    { id: 100, jp: 'さえ〜ば', romaji: 'sae~ba', meaning: 'asal saja, selama', page: 208 },
    { id: 101, jp: '際に', romaji: 'sai ni', meaning: 'ketika; pada saat; dalam hal', page: 210 },
    { id: 102, jp: '最中に', romaji: 'saichuu ni', meaning: 'saat; selama; di tengah', page: 212 },
    { id: 103, jp: 'さらに', romaji: 'sara ni', meaning: 'lebih lanjut; lagi; semakin', page: 214 },
    { id: 104, jp: 'さて', romaji: 'sate', meaning: 'konjungsi: baiklah; nah; lalu', page: 216 },
    { id: 105, jp: 'せいで', romaji: 'sei de', meaning: 'karena; akibat; gara-gara~', page: 218 },
    { id: 106, jp: 'せいぜい', romaji: 'seizei', meaning: 'paling-paling; maksimal', page: 220 },
    { id: 107, jp: 'しばらく', romaji: 'shibaraku', meaning: 'sebentar; untuk sementara', page: 222 },
    { id: 108, jp: 'しかない', romaji: 'shikanai', meaning: 'tidak ada pilihan selain-', page: 224 },
    { id: 109, jp: 'そのために', romaji: 'sono tame ni', meaning: 'oleh karena itu; karena itu', page: 226 },
    { id: 110, jp: 'それとも', romaji: 'soretomo', meaning: 'atau; ataukah', page: 228 },
    { id: 111, jp: 'そうもない', romaji: 'sou mo nai', meaning: 'sangat tidak mungkin~', page: 230 },
    { id: 112, jp: 'すでに', romaji: 'sude ni', meaning: 'sudah; telah dilakukan', page: 232 },
    { id: 113, jp: 'すなわち', romaji: 'sunawachi', meaning: 'dengan kata lain; yaitu', page: 234 },
    { id: 114, jp: '数量+は', romaji: 'suuryou + wa', meaning: 'setidaknya', page: 236 },
    { id: 115, jp: 'たものだ', romaji: 'ta mono da', meaning: 'dulu sering; biasa melakukan', page: 238 },
    { id: 116, jp: 'たとたん', romaji: 'ta totan', meaning: 'segera setelah; begitu', page: 240 },
    { id: 117, jp: 'たびに', romaji: 'tabi ni', meaning: 'setiap kali; kapanpun', page: 242 },
    { id: 118, jp: 'ために', romaji: 'tame ni', meaning: 'untuk; demi; agar', page: 244 },
    { id: 119, jp: '確かに', romaji: 'tashika ni', meaning: 'memang, tentu saja', page: 247 },
    { id: 120, jp: 'たて', romaji: 'tate', meaning: 'baru saja dilakukan; segar', page: 249 },
    { id: 121, jp: 'たとえ〜ても', romaji: 'tatoe~temo', meaning: 'bahkan jika... sekalipun', page: 251 },
    { id: 122, jp: '例えば', romaji: 'tatoeba', meaning: 'misalnya', page: 253 },
    { id: 123, jp: 'たって', romaji: 'tatte', meaning: 'bahkan jika; meskipun; tidak peduli', page: 255 },
    { id: 124, jp: 'てばかりいる', romaji: 'te bakari iru', meaning: 'hanya; tidak lain hanya-', page: 257 },
    { id: 125, jp: 'てごらん', romaji: 'te goran', meaning: '(tolong) coba; (tolong) lihat', page: 259 },
    { id: 126, jp: 'てはじめて', romaji: 'te hajimete', meaning: 'baru setelah; hanya setelah [x]', page: 261 },
    { id: 127, jp: 'てからでないと', romaji: 'te kara de nai to', meaning: 'harus dulu; tidak bisa tanpa-', page: 263 },
    { id: 128, jp: 'てしょうがない', romaji: 'te shou ga nai', meaning: 'tidak tahan~; sangat; amat', page: 265 },
    { id: 129, jp: 'て済む', romaji: 'te sumu', meaning: 'cukup dengan; selesai dengan-', page: 267 },
    { id: 130, jp: 'てはいけないから', romaji: 'te wa ikenai kara', meaning: 'agar tidak-', page: 269 },
    { id: 131, jp: 'ている場合じゃない', romaji: 'teiru baai janai', meaning: 'ini bukan waktunya untuk-', page: 271 },
    { id: 132, jp: '的', romaji: 'teki', meaning: 'mengubah kata benda jadi na-adj', page: 273 },
    { id: 133, jp: 'ても始まらない', romaji: 'temo hajimaranai', meaning: 'percuma meskipun kamu...', page: 275 },
    { id: 134, jp: 'てもかまわない', romaji: 'temo kamawanai', meaning: 'tidak masalah jika-', page: 277 },
    { id: 135, jp: 'てもしょうがない', romaji: 'temo shou ga nai', meaning: 'tidak ada gunanya~; percuma~', page: 279 },
    { id: 136, jp: 'と言えば', romaji: 'to ieba', meaning: 'bicara tentang; kalau bicara soal-', page: 281 },
    { id: 137, jp: 'といい/たらいい', romaji: 'to ii/tara ii', meaning: 'akan bagus jika; sebaiknya; harapan-', page: 283 },
    { id: 138, jp: 'といっても', romaji: 'to ittemo', meaning: 'meskipun dikatakan; walaupun-', page: 285 },
    { id: 139, jp: 'ということだ', romaji: 'to iu koto da', meaning: 'kudengar; artinya; dengan kata lain-', page: 287 },
    { id: 140, jp: 'というのは', romaji: 'to iu nowa', meaning: 'ini berarti; karena; maksudnya', page: 290 },
    { id: 141, jp: 'と言うと', romaji: 'to iu to', meaning: 'bicara tentang; ketika kamu bilang', page: 292 },
    { id: 142, jp: 'というより', romaji: 'to iu yori', meaning: 'daripada-', page: 294 },
    { id: 143, jp: 'とみえる/とみえて', romaji: 'to mieru/to miete', meaning: 'tampaknya-', page: 296 },
    { id: 144, jp: 'とすれば', romaji: 'to sureba', meaning: 'dalam hal; jika A maka B', page: 298 },
    { id: 145, jp: 'と共に', romaji: 'to tomo ni', meaning: 'bersama dengan; seiring dengan', page: 300 },
    { id: 146, jp: '途中で', romaji: 'tochuu de', meaning: 'di tengah jalan; di tengah-', page: 302 },
    { id: 147, jp: 'ところで', romaji: 'tokoro de', meaning: 'ngomong-ngomong-', page: 304 },
    { id: 148, jp: 'ところが', romaji: 'tokoro ga', meaning: 'namun; meskipun begitu-', page: 306 },
    { id: 149, jp: 'とおりに', romaji: 'toori ni', meaning: 'sama seperti; sesuai dengan', page: 308 },
    { id: 150, jp: '通す', romaji: 'toosu', meaning: 'melakukan sampai akhir; terus-menerus', page: 310 },
    { id: 151, jp: 'として', romaji: 'toshite', meaning: 'sebagai; dalam peran-', page: 312 },
    { id: 152, jp: 'とても〜ない', romaji: 'totemo~nai', meaning: 'tidak mungkin; hampir tidak-', page: 314 },
    { id: 153, jp: 'とは限らない', romaji: 'towa kagiranai', meaning: 'belum tentu; tidak selalu benar', page: 316 },
    { id: 154, jp: 'つい', romaji: 'tsui', meaning: 'tanpa sengaja; tidak sengaja', page: 318 },
    { id: 155, jp: 'ついに', romaji: 'tsui ni', meaning: 'akhirnya; pada akhirnya', page: 320 },
    { id: 156, jp: 'ついでに', romaji: 'tsuide ni', meaning: 'sambil; sekalian; pada saat sama', page: 322 },
    { id: 157, jp: 'つまり', romaji: 'tsumari', meaning: 'singkatnya; dengan kata lain; intinya', page: 324 },
    { id: 158, jp: 'つもりだった', romaji: 'tsumori datta', meaning: 'aku pikir sudah-; aku yakin-', page: 326 },
    { id: 159, jp: 'つもりで', romaji: 'tsumori de', meaning: 'dengan niat melakukan-', page: 328 },
    { id: 160, jp: 'うちに', romaji: 'uchi ni', meaning: 'selagi; sebelum-', page: 330 },
    { id: 161, jp: '上で', romaji: 'ue de', meaning: 'setelah; ketika; untuk; dalam rangka', page: 332 },
    { id: 162, jp: '上に', romaji: 'ue ni', meaning: 'tambahan lagi; tidak hanya... juga', page: 335 },
    { id: 163, jp: 'は別として', romaji: 'wa betsu toshite', meaning: 'terlepas dari; entah atau tidak-', page: 337 },
    { id: 164, jp: 'はもちろん', romaji: 'wa mochiron', meaning: 'apalagi; tidak hanya; tetapi juga-', page: 339 },
    { id: 165, jp: 'は〜で有名', romaji: 'wa~de yuumei', meaning: 'terkenal karena-', page: 341 },
    { id: 166, jp: 'わけだ', romaji: 'wake da', meaning: 'karena itu; pantas saja', page: 343 },
    { id: 167, jp: 'わけではない', romaji: 'wake dewa nai', meaning: 'bukan berarti-', page: 345 },
    { id: 168, jp: 'わけがない', romaji: 'wake ga nai', meaning: 'tidak mungkin; mana mungkin-', page: 347 },
    { id: 169, jp: 'わけにはいかない', romaji: 'wake niwa ikanai', meaning: 'tidak boleh; tidak bisa; harus~', page: 349 },
    { id: 170, jp: '割に', romaji: 'wari ni', meaning: 'mengingat; relatif; tak terduga', page: 351 },
    { id: 171, jp: 'わざと', romaji: 'wazato', meaning: 'sengaja; dengan sengaja-', page: 353 },
    { id: 172, jp: 'わざわざ', romaji: 'wazawaza', meaning: 'bersusah payah untuk', page: 355 },
    { id: 173, jp: 'よりも', romaji: 'yorimo', meaning: 'daripada-; lebih dari-', page: 357 },
    { id: 174, jp: 'ようがない', romaji: 'you ga nai', meaning: 'tidak ada cara untuk; mustahil-', page: 359 },
    { id: 175, jp: 'ような気がする', romaji: 'you na ki ga suru', meaning: 'merasa seperti; tampaknya; sepertinya', page: 361 },
    { id: 176, jp: 'ように', romaji: 'you ni', meaning: 'agar, sehingga-', page: 363 },
    { id: 177, jp: 'ように見える', romaji: 'you ni mieru', meaning: 'terlihat; tampak; nampak-', page: 365 },
    { id: 178, jp: 'ようとしない', romaji: 'you to shinai', meaning: 'tidak mencoba; tidak berusaha-', page: 367 },
    { id: 179, jp: 'ようとする', romaji: 'you to suru', meaning: 'mencoba; berusaha; akan-', page: 369 },
    { id: 180, jp: 'ずに', romaji: 'zuni', meaning: 'tanpa melakukan-', page: 371 },
    { id: 181, jp: 'ずにはいられない', romaji: 'zuni wa irarenai', meaning: 'tidak bisa tidak merasa/melakukan', page: 373 },
    { id: 182, jp: 'ずつ', romaji: 'zutsu', meaning: 'masing-masing; setiap; per', page: 375 }
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
    
    // Grup per 10
    let grammarListHTML = '';
    for (let i = 0; i < grammarData.length; i += 10) {
        const group = grammarData.slice(i, i + 10);
        const start = group[0].id;
        const end = group[group.length - 1].id;
        
        grammarListHTML += `
            <li class="nav-section" onclick="toggleGroup(this)" style="cursor:pointer;">
                 Lesson ${start}-${end} <span class="group-arrow">▶</span>
            </li>
            <div class="grammar-group" style="display:none;">
                ${group.map(g => {
                    const pagePrefix = (currentPageId && g.id === currentPageId) ? '' : (currentPageId !== null ? '../' : '');
                    const activeClass = (currentPageId && g.id === currentPageId) ? ' active' : '';
                    const href = (currentPageId !== null) ? `${pagePrefix}lessons/${g.id}.html` : `lessons/${g.id}.html`;
                    return `<li><a href="${href}" class="nav-link${activeClass}"><span class="grammar-number">${g.id}.</span>${g.jp} (${g.romaji})</a></li>`;
                }).join('')}
            </div>
        `;
    }
    
    const sidebarHTML = `
        <nav class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h2><a href="${homeLink}" style="color: white; text-decoration: none;">N3 文法</a></h2>
                <button class="close-btn" onclick="toggleSidebar()">✕</button>
            </div>
            <div class="sidebar-search">
                <input type="text" id="searchInput" placeholder="Search..." onkeyup="searchGrammar()">
            </div>
            <ul class="nav-menu" id="grammarList">
                ${grammarListHTML}
            </ul>
        </nav>
    `;
    
    const oldSidebar = document.getElementById('sidebar');
    if (oldSidebar) oldSidebar.remove();
    
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
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
    const groups = document.querySelectorAll('.grammar-group');
    const sections = document.querySelectorAll('.nav-section');
    
    groups.forEach(group => {
        const links = group.querySelectorAll('.nav-link');
        let hasMatch = false;
        
        links.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (filter === '' || text.includes(filter)) {
                link.classList.remove('hidden');
                hasMatch = true;
            } else {
                link.classList.add('hidden');
            }
        });
        
        // Tampilkan/sembunyikan grup
        if (filter === '') {
            group.style.display = 'none';
            sections.forEach(s => {
                const arrow = s.querySelector('.group-arrow');
                if (arrow) arrow.textContent = '▶';
            });
        } else if (hasMatch) {
            group.style.display = 'block';
            const section = group.previousElementSibling;
            if (section) {
                const arrow = section.querySelector('.group-arrow');
                if (arrow) arrow.textContent = '▼';
            }
        } else {
            group.style.display = 'none';
        }
    });
}

function toggleGroup(el) {
    const arrow = el.querySelector('.group-arrow');
    const group = el.nextElementSibling;
    
    if (group.style.display === 'none') {
        group.style.display = 'block';
        arrow.textContent = '▼';
    } else {
        group.style.display = 'none';
        arrow.textContent = '▶';
    }
}
function addQuizButton() {
    const nav = document.querySelector('.navigation');
    if (!nav) return;
    
    const path = window.location.pathname;
    const match = path.match(/lessons\/(\d+)\.html/);
    if (!match) return;
    
    const lessonId = match[1];
    
    // Hapus tombol quiz biru yang sudah ada
    const existingBtn = nav.querySelector('a.nav-button[href*="quiz"]');
    if (existingBtn) existingBtn.remove();
    
    // Tambah tombol quiz merah
    const quizBtn = document.createElement('a');
    quizBtn.href = `../quiz/select.html?lesson=${lessonId}`;
    quizBtn.className = 'nav-button';
    quizBtn.textContent = '📝 Quiz';
    quizBtn.style.background = '#e74c3c';
    
    const nextBtn = nav.querySelector('a:last-child');
    nav.insertBefore(quizBtn, nextBtn);
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

document.addEventListener('DOMContentLoaded', () => {
    addQuizButton();
});