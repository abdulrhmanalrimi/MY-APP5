// ============================
// ثوابت عامّة
// ============================

// معلومات المبرمج (تستخدم في بطاقة المبرمج + الشهادة)
const DEVELOPER_INFO = {
  label: 'برمجة المهندس / عبدالرحمن الضبيبي',
  phone: '+967 781 752 213'
};

// اسم المشرفة على التطبيق (لإظهارها في الشهادة)
const SUPERVISOR_NAME = 'الأستاذة سهام غازي';

// مفاتيح التخزين المحلي
const STORAGE_KEYS = {
  profile: 'nahw_student_profile_v1',
  progress: 'nahw_lessons_progress_v1',
  favorites: 'nahw_favorites_v1'
};

// ============================
// بيانات التصنيفات والدروس
// ============================

const CATEGORIES = {
  intro: {
    id: 'intro',
    title: 'تعريف النحو',
    description: 'دروس تمهيدية لفهم أنواع الكلمة وبداية النحو.',
    colorClass: 'cat-green'
  },
  sentences: {
    id: 'sentences',
    title: 'الجُمَل',
    description: 'الجملة الاسمية والجملة الفعلية وبناؤهما.',
    colorClass: 'cat-yellow'
  },
  nouns: {
    id: 'nouns',
    title: 'الأسماء وأنواعها',
    description: 'أسماء الإشارة، الأسماء الموصولة، الأسماء الخمسة وغيرها.',
    colorClass: 'cat-blue'
  },
  styles: {
    id: 'styles',
    title: 'أساليب نحوية',
    description: 'أسلوب الاستفهام وأدواته.',
    colorClass: 'cat-pink'
  },
  tawabi: {
    id: 'tawabi',
    title: 'التوابع والتمييز',
    description: 'درس التمييز وأنواعه.',
    colorClass: 'cat-purple'
  }
};

