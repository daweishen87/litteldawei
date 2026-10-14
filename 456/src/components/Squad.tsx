const INK = "#171717";
const CREAM = "#fffdf8";
const BAND = "#d8c9ad";

type Pose = "bench" | "stand" | "squash" | "curl";

type LimbProps = { d: string; strokeWidth?: number };

function Limb({ d, strokeWidth = 15 }: LimbProps) {
  return (
    <>
      <path d={d} stroke={INK} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
      <path d={d} stroke={CREAM} strokeWidth={strokeWidth * 0.55} strokeLinecap="round" fill="none" />
    </>
  );
}

function Plates({ y, showGrips = false }: { y: number; showGrips?: boolean }) {
  const plate = { fill: CREAM, stroke: INK, strokeWidth: 3.5 } as const;
  return (
    <g className="bar">
      <line x1={22} x2={258} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
      {showGrips && (
        <>
          <circle cx={103} cy={y} r={8} fill={CREAM} stroke={INK} strokeWidth={3} />
          <circle cx={177} cy={y} r={8} fill={CREAM} stroke={INK} strokeWidth={3} />
        </>
      )}
      <rect x={5} y={y - 25} width={14} height={50} rx={7} {...plate} />
      <rect x={20} y={y - 19} width={11} height={38} rx={5.5} {...plate} />
      <rect x={249} y={y - 25} width={14} height={50} rx={7} {...plate} />
      <rect x={238} y={y - 19} width={11} height={38} rx={5.5} {...plate} />
    </g>
  );
}

function Mascot({ pose }: { pose: Pose }) {
  const lying = pose === "bench";
  const squashing = pose === "squash";
  return (
    <g className="bodyg">
      {lying ? (
        <path
          d="M65 132 C55 119 67 101 86 102 C91 85 115 81 128 94 C140 81 164 85 168 101 C190 98 207 111 201 127 C216 137 207 153 188 154 L81 154 C63 154 54 143 65 132 Z"
          fill={CREAM} stroke={INK} strokeWidth={3.5} strokeLinejoin="round"
        />
      ) : (
        <path
          d="M87 145 C74 133 80 112 94 106 C91 87 110 75 127 84 C139 68 164 75 166 91 C184 88 197 103 190 119 C204 134 195 154 178 158 C155 169 112 164 94 157 C89 154 86 150 87 145 Z"
          fill={CREAM} stroke={INK} strokeWidth={3.5} strokeLinejoin="round"
        />
      )}
      {lying ? (
        <>
          <path d="M76 105 Q129 89 190 105 L190 114 Q132 99 76 116 Z" fill={BAND} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
          <path d="M184 103 L203 98 L197 116 Z" fill={BAND} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
          <circle cx={96} cy={106} r={2.2} fill={INK} /><circle cx={116} cy={101} r={2.2} fill={INK} />
          <circle cx={140} cy={101} r={2.2} fill={INK} /><circle cx={163} cy={103} r={2.2} fill={INK} />
          <circle cx={126} cy={127} r={3.8} fill={INK} /><circle cx={155} cy={127} r={3.8} fill={INK} />
          <ellipse cx={111} cy={134} rx={6} ry={3} fill="#e7b7ad" opacity={0.7} />
          <ellipse cx={170} cy={134} rx={6} ry={3} fill="#e7b7ad" opacity={0.7} />
          <path className="m-smile" d="M134 138 Q141 146 149 138" stroke={INK} strokeWidth={3} strokeLinecap="round" fill="none" />
          <g className="m-strug" stroke={INK} strokeWidth={2.5} strokeLinecap="round" fill="none">
            <path d="M132 140 Q138 135 143 141 T153 141" />
            <path d="M108 123 l8 -3 M176 123 l-8 -3" />
          </g>
        </>
      ) : (
        <>
          <path d="M96 91 Q139 76 182 91 L179 101 Q139 88 99 102 Z" fill={BAND} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
          <path d="M177 89 L196 82 L190 102 Z" fill={BAND} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
          <circle cx={112} cy={93} r={2.2} fill={INK} /><circle cx={132} cy={88} r={2.2} fill={INK} />
          <circle cx={154} cy={88} r={2.2} fill={INK} /><circle cx={173} cy={92} r={2.2} fill={INK} />
          <circle cx={119} cy={120} r={3.8} fill={INK} /><circle cx={157} cy={120} r={3.8} fill={INK} />
          <ellipse cx={103} cy={127} rx={7} ry={3.5} fill="#e7b7ad" opacity={0.7} />
          <ellipse cx={174} cy={127} rx={7} ry={3.5} fill="#e7b7ad" opacity={0.7} />
          <path className="m-smile" d="M130 131 Q138 139 146 131" stroke={INK} strokeWidth={3} strokeLinecap="round" fill="none" />
          {squashing && (
            <g className="m-strug" stroke={INK} strokeWidth={2.5} strokeLinecap="round" fill="none">
              <path d="M128 134 Q135 129 141 135 T151 135" />
              <path d="M107 112 l9 3 M168 115 l9 -3" />
              <path d="M201 101 q-7 10 0 15 q7 -5 0 -15 z" fill={CREAM} />
            </g>
          )}
        </>
      )}
    </g>
  );
}

