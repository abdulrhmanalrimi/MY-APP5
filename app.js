// =============================
// 0) بيانات الطالب (الملف الشخصي)
// =============================

const USER_PROFILE_KEY = 'nahw-user-profile-v1';

function loadUserProfile() {
  try {
    const raw = localStorage.getItem(USER_PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error('Error loading user profile', err);
    return null;
  }
}

function saveUserProfile(profile) {
  try {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error('Error saving user profile', err);
  }
}

// =============================
// 1) بيانات الدروس LESSONS
// =============================

const LESSONS = {
  // =========================
  // تعريف النحو / المقدمة
  // =========================
  // =========================
  // الأسماء الموصولة
  // =========================
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
    images: [
      'lessons/الأسماء الموصولة/الأسماء الموصولة.jpg'
    ],
    contentHtml: `
      <p>
        <strong>الاسم الموصول</strong> هو اسم وُضع لمسمَّى معيَّن بواسطة جملة تُذكر بعده
        تُسمَّى <strong>صلة الموصول</strong>، مثل: <em>جاء الذي فاز</em>.
      </p>
      <p>
        في المثال السابق: <strong>الذي</strong> اسم موصول، وجملة <em>فاز</em> صلة الموصول
        لا محلَّ لها من الإعراب؛ فهي تُتمِّم معنى الاسم الموصول وتحدِّد المقصود به.
      </p>

      <h4>أولًا: الأسماء الموصولة المشتركة</h4>
      <p>تُستعمل للجميع (مفرد، مثنّى، جمع، مذكر، مؤنث):</p>
      <ul>
        <li><strong>مَن</strong> للعاقل: <em>نجح مَنِ اجتهد</em>.</li>
        <li><strong>ما</strong> لغير العاقل: <em>اقرأ من الكتب ما ينفعك</em>.</li>
        <li><strong>أيُّ</strong> بحسب السياق للعاقل أو غيره:
          <em>أكرم أيَّهم أكثرُ اجتهادًا</em>.</li>
      </ul>

      <h4>ثانيًا: الأسماء الموصولة الخاصة</h4>
      <p>يتغيَّر لفظها حسب التذكير والتأنيث والإفراد والتثنية والجمع:</p>
      <ul>
        <li>
          للمذكر: <strong>الذي، اللذانِ، اللذين، الذين</strong>.
        </li>
        <li>
          للمؤنث: <strong>التي، اللتانِ، اللتين، اللاتي، اللائي، اللواتي</strong>.
        </li>
      </ul>

      <p>
        صلة الموصول جملة تامّة (اسمية أو فعلية) لا محل لها من الإعراب،
        وتأتي دائمًا بعد الاسم الموصول مباشرة.
      </p>
    `,
    quiz: [
      {
        id: 'rel-q1',
        question: 'في جملة "نجحَ مَنِ اجتهدَ"، كلمة "مَن" هي:',
        options: [
          'اسم استفهام',
          'اسم موصول مشترك',
          'اسم شرط',
          'ضمير'
        ],
        correctIndex: 1,
        explanation: 'هنا "مَن" ليست للسؤال بل لربط الجملة بما قبلها؛ فهي اسم موصول مشترك للعاقل.'
      },
      {
        id: 'rel-q2',
        question: 'أيُّ جملة تحوي اسمًا موصولًا خاصًّا للمذكر المفرد؟',
        options: [
          'أكرمْ أيَّهم أنشطُ',
          'جاء الذي فاز بالمسابقة',
          'نجح من اجتهد',
          'هذا ما أُحبُّ'
        ],
        correctIndex: 1,
        explanation: '"الذي" اسم موصول خاصّ للمذكر المفرد.'
      },
      {
        id: 'rel-q3',
        question: 'في جملة "قرأتُ ما ينفعني"، نوع "ما" هو:',
        options: [
          'اسم استفهام',
          'اسم موصول لغير العاقل',
          'حرف نفي',
          'حرف شرط'
        ],
        correctIndex: 1,
        explanation: '"ما" هنا تربط بين الاسم والجملة بعدها، وتُستعمل لغير العاقل.'
      },
      {
        id: 'rel-q4',
        question: 'أيُّ تركيب يصلح أن يكون صلة موصول؟',
        options: [
          'في المدرسةِ',
          'الذي فازَ',
          'حضرَ مبكرًا',
          'منذ زمن بعيد'
        ],
        correctIndex: 2,
        explanation: 'صلة الموصول جملة تامّة مثل: "حضر مبكرًا".'
      },
      {
        id: 'rel-q5',
        question: 'أيٌّ من التالي من الأسماء الموصولة الخاصة بالمؤنث؟',
        options: [
          'من',
          'ما',
          'التي',
          'أيّ'
        ],
        correctIndex: 2,
        explanation: '"التي" تُستعمل للمفردة المؤنثة.'
      }
    ]
  },

  // =========================
  // إنَّ وأخواتها
  // =========================
  'inna-and-sisters': {
    id: 'inna-and-sisters',
    title: 'إنَّ وأخواتها',
    categoryId: 'sentences',
    videos: [
      {
        title: 'إنَّ وأخواتها',
        url: 'https://youtu.be/6exrOOT9chw?si=-xbF_TblqbNCaXG8'
      }
    ],
    images: [
      'lessons/إن وأخواتها/إن وأخواتها.jpg',
      'lessons/إن وأخواتها/إن وأخواتها 1.jpg'
    ],
    contentHtml: `
      <p>
        <strong>إنَّ وأخواتُها</strong> حروف ناسخة تدخل على الجملة الاسمية
        فتنصب المبتدأ ويسمَّى <strong>اسمها</strong>، وترفع الخبر ويسمَّى
        <strong>خبرها</strong>.
      </p>

      <h4>أشهر هذه الحروف ومعانيها</h4>
      <ul>
        <li><strong>إنَّ</strong> – للتوكيد: <em>إنَّ اللهَ غفورٌ رحيمٌ</em>.</li>
        <li><strong>أنَّ</strong> – تأتي في مواضع المصدرية: <em>علمتُ أنَّ النجاحَ قريبٌ</em>.</li>
        <li><strong>كأنَّ</strong> – للتشبيه: <em>كأنَّ القمرَ مصباحٌ</em>.</li>
        <li><strong>لكنَّ</strong> – للاستدراك: <em>السفرُ مفيدٌ لكنَّ التعبَ شديدٌ</em>.</li>
        <li><strong>ليتَ</strong> – للتمنِّي: <em>ليتَ الشبابَ يعودُ</em>.</li>
        <li><strong>لعلَّ</strong> – للرجاء أو الإشفاق:
          <em>لعلَّ اللهَ يغفرُ لنا</em>.</li>
      </ul>

      <h4>أثر إنَّ وأخواتها في الجملة</h4>
      <p>
        قبل دخولها: <em>العِلْمُ نافعٌ</em> (مبتدأ مرفوع + خبر مرفوع).<br>
        بعد دخولها: <em>إنَّ العلمَ نافعٌ</em> – العلمَ: اسم إنَّ منصوب، نافعٌ: خبر إنَّ مرفوع.
      </p>

      <p>
        فهم هذه الحروف يساعدك على إعراب الجملة الاسمية، ومعرفة سبب تغيُّر حركة المبتدأ والخبر.
      </p>
    `,
    quiz: [
      {
        id: 'inna-q1',
        question: 'في جملة "إنَّ العلمَ نافعٌ"، إعراب كلمة "العلمَ" هو:',
        options: [
          'مبتدأ مرفوع',
          'اسم إنَّ منصوب',
          'خبر إنَّ مرفوع',
          'مفعول به منصوب'
        ],
        correctIndex: 1,
        explanation: 'دخول "إنَّ" نقل المبتدأ إلى اسم إنَّ منصوب.'
      },
      {
        id: 'inna-q2',
        question: 'أيُّ الجمل الآتية فيها حرف ناسخ يفيد التمنِّي؟',
        options: [
          'إنَّ الطالبَ مجتهدٌ',
          'ليتَ النجاحَ قريبٌ',
          'لعلَّ الامتحانَ سهلٌ',
          'لكنَّ الجوَّ حارٌّ'
        ],
        correctIndex: 1,
        explanation: '"ليتَ" من أخوات إنَّ وتُستعمل للتمنِّي.'
      },
      {
        id: 'inna-q3',
        question: 'الحرف الناسخ الذي يدل على الرجاء هو:',
        options: ['إنَّ', 'كأنَّ', 'لعلَّ', 'لكنَّ'],
        correctIndex: 2,
        explanation: '"لعلَّ" يُستعمل غالبًا للرجاء أو الإشفاق.'
      },
      {
        id: 'inna-q4',
        question: 'في جملة "كأنَّ القمرَ مصباحٌ"، كلمة "مصباحٌ" تعرب:',
        options: [
          'اسم كأنَّ منصوب',
          'خبر كأنَّ مرفوع',
          'مبتدأ مؤخر',
          'مفعول به'
        ],
        correctIndex: 1,
        explanation: 'القمرَ: اسم كأنَّ، مصباحٌ: خبر كأنَّ مرفوع.'
      },
      {
        id: 'inna-q5',
        question: 'أيُّ الجمل التالية صيغتها صحيحة مع "لكنَّ"؟',
        options: [
          'السفرُ مفيدٌ لكنْ التعبَ شديدٌ',
          'السفرُ مفيدٌ لكنَّ التعبَ شديدٌ',
          'إنَّ السفرَ لكنَّ مفيدٌ',
          'لكنَّ السفرُ مفيدًا'
        ],
        correctIndex: 1,
        explanation: '"لكنَّ" تدخل على الجملة الاسمية فتنصب اسمها وترفع خبرها.'
      }
    ]
  },

  // =========================
  // الأسماء الخمسة
  // =========================
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
    images: [
      'lessons/الاسماء الخمسة/الأسماء الخمسة.jpg',
      'lessons/الاسماء الخمسة/الأسماء الخمسة 1.jpg'
    ],
    contentHtml: `
      <p>
        <strong>الأسماء الخمسة</strong> هي:
        <strong>أبوك، أخوك، حموك، فوك، ذو مالٍ</strong>.
        وتمتاز بأن إعرابها يكون بالحروف نيابةً عن الحركات في حالات معيّنة.
      </p>

      <h4>إعراب الأسماء الخمسة</h4>
      <ul>
        <li><strong>ترفع بالواو</strong>:
          <em>جاء أبوك، زارنا أخوك، هذا ذو مالٍ</em>.</li>
        <li><strong>تنصب بالألف</strong>:
          <em>رأيت أباك، صادقت أخاك، أكرمت حماك</em>.</li>
        <li><strong>تُجرّ بالياء</strong>:
          <em>مررت بأبيك، سلّمت على أخيك، جلستُ إلى حميك</em>.</li>
      </ul>

      <h4>شروط إعرابها هذا الإعراب</h4>
      <ul>
        <li>أن تكون <strong>مفردة</strong>؛ فإذا ثُنّيت أو جُمعت أُعربت إعراب المثنّى أو الجمع.</li>
        <li>أن تكون <strong>مضافة</strong>؛ فلا تُعرب بالحروف إذا قُطعت عن الإضافة.</li>
        <li>أن تُضاف إلى <strong>غير ياءِ المتكلّم</strong>؛
          فإذا قيل: <em>أبي، أخي</em> عادت إلى الإعراب بالحركات.</li>
      </ul>

      <p>
        إذا اختلَّ شرط من هذه الشروط رجعت الأسماء الخمسة إلى الإعراب بالحركات
        كغيرها من الأسماء.
      </p>
    `,
    quiz: [
      {
        id: 'five-q1',
        question: 'أيٌّ مما يلي يُعَدُّ من الأسماء الخمسة؟',
        options: ['أبوك', 'أبانا', 'أبونا', 'أبوين'],
        correctIndex: 0,
        explanation: 'الصيغة الأصلية من الأسماء الخمسة: أبوك، أخوك، حموك، فوك، ذو.'
      },
      {
        id: 'five-q2',
        question: 'في جملة "جاء أبوك"، علامة رفع "أبوك" هي:',
        options: ['الضمة', 'الواو', 'الألف', 'الياء'],
        correctIndex: 1,
        explanation: 'الأسماء الخمسة تُرفع بالواو.'
      },
      {
        id: 'five-q3',
        question: 'في جملة "رأيت أباك"، علامة نصب "أباك" هي:',
        options: ['الفتحة', 'الضمة', 'الألف', 'الياء'],
        correctIndex: 2,
        explanation: 'تنصب الأسماء الخمسة بالألف.'
      },
      {
        id: 'five-q4',
        question: 'في جملة "مررتُ بأبيك"، علامة جر "أبيك" هي:',
        options: ['الكسرة', 'الفتحة', 'الياء', 'الواو'],
        correctIndex: 2,
        explanation: 'تُجرّ الأسماء الخمسة بالياء.'
      },
      {
        id: 'five-q5',
        question: 'أيُّ الجمل التالية اختل فيها شرط من شروط الأسماء الخمسة؟',
        options: [
          'زارني أخوك',
          'جاء أبوك',
          'أكرمتُ حمي',
          'احترمتُ ذا علمٍ'
        ],
        correctIndex: 2,
        explanation: 'إضافتها إلى ياء المتكلم (حمي) يُسقط شرط الإضافة لغير ياء المتكلم.'
      }
    ]
  },

  // =========================
  // أسماء الإشارة
  // =========================
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
    images: [
      // الصورة المكبرة الموجودة في مجلد "كبر الصورة"
      'lessons/كبر الصورة/أسماء الإشارة.jpg'
    ],
    contentHtml: `
      <p>
        <strong>اسم الإشارة</strong> هو ما وُضع لِمُعيَّن بواسطة إشارة حسِّيَّة
        باليد أو العين نحو شيء حاضر.
      </p>

      <h4>أولًا: للمفرد القريب</h4>
      <ul>
        <li><strong>هذا</strong> للمفرد المذكر:
          <em>هذا رجلٌ، هذا محمدٌ</em>.</li>
        <li><strong>هذه</strong> للمفرد المؤنث:
          <em>هذه امرأةٌ، هذه عائشةُ</em>.</li>
      </ul>

      <h4>ثانيًا: للمثنّى القريب</h4>
      <ul>
        <li><strong>هذانِ</strong> للمثنّى المذكر:
          <em>هذانِ رجلانِ، هذانِ كريمانِ</em>.</li>
        <li><strong>هاتانِ</strong> للمثنّى المؤنث:
          <em>هاتانِ امرأتانِ، هاتانِ كريمتانِ</em>.</li>
      </ul>

      <h4>ثالثًا: للجمع القريب</h4>
      <ul>
        <li>
          <strong>هؤلاءِ</strong> لجمع المذكر والمؤنث:
          <em>هؤلاءِ أطفالٌ، هؤلاءِ نسوةٌ، هؤلاءِ متحابّون، هؤلاءِ مؤدّباتٌ</em>.
        </li>
      </ul>

      <p>
        يتغيّر إعراب اسم الإشارة بحسب موقعه في الجملة
        (مبتدأ، خبر، فاعل...)، لكنه غالبًا يكون مبنيًّا.
      </p>
    `,
    quiz: [
      {
        id: 'dem-q1',
        question: 'أيُّ اسم إشارة يناسب: _____ طالبةٌ مجتهدة؟',
        options: ['هذا', 'هذه', 'هذانِ', 'هؤلاءِ'],
        correctIndex: 1,
        explanation: 'طالبة مفرد مؤنث؛ فيُستعمل اسم الإشارة "هذه".'
      },
      {
        id: 'dem-q2',
        question: 'الجملة الصحيحة هي:',
        options: [
          'هذا بناتٌ مجتهداتٌ',
          'هؤلاءِ بنتٌ مجتهدةٌ',
          'هؤلاءِ بناتٌ مجتهداتٌ',
          'هذانِ بناتٌ مجتهداتٌ'
        ],
        correctIndex: 2,
        explanation: 'الجمع المؤنث "بنات" يناسبه اسم الإشارة "هؤلاءِ".'
      },
      {
        id: 'dem-q3',
        question: 'أيُّ تركيبٍ صائب للمثنّى المذكر القريب؟',
        options: [
          'هذا كتابانِ',
          'هذانِ كتابينِ',
          'هذانِ كتابانِ',
          'هؤلاءِ كتابانِ'
        ],
        correctIndex: 2,
        explanation: '"هذانِ كتابانِ" هو الأسلوب الصحيح للمثنّى المذكر.'
      },
      {
        id: 'dem-q4',
        question: 'في جملة "هذه شجرةٌ مثمرةٌ"، إعراب "هذه" غالبًا:',
        options: [
          'مبتدأ مبني في محل رفع',
          'خبر مرفوع',
          'مفعول به منصوب',
          'مضاف إليه مجرور'
        ],
        correctIndex: 0,
        explanation: 'اسم الإشارة في بداية الجملة الاسمية يكون غالبًا مبتدأ.'
      },
      {
        id: 'dem-q5',
        question: 'أيُّ الجمل التالية تحتوي على اسم إشارة للجمع؟',
        options: [
          'هذا بيتٌ جميلٌ',
          'هذه مدرسةٌ',
          'هذانِ طالبانِ',
          'هؤلاءِ طلابٌ مجتهدون'
        ],
        correctIndex: 3,
        explanation: '"هؤلاءِ" يُستعمل للجمع بنوعيه.'
      }
    ]
  },

  // =========================
  // التمييز
  // =========================
  tamyeez: {
    id: 'tamyeez',
    title: 'التمييز',
    categoryId: 'tawabi',
    videos: [],
    images: [
      'lessons/التمييز/التمييز.jpg'
    ],
    contentHtml: `
      <p>
        <strong>التمييز</strong> اسم نكرة منصوب يأتي لِيُزيل إبهامًا في الجملة
        ويُوضِّح المقصود من كلمة قبله، مثل:
        <em>اشتريتُ كيلو سُكرًا</em>؛ فكلمة <strong>سكرًا</strong> تمييز.
      </p>

      <h4>أولًا: تمييز ملفوظ</h4>
      <p>يُوضِّح مقدارًا مذكورًا قبله، مثل العدد أو الكيل أو الوزن أو المساحة:</p>
      <ul>
        <li>تمييز العدد: <em>معي خمسةُ ريالاتٍ</em>.</li>
        <li>تمييز الكيل: <em>شربتُ لترًا ماءً</em>.</li>
        <li>تمييز الوزن: <em>اشتريتُ كيلو لحمًا</em>.</li>
        <li>تمييز المساحة: <em>زرعتُ فدانًا قمحًا</em>.</li>
      </ul>

      <h4>ثانيًا: تمييز ملحوظ (نِسبة)</h4>
      <p>
        يُوضِّح جملة أو نسبة معنوية قبله، مثل:
        <em>طاب الجوُّ هواءً</em>،
        <em>ازدادَ الطالبُ علمًا</em>.
      </p>

      <p>
        معرفة نوع التمييز تساعدك على فهم الجملة وضبط الإعراب بدقّة.
      </p>
    `,
    quiz: [
      {
        id: 'tam-q1',
        question: 'التمييز في جملة "اشتريتُ كيلو سُكرًا" هو:',
        options: ['كيلو', 'اشتريتُ', 'سكرًا', 'هو'],
        correctIndex: 2,
        explanation: '"سكرًا" تمييز يوضّح نوع المقدار (كيلو).'
      },
      {
        id: 'tam-q2',
        question: 'في جملة "معي خمسةُ ريالاتٍ"، نوع التمييز هو:',
        options: ['تمييز وزن', 'تمييز عدد', 'تمييز مساحة', 'تمييز حال'],
        correctIndex: 1,
        explanation: 'هنا التمييز يوضِّح العدد: خمسةُ ريالاتٍ.'
      },
      {
        id: 'tam-q3',
        question: 'أيُّ جملة فيها تمييز ملحوظ (نِسبة)؟',
        options: [
          'شربتُ لترًا ماءً',
          'اشتريتُ كيلو أرزًا',
          'طابَ الجوُّ هواءً',
          'زرعتُ فدانًا قمحًا'
        ],
        correctIndex: 2,
        explanation: '"هواءً" يوضّح حالة الجو؛ فهذا تمييز ملحوظ.'
      },
      {
        id: 'tam-q4',
        question: 'ما التعريف الأدق للتمييز؟',
        options: [
          'اسم معرفة يوضِّح الفاعل',
          'اسم نكرة مرفوع يزيل إبهامًا',
          'اسم نكرة منصوب يزيل إبهامًا في الجملة',
          'فعل ماضٍ يزيل الغموض'
        ],
        correctIndex: 2,
        explanation: 'التمييز اسم نكرة منصوب يُوضّح معنى قبله ويزيل الإبهام.'
      },
      {
        id: 'tam-q5',
        question: 'في جملة "ازدادَ الطالبُ علمًا"، كلمة "علمًا" هي:',
        options: ['فاعل', 'مفعول به', 'حال', 'تمييز'],
        correctIndex: 3,
        explanation: '"علمًا" تمييز ملحوظ يوضّح نوع الزيادة.'
      }
    ]
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
// 3) أسئلة نهاية كل درس QUIZZES
// =============================

// نولّد أسئلة الاختبارات مباشرة من مصفوفة quiz داخل كل درس
// حتى لا نكرر البيانات في مكانين.

const QUIZZES = {};
Object.keys(LESSONS).forEach((id) => {
  const lesson = LESSONS[id];
  if (lesson.quiz && Array.isArray(lesson.quiz) && lesson.quiz.length) {
    QUIZZES[id] = {
      questions: lesson.quiz.map((q) => ({
        text: q.question,
        options: q.options,
        correctIndex: q.correctIndex
      }))
    };
  }
});

// =============================
// 4) حالة التطبيق (تقدّم + ملاحظات + مفضلة + نتائج اختبارات)
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
// 5) الثيم + حجم الخط
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
// 6) بناء الـ App Shell
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
// 7) واجهة قائمة الدروس
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
// 8) HTML قسم الاختبار لكل درس
// =============================

function getQuizHtmlForLesson(lessonId) {
  const quiz = QUIZZES[lessonId];
  if (!quiz || !quiz.questions || !quiz.questions.length) {
    return `
      <section class="card">
        <h3>اختبر نفسك</h3>
        <p>سيتم إضافة أسئلة تفاعلية لهذا الدرس لاحقًا.</p>
      </section>
    `;
  }

  return `
    <section class="card" id="quiz-section">
      <h3>اختبر نفسك</h3>
      <div id="quiz-container"></div>
    </section>
  `;
}

function setupQuizHandlers(lessonId) {
  const quiz = QUIZZES[lessonId];
  if (!quiz || !quiz.questions || !quiz.questions.length) return;

  const container = document.getElementById('quiz-container');
  if (!container) return;

  let currentIndex = 0;
  let correctCount = 0;
  let selectedIndex = null;

  function renderQuestion() {
    const q = quiz.questions[currentIndex];
    selectedIndex = null;

    container.innerHTML = `
      <div class="quiz-header">
        <p class="quiz-counter">السؤال ${currentIndex + 1} من ${
      quiz.questions.length
    }</p>
        <p class="quiz-text">${q.text}</p>
      </div>
      <div class="quiz-options">
        ${q.options
          .map(
            (opt, i) => `
          <button class="quiz-option" data-index="${i}">${opt}</button>
        `
          )
          .join('')}
      </div>
      <button class="primary-btn quiz-confirm" id="quiz-confirm">
        تأكيد الإجابة
      </button>
      <p class="quiz-feedback" id="quiz-feedback"></p>
    `;

    container.querySelectorAll('.quiz-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedIndex = Number(btn.dataset.index);
        container
          .querySelectorAll('.quiz-option')
          .forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    container.querySelector('#quiz-confirm').addEventListener('click', () => {
      if (selectedIndex === null) {
        alert('اختر إجابة أولاً ✋');
        return;
      }
      const feedbackEl = document.getElementById('quiz-feedback');
      const isCorrect =
        selectedIndex === quiz.questions[currentIndex].correctIndex;

      if (isCorrect) {
        correctCount++;
        feedbackEl.textContent = 'إجابة صحيحة 👏';
        feedbackEl.className = 'quiz-feedback correct';
      } else {
        feedbackEl.textContent = 'إجابة خاطئة، جرّب في السؤال التالي 🙂';
        feedbackEl.className = 'quiz-feedback wrong';
      }

      setTimeout(() => {
        if (currentIndex < quiz.questions.length - 1) {
          currentIndex++;
          renderQuestion();
        } else {
          finishQuiz();
        }
      }, 700);
    });
  }

  function finishQuiz() {
    const total = quiz.questions.length;
    const percent = Math.round((correctCount / total) * 100);

    container.innerHTML = `
      <p>انتهى الاختبار! ✨</p>
      <p>نتيجتك: <strong>${correctCount}</strong> من <strong>${total}</strong> (${percent}٪)</p>
      <button class="primary-btn" id="quiz-retry">إعادة المحاولة</button>
    `;

    // حفظ النتيجة في الإحصائيات
    if (!Array.isArray(appState.quizResults)) appState.quizResults = [];
    appState.quizResults.push(percent);
    appState.points += Math.round(percent / 20); // مكافأة بسيطة حسب النتيجة
    saveState();

    const retryBtn = document.getElementById('quiz-retry');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        currentIndex = 0;
        correctCount = 0;
        renderQuestion();
      });
    }
  }

  renderQuestion();
}