// ملاحظة: المحتوى النصي للدروس مأخوذ من ملفاتك (Word + صور) التي أرسلتها سابقًا.
// يمكنك إضافة باقي الدروس بنفس النمط لو أحببت.
const LESSONS = {
  // =========================
  // تعريف النحو / أنواع الكلمة
  // =========================
  'types-of-word': {
    id: 'types-of-word',
    title: 'أنواع الكلمة',
    lessonNumber: 10,
    categoryId: 'intro',
    videos: [
      {
        title: 'أنواع الكلمة',
        url: 'https://youtu.be/46MwuNDrdlo?si=yHVbvc0IS1QbtRft'
      }
    ],
    images: [
      'lessons/أنواع الكلمة/أنواع الكلمة.jpg'
    ],
    contentHtml: `
      <p>
        تنقسم الكلمة في اللغة العربية إلى ثلاثة أنواع أساسية:
        <strong>اسم</strong> و<strong>فعل</strong> و<strong>حرف</strong>. :contentReference[oaicite:1]{index=1}
      </p>

      <h4>أولًا: الاسم</h4>
      <p>
        هو كلمة تدل على معنى في نفسها ولا تقترن بزمن،
        مثل: <strong>محمد، طالبة، كتاب، شجرة</strong>. :contentReference[oaicite:2]{index=2}
      </p>
      <p>
        يمكن أن يدل الاسم على الإنسان، أو الحيوان، أو النبات، أو الجماد؛
        مثل: <em>محمد، أسد، عنب، ساعة</em>.
      </p>

      <h4>ثانيًا: الفعل</h4>
      <p>
        هو كلمة تدل على معنى في نفسها، وتقترن بواحد من الأزمنة الثلاثة:
        الماضي، أو المضارع، أو الأمر. :contentReference[oaicite:3]{index=3}
      </p>
      <ul>
        <li><strong>الفعل الماضي:</strong> يدل على حدث وقع في الزمن الماضي، مثل: <em>نصرَ، فهمَ، جلسَ</em>.</li>
        <li><strong>الفعل المضارع:</strong> يدل على حدث يقع الآن أو يتجدد، مثل: <em>ينصرُ، يجلسُ، يجتهدُ</em>.</li>
        <li><strong>فعل الأمر:</strong> يدل على طلب حدوث الفعل في المستقبل، مثل: <em>انصُرْ، اجلسْ، اجتهدْ</em>.</li>
      </ul>

      <h4>ثالثًا: الحرف</h4>
      <p>
        هو كلمة لا يظهر معناها كاملًا وحدها، بل يتضح بالاقتران مع غيرها،
        مثل: <strong>من، إلى، عن، في، بل، ثم</strong>. :contentReference[oaicite:4]{index=4}
      </p>
      <p>
        في جملة <strong>ذهبتُ من البيت</strong> لا يتضح معنى <strong>من</strong>
        إلا مع بقية الكلمات في الجملة.
      </p>
    `,
    quiz: [
      {
        id: 'types-q1',
        question: 'ما التعريف الأدق للاسم؟',
        options: [
          'كلمة تدل على معنى في نفسها ولا تقترن بزمن',
          'كلمة تدل على معنى في نفسها وتقترن بزمن',
          'كلمة لا يظهر معناها إلا مع غيرها',
          'كلمة تدل على زمان فقط'
        ],
        correctIndex: 0,
        explanation: 'الاسم يدل على معنى في نفسه، ولا يرتبط بزمان معيّن.'
      },
      {
        id: 'types-q2',
        question: 'أيٌّ مما يلي يُعَدُّ فعلًا ماضيًا؟',
        options: ['يكتبُ', 'اكتبْ', 'كتبَ', 'يَكتُبون'],
        correctIndex: 2,
        explanation: 'الفعل الماضي يدل على حدث وقع في الزمن الماضي مثل: كتبَ.'
      },
      {
        id: 'types-q3',
        question: 'أي الكلمات الآتية تُعَدُّ حروفًا؟',
        options: ['محمد', 'من', 'قلم', 'يجلس'],
        correctIndex: 1,
        explanation: 'الحرف مثل: من، إلى، عن، لا يتم معناه إلا مع غيره.'
      },
      {
        id: 'types-q4',
        question: 'أيُّ جملة فيها اسم يدل على جماد؟',
        options: [
          'جلسَ الطالبُ',
          'طارَ العصفورُ',
          'انكسرَ الكأسُ',
          'نما الزرعُ'
        ],
        correctIndex: 2,
        explanation: 'الكأسُ جماد، بخلاف الطالب والعصفور والزرع.'
      },
      {
        id: 'types-q5',
        question: 'في الجملة: "يقرأُ الطفلُ القصّةَ"، كلمة "يقرأُ" هي:',
        options: ['اسم', 'فعل مضارع', 'حرف', 'فعل ماض'],
        correctIndex: 1,
        explanation: 'يقرأُ فعل مضارع لأنه يدل على حدثٍ يقع الآن أو يتجدد.'
      },
      {
        id: 'types-q6',
        question: 'في أيِّ الجمل التالية ظهر حرف من حروف الجر؟',
        options: [
          'الطالبُ مجتهدٌ',
          'نجحَ محمدٌ',
          'ذهبتُ إلى المدرسةِ',
          'يلعبُ الأطفالُ'
        ],
        correctIndex: 2,
        explanation: 'حرف الجر هنا هو "إلى".'
      }
    ]
  },

  // =========================
  // الجملة
  // =========================
  sentence: {
    id: 'sentence',
    title: 'الجملة',
    lessonNumber: 11,
    categoryId: 'sentences',
    videos: [
      {
        title: 'الجملة',
        url: 'https://youtu.be/9AR0d5IUSSo?si=hr3P7QyUKslCVCh2'
      }
    ],
    images: [
      'lessons/الجملة/الجملة.jpg'
    ],
    contentHtml: `
      <p>
        تنقسم الجملة في اللغة العربية إلى نوعين رئيسين:
        <strong>جملة اسمية</strong> و<strong>جملة فعلية</strong>. :contentReference[oaicite:5]{index=5}
      </p>

      <h4>أولًا: الجملة الاسمية</h4>
      <p>
        هي التي تبدأ باسم، وتتكون أساسًا من
        <strong>مبتدأ وخبر</strong>،
        مثل: <em>العِلْمُ نورٌ، المطرُ غزيرٌ</em>. :contentReference[oaicite:6]{index=6}
      </p>
      <p>
        قد يدخل على الجملة الاسمية
        <strong>إنَّ وأخواتُها</strong>
        فتنصب المبتدأ وترفع الخبر:
        <em>إنَّ اللهَ رحيمٌ، ليتَ الشبابَ عائدٌ</em>.
      </p>

      <h4>ثانيًا: الجملة الفعلية</h4>
      <p>
        هي التي تبدأ بفعل، وتتكون من <strong>فعل وفاعل</strong>،
        مثل: <em>حضرَ المعلمُ، يكتبُ الولدُ</em>. :contentReference[oaicite:7]{index=7}
      </p>
      <p>
        وقد تُبنى للمجهول فيكون التركيب من
        <strong>فعل ونائب فاعل</strong>،
        مثل: <em>فُتحَ البابُ، يُفتحُ البابُ</em>.
      </p>

      <p>
        فهمُ نوع الجملة يساعدك على ضبط الإعراب
        وتحديد موقع كل كلمة داخل الجملة.
      </p>
    `,
    quiz: [
      {
        id: 'sent-q1',
        question: 'أيُّ الجمل الآتية جملة اسمية؟',
        options: [
          'جلسَ الطالبُ',
          'يقرأُ الطفلُ',
          'المطرُ غزيرٌ',
          'سافرَ الأبُ'
        ],
        correctIndex: 2,
        explanation: 'الجملة الاسمية تبدأ باسم: "المطرُ غزيرٌ".'
      },
      {
        id: 'sent-q2',
        question: 'المكوِّنان الأساسيان للجملة الاسمية هما:',
        options: [
          'فعل وفاعل',
          'مبتدأ وخبر',
          'فعل ومفعول به',
          'مبتدأ ومضاف إليه'
        ],
        correctIndex: 1,
        explanation: 'الجملة الاسمية تتكون من مبتدأ وخبر أساسًا.'
      },
      {
        id: 'sent-q3',
        question: 'أيُّ جملةٍ فعلية مبنية للمجهول؟',
        options: [
          'فتحَ الولدُ البابَ',
          'يكتبُ الطالبُ الدرسَ',
          'فُتحَ البابُ',
          'أكلَ الطفلُ التفاحةَ'
        ],
        correctIndex: 2,
        explanation: 'فُتحَ البابُ: فعل ماضٍ مبني للمجهول ونائب فاعل.'
      },
      {
        id: 'sent-q4',
        question: 'في جملة "إنَّ اللهَ رحيمٌ"، كلمة "الله" تعرب:',
        options: [
          'مبتدأ مرفوع',
          'خبر مرفوع',
          'اسم إنَّ منصوب',
          'خبر إنَّ منصوب'
        ],
        correctIndex: 2,
        explanation: 'إنَّ تنصب المبتدأ، فيصبح اسمها منصوبًا.'
      },
      {
        id: 'sent-q5',
        question: 'في جملة "يكتبُ الطالبُ الدرسَ"، نوع الجملة هو:',
        options: ['اسمية', 'فعلية', 'شرطية', 'استفهامية'],
        correctIndex: 1,
        explanation: 'الجملة بدأت بفعل مضارع "يكتبُ"، فهي جملة فعلية.'
      },
      {
        id: 'sent-q6',
        question: 'أيُّ تركيبٍ يُعَدُّ ركنًا من أركان الجملة الفعلية؟',
        options: [
          'مبتدأ وخبر',
          'فاعل ومفعول به فقط',
          'فعل وفاعل',
          'فعل وحرف جر'
        ],
        correctIndex: 2,
        explanation: 'الركن الأساسي للجملة الفعلية: فعل وفاعل.'
      }
    ]
  },

  // =========================
  // أسماء الإشارة
  // =========================
  'demonstratives': {
    id: 'demonstratives',
    title: 'أسماء الإشارة',
    lessonNumber: 20,
    categoryId: 'nouns',
    videos: [
      {
        title: 'أسماء الإشارة',
        url: 'https://youtu.be/eO0c3sBP6Zg?si=Up6ALenO0749PGzc'
      }
    ],
    images: [
      'lessons/اسم الإشارة/اسم الإشارة.jpg'
    ],
    contentHtml: `
      <p>
        <strong>اسم الإشارة</strong>
        هو ما وُضع لِمُعين بواسطة إشارة حسّية. :contentReference[oaicite:8]{index=8}
      </p>

      <h4>المفرد القريب</h4>
      <ul>
        <li><strong>هذا</strong> للمفرد المذكر: <em>هذا رجلٌ، هذا محمدٌ</em>.</li>
        <li><strong>هذه</strong> للمفرد المؤنث: <em>هذه امرأةٌ، هذه عائشةُ</em>.</li>
      </ul>

      <h4>المثنّى القريب</h4>
      <ul>
        <li><strong>هذانِ</strong> للمثنّى المذكر: <em>هذانِ رجلان، هذانِ كريمان</em>.</li>
        <li><strong>هاتانِ</strong> للمثنّى المؤنث: <em>هاتانِ امرأتان، هاتانِ كريمتانِ</em>.</li>
      </ul>

      <h4>الجمع القريب</h4>
      <ul>
        <li><strong>هؤلاءِ</strong> لجمع المذكر والمؤنث: <em>هؤلاءِ أطفال، هؤلاءِ نسوةٌ، هؤلاءِ متحابّون، هؤلاءِ مؤدّباتٌ</em>.</li>
      </ul>
    `,
    quiz: [
      {
        id: 'dem-q1',
        question: 'أيُّ اسم إشارة مناسب للجملة: _____ طالبةٌ مجتهدة؟',
        options: ['هذا', 'هذه', 'هذانِ', 'هؤلاءِ'],
        correctIndex: 1,
        explanation: 'طالبة مؤنث مفرد، فيُستخدم اسم الإشارة "هذه".'
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
        question: 'أيُّ تركيب صائب: للمثنّى المذكر القريب؟',
        options: [
          'هذا كتابانِ',
          'هذانِ كتابينِ',
          'هذانِ كتابانِ',
          'هؤلاءِ كتابانِ'
        ],
        correctIndex: 2,
        explanation: 'المثنّى المذكر: "هذانِ كتابانِ".'
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
        explanation: 'غالبًا يقع اسم الإشارة في أول الجملة الاسمية مبتدأً.'
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
        explanation: '"هؤلاءِ" يُستعمل للجمع.'
      }
    ]
  },

  // =========================
  // الأسماء الموصولة
  // =========================
  'relative-pronouns': {
    id: 'relative-pronouns',
    title: 'الأسماء الموصولة',
    lessonNumber: 21,
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
        <strong>الاسم الموصُول</strong> هو اسم وُضع لمسمى معيّن بواسطة جملة تُذكر بعده تُسمى صلة الموصول،
        مثل: <em>جاء الذي فاز</em>. :contentReference[oaicite:9]{index=9}
      </p>

      <h4>الأسماء الموصولة المشتركة</h4>
      <ul>
        <li><strong>مَن</strong> للعاقل، مثل: <em>نجح من اجتهد</em>.</li>
        <li><strong>ما</strong> لغير العاقل، مثل: <em>اقرأ من الكتب ما يفيدك</em>.</li>
        <li><strong>أيّ</strong> بحسب السياق للعاقل وغيره، مثل: <em>أكرم أيَّهم أكثرُ اجتهادًا</em>.</li>
      </ul>

      <h4>الأسماء الموصولة الخاصة</h4>
      <p>تتغير حسب العدد والجنس:</p>
      <ul>
        <li>
          للمذكر: <strong>الذي، اللذانِ، اللذين، الذين</strong>.
        </li>
        <li>
          للمؤنث: <strong>التي، اللتانِ، اللتين، اللاتي، اللائي، اللواتي</strong>.
        </li>
      </ul>
    `,
    quiz: [
      {
        id: 'rel-q1',
        question: 'في جملة "نجحَ مَنِ اجتهدَ"، كلمة "مَن" هي:',
        options: ['اسم استفهام', 'اسم موصول مشترك', 'اسم شرط', 'ضمير'],
        correctIndex: 1,
        explanation: '"مَن" هنا اسم موصول مشترك يُستخدم للعاقل.'
      },
      {
        id: 'rel-q2',
        question: 'أيُّ جملة تحوي اسمًا موصولًا خاصًّا للمذكر المفرد؟',
        options: [
          'أكرمْ أيَّهم أنشطُ',
          'جاء الذي فازَ بالمسابقةِ',
          'نجح من اجتهد',
          'هذا ما أُحبّ'
        ],
        correctIndex: 1,
        explanation: '"الذي" اسم موصول خاصّ للمذكر المفرد.'
      },
      {
        id: 'rel-q3',
        question: 'في جملة "قرأتُ ما ينفعني"، نوع "ما" هو:',
        options: ['اسم استفهام', 'اسم موصول لغير العاقل', 'حرف نفي', 'حرف جر'],
        correctIndex: 1,
        explanation: '"ما" هنا اسم موصول لغير العاقل.'
      },
      {
        id: 'rel-q4',
        question: 'الجملة التي تصلح أن تكون صلة موصول هي:',
        options: [
          'في المدرسةِ',
          'الذي فازَ',
          'حضرَ مبكرًا',
          'منذُ زمنٍ بعيدٍ'
        ],
        correctIndex: 2,
        explanation: 'صلة الموصول جملة تامة: فعل وفاعل مثل "حضر مبكرًا".'
      },
      {
        id: 'rel-q5',
        question: 'أيُّ الأسماء التالية من الأسماء الموصولة الخاصة للمؤنث؟',
        options: ['من', 'ما', 'التي', 'أيّ'],
        correctIndex: 2,
        explanation: '"التي" من الأسماء الموصولة الخاصة بالمفرد المؤنث.'
      }
    ]
  },

  // =========================
  // الأسماء الخمسة
  // =========================
  'five-nouns': {
    id: 'five-nouns',
    title: 'الأسماء الخمسة',
    lessonNumber: 22,
    categoryId: 'nouns',
    videos: [
      {
        title: 'الأسماء الخمسة',
        url: 'https://youtu.be/Ao6gfEK177o?si=IO3W-EWf7nZHpn41'
      }
    ],
    images: [
      'lessons/الأسماء الخمسة/الأسماء الخمسة.jpg',
      'lessons/الأسماء الخمسة/الأسماء الخمسة 1.jpg'
    ],
    contentHtml: `
      <p>
        <strong>الأسماء الخمسة</strong> هي: <strong>أبوك، أخوك، حموك، فوك، ذو مالٍ</strong>.
      </p>
      <p>
        تمتاز بأن إعرابها يكون بالحروف نيابةً عن الحركات في حالات معيّنة. :contentReference[oaicite:10]{index=10}
      </p>

      <h4>إعراب الأسماء الخمسة</h4>
      <ul>
        <li><strong>ترفع بالواو</strong>: <em>جاء أبوك، زارنا أخوك، هذا ذو مالٍ</em>.</li>
        <li><strong>تنصب بالألف</strong>: <em>رأيت أباك، صادقت أخاك، أكرمت حماك</em>.</li>
        <li><strong>تجرّ بالياء</strong>: <em>مررت بأبيك، سلمت على أخيك، جلست إلى حميك</em>.</li>
      </ul>

      <h4>شروط إعرابها بهذا الإعراب</h4>
      <ul>
        <li>أن تكون <strong>مفردة</strong>.</li>
        <li>أن تكون <strong>مضافة</strong>.</li>
        <li>ألا تُضاف إلى <strong>ياء المتكلم</strong>، وإلا أُعربت بالحركات.</li>
      </ul>
    `,
    quiz: [
      {
        id: 'five-q1',
        question: 'أيٌّ مما يلي يُعَدُّ من الأسماء الخمسة؟',
        options: ['أبوك', 'أخينا', 'أبانا', 'أبوين'],
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
        question: 'في جملة "رأيتُ أباك"، علامة نصب "أباك" هي:',
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
        explanation: 'عند إضافتها لياء المتكلم (حمي) تعود للإعراب بالحركات لا بالحروف.'
      }
    ]
  },

  // =========================
  // أسلوب الاستفهام (أدوات الاستفهام)
  // =========================
  interrogatives: {
    id: 'interrogatives',
    title: 'أدوات الاستفهام',
    lessonNumber: 30,
    categoryId: 'styles',
    videos: [
      {
        title: 'أدوات الاستفهام',
        url: 'https://youtu.be/fY-y8LqX6Bk?si=LU1wqp5iTMB_YQOB'
      }
    ],
    images: [
      'lessons/أسلوب الاستفهام/أدوات الاستفهام.jpg'
    ],
    contentHtml: `
      <p>
        <strong>أسلوب الاستفهام</strong> هو ما يُستعمل لطلب الفهم أو السؤال عن شيء مجهول. :contentReference[oaicite:11]{index=11}
      </p>
      <p>
        من أدوات الاستفهام: <strong>مَن، ما، ماذا، متى، أيان، أين، كيف، كم، أيُّ</strong>.
      </p>

      <ul>
        <li><strong>مَن</strong> – للسؤال عن العاقل: <em>مَن آخر الخلفاء الراشدين؟</em></li>
        <li><strong>ما / ماذا</strong> – للسؤال عن غير العاقل: <em>ما أحبُّ العلوم إليك؟</em></li>
        <li><strong>متى</strong> – للسؤال عن الزمان: <em>متى رجعت؟</em></li>
        <li><strong>أيان</strong> – للزمان المستقبل: <em>أيان تسافر؟</em></li>
        <li><strong>أين</strong> – للسؤال عن المكان: <em>أين أخوك؟</em></li>
        <li><strong>كيف</strong> – للسؤال عن الحال: <em>كيف حالك؟</em></li>
        <li><strong>كم</strong> – للسؤال عن العدد: <em>كم كتابًا قرأت؟</em></li>
        <li><strong>أيُّ</strong> – لتعيين واحد من مجموعة: <em>أيُّ رجلٍ أتى؟</em></li>
      </ul>
    `,
    quiz: [
      {
        id: 'int-q1',
        question: 'أيُّ أداة استفهام تُستخدم للسؤال عن العاقل؟',
        options: ['ما', 'أين', 'مَن', 'كم'],
        correctIndex: 2,
        explanation: 'تستعمل "مَن" للسؤال عن العاقل.'
      },
      {
        id: 'int-q2',
        question: 'السؤال المناسب عن الزمان هو:',
        options: [
          'أين تدرس؟',
          'متى تبدأُ الحصةُ؟',
          'كيف حالُك؟',
          'كم كتابًا قرأت؟'
        ],
        correctIndex: 1,
        explanation: '"متى" تختص بالسؤال عن الزمان.'
      },
      {
        id: 'int-q3',
        question: 'أيُّ سؤالٍ يستخدم أداة استفهام عن المكان؟',
        options: [
          'متى رجعت؟',
          'أين تسكن؟',
          'كم طالبًا في الصف؟',
          'كيف وصلت؟'
        ],
        correctIndex: 1,
        explanation: '"أين تسكن؟" سؤال عن المكان.'
      },
      {
        id: 'int-q4',
        question: 'في الجملة "كم طالبًا في الصف؟"، أداة الاستفهام تُستخدم للسؤال عن:',
        options: ['الزمان', 'المكان', 'الحال', 'العدد'],
        correctIndex: 3,
        explanation: '"كم" للسؤال عن العدد أو الكمية.'
      },
      {
        id: 'int-q5',
        question: 'أيُّ سؤالٍ مناسب للسؤال عن حال الشخص؟',
        options: [
          'متى حضرت؟',
          'أين تقيم؟',
          'كيف صحتُك؟',
          'كم مرةً زرتنا؟'
        ],
        correctIndex: 2,
        explanation: '"كيف" تُستخدم للسؤال عن الحال أو الهيئة.'
      }
    ]
  },

  // =========================
  // التمييز
  // =========================
  tamyeez: {
    id: 'tamyeez',
    title: 'التمييز',
    lessonNumber: 31,
    categoryId: 'tawabi',
    videos: [],
    images: [
      'lessons/التمييز/التمييز.jpg'
    ],
    contentHtml: `
      <p>
        <strong>التمييز</strong> اسم نكرة منصوب يزيل إبهامًا في الجملة
        ويُوضّح المقصود من كلمة قبله.
      </p>

      <h4>تمييز ملفوظ</h4>
      <p>
        يوضّح مقدارًا مذكورًا قبله، مثل العدد أو الكيل أو الوزن أو المساحة:
      </p>
      <ul>
        <li>خمسةُ ريالاتٍ، كيلو لحمًا، فدانًا قمحًا، لترًا ماءً.</li>
      </ul>

      <h4>تمييز ملحوظ (نِسبة)</h4>
      <p>
        يوضّح جملة أو نسبة معنوية قبله، مثل:
        <em>طاب الجوُّ هواءً</em>، <em>ازداد الطالب علمًا</em>.
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
        explanation: 'خمسةُ ريالاتٍ: تمييز عدد.'
      },
      {
        id: 'tam-q3',
        question: 'أيُّ جملة فيها تمييز ملحوظ (نسبة)؟',
        options: [
          'شربتُ لترًا ماءً',
          'اشتريتُ كيلو أرزًا',
          'طابَ الجوُّ هواءً',
          'زرعتُ فدانًا قمحًا'
        ],
        correctIndex: 2,
        explanation: '"طاب الجوُّ هواءً" يوضّح حالة الجو، وهذا تمييز ملحوظ.'
      },
      {
        id: 'tam-q4',
        question: 'ما تعريف التمييز؟',
        options: [
          'اسم معرفة يوضّح الفاعل',
          'اسم نكرة مرفوع يزيل إبهامًا',
          'اسم نكرة منصوب يزيل إبهامًا في الجملة',
          'فعل ماضٍ يزيل الغموض'
        ],
        correctIndex: 2,
        explanation: 'التعريف الصحيح: اسم نكرة منصوب يزيل إبهامًا.'
      },
      {
        id: 'tam-q5',
        question: 'في جملة "ازدادَ الطالبُ علمًا"، كلمة "علمًا" هي:',
        options: ['فاعل', 'مفعول به', 'حال', 'تمييز'],
        correctIndex: 3,
        explanation: '"علمًا" تمييز ملحوظ يوضح نوع الزيادة.'
      }
    ]
  }
};

