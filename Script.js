// ===== داده کامل باس‌ها با HP دقیق =====
const bosses = [
  // Pre-Hardmode
  { id:"desert", name:"Desert Scourge", stage:"Pre-Hardmode", biome:"Desert", hp:"4200", trait:"کرم صحرایی؛ حرکت موجی", img:"assets/bosses/desert-scourge.png", stats:["دفاع: کم","سرعت: متوسط"], drops:["Ocean Crest","Seabound Staff","Sand Cloak"], strategy:["پلتفرم در بیابان","تمرکز روی سر"] },
  { id:"crabulon", name:"Crabulon", stage:"Pre-Hardmode", biome:"Glowing Mushroom", hp:"6800", trait:"خرچنگ قارچی؛ قارچ‌های انفجاری", img:"assets/bosses/crabulon.png", stats:["دفاع: متوسط","احضار قارچ‌ها"], drops:["Fungicide","Mycelial Claws"], strategy:["پلتفرم کوچک","پرش کوتاه"] },
  { id:"hive", name:"The Hive Mind", stage:"Pre-Hardmode", biome:"Corruption", hp:"8900", trait:"دو فاز؛ احضار ادهای Corruption", img:"assets/bosses/hive-mind.png", stats:["دفاع: 8","فاز ۱: ثابت + احضار ادها","فاز ۲: حرکت آهسته + حملات متنوع"], drops:["Rotten Matter","Demonite Bar"], strategy:["زمین صاف با پلتفرم‌های دو ردیفه","Victide/Shadow Armor"] },
  { id:"perforators", name:"The Perforators", stage:"Pre-Hardmode", biome:"Crimson", hp:"متغیر (هسته‌ها و کرم‌ها)", trait:"چند واحد؛ هسته‌ها + کرم‌ها", img:"assets/bosses/perforators.png", stats:["پروجکتایل‌های خونین","الگوها با نابودی هسته‌ها تغییر می‌کند"], drops:["Bloody Worm Scarf","مواد Crimson"], strategy:["پلتفرم‌های بلند","حذف هسته‌ها اولویت دارد"] },
  { id:"slimegod", name:"The Slime God", stage:"Pre-Hardmode", biome:"Surface/Underground", hp:"27000", trait:"دو هسته + Core؛ فشار زیاد", img:"assets/bosses/slime-god.png", stats:["دو هسته با رفتار متفاوت","Core پس از نابودی هسته‌ها فعال‌تر می‌شود"], drops:["Purified Gel","Statigel Armor"], strategy:["زمین بزرگ و باز","تمرکز روی یک هسته"] },

  // Hardmode
  { id:"cryogen", name:"Cryogen", stage:"Hardmode", biome:"Snow/Ice", hp:"42000", trait:"سپر یخی و فازهای دفاعی/تهاجمی", img:"assets/bosses/cryogen.png", stats:["پروجکتایل‌های یخی","حرکت چرخشی"], drops:["Cryonic Ore","Trophy"], strategy:["اجتناب از اسلوم","پلتفرم‌های چندسطحه"] },
  { id:"aquatic", name:"Aquatic Scourge", stage:"Hardmode", biome:"Ocean/Desert", hp:"98000", trait:"کرم آبی؛ حرکت موجی سریع", img:"assets/bosses/aquatic-scourge.png", stats:["پروجکتایل‌های سمی","گستره حرکت وسیع"], drops:["Ocean gear","Materials"], strategy:["فضای وسیع","جاخالی افقی مداوم"] },
  { id:"brimstone", name:"Brimstone Elemental", stage:"Hardmode", biome:"Brimstone Crag", hp:"112000", trait:"آتش/Brimstone؛ تلپورت محدود", img:"assets/bosses/brimstone-elemental.png", stats:["پروجکتایل‌های آتشین","الگوهای موجی"], drops:["Brimstone weapons"], strategy:["اکسسوری ضد آتش","Mage/Ranged"] },
  { id:"calclone", name:"Calamitas Clone", stage:"Hardmode", biome:"Anywhere", hp:"180000", trait:"جادو/مین‌ها/تلپورت", img:"assets/bosses/calamitas-clone.png", stats:["مین‌های زمینی","باران پروجکتایل"], drops:["Shadowflame items"], strategy:["حرکت مداوم","زمین باز برای مانور"] },
  { id:"aureus", name:"Astrum Aureus", stage:"Hardmode", biome:"Astral Surface", hp:"200000", trait:"پروجکتایل‌های نجومی", img:"assets/bosses/astrum-aureus.png", stats:["ستاره‌های تعقیب‌گر","فازهای آرام/تهاجمی"], drops:["Astral Bars"], strategy:["زمین گسترده","Ranged بلندبرد"] },

  // Post-Moon Lord
  { id:"providence", name:"Providence", stage:"Post-Moon Lord", biome:"Profaned/Hallow", hp:"1000000", trait:"نور/آتش؛ انفجارهای شعاعی", img:"assets/bosses/providence.png", stats:["انگریج محیطی ممکن","پروجکتایل‌های مقدس"], drops:["Providence relic"], strategy:["محدوده مناسب","خواندن الگوهای شعاعی"] },
  { id:"weaver", name:"Storm Weaver", stage:"Post-Moon Lord", biome:"Sky/Space", hp:"1200000", trait:"آسیب به نقاط خاص بدن", img:"assets/bosses/storm-weaver.png", stats:["سرعت بالا","حرکت مارپیچی"], drops:["Storm loot"], strategy:["تمرکز بر نقاط آسیب‌پذیر","Ranged دقیق"] },
  { id:"void", name:"Ceaseless Void", stage:"Post-Moon Lord", biome:"Summon Anywhere", hp:"1500000", trait:"سایه‌ها/مین‌های Void", img:"assets/bosses/ceaseless-void.png", stats:["احضار سایه‌ها","پنجره‌های آسیب محدود"], drops:["Void loot"], strategy:["صبر برای پنجره‌های آسیب","کنترل موقعیت"] },
  { id:"signus", name:"Signus", stage:"Post-Moon Lord", biome:"Summon Anywhere", hp:"1700000", trait:"حرکت سریع؛ سایه‌ای", img:"assets/bosses/signus.png", stats:["تلپورت سریع","پروجکتایل‌های دنبال‌گر"], drops:["Shadow loot"], strategy:["حفظ فاصله","جهت‌یابی سریع"] },
  { id:"deus", name:"Astrum Deus", stage:"Post-Moon Lord", biome:"Space/Astral", hp:"2000000", trait:"دو کرم هماهنگ", img:"assets/bosses/astrum-deus.png", stats:["حملات هماهنگ","پروجکتایل‌های تعقیب‌گر"], drops:["Astral loot"], strategy:["مدیریت دو هدف","زمین فوق‌گسترده"] },

  // Endgame
  { id:"polter", name:"Polterghast", stage:"Endgame", biome:"Dungeon/Abyss", hp:"3000000", trait:"طیفی؛ موج‌های تهاجم", img:"assets/bosses/polterghast.png", stats:["سه فاز","تلپورت"], drops:["Ruinous Souls"], strategy:["زمین باز","خواندن الگوها"] },
  { id:"dog", name:"Devourer of Gods", stage:"Endgame", biome:"Anywhere", hp:"3500000", trait:"فشار و سرعت؛ فازهای متعدد", img:"assets/bosses/devourer-of-gods.png", stats:["حرکت‌های فوق‌سریع","پنجره‌های کوتاه آسیب"], drops:["Cosmic loot"], strategy:["حافظه الگوها","زمین بزرگ"] },
  { id:"yharon", name:"Yharon", stage:"Endgame", biome:"Jungle/Arena", hp:"4000000", trait:"دو فاز؛ شعله‌ها/بادهای داغ", img:"assets/bosses/yharon.png", stats:["باران شعله","داش سریع"], drops:["Yharon loot"], strategy:["ضد آتش","پلتفرم‌های بلند"] },
  { id:"scal", name:"Supreme Calamitas", stage:"Endgame", biome:"Arena", hp:"5000000", trait:"گلوله‌باران جهنمی؛ چندلایه", img:"assets/bosses/supreme-calamitas.png", stats:["حلقه‌ها، مین‌ها، باران پروجکتایل"], drops:["Supreme loot"], strategy:["تمرکز آهنین","سرعت/مصونیت موقت"] },
 { id:"nameless", name:"Nameless Deity", stage:"Endgame", biome:"Arena", hp:"6000000", trait:"ترکیب الگوهای چند باس", img:"assets/bosses/nameless-deity.png", stats:["حرکات غیرقابل پیش‌بینی","پنجره‌های آسیب بسیار کوتاه"], drops:["Relic/Vanity","Lore نهایی"], strategy:["بیلدف بهینه","تمرین الگوهای ترکیبی"] }
];