function Press({ kind, label }: { kind: "bench" | "shoulder" | "squash"; label: string }) {
  const equipment = { fill: CREAM, stroke: INK, strokeWidth: 3.5, strokeLinejoin: "round" } as const;
  const barY = kind === "shoulder" ? 32 : 42;
  const pose: Pose = kind === "bench" ? "bench" : kind === "squash" ? "squash" : "stand";
  return (
    <svg viewBox="0 0 280 205" className={`px px-${kind}`} role="img" aria-label={label}>
      {kind === "bench" && (
        <>
          <ellipse cx={140} cy={180} rx={105} ry={7} fill="#d9d4cb" opacity={0.65} />
          <rect x={35} y={153} width={210} height={15} rx={6} fill="#eee9df" stroke={INK} strokeWidth={3.5} />
          <line x1={58} x2={58} y1={168} y2={192} stroke={INK} strokeWidth={5} strokeLinecap="round" />
          <line x1={222} x2={222} y1={168} y2={192} stroke={INK} strokeWidth={5} strokeLinecap="round" />
        </>
      )}
      {kind === "shoulder" && (
        <>
          <ellipse cx={140} cy={184} rx={66} ry={7} fill="#d9d4cb" opacity={0.65} />
          <path d="M111 157 L105 178 M169 157 L175 178" stroke={INK} strokeWidth={11} strokeLinecap="round" />
          <path d="M95 180 Q105 174 116 180 M164 180 Q175 174 186 180" stroke={INK} strokeWidth={6} strokeLinecap="round" />
        </>
      )}
      {kind === "squash" && <line x1={32} x2={248} y1={183} y2={183} stroke="#aaa49a" strokeWidth={3} strokeLinecap="round" />}
      {kind !== "squash" && (
        <>
          <g className="arm"><Limb d={`M103 ${kind === "bench" ? 112 : 107} L103 ${barY}`} /></g>
          <g className="arm"><Limb d={`M177 ${kind === "bench" ? 112 : 107} L177 ${barY}`} /></g>
        </>
      )}
      <Mascot pose={pose} />
      <Plates y={kind === "squash" ? 39 : barY} showGrips={kind !== "squash"} />
    </svg>
  );
}

function Curl({ label }: { label: string }) {
  const plate = { fill: CREAM, stroke: INK, strokeWidth: 3 } as const;
  return (
    <svg viewBox="0 0 280 205" className="px px-curl" role="img" aria-label={label}>
      <ellipse cx={140} cy={184} rx={68} ry={7} fill="#d9d4cb" opacity={0.65} />
      <path d="M112 157 L107 178 M168 157 L173 178" stroke={INK} strokeWidth={11} strokeLinecap="round" />
      <path d="M96 180 Q107 174 118 180 M162 180 Q173 174 184 180" stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <g className="arm"><Limb d="M101 115 L82 145" /></g>
      <Mascot pose="curl" />
      <g className="fore">
        <Limb d="M174 116 L190 143" />
        <Limb d="M190 143 L196 166" strokeWidth={13} />
        <line x1={182} x2={220} y1={169} y2={169} stroke={INK} strokeWidth={5} strokeLinecap="round" />
        <rect x={178} y={158} width={9} height={22} rx={4} {...plate} />
        <rect x={215} y={158} width={9} height={22} rx={4} {...plate} />
        <circle cx={196} cy={169} r={4} fill={INK} />
      </g>
    </svg>
  );
}

export function Squad() {
  return (
    <section id="squad" className="squad">
      <div className="wrap">
        <h2>手腕也在出力。</h2>
        <div className="squad-grid">
          <figure><Press kind="bench" label="Q 版頭帶吉祥物正在做臥推，槓鈴上下往復" /><figcaption>臥推</figcaption></figure>
          <figure><Press kind="shoulder" label="Q 版頭帶吉祥物正在做肩推，槓鈴上下往復" /><figcaption>肩推</figcaption></figure>
          <figure><Press kind="squash" label="Q 版頭帶吉祥物被槓鈴壓扁再彈起" /><figcaption>被壓扁了</figcaption></figure>
          <figure><Curl label="Q 版頭帶吉祥物正在做二頭彎舉" /><figcaption>二頭彎舉</figcaption></figure>
        </div>
        <p className="note">卡通示意。護腕不能取代正確的動作與適當的重量，也不保證預防受傷。</p>
      </div>
    </section>
  );
}
