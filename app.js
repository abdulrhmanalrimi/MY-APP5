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
  'types-of-word': {
    id: 'types-of-word',
    title: 'أنواع الكلام',
    categoryId: 'parts-of-speech',
    videos: [
      {
        title: 'أنواع الكلمة',
        url: 'https://youtu.be/46MwuNDrdlo?si=yHVbvc0IS1QbtRft'
      }
    ],
    images: [
      'lessons/القسم%20الأول%20أنواع%20الكلمة/أنواع%20الكلمة.jpg'
    ],
    contentHtml: `
      <p>
        تنقسم الكلمة في اللغة العربية إلى ثلاثة أنواع أساسية:
        <strong>اسم</strong> و<strong>فعل</strong> و<strong>حرف</strong>.
      </p>

      <h4>أولًا: الاسم</h4>
      <p>
        هو كلمة تدل على معنى في نفسها ولا تقترن بزمن،
        مثل: <strong>محمد، طالبة، كتاب، شجرة</strong>.
      </p>
      <p>
        يمكن أن يدل الاسم على الإنسان، أو الحيوان، أو النبات، أو الجماد؛
        مثل: <em>محمد، أسد، عنب، ساعة</em>.
      </p>

      <h4>ثانيًا: الفعل</h4>
      <p>
        هو كلمة تدل على معنى في نفسها، وتقترن بواحد من الأزمنة الثلاثة:
        الماضي، أو المضارع، أو الأمر.
      </p>
      <ul>
        <li><strong>الفعل الماضي:</strong> يدل على حدث وقع في الزمن الماضي، مثل: <em>نصرَ، فهمَ، جلسَ</em>.</li>
        <li><strong>الفعل المضارع:</strong> يدل على حدث يقع الآن أو يستمر، مثل: <em>ينصرُ، يجلسُ، يجتهدُ</em>.</li>
        <li><strong>فعل الأمر:</strong> يدل على طلب حدوث الفعل في المستقبل، مثل: <em>انصرْ، اجلسْ، اجتهدْ</em>.</li>
      </ul>

      <h4>ثالثًا: الحرف</h4>
      <p>
        هو كلمة لا يظهر معناها كاملًا وحدها، بل يتضح بالاقتران مع غيرها،
        مثل: <strong>من، إلى، عن، في، بل، ثم</strong>.
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

  // مثال لدرس تمهيدي آخر إن احتجته
  'nahw-definition-2': {
    id: 'nahw-definition-2',
    title: 'درس تمهيدي إضافي',
    categoryId: 'parts-of-speech',
    videos: [],
    images: [],
    contentHtml: `
      <p>يمكنك لاحقًا وضع محتوى تمهيدي إضافي هنا.</p>
    `,
    quiz: []
  },

  // =========================
  // الجمل
  // =========================
  sentence: {
    id: 'sentence',
    title: 'الجملة',
    categoryId: 'sentence-types',
    videos: [
      {
        title: 'الجملة',
        url: 'https://youtu.be/9AR0d5IUSSo?si=hr3P7QyUKslCVCh2'
      }
    ],
    images: [
      'lessons/القسم الثالث الجملة/الجملة.jpg'
    ],
    contentHtml: `
      <p>
        الجملة في اللغة العربية نوعان رئيسان:
        <strong>جملة اسمية</strong> و<strong>جملة فعلية</strong>.
      </p>

      <h4>أولًا: الجملة الاسمية</h4>
      <p>
        هي التي تبدأ باسم، وتتكون أساسًا من
        <strong>مبتدأ وخبر</strong>،
        مثل: <em>العِلْمُ نورٌ، المطرُ غزيرٌ</em>.
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
        مثل: <em>حضرَ المعلمُ، يكتبُ الولدُ</em>.
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

  // أقسام الجملة
  'present-raf': {
    id: 'present-raf',
    title: 'رفع الفعل المضارع',
    categoryId: 'sentence-types',
    videos: [],
    images: [
      'lessons/القسم%20الخامس%20رفع%20الفعل%20المضارع/رفع%20الفعل%20المضارع.jpg'
    ],
    contentHtml: `
      <p>
        يُرفع الفعل المضارع إذا لم يسبقه ناصب أو جازم،
        وعلامة الرفع الأصلية الضمة، وتنوب عنها ثبوت النون في الأفعال الخمسة.
      </p>
      <p>
        من أمثلة الرفع: <em>يكتبُ الطالبُ الدرسَ</em>،
        و<em>يفهمانِ المسألةَ</em>.
      </p>
    `,
    quiz: []
  },
  'present-nasb': {
    id: 'present-nasb',
    title: 'نصب الفعل المضارع',
    categoryId: 'sentence-types',
    videos: [],
    images: [
      'lessons/القسم%20السادس%20نصب%20الفعل%20المضارع/نصب%20الفعل%20المضارع.jpg'
    ],
    contentHtml: `
      <p>
        يُنصب الفعل المضارع إذا سبقته أداة نصب مثل: <strong>أن، لن، كي، حتى</strong>،
        وتكون علامة النصب الفتحة أو حذف النون في الأفعال الخمسة.
      </p>
      <p>
        مثال: <em>لن أتأخرَ</em>، و<em>لن يفهموا الدرسَ</em> بحذف النون.
      </p>
    `,
    quiz: []
  },
  'present-jazm': {
    id: 'present-jazm',
    title: 'جزم الفعل المضارع',
    categoryId: 'sentence-types',
    videos: [],
    images: [
      'lessons/القسم%20السابع%20جزم%20الفعل%20المضارع/جزم%20الفعل%20المضارع%20.docx'
    ],
    contentHtml: `
      <p>
        يُجزم الفعل المضارع إذا سبقه جازم مثل <strong>لم، لما، لا الناهية</strong>
        أو أداة الشرط الجازمة، وعلامة الجزم السكون أو حذف حرف العلة أو حذف النون.
      </p>
      <p>
        مثال: <em>لم يخرجْ</em> بالسكون، و<em>لا تَتْركنَّ</em> بحذف النون.
      </p>
    `,
    quiz: []
  },
  subject: {
    id: 'subject',
    title: 'الفاعل',
    categoryId: 'sentence-types',
    videos: [],
    images: ['lessons/الفاعل/الفاعل.docx'],
    contentHtml: `
      <p>
        الفاعل اسم مرفوع يدل على من قام بالفعل أو اتصف به،
        ويأتي بعد الفعل غالبًا أو يتقدمه ضمير مستتر يعود على الفاعل.
      </p>
      <p>مثل: <em>نجحَ الطالبُ</em> و<em>قرأ الكتابَ</em> حيث الطالب هو الفاعل.</p>
    `,
    quiz: []
  },
  'naib-fael': {
    id: 'naib-fael',
    title: 'نائب الفاعل',
    categoryId: 'sentence-types',
    videos: [],
    images: ['lessons/القسم%20العاشر%20نائب%20الفاعل/نائب%20الفاعل.docx'],
    contentHtml: `
      <p>
        يُستعمل نائب الفاعل عندما يُبنى الفعل للمجهول،
        فيحل محل الفاعل ويُرفع كذلك، مثل: <em>كُتِبَ الدرسُ</em>.
      </p>
      <p>
        قد يكون اسمًا ظاهرًا أو ضميرًا مستترًا يعود على اسم متأخر في الجملة.
      </p>
    `,
    quiz: []
  },
  'five-verbs': {
    id: 'five-verbs',
    title: 'الأفعال الخمسة',
    categoryId: 'sentence-types',
    videos: [],
    images: [
      'lessons/القسم%20الثامن%20%20الأفعال%20الخمسة/الأفعال%20الخمسة%20.docx',
      'lessons/الأفعال%20الخمسة.jpg'
    ],
    contentHtml: `
      <p>
        الأفعال الخمسة هي كل مضارع اتصلت به ألف الاثنين أو واو الجماعة أو ياء المخاطبة،
        مثل: <em>يفعلان، يفعلون، تفعلين</em>.
      </p>
      <p>
        تُرفع بثبوت النون، وتُنصب وتُجزم بحذفها.
      </p>
    `,
    quiz: []
  },

  // =========================
  // الأسماء (تصنيفات متعدّدة)
  // =========================

  // أسماء الإشارة
  demonstratives: {
    id: 'demonstratives',
    title: 'أسماء الإشارة',
    categoryId: 'built-nouns',
    videos: [
      {
        title: 'أسماء الإشارة',
        url: 'https://youtu.be/eO0c3sBP6Zg?si=Up6ALenO0749PGzc'
      }
    ],
    images: [
      'lessons/اسماء الإشارة/اسم الاشارة.docx'
    ],
    contentHtml: `
      <p>
        <strong>اسم الإشارة</strong>
        هو اسم يُستعمل للدلالة على معيَّن بواسطة إشارة حسّية
        باليد أو العين نحو شيء حاضر.
      </p>

      <h4>أولًا: للمفرد القريب</h4>
      <ul>
        <li><strong>هذا</strong> للمفرد المذكر: <em>هذا رجلٌ، هذا محمدٌ</em>.</li>
        <li><strong>هذه</strong> للمفرد المؤنث: <em>هذه امرأةٌ، هذه عائشةُ</em>.</li>
      </ul>

      <h4>ثانيًا: للمثنّى القريب</h4>
      <ul>
        <li><strong>هذانِ</strong> للمثنّى المذكر: <em>هذانِ رجلان، هذانِ كريمان</em>.</li>
        <li><strong>هاتانِ</strong> للمثنّى المؤنث: <em>هاتانِ امرأتان، هاتانِ كريمتانِ</em>.</li>
      </ul>

      <h4>ثالثًا: للجمع القريب</h4>
      <ul>
        <li>
          <strong>هؤلاءِ</strong> لجمع المذكر والمؤنث:
          <em>هؤلاءِ أطفال، هؤلاءِ نسوةٌ، هؤلاءِ متحابّون، هؤلاءِ مؤدّباتٌ</em>.
        </li>
      </ul>

      <p>
        يتغيّر إعراب اسم الإشارة حسب موقعه في الجملة
        (مبتدأ، خبر، فاعل...) لكنه يبقى مبنيًّا في أغلب الاستعمالات.
      </p>
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

  // الأسماء الموصولة
  'relative-pronouns': {
    id: 'relative-pronouns',
    title: 'الأسماء الموصولة',
    categoryId: 'built-nouns',
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
        <strong>الاسْمُ المَوْصُولُ</strong>
        هو اسم يُستعمل لِمُسمّى معيَّن بواسطة جملة تُذكر بعده
        تُسمّى <strong>صلة الموصول</strong>، مثل:
        <em>جاء الذي فاز</em>.
      </p>

      <h4>أولًا: الأسماء الموصولة المشتركة</h4>
      <p>لفظ واحد يستعمل للجميع (مفرد، مثنّى، جمع، مذكر، مؤنث):</p>
      <ul>
        <li><strong>مَن</strong> للعاقل، مثل: <em>نجح من اجتهد</em>.</li>
        <li><strong>ما</strong> لغير العاقل، مثل: <em>اقرأ من الكتب ما يفيدك</em>.</li>
        <li><strong>أيّ</strong> بحسب السياق للعاقل وغيره، مثل: <em>أكرِم أيَّهم أكثرُ اجتهادًا</em>.</li>
      </ul>

      <h4>ثانيًا: الأسماء الموصولة الخاصة</h4>
      <p>تتغيّر حسب التذكير والتأنيث والإفراد والتثنية والجمع:</p>
      <ul>
        <li>
          للمذكر:
          <strong>الذي، اللذانِ، اللذين، الذين</strong>.
        </li>
        <li>
          للمؤنث:
          <strong>التي، اللتانِ، اللتين، اللاتي، اللائي، اللواتي</strong>.
        </li>
      </ul>

      <p>
        صلة الموصول تكون جملة اسمية أو فعلية، ولا محلّ لها من الإعراب،
        لكنها تُتمّم معنى الاسم الموصول وتحدّد المقصود به.
      </p>
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
        explanation: 'صلة الموصول جملة تامة: فعل وفاعل مثلاً "حضرَ مبكرًا".'
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

  pronoun: {
    id: 'pronoun',
    title: 'الضمير',
    categoryId: 'built-nouns',
    videos: [],
    images: [
      'lessons/الضمير/الضمير.docx',
      'lessons/الضمير/الضمائر%201.jpg'
    ],
    contentHtml: `
      <p>
        الضمير اسم مبني يدل على متكلم أو مخاطَب أو غائب،
        ويعود على اسم مذكور أو مفهوم من السياق.
      </p>
      <p>
        ينقسم الضمير إلى متصل ومنفصل ومستتر بحسب موقعه في الجملة.
      </p>
    `,
    quiz: []
  },
  'address-pronouns': {
    id: 'address-pronouns',
    title: 'ضمائر الخطاب',
    categoryId: 'built-nouns',
    videos: [],
    images: ['lessons/ضمائر%20الخطاب/ضمائر%20الخطاب.jpg'],
    contentHtml: `
      <p>
        ضمائر الخطاب تُستخدم لمخاطبة شخص أو أكثر مثل: أنتَ، أنتما، أنتم، أنتنَّ.
      </p>
      <p>
        تظهر مرفوعة أو منصوبة أو مجرورة بحسب موقعها واتصالها بالفعل أو الاسم.
      </p>
    `,
    quiz: []
  },
  'absent-pronouns': {
    id: 'absent-pronouns',
    title: 'ضمائر الغائب',
    categoryId: 'built-nouns',
    videos: [],
    images: ['lessons/ضمائر%20الغائب/ضمائر%20الغائب.jpg'],
    contentHtml: `
      <p>
        تشير ضمائر الغائب إلى من ليس حاضرًا: هو، هي، هما، هم، هنَّ.
      </p>
      <p>
        قد تأتي متصلة بالفعل أو منفصلة بحسب التركيب، وتظل مبنية دائمًا.
      </p>
    `,
    quiz: []
  },
  'speaker-pronouns': {
    id: 'speaker-pronouns',
    title: 'ضمائر المتكلم',
    categoryId: 'built-nouns',
    videos: [],
    images: ['lessons/ضمائر%20المتكلم/ضمائر%20المتكلم.jpg'],
    contentHtml: `
      <p>
        يستخدم المتكلم الضمائر للإشارة إلى نفسه مفردًا أو مع غيره مثل: أنا، نحن.
      </p>
      <p>
        تتصل هذه الضمائر بالأفعال أو الأسماء أو الحروف وتظل مبنية لا تتغير حركتها.
      </p>
    `,
    quiz: []
  },

  // الأسماء الخمسة
  'five-nouns': {
    id: 'five-nouns',
    title: 'الأسماء الخمسة',
    categoryId: 'secondary-signs',
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
        <strong>الأسماء الخمسة</strong> هي:
        <strong>أبوك، أخوك، حموك، فوك، ذو مالٍ</strong>.
        وتمتاز بأن إعرابها يكون بالحروف نيابةً عن الحركات في حالات معيّنة.
      </p>

      <h4>إعراب الأسماء الخمسة</h4>
      <ul>
        <li><strong>ترفع بالواو</strong>: <em>جاء أبوك، زارنا أخوك، هذا ذو مالٍ</em>.</li>
        <li><strong>تنصب بالألف</strong>: <em>رأيت أباك، صادقت أخاك، أكرمت حماك</em>.</li>
        <li><strong>تُجرّ بالياء</strong>: <em>مررت بأبيك، سلمت على أخيك، جلست إلى حميك</em>.</li>
      </ul>

      <h4>شروط إعرابها بهذا الإعراب</h4>
      <ul>
        <li>أن تكون <strong>مفردة</strong>؛ فإذا ثُنّيت أو جُمعت أُعربت إعراب المثنّى أو الجمع.</li>
        <li>أن تكون <strong>مضافة</strong>؛ فلا تُعرب هذا الإعراب إذا قُطعت عن الإضافة.</li>
        <li>أن تضاف إلى <strong>غير ياءِ المتكلّم</strong>؛ فإذا أُضيفت إلى ياء المتكلّم (أبي، أخي) عادت إلى الإعراب بالحركات.</li>
      </ul>

      <p>
        إذا اختلّ واحد من هذه الشروط عادت الأسماء الخمسة إلى الإعراب بالحركات
        على الحرف الأخير مثل سائر الأسماء.
      </p>
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

  dual: {
    id: 'dual',
    title: 'المثنى',
    categoryId: 'secondary-signs',
    videos: [],
    images: [],
    contentHtml: `
      <p>
        يدل المثنى على اثنين بزيادة الألف والنون في حالة الرفع،
        والياء والنون في حالتي النصب والجر مثل: <em>كتابانِ، كتابَيْنِ</em>.
      </p>
    `,
    quiz: []
  },
  'masculine-sound-plural': {
    id: 'masculine-sound-plural',
    title: 'جمع مذكر سالم',
    categoryId: 'secondary-signs',
    videos: [],
    images: [],
    contentHtml: `
      <p>
        يرفع جمع المذكر السالم بالواو، وينصب ويجر بالياء،
        ويصاغ بزيادة واو ونون أو ياء ونون على مفرده مثل: <em>مهندسون، مهندسين</em>.
      </p>
    `,
    quiz: []
  },
  'feminine-sound-plural': {
    id: 'feminine-sound-plural',
    title: 'جمع مؤنث سالم',
    categoryId: 'secondary-signs',
    videos: [],
    images: [],
    contentHtml: `
      <p>
        يرفع جمع المؤنث السالم بالضمة، وينصب ويجر بالكسرة،
        ويصاغ بزيادة ألف وتاء على المفرد مثل: <em>معلمات، طالبات</em>.
      </p>
    `,
    quiz: []
  },

  kana: {
    id: 'kana',
    title: 'كان وأخواتها',
    categoryId: 'nawasekh',
    videos: [],
    images: ['lessons/كان%20وأخواتها/كان%20وأخواتها.docx'],
    contentHtml: `
      <p>
        تدخل كان وأخواتها على الجملة الاسمية فترفع المبتدأ ويسمى اسمها،
        وتنصب الخبر ويسمى خبرها مثل: <em>كان الجوُّ معتدلًا</em>.
      </p>
    `,
    quiz: []
  },
  kada: {
    id: 'kada',
    title: 'كاد وأخواتها',
    categoryId: 'nawasekh',
    videos: [],
    images: ['lessons/كاد%20وأخواتها/كاد%20وأخواتها.jpg'],
    contentHtml: `
      <p>
        أفعال المقاربة مثل كاد وأوشك تفيد قرب حدوث الفعل،
        ويأتي خبرها جملة فعلية فعلها مضارع مثل: <em>كاد المطرُ يهطل</em>.
      </p>
    `,
    quiz: []
  },
  dhanna: {
    id: 'dhanna',
    title: 'ظن وأخواتها',
    categoryId: 'nawasekh',
    videos: [],
    images: ['lessons/ظن%20وأخواتها/ظن%20وأخواتها.jpg'],
    contentHtml: `
      <p>
        أفعال الظن تعمل عمل ظن فتنصب مفعولين أصلهما المبتدأ والخبر مثل:
        <em>ظننتُ الطالبَ مجتهدًا</em>.
      </p>
    `,
    quiz: []
  },
  inna: {
    id: 'inna',
    title: 'إن وأخواتها',
    categoryId: 'nawasekh',
    videos: [],
    images: ['lessons/إن%20وأخواتها/إن%20وأخواتها.jpg'],
    contentHtml: `
      <p>
        إن وأخواتها حروف ناسخة تنصب المبتدأ وترفع الخبر لتأكيد المعنى مثل:
        <em>إنَّ العلمَ نورٌ</em>.
      </p>
    `,
    quiz: []
  },

  object: {
    id: 'object',
    title: 'المفعول به',
    categoryId: 'mansubat',
    videos: [],
    images: [
      'lessons/المفعول%20به/المفعول%20به.jpg',
      'lessons/المفعول%20به/المفعول%20به%201.jpg'
    ],
    contentHtml: `
      <p>
        المفعول به اسم منصوب يدل على من وقع عليه فعل الفاعل مثل: <em>قرأ الطالبُ الكتابَ</em>.
      </p>
    `,
    quiz: []
  },
  haal: {
    id: 'haal',
    title: 'الحال',
    categoryId: 'mansubat',
    videos: [],
    images: ['lessons/الحال/الحال%20(2).jpg'],
    contentHtml: `
      <p>
        الحال وصف منصوب يبين هيئة صاحبه وقت وقوع الفعل مثل:
        <em>عاد المسافرُ مبتسمًا</em>.
      </p>
    `,
    quiz: []
  },

  naat: {
    id: 'naat',
    title: 'النعت',
    categoryId: 'tawabi',
    videos: [],
    images: ['lessons/النعت.jpg'],
    contentHtml: `
      <p>النعت تابع يصف المنعوت ويتبعه في الإعراب والتعريف والتنكير.</p>
    `,
    quiz: []
  },
  badal: {
    id: 'badal',
    title: 'البدل',
    categoryId: 'tawabi',
    videos: [],
    images: ['lessons/البدل.jpg'],
    contentHtml: `
      <p>البدل تابع يذكر بعد اسم قبله ليوضحه أو يؤكده ويطابقه في الإعراب.</p>
    `,
    quiz: []
  },
  atf: {
    id: 'atf',
    title: 'العطف',
    categoryId: 'tawabi',
    videos: [],
    images: ['lessons/العطف.jpg'],
    contentHtml: `
      <p>العطف تابع يسبقه حرف عطف يشارك المعطوف عليه في الإعراب.</p>
    `,
    quiz: []
  },
  tawkeed: {
    id: 'tawkeed',
    title: 'التوكيد',
    categoryId: 'tawabi',
    videos: [],
    images: ['lessons/التوكيد%20(1).jpg'],
    contentHtml: `
      <p>التوكيد تابع يزيل الشك ويؤكد المعنى، ويأتي لفظيًا أو معنويًا.</p>
    `,
    quiz: []
  },

  'huruf-jar': {
    id: 'huruf-jar',
    title: 'حروف الجر',
    categoryId: 'majroorat',
    videos: [],
    images: ['lessons/جر%20الاسم/جر%20الاسم.jpg'],
    contentHtml: `
      <p>حروف الجر تجر الأسماء بعدها وتضيف لها معنى مثل: من، إلى، على، في.</p>
    `,
    quiz: []
  },
  'ism-majrur': {
    id: 'ism-majrur',
    title: 'الاسم المجرور',
    categoryId: 'majroorat',
    videos: [],
    images: ['lessons/جر%20الاسم/جر%20الاسم.jpg'],
    contentHtml: `
      <p>يأتي الاسم المجرور بعد حرف جر أو مضافًا إليه، وعلامته الأصلية الكسرة.</p>
    `,
    quiz: []
  },
  'mudaf-ilayh': {
    id: 'mudaf-ilayh',
    title: 'المضاف إليه',
    categoryId: 'majroorat',
    videos: [],
    images: ['lessons/المضاف%20إليه/المضاف%20إليه%20(2).jpg'],
    contentHtml: `
      <p>المضاف إليه اسم مجرور يوضح المضاف قبله مثل: <em>كتابُ الطالبِ</em>.</p>
    `,
    quiz: []
  },

  'i3rab-steps': {
    id: 'i3rab-steps',
    title: 'خطوات الإعراب',
    categoryId: 'i3rab-steps',
    videos: [],
    images: [
      'lessons/الاعراب/القسم%20الثالث%20خطوات%20تعلم%20الاعراب/خطوات%20الاعراب%201.jpg',
      'lessons/الاعراب/القسم%20الثالث%20خطوات%20تعلم%20الاعراب/خطوات%20الاعراب%202.jpg'
    ],
    contentHtml: `
      <p>خطوات منهجية تساعدك على تحليل الجملة وتحديد مواقع الكلمات قبل ضبط الإعراب.</p>
    `,
    quiz: []
  },
  'fixed-rules': {
    id: 'fixed-rules',
    title: 'ثوابت إعرابية',
    categoryId: 'fixed-rules',
    videos: [],
    images: ['lessons/الاعراب/القسم%20الرابع%20مفاتيح%20إعرابية/فوائد%20نحوية.jpg'],
    contentHtml: `
      <p>قواعد ثابتة تعين على سرعة إعراب التراكيب المتكررة وتجنب الأخطاء الشائعة.</p>
    `,
    quiz: []
  },
  'i3rab-examples': {
    id: 'i3rab-examples',
    title: 'نماذج إعرابية',
    categoryId: 'i3rab-examples',
    videos: [],
    images: ['lessons/الاعراب/القسم%20الخامس%20نماذج%20اعربية/نماذج%20اعرابية.docx'],
    contentHtml: `
      <p>أمثلة محلولة توضح كيفية تطبيق خطوات الإعراب على جمل متنوعة.</p>
    `,
    quiz: []
  },

  // =========================
  // الأساليب النحوية
  // =========================

  // أسلوب الاستفهام / أدوات الاستفهام
  interrogatives: {
    id: 'interrogatives',
    title: 'أسلوب الاستفهام',
    categoryId: 'istifham',
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
        <strong>أسلوب الاستفهام</strong> يُستعمل لطلب الفهم أو الاستعلام عن شيء مجهول
        عند المتكلّم، ولكل أداة منه معنى خاص ونوع معيّن من السؤال.
      </p>

      <h4>أهم أدوات الاستفهام ومعانيها</h4>
      <ul>
        <li><strong>مَن</strong> – للسؤال عن <strong>العاقل</strong>:
          <em>مَن آخرُ الخلفاءِ الراشدين؟</em></li>
        <li><strong>ما / ماذا</strong> – للسؤال عن <strong>غير العاقل</strong> أو الأشياء:
          <em>ما أحبُّ العلومِ إليك؟</em></li>
        <li><strong>متى</strong> – للسؤال عن <strong>الزمان</strong>:
          <em>متى رجعت؟</em></li>
        <li><strong>أيان</strong> – للزمان المستقبل:
          <em>أيان تُسافر؟</em></li>
        <li><strong>أين</strong> – للسؤال عن <strong>المكان</strong>:
          <em>أين أخوك؟</em></li>
        <li><strong>كيف</strong> – للسؤال عن <strong>الحال</strong> أو الهيئة:
          <em>كيف حالُك؟</em></li>
        <li><strong>كم</strong> – للسؤال عن <strong>العدد</strong>:
          <em>كم كتابًا قرأت؟</em></li>
        <li><strong>أيُّ</strong> – للسؤال عن <strong>تعيين</strong> واحد من مجموعة:
          <em>أيُّ رجلٍ أتى؟</em></li>
      </ul>

      <p>
        اختيار أداة الاستفهام المناسبة يعطي سؤالك دقةً ووضوحًا،
        ويساعدك على فهم النصوص القرآنية واللغوية فهمًا أفضل.
      </p>
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
  // التوابع / أحكام أخرى
  // =========================
  tamyeez: {
    id: 'tamyeez',
    title: 'التمييز',
    categoryId: 'mansubat',
    videos: [],
    images: [
      'lessons/التمييز/التمييز.jpg'
    ],
    contentHtml: `
      <p>
        <strong>التمييز</strong> اسم نكرة منصوب يأتي لِيُزيل إبهامًا في الجملة
        ويُوضّح المقصود من كلمة قبله،
        مثل: <em>اشتريتُ كيلو سُكرًا</em>؛ فكلمة <strong>سكرًا</strong> تمييز.
      </p>

      <h4>أنواع التمييز</h4>

      <h5>1- تمييز ملفوظ</h5>
      <p>
        يوضّح مقدارًا مذكورًا قبله، مثل العدد أو الكيل أو الوزن أو المساحة:
      </p>
      <ul>
        <li>تمييز العدد: <em>معي خمسةُ ريالاتٍ</em>.</li>
        <li>تمييز الكيل: <em>شربتُ لترًا ماءً</em>.</li>
        <li>تمييز الوزن: <em>اشتريتُ كيلو لحمًا</em>.</li>
        <li>تمييز المساحة: <em>زرعتُ فدانًا قمحًا</em>.</li>
      </ul>

      <h5>2- تمييز ملحوظ (نِسبة)</h5>
      <p>
        يوضّح جملةً أو نسبةً معنويةً قبله، مثل:
        <em>طابَ الجوُّ هواءً</em>،
        <em>ازدادَ الطالبُ علمًا</em>.
      </p>

      <p>
        معرفة نوع التمييز تساعد على فهم الجملة وضبط إعرابها بدقّة.
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

  // … يمكنك إضافة بقية الدروس هنا بنفس البنية إن أحببت …
};


// =============================
// 2) التصنيفات CATEGORIES
// =============================

const CATEGORIES = [
  {
    id: 'parts-of-speech',
    title: 'أقسام الكلام',
    color: '#dcfce7',
    lessonIds: ['types-of-word']
  },
  {
    id: 'sentence-types',
    title: 'أقسام الجملة',
    color: '#fef3c7',
    lessonIds: [
      'present-raf',
      'present-nasb',
      'present-jazm',
      'subject',
      'naib-fael',
      'five-verbs'
    ]
  },
  {
    id: 'built-nouns',
    title: 'الأسماء المبنية',
    color: '#e0f2fe',
    lessonIds: [
      'demonstratives',
      'relative-pronouns',
      'pronoun',
      'address-pronouns',
      'absent-pronouns',
      'speaker-pronouns'
    ]
  },
  {
    id: 'secondary-signs',
    title: 'علامات الإعراب الفرعية',
    color: '#fef9c3',
    lessonIds: [
      'five-nouns',
      'dual',
      'masculine-sound-plural',
      'feminine-sound-plural'
    ]
  },
  {
    id: 'nawasekh',
    title: 'النواسخ',
    color: '#fee2e2',
    lessonIds: ['kana', 'kada', 'dhanna', 'inna']
  },
  {
    id: 'mansubat',
    title: 'المنصوبات',
    color: '#fae8ff',
    lessonIds: ['object', 'haal', 'tamyeez']
  },
  {
    id: 'tawabi',
    title: 'التوابع',
    color: '#ecfeff',
    lessonIds: ['naat', 'badal', 'atf', 'tawkeed']
  },
  {
    id: 'majroorat',
    title: 'المجرورات',
    color: '#e0f2fe',
    lessonIds: ['huruf-jar', 'ism-majrur', 'mudaf-ilayh']
  },
  {
    id: 'istifham',
    title: 'أسلوب الاستفهام',
    color: '#dcfce7',
    lessonIds: ['interrogatives']
  },
  {
    id: 'i3rab-steps',
    title: 'خطوات الإعراب',
    color: '#f3e8ff',
    lessonIds: ['i3rab-steps']
  },
  {
    id: 'fixed-rules',
    title: 'ثوابت إعرابية',
    color: '#fef3c7',
    lessonIds: ['fixed-rules']
  },
  {
    id: 'i3rab-examples',
    title: 'نماذج إعرابية',
    color: '#fee2e2',
    lessonIds: ['i3rab-examples']
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
  const allIds = Array.from(
    new Set(
      CATEGORIES.flatMap((cat) => cat.lessonIds).filter((id) => LESSONS[id])
    )
  );
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
    const isActive = view.id === 'view-' + viewId;
    view.classList.toggle('active', view.id === 'view-' + viewId);
    view.classList.toggle('hidden', !isActive);
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

  function getViewFromHash() {
    const hash = (window.location.hash || '').replace('#', '').trim();
    switch (hash) {
      case 'lessons':
      case 'stats':
      case 'ask-teacher':
      case 'leaders':
        return hash === 'ask-teacher' ? 'ask' : hash;
      default:
        return null;
    }
  }

  function buildShellIfNeeded() {
    if (!appRoot.dataset.shellBuilt) {
      buildAppShell();
      appRoot.dataset.shellBuilt = '1';
    }
  }

  function goToLessonsView(targetView) {
    const viewToOpen = targetView || getViewFromHash() || 'lessons';
    landing.classList.add('hidden');
    appRoot.classList.remove('hidden');
    buildShellIfNeeded();
    appRoot.dataset.lastHash = window.location.hash || '';
    appRoot.dataset.currentView = viewToOpen;
    switchView(viewToOpen);
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

  const resolveTargetView = () => getViewFromHash() || 'lessons';

  // عند الضغط على "ابدأ التعلّم"
  startBtn.addEventListener('click', () => {
    const existing = loadUserProfile();
    if (existing && existing.name && existing.grade) {
      // عنده بيانات محفوظة مسبقًا → ادخل مباشرة
      goToLessonsView(resolveTargetView());
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
      goToLessonsView(resolveTargetView());
    });
  }

  // إذا فتح المستخدم التطبيق من اختصار (هاش) ومعه بيانات محفوظة، انتقل مباشرة
  function handleDeepLinkFromHash() {
    const target = getViewFromHash();
    if (!target) return;

    const profile = loadUserProfile();
    if (profile && profile.name && profile.grade) {
      goToLessonsView(target);
    } else {
      openProfileModal();
    }
  }

  // دعم فتح التطبيق مباشرة من اختصارات PWA أو روابط الهاش
  window.addEventListener('hashchange', handleDeepLinkFromHash);
  handleDeepLinkFromHash();

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