// ===== DOM refs =====
const bossListEl = document.getElementById('bossList');
const searchInputEl = document.getElementById('searchInput');
const stageFilterEl = document.getElementById('stageFilter');

const bossTitleEl = document.getElementById('bossTitle');
const bossImageEl = document.getElementById('bossImage');
const bossBiomeEl = document.getElementById('bossBiome');
const bossStageEl = document.getElementById('bossStage');
const bossHPEl = document.getElementById('bossHP');
const bossTraitEl = document.getElementById('bossTrait');
const statsListEl = document.getElementById('statsList');
const dropsListEl = document.getElementById('dropsList');
const strategyListEl = document.getElementById('strategyList');

// ===== List render =====
function renderList() {
  const q = (searchInputEl.value || '').toLowerCase().trim();
  const s = stageFilterEl.value;

  const filtered = bosses.filter(b =>
    (!s || b.stage === s) &&
    (!q || b.name.toLowerCase().includes(q))
  );

  bossListEl.innerHTML = '';
  if (filtered.length === 0) {
    bossListEl.innerHTML = `<li class="muted">هیچ باسی یافت نشد.</li>`;
    return;
  }

  const stagesOrder = ["Pre-Hardmode", "Hardmode", "Post-Moon Lord", "Endgame"];
  stagesOrder.forEach(stage => {
    const group = filtered.filter(b => b.stage === stage);
    if (group.length === 0) return;

    group.forEach(b => {
      const li = document.createElement('li');
      li.className = 'boss-item';
      li.innerHTML = `
        <img src="${b.img}" alt="${b.name}" class="thumb">
        <div style="flex:1">
          <strong>${b.name}</strong>
          <div class="muted" style="font-size:12px">${b.biome}</div>
        </div>
        <span class="badge">${b.stage}</span>
      `;
      li.onclick = () => showBoss(b);
      bossListEl.appendChild(li);
    });
  });
}

// ===== Show boss details =====
function showBoss(b) {
  bossTitleEl.textContent = b.name;
  bossImageEl.innerHTML = `<img src="${b.img}" alt="${b.name}" style="width:100%;height:200px;object-fit:contain;background:#000">`;
  bossBiomeEl.textContent = b.biome;
  bossStageEl.textContent = b.stage;
  bossHPEl.textContent = b.hp;
  bossTraitEl.textContent = b.trait;

  statsListEl.innerHTML = b.stats.map(s => `<li>${s}</li>`).join('');
  dropsListEl.innerHTML = b.drops.map(d => `<li>${d}</li>`).join('');
  strategyListEl.innerHTML = b.strategy.map(st => `<li>${st}</li>`).join('');
}

// ===== Events =====
searchInputEl.addEventListener('input', renderList);
stageFilterEl.addEventListener('change', renderList);

// ===== Init =====
renderList();
