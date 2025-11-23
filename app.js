function renderAskTeacherView() {
  const view = document.getElementById('view-ask');
  if (!view) return;

  view.innerHTML = `
    <header class="app-header">
      <h2>اسأل المعلم</h2>
      <p>يمكنك تدوين سؤالك في النحو، أو التواصل مباشرة مع الأستاذة المشرفة.</p>
    </header>

    <section class="card ai-question-card">
      <h3>سؤال للذكاء الاصطناعي</h3>
      <p class="muted">
        سيتم ربط هذه الخانة لاحقًا بخدمة ذكاء اصطناعي عبر خادم آمن. حاليًا يمكنك استخدامها لكتابة
        الأسئلة أو الملاحظات التي تريد مناقشتها مع المعلم.
      </p>
      <textarea id="ai-question" rows="4" style="width:100%;" placeholder="اكتب سؤالك هنا..."></textarea>
      <button class="primary-btn ai-send-btn" id="ai-send" disabled>
        إرسال (قريبًا)
      </button>
    </section>

    <section class="card teacher-contact">
      <div class="teacher-contact-header">
        <div class="teacher-contact-title">تواصل مع الأستاذة المشرفة 💬</div>
        <div class="teacher-contact-subtitle">للاستفسارات والأسئلة المباشرة</div>
      </div>

      <div class="teacher-contact-inner">
        <div class="teacher-avatar">👩‍🏫</div>

        <div class="teacher-main">
          <div class="teacher-name">الأستاذة/ سهام غازي</div>
          <div class="teacher-role">المشرفة على التطبيق</div>

          <div class="teacher-phone">
            <span class="phone-number">+967 775 392 526</span>
            <span class="phone-icon">📞</span>
          </div>

          <p class="teacher-note">
            لديك سؤال أو استفسار؟ تواصل معنا مباشرة عبر الواتساب وسنكون سعداء بمساعدتك في أي وقت ضمن أوقات الدوام.
          </p>

          <a
            class="whatsapp-btn"
            href="https://wa.me/967775392526"
            target="_blank"
            rel="noopener"
          >
            <span class="wa-icon">🟢</span>
            <span>راسلنا على الواتساب</span>
          </a>
        </div>
      </div>

      <p class="teacher-time">
        أوقات الرد: من السبت إلى الخميس، ٩ صباحًا – ٥ مساءً 🕒
      </p>
    </section>
  `;
}