// ============================
// دوال التخزين العامّة
// ============================

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.error('Storage read error', e);
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Storage write error', e);
  }
}

// ============================
// الملف الشخصي للطالب
// ============================

function getStudentProfile() {
  return loadFromStorage(STORAGE_KEYS.profile, null);
}

function saveStudentProfile(profile) {
  saveToStorage(STORAGE_KEYS.profile, profile);
}

// ============================
// التقدم في الدروس والمفضّلة
// ============================

function loadProgress() {
  return loadFromStorage(STORAGE_KEYS.progress, {});
}

function saveProgress(progress) {
  saveToStorage(STORAGE_KEYS.progress, progress);
}

function loadFavorites() {
  return loadFromStorage(STORAGE_KEYS.favorites, []);
}

function saveFavorites(favs) {
  saveToStorage(STORAGE_KEYS.favorites, favs);
}

// ============================
// حالة التطبيق
// ============================

const appState = {
  profile: null,
  progress: loadProgress(),
  favorites: loadFavorites(),
  currentLessonId: null,
  currentView: 'landing'
};

// ============================
// بطاقة المبرمج
// ============================

function createDeveloperCardHTML() {
  const phoneHref = DEVELOPER_INFO.phone.replace(/\s+/g, '');
  return `
    <section class="developer-card">
      <p class="developer-title">${DEVELOPER_INFO.label}</p>
      <p class="developer-phone">
        <a href="tel:${phoneHref}">${DEVELOPER_INFO.phone}</a>
        <span class="developer-phone-icon">📞</span>
      </p>
    </section>
  `;
}

// ============================
// مودال بيانات الطالب
// ============================

