const INK = "#171717";
const CREAM = "#fffdf8";
const BAND = "#d9c7a5";

type PressKind = "bench" | "shoulder" | "squash";
type Pose = "bench" | "upright" | "squash";

function IllustrationDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0.8" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#faf7f1" />
        <stop offset="100%" stopColor="#ded8ce" />
      </linearGradient>
      <linearGradient id={`${id}-plate`} x1="0" y1="0" x2="1" y2="0.8">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="48%" stopColor="#f3f0ea" />
        <stop offset="100%" stopColor="#c9c3ba" />
      </linearGradient>
      <linearGradient id={`${id}-bench`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#ddd7cd" />
      </linearGradient>
      <pattern id={`${id}-band-pattern`} width="29" height="16" patternUnits="userSpaceOnUse">
        <path d="M6 10 C2 7 4 3 7 6 C10 3 12 7 8 10 Z" fill="none" stroke={INK} strokeWidth="1.4" />
        <path d="M20 4v7m-3.5-3.5h7" fill="none" stroke={INK} strokeWidth="1.3" strokeLinecap="round" />
      </pattern>
      <filter id={`${id}-shadow`} x="-30%" y="-50%" width="160%" height="220%">
        <feGaussianBlur stdDeviation="4" />
      </filter>
    </defs>
  );
}

function Limb({ d, width = 18 }: { d: string; width?: number }) {
  return (
    <g className="limb-shape">
      <path d={d} fill="none" stroke={INK} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke="#f7f3ed" strokeWidth={width * 0.57} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0.9} />
    </g>
  );
}

function Mascot({ pose, id }: { pose: Pose; id: string }) {
  const lying = pose === "bench";
  const squashed = pose === "squash";
  const body = lying
    ? "M69 151 C55 141 60 124 74 116 C68 101 81 87 98 89 C107 74 129 75 141 89 C155 75 177 81 180 97 C199 91 216 103 214 120 C231 127 232 144 217 153 C211 166 194 170 176 168 L91 169 C78 168 70 162 69 151 Z"
    : squashed
      ? "M84 157 C70 149 73 134 86 127 C78 114 85 101 100 100 C105 87 121 85 134 94 C147 83 167 89 170 102 C186 98 201 109 198 123 C213 132 208 148 195 154 C179 166 105 166 84 157 Z"
      : "M88 157 C74 148 78 130 91 123 C83 108 92 93 108 92 C114 76 133 73 145 87 C158 73 180 80 181 96 C199 94 212 108 206 124 C220 136 213 153 199 158 C177 169 112 170 88 157 Z";
  const band = lying
    ? "M82 105 Q145 86 207 103 L203 115 Q145 101 86 118 Z"
    : "M95 103 Q148 82 199 100 L195 112 Q146 97 99 116 Z";
  const faceY = lying ? 134 : 132;

  return (
    <g className={`mascot-body mascot-${pose}`}>
      <path d={body} fill={`url(#${id}-body)`} stroke={INK} strokeWidth={3.4} strokeLinejoin="round" />
      <path
        d={lying ? "M81 119 C101 101 124 103 137 109" : "M100 122 C116 104 136 105 147 110"}
        fill="none"
        stroke="#ffffff"
        strokeWidth={4}
        strokeLinecap="round"
        opacity={0.92}
      />
      <path
        d={lying ? "M84 158 Q143 170 202 156" : "M99 159 Q148 169 196 157"}
        fill="none"
        stroke="#bdb5aa"
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.55}
      />
      <path d={band} fill={BAND} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      <path d={band} fill={`url(#${id}-band-pattern)`} opacity={0.92} />
      <path d={band} fill="none" stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
      <path
        d={lying ? "M197 102 L216 97 L209 116 Z" : "M191 99 L209 92 L205 112 Z"}
        fill={BAND}
        stroke={INK}
        strokeWidth={2.6}
        strokeLinejoin="round"
      />
      <path
        d={lying ? "M201 104 Q211 104 213 111" : "M197 101 Q207 101 207 108"}
        fill="none"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.8}
      />
      <ellipse cx={lying ? 113 : 111} cy={faceY + 8} rx={7} ry={3.5} fill="#e8c4bb" opacity={0.72} />
      <ellipse cx={lying ? 176 : 178} cy={faceY + 8} rx={7} ry={3.5} fill="#e8c4bb" opacity={0.72} />
      <circle cx={lying ? 128 : 127} cy={faceY} r={4.1} fill={INK} />
      <circle cx={lying ? 162 : 161} cy={faceY} r={4.1} fill={INK} />
      <circle cx={lying ? 127 : 126} cy={faceY - 1.2} r={1.1} fill="#ffffff" />
      <circle cx={lying ? 161 : 160} cy={faceY - 1.2} r={1.1} fill="#ffffff" />
      <path
        d={`M137 ${faceY + 5} Q145 ${faceY + 14} 153 ${faceY + 5}`}
        fill="none"
        stroke={INK}
        strokeWidth={3.1}
        strokeLinecap="round"
      />
      {(squashed || lying) && (
        <g className="effort-details" fill="none" stroke={INK} strokeLinecap="round">
          <path d="M225 119q7 5 3 13M231 115q8 5 4 13" strokeWidth={2.2} />
          <path d="M92 116q-6 4-3 10" strokeWidth={1.8} />
        </g>
      )}
      {!squashed && (
        <path
          d={lying ? "M184 125 C180 132 181 138 186 139 C191 138 191 132 184 125 Z" : "M190 120 C185 128 186 134 191 135 C196 134 197 128 190 120 Z"}
          fill="#ffffff"
          stroke={INK}
          strokeWidth={2.2}
        />
      )}
    </g>
  );
}

