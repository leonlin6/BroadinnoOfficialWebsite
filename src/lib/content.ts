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
    title: "金控公司資料倉儲建置及應用",
    category: "金融服務",
    number: "01",
    summary: "從資料倉儲的管理與維護出發，探索成本控制與 Data to Value 的機會。",
    sections: [
      { label: "現況", text: "金控公司多已建有資料倉儲，或以數據中台的形式管理資料。" },
      { label: "挑戰", text: "資料進出控管、使用效率，以及如何讓資料產生價值，都是持續面對的課題。" },
      { label: "需求", text: "資料系統的管理與維護成本高，業務與管理也高度依賴資料。" },
      { label: "方案", text: "提供 Health Check，協助找到成本控制的方法，以及 Data to Value 的商機。" },
    ],
  },
  {
    slug: "customer-appliance",
    title: "家電產業客戶分群及行銷推廣",
    category: "零售與家電",
    number: "02",
    summary: "以家庭維度理解客戶，結合公開資料尋找更精準的銷售機會。",
    sections: [
      { label: "現況", text: "家電產品耐用度高，客戶回購週期長，企業需要更理解客戶貢獻度。" },
      { label: "挑戰", text: "通路與經銷商依賴度高；網路直銷也面臨與實體通路競爭的困局。" },
      { label: "方案", text: "建立 HouseHold 等級的客戶分群，結合 Open Data，辨識銷售熱點與區域。" },
    ],
  },
  {
    slug: "customer-public-facility",
    title: "公用事業客戶分群及交叉銷售",
    category: "公用事業",
    number: "03",
    summary: "分析使用行為與地理區域，發現客戶的延伸需求。",
    sections: [
      { label: "產業特性", text: "企業、家庭與個人用戶的使用行為各不相同。" },
      { label: "觀察重點", text: "RFM 分群之外，地理區域也是重要的分析變數。" },
      { label: "服務內容", text: "整理有用資料進行客戶分群，找出延伸產品與服務的銷售機會。" },
    ],
  },
  {
    slug: "customer-loan-credit",
    title: "信用貸款市場分析及客戶信用評分",
    category: "金融服務",
    number: "04",
    summary: "整合多維度資料與領域知識，優化市場分析和信用評分模型。",
    sections: [
      { label: "市場分析", text: "貸款市場受總體經濟、區域發展與就業狀況等面向影響。" },
      { label: "資料整合", text: "分析模型來自大量資料與多重資料源。" },
      { label: "方案", text: "既有模型調優、不同維度資料整合，以及可控式 AI 學習模型。" },
    ],
  },
  {
    slug: "customer-potential",
    title: "潛在理財客戶分析",
    category: "金融服務",
    number: "05",
    summary: "從客戶行為辨識理財需求，探索跨業合作與新通路。",
    sections: [
      { label: "觀察", text: "有資產的客戶不一定有理財行為；有理財需求的客戶，也不一定已有高資產。" },
      { label: "應用", text: "從行為與資料推論需求，探索跨業的新商業機會。" },
      { label: "方案", text: "透過跨業合作、KOL 與社群等管道，發展可試行的行動方案。" },
    ],
  },
  {
    slug: "customer-motor-industry",
    title: "輔導汽車產業，成立數據治理及數據分析組織及新工作流程",
    category: "汽車產業",
    number: "06",
    summary: "將數據分析、組織分工與工作流程連結，讓資料真正支持決策。",
    sections: [
      { label: "分析視角", text: "將融資、可支配所得與行為偏好納入分析，思考分析部門如何創造價值。" },
      { label: "組織課題", text: "完善組織分工、任務 KPI，以及資料分析與產出流程。" },
      { label: "方案", text: "以 Health Check 為起點，進行 Re-Engineering on Data，搭配組織調整。" },
    ],
  },
] as const;

export type CaseStudy = (typeof cases)[number];