function openProfileModal(onDone) {
  const existing = getStudentProfile() || { fullName: '', grade: '' };

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay profile-modal-overlay';
  overlay.innerHTML = `
    <div class="profile-modal-card">
      <button class="profile-modal-close" aria-label="إغلاق">&times;</button>
      <div class="profile-modal-icon">👩‍🎓</div>
      <h2>مرحبًا بك في تطبيق النحو ببساطة</h2>
      <p class="profile-modal-text">
        من فضلك أدخل بياناتك حتى نُظهر اسمك في شهادة الإنجاز:
      </p>

      <label class="profile-modal-label">
        الاسم الرباعي
        <input id="profile-full-name" class="profile-modal-input" type="text"
               placeholder="مثال: أحمد محمد علي عبد الله" value="${existing.fullName || ''}">
      </label>

      <label class="profile-modal-label">
        المرحلة الدراسية
        <input id="profile-grade" class="profile-modal-input" type="text"
               placeholder="مثال: الصف التاسع الأساسي" value="${existing.grade || ''}">
      </label>

      <div class="profile-modal-actions">
        <button class="profile-modal-secondary">إلغاء</button>
        <button class="profile-modal-primary">حفظ وبدء التعلّم</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const fullNameInput = overlay.querySelector('#profile-full-name');
  const gradeInput = overlay.querySelector('#profile-grade');
  const btnPrimary = overlay.querySelector('.profile-modal-primary');
  const btnSecondary = overlay.querySelector('.profile-modal-secondary');
  const btnClose = overlay.querySelector('.profile-modal-close');

  function closeModal() {
    overlay.remove();
  }

  btnSecondary.addEventListener('click', closeModal);
  btnClose.addEventListener('click', closeModal);

  btnPrimary.addEventListener('click', () => {
    const fullName = fullNameInput.value.trim();
    const grade = gradeInput.value.trim();

    if (!fullName) {
      alert('من فضلك أدخل اسمك الرباعي.');
      fullNameInput.focus();
      return;
    }

    const profile = { fullName, grade, createdAt: Date.now() };
    saveStudentProfile(profile);
    appState.profile = profile;
    closeModal();
    if (typeof onDone === 'function') onDone();
  });
}

// ============================
// عرض الشهادة (HTML + نافذة جديدة)
// ============================

function buildCertificateHtml(stats) {
  const profile = getStudentProfile();
  const studentName = profile?.fullName || 'الطالب / الطالبة';
  const grade = profile?.grade || '';
  const today = new Date().toLocaleDateString('ar-YE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const totalLessons = Object.keys(LESSONS).length;
  const completed = stats?.completedLessons || 0;

  return `
    <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <title>شهادة إنجاز</title>
        <style>
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: #f0fdf4;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          .cert {
            background: #ffffff;
            padding: 3rem 3.5rem;
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(15, 118, 110, 0.15);
            text-align: center;
            max-width: 700px;
            border: 3px solid #22c55e;
          }
          .cert-title {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            color: #047857;
          }
          .cert-subtitle {
            margin-bottom: 2rem;
            color: #6b7280;
          }
          .cert-name {
            font-size: 1.6rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
          }
          .cert-grade {
            margin-bottom: 1.5rem;
            color: #4b5563;
          }
          .cert-body {
            margin-bottom: 2rem;
            line-height: 1.8;
          }
          .cert-footer {
            display: flex;
            justify-content: space-between;
            margin-top: 2.5rem;
            font-size: 0.95rem;
          }
          .cert-sign {
            text-align: right;
          }
          .cert-dev {
            text-align: left;
            color: #059669;
          }
          .cert-date {
            margin-top: 0.75rem;
            color: #6b7280;
          }
        </style>
      </head>
      <body>
        <div class="cert">
          <h1 class="cert-title">شهادة إنجاز</h1>
          <p class="cert-subtitle">يُمنح هذه الشهادة</p>

          <div class="cert-name">${studentName}</div>
          ${grade ? `<div class="cert-grade">المرحلة: ${grade}</div>` : ''}

          <div class="cert-body">
            تقديرًا لجهوده في إكمال
            <strong>${completed}</strong>
            من أصل
            <strong>${totalLessons}</strong>
            درسًا من دروس تطبيق
            <strong>«النحو ببساطة»</strong>
            وتحقيقه تقدمًا ملحوظًا في الاختبارات التفاعلية.
          </div>

          <div class="cert-footer">
            <div class="cert-sign">
              <div>المشرفة على التطبيق</div>
              <div><strong>${SUPERVISOR_NAME}</strong></div>
            </div>
            <div class="cert-dev">
              <div>${DEVELOPER_INFO.label}</div>
              <div>${DEVELOPER_INFO.phone}</div>
            </div>
          </div>

          <div class="cert-date">التاريخ: ${today}</div>
        </div>
      </body>
    </html>
  `;
}

function generateCertificate(stats) {
  const win = window.open('', '_blank');
  win.document.write(buildCertificateHtml(stats || {}));
  win.document.close();
  win.focus();
}

// ============================
// حساب الإحصائيات من progress
// ============================

function computeStats() {
  const progress = appState.progress;
  const totalLessons = Object.keys(LESSONS).length;
  let completedLessons = 0;
  let totalQuestions = 0;
  let correctAnswers = 0;

  Object.keys(LESSONS).forEach(id => {
    const lesson = LESSONS[id];
    const p = progress[id];
    if (p && p.completed) completedLessons += 1;
    if (lesson.quiz && lesson.quiz.length) {
      totalQuestions += lesson.quiz.length;
      if (p && typeof p.score === 'number') {
        correctAnswers += p.score;
      }
    }
  });

  return {
    totalLessons,
    completedLessons,
    totalQuestions,
    correctAnswers
  };
}

// ============================
// عرض القوائم والدروس
// ============================

function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;

  const lessonsByCategory = {};
  Object.values(LESSONS).forEach(lesson => {
    if (!lessonsByCategory[lesson.categoryId]) {
      lessonsByCategory[lesson.categoryId] = [];
    }
    lessonsByCategory[lesson.categoryId].push(lesson);
  });

  // ترتيب بسيط حسب lessonNumber
  Object.values(lessonsByCategory).forEach(list =>
    list.sort((a, b) => (a.lessonNumber || 0) - (b.lessonNumber || 0))
  );

  container.innerHTML = '';

  Object.values(CATEGORIES).forEach(cat => {
    const lessons = lessonsByCategory[cat.id] || [];
    const card = document.createElement('article');
    card.className = `category-card ${cat.colorClass || ''}`;

    const completedCount = lessons.filter(l => appState.progress[l.id]?.completed).length;

    card.innerHTML = `
      <button class="category-header" type="button">
        <div>
          <h3>${cat.title}</h3>
          <p>${lessons.length} درس — مكتمل: ${completedCount}</p>
        </div>
        <span class="category-toggle">▼</span>
      </button>
      <ul class="lessons-list" style="display:none"></ul>
    `;

    const listEl = card.querySelector('.lessons-list');

    lessons.forEach(lesson => {
      const progress = appState.progress[lesson.id] || {};
      const li = document.createElement('li');
      li.className = 'lesson-row';
      li.dataset.lessonId = lesson.id;

      const hasVideo = lesson.videos && lesson.videos.length > 0;

      li.innerHTML = `
        <div class="lesson-row-main">
          <span class="lesson-title">${lesson.title}</span>
          <span class="lesson-status">
            ${progress.completed ? '✓ مكتمل' : 'لم يُنجز بعد'}
          </span>
        </div>
        <div class="lesson-row-meta">
          ${hasVideo ? 'يحتوي فيديو 🎬' : 'بدون فيديو'}
        </div>
      `;

      li.addEventListener('click', () => {
        openLesson(lesson.id);
      });

      listEl.appendChild(li);
    });

    const headerBtn = card.querySelector('.category-header');
    headerBtn.addEventListener('click', () => {
      const isOpen = listEl.style.display === 'block';
      listEl.style.display = isOpen ? 'none' : 'block';
      headerBtn.querySelector('.category-toggle').textContent = isOpen ? '▼' : '▲';
    });

    container.appendChild(card);
  });
}

function openLesson(lessonId) {
  const lesson = LESSONS[lessonId];
  if (!lesson) return;
  appState.currentLessonId = lessonId;

  const view = document.getElementById('lesson-detail-view');
  if (!view) return;

  showView('lessons'); // نتأكد أننا في شاشة الدروس

  const progress = appState.progress[lessonId] || {};
  const isFavorite = appState.favorites.includes(lessonId);

  let imagesHtml = '';
  if (lesson.images && lesson.images.length) {
    imagesHtml = `
      <div class="lesson-images">
        ${lesson.images
          .map(src => `<div class="lesson-image"><img src="${src}" alt=""></div>`)
          .join('')}
      </div>
    `;
  }

  let videosHtml = '';
  if (lesson.videos && lesson.videos.length) {
    videosHtml = `
      <section class="lesson-section">
        <h3>الفيديوهات التوضيحية</h3>
        <ul class="videos-list">
          ${lesson.videos
            .map(
              v => `<li><a href="${v.url}" target="_blank" rel="noopener">
                🎬 ${v.title}
              </a></li>`
            )
            .join('')}
        </ul>
      </section>
    `;
  }

  view.innerHTML = `
    <header class="lesson-header">
      <button id="back-to-lessons" class="secondary-btn small-btn">العودة إلى الدروس</button>
      <div class="lesson-header-main">
        <h2>${lesson.title}</h2>
        ${lesson.lessonNumber ? `<p class="lesson-number">الدرس ${lesson.lessonNumber}</p>` : ''}
      </div>
      <div class="lesson-header-actions">
        <button id="fav-btn" class="icon-btn" title="إضافة للمفضلة">
          ${isFavorite ? '⭐' : '☆'}
        </button>
      </div>
    </header>

    ${imagesHtml}

    <section class="lesson-section">
      <h3>محتوى الدرس</h3>
      <div class="lesson-content">${lesson.contentHtml}</div>
    </section>

    ${videosHtml}

    <section class="lesson-section" id="quiz-section">
      <h3>اختبر نفسك</h3>
      <div id="quiz-container"></div>
    </section>

    <section class="lesson-section">
      <h3>تحميل الدرس</h3>
      <p>سيتم فتح نافذة الطباعة، ويمكنك اختيار "حفظ كملف PDF" من المتصفح.</p>
      <button id="download-lesson-pdf" class="primary-btn">تحميل الدرس بصيغة PDF</button>
    </section>
  `;

  const backBtn = document.getElementById('back-to-lessons');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      appState.currentLessonId = null;
      // مجرد إخفاء التفاصيل، والقائمة تبقى معروضة
      document.getElementById('lesson-detail-view').innerHTML = '';
    });
  }

  const favBtn = document.getElementById('fav-btn');
  if (favBtn) {
    favBtn.addEventListener('click', () => {
      toggleFavoriteLesson(lessonId);
      favBtn.textContent = appState.favorites.includes(lessonId) ? '⭐' : '☆';
    });
  }

  const pdfBtn = document.getElementById('download-lesson-pdf');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
      downloadLessonPdf(lessonId);
    });
  }

  renderQuiz(lesson, progress);
}

function toggleFavoriteLesson(lessonId) {
  const idx = appState.favorites.indexOf(lessonId);
  if (idx === -1) {
    appState.favorites.push(lessonId);
  } else {
    appState.favorites.splice(idx, 1);
  }
  saveFavorites(appState.favorites);
}

// ============================
// الاختبار لكل درس
// ============================

function renderQuiz(lesson, progress) {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const questions = lesson.quiz || [];
  if (!questions.length) {
    container.innerHTML = '<p>سيتم إضافة أسئلة لهذا الدرس لاحقًا.</p>';
    return;
  }

  container.innerHTML = '';

  questions.forEach((q, index) => {
    const field = document.createElement('fieldset');
    field.className = 'quiz-question';

    field.innerHTML = `
      <legend>السؤال ${index + 1} من ${questions.length}</legend>
      <p class="quiz-q-text">${q.question}</p>
      <div class="quiz-options">
        ${q.options
          .map(
            (opt, i) => `
          <label class="quiz-option">
            <input type="radio" name="q-${q.id}" value="${i}">
            <span>${opt}</span>
          </label>
        `
          )
          .join('')}
      </div>
      <p class="quiz-feedback" data-qid="${q.id}"></p>
    `;

    container.appendChild(field);
  });

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'تأكيد الإجابة';
  submitBtn.className = 'primary-btn';
  container.appendChild(submitBtn);

  const resultP = document.createElement('p');
  resultP.className = 'quiz-result';
  container.appendChild(resultP);

  submitBtn.addEventListener('click', () => {
    let score = 0;

    questions.forEach(q => {
      const selected = container.querySelector(`input[name="q-${q.id}"]:checked`);
      const feedback = container.querySelector(`.quiz-feedback[data-qid="${q.id}"]`);
      if (!feedback) return;

      if (!selected) {
        feedback.textContent = 'لم تختر إجابة بعد.';
        feedback.className = 'quiz-feedback quiz-feedback-missing';
        return;
      }

      const answerIndex = Number(selected.value);
      if (answerIndex === q.correctIndex) {
        score += 1;
        feedback.textContent = 'إجابة صحيحة ✔️';
        feedback.className = 'quiz-feedback quiz-feedback-correct';
      } else {
        feedback.textContent = `إجابة خاطئة ❌ — الصحيح هو: ${q.options[q.correctIndex]}`;
        feedback.className = 'quiz-feedback quiz-feedback-wrong';
      }
    });

    const percent = Math.round((score / questions.length) * 100);
    resultP.textContent = `نتيجتك: ${score} من ${questions.length} (${percent}٪)`;

    appState.progress[lesson.id] = {
      completed: true,
      score,
      total: questions.length
    };
    saveProgress(appState.progress);

    // تحديث القائمة الرئيسية (حالة مكتمل)
    renderCategories();
  });
}

// ============================
// تحميل الدرس كـ PDF (عن طريق الطباعة)
// ============================

function downloadLessonPdf(lessonId) {
  const lesson = LESSONS[lessonId];
  if (!lesson) return;

  const profile = getStudentProfile();
  const studentName = profile?.fullName || '';
  const win = window.open('', '_blank');

  win.document.write(`
    <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <title>${lesson.title}</title>
        <style>
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            padding: 2rem;
            line-height: 1.8;
          }
          h1 {
            text-align: center;
            margin-bottom: 1.5rem;
          }
          .student-name {
            text-align: center;
            margin-bottom: 1rem;
            color: #4b5563;
          }
          img {
            max-width: 100%;
            margin: 1rem 0;
          }
        </style>
      </head>
      <body>
        <h1>${lesson.title}</h1>
        ${studentName ? `<p class="student-name">الطالب/ة: ${studentName}</p>` : ''}
        ${lesson.contentHtml}
        ${
          lesson.images && lesson.images.length
            ? lesson.images.map(src => `<p><img src="${src}" alt=""></p>`).join('')
            : ''
        }
      </body>
    </html>
  `);

  win.document.close();
  win.focus();
  // المستخدم يختار "حفظ كملف PDF" من نافذة الطباعة
  win.print();
}

// ============================
// عرض الإحصائيات
// ============================

function renderStatsView() {
  const view = document.getElementById('stats-view');
  if (!view) return;

  const stats = computeStats();

  view.innerHTML = `
    <section class="stats-card">
      <h2>إحصائيات تقدّمك</h2>
      <p>عدد الدروس الكلّي: ${stats.totalLessons}</p>
      <p>الدروس المكتملة: ${stats.completedLessons}</p>
      <p>عدد أسئلة الاختبارات: ${stats.totalQuestions}</p>
      <p>إجابات صحيحة: ${stats.correctAnswers}</p>
      <button id="download-certificate-btn" class="primary-btn">
        تحميل شهادة إنجاز PDF
      </button>
    </section>
  `;

  const certBtn = document.getElementById('download-certificate-btn');
  if (certBtn) {
    certBtn.addEventListener('click', () => {
      generateCertificate(stats);
    });
  }
}

// ============================
// صفحة "اسأل المعلم"
// ============================

function renderAskTeacherView() {
  const container = document.getElementById('ask-teacher-view');
  if (!container) return;

  container.innerHTML = `
    <section class="teacher-card">
      <h2 class="teacher-title">تواصل مع الأستاذة المشرفة</h2>
      <p class="teacher-subtitle">للاستفسارات والأسئلة المباشرة</p>

      <div class="teacher-box">
        <div class="teacher-icon">👩‍🏫</div>
        <h3 class="teacher-name">الأستاذة / سهام غازي</h3>
        <p class="teacher-role">المشرفة على التطبيق</p>
        <p class="teacher-phone">
          <a href="https://wa.me/967775392526" target="_blank" rel="noopener">
            تواصل عبر الواتساب
          </a>
        </p>
      </div>
    </section>

    <div class="developer-wrapper">
      ${createDeveloperCardHTML()}
    </div>
  `;
}

// ============================
// إدارة الواجهات (Views)
// ============================

const views = {};

function cacheViews() {
  views.landing = document.getElementById('landing-view');
  views.lessons = document.getElementById('lessons-view');
  views.stats = document.getElementById('stats-view');
  views.askTeacher = document.getElementById('ask-teacher-view');
}

function showView(name) {
  appState.currentView = name;
  Object.entries(views).forEach(([key, el]) => {
    if (!el) return;
    if (key === name) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
}

// ============================
// تهيئة زر "ابدأ التعلّم"
// ============================

function initStartButton() {
  const startBtn =
    document.getElementById('start-learning') ||
    document.getElementById('start-learning-btn');

  if (!startBtn) return;

  startBtn.addEventListener('click', () => {
    const profile = getStudentProfile();
    if (!profile) {
      openProfileModal(() => {
        showView('lessons');
      });
    } else {
      showView('lessons');
    }
  });
}

// ============================
// بطاقات المبرمج في الواجهة الرئيسية
// ============================

function initHomeDeveloperCard() {
  const homeDevSlot = document.getElementById('developer-card-home');
  if (homeDevSlot) {
    homeDevSlot.innerHTML = createDeveloperCardHTML();
  }
}

// ============================
// تهيئة التنقل (الهيدر / التبويبات)
// ============================

function initNavigation() {
  const navHome = document.getElementById('nav-home');
  const navLessons = document.getElementById('nav-lessons');
  const navStats = document.getElementById('nav-stats');
  const navAsk = document.getElementById('nav-ask-teacher');

  if (navHome) {
    navHome.addEventListener('click', () => showView('landing'));
  }
  if (navLessons) {
    navLessons.addEventListener('click', () => showView('lessons'));
  }
  if (navStats) {
    navStats.addEventListener('click', () => {
      renderStatsView();
      showView('stats');
    });
  }
  if (navAsk) {
    navAsk.addEventListener('click', () => {
      renderAskTeacherView();
      showView('askTeacher');
    });
  }
}

// ============================
// تهيئة التطبيق
// ============================

document.addEventListener('DOMContentLoaded', () => {
  appState.profile = getStudentProfile();
  cacheViews();
  initStartButton();
  initHomeDeveloperCard();
  renderCategories();
  renderStatsView();
  renderAskTeacherView(); // حتى يكون جاهز أول ما يفتح التبويب
  initNavigation();

  // شاشة البداية
  showView('landing');
});
// ============================
// ثوابت عامّة
// ============================

// معلومات المبرمج (تستخدم في بطاقة المبرمج + الشهادة)
const DEVELOPER_INFO = {
  label: 'برمجة المهندس / عبدالرحمن الضبيبي',
  phone: '+967 781 752 213'
};

// اسم المشرفة على التطبيق (لإظهارها في الشهادة)
const SUPERVISOR_NAME = 'الأستاذة سهام غازي';

// مفاتيح التخزين المحلي
const STORAGE_KEYS = {
  profile: 'nahw_student_profile_v1',
  progress: 'nahw_lessons_progress_v1',
  favorites: 'nahw_favorites_v1'
};

// ============================
// بيانات التصنيفات والدروس
// ============================

const CATEGORIES = {
  intro: {
    id: 'intro',
    title: 'تعريف النحو',
    description: 'دروس تمهيدية لفهم أنواع الكلمة وبداية النحو.',
    colorClass: 'cat-green'
  },
  sentences: {
    id: 'sentences',
    title: 'الجُمَل',
    description: 'الجملة الاسمية والجملة الفعلية وبناؤهما.',
    colorClass: 'cat-yellow'
  },
  nouns: {
    id: 'nouns',
    title: 'الأسماء وأنواعها',
    description: 'أسماء الإشارة، الأسماء الموصولة، الأسماء الخمسة وغيرها.',
    colorClass: 'cat-blue'
  },
  styles: {
    id: 'styles',
    title: 'أساليب نحوية',
    description: 'أسلوب الاستفهام وأدواته.',
    colorClass: 'cat-pink'
  },
  tawabi: {
    id: 'tawabi',
    title: 'التوابع والتمييز',
    description: 'درس التمييز وأنواعه.',
    colorClass: 'cat-purple'
  }
};

// ملاحظة: المحتوى النصي للدروس مأخوذ من ملفاتك (Word + صور) التي أرسلتها سابقًا.
// يمكنك إضافة باقي الدروس بنفس النمط لو أحببت.
const LESSONS = {
  // =========================
  // تعريف النحو / أنواع الكلمة
  // =========================
  'types-of-word': {
    id: 'types-of-word',
    title: 'أنواع الكلمة',
    lessonNumber: 10,
    categoryId: 'intro',
    videos: [
      {
        title: 'أنواع الكلمة',
        url: 'https://youtu.be/46MwuNDrdlo?si=yHVbvc0IS1QbtRft'
      }
    ],
    images: [
      'lessons/أنواع الكلمة/أنواع الكلمة.jpg'
    ],
    contentHtml: `
      <p>
        تنقسم الكلمة في اللغة العربية إلى ثلاثة أنواع أساسية:
        <strong>اسم</strong> و<strong>فعل</strong> و<strong>حرف</strong>. :contentReference[oaicite:1]{index=1}
      </p>

      <h4>أولًا: الاسم</h4>
      <p>
        هو كلمة تدل على معنى في نفسها ولا تقترن بزمن،
        مثل: <strong>محمد، طالبة، كتاب، شجرة</strong>. :contentReference[oaicite:2]{index=2}
      </p>
      <p>
        يمكن أن يدل الاسم على الإنسان، أو الحيوان، أو النبات، أو الجماد؛
        مثل: <em>محمد، أسد، عنب، ساعة</em>.
      </p>

      <h4>ثانيًا: الفعل</h4>
      <p>
        هو كلمة تدل على معنى في نفسها، وتقترن بواحد من الأزمنة الثلاثة:
        الماضي، أو المضارع، أو الأمر. :contentReference[oaicite:3]{index=3}
      </p>
      <ul>
        <li><strong>الفعل الماضي:</strong> يدل على حدث وقع في الزمن الماضي، مثل: <em>نصرَ، فهمَ، جلسَ</em>.</li>
        <li><strong>الفعل المضارع:</strong> يدل على حدث يقع الآن أو يتجدد، مثل: <em>ينصرُ، يجلسُ، يجتهدُ</em>.</li>
        <li><strong>فعل الأمر:</strong> يدل على طلب حدوث الفعل في المستقبل، مثل: <em>انصُرْ، اجلسْ، اجتهدْ</em>.</li>
      </ul>

      <h4>ثالثًا: الحرف</h4>
      <p>
        هو كلمة لا يظهر معناها كاملًا وحدها، بل يتضح بالاقتران مع غيرها،
        مثل: <strong>من، إلى، عن، في، بل، ثم</strong>. :contentReference[oaicite:4]{index=4}
      </p>
      <p>
        في جملة <strong>ذهبتُ من البيت</strong> لا يتضح معنى <strong>من</strong>
        إلا مع بقية الكلمات في الجملة.
      </p>
    `,
    quiz: [
      {
        id: 'types-q1',
        question: 'ما التعريف الأدق للاسم؟',
        options: [
          'كلمة تدل على معنى في نفسها ولا تقترن بزمن',
          'كلمة تدل على معنى في نفسها وتقترن بزمن',
          'كلمة لا يظهر معناها إلا مع غيرها',
          'كلمة تدل على زمان فقط'
        ],
        correctIndex: 0,
        explanation: 'الاسم يدل على معنى في نفسه، ولا يرتبط بزمان معيّن.'
      },
      {
        id: 'types-q2',
        question: 'أيٌّ مما يلي يُعَدُّ فعلًا ماضيًا؟',
        options: ['يكتبُ', 'اكتبْ', 'كتبَ', 'يَكتُبون'],
        correctIndex: 2,
        explanation: 'الفعل الماضي يدل على حدث وقع في الزمن الماضي مثل: كتبَ.'
      },
      {
        id: 'types-q3',
        question: 'أي الكلمات الآتية تُعَدُّ حروفًا؟',
        options: ['محمد', 'من', 'قلم', 'يجلس'],
        correctIndex: 1,
        explanation: 'الحرف مثل: من، إلى، عن، لا يتم معناه إلا مع غيره.'
      },
      {
        id: 'types-q4',
        question: 'أيُّ جملة فيها اسم يدل على جماد؟',
        options: [
          'جلسَ الطالبُ',
          'طارَ العصفورُ',
          'انكسرَ الكأسُ',
          'نما الزرعُ'
        ],
        correctIndex: 2,
        explanation: 'الكأسُ جماد، بخلاف الطالب والعصفور والزرع.'
      },
      {
        id: 'types-q5',
        question: 'في الجملة: "يقرأُ الطفلُ القصّةَ"، كلمة "يقرأُ" هي:',
        options: ['اسم', 'فعل مضارع', 'حرف', 'فعل ماض'],
        correctIndex: 1,
        explanation: 'يقرأُ فعل مضارع لأنه يدل على حدثٍ يقع الآن أو يتجدد.'
      },
      {
        id: 'types-q6',
        question: 'في أيِّ الجمل التالية ظهر حرف من حروف الجر؟',
        options: [
          'الطالبُ مجتهدٌ',
          'نجحَ محمدٌ',
          'ذهبتُ إلى المدرسةِ',
          'يلعبُ الأطفالُ'
        ],
        correctIndex: 2,
        explanation: 'حرف الجر هنا هو "إلى".'
      }
    ]
  },

  // =========================
  // الجملة
  // =========================
  sentence: {
    id: 'sentence',
    title: 'الجملة',
    lessonNumber: 11,
    categoryId: 'sentences',
    videos: [
      {
        title: 'الجملة',
        url: 'https://youtu.be/9AR0d5IUSSo?si=hr3P7QyUKslCVCh2'
      }
    ],
    images: [
      'lessons/الجملة/الجملة.jpg'
    ],
    contentHtml: `
      <p>
        تنقسم الجملة في اللغة العربية إلى نوعين رئيسين:
        <strong>جملة اسمية</strong> و<strong>جملة فعلية</strong>. :contentReference[oaicite:5]{index=5}
      </p>

      <h4>أولًا: الجملة الاسمية</h4>
      <p>
        هي التي تبدأ باسم، وتتكون أساسًا من
        <strong>مبتدأ وخبر</strong>،
        مثل: <em>العِلْمُ نورٌ، المطرُ غزيرٌ</em>. :contentReference[oaicite:6]{index=6}
      </p>
      <p>
        قد يدخل على الجملة الاسمية
        <strong>إنَّ وأخواتُها</strong>
        فتنصب المبتدأ وترفع الخبر:
        <em>إنَّ اللهَ رحيمٌ، ليتَ الشبابَ عائدٌ</em>.
      </p>

      <h4>ثانيًا: الجملة الفعلية</h4>
      <p>
        هي التي تبدأ بفعل، وتتكون من <strong>فعل وفاعل</strong>،
        مثل: <em>حضرَ المعلمُ، يكتبُ الولدُ</em>. :contentReference[oaicite:7]{index=7}
      </p>
      <p>
        وقد تُبنى للمجهول فيكون التركيب من
        <strong>فعل ونائب فاعل</strong>،
        مثل: <em>فُتحَ البابُ، يُفتحُ البابُ</em>.
      </p>

      <p>
        فهمُ نوع الجملة يساعدك على ضبط الإعراب
        وتحديد موقع كل كلمة داخل الجملة.
      </p>
    `,
    quiz: [
      {
        id: 'sent-q1',
        question: 'أيُّ الجمل الآتية جملة اسمية؟',
        options: [
          'جلسَ الطالبُ',
          'يقرأُ الطفلُ',
          'المطرُ غزيرٌ',
          'سافرَ الأبُ'
        ],
        correctIndex: 2,
        explanation: 'الجملة الاسمية تبدأ باسم: "المطرُ غزيرٌ".'
      },
      {
        id: 'sent-q2',
        question: 'المكوِّنان الأساسيان للجملة الاسمية هما:',
        options: [
          'فعل وفاعل',
          'مبتدأ وخبر',
          'فعل ومفعول به',
          'مبتدأ ومضاف إليه'
        ],
        correctIndex: 1,
        explanation: 'الجملة الاسمية تتكون من مبتدأ وخبر أساسًا.'
      },
      {
        id: 'sent-q3',
        question: 'أيُّ جملةٍ فعلية مبنية للمجهول؟',
        options: [
          'فتحَ الولدُ البابَ',
          'يكتبُ الطالبُ الدرسَ',
          'فُتحَ البابُ',
          'أكلَ الطفلُ التفاحةَ'
        ],
        correctIndex: 2,
        explanation: 'فُتحَ البابُ: فعل ماضٍ مبني للمجهول ونائب فاعل.'
      },
      {
        id: 'sent-q4',
        question: 'في جملة "إنَّ اللهَ رحيمٌ"، كلمة "الله" تعرب:',
        options: [
          'مبتدأ مرفوع',
          'خبر مرفوع',
          'اسم إنَّ منصوب',
          'خبر إنَّ منصوب'
        ],
        correctIndex: 2,
        explanation: 'إنَّ تنصب المبتدأ، فيصبح اسمها منصوبًا.'
      },
      {
        id: 'sent-q5',
        question: 'في جملة "يكتبُ الطالبُ الدرسَ"، نوع الجملة هو:',
        options: ['اسمية', 'فعلية', 'شرطية', 'استفهامية'],
        correctIndex: 1,
        explanation: 'الجملة بدأت بفعل مضارع "يكتبُ"، فهي جملة فعلية.'
      },
      {
        id: 'sent-q6',
        question: 'أيُّ تركيبٍ يُعَدُّ ركنًا من أركان الجملة الفعلية؟',
        options: [
          'مبتدأ وخبر',
          'فاعل ومفعول به فقط',
          'فعل وفاعل',
          'فعل وحرف جر'
        ],
        correctIndex: 2,
        explanation: 'الركن الأساسي للجملة الفعلية: فعل وفاعل.'
      }
    ]
  },

  // =========================
  // أسماء الإشارة
  // =========================
  'demonstratives': {
    id: 'demonstratives',
    title: 'أسماء الإشارة',
    lessonNumber: 20,
    categoryId: 'nouns',
    videos: [
      {
        title: 'أسماء الإشارة',
        url: 'https://youtu.be/eO0c3sBP6Zg?si=Up6ALenO0749PGzc'
      }
    ],
    images: [
      'lessons/اسم الإشارة/اسم الإشارة.jpg'
    ],
    contentHtml: `
      <p>
        <strong>اسم الإشارة</strong>
        هو ما وُضع لِمُعين بواسطة إشارة حسّية. :contentReference[oaicite:8]{index=8}
      </p>

      <h4>المفرد القريب</h4>
      <ul>
        <li><strong>هذا</strong> للمفرد المذكر: <em>هذا رجلٌ، هذا محمدٌ</em>.</li>
        <li><strong>هذه</strong> للمفرد المؤنث: <em>هذه امرأةٌ، هذه عائشةُ</em>.</li>
      </ul>

      <h4>المثنّى القريب</h4>
      <ul>
        <li><strong>هذانِ</strong> للمثنّى المذكر: <em>هذانِ رجلان، هذانِ كريمان</em>.</li>
        <li><strong>هاتانِ</strong> للمثنّى المؤنث: <em>هاتانِ امرأتان، هاتانِ كريمتانِ</em>.</li>
      </ul>

      <h4>الجمع القريب</h4>
      <ul>
        <li><strong>هؤلاءِ</strong> لجمع المذكر والمؤنث: <em>هؤلاءِ أطفال، هؤلاءِ نسوةٌ، هؤلاءِ متحابّون، هؤلاءِ مؤدّباتٌ</em>.</li>
      </ul>
    `,
    quiz: [
      {
        id: 'dem-q1',
        question: 'أيُّ اسم إشارة مناسب للجملة: _____ طالبةٌ مجتهدة؟',
        options: ['هذا', 'هذه', 'هذانِ', 'هؤلاءِ'],
        correctIndex: 1,
        explanation: 'طالبة مؤنث مفرد، فيُستخدم اسم الإشارة "هذه".'
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
        question: 'أيُّ تركيب صائب: للمثنّى المذكر القريب؟',
        options: [
          'هذا كتابانِ',
          'هذانِ كتابينِ',
          'هذانِ كتابانِ',
          'هؤلاءِ كتابانِ'
        ],
        correctIndex: 2,
        explanation: 'المثنّى المذكر: "هذانِ كتابانِ".'
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
        explanation: 'غالبًا يقع اسم الإشارة في أول الجملة الاسمية مبتدأً.'
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
        explanation: '"هؤلاءِ" يُستعمل للجمع.'
      }
    ]
  },

  // =========================
  // الأسماء الموصولة
  // =========================
  'relative-pronouns': {
    id: 'relative-pronouns',
    title: 'الأسماء الموصولة',
    lessonNumber: 21,
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
        <strong>الاسم الموصُول</strong> هو اسم وُضع لمسمى معيّن بواسطة جملة تُذكر بعده تُسمى صلة الموصول،
        مثل: <em>جاء الذي فاز</em>. :contentReference[oaicite:9]{index=9}
      </p>

      <h4>الأسماء الموصولة المشتركة</h4>
      <ul>
        <li><strong>مَن</strong> للعاقل، مثل: <em>نجح من اجتهد</em>.</li>
        <li><strong>ما</strong> لغير العاقل، مثل: <em>اقرأ من الكتب ما يفيدك</em>.</li>
        <li><strong>أيّ</strong> بحسب السياق للعاقل وغيره، مثل: <em>أكرم أيَّهم أكثرُ اجتهادًا</em>.</li>
      </ul>

      <h4>الأسماء الموصولة الخاصة</h4>
      <p>تتغير حسب العدد والجنس:</p>
      <ul>
        <li>
          للمذكر: <strong>الذي، اللذانِ، اللذين، الذين</strong>.
        </li>
        <li>
          للمؤنث: <strong>التي، اللتانِ، اللتين، اللاتي، اللائي، اللواتي</strong>.
        </li>
      </ul>
    `,
    quiz: [
      {
        id: 'rel-q1',
        question: 'في جملة "نجحَ مَنِ اجتهدَ"، كلمة "مَن" هي:',
        options: ['اسم استفهام', 'اسم موصول مشترك', 'اسم شرط', 'ضمير'],
        correctIndex: 1,
        explanation: '"مَن" هنا اسم موصول مشترك يُستخدم للعاقل.'
      },
      {
        id: 'rel-q2',
        question: 'أيُّ جملة تحوي اسمًا موصولًا خاصًّا للمذكر المفرد؟',
        options: [
          'أكرمْ أيَّهم أنشطُ',
          'جاء الذي فازَ بالمسابقةِ',
          'نجح من اجتهد',
          'هذا ما أُحبّ'
        ],
        correctIndex: 1,
        explanation: '"الذي" اسم موصول خاصّ للمذكر المفرد.'
      },
      {
        id: 'rel-q3',
        question: 'في جملة "قرأتُ ما ينفعني"، نوع "ما" هو:',
        options: ['اسم استفهام', 'اسم موصول لغير العاقل', 'حرف نفي', 'حرف جر'],
        correctIndex: 1,
        explanation: '"ما" هنا اسم موصول لغير العاقل.'
      },
      {
        id: 'rel-q4',
        question: 'الجملة التي تصلح أن تكون صلة موصول هي:',
        options: [
          'في المدرسةِ',
          'الذي فازَ',
          'حضرَ مبكرًا',
          'منذُ زمنٍ بعيدٍ'
        ],
        correctIndex: 2,
        explanation: 'صلة الموصول جملة تامة: فعل وفاعل مثل "حضر مبكرًا".'
      },
      {
        id: 'rel-q5',
        question: 'أيُّ الأسماء التالية من الأسماء الموصولة الخاصة للمؤنث؟',
        options: ['من', 'ما', 'التي', 'أيّ'],
        correctIndex: 2,
        explanation: '"التي" من الأسماء الموصولة الخاصة بالمفرد المؤنث.'
      }
    ]
  },

  // =========================
  // الأسماء الخمسة
  // =========================
  'five-nouns': {
    id: 'five-nouns',
    title: 'الأسماء الخمسة',
    lessonNumber: 22,
    categoryId: 'nouns',
    videos: [
      {
        title: 'الأسماء الخمسة',
        url: 'https://youtu.be/Ao6gfEK177o?si=IO3W-EWf7nZHpn41'
      }
    ],
    images: [
      'lessons/الأسماء الخمسة/الأسماء الخمسة.jpg',
      'lessons/الأسماء الخمسة/الأسماء الخمسة 1.jpg'
    ],
    contentHtml: `
      <p>
        <strong>الأسماء الخمسة</strong> هي: <strong>أبوك، أخوك، حموك، فوك، ذو مالٍ</strong>.
      </p>
      <p>
        تمتاز بأن إعرابها يكون بالحروف نيابةً عن الحركات في حالات معيّنة. :contentReference[oaicite:10]{index=10}
      </p>

      <h4>إعراب الأسماء الخمسة</h4>
      <ul>
        <li><strong>ترفع بالواو</strong>: <em>جاء أبوك، زارنا أخوك، هذا ذو مالٍ</em>.</li>
        <li><strong>تنصب بالألف</strong>: <em>رأيت أباك، صادقت أخاك، أكرمت حماك</em>.</li>
        <li><strong>تجرّ بالياء</strong>: <em>مررت بأبيك، سلمت على أخيك، جلست إلى حميك</em>.</li>
      </ul>

      <h4>شروط إعرابها بهذا الإعراب</h4>
      <ul>
        <li>أن تكون <strong>مفردة</strong>.</li>
        <li>أن تكون <strong>مضافة</strong>.</li>
        <li>ألا تُضاف إلى <strong>ياء المتكلم</strong>، وإلا أُعربت بالحركات.</li>
      </ul>
    `,
    quiz: [
      {
        id: 'five-q1',
        question: 'أيٌّ مما يلي يُعَدُّ من الأسماء الخمسة؟',
        options: ['أبوك', 'أخينا', 'أبانا', 'أبوين'],
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
        question: 'في جملة "رأيتُ أباك"، علامة نصب "أباك" هي:',
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
        explanation: 'عند إضافتها لياء المتكلم (حمي) تعود للإعراب بالحركات لا بالحروف.'
      }
    ]
  },

  // =========================
  // أسلوب الاستفهام (أدوات الاستفهام)
  // =========================
  interrogatives: {
    id: 'interrogatives',
    title: 'أدوات الاستفهام',
    lessonNumber: 30,
    categoryId: 'styles',
    videos: [
      {
        title: 'أدوات الاستفهام',
        url: 'https://youtu.be/fY-y8LqX6Bk?si=LU1wqp5iTMB_YQOB'
      }
    ],
    images: [
      'lessons/أسلوب الاستفهام/أدوات الاستفهام.jpg'
    ],
    contentHtml: `
      <p>
        <strong>أسلوب الاستفهام</strong> هو ما يُستعمل لطلب الفهم أو السؤال عن شيء مجهول. :contentReference[oaicite:11]{index=11}
      </p>
      <p>
        من أدوات الاستفهام: <strong>مَن، ما، ماذا، متى، أيان، أين، كيف، كم، أيُّ</strong>.
      </p>

      <ul>
        <li><strong>مَن</strong> – للسؤال عن العاقل: <em>مَن آخر الخلفاء الراشدين؟</em></li>
        <li><strong>ما / ماذا</strong> – للسؤال عن غير العاقل: <em>ما أحبُّ العلوم إليك؟</em></li>
        <li><strong>متى</strong> – للسؤال عن الزمان: <em>متى رجعت؟</em></li>
        <li><strong>أيان</strong> – للزمان المستقبل: <em>أيان تسافر؟</em></li>
        <li><strong>أين</strong> – للسؤال عن المكان: <em>أين أخوك؟</em></li>
        <li><strong>كيف</strong> – للسؤال عن الحال: <em>كيف حالك؟</em></li>
        <li><strong>كم</strong> – للسؤال عن العدد: <em>كم كتابًا قرأت؟</em></li>
        <li><strong>أيُّ</strong> – لتعيين واحد من مجموعة: <em>أيُّ رجلٍ أتى؟</em></li>
      </ul>
    `,
    quiz: [
      {
        id: 'int-q1',
        question: 'أيُّ أداة استفهام تُستخدم للسؤال عن العاقل؟',
        options: ['ما', 'أين', 'مَن', 'كم'],
        correctIndex: 2,
        explanation: 'تستعمل "مَن" للسؤال عن العاقل.'
      },
      {
        id: 'int-q2',
        question: 'السؤال المناسب عن الزمان هو:',
        options: [
          'أين تدرس؟',
          'متى تبدأُ الحصةُ؟',
          'كيف حالُك؟',
          'كم كتابًا قرأت؟'
        ],
        correctIndex: 1,
        explanation: '"متى" تختص بالسؤال عن الزمان.'
      },
      {
        id: 'int-q3',
        question: 'أيُّ سؤالٍ يستخدم أداة استفهام عن المكان؟',
        options: [
          'متى رجعت؟',
          'أين تسكن؟',
          'كم طالبًا في الصف؟',
          'كيف وصلت؟'
        ],
        correctIndex: 1,
        explanation: '"أين تسكن؟" سؤال عن المكان.'
      },
      {
        id: 'int-q4',
        question: 'في الجملة "كم طالبًا في الصف؟"، أداة الاستفهام تُستخدم للسؤال عن:',
        options: ['الزمان', 'المكان', 'الحال', 'العدد'],
        correctIndex: 3,
        explanation: '"كم" للسؤال عن العدد أو الكمية.'
      },
      {
        id: 'int-q5',
        question: 'أيُّ سؤالٍ مناسب للسؤال عن حال الشخص؟',
        options: [
          'متى حضرت؟',
          'أين تقيم؟',
          'كيف صحتُك؟',
          'كم مرةً زرتنا؟'
        ],
        correctIndex: 2,
        explanation: '"كيف" تُستخدم للسؤال عن الحال أو الهيئة.'
      }
    ]
  },

  // =========================
  // التمييز
  // =========================
  tamyeez: {
    id: 'tamyeez',
    title: 'التمييز',
    lessonNumber: 31,
    categoryId: 'tawabi',
    videos: [],
    images: [
      'lessons/التمييز/التمييز.jpg'
    ],
    contentHtml: `
      <p>
        <strong>التمييز</strong> اسم نكرة منصوب يزيل إبهامًا في الجملة
        ويُوضّح المقصود من كلمة قبله.
      </p>

      <h4>تمييز ملفوظ</h4>
      <p>
        يوضّح مقدارًا مذكورًا قبله، مثل العدد أو الكيل أو الوزن أو المساحة:
      </p>
      <ul>
        <li>خمسةُ ريالاتٍ، كيلو لحمًا، فدانًا قمحًا، لترًا ماءً.</li>
      </ul>

      <h4>تمييز ملحوظ (نِسبة)</h4>
      <p>
        يوضّح جملة أو نسبة معنوية قبله، مثل:
        <em>طاب الجوُّ هواءً</em>، <em>ازداد الطالب علمًا</em>.
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
        explanation: 'خمسةُ ريالاتٍ: تمييز عدد.'
      },
      {
        id: 'tam-q3',
        question: 'أيُّ جملة فيها تمييز ملحوظ (نسبة)؟',
        options: [
          'شربتُ لترًا ماءً',
          'اشتريتُ كيلو أرزًا',
          'طابَ الجوُّ هواءً',
          'زرعتُ فدانًا قمحًا'
        ],
        correctIndex: 2,
        explanation: '"طاب الجوُّ هواءً" يوضّح حالة الجو، وهذا تمييز ملحوظ.'
      },
      {
        id: 'tam-q4',
        question: 'ما تعريف التمييز؟',
        options: [
          'اسم معرفة يوضّح الفاعل',
          'اسم نكرة مرفوع يزيل إبهامًا',
          'اسم نكرة منصوب يزيل إبهامًا في الجملة',
          'فعل ماضٍ يزيل الغموض'
        ],
        correctIndex: 2,
        explanation: 'التعريف الصحيح: اسم نكرة منصوب يزيل إبهامًا.'
      },
      {
        id: 'tam-q5',
        question: 'في جملة "ازدادَ الطالبُ علمًا"، كلمة "علمًا" هي:',
        options: ['فاعل', 'مفعول به', 'حال', 'تمييز'],
        correctIndex: 3,
        explanation: '"علمًا" تمييز ملحوظ يوضح نوع الزيادة.'
      }
    ]
  }
};

// ============================
// دوال التخزين العامّة
// ============================

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.error('Storage read error', e);
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Storage write error', e);
  }
}

// ============================
// الملف الشخصي للطالب
// ============================

function getStudentProfile() {
  return loadFromStorage(STORAGE_KEYS.profile, null);
}

function saveStudentProfile(profile) {
  saveToStorage(STORAGE_KEYS.profile, profile);
}

// ============================
// التقدم في الدروس والمفضّلة
// ============================

function loadProgress() {
  return loadFromStorage(STORAGE_KEYS.progress, {});
}

function saveProgress(progress) {
  saveToStorage(STORAGE_KEYS.progress, progress);
}

function loadFavorites() {
  return loadFromStorage(STORAGE_KEYS.favorites, []);
}

function saveFavorites(favs) {
  saveToStorage(STORAGE_KEYS.favorites, favs);
}

// ============================
// حالة التطبيق
// ============================

const appState = {
  profile: null,
  progress: loadProgress(),
  favorites: loadFavorites(),
  currentLessonId: null,
  currentView: 'landing'
};

// ============================
// بطاقة المبرمج
// ============================

function createDeveloperCardHTML() {
  const phoneHref = DEVELOPER_INFO.phone.replace(/\s+/g, '');
  return `
    <section class="developer-card">
      <p class="developer-title">${DEVELOPER_INFO.label}</p>
      <p class="developer-phone">
        <a href="tel:${phoneHref}">${DEVELOPER_INFO.phone}</a>
        <span class="developer-phone-icon">📞</span>
      </p>
    </section>
  `;
}

// ============================
// مودال بيانات الطالب
// ============================

function openProfileModal(onDone) {
  const existing = getStudentProfile() || { fullName: '', grade: '' };

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay profile-modal-overlay';
  overlay.innerHTML = `
    <div class="profile-modal-card">
      <button class="profile-modal-close" aria-label="إغلاق">&times;</button>
      <div class="profile-modal-icon">👩‍🎓</div>
      <h2>مرحبًا بك في تطبيق النحو ببساطة</h2>
      <p class="profile-modal-text">
        من فضلك أدخل بياناتك حتى نُظهر اسمك في شهادة الإنجاز:
      </p>

      <label class="profile-modal-label">
        الاسم الرباعي
        <input id="profile-full-name" class="profile-modal-input" type="text"
               placeholder="مثال: أحمد محمد علي عبد الله" value="${existing.fullName || ''}">
      </label>

      <label class="profile-modal-label">
        المرحلة الدراسية
        <input id="profile-grade" class="profile-modal-input" type="text"
               placeholder="مثال: الصف التاسع الأساسي" value="${existing.grade || ''}">
      </label>

      <div class="profile-modal-actions">
        <button class="profile-modal-secondary">إلغاء</button>
        <button class="profile-modal-primary">حفظ وبدء التعلّم</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const fullNameInput = overlay.querySelector('#profile-full-name');
  const gradeInput = overlay.querySelector('#profile-grade');
  const btnPrimary = overlay.querySelector('.profile-modal-primary');
  const btnSecondary = overlay.querySelector('.profile-modal-secondary');
  const btnClose = overlay.querySelector('.profile-modal-close');

  function closeModal() {
    overlay.remove();
  }

  btnSecondary.addEventListener('click', closeModal);
  btnClose.addEventListener('click', closeModal);

  btnPrimary.addEventListener('click', () => {
    const fullName = fullNameInput.value.trim();
    const grade = gradeInput.value.trim();

    if (!fullName) {
      alert('من فضلك أدخل اسمك الرباعي.');
      fullNameInput.focus();
      return;
    }

    const profile = { fullName, grade, createdAt: Date.now() };
    saveStudentProfile(profile);
    appState.profile = profile;
    closeModal();
    if (typeof onDone === 'function') onDone();
  });
}