// =============================
// 9) صفحة تفاصيل الدرس
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

  const quizHtml = getQuizHtmlForLesson(lessonId);

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

    ${quizHtml}

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

  // تفعيل الاختبار
  setupQuizHandlers(lessonId);

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
// 10) الشارات والإنجازات
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
// 11) صفحة الإحصائيات المتقدمة
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

  const canDownloadCertificate = percent >= 60; // النسبة المطلوبة للشهادة

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

// تعبئة بيانات الشهادة (اسم الطالب + المرحلة + اسم المشرفة)
function fillCertificateData(targetDocument) {
  const profile = loadUserProfile() || {};
  const doc = targetDocument || document;

  const nameEl = doc.getElementById('cert-student-name');
  const gradeEl = doc.getElementById('cert-student-grade');
  const teacherEl = doc.getElementById('cert-teacher-name');

  if (nameEl) {
    nameEl.textContent = profile.name || 'اسم الطالب';
  }

  if (gradeEl) {
    gradeEl.textContent = profile.grade ? `المرحلة: ${profile.grade}` : '';
  }

  if (teacherEl) {
    teacherEl.textContent = 'الأستاذة سهام غازي';
  }
}

// إنشاء شهادة إنجاز PDF
function downloadCertificatePdf(percent) {
  const { completed, total } = getProgress();
  const profile = loadUserProfile() || {};
  const studentName = profile.name || 'اسم الطالب';
  const gradeText = profile.grade ? `المرحلة: ${profile.grade}` : '';

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
          <p class="cert-name" id="cert-student-name">${studentName}</p>
          <p class="cert-info" id="cert-student-grade">${gradeText}</p>

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
            <span>
              المشرفة على التطبيق:
              <strong id="cert-teacher-name">الأستاذة سهام غازي</strong>
            </span>
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
  w.onload = () => {
    // تأكد أن البيانات محدثة حسب آخر ملف شخصي
    fillCertificateData(w.document);
    w.print();
  };
}

