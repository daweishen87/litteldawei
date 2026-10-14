const INK = "#121212";

function Limb({ d }: { d: string }) {
  return (
    <>
      <path d={d} stroke={INK} strokeWidth={14} strokeLinecap="round" fill="none" />
      <path d={d} stroke="#fff" strokeWidth={8} strokeLinecap="round" fill="none" />
    </>
  );
}

function Plates({ y }: { y: number }) {
  const s = { fill: "#fff", stroke: INK, strokeWidth: 3 } as const;
  return (
    <>
      <line x1={22} x2={238} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
      <rect x={4} y={y - 24} width={14} height={48} rx={6} {...s} />
      <rect x={18} y={y - 17} width={10} height={34} rx={5} {...s} />
      <rect x={242} y={y - 24} width={14} height={48} rx={6} {...s} />
      <rect x={232} y={y - 17} width={10} height={34} rx={5} {...s} />
    </>
  );
}

function Body() {
  return (
    <g transform="translate(35 26) scale(.85)">
      <g className="bodyg">
        <path
          d="M60 120 C40 118 40 92 62 90 C60 68 90 60 104 74 C112 56 144 58 150 78 C172 72 188 92 176 108 C192 120 180 142 160 142 L76 142 C56 142 48 130 60 120 Z"
          fill="#fff" stroke={INK} strokeWidth={3.5} strokeLinejoin="round"
        />
        <path d="M66 82 Q114 68 166 80 L166 90 Q114 78 66 94 Z" fill="#fff" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
        <path d="M166 82 L184 74 L178 92 Z" fill="#fff" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
        <circle cx={100} cy={102} r={3.8} fill={INK} />
        <circle cx={130} cy={102} r={3.8} fill={INK} />
        <path className="m-smile" d="M108 112 Q115 121 122 112" stroke={INK} strokeWidth={3} strokeLinecap="round" fill="none" />
        <g className="m-strug" stroke={INK} strokeWidth={3} strokeLinecap="round" fill="none">
          <path d="M104 117 Q109 110 114 117 T124 117" />
          <path d="M90 94 L106 99" />
          <path d="M140 94 L124 99" />
          <path d="M154 86 q-6 9 0 13 q6 -4 0 -13 z" fill="#fff" />
        </g>
      </g>
    </g>
  );
}

function Press({ kind, label }: { kind: "bench" | "shoulder" | "squash"; label: string }) {
  const s = { fill: "#fff", stroke: INK, strokeWidth: 3.5, strokeLinejoin: "round" } as const;
  return (
    <svg viewBox="0 0 260 190" className={`px px-${kind}`} role="img" aria-label={label}>
      {kind === "bench" && (
        <>
          <rect x={30} y={150} width={200} height={14} rx={5} {...s} />
          <line x1={52} x2={52} y1={164} y2={186} stroke={INK} strokeWidth={5} strokeLinecap="round" />
          <line x1={208} x2={208} y1={164} y2={186} stroke={INK} strokeWidth={5} strokeLinecap="round" />
        </>
      )}
      {kind === "shoulder" && (
        <>
          <line x1={196} x2={214} y1={150} y2={84} stroke={INK} strokeWidth={14} strokeLinecap="round" />
          <rect x={64} y={150} width={140} height={14} rx={5} {...s} />
          <line x1={90} x2={90} y1={164} y2={186} stroke={INK} strokeWidth={5} strokeLinecap="round" />
          <line x1={180} x2={180} y1={164} y2={186} stroke={INK} strokeWidth={5} strokeLinecap="round" />
        </>
      )}
      {kind === "squash" && <line x1={20} x2={240} y1={150} y2={150} stroke={INK} strokeWidth={4} strokeLinecap="round" />}
      <Body />
      {kind !== "squash" && (
        <>
          <g className="arm"><Limb d="M90 114 L90 40" /></g>
          <g className="arm"><Limb d="M170 114 L170 40" /></g>
        </>
      )}
      <g className="bar">
        <Plates y={40} />
        {kind !== "squash" && (
          <>
            <circle cx={90} cy={40} r={9} {...s} />
            <circle cx={170} cy={40} r={9} {...s} />
          </>
        )}
      </g>
    </svg>
  );
}

function Curl({ label }: { label: string }) {
  const s = { fill: "#fff", stroke: INK, strokeWidth: 3 } as const;
  return (
    <svg viewBox="0 0 260 190" className="px px-curl" role="img" aria-label={label}>
      <line x1={20} x2={240} y1={150} y2={150} stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <Body />
      <Limb d="M84 118 L72 156" />
      <Limb d="M178 118 L192 138" />
      <g className="fore">
        <Limb d="M192 138 L198 174" />
        <line x1={184} x2={212} y1={176} y2={176} stroke={INK} strokeWidth={5} strokeLinecap="round" />
        <rect x={178} y={166} width={8} height={20} rx={3} {...s} />
        <rect x={210} y={166} width={8} height={20} rx={3} {...s} />
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
          <figure><Press kind="bench" label="白色小人在做臥推，推上去再推下來，最後推不動" /><figcaption>臥推</figcaption></figure>
          <figure><Press kind="shoulder" label="白色小人在做肩推，推上去再推下來，最後推不動" /><figcaption>肩推</figcaption></figure>
          <figure><Press kind="squash" label="白色小人被槓鈴壓扁，然後彈回來" /><figcaption>被壓扁了</figcaption></figure>
          <figure><Curl label="白色小人在做二頭彎舉" /><figcaption>二頭彎舉</figcaption></figure>
        </div>
        <p className="note">卡通示意。護腕不能取代正確的動作與適當的重量，也不保證預防受傷。</p>
      </div>
    </section>
  );
}