// ============================
// عرض الشهادة (HTML + نافذة جديدة)
// ============================

function buildCertificateHtml(stats) {
  const profile = getStudentProfile();
  const studentName = profile?.fullName || 'الطالب / الطالبة';
  const grade = profile?.grade || '';
  const today = new Date().toLocaleDateString('ar-YE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const totalLessons = Object.keys(LESSONS).length;
  const completed = stats?.completedLessons || 0;

  return `
    <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <title>شهادة إنجاز</title>
        <style>
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: #f0fdf4;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          .cert {
            background: #ffffff;
            padding: 3rem 3.5rem;
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(15, 118, 110, 0.15);
            text-align: center;
            max-width: 700px;
            border: 3px solid #22c55e;
          }
          .cert-title {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            color: #047857;
          }
          .cert-subtitle {
            margin-bottom: 2rem;
            color: #6b7280;
          }
          .cert-name {
            font-size: 1.6rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
          }
          .cert-grade {
            margin-bottom: 1.5rem;
            color: #4b5563;
          }
          .cert-body {
            margin-bottom: 2rem;
            line-height: 1.8;
          }
          .cert-footer {
            display: flex;
            justify-content: space-between;
            margin-top: 2.5rem;
            font-size: 0.95rem;
          }
          .cert-sign {
            text-align: right;
          }
          .cert-dev {
            text-align: left;
            color: #059669;
          }
          .cert-date {
            margin-top: 0.75rem;
            color: #6b7280;
          }
        </style>
      </head>
      <body>
        <div class="cert">
          <h1 class="cert-title">شهادة إنجاز</h1>
          <p class="cert-subtitle">يُمنح هذه الشهادة</p>

          <div class="cert-name">${studentName}</div>
          ${grade ? `<div class="cert-grade">المرحلة: ${grade}</div>` : ''}

          <div class="cert-body">
            تقديرًا لجهوده في إكمال
            <strong>${completed}</strong>
            من أصل
            <strong>${totalLessons}</strong>
            درسًا من دروس تطبيق
            <strong>«النحو ببساطة»</strong>
            وتحقيقه تقدمًا ملحوظًا في الاختبارات التفاعلية.
          </div>

          <div class="cert-footer">
            <div class="cert-sign">
              <div>المشرفة على التطبيق</div>
              <div><strong>${SUPERVISOR_NAME}</strong></div>
            </div>
            <div class="cert-dev">
              <div>${DEVELOPER_INFO.label}</div>
              <div>${DEVELOPER_INFO.phone}</div>
            </div>
          </div>

          <div class="cert-date">التاريخ: ${today}</div>
        </div>
      </body>
    </html>
  `;
}

function generateCertificate(stats) {
  const win = window.open('', '_blank');
  win.document.write(buildCertificateHtml(stats || {}));
  win.document.close();
  win.focus();
}

// ============================
// حساب الإحصائيات من progress
// ============================

function computeStats() {
  const progress = appState.progress;
  const totalLessons = Object.keys(LESSONS).length;
  let completedLessons = 0;
  let totalQuestions = 0;
  let correctAnswers = 0;

  Object.keys(LESSONS).forEach(id => {
    const lesson = LESSONS[id];
    const p = progress[id];
    if (p && p.completed) completedLessons += 1;
    if (lesson.quiz && lesson.quiz.length) {
      totalQuestions += lesson.quiz.length;
      if (p && typeof p.score === 'number') {
        correctAnswers += p.score;
      }
    }
  });

  return {
    totalLessons,
    completedLessons,
    totalQuestions,
    correctAnswers
  };
}

// ============================
// عرض القوائم والدروس
// ============================

function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;

  const lessonsByCategory = {};
  Object.values(LESSONS).forEach(lesson => {
    if (!lessonsByCategory[lesson.categoryId]) {
      lessonsByCategory[lesson.categoryId] = [];
    }
    lessonsByCategory[lesson.categoryId].push(lesson);
  });

  // ترتيب بسيط حسب lessonNumber
  Object.values(lessonsByCategory).forEach(list =>
    list.sort((a, b) => (a.lessonNumber || 0) - (b.lessonNumber || 0))
  );

  container.innerHTML = '';

  Object.values(CATEGORIES).forEach(cat => {
    const lessons = lessonsByCategory[cat.id] || [];
    const card = document.createElement('article');
    card.className = `category-card ${cat.colorClass || ''}`;

    const completedCount = lessons.filter(l => appState.progress[l.id]?.completed).length;

    card.innerHTML = `
      <button class="category-header" type="button">
        <div>
          <h3>${cat.title}</h3>
          <p>${lessons.length} درس — مكتمل: ${completedCount}</p>
        </div>
        <span class="category-toggle">▼</span>
      </button>
      <ul class="lessons-list" style="display:none"></ul>
    `;

    const listEl = card.querySelector('.lessons-list');

    lessons.forEach(lesson => {
      const progress = appState.progress[lesson.id] || {};
      const li = document.createElement('li');
      li.className = 'lesson-row';
      li.dataset.lessonId = lesson.id;

      const hasVideo = lesson.videos && lesson.videos.length > 0;

      li.innerHTML = `
        <div class="lesson-row-main">
          <span class="lesson-title">${lesson.title}</span>
          <span class="lesson-status">
            ${progress.completed ? '✓ مكتمل' : 'لم يُنجز بعد'}
          </span>
        </div>
        <div class="lesson-row-meta">
          ${hasVideo ? 'يحتوي فيديو 🎬' : 'بدون فيديو'}
        </div>
      `;

      li.addEventListener('click', () => {
        openLesson(lesson.id);
      });

      listEl.appendChild(li);
    });

    const headerBtn = card.querySelector('.category-header');
    headerBtn.addEventListener('click', () => {
      const isOpen = listEl.style.display === 'block';
      listEl.style.display = isOpen ? 'none' : 'block';
      headerBtn.querySelector('.category-toggle').textContent = isOpen ? '▼' : '▲';
    });

    container.appendChild(card);
  });
}

