import React from "react";
import ArrowDown from "../../icons/ArrowDown";
import styles from "./FAQ.module.css";
import ArrowUp from "../../icons/ArrowUp";

const FAQ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.banner}>الأسئلة المتكررة</div>
        <div className={styles.faqs}>
          <button className={styles.faq}>
            <ArrowDown size={24} color="#ffffff" />
            <p>ما مستويات الدروس المطروحة بالمنصة؟</p>
          </button>
          <button className={styles.faq}>
            <ArrowDown size={24} color="#ffffff" />
            <p>هل المنصة تمنح شهادات؟</p>
          </button>
          <button className={styles.faq}>
            <ArrowDown size={24} color="#ffffff" />
            <p>هل أستطيع إيقاف اشتراكي؟</p>
          </button>
          <button className={styles.faq}>
            <ArrowDown size={24} color="#ffffff" />
            <p>ما الذي سأحصل عليه مقابل الاشتراك الشهري؟</p>
          </button>
          <button className={styles.activeFaq}>
            <div className={styles.activeFaqHeader}>
              <ArrowUp size={24} color="#ffffff" />
              <p>هل المبالغ قابلة للاسترداد؟</p>
            </div>
            <div className={styles.activeFaqAnswer}>
              <p dir="rtl">
                لا يمكن استرداد مبلغ الاشتراك، ولكن يمكن إلغاء الاشتراك الشهري
                في أي وقتٍ يشاء المستخدم، يعود السبب في ذلك لكون الاشتراك يُتيح
                فرصة استهلاك جميع محتوى المنصة.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
