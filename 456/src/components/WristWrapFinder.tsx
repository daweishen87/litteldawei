"use client";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { PurchaseLink } from "@/components/PurchaseLink";

const questions = [
  { key: "training", title: "你最常做哪一類訓練？", note: "用訓練情境開始比較，不是每個動作都一定需要護腕。", options: [
    ["push", "臥推、肩推等推舉", "手腕會承受槓鈴負荷的上肢動作。"],
    ["general", "一般健身與多種重訓", "依不同動作評估是否需要手腕包覆。"],
    ["metcon", "功能性訓練或多變化訓練", "動作變化多，留意護腕是否影響活動與轉換。"],
    ["competition", "力量舉比賽或極高負重", "需另外確認硬度、固定感與比賽規則。"],
  ] },
  { key: "experience", title: "你的訓練經驗？", note: "經驗不代表必須或不需要護腕，答案只用來提供選購提醒。", options: [
    ["new", "剛開始規律訓練", "先熟悉動作與配戴方式，不必急著買最硬的款式。"],
    ["some", "已有穩定訓練習慣", "可依常做動作與自己偏好的支撐感比較。"],
    ["experienced", "訓練多年／有明確負重需求", "把固定程度、長度和訓練規則列入比對。"],
  ] },
  { key: "feel", title: "你偏好的佩戴感？", note: "護腕的硬度或固定感未必有跨品牌一致的分級，實際試戴最可靠。", options: [
    ["comfort", "輕薄、舒適、存在感低", "希望綁上後不過度束縛。"],
    ["balanced", "舒適與包覆感平衡", "想兼顧日常配戴與支撐感。"],
    ["firm", "偏硬、強固定感", "訓練中不希望手腕有明顯活動。"],
  ] },
  { key: "budget", title: "你的單雙預算大約多少？", note: "網站目前列示 DW 首批預購價 NT$399；實際價格與供應以商品頁為準。", options: [
    ["under", "NT$399 以下", "先找符合預算且規格透明的選擇。"],
    ["mid", "NT$399–599", "比較材質、尺寸、退換貨條件與佩戴需求。"],
    ["upper", "NT$600–999", "依你要的固定感和長期使用情境比較。"],
    ["open", "NT$1,000 以上／彈性", "價格不是唯一條件，先確認實際規格與需求。"],
  ] },
] as const;

type AnswerKey = (typeof questions)[number]["key"];
type Answers = Partial<Record<AnswerKey, string>>;