function openLesson(lessonId) {
  const lesson = LESSONS[lessonId];
  if (!lesson) return;
  appState.currentLessonId = lessonId;

  const view = document.getElementById('lesson-detail-view');
  if (!view) return;

  showView('lessons'); // نتأكد أننا في شاشة الدروس

  const progress = appState.progress[lessonId] || {};
  const isFavorite = appState.favorites.includes(lessonId);

  let imagesHtml = '';
  if (lesson.images && lesson.images.length) {
    imagesHtml = `
      <div class="lesson-images">
        ${lesson.images
          .map(src => `<div class="lesson-image"><img src="${src}" alt=""></div>`)
          .join('')}
      </div>
    `;
  }

  let videosHtml = '';
  if (lesson.videos && lesson.videos.length) {
    videosHtml = `
      <section class="lesson-section">
        <h3>الفيديوهات التوضيحية</h3>
        <ul class="videos-list">
          ${lesson.videos
            .map(
              v => `<li><a href="${v.url}" target="_blank" rel="noopener">
                🎬 ${v.title}
              </a></li>`
            )
            .join('')}
        </ul>
      </section>
    `;
  }

  view.innerHTML = `
    <header class="lesson-header">
      <button id="back-to-lessons" class="secondary-btn small-btn">العودة إلى الدروس</button>
      <div class="lesson-header-main">
        <h2>${lesson.title}</h2>
        ${lesson.lessonNumber ? `<p class="lesson-number">الدرس ${lesson.lessonNumber}</p>` : ''}
      </div>
      <div class="lesson-header-actions">
        <button id="fav-btn" class="icon-btn" title="إضافة للمفضلة">
          ${isFavorite ? '⭐' : '☆'}
        </button>
      </div>
    </header>

    ${imagesHtml}

    <section class="lesson-section">
      <h3>محتوى الدرس</h3>
      <div class="lesson-content">${lesson.contentHtml}</div>
    </section>

    ${videosHtml}

    <section class="lesson-section" id="quiz-section">
      <h3>اختبر نفسك</h3>
      <div id="quiz-container"></div>
    </section>

    <section class="lesson-section">
      <h3>تحميل الدرس</h3>
      <p>سيتم فتح نافذة الطباعة، ويمكنك اختيار "حفظ كملف PDF" من المتصفح.</p>
      <button id="download-lesson-pdf" class="primary-btn">تحميل الدرس بصيغة PDF</button>
    </section>
  `;

  const backBtn = document.getElementById('back-to-lessons');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      appState.currentLessonId = null;
      // مجرد إخفاء التفاصيل، والقائمة تبقى معروضة
      document.getElementById('lesson-detail-view').innerHTML = '';
    });
  }

  const favBtn = document.getElementById('fav-btn');
  if (favBtn) {
    favBtn.addEventListener('click', () => {
      toggleFavoriteLesson(lessonId);
      favBtn.textContent = appState.favorites.includes(lessonId) ? '⭐' : '☆';
    });
  }

  const pdfBtn = document.getElementById('download-lesson-pdf');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
      downloadLessonPdf(lessonId);
    });
  }

  renderQuiz(lesson, progress);
}

