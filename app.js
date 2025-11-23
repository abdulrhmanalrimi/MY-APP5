// =============================
// 1) بيانات الدروس + روابط الفيديوهات الصحيحة
// =============================

const LESSONS = {
  'types-of-word': {
    title: 'أنواع الكلمة',
    categoryId: 'basics',
    videos: [
      {
        title: 'أنواع الكلمة',
        url: 'https://youtu.be/46MwuNDrdlo?si=yHVbvc0IS1QbtRft'
      }
    ],
    // عدّل المسارات حسب أسماء الصور عندك في public/lessons
    images: ['public/lessons/أنواع الكلمة.jpg'],
    contentHtml: '' // أَنْوَاعُ الكَلِمَةِ
تَنْقَسِمُ الكَلِمَةُ إِلَى ثَلاَثَةِ أَنْوَاعِ اسْمِ وَفِعْلٍ وَحَرْفٍ.

الاسْمُ: كَلِمَةٌ دَلَّتْ عَلَى مَعنِّى فِي نَفْسِهَا، وَلَمْ تقترن بزمن وينقسم إلى: -
إنسان: مثل محمد عُمَرُ، طَالِبٌ، عَائِشَةُ عَبْدُ الله، رَجُلٌ
حيوان: مثل: اسد، كَلْبٌ، بَقَرَة، ذِئْبٌ، خَرُوف ،قطة
نبات: مثل فلفل، عِنَبُ، تَفَاحَ، بِطيخ، نَعْنَاعُ ،فجل
جماد: مثل: مِسْمَارٌ، سَاعَةً حَائِط مُكْتَبْ، قلَمْ

الفِعْلُ: كَلِمَةٌ دَلَّتْ عَلَى مُعَنِّى فِي نَفْسِهَا، وَاقْتَرَنَتْ بِأَحَدِ الأَزْمِنَةِ الثَّلاثَةِ وَهُوَ يَنْقَسِمُ إِلَى ثَلَاثَةِ أَقْسَامِ:
ماض: مثل: نَصَرَ، فَهِمْ، عَلِمَ ،جَلَسَ ،اجْتَهَدَ ، أَكل
مضارع: مثل : يَنْصُرُ، يَنْهَمُ، يَعلَمُ ، يَجْلِسُ ،يَجْتَهِدُ، يَأْكُل
أمر: مثل : انصُرْ افَهُمْ اعْلَمْ اجْلِس ،كُل

الحَرْفُ: كَلِمَةٌ دَلتْ عَلَى مَعَنِّى فِي غَيْرِهَا مِثْلُ: مِنْ فَإِنَّ هَذَا اللُّفْظَ كَلِمَةٌ دَلَّتْ عَلَى معنى - وَهُوَ الْإِبْتِدَاءُ - وَهَذَا المَعْنَى لا يَتِمُ حَتَّى تَضُمُ إِلَى هَذِهِ الكَلِمَةِ غَيْرَهَا ، فَتَقُولُ مَثَلاً ذَهَبْتُ مِنَ البَيْتِ.
أَمْثَلَةُ لِلْحَرْفِ: مِنْ، أَنْ، لَنْ، إِلَى، بَلى، مَا ،عَنْ ،بَلْ ،إِنْ ،عَلَىَ، قَدْ، ثُمٌ، إٍلا ،حَتٌى   أًو، لَكِنْ، لَمْ ، فِي ، إٍن، لا (اللام) ،لك (الكافُ)



  },

  'kinds-of-noun': {
    title: 'أقسام الاسم',
    categoryId: 'basics',
    videos: [
      {
        title: 'أقسام الاسم',
        url: 'https://youtu.be/gd6oBVpED1U?si=3-PD1pHIJPDtI6uF'
      }
    ],
    images: [
      'public/lessons/أقسام الاسم (1).jpg',
      'public/lessons/أقسام الاسم (2).jpg'
    ],
    contentHtml: ''
  },

  sentence: {
    title: 'الجملة',
    categoryId: 'basics',
    videos: [
      {
        title: 'الجملة',
        url: 'https://youtu.be/9AR0d5IUSSo?si=hr3P7QyUKslCVCh2'
      }
    ],
    images: ['public/lessons/الجملة.jpg'],
    contentHtml: ''
  },

  'verb-types': {
    title: 'أقسام الفعل',
    categoryId: 'verbs',
    videos: [
      {
        title: 'أقسام الفعل',
        url: 'https://youtu.be/OBPXE1K1NOE?si=Y4VAxXMM0YM4-3RP'
      },
      {
        title: 'الفعل الصحيح والمعتل',
        url: 'https://youtu.be/dpQz0U4x3t8?si=tkbmy7kR3sQtKWTR'
      },
      {
        title: 'الفعل المجرد والمزيد / اللازم والمتعدي',
        url: 'https://youtu.be/GP7z8T5B5_0?si=R5UfITqhPUP0oK67'
      }
    ],
    images: ['public/lessons/أقسام الفعل.jpg'],
    contentHtml: ''
  },

  'present-raf': {
    title: 'رفع الفعل المضارع',
    categoryId: 'verbs',
    videos: [
      {
        title: 'رفع الفعل المضارع',
        url: 'https://youtu.be/63dRKoaxLh4?si=zSjX0oOGj0ujR6n7'
      }
    ],
    images: ['public/lessons/رفع الفعل المضارع.jpg'],
    contentHtml: ''
  },

  'present-nasb': {
    title: 'نصب الفعل المضارع',
    categoryId: 'verbs',
    videos: [
      {
        title: 'نصب الفعل المضارع',
        url: 'https://youtu.be/OH8e6y1Elow?si=HAStLo7C7DoK8iTu'
      }
    ],
    images: ['public/lessons/نصب الفعل المضارع.jpg'],
    contentHtml: ''
  },

  'present-jazm': {
    title: 'جزم الفعل المضارع',
    categoryId: 'verbs',
    videos: [
      {
        title: 'جزم الفعل المضارع',
        url: 'https://youtu.be/9CCiiFMsUyU?si=PpRYerP40K8nOwij'
      }
    ],
    images: ['public/lessons/جزم الفعل المضارع.jpg'],
    contentHtml: ''
  },

  'five-verbs': {
    title: 'الأفعال الخمسة',
    categoryId: 'verbs',
    videos: [
      {
        title: 'الأفعال الخمسة (1)',
        url: 'https://youtu.be/GqM1QhxMsK4?si=cObgFffyyQNCVku1'
      },
      {
        title: 'الأفعال الخمسة (2)',
        url: 'https://youtu.be/5Dy3vwxvptw?feature=shared'
      }
    ],
    images: ['public/lessons/الأفعال الخمسة.jpg'],
    contentHtml: ''
  },

  subject: {
    title: 'الفاعل',
    categoryId: 'fael',
    videos: [
      {
        title: 'الفاعل (1)',
        url: 'https://youtu.be/cWs98q2K7sc?feature=shared'
      },
      {
        title: 'الفاعل (2)',
        url: 'https://youtu.be/GeoiDO3Y6ls?si=mkLO2JaER52opXow'
      }
    ],
    images: ['public/lessons/الفاعل.jpg'],
    contentHtml: ''
  },

  'naib-fael': {
    title: 'نائب الفاعل',
    categoryId: 'fael',
    videos: [
      {
        title: 'نائب الفاعل (1)',
        url: 'https://youtu.be/2tLJA0MfiJA?si=cC5U9tgim3MYx0yR'
      },
      {
        title: 'نائب الفاعل (2)',
        url: 'https://youtu.be/PiAOOQJzi9M?feature=shared'
      }
    ],
    images: ['public/lessons/نائب الفاعل.jpg'],
    contentHtml: ''
  },

  object: {
    title: 'المفعول به',
    categoryId: 'objects',
    videos: [
      {
        title: 'المفعول به',
        url: 'https://youtu.be/-sSadKciHjA?si=J7aYxgFml5Pq0fFP'
      }
    ],
    images: ['public/lessons/المفعول به 1.jpg'],
    contentHtml: ''
  },

  pronoun: {
    title: 'الضمير',
    categoryId: 'pronouns',
    videos: [
      {
        title: 'الضمير',
        url: 'https://youtu.be/cGxdW8XgiOs?si=dan-xmlnrHCNMYSG'
      }
    ],
    images: ['public/lessons/الضمير.jpg'],
    contentHtml: ''
  },

  'address-pronouns': {
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
    title: 'أسماء الإشارة',
    categoryId: 'nouns',
    videos: [
      {
        title: 'أسماء الإشارة',
        url: 'https://youtu.be/eO0c3sBP6Zg?si=Up6ALenO0749PGzc'
      }
    ],
    images: ['public/lessons/أسماء الإشارة.jpg'],
    contentHtml: ''
  },

  'relative-pronouns': {
    title: 'الأسماء الموصولة',
    categoryId: 'nouns',
    videos: [
      {
        title: 'الأسماء الموصولة',
        url: 'https://youtu.be/tPIEgfxmDr0?si=t1ed37kxFOR77WRF'
      }
    ],
    images: ['public/lessons/الأسماء الموصولة.jpg'],
    contentHtml: ''
  },

  'five-nouns': {
    title: 'الأسماء الخمسة',
    categoryId: 'nouns',
    videos: [
      {
        title: 'الأسماء الخمسة',
        url: 'https://youtu.be/Ao6gfEK177o?si=IO3W-EWf7nZHpn41'
      }
    ],
    images: ['public/lessons/الأسماء الخمسة.jpg'],
    contentHtml: ''
  },

  kana: {
    title: 'كان وأخواتها',
    categoryId: 'sentence-grammar',
    videos: [
      {
        title: 'كان وأخواتها',
        url: 'https://youtu.be/ARmVdKlDwxA?si=V2DWQVPL9cPBqnVU'
      }
    ],
    images: ['public/lessons/كان وأخواتها.jpg'],
    contentHtml: ''
  },

  kada: {
    title: 'كاد وأخواتها',
    categoryId: 'sentence-grammar',
    videos: [
      {
        title: 'كاد وأخواتها',
        url: 'https://youtu.be/IQL4DXk2vig?feature=shared'
      }
    ],
    images: ['public/lessons/كاد وأخواتها.jpg'],
    contentHtml: ''
  },

  inna: {
    title: 'إن وأخواتها',
    categoryId: 'sentence-grammar',
    videos: [
      {
        title: 'إن وأخواتها',
        url: 'https://youtu.be/6exrOOT9chw?si=-xbF_TblqbNCaXG8'
      }
    ],
    images: ['public/lessons/إن وأخواتها.jpg'],
    contentHtml: ''
  },

  dhanna: {
    title: 'ظن وأخواتها',
    categoryId: 'sentence-grammar',
    videos: [
      {
        title: 'ظن وأخواتها',
        url: 'https://youtu.be/fVSvZHFsrpI?feature=shared'
      }
    ],
    images: ['public/lessons/ظن وأخواتها.jpg'],
    contentHtml: ''
  },

  tawabi: {
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
    title: 'النعت (الصفة)',
    categoryId: 'tawabi',
    videos: [
      {
        title: 'النعت (الصفة)',
        url: 'https://youtu.be/Cu6xb3CgW8U?si=KsmLqlNz2oddtzFz'
      }
    ],
    images: ['public/lessons/النعت.jpg'],
    contentHtml: ''
  },

  atf: {
    title: 'العطف',
    categoryId: 'tawabi',
    videos: [
      {
        title: 'العطف',
        url: 'https://youtu.be/5V-uGR2ZL4M?si=-rFW0xHc4uhVlqhO'
      }
    ],
    images: ['public/lessons/العطف.jpg'],
    contentHtml: ''
  },

  tawkeed: {
    title: 'التوكيد',
    categoryId: 'tawabi',
    videos: [
      {
        title: 'التوكيد',
        url: 'https://youtu.be/PJJ4dXlYuxw?si=Sqk1UKiN-NJUvSL4'
      }
    ],
    images: ['public/lessons/التوكيد.jpg'],
    contentHtml: ''
  },

  badal: {
    title: 'البدل',
    categoryId: 'tawabi',
    videos: [
      {
        title: 'البدل',
        url: 'https://youtu.be/1Qg0zSoIFLg?si=B_rElnDxyXjKCYDn'
      }
    ],
    images: ['public/lessons/البدل.jpg'],
    contentHtml: ''
  },

  haal: {
    title: 'الحال',
    categoryId: 'haal-tamyeez',
    videos: [
      {
        title: 'الحال',
        url: 'https://youtu.be/7JxHhdJGMYE?si=weJ9Hz5R7yappj-8'
      }
    ],
    images: ['public/lessons/الحال (2).jpg'],
    contentHtml: ''
  },

  tamyeez: {
    title: 'التمييز',
    categoryId: 'haal-tamyeez',
    videos: [
      {
        title: 'التمييز',
        url: 'https://youtu.be/Z3VulRoUu1I?si=n_GvQ71SSf6Q6OMa'
      }
    ],
    images: ['public/lessons/التمييز.jpg'],
    contentHtml: ''
  },

  nakira: {
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
    title: 'أدوات الاستفهام',
    categoryId: 'styles',
    videos: [
      {
        title: 'أدوات الاستفهام',
        url: 'https://youtu.be/fY-y8LqX6Bk?si=LU1wqp5iTMB_YQOB'
      }
    ],
    images: ['public/lessons/أدوات الاستفهام.jpg'],
    contentHtml: ''
  }
};