function PlateStack({ id }: { id: string }) {
  return (
    <g>
      <path d="M42 -30 C31 -27 28 -12 28 0 C28 12 31 27 42 30 L59 25 L59 -25 Z" fill={`url(#${id}-plate)`} stroke={INK} strokeWidth={3.2} />
      <ellipse cx={42} cy={0} rx={14} ry={30} fill={`url(#${id}-plate)`} stroke={INK} strokeWidth={3.2} />
      <ellipse cx={42} cy={0} rx={8} ry={22} fill="none" stroke={INK} strokeWidth={2.5} />
      <path d="M36 -20 Q28 0 36 20" fill="none" stroke="#ffffff" strokeWidth={3} strokeLinecap="round" opacity={0.9} />
      <rect x={59} y={-25} width={9} height={50} rx={4} fill="#d8d2c9" stroke={INK} strokeWidth={2.6} />
      <rect x={69} y={-20} width={8} height={40} rx={3.5} fill="#f9f7f2" stroke={INK} strokeWidth={2.3} />
      <ellipse cx={41} cy={0} rx={4.5} ry={8} fill="#a9a39a" stroke={INK} strokeWidth={1.8} />
    </g>
  );
}

function Barbell({ id, y, grips = true }: { id: string; y: number; grips?: boolean }) {
  return (
    <g className="press-bar">
      <line x1={45} x2={275} y1={y} y2={y} stroke={INK} strokeWidth={7} strokeLinecap="round" />
      <line x1={78} x2={242} y1={y - 2} y2={y - 2} stroke="#ffffff" strokeWidth={1.8} strokeLinecap="round" opacity={0.82} />
      <g transform={`translate(0 ${y})`}><PlateStack id={id} /></g>
      <g transform={`translate(320 ${y}) scale(-1 1)`}><PlateStack id={id} /></g>
      {grips && (
        <g className="bar-grips">
          <circle cx={111} cy={y} r={9} fill="#f5f1e9" stroke={INK} strokeWidth={3} />
          <circle cx={209} cy={y} r={9} fill="#f5f1e9" stroke={INK} strokeWidth={3} />
          <path d={`M106 ${y - 2}h10 M204 ${y - 2}h10`} stroke="#ffffff" strokeWidth={2} strokeLinecap="round" />
        </g>
      )}
    </g>
  );
}

function Bench({ id }: { id: string }) {
  return (
    <g className="fixed-equipment">
      <ellipse cx={157} cy={201} rx={111} ry={8} fill="#b9b2a8" opacity={0.34} filter={`url(#${id}-shadow)`} />
      <path d="M43 168 L234 168 L270 184 L78 194 L43 181 Z" fill={`url(#${id}-bench)`} stroke={INK} strokeWidth={3.4} strokeLinejoin="round" />
      <path d="M43 181 L78 194 L270 184 L268 194 L79 207 L43 194 Z" fill="#d8d1c7" stroke={INK} strokeWidth={3.2} strokeLinejoin="round" />
      <path d="M62 194 L62 222 Q62 227 68 227 L76 226 L78 207" fill="#ece7df" stroke={INK} strokeWidth={3.2} strokeLinejoin="round" />
      <path d="M230 197 L229 222 Q229 227 235 226 L243 225 L244 196" fill="#ece7df" stroke={INK} strokeWidth={3.2} strokeLinejoin="round" />
      <path d="M50 173 L226 173" stroke="#ffffff" strokeWidth={2.4} strokeLinecap="round" opacity={0.9} />
    </g>
  );
}

function ShoulderSeat({ id }: { id: string }) {
  return (
    <g className="fixed-equipment">
      <ellipse cx={159} cy={211} rx={80} ry={7} fill="#b9b2a8" opacity={0.32} filter={`url(#${id}-shadow)`} />
      <path d="M204 126 L229 119 L238 176 L215 180 Z" fill="#e8e3da" stroke={INK} strokeWidth={3.2} strokeLinejoin="round" />
      <path d="M111 169 L205 169 L222 181 L123 187 L106 180 Z" fill={`url(#${id}-bench)`} stroke={INK} strokeWidth={3.2} strokeLinejoin="round" />
      <path d="M123 185 L119 211 L132 213 L141 186 M190 185 L200 210 L212 207 L205 182" fill="#d8d2c8" stroke={INK} strokeWidth={3.2} strokeLinejoin="round" />
      <path d="M102 213 L137 213 M197 211 L222 207" stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <path d="M212 128 L226 125 L232 169" fill="none" stroke="#ffffff" strokeWidth={2.2} strokeLinecap="round" />
    </g>
  );
}