function toggleFavoriteLesson(lessonId) {
  const idx = appState.favorites.indexOf(lessonId);
  if (idx === -1) {
    appState.favorites.push(lessonId);
  } else {
    appState.favorites.splice(idx, 1);
  }
  saveFavorites(appState.favorites);
}

// ============================
// الاختبار لكل درس
// ============================

function renderQuiz(lesson, progress) {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const questions = lesson.quiz || [];
  if (!questions.length) {
    container.innerHTML = '<p>سيتم إضافة أسئلة لهذا الدرس لاحقًا.</p>';
    return;
  }

  container.innerHTML = '';

  questions.forEach((q, index) => {
    const field = document.createElement('fieldset');
    field.className = 'quiz-question';

    field.innerHTML = `
      <legend>السؤال ${index + 1} من ${questions.length}</legend>
      <p class="quiz-q-text">${q.question}</p>
      <div class="quiz-options">
        ${q.options
          .map(
            (opt, i) => `
          <label class="quiz-option">
            <input type="radio" name="q-${q.id}" value="${i}">
            <span>${opt}</span>
          </label>
        `
          )
          .join('')}
      </div>
      <p class="quiz-feedback" data-qid="${q.id}"></p>
    `;

    container.appendChild(field);
  });

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'تأكيد الإجابة';
  submitBtn.className = 'primary-btn';
  container.appendChild(submitBtn);

  const resultP = document.createElement('p');
  resultP.className = 'quiz-result';
  container.appendChild(resultP);

  submitBtn.addEventListener('click', () => {
    let score = 0;

    questions.forEach(q => {
      const selected = container.querySelector(`input[name="q-${q.id}"]:checked`);
      const feedback = container.querySelector(`.quiz-feedback[data-qid="${q.id}"]`);
      if (!feedback) return;

      if (!selected) {
        feedback.textContent = 'لم تختر إجابة بعد.';
        feedback.className = 'quiz-feedback quiz-feedback-missing';
        return;
      }

      const answerIndex = Number(selected.value);
      if (answerIndex === q.correctIndex) {
        score += 1;
        feedback.textContent = 'إجابة صحيحة ✔️';
        feedback.className = 'quiz-feedback quiz-feedback-correct';
      } else {
        feedback.textContent = `إجابة خاطئة ❌ — الصحيح هو: ${q.options[q.correctIndex]}`;
        feedback.className = 'quiz-feedback quiz-feedback-wrong';
      }
    });

    const percent = Math.round((score / questions.length) * 100);
    resultP.textContent = `نتيجتك: ${score} من ${questions.length} (${percent}٪)`;

    appState.progress[lesson.id] = {
      completed: true,
      score,
      total: questions.length
    };
    saveProgress(appState.progress);

    // تحديث القائمة الرئيسية (حالة مكتمل)
    renderCategories();
  });
}