// =============================
// 2) التصنيفات (Accordion)
// =============================

const CATEGORIES = [
  {
    id: 'basics',
    title: 'تعريف النحو',
    color: '#dcfce7',
    lessonIds: ['types-of-word', 'kinds-of-noun', 'sentence']
  },
  {
    id: 'verbs',
    title: 'الأفعال',
    color: '#fee2e2',
    lessonIds: ['verb-types', 'present-raf', 'present-nasb', 'present-jazm', 'five-verbs']
  },
  {
    id: 'fael',
    title: 'الفاعل ونائبه',
    color: '#e0f2fe',
    lessonIds: ['subject', 'naib-fael']
  },
  {
    id: 'objects',
    title: 'المفعول به',
    color: '#fef9c3',
    lessonIds: ['object']
  },
  {
    id: 'pronouns',
    title: 'الضمائر',
    color: '#f3e8ff',
    lessonIds: ['pronoun', 'address-pronouns', 'absent-pronouns', 'speaker-pronouns']
  },
  {
    id: 'nouns',
    title: 'الأسماء وأنواعها',
    color: '#e0f2fe',
    lessonIds: ['demonstratives', 'relative-pronouns', 'five-nouns', 'nakira', 'jar-ism', 'mudaf-ilayh']
  },
  {
    id: 'sentence-grammar',
    title: 'إعراب الجمل والأفعال الناسخة',
    color: '#fef3c7',
    lessonIds: ['kana', 'kada', 'inna', 'dhanna']
  },
  {
    id: 'tawabi',
    title: 'التوابع',
    color: '#fae8ff',
    lessonIds: ['tawabi', 'naat', 'atf', 'tawkeed', 'badal']
  },
  {
    id: 'haal-tamyeez',
    title: 'الحال والتمييز',
    color: '#f5f3ff',
    lessonIds: ['haal', 'tamyeez']
  },
  {
    id: 'styles',
    title: 'الأساليب النحوية',
    color: '#ecfeff',
    lessonIds: ['interrogatives']
  }
];