function Press({ kind, label }: { kind: PressKind; label: string }) {
  const id = `mascot-${kind}`;
  const pose: Pose = kind === "bench" ? "bench" : kind === "squash" ? "squash" : "upright";
  const barY = kind === "shoulder" ? 42 : 48;

  return (
    <svg viewBox="0 0 320 238" className={`px px-${kind}`} role="img" aria-label={label}>
      <IllustrationDefs id={id} />
      {kind === "bench" ? <Bench id={id} /> : kind === "shoulder" ? <ShoulderSeat id={id} /> : null}
      {kind !== "squash" && (
        <>
          <g className="press-arm press-arm-left">
            <Limb d={`M111 ${kind === "bench" ? 131 : 126} C106 107 103 82 111 ${barY}`} />
          </g>
          <g className="press-arm press-arm-right">
            <Limb d={`M209 ${kind === "bench" ? 131 : 126} C214 107 217 82 209 ${barY}`} />
          </g>
        </>
      )}
      {kind === "squash" && (
        <g className="static-arms">
          <Limb d="M111 120 Q89 106 79 89" width={16} />
          <Limb d="M207 120 Q228 108 241 92" width={16} />
        </g>
      )}
      <Mascot pose={pose} id={id} />
      {kind === "squash" ? <Barbell id={id} y={39} grips={false} /> : <Barbell id={id} y={barY} />}
      {kind === "squash" && <path d="M37 211 H283" stroke="#b6afa5" strokeWidth={2.4} strokeLinecap="round" />}
    </svg>
  );
}

function Curl({ label }: { label: string }) {
  const id = "mascot-curl";
  return (
    <svg viewBox="0 0 320 238" className="px px-curl" role="img" aria-label={label}>
      <IllustrationDefs id={id} />
      <ellipse cx={159} cy={210} rx={76} ry={7} fill="#b9b2a8" opacity={0.3} filter="url(#mascot-curl-shadow)" />
      <path d="M110 170 L104 201 L118 204 L132 174 M185 170 L195 201 L209 199 L203 168" fill="#d8d2c8" stroke={INK} strokeWidth={3.2} strokeLinejoin="round" />
      <path d="M93 204 H123 M190 202 H218" stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <g className="curl-lower-arm"><Limb d="M105 130 Q86 146 94 166" width={17} /></g>
      <Mascot pose="upright" id={id} />
      <g className="curl-upper-arm">
        <Limb d="M191 126 Q218 138 214 162" width={17} />
        <g className="curl-weight">
          <path d="M212 162 H262" stroke={INK} strokeWidth={6} strokeLinecap="round" />
          <path d="M222 150 Q218 162 222 174 H231 V150 Z M250 150 Q246 162 250 174 H259 V150 Z" fill={`url(#${id}-plate)`} stroke={INK} strokeWidth={3} />
          <path d="M225 153 V170 M253 153 V170" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" />
          <circle cx={237} cy={162} r={4.5} fill="#bdb7ae" stroke={INK} strokeWidth={2} />
        </g>
      </g>
    </svg>
  );
}

export function Squad() {
  return (
    <section id="squad" className="squad">
      <div className="wrap">
        <div className="squad-heading">
          <p className="squad-kicker">TRAINING IN MOTION</p>
          <h2>手腕也在出力。</h2>
          <p className="squad-intro">把每一下出力，都畫成看得見的動作。</p>
        </div>
        <div className="squad-primary-grid">
          <figure className="exercise-card exercise-featured">
            <Press kind="bench" label="圓潤立體感頭帶吉祥物正在做臥推，槓鈴自然上下移動" />
            <figcaption><span>01</span> 臥推</figcaption>
          </figure>
          <figure className="exercise-card exercise-featured">
            <Press kind="shoulder" label="圓潤立體感頭帶吉祥物正在做肩推，槓鈴自然上下移動" />
            <figcaption><span>02</span> 肩推</figcaption>
          </figure>
        </div>
        <div className="squad-secondary-grid">
          <figure className="exercise-card">
            <Press kind="squash" label="圓潤頭帶吉祥物被槓鈴壓扁再彈起的趣味示意" />
            <figcaption>被壓扁了</figcaption>
          </figure>
          <figure className="exercise-card">
            <Curl label="圓潤頭帶吉祥物正在做二頭彎舉" />
            <figcaption>二頭彎舉</figcaption>
          </figure>
        </div>
        <p className="note squad-note">卡通示意。護腕不能取代正確的動作與適當的重量，也不保證預防受傷。</p>
      </div>
    </section>
  );
}