// ============================
// تحميل الدرس كـ PDF (عن طريق الطباعة)
// ============================

function downloadLessonPdf(lessonId) {
  const lesson = LESSONS[lessonId];
  if (!lesson) return;

  const profile = getStudentProfile();
  const studentName = profile?.fullName || '';
  const win = window.open('', '_blank');

  win.document.write(`
    <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <title>${lesson.title}</title>
        <style>
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            padding: 2rem;
            line-height: 1.8;
          }
          h1 {
            text-align: center;
            margin-bottom: 1.5rem;
          }
          .student-name {
            text-align: center;
            margin-bottom: 1rem;
            color: #4b5563;
          }
          img {
            max-width: 100%;
            margin: 1rem 0;
          }
        </style>
      </head>
      <body>
        <h1>${lesson.title}</h1>
        ${studentName ? `<p class="student-name">الطالب/ة: ${studentName}</p>` : ''}
        ${lesson.contentHtml}
        ${
          lesson.images && lesson.images.length
            ? lesson.images.map(src => `<p><img src="${src}" alt=""></p>`).join('')
            : ''
        }
      </body>
    </html>
  `);

  win.document.close();
  win.focus();
  // المستخدم يختار "حفظ كملف PDF" من نافذة الطباعة
  win.print();
}

// ============================
// عرض الإحصائيات
// ============================

function renderStatsView() {
  const view = document.getElementById('stats-view');
  if (!view) return;

  const stats = computeStats();

  view.innerHTML = `
    <section class="stats-card">
      <h2>إحصائيات تقدّمك</h2>
      <p>عدد الدروس الكلّي: ${stats.totalLessons}</p>
      <p>الدروس المكتملة: ${stats.completedLessons}</p>
      <p>عدد أسئلة الاختبارات: ${stats.totalQuestions}</p>
      <p>إجابات صحيحة: ${stats.correctAnswers}</p>
      <button id="download-certificate-btn" class="primary-btn">
        تحميل شهادة إنجاز PDF
      </button>
    </section>
  `;

  const certBtn = document.getElementById('download-certificate-btn');
  if (certBtn) {
    certBtn.addEventListener('click', () => {
      generateCertificate(stats);
    });
  }
}

// ============================
// صفحة "اسأل المعلم"
// ============================

function renderAskTeacherView() {
  const container = document.getElementById('ask-teacher-view');
  if (!container) return;

  container.innerHTML = `
    <section class="teacher-card">
      <h2 class="teacher-title">تواصل مع الأستاذة المشرفة</h2>
      <p class="teacher-subtitle">للاستفسارات والأسئلة المباشرة</p>

      <div class="teacher-box">
        <div class="teacher-icon">👩‍🏫</div>
        <h3 class="teacher-name">الأستاذة / سهام غازي</h3>
        <p class="teacher-role">المشرفة على التطبيق</p>
        <p class="teacher-phone">
          <a href="https://wa.me/967775392526" target="_blank" rel="noopener">
            تواصل عبر الواتساب
          </a>
        </p>
      </div>
    </section>

    <div class="developer-wrapper">
      ${createDeveloperCardHTML()}
    </div>
  `;
}

// ============================
// إدارة الواجهات (Views)
// ============================

const views = {};

function cacheViews() {
  views.landing = document.getElementById('landing-view');
  views.lessons = document.getElementById('lessons-view');
  views.stats = document.getElementById('stats-view');
  views.askTeacher = document.getElementById('ask-teacher-view');
}

function showView(name) {
  appState.currentView = name;
  Object.entries(views).forEach(([key, el]) => {
    if (!el) return;
    if (key === name) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
}

// ============================
// تهيئة زر "ابدأ التعلّم"
// ============================

function initStartButton() {
  const startBtn =
    document.getElementById('start-learning') ||
    document.getElementById('start-learning-btn');

  if (!startBtn) return;

  startBtn.addEventListener('click', () => {
    const profile = getStudentProfile();
    if (!profile) {
      openProfileModal(() => {
        showView('lessons');
      });
    } else {
      showView('lessons');
    }
  });
}

// ============================
// بطاقات المبرمج في الواجهة الرئيسية
// ============================

function initHomeDeveloperCard() {
  const homeDevSlot = document.getElementById('developer-card-home');
  if (homeDevSlot) {
    homeDevSlot.innerHTML = createDeveloperCardHTML();
  }
}

// ============================
// تهيئة التنقل (الهيدر / التبويبات)
// ============================

function initNavigation() {
  const navHome = document.getElementById('nav-home');
  const navLessons = document.getElementById('nav-lessons');
  const navStats = document.getElementById('nav-stats');
  const navAsk = document.getElementById('nav-ask-teacher');

  if (navHome) {
    navHome.addEventListener('click', () => showView('landing'));
  }
  if (navLessons) {
    navLessons.addEventListener('click', () => showView('lessons'));
  }
  if (navStats) {
    navStats.addEventListener('click', () => {
      renderStatsView();
      showView('stats');
    });
  }
  if (navAsk) {
    navAsk.addEventListener('click', () => {
      renderAskTeacherView();
      showView('askTeacher');
    });
  }
}

// ============================
// تهيئة التطبيق
// ============================

document.addEventListener('DOMContentLoaded', () => {
  appState.profile = getStudentProfile();
  cacheViews();
  initStartButton();
  initHomeDeveloperCard();
  renderCategories();
  renderStatsView();
  renderAskTeacherView(); // حتى يكون جاهز أول ما يفتح التبويب
  initNavigation();

  // شاشة البداية
  showView('landing');
});
