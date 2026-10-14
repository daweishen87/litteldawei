import { site, buyLabel } from "@/config/site";

export function BuyButton({ className = "btn", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <a className={className} style={style} href={site.links.buy} target="_blank" rel="noopener noreferrer">
      {buyLabel}
    </a>
  );
}

export function BuyNote() {
  return <p className="note">點擊後前往 7-ELEVEN 賣貨便下單</p>;
}

export function Price({ light = false }: { light?: boolean }) {
  const c = light ? { color: "#a39f97" } : undefined;
  return (
    <div className="price">
      <b>NT${site.product.price}</b>
      <s style={c}>NT${site.product.listPrice}</s>
      <span style={c}>首批預購價</span>
    </div>
  );
}
