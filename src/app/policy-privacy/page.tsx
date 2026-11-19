import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "隱私權聲明",
  description: "瞭解博創數科網站如何蒐集、處理、利用及保護個人資料，以及隱私權相關權益與聯絡方式。",
  alternates: { canonical: "/policy-privacy/" },
};

function PolicySection({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <section className={styles.policySection} aria-labelledby={`policy-section-${number}`}>
      <span className={styles.sectionNumber} aria-hidden="true">{String(number).padStart(2, "0")}</span>
      <div>
        <h2 id={`policy-section-${number}`}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="PRIVACY POLICY" title="隱私權聲明" description="瞭解本網站如何蒐集、處理、利用及保護您的個人資料。" animatedUnderline={false} />
      <div className={styles.page}>
        <div className={"container " + styles.layout}>
          <aside className={styles.aside}>
            <span className={styles.eyebrow}>PRIVACY</span>
            <h2>網站隱私權聲明</h2>
            <time dateTime="2026-11-19">更新日期：2026/11/19</time>
          </aside>

          <div className={styles.content}>
            <p className={styles.intro}>親愛的朋友，感謝您蒞臨「博創數科」網站(以下簡稱本網站)，您個人的隱私權，博創數科絕對予以尊重並加以保護。為了幫助您瞭解本網站如何蒐集、處理、利用及保護您所提供的個人資訊，請您務必詳細閱讀下列資訊：</p>

            <PolicySection number={1} title="壹、隱私權聲明適用範圍">
              <p>本隱私權聲明(以下簡稱本聲明)，適用於您在瀏覽或使用本網站提供之服務時，所涉及的個人資料蒐集、處理、利用與保護，但不適用於與本網站功能連結之各網站與繳費網站。凡經由本網站連結之線上案件申請網站或繳費網站，不論是其他機關、團體、公司與本網站聯名經營，各網站均有其專屬之隱私權聲明，本網站不負任何連帶責任。當您在這些網站進行線上案件申請時，關於個人資料的保護，適用各該網站的隱私權聲明。</p>
            </PolicySection>

            <PolicySection number={2} title="貳、個人資料之蒐集">
              <ol className={styles.clauses}>
                <li><span>一、</span><p>單純在本網站的瀏覽行為，本網站並不會蒐集任何有關個人的身分資料。</p></li>
                <li><span>二、</span><p>因網路技術與網路安全管理之需要，本網站會自動記錄一些不代表您個人，但與網站使用相關之訊息，例如：使用者連線設備的IP位址等資料。</p></li>
                <li>
                  <span>三、</span>
                  <div>
                    <p>本網站有義務保護各申請人隱私，不會自行修改或刪除您的個人資料及檔案。除非經過您事先同意或符合以下情況始得為之：</p>
                    <ol className={styles.subClauses}>
                      <li><span>(一)</span><p>經由合法的途徑。</p></li>
                      <li><span>(二)</span><p>保護或維護相關網路民眾的權利或所有權。</p></li>
                      <li><span>(三)</span><p>為保護本網站各相關單位之權益。</p></li>
                    </ol>
                  </div>
                </li>
              </ol>
            </PolicySection>

            <PolicySection number={3} title="參、個人資料的選擇">
              <ol className={styles.clauses}>
                <li><span>一、</span><p>除非已事先徵得您的同意，否則本公司不會蒐集個人資料或將之用於與本聲明或相關告知內容未陳述之目的。</p></li>
                <li><span>二、</span><p>您可以拒絕向本公司提供個人資料，不過本公司可能因此無法為您提供這些服務。</p></li>
              </ol>
            </PolicySection>

            <PolicySection number={4} title="肆、個人資料的利用">
              <p>本網站絕不會任意提供任何您的個人資料給其他團體、個人或私人企業。但有下列情形之一者除外：</p>
              <ol className={styles.clauses}>
                <li><span>一、</span><p>配合司法單位合法的調查。</p></li>
                <li><span>二、</span><p>配合相關職權機關依職務需要之調查或使用。</p></li>
                <li><span>三、</span><p>已事先徵得您的同意所分享的個人資料。</p></li>
                <li><span>四、</span><p>法律要求：本公司於必要時將遵循中華民國法律、命令、傳票、裁判、判斷及處分要求的內容，提供適當的資訊予法定機構，這有可能包括您的個人資料。</p></li>
                <li><span>五、</span><p>內部分析與研究用途：本公司若需要使用您的資料做為內部統計分析與研究報告用途時，會先將您的資料做適度去識別化之處理，使其成為無從識別特定之當事人。</p></li>
                <li><span>六、</span><p>組織調整：如果本公司因應組織改造所進行之組織調整，本公司將確保對涉及這些調整的所有個人資料保密，並在個人資料移轉且被另一隱私權聲明約束之前通知您。</p></li>
              </ol>
            </PolicySection>

            <PolicySection number={5} title="伍、個人資料的共用">
              <p>除本聲明的規定外，本網站不會任意出售、交換或出租任何您的個人資料予其他團體或個人。</p>
              <p>但是本網站可能為了提供您其他服務或優惠權益(例如：相關業務推廣之抽獎活動等)需要與提供該服務或優惠之第三者共用您的資料，本公司與第三者共用您的個人資料時，本網站將於活動網頁加註資料共用對象之說明。</p>
            </PolicySection>

            <PolicySection number={6} title="陸、個人資料正確性">
              <p>本公司處理您的個人資料時，會嚴格遵守當初蒐集資訊的目的以及本聲明或任何適用的特定服務告知事項內容。</p>
            </PolicySection>

            <PolicySection number={7} title="柒、資訊安全">
              <p>本公司會採取適當的安全措施，來防止個人資料被竊取、竄改、毀損、滅失或洩漏，其中包括就資料的蒐集、儲存、處理慣例及安全措施進行內部審查，並以實體的安全措施，防止本公司儲存個人資料的系統遭到未經授權的存取。</p>
              <p>本公司只允許本公司的員工和提供特定服務之委外廠商存取個人資料，因為他們需要這些資訊來提供、開發或改善本公司的服務，上述人員都必須遵守保密義務。</p>
            </PolicySection>

            <PolicySection number={8} title="捌、自我保護措施">
              <p>請妥善保管您的個人資料，避免將個人資料任意提供給與您無關的任何人或其他機構。在您使用完本網站所提供的各項服務功能後，若有登入情況時，務必記得登出，若您是與他人共享電腦或使用公共電腦，切記要關閉瀏覽器視窗，以防止他人讀取您的個人資料或信件。</p>
            </PolicySection>

            <PolicySection number={9} title="玖、服務性資訊或電子郵件之傳送">
              <p>本網站將在事前或當您註冊登錄時取得您的同意後，傳送服務性資訊或電子郵件給您。</p>
            </PolicySection>

            <PolicySection number={10} title="壹拾、 Cookies">
              <p>Cookies是伺服端為了區別使用者的不同喜好，由瀏覽器寫入使用者硬碟的一些簡短資訊，雖然Cookies會識別使用者的電腦，但是無法識別使用者的身分。您也可以透過在您的瀏覽器中選擇修改您對於Cookies的接受程度，如果您選擇拒絕所有的Cookies，您可能無法正常使用部分個人化服務。</p>
              <p>為了提供更好、更個人化的服務以及方便您參與個人化的互動活動，Cookies會在您註冊或登入時建立，並在您登出時修改其狀態。</p>
            </PolicySection>

            <PolicySection number={11} title="壹拾壹、本聲明之修正">
              <p>由於社會環境及法令規定變遷或科技技術進步，本網站將採用最新技術與法規以盡全力保護您的網路隱私，並且定期審查本網站是否遵守本聲明，故本網站將不定時修訂與公布本聲明以合時宜。</p>
              <p>為保障您的權益，若本聲明賦予您的權利有所變更，本公司會將變更內容都公告在本聲明之網頁上，如為重大變更，本公司將提供更明確的通知</p>
              <p>本聲明的每個版本都會在網頁上方標示更新日期。也請您隨時上網參閱本聲明。</p>
            </PolicySection>

            <PolicySection number={12} title="壹拾貳、隱私權保護諮詢與救濟">
              <p>如果您有任何關於本聲明、其他隱私權管理、本公司使用個人資料的問題或任何意見，請連繫我們。電子信箱：<a href="mailto:service@broadinno.com.tw">service@broadinno.com.tw</a></p>
            </PolicySection>
          </div>
        </div>
      </div>
    </>
  );
}
