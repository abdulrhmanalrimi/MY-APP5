document.addEventListener("DOMContentLoaded", () => {
  const landing = document.getElementById("landing");
  const startBtn = document.getElementById("start-learning");
  const appRoot = document.getElementById("app-root");

  if (!landing || !startBtn || !appRoot) return;

  // محتوى أولي بسيط لداخل التطبيق بعد الدخول
  appRoot.innerHTML = `
    <header class="app-header">
      <h2>لوحة النحو</h2>
    </header>

    <section class="card">
      <h3>مرحبًا بك في منطقة التعلّم 👋</h3>
      <p>
        هنا سنضيف لاحقًا الدروس، التمارين التفاعلية، وسؤال اليوم،
        مع تتبّع للتقدّم وسلسلة الأيام.
      </p>
      <p>
        يمكنك الآن التأكد أن الانتقال من شاشة الترحيب إلى التطبيق يعمل بشكل صحيح،
        ثم نطوّر المحتوى خطوة خطوة.
      </p>
    </section>
  `;

  // عند الضغط على "ابدأ التعلم"
  startBtn.addEventListener("click", () => {
    landing.classList.add("hidden");
    appRoot.classList.remove("hidden");
    // يمكن لاحقًا تخزين أنه زار التطبيق مرة في localStorage إذا حاب
  });
});
