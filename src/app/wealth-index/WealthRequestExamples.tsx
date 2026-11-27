"use client";

import { useState } from "react";
import { FileSpreadsheet, Info } from "lucide-react";
import styles from "./wealth-index.module.css";

const examples = [
  {
    number: "01",
    title: "「我想查詢宜蘭縣各鄉鎮市的財富指標」",
    description:
      "請告訴我們想查詢的縣市與鄉鎮市區。完成分析後，我們會提供 CSV 檔案，供您於指定路徑下載，下載密碼將另行通知。",
  },
  {
    number: "02",
    title: "批次查詢指標",
    description:
      "請準備 CSV 或 XLS 檔案，包含編號、縣市、鄉鎮市區，以及路／段或村／里等必要欄位。依我方提供的方式上傳後，我們會提供具財富指標的報告供您下載。",
  },
  {
    number: "03",
    title: "查詢其他特定地點",
    description:
      "若有其他特定地理位置的財富指標需求，請於下方填寫，直接說明您的特定地點與需求。",
  },
] as const;

const sampleRows = [
  { id: "001", city: "宜蘭縣", district: "宜蘭市", address: "地址資料 01", grade: "A" },
  { id: "002", city: "宜蘭縣", district: "羅東鎮", address: "地址資料 02", grade: "C" },
  { id: "003", city: "宜蘭縣", district: "礁溪鄉", address: "地址資料 03", grade: "F" },
];

export function WealthRequestExamples() {
  const [selected, setSelected] = useState(0);
  const example = examples[selected];

  return (
    <>
      <div className={styles.requestExamples} role="group" aria-label="選擇需求提出範例">
        {examples.map(({ number, title }, index) => (
          <button
            key={number}
            id={`wealth-example-option-${number}`}
            type="button"
            className={styles.exampleOption}
            aria-pressed={selected === index}
            aria-controls="wealth-example-panel"
            onClick={() => setSelected(index)}
          >
            <span className={styles.exampleNumber}>{number}</span>
            <span className={styles.exampleOptionTitle}>{title}</span>
          </button>
        ))}
      </div>

      <div
        className={styles.examplePanel}
        id="wealth-example-panel"
        role="region"
        aria-labelledby={`wealth-example-option-${example.number}`}
      >
        <h3>{example.title}</h3>
        <p>{example.description}</p>

        {selected !== 2 && (
          <div className={styles.reportWrap}>
            {selected === 1 && (
              <>
                <h4>上傳批次地址格式</h4>
                <div className={styles.reportCard}>
                  <div className={styles.reportTitle}>
                    <FileSpreadsheet size={21} />
                    <strong>批次列出地址檔案格式後上傳</strong>
                  </div>
                  <div className={styles.tableScroll}>
                    <table aria-label="上傳批次地址格式">
                      <thead>
                        <tr>
                          <th scope="col">編號</th>
                          <th scope="col">縣市</th>
                          <th scope="col">鄉鎮市區</th>
                          <th scope="col">地址</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sampleRows.map((row) => (
                          <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.city}</td>
                            <td>{row.district}</td>
                            <td>{row.address}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            <h4>下載財富指標報告</h4>
            <div className={styles.reportCard}>
              <div className={styles.reportTitle}>
                <FileSpreadsheet size={21} />
                <strong>收到地址批次檔案後，將提供具備財富指標的報告供您下載</strong>
              </div>
              <div className={styles.tableScroll}>
                <table aria-label="回傳批次地址格式">
                  <thead>
                    <tr>
                      <th scope="col">編號</th>
                      <th scope="col">縣市</th>
                      <th scope="col">鄉鎮市區</th>
                      <th scope="col">地址</th>
                      <th scope="col">財富指標</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleRows.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.city}</td>
                        <td>{row.district}</td>
                        <td>{row.address}</td>
                        <td className={styles.gradeCell}>
                          <span
                            className={`${styles.gradePill} ${row.grade === "A" ? styles.gradeA : row.grade === "C" ? styles.gradeC : styles.gradeF}`}
                          >
                            {row.grade}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className={styles.sampleNotice}>
              <Info size={17} />
              表格中的等級不代表實際查詢結果，正式結果依資料分析確認。
            </p>
          </div>
        )}
      </div>
    </>
  );
}