// =============================
// 3) حالة التطبيق (التقدم + الملاحظات)
// =============================

const STORAGE_KEY = 'nahw-bisatate-state-v1';

let appState = {
  completedLessons: {}, // lessonId: true/false
  notes: {} // lessonId: 'نص الملاحظات'
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed.completedLessons) appState.completedLessons = parsed.completedLessons;
    if (parsed.notes) appState.notes = parsed.notes;
  } catch (e) {
    console.warn('تعذّر قراءة الحالة من التخزين:', e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.warn('تعذّر حفظ الحالة في التخزين:', e);
  }
}

// =============================
// 4) رسم واجهة الدروس (القائمة الرئيسية)
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
  const appRoot = document.getElementById('app-root');
  if (!appRoot) return;

  const totalLessons = Object.keys(LESSONS).length;
  let completedCount = 0;
  Object.keys(appState.completedLessons).forEach((id) => {
    if (appState.completedLessons[id]) completedCount++;
  });

  let html = `
    <header class="app-header">
      <h2>دروس النحو</h2>
      <p>اختر التصنيف والدرس الذي تريد البدء به.</p>
    </header>

    <section class="card">
      <strong>تقدّمك:</strong>
      <p>الدروس المكتملة: ${completedCount} من ${totalLessons}</p>
    </section>
  `;

  CATEGORIES.forEach((cat, index) => {
    const catLessons = cat.lessonIds.filter((id) => LESSONS[id]);
    const completedInCat = catLessons.filter((id) => appState.completedLessons[id]).length;
    const bodyClass = index === 0 ? '' : 'hidden';

    html += `
      <article class="card category-card" style="background:${cat.color};">
        <button class="category-header" data-cat-id="${cat.id}">
          <div>
            <h3>${cat.title}</h3>
            <p>${catLessons.length} درس — مكتمل: ${completedInCat}</p>
          </div>
          <span>▼</span>
        </button>
        <div class="category-body ${bodyClass}" data-cat-body="${cat.id}">
          <ul class="lessons-list">
            ${catLessons.map((id) => renderLessonRow(id)).join('')}
          </ul>
        </div>
      </article>
    `;
  });

  appRoot.innerHTML = html;

  // فتح/طيّ التصنيفات
  document.querySelectorAll('.category-header').forEach((btn) => {
    btn.addEventListener('click', () => {
      const catId = btn.dataset.catId;
      const body = document.querySelector(`.category-body[data-cat-body="${catId}"]`);
      if (!body) return;
      body.classList.toggle('hidden');
    });
  });

  // فتح تفاصيل الدرس
  document.querySelectorAll('.lesson-row').forEach((row) => {
    row.addEventListener('click', () => {
      const lessonId = row.dataset.lessonId;
      renderLessonDetail(lessonId);
    });
  });
}