function Result({ answers, restart }: { answers: Answers; restart: () => void }) {
  const budgetAllows = answers.budget !== "under";
  const highFixation = answers.feel === "firm" || answers.training === "competition";
  const trainingMatches = answers.training === "push" || answers.training === "general";
  const fit = budgetAllows && !highFixation && trainingMatches;
  const experienceTip = answers.experience === "new"
    ? "訓練經驗較短時，可先熟悉動作和手腕負荷；護腕不是入門訓練的必備品。"
    : answers.experience === "experienced"
      ? "你有較明確的訓練經驗，優先用實際佩戴與訓練感受比較不同固定方式。"
      : "有穩定訓練習慣後，可依常做動作與實際佩戴感受縮小選擇。";

  let title: string;
  let copy: string;
  if (!budgetAllows) {
    title = "先以預算為優先比較。";
    copy = "你設定的預算低於網站目前列示的 DW 首批預購價 NT$399。可以先比較價格符合預算、尺寸與退換貨資訊清楚的款式，不必為了品牌超出預算。";
  } else if (highFixation) {
    title = "先比較硬度與固定感更明確的款式。";
    copy = "你選擇了高固定感或比賽／極高負重情境。DW 目前已知定位為日常重訓，拇指環較輕薄，固定感可能不如較緊的設計；沒有資料能證明它符合比賽或高負重需求。";
  } else if (!trainingMatches) {
    title = "先確認護腕是否適合你的訓練變化。";
    copy = "你選擇了動作變化較多的訓練類型。請優先確認纏繞、調整護腕是否影響動作轉換；DW 目前定位為日常健身與重量訓練，沒有資料能證明適用於所有功能性訓練情境。";
  } else {
    title = "DW 可以列入比較，但不必只看 DW。";
    copy = "你的答案偏向日常訓練與舒適／平衡的佩戴感，與 DW 已知定位較接近。仍建議比較尺寸、實際包覆感、使用方式與退換貨條件；較輕薄的拇指環也可能帶來較低的固定感。";
  }

  return (
    <div className="finder-result" aria-live="polite">
      <p className="finder-result-label">YOUR WRIST WRAP NOTES</p>
      <h2>{title}</h2>
      <p className="finder-fit">{fit ? "DW Founder Edition：可納入日常重訓護腕候選清單。" : "DW Founder Edition：不建議只憑目前資訊作為首選。"}</p>
      <p>{copy}</p>
      <p>{experienceTip}</p>
      <p><b>比較時留意：</b>常做的動作、固定感和舒適度、尺寸／拇指環、預算，以及商品頁公布的供應、出貨與退換貨規則。</p>
      {fit && <p>DW 網站目前列示約 50 × 8 cm、黑色織帶、霧面 TPU Logo、首批預購價 NT$399；這些資訊與供應狀況請以下單頁為準。</p>}
      <p className="finder-disclaimer">這是依你選擇整理的一般性選購資訊，不是醫療診斷、專業測試或個別訓練建議。護腕不保證預防傷害；若有持續不適，請停止使用並尋求合格專業協助。</p>
      <div className="finder-controls">
        {fit ? <PurchaseLink className="pill pill-dark" placement="finder_result">前往 DW 商品頁｜NT$399</PurchaseLink> : <a className="pill pill-dark" href="/guides/how-to-choose-wrist-wraps">查看選購指南</a>}
        <button className="pill pill-outline" type="button" onClick={restart}>重新作答</button>
      </div>
    </div>
  );
}

export function WristWrapFinder() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [complete, setComplete] = useState(false);
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = document.querySelector<HTMLElement>(complete ? ".finder-result" : started ? ".finder-progress" : ".finder-start");
    target?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  }, [started, step, complete]);

  function start() {
    setStarted(true);
    trackEvent("finder_start");
  }
  function choose(value: string) {
    setAnswers((current) => ({ ...current, [questions[step].key]: value }));
  }
  function next() {
    if (step < questions.length - 1) setStep((value) => value + 1);
    else {
      setComplete(true);
      trackEvent("finder_complete");
    }
  }
  function restart() {
    setAnswers({});
    setStep(0);
    setComplete(false);
    setStarted(false);
  }

  if (!started) return <div className="finder-shell finder-start"><div className="article-callout"><b>約 1 分鐘・4 個問題</b><p>依訓練、經驗、佩戴偏好與預算整理選購提醒。答案只在這個瀏覽器頁面暫存，不會建立帳號或傳送答案。</p></div><button type="button" className="pill pill-dark" onClick={start}>開始選購評估</button></div>;
  if (complete) return <div className="finder-shell"><Result answers={answers} restart={restart} /></div>;

  const question = questions[step];
  const selected = answers[question.key];
  return (
    <div className="finder-shell">
      <div className="finder-progress"><span>第 {step + 1} 題，共 {questions.length} 題</span><span>{Math.round(((step + 1) / questions.length) * 100)}%</span></div>
      <div className="finder-progress-track" aria-hidden="true"><span style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
      <div className="finder-step">
        <h2>{question.title}</h2><p>{question.note}</p>
        <fieldset className="finder-options" aria-label={question.title}>
          {question.options.map(([value, label, detail]) => <label className="finder-option" key={value}>
            <input type="radio" name={question.key} value={value} checked={selected === value} onChange={() => choose(value)} />
            <span><b>{label}</b><small>{detail}</small></span>
          </label>)}
        </fieldset>
        <div className="finder-controls">
          <button type="button" className="pill pill-outline" onClick={() => step === 0 ? setStarted(false) : setStep((value) => value - 1)}>{step === 0 ? "返回" : "上一題"}</button>
          <button type="button" className="pill pill-dark" disabled={!selected} onClick={next}>{step === questions.length - 1 ? "查看我的選購提醒" : "下一題"}</button>
        </div>
      </div>
    </div>
  );
}
