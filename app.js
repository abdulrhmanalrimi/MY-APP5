// =============================
// 1) بيانات الدروس
// =============================

const LESSONS = {
  'types-of-word': {
    id: 'types-of-word',
    title: 'أنواع الكلمة',
    categoryId: 'intro',
    videos: [
      {
        title: 'أنواع الكلمة',
        url: 'https://youtu.be/46MwuNDrdlo?si=yHVbvc0IS1QbtRft'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'kinds-of-noun': {
    id: 'kinds-of-noun',
    title: 'أقسام الاسم',
    categoryId: 'intro',
    videos: [
      {
        title: 'أقسام الاسم',
        url: 'https://youtu.be/gd6oBVpED1U?si=3-PD1pHIJPDtI6uF'
      }
    ],
    images: [],
    contentHtml: ''
  },

  sentence: {
    id: 'sentence',
    title: 'الجملة',
    categoryId: 'sentences',
    videos: [
      {
        title: 'الجملة',
        url: 'https://youtu.be/9AR0d5IUSSo?si=hr3P7QyUKslCVCh2'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'verb-types': {
    id: 'verb-types',
    title: 'أقسام الفعل',
    categoryId: 'verbs',
    videos: [
      {
        title: 'أقسام الفعل (الفعل الصحيح والمعتل)',
        url: 'https://youtu.be/OBPXE1K1NOE?si=Y4VAxXMM0YM4-3RP'
      },
      {
        title: 'أقسام الفعل (المجرد والمزيد)',
        url: 'https://youtu.be/dpQz0U4x3t8?si=tkbmy7kR3sQtKWTR'
      },
      {
        title: 'أقسام الفعل (اللازم والمتعدي)',
        url: 'https://youtu.be/GP7z8T5B5_0?si=R5UfITqhPUP0oK67'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'present-raf': {
    id: 'present-raf',
    title: 'رفع الفعل المضارع',
    categoryId: 'verbs',
    videos: [
      {
        title: 'رفع الفعل المضارع',
        url: 'https://youtu.be/63dRKoaxLh4?si=zSjX0oOGj0ujR6n7'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'present-nasb': {
    id: 'present-nasb',
    title: 'نصب الفعل المضارع',
    categoryId: 'verbs',
    videos: [
      {
        title: 'نصب الفعل المضارع',
        url: 'https://youtu.be/OH8e6y1Elow?si=HAStLo7C7DoK8iTu'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'present-jazm': {
    id: 'present-jazm',
    title: 'جزم الفعل المضارع',
    categoryId: 'verbs',
    videos: [
      {
        title: 'جزم الفعل المضارع',
        url: 'https://youtu.be/9CCiiFMsUyU?si=PpRYerP40K8nOwij'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'five-verbs': {
    id: 'five-verbs',
    title: 'الأفعال الخمسة',
    categoryId: 'verbs',
    videos: [
      {
        title: 'الأفعال الخمسة (الجزء الأول)',
        url: 'https://youtu.be/GqM1QhxMsK4?si=cObgFffyyQNCVku1'
      },
      {
        title: 'الأفعال الخمسة (الجزء الثاني)',
        url: 'https://youtu.be/5Dy3vwxvptw?feature=shared'
      }
    ],
    images: [],
    contentHtml: ''
  },

  subject: {
    id: 'subject',
    title: 'الفاعل',
    categoryId: 'fael',
    videos: [
      {
        title: 'الفاعل (الجزء الأول)',
        url: 'https://youtu.be/cWs98q2K7sc?feature=shared'
      },
      {
        title: 'الفاعل (الجزء الثاني)',
        url: 'https://youtu.be/GeoiDO3Y6ls?si=mkLO2JaER52opXow'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'naib-fael': {
    id: 'naib-fael',
    title: 'نائب الفاعل',
    categoryId: 'fael',
    videos: [
      {
        title: 'نائب الفاعل (الجزء الأول)',
        url: 'https://youtu.be/2tLJA0MfiJA?si=cC5U9tgim3MYx0yR'
      },
      {
        title: 'نائب الفاعل (الجزء الثاني)',
        url: 'https://youtu.be/PiAOOQJzi9M?feature=shared'
      }
    ],
    images: [],
    contentHtml: ''
  },

  object: {
    id: 'object',
    title: 'المفعول به',
    categoryId: 'objects',
    videos: [
      {
        title: 'المفعول به',
        url: 'https://youtu.be/-sSadKciHjA?si=J7aYxgFml5Pq0fFP'
      }
    ],
    images: [],
    contentHtml: ''
  },

  pronoun: {
    id: 'pronoun',
    title: 'الضمير',
    categoryId: 'pronouns',
    videos: [
      {
        title: 'الضمير',
        url: 'https://youtu.be/cGxdW8XgiOs?si=dan-xmlnrHCNMYSG'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'address-pronouns': {
    id: 'address-pronouns',
    title: 'ضمائر الخطاب',
    categoryId: 'pronouns',
    videos: [
      {
        title: 'ضمائر الخطاب',
        url: 'https://youtu.be/aYnw3u2ChRI?si=C01Y6-zYlPunF-jF'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'absent-pronouns': {
    id: 'absent-pronouns',
    title: 'ضمائر الغائب',
    categoryId: 'pronouns',
    videos: [
      {
        title: 'ضمائر الغائب',
        url: 'https://youtu.be/aYnw3u2ChRI?si=C01Y6-zYlPunF-jF'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'speaker-pronouns': {
    id: 'speaker-pronouns',
    title: 'ضمائر المتكلم',
    categoryId: 'pronouns',
    videos: [
      {
        title: 'ضمائر المتكلم',
        url: 'https://youtu.be/aYnw3u2ChRI?si=C01Y6-zYlPunF-jF'
      }
    ],
    images: [],
    contentHtml: ''
  },

  demonstratives: {
    id: 'demonstratives',
    title: 'أسماء الإشارة',
    categoryId: 'nouns',
    videos: [
      {
        title: 'أسماء الإشارة',
        url: 'https://youtu.be/eO0c3sBP6Zg?si=Up6ALenO0749PGzc'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'relative-pronouns': {
    id: 'relative-pronouns',
    title: 'الأسماء الموصولة',
    categoryId: 'nouns',
    videos: [
      {
        title: 'الأسماء الموصولة',
        url: 'https://youtu.be/tPIEgfxmDr0?si=t1ed37kxFOR77WRF'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'five-nouns': {
    id: 'five-nouns',
    title: 'الأسماء الخمسة',
    categoryId: 'nouns',
    videos: [
      {
        title: 'الأسماء الخمسة',
        url: 'https://youtu.be/Ao6gfEK177o?si=IO3W-EWf7nZHpn41'
      }
    ],
    images: [],
    contentHtml: ''
  },

  kana: {
    id: 'kana',
    title: 'كان وأخواتها',
    categoryId: 'sentence-grammar',
    videos: [
      {
        title: 'كان وأخواتها',
        url: 'https://youtu.be/ARmVdKlDwxA?si=V2DWQVPL9cPBqnVU'
      }
    ],
    images: [],
    contentHtml: ''
  },

  kada: {
    id: 'kada',
    title: 'كاد وأخواتها',
    categoryId: 'sentence-grammar',
    videos: [
      {
        title: 'كاد وأخواتها',
        url: 'https://youtu.be/IQL4DXk2vig?feature=shared'
      }
    ],
    images: [],
    contentHtml: ''
  },

  inna: {
    id: 'inna',
    title: 'إن وأخواتها',
    categoryId: 'sentence-grammar',
    videos: [
      {
        title: 'إن وأخواتها',
        url: 'https://youtu.be/6exrOOT9chw?si=-xbF_TblqbNCaXG8'
      }
    ],
    images: [],
    contentHtml: ''
  },

  dhanna: {
    id: 'dhanna',
    title: 'ظن وأخواتها',
    categoryId: 'sentence-grammar',
    videos: [
      {
        title: 'ظن وأخواتها',
        url: 'https://youtu.be/fVSvZHFsrpI?feature=shared'
      }
    ],
    images: [],
    contentHtml: ''
  },

  tawabi: {
    id: 'tawabi',
    title: 'التوابع',
    categoryId: 'tawabi',
    videos: [
      {
        title: 'التوابع',
        url: 'https://youtu.be/miXr0AI-qBc?si=moLUWnx536LRHUSW'
      }
    ],
    images: [],
    contentHtml: ''
  },

  naat: {
    id: 'naat',
    title: 'النعت (الصفة)',
    categoryId: 'tawabi',
    videos: [
      {
        title: 'النعت (الصفة)',
        url: 'https://youtu.be/Cu6xb3CgW8U?si=KsmLqlNz2oddtzFz'
      }
    ],
    images: [],
    contentHtml: ''
  },

  atf: {
    id: 'atf',
    title: 'العطف',
    categoryId: 'tawabi',
    videos: [
      {
        title: 'العطف',
        url: 'https://youtu.be/5V-uGR2ZL4M?si=-rFW0xHc4uhVlqhO'
      }
    ],
    images: [],
    contentHtml: ''
  },

  tawkeed: {
    id: 'tawkeed',
    title: 'التوكيد',
    categoryId: 'tawabi',
    videos: [
      {
        title: 'التوكيد',
        url: 'https://youtu.be/PJJ4dXlYuxw?si=Sqk1UKiN-NJUvSL4'
      }
    ],
    images: [],
    contentHtml: ''
  },

  badal: {
    id: 'badal',
    title: 'البدل',
    categoryId: 'tawabi',
    videos: [
      {
        title: 'البدل',
        url: 'https://youtu.be/1Qg0zSoIFLg?si=B_rElnDxyXjKCYDn'
      }
    ],
    images: [],
    contentHtml: ''
  },

  haal: {
    id: 'haal',
    title: 'الحال',
    categoryId: 'tawabi',
    videos: [
      {
        title: 'الحال',
        url: 'https://youtu.be/7JxHhdJGMYE?si=weJ9Hz5R7yappj-8'
      }
    ],
    images: [],
    contentHtml: ''
  },

  tamyeez: {
    id: 'tamyeez',
    title: 'التمييز',
    categoryId: 'tawabi',
    videos: [
      {
        title: 'التمييز',
        url: 'https://youtu.be/Z3VulRoUu1I?si=n_GvQ71SSf6Q6OMa'
      }
    ],
    images: [],
    contentHtml: ''
  },

  nakira: {
    id: 'nakira',
    title: 'النكرة',
    categoryId: 'nouns',
    videos: [
      {
        title: 'النكرة',
        url: 'https://youtu.be/RQ0t11gzZHA?feature=shared'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'jar-ism': {
    id: 'jar-ism',
    title: 'جر الاسم',
    categoryId: 'nouns',
    videos: [
      {
        title: 'جر الاسم',
        url: 'https://youtu.be/yJ60Yy-_FDg?si=lHCN7SUE-r5eLx9Z'
      }
    ],
    images: [],
    contentHtml: ''
  },

  'mudaf-ilayh': {
    id: 'mudaf-ilayh',
    title: 'المضاف إليه',
    categoryId: 'nouns',
    videos: [
      {
        title: 'المضاف إليه',
        url: 'https://youtu.be/vFBGO9pF3Ew?si=daXcyxkMSYbYZmjL'
      }
    ],
    images: [],
    contentHtml: ''
  },

  interrogatives: {
    id: 'interrogatives',
    title: 'أدوات الاستفهام',
    categoryId: 'styles',
    videos: [
      {
        title: 'أدوات الاستفهام',
        url: 'https://youtu.be/fY-y8LqX6Bk?si=LU1wqp5iTMB_YQOB'
      }
    ],
    images: [
      // ضع هنا مسار صورة أدوات الاستفهام إن أحببت
      // "public/lessons/أدوات الاستفهام.jpg"
    ],
    contentHtml: `
      <section class="lesson-section">
        <p>
          أسلوب الاستفهام هو سؤال نستخدم فيه أداة خاصة حتى نطلب معلومة مجهولة
          عن شخص أو شيء أو زمان أو مكان. :contentReference[oaicite:0]{index=0}
        </p>

        <p>من أهم أدوات الاستفهام في العربية:</p>

        <ul>
          <li><strong>مَنْ / مَنْ ذا</strong> للسؤال عن العاقل.</li>
          <li><strong>ما / ماذا</strong> للسؤال عن غير العاقل أو عن الشيء.</li>
          <li><strong>متى</strong> للسؤال عن الزمان الحاضر أو الماضي.</li>
          <li><strong>أيان</strong> للسؤال عن الزمن في المستقبل.</li>
          <li><strong>أين</strong> للسؤال عن المكان.</li>
          <li><strong>كيف</strong> للسؤال عن الحال والهيئة.</li>
          <li><strong>كم</strong> للسؤال عن العدد.</li>
          <li><strong>أيُّ</strong> للسؤال عن تعيين واحد من بين مجموعة.</li>
        </ul>

        <p>أمثلة توضيحية:</p>
        <ul>
          <li>مَنْ آخر الخلفاء الراشدين؟ (للسؤال عن العاقل)</li>
          <li>ما أحبُّ العلوم إليك؟ (للسؤال عن غير العاقل)</li>
          <li>متى رجعت؟ (للسؤال عن الزمان)</li>
          <li>أيان تسافر؟ (للسؤال عن الزمان المستقبل)</li>
          <li>كيف حالك؟ (للسؤال عن الحالة)</li>
          <li>كم كتابًا قرأت؟ (للسؤال عن العدد)</li>
          <li>أين أخوك؟ (للسؤال عن المكان)</li>
          <li>أيُّ رجلٍ أتى؟ (للسؤال عن تعيين الشيء)</li>
        </ul>
      </section>
    `
  }
};

// =============================
// 2) التصنيفات (Accordion)
// =============================

const CATEGORIES = [
  {
    id: 'intro',
    title: 'تعريف النحو',
    color: '#dcfce7',
    lessonIds: ['types-of-word', 'kinds-of-noun']
  },
  {
    id: 'sentences',
    title: 'الجمل',
    color: '#fef3c7',
    lessonIds: ['sentence']
  },
  {
    id: 'verbs',
    title: 'الأفعال',
    color: '#fee2e2',
    lessonIds: [
      'verb-types',
      'present-raf',
      'present-nasb',
      'present-jazm',
      'five-verbs'
    ]
  },
  {
    id: 'fael',
    title: 'الفاعل ونائب الفاعل',
    color: '#e0f2fe',
    lessonIds: ['subject', 'naib-fael']
  },
  {
    id: 'objects',
    title: 'المفاعيل',
    color: '#fef9c3',
    lessonIds: ['object']
  },
  {
    id: 'pronouns',
    title: 'الضمائر',
    color: '#f3e8ff',
    lessonIds: [
      'pronoun',
      'address-pronouns',
      'absent-pronouns',
      'speaker-pronouns'
    ]
  },
  {
    id: 'nouns',
    title: 'الأسماء وأنواعها',
    color: '#e0f2fe',
    lessonIds: [
      'demonstratives',
      'relative-pronouns',
      'five-nouns',
      'nakira',
      'jar-ism',
      'mudaf-ilayh'
    ]
  },
  {
    id: 'sentence-grammar',
    title: 'إعراب الجمل والأفعال الناسخة',
    color: '#fee2e2',
    lessonIds: ['kana', 'kada', 'inna', 'dhanna']
  },
  {
    id: 'tawabi',
    title: 'التوابع، الحال، التمييز',
    color: '#fae8ff',
    lessonIds: ['tawabi', 'naat', 'atf', 'tawkeed', 'badal', 'haal', 'tamyeez']
  },
  {
    id: 'styles',
    title: 'الأساليب النحوية',
    color: '#ecfeff',
    lessonIds: ['interrogatives']
  }
];

// =============================
// 3) حالة التطبيق (التقدّم + الملاحظات)
// =============================

const STORAGE_KEY = 'nahw-bisatate-state-v1';

let appState = {
  completedLessons: {}, // lessonId: true
  notes: {}, // lessonId: 'نص الملاحظات'
  points: 0
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed.completedLessons) appState.completedLessons = parsed.completedLessons;
    if (parsed.notes) appState.notes = parsed.notes;
    if (typeof parsed.points === 'number') appState.points = parsed.points;
  } catch (err) {
    console.warn('تعذّر قراءة الحالة من التخزين', err);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (err) {
    console.warn('تعذّر حفظ الحالة في التخزين', err);
  }
}

function getProgress() {
  const allIds = Object.keys(LESSONS);
  let completed = 0;
  allIds.forEach((id) => {
    if (appState.completedLessons[id]) completed++;
  });
  return { completed, total: allIds.length };
}

// =============================
// 4) الثيم وحجم الخط
// =============================

let fontScale = 1;

function cycleFontSize() {
  fontScale += 0.1;
  if (fontScale > 1.3) fontScale = 0.9;
  document.documentElement.style.setProperty(
    '--lesson-font-scale',
    String(fontScale)
  );
}

function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
}

// =============================
// 5) بناء الـ App Shell
// =============================

function buildAppShell() {
  const appRoot = document.getElementById('app-root');
  if (!appRoot) return;

  appRoot.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="topbar-left">
          <button id="btn-text-size" class="icon-btn" title="تغيير حجم الخط">T</button>
        </div>
        <div class="topbar-title">النحو ببساطة</div>
        <div class="topbar-right">
          <button id="btn-theme" class="icon-btn" title="الوضع الليلي">🌙</button>
        </div>
      </header>

      <main id="view-lessons" class="view active"></main>
      <main id="view-stats" class="view"></main>
      <main id="view-ask" class="view"></main>
      <main id="view-leaders" class="view"></main>

      <nav class="bottombar">
        <button class="tab-btn active" data-view="lessons">الدروس</button>
        <button class="tab-btn" data-view="stats">الإحصائيات</button>
        <button class="tab-btn" data-view="ask">اسأل المعلم</button>
        <button class="tab-btn" data-view="leaders">المتصدرون</button>
      </nav>
    </div>
  `;

  attachShellEvents();
  renderLessonsHome();
}

function attachShellEvents() {
  const btnTextSize = document.getElementById('btn-text-size');
  const btnTheme = document.getElementById('btn-theme');

  if (btnTextSize) btnTextSize.addEventListener('click', cycleFontSize);
  if (btnTheme) btnTheme.addEventListener('click', toggleTheme);

  document.querySelectorAll('.bottombar .tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      switchView(view);
    });
  });
}

function switchView(viewId) {
  document.querySelectorAll('.view').forEach((view) => {
    view.classList.toggle('active', view.id === 'view-' + viewId);
  });

  document.querySelectorAll('.bottombar .tab-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === viewId);
  });

  if (viewId === 'lessons') {
    renderLessonsHome();
  } else if (viewId === 'stats') {
    renderStatsView();
  } else if (viewId === 'ask') {
    renderAskTeacherView();
  } else if (viewId === 'leaders') {
    renderLeadersView();
  }
}

// =============================
// 6) واجهة الدروس (القائمة الرئيسية)
// =============================

function renderLessonRow(lessonId) {
  const lesson = LESSONS[lessonId];
  if (!lesson) return '';
  const isCompleted = !!appState.completedLessons[lessonId];
  const hasVideo = lesson.videos && lesson.videos.length > 0;

  return `
    <li class="lesson-row" data-lesson-id="${lessonId}">
      <div class="lesson-row-main">
        <span class="lesson-title">${lesson.title}</span>
        ${isCompleted ? '<span class="lesson-status">✅</span>' : ''}
      </div>
      <div class="lesson-row-meta">
        ${hasVideo ? '<span>🎥 يحتوي فيديو</span>' : ''}
      </div>
    </li>
  `;
}

function renderLessonsHome() {
  const view = document.getElementById('view-lessons');
  if (!view) return;

  const progress = getProgress();

  let html = `
    <header class="app-header">
      <h2>دروس النحو</h2>
      <p>اختر التصنيف والدرس الذي تريد البدء به.</p>
    </header>

    <section class="card">
      <strong>تقدّمك العام:</strong>
      <p>الدروس المكتملة: ${progress.completed} من ${progress.total}</p>
    </section>
  `;

  CATEGORIES.forEach((cat, index) => {
    const catLessons = cat.lessonIds.filter((id) => LESSONS[id]);
    const completedInCat = catLessons.filter(
      (id) => appState.completedLessons[id]
    ).length;
    const bodyHiddenClass = index === 0 ? '' : 'hidden';

    html += `
      <article class="card category-card" style="background:${cat.color};">
        <button class="category-header" data-cat-id="${cat.id}">
          <div>
            <h3>${cat.title}</h3>
            <p>${catLessons.length} درس — مكتمل: ${completedInCat}</p>
          </div>
          <span>▼</span>
        </button>
        <div class="category-body ${bodyHiddenClass}" data-cat-body="${cat.id}">
          <ul class="lessons-list">
            ${catLessons.map((id) => renderLessonRow(id)).join('')}
          </ul>
        </div>
      </article>
    `;
  });

  view.innerHTML = html;

  document.querySelectorAll('.category-header').forEach((btn) => {
    btn.addEventListener('click', () => {
      const catId = btn.dataset.catId;
      const body = document.querySelector(
        `.category-body[data-cat-body="${catId}"]`
      );
      if (!body) return;
      body.classList.toggle('hidden');
    });
  });

  document.querySelectorAll('.lesson-row').forEach((row) => {
    row.addEventListener('click', () => {
      const lessonId = row.dataset.lessonId;
      renderLessonDetail(lessonId);
    });
  });
}

// =============================
// 7) صفحة تفاصيل الدرس
// =============================

function renderLessonDetail(lessonId) {
  const lesson = LESSONS[lessonId];
  const view = document.getElementById('view-lessons');
  if (!lesson || !view) return;

  const isCompleted = !!appState.completedLessons[lessonId];
  const notes = appState.notes[lessonId] || '';

  let imagesHtml = '';
  if (lesson.images && lesson.images.length) {
    imagesHtml = `
      <section class="card">
        <h3>صور توضيحية</h3>
        ${lesson.images
          .map(
            (src) => `
              <figure class="lesson-image">
                <img src="${src}" alt="${lesson.title}" />
              </figure>
            `
          )
          .join('')}
      </section>
    `;
  }

  let videosHtml = '';
  if (lesson.videos && lesson.videos.length) {
    videosHtml = `
      <section class="card">
        <h3>الفيديوهات التوضيحية</h3>
        <ul class="videos-list">
          ${lesson.videos
            .map(
              (v) => `
                <li>
                  <strong>${v.title}</strong><br />
                  <a href="${v.url}" target="_blank" rel="noopener">مشاهدة على يوتيوب</a>
                </li>
              `
            )
            .join('')}
        </ul>
      </section>
    `;
  }

  view.innerHTML = `
    <button class="primary-btn" id="back-to-lessons" style="margin-bottom:0.8rem;">
      ← العودة إلى الدروس
    </button>

    <section class="card">
      <h2>${lesson.title}</h2>
    </section>

    ${imagesHtml}

    <section class="card lesson-content">
      <h3>محتوى الدرس</h3>
      ${
        lesson.contentHtml && lesson.contentHtml.trim()
          ? lesson.contentHtml
          : '<p>سيتم إضافة المحتوى التفصيلي لهذا الدرس لاحقًا.</p>'
      }
    </section>

    ${videosHtml}

    <section class="card">
      <h3>ملاحظاتي الشخصية</h3>
      <textarea id="notes-text" rows="4" style="width:100%;">${notes}</textarea>
      <button class="primary-btn" id="save-notes" style="margin-top:0.4rem;">
        حفظ الملاحظات
      </button>
    </section>

    <section class="card">
      <h3>حالة الدرس</h3>
      <p>الحالة الحالية: ${isCompleted ? '✅ مكتمل' : 'لم يُكمَل بعد'}</p>
      <button class="primary-btn" id="toggle-complete">
        ${isCompleted ? 'إزالة علامة الإكمال' : 'وضع علامة درس مكتمل'}
      </button>
    </section>
  `;

  document.getElementById('back-to-lessons').addEventListener('click', () => {
    const ok = window.confirm(
      'هل أنت متأكد من العودة إلى قائمة الدروس؟\nالعلم يحتاج صبرًا، لا تتعجّل الخروج 😊'
    );
    if (!ok) return;
    renderLessonsHome();
  });

  document.getElementById('save-notes').addEventListener('click', () => {
    const textarea = document.getElementById('notes-text');
    appState.notes[lessonId] = textarea.value;
    saveState();
    alert('تم حفظ ملاحظاتك ✅');
  });

  document.getElementById('toggle-complete').addEventListener('click', () => {
    appState.completedLessons[lessonId] = !appState.completedLessons[lessonId];
    if (appState.completedLessons[lessonId]) {
      appState.points += 10;
    } else {
      appState.points = Math.max(0, appState.points - 10);
    }
    saveState();
    renderLessonDetail(lessonId);
  });
}

// =============================
// 8) صفحة الإحصائيات
// =============================

function renderStatsView() {
  const view = document.getElementById('view-stats');
  if (!view) return;

  const { completed, total } = getProgress();
  const percent = total ? Math.round((completed / total) * 100) : 0;

  view.innerHTML = `
    <header class="app-header">
      <h2>إحصائياتي</h2>
      <p>تابع تقدّمك في تعلّم النحو.</p>
    </header>

    <section class="card">
      <h3>التقدّم العام</h3>
      <p>الدروس المكتملة: ${completed} من ${total} (${percent}٪)</p>
      <div class="progress-bar">
        <span style="width:${percent}%;"></span>
      </div>
    </section>

    <section class="card">
      <h3>النقاط</h3>
      <p>النقاط الحالية: ${appState.points}</p>
      <p>تكسب 10 نقاط عن كل درس تضعه مكتملًا.</p>
    </section>
  `;
}

// =============================
// 9) صفحة "اسأل المعلم"
// =============================

function renderAskTeacherView() {
  const view = document.getElementById('view-ask');
  if (!view) return;

  view.innerHTML = `
    <header class="app-header">
      <h2>اسأل المعلم</h2>
      <p>اكتب سؤالك في النحو أو تواصل مباشرة مع الأستاذة المشرفة.</p>
    </header>

    <section class="card ai-question-card">
      <h3>سؤال للذكاء الاصطناعي (قريبًا)</h3>
      <p class="muted">
        في النسخة القادمة سيتم ربط هذه الخانة بخدمة ذكاء اصطناعي عبر خادم آمن،
        حتى لا نعرض مفاتيح الـ API للمتصفّح. حاليًا يمكنك استخدام هذه الخانة
        لكتابة الأسئلة أو الملاحظات التي تريد مناقشتها مع المعلم.
      </p>
      <textarea id="ai-question" rows="4" style="width:100%;" placeholder="اكتب سؤالك هنا..."></textarea>
      <button class="primary-btn ai-send-btn" id="ai-send" disabled>
        إرسال (غير مفعّل بعد)
      </button>
    </section>

    <section class="card teacher-contact">
      <div class="teacher-contact-header">
        <span class="teacher-header-icon">💬</span>
        <div>
          <h3>تواصل مع الأستاذة المشرفة</h3>
          <p>للاستفسارات والأسئلة المباشرة</p>
        </div>
      </div>

      <div class="teacher-card">
        <div class="teacher-avatar">👩‍🏫</div>
        <h4 class="teacher-name">الأستاذة/ سهام غازي</h4>
        <p class="teacher-role">المشرفة على التطبيق</p>

        <a class="teacher-phone" href="tel:+967775392526">
          +967&nbsp;775&nbsp;392&nbsp;526
        </a>

        <p class="teacher-note">
          لديك سؤال أو استفسار؟ تواصل معنا مباشرة عبر الواتساب،
          وسنكون سعداء بمساعدتك في فهم القواعد النحوية وتجاوز الصعوبات.
        </p>

        <a
          class="whatsapp-btn"
          href="https://wa.me/967775392526"
          target="_blank"
          rel="noopener"
        >
          <span>راسلنا على الواتساب</span>
          <span class="wa-icon">🟢</span>
        </a>

        <p class="teacher-time">
          أوقات الرد: من السبت إلى الخميس، ٩ صباحًا – ٥ مساءً 🕒
        </p>
      </div>
    </section>
  `;
}

// =============================
// 10) صفحة المتصدرين (محلية)
// =============================

function renderLeadersView() {
  const view = document.getElementById('view-leaders');
  if (!view) return;

  const { completed, total } = getProgress();
  const percent = total ? Math.round((completed / total) * 100) : 0;

  view.innerHTML = `
    <header class="app-header">
      <h2>المتصدرون</h2>
      <p>
        مستقبلًا يمكن ربط هذه الصفحة بقاعدة بيانات لعرض متعلّمين حقيقيين.
        حاليًا نعرض تقدّمك أنت كتجربة.
      </p>
    </header>

    <section class="card">
      <h3>مركزك الحالي (محليًا)</h3>
      <p>نسبة الإكمال: ${percent}٪</p>
      <p>النقاط: ${appState.points}</p>
      <p class="muted">
        كلما أكملت دروسًا أكثر ورفعت نقاطك، ارتفع مركزك بين المتعلمين 😊
      </p>
    </section>
  `;
}

// =============================
// 11) نقطة البداية
// =============================

document.addEventListener('DOMContentLoaded', () => {
  loadState();

  const landing = document.getElementById('landing');
  const startBtn = document.getElementById('start-learning');
  const appRoot = document.getElementById('app-root');

  if (!landing || !startBtn || !appRoot) return;

  startBtn.addEventListener('click', () => {
    landing.classList.add('hidden');
    appRoot.classList.remove('hidden');
    buildAppShell();
  });
});