// =============================
// 5) صفحة تفاصيل الدرس
// =============================

function renderLessonDetail(lessonId) {
  const lesson = LESSONS[lessonId];
  const appRoot = document.getElementById('app-root');
  if (!lesson || !appRoot) return;

  const isCompleted = !!appState.completedLessons[lessonId];
  const notes = appState.notes[lessonId] || '';

  let imagesHtml = '';
  if (lesson.images && lesson.images.length) {
    imagesHtml = lesson.images
      .map(
        (src) => `
        <figure class="lesson-image">
          <img src="${src}" alt="${lesson.title}" />
        </figure>
      `
      )
      .join('');
  }

  let videosHtml = '';
  if (lesson.videos && lesson.videos.length) {
    videosHtml = `
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
    `;
  }

  appRoot.innerHTML = `
    <button class="primary-btn" id="back-to-lessons" style="margin-bottom:0.8rem;">
      ← العودة إلى الدروس
    </button>

    <section class="card">
      <h2>${lesson.title}</h2>
    </section>

    ${imagesHtml ? `<section class="card"><h3>صور توضيحية</h3>${imagesHtml}</section>` : ''}

    <section class="card">
      <h3>محتوى الدرس</h3>
      ${
        lesson.contentHtml && lesson.contentHtml.trim()
          ? lesson.contentHtml
          : '<p>سيتم إضافة المحتوى التفصيلي من ملف Word لهذا الدرس لاحقًا.</p>'
      }
    </section>

    ${
      videosHtml
        ? `<section class="card">
          <h3>الفيديوهات التوضيحية</h3>
          ${videosHtml}
        </section>`
        : ''
    }

    <section class="card">
      <h3>ملاحظاتي الشخصية</h3>
      <textarea id="notes-text" rows="4" style="width:100%;">${notes}</textarea>
      <button class="primary-btn" id="save-notes" style="margin-top:0.4rem;">حفظ الملاحظات</button>
    </section>

    <section class="card">
      <h3>حالة الدرس</h3>
      <p>الحالة الحالية: ${isCompleted ? '✅ مكتمل' : 'لم يُكمَل بعد'}</p>
      <button class="primary-btn" id="toggle-complete">
        ${isCompleted ? 'إزالة علامة الإكمال' : 'وضع علامة درس مكتمل'}
      </button>
    </section>
  `;

  document.getElementById('back-to-lessons').addEventListener('click', renderLessonsHome);

  document.getElementById('save-notes').addEventListener('click', () => {
    const textarea = document.getElementById('notes-text');
    appState.notes[lessonId] = textarea.value;
    saveState();
    alert('تم حفظ الملاحظات ✅');
  });

  document.getElementById('toggle-complete').addEventListener('click', () => {
    appState.completedLessons[lessonId] = !appState.completedLessons[lessonId];
    saveState();
    renderLessonDetail(lessonId);
  });
}

// =============================
// 6) ربط شاشة الترحيب بالتطبيق
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
    renderLessonsHome();
  });
});
