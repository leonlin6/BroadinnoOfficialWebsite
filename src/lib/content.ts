export const siteUrl = "https://www.broadinno.com.tw";

export const coreServiceLinks = [
  { label: "管理顧問", href: "/management-consulting/" },
  { label: "專案辦公室", href: "/project-manager/" },
  { label: "主要服務產業", href: "/service-industries/" },
  { label: "主要專業領域", href: "/main-experties/" },
] as const;

export const aboutLinks = [
  { label: "公司介紹", href: "/about/company/" },
  { label: "專業能力", href: "/about/capabilities/" },
] as const;

export const cases = [
  {
    slug: "customer-data-warehouse",
    title: "金控公司資料倉儲建置與應用",
    category: "金融服務",
    number: "01",
    summary: "針對既有資料倉儲與數據中台提供 Health Check，尋找成本控管、使用效率提升與 Data to Value 的機會。",
    experience: { rating: 5, note: "經歷：5 家大型國內外機構" },
    sections: [
      { label: "現況", text: "現在的金控公司大多已有資料倉儲，或以較現代化的數據中台管理資料，幾乎不再重新建置資料倉儲（Data Warehouse）。" },
      { label: "痛點", text: "管理重點在於資料進出的控管、使用效率提升，以及最重要的，如何讓資料創造價值。" },
      { label: "需求", text: "金控資料系統的管理及維護成本都很高，業務面與管理面對資料的依賴度也很高。" },
      { label: "方案", text: "提供 Health Check，協助找到成本控制的方法，以及 Data to Value 的商機。" },
    ],
  },
  {
    slug: "customer-appliance",
    title: "家電產業客戶分群及行銷推廣",
    category: "零售與家電",
    number: "02",
    summary: "以 HouseHold / Family 維度理解家電客戶，結合 Open Data 尋找銷售熱點與行銷機會。",
    experience: { rating: 4, note: "經歷：客戶分級制度、Reward Program Tracking" },
    sections: [
      { label: "現況", text: "家電業希望了解客戶貢獻度；許多家電產品耐用度高，讓客戶回購週期變長。" },
      { label: "痛點 1", text: "如何培養客戶忠誠度？將管理視角提升至 HouseHold / Family 維度，可以尋找更多銷售機會。" },
      { label: "痛點 2", text: "對通路與經銷商依賴度高，直接價格掌控力低；網路直銷也面臨與實體通路競爭的困局。" },
      { label: "方案", text: "建立 HouseHold 等級的客戶分群，結合 Open Data，提供銷售熱點及區域資訊。" },
    ],
  },
  {
    slug: "customer-public-facility",
    title: "公用事業客戶分群及交叉銷售",
    category: "公用事業",
    number: "03",
    summary: "結合 RFM、地理區域與使用行為進行客戶分群，找出交叉銷售機會。",
    experience: { rating: 4, note: "經歷：提升 Product Holding、設計 Marketing Campaign" },
    sections: [
      { label: "特殊行業", text: "公用事業常見企業用戶、家庭用戶與個人用戶三種分類，各自的使用行為不同。" },
      { label: "觀察重點", text: "RFM 分群方式也適用於公用事業；地理區域通常是另一個重要變數。" },
      { label: "橫向需求", text: "從使用習慣與行為，可發現客戶在食、衣、住、行上的其他需求。" },
      { label: "提供服務", text: "從資料整理到客戶分群，進一步探索跨產品與服務的銷售機會。", points: ["快速整理出有用的資料，進行客戶分群。", "透過客戶分群，找出橫向需求的產品／服務銷售機會。"] },
    ],
  },
  {
    slug: "customer-loan-credit",
    title: "信用貸款市場分析及客戶信用評分",
    category: "金融服務",
    number: "04",
    summary: "整合總體經濟、區域發展與就業等多維資料，結合領域知識優化信用評分模型。",
    experience: { rating: 5, note: "客戶成效：業務提升 2.3 倍，違約率下降 70%" },
    sections: [
      { label: "市場分析", text: "貸款與總體經濟、區域發展及就業狀況等維度均有影響關係。" },
      { label: "資料整合", text: "分析模型需要大量資料與多重資料源的整合。" },
      { label: "模型及評分準確度", text: "結合領域知識、專家判斷、變數與實證分析，形成動態學習。" },
      { label: "方案", text: "既有模型調優、不同維度資料整合，以及可控式 AI 學習模型。" },
    ],
  },
  {
    slug: "customer-potential",
    title: "潛在理財客戶分析",
    category: "金融服務",
    number: "05",
    summary: "從客戶行為推論理財需求，透過跨業合作、KOL 與小社群探索新產品與通路。",
    experience: { rating: 4, note: "經歷：創造新合作、新通路、新產品" },
    sections: [
      { label: "推論", text: "GenAI 所談的推論，也可以用「若 A 則 B」的生活邏輯理解。" },
      { label: "應用", text: "以跨業合作為主要方向，探索新的商業機會。" },
      { label: "Data Can Tell", text: "有錢的客戶不見得會理財；會理財的客戶，現在也不見得有錢。透過行為資料，辨識客戶可能存在的理財需求。" },
      { label: "Social Resource", text: "跨業合作可以創造新的銷售機會，也讓客戶滿意；KOL 與小社群同樣是可觀察、可試行的行動方案。" },
    ],
  },
  {
    slug: "customer-motor-industry",
    title: "輔導汽車產業，成立數據治理及數據分析組織及新工作流程",
    category: "汽車產業",
    number: "06",
    summary: "結合 Hybrid Thinking on Data、融資與行為資料，透過 Health Check 與組織調整建立數據治理流程。",
    experience: { rating: 4, note: "經歷：Market Value 提升 10%" },
    sections: [
      { label: "Hybrid Thinking on Data", text: "此情境有兩個 Entities，都是 Primary Key：有溫度的行為與機械映射。" },
      { label: "Financing Impact", text: "分析時納入融資、可支配所得與行為偏好，思考分析部門如何產生價值。" },
      { label: "產品型組織 vs 客戶型組織", text: "完善組織分工與任務 KPI，建立資料分析與產出流程。" },
      { label: "i科技", text: "將 AIoT 的議題與資料納入考量。" },
      { label: "方案", text: "以 Health Check 為基礎，進行 Re-Engineering on Data，並搭配組織調整。" },
    ],
  },
] as const;

export type CaseStudy = (typeof cases)[number];
