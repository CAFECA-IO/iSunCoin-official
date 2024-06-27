import { useEffect } from 'react';

const ThreeModelsIntro = () => {
  const ids = ['pro-model', 'max-model', 'enterprise-model'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, intersectionObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = ids.indexOf(entry.target.id);
            // 使用 setTimeout 添加延遲效果
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, index * 600); // 根據索引增加延遲時間，例如每個元素之間延遲 600 毫秒
            intersectionObserver.unobserve(entry.target); // 觸發一次後取消觀察，避免重複觸發
          }
        });
      },
      {
        threshold: 1.0, // 觸發閾值設置為 1.0，表示元素完全進入視窗
        rootMargin: '0px 0px 0px 0px', // 觸發範圍
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const models = (
    <div>
      {[
        {
          id: 'pro-model',
          text: 'The PRO model features ARGB fans and a 1TB solid-state drive / NTD 100,000 (estimate)',
        },
        {
          id: 'max-model',
          text: 'The MAX model features ARGB fans and a 1TB solid-state drive / NTD 160,000 (estimate)',
        },
        {
          id: 'enterprise-model',
          text: 'The Enterprise model features a water cooling system and a 2TB solid-state drive / NTD 300,000 (estimate)',
        },
      ].map(({ id, text }) => (
        <h4 key={id} id={id} className="text-xl font-semibold text-text-neutral-primary opacity-0">
          {text}
        </h4>
      ))}
    </div>
  );

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full max-w-975px space-y-20px">
        <h1 className="text-64px font-bold text-text-text-primary">
          <span className="text-text-brand-primary-lv2">3</span> models for different users.
        </h1>
        <p className="text-lg font-semibold text-text-neutral-secondary">
          Our product line offers three different models: PRO, MAX, and Enterprise. Each model has
          distinct performance and capabilities, catering to different types of users. You can find
          the right model for you by exploring the details below.
        </p>

        {models}
      </div>
    </section>
  );
};

export default ThreeModelsIntro;

// export default ThreeModelsIntro;
