// =============================
// 1) بيانات الدروس LESSONS
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
    images: [],
    contentHtml: ''
  }
};

// =============================
// 2) التصنيفات CATEGORIES
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
// 3) حالة التطبيق (تقدّم + ملاحظات + مفضلة + نتائج اختبارات)
// =============================

const STORAGE_KEY = 'nahw-bisatate-state-v2';

let appState = {
  completedLessons: {}, // lessonId: true
  notes: {}, // lessonId: 'text'
  favorites: {}, // lessonId: true
  points: 0,
  quizResults: [] // مصفوفة نتائج الاختبارات (0-100)
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed.completedLessons) appState.completedLessons = parsed.completedLessons;
    if (parsed.notes) appState.notes = parsed.notes;
    if (parsed.favorites) appState.favorites = parsed.favorites;
    if (typeof parsed.points === 'number') appState.points = parsed.points;
    if (Array.isArray(parsed.quizResults)) appState.quizResults = parsed.quizResults;
  } catch (err) {
    console.warn('تعذر قراءة الحالة من التخزين', err);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (err) {
    console.warn('تعذر حفظ الحالة في التخزين', err);
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

function getAverageQuizScore() {
  const arr = appState.quizResults || [];
  if (!arr.length) return null;
  const sum = arr.reduce((s, v) => s + v, 0);
  return Math.round(sum / arr.length);
}

function getCategoryStats() {
  return CATEGORIES.map((cat) => {
    const total = cat.lessonIds.filter((id) => LESSONS[id]).length;
    const completed = cat.lessonIds.filter(
      (id) => LESSONS[id] && appState.completedLessons[id]
    ).length;
    const percent = total ? Math.round((completed / total) * 100) : 0;
    return {
      id: cat.id,
      title: cat.title,
      total,
      completed,
      percent
    };
  });
}

function toggleFavorite(lessonId) {
  if (appState.favorites[lessonId]) {
    delete appState.favorites[lessonId];
  } else {
    appState.favorites[lessonId] = true;
  }
  saveState();
}

// =============================
// 4) الثيم + حجم الخط
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
          <button id="btn-theme" class="icon-btn" title="الوضع الليلي">🌙</button>
        </div>
        <div class="topbar-title">النحو ببساطة</div>
        <div class="topbar-right">
          <button id="btn-text-size" class="icon-btn" title="تغيير حجم الخط">T</button>
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
// 6) واجهة قائمة الدروس
// =============================

function renderLessonRow(lessonId) {
  const lesson = LESSONS[lessonId];
  if (!lesson) return '';
  const isCompleted = !!appState.completedLessons[lessonId];
  const isFavorite = !!appState.favorites[lessonId];
  const hasVideo = lesson.videos && lesson.videos.length > 0;

  return `
    <li class="lesson-row" data-lesson-id="${lessonId}">
      <div class="lesson-row-main">
        <span class="lesson-title">${lesson.title}</span>
        <button
          class="favorite-toggle"
          data-lesson-id="${lessonId}"
          aria-label="تبديل المفضلة"
          style="border:none;background:transparent;font-size:1.1rem;cursor:pointer;">
          ${isFavorite ? '★' : '☆'}
        </button>
      </div>
      <div class="lesson-row-meta">
        ${hasVideo ? '<span>🎥 يحتوي فيديو</span>' : ''}
        ${isCompleted ? '<span> · مكتمل ✅</span>' : ''}
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

  // فتح / إغلاق التصنيف
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

  // فتح صفحة الدرس
  document.querySelectorAll('.lesson-row').forEach((row) => {
    row.addEventListener('click', () => {
      const lessonId = row.dataset.lessonId;
      renderLessonDetail(lessonId);
    });
  });

  // تبديل المفضلة من القائمة
  document.querySelectorAll('.favorite-toggle').forEach((btn) => {
    btn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const lessonId = btn.dataset.lessonId;
      toggleFavorite(lessonId);
      renderLessonsHome();
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
  const isFavorite = !!appState.favorites[lessonId];

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
      <div class="lesson-detail-header" style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;">
        <h2 style="margin:0;">${lesson.title}</h2>
        <button
          id="favorite-detail-toggle"
          aria-label="تبديل المفضلة"
          style="border:none;background:transparent;font-size:1.4rem;cursor:pointer;">
          ${isFavorite ? '★' : '☆'}
        </button>
      </div>
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
      <h3>تحميل الدرس</h3>
      <p class="muted">سيتم فتح نافذة الطباعة، ويمكنك اختيار "حفظ كملف PDF" من المتصفح.</p>
      <button class="primary-btn" id="download-pdf">
        تحميل الدرس بصيغة PDF
      </button>
    </section>

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

  // زر العودة مع مودال جميل
  document
    .getElementById('back-to-lessons')
    .addEventListener('click', () => {
      showExitConfirmModal(() => {
        renderLessonsHome();
      });
    });

  // حفظ الملاحظات
  document.getElementById('save-notes').addEventListener('click', () => {
    const textarea = document.getElementById('notes-text');
    appState.notes[lessonId] = textarea.value;
    saveState();
    alert('تم حفظ ملاحظاتك ✅');
  });

  // تبديل حالة الإكمال
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

  // تبديل المفضلة من صفحة الدرس
  const favBtn = document.getElementById('favorite-detail-toggle');
  if (favBtn) {
    favBtn.addEventListener('click', () => {
      toggleFavorite(lessonId);
      renderLessonDetail(lessonId);
    });
  }

  // تحميل PDF
  const downloadBtn = document.getElementById('download-pdf');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      downloadLessonPdf(lessonId);
    });
  }
}

// إنشاء نافذة للطباعة / الحفظ كـ PDF
function downloadLessonPdf(lessonId) {
  const lesson = LESSONS[lessonId];
  if (!lesson) return;

  const html = `
    <!doctype html>
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="utf-8" />
        <title>${lesson.title}</title>
        <style>
          body {
            font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
            line-height: 1.8;
            padding: 24px;
          }
          h1 {
            text-align: center;
            margin-bottom: 18px;
          }
          h2, h3 {
            margin-top: 18px;
          }
          p, li {
            font-size: 16px;
          }
          ul {
            padding-right: 20px;
          }
        </style>
      </head>
      <body>
        <h1>${lesson.title}</h1>
        ${
          lesson.contentHtml && lesson.contentHtml.trim()
            ? lesson.contentHtml
            : '<p>سيتم إضافة محتوى هذا الدرس لاحقًا.</p>'
        }
      </body>
    </html>
  `;

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('تعذر فتح نافذة جديدة، قد يكون المتصفح حظر النوافذ المنبثقة.');
    return;
  }
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();

  printWindow.onload = function () {
    printWindow.print();
  };
}

// =============================
// 8) الشارات والإنجازات
// =============================

function getBadges(overall, percent) {
  const favoritesCount = Object.keys(appState.favorites).length;
  const avgScore = getAverageQuizScore();

  return [
    {
      id: 'first-lesson',
      title: 'أول خطوة',
      description: 'إكمال أول درس في التطبيق.',
      unlocked: overall.completed >= 1
    },
    {
      id: 'ten-lessons',
      title: 'محبّ النحو',
      description: 'إكمال 10 دروس أو أكثر.',
      unlocked: overall.completed >= 10
    },
    {
      id: 'half-way',
      title: 'نصف الطريق',
      description: 'الوصول إلى 50٪ من الدروس.',
      unlocked: percent >= 50
    },
    {
      id: 'full-progress',
      title: 'قمة الإتقان',
      description: 'إكمال جميع الدروس المتاحة.',
      unlocked: overall.total > 0 && percent === 100
    },
    {
      id: 'points-100',
      title: 'مجتهد',
      description: 'الحصول على 100 نقطة أو أكثر.',
      unlocked: appState.points >= 100
    },
    {
      id: 'favorites-3',
      title: 'عاشق الدروس',
      description: 'إضافة 3 دروس على الأقل إلى المفضلة.',
      unlocked: favoritesCount >= 3
    },
    {
      id: 'quiz-master',
      title: 'محترف الاختبارات',
      description: 'الوصول إلى متوسط 80٪ في الاختبارات.',
      unlocked: avgScore !== null && avgScore >= 80
    }
  ];
}

// =============================
// 9) صفحة الإحصائيات المتقدمة
// =============================

function renderStatsView() {
  const view = document.getElementById('view-stats');
  if (!view) return;

  const { completed, total } = getProgress();
  const percent = total ? Math.round((completed / total) * 100) : 0;
  const favoritesCount = Object.keys(appState.favorites).length;
  const avgScore = getAverageQuizScore();
  const catStats = getCategoryStats();
  const badges = getBadges({ completed, total }, percent);
  const unlockedBadges = badges.filter((b) => b.unlocked).length;

  const canDownloadCertificate = percent >= 60; // نسبة المطلوب للشهادة

  view.innerHTML = `
    <header class="app-header">
      <h2>إحصائياتي</h2>
      <p>تابع تقدّمك في تعلّم النحو من خلال هذه اللوحة التفاعلية.</p>
    </header>

    <!-- التقدم العام -->
    <section class="card">
      <h3>التقدّم العام</h3>
      <p>الدروس المكتملة: <strong>${completed}</strong> من <strong>${total}</strong> (${percent}٪)</p>
      <p>النقاط المكتسبة: <strong>${appState.points}</strong></p>
      <p>متوسط نتائج الاختبارات:
        <strong>${
          avgScore === null ? 'لا توجد نتائج للاختبارات بعد.' : avgScore + '٪'
        }</strong>
      </p>
      <div class="progress-bar">
        <span style="width:${percent}%;"></span>
      </div>
    </section>

    <!-- الرسوم البيانية حسب التصنيف -->
    <section class="card">
      <h3>التقدّم حسب التصنيف</h3>
      <div class="stats-bars">
        ${catStats
          .map(
            (cat) => `
          <div class="stats-bar-row">
            <div class="stats-bar-label">${cat.title}</div>
            <div class="stats-bar-track">
              <span style="width:${cat.percent}%;"></span>
            </div>
            <div class="stats-bar-value">
              ${cat.completed}/${cat.total} (${cat.percent}٪)
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </section>

    <!-- الشارات -->
    <section class="card">
      <h3>الإنجازات والشارات</h3>
      <p>الشارات المفتوحة: <strong>${unlockedBadges}</strong> من ${
    badges.length
  }</p>
      <div class="badges-grid">
        ${badges
          .map(
            (b) => `
          <div class="badge-card ${
            b.unlocked ? 'badge-unlocked' : 'badge-locked'
          }">
            <div class="badge-icon">${b.unlocked ? '🏅' : '🔒'}</div>
            <div class="badge-title">${b.title}</div>
            <div class="badge-desc">${b.description}</div>
          </div>
        `
          )
          .join('')}
      </div>
    </section>

    <!-- معلومات المفضلة -->
    <section class="card">
      <h3>المفضلة</h3>
      <p>عدد الدروس في المفضلة: <strong>${favoritesCount}</strong></p>
      <p class="muted">استخدم المفضلة لحفظ الدروس التي تريد مراجعتها باستمرار.</p>
    </section>

    <!-- شهادة الإنجاز -->
    <section class="card">
      <h3>شهادة الإنجاز</h3>
      <p>
        عند الوصول إلى تقدّم جيد في التطبيق يمكنك تحميل شهادة إنجاز بصيغة PDF
        ومشاركتها مع أصدقائك أو معلمك.
      </p>
      <button class="primary-btn" id="download-cert" ${
        canDownloadCertificate ? '' : 'disabled'
      }>
        تحميل شهادة الإنجاز PDF
      </button>
      ${
        canDownloadCertificate
          ? '<p class="muted small">🎉 رائع! يمكنك الآن تحميل الشهادة لأن تقدّمك 60٪ أو أكثر.</p>'
          : '<p class="muted small">تحتاج للوصول إلى <strong>60٪</strong> من الدروس على الأقل لتحميل الشهادة.</p>'
      }
    </section>
  `;

  // ربط زر الشهادة
  const certBtn = document.getElementById('download-cert');
  if (certBtn && canDownloadCertificate) {
    certBtn.addEventListener('click', () => {
      downloadCertificatePdf(percent);
    });
  }
}

// إنشاء شهادة إنجاز PDF
function downloadCertificatePdf(percent) {
  const { completed, total } = getProgress();

  const html = `
    <!doctype html>
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="utf-8" />
        <title>شهادة إنجاز - النحو ببساطة</title>
        <style>
          body {
            font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
            background: #ecfdf5;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          .cert {
            background: white;
            border-radius: 16px;
            padding: 32px 40px;
            border: 3px solid #10b981;
            box-shadow: 0 20px 40px rgba(16,185,129,0.25);
            width: 800px;
            max-width: 100%;
            text-align: center;
          }
          .cert-title {
            font-size: 28px;
            margin-bottom: 8px;
            color: #065f46;
          }
          .cert-subtitle {
            font-size: 18px;
            margin-bottom: 24px;
            color: #047857;
          }
          .cert-name {
            font-size: 24px;
            margin: 16px 0;
          }
          .cert-info {
            font-size: 16px;
            margin: 8px 0;
          }
          .cert-footer {
            margin-top: 32px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #6b7280;
          }
          .cert-brand {
            font-weight: 600;
            color: #10b981;
          }
        </style>
      </head>
      <body>
        <div class="cert">
          <div class="cert-title">شهادة إنجاز</div>
          <div class="cert-subtitle">تطبيق "النحو ببساطة"</div>

          <p class="cert-info">تُمنح هذه الشهادة لـ</p>
          <p class="cert-name">.........................</p>

          <p class="cert-info">
            تقديراً لاجتهاده في دراسة قواعد النحو وإكماله
            <strong>${completed}</strong> من
            <strong>${total}</strong> درسًا
            بنسبة تقدّم
            <strong>${percent}٪</strong>.
          </p>

          <p class="cert-info">
            النقاط المكتسبة داخل التطبيق: <strong>${appState.points}</strong> نقطة.
          </p>

          <div class="cert-footer">
            <span>توقيع المشرف/ـة: .......................</span>
            <span class="cert-brand">تطبيق النحو ببساطة</span>
          </div>
        </div>
      </body>
    </html>
  `;

  const w = window.open('', '_blank');
  if (!w) {
    alert('تعذر فتح نافذة جديدة، قد يكون المتصفح حظر النوافذ المنبثقة.');
    return;
  }
  w.document.open();
  w.document.write(html);
  w.document.close();
  w.focus();
  w.onload = () => w.print();
}

// =============================
// 10) صفحة "اسأل المعلم"
// =============================

function renderAskTeacherView() {
  const view = document.getElementById('view-ask');
  if (!view) return;

  view.innerHTML = `
    <header class="app-header">
      <h2>اسأل المعلم</h2>
      <p>اكتب سؤالك في النحو أو تواصل مباشرة مع الأستاذة المشرفة.</p>
    </header>

    <section class="card">
      <h3>سؤال للذكاء الاصطناعي (قريبًا)</h3>
      <p class="muted">
        في النسخة القادمة سيتم ربط هذه الخانة بخدمة ذكاء اصطناعي عبر خادم آمن،
        حتى لا نعرض مفاتيح الـ API في المتصفّح. الآن يمكنك استخدام الخانة فقط
        لتدوين الأسئلة التي تريد مناقشتها مع المعلم.
      </p>
      <textarea id="ai-question" rows="4" style="width:100%;" placeholder="اكتب سؤالك هنا..."></textarea>
      <button class="primary-btn" id="ai-send" disabled>
        إرسال (غير مفعّل بعد)
      </button>
    </section>

    <section class="card teacher-contact-card">
      <div class="teacher-contact-header">
        <div>
          <h3>تواصل مع الأستاذة المشرفة</h3>
          <p class="teacher-contact-subtitle">للاستفسارات والأسئلة المباشرة</p>
        </div>
        <span class="teacher-contact-icon">💬</span>
      </div>

      <div class="teacher-contact-inner">
        <div class="teacher-avatar">👩‍🏫</div>
        <div class="teacher-name">الأستاذة/ سهام غازي</div>
        <div class="teacher-role">المشرفة على التطبيق</div>

        <div class="teacher-phone">
          <span class="phone-icon">📞</span>
          <span class="phone-number">+967&nbsp;775&nbsp;392&nbsp;526</span>
        </div>

        <p class="teacher-message">
          لديك سؤال أو استفسار؟ تواصل معنا مباشرة عبر الواتساب،
          وسنكون سعداء بمساعدتك في فهم القواعد النحوية وتجاوز الصعوبات.
        </p>

        <a
          class="teacher-whatsapp-btn"
          href="https://wa.me/967775392526"
          target="_blank"
          rel="noopener"
        >
          <span>راسلنا على الواتساب</span>
          <span>🟢</span>
        </a>

        <p class="teacher-note">
          أوقات الرد: من السبت إلى الخميس، ٩ صباحًا – ٥ مساءً 🕒
        </p>
      </div>
    </section>
  `;
}

// =============================
// 11) صفحة المتصدرين (تجريبية)
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
        حاليًا نعرض تقدّمك أنت كتجربة محلية.
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
// 12) مودال تأكيد الخروج من الدرس
// =============================

function showExitConfirmModal(onExit) {
  const modal = document.createElement('div');
  modal.className = 'modal';

  modal.innerHTML = `
    <div class="modal-box modal-exit">
      <button class="modal-close" aria-label="إغلاق">×</button>

      <div class="exit-modal-icon">✨</div>

      <h3 class="exit-modal-title">هل أنت متأكد؟</h3>
      <p class="exit-modal-text">
        العلم يحتاج صبرًا، لا تتعجّل الخروج...
        كل دقيقة تتعلم فيها تقرّبك من الإتقان! 📚
      </p>

      <div class="modal-actions">
        <button class="secondary-btn exit-btn">الخروج</button>
        <button class="primary-btn stay-btn">متابعة التعلم</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const close = () => {
    if (modal.parentNode) modal.parentNode.removeChild(modal);
  };

  modal.querySelector('.modal-close').addEventListener('click', close);
  modal.querySelector('.stay-btn').addEventListener('click', close);

  modal.querySelector('.exit-btn').addEventListener('click', () => {
    close();
    if (typeof onExit === 'function') onExit();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
}

// =============================
// 13) نقطة البداية
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