// =============================
// 12) صفحة "اسأل المعلم"
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
// 13) صفحة المتصدرين (تجريبية)
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
// 14) مودال تأكيد الخروج من الدرس
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
// 15) نقطة البداية + نافذة بيانات الطالب
// =============================

document.addEventListener('DOMContentLoaded', () => {
  loadState();

  const landing = document.getElementById('landing');
  const startBtn = document.getElementById('start-learning');
  const appRoot = document.getElementById('app-root');

  // عناصر نافذة البيانات
  const modal = document.getElementById('user-profile-modal');
  const profileForm = document.getElementById('user-profile-form');
  const nameInput = document.getElementById('profile-name');
  const gradeSelect = document.getElementById('profile-grade');
  const closeBtn = document.getElementById('user-profile-close');

  if (!landing || !startBtn || !appRoot) return;

  function buildShellIfNeeded() {
    if (!appRoot.dataset.shellBuilt) {
      buildAppShell();
      appRoot.dataset.shellBuilt = '1';
    }
  }

  function goToLessonsView() {
    landing.classList.add('hidden');
    appRoot.classList.remove('hidden');
    buildShellIfNeeded();
    switchView('lessons');
  }

  function openProfileModal() {
    if (!modal) {
      // لو ما كان المودال موجود لأي سبب → ادخل مباشرة
      goToLessonsView();
      return;
    }
    modal.classList.remove('hidden');
    if (nameInput) nameInput.focus();
  }

  function closeProfileModal() {
    if (modal) modal.classList.add('hidden');
  }

  // عند الضغط على "ابدأ التعلّم"
  startBtn.addEventListener('click', () => {
    const existing = loadUserProfile();
    if (existing && existing.name && existing.grade) {
      // عنده بيانات محفوظة مسبقًا → ادخل مباشرة
      goToLessonsView();
    } else {
      // أول مرة → افتح نافذة البيانات
      openProfileModal();
    }
  });

  // حفظ بيانات الطالب من الفورم
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = nameInput ? nameInput.value.trim() : '';
      const grade = gradeSelect ? gradeSelect.value : '';

      if (!name || !grade) {
        if (!name && nameInput) {
          nameInput.focus();
        } else if (gradeSelect) {
          gradeSelect.focus();
        }
        return;
      }

      saveUserProfile({
        name,
        grade,
        createdAt: Date.now()
      });

      closeProfileModal();
      goToLessonsView();
    });
  }

  // زر إغلاق المودال
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeProfileModal();
    });
  }

  // إغلاق عند الضغط على خلفية المودال
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProfileModal();
      }
    });
  }
});
