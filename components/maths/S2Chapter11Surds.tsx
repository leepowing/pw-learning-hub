import type { ReactNode } from 'react';

export function simplifyRoot(n: number): { coefficient: number; radicand: number } {
  if (!Number.isInteger(n) || n < 1 || n > 10000) {
    throw new Error('Use a positive integer from 1 to 10000.');
  }
  for (let coefficient = Math.floor(Math.sqrt(n)); coefficient >= 1; coefficient--) {
    if (n % (coefficient * coefficient) === 0) {
      return { coefficient, radicand: n / (coefficient * coefficient) };
    }
  }
  return { coefficient: 1, radicand: n };
}

function Label({ x, y, children }: { x: number; y: number; children: ReactNode }) {
  return <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize={20} fontFamily="Arial, sans-serif" fill="#172d50">{children}</text>;
}

export function SurdSquare({ n }: { n: number }) {
  const { coefficient: k, radicand: r } = simplifyRoot(n);
  const left = 130, top = 75, edge = 210, cell = edge / k;
  const length = r === 1 ? String(k) : `${k === 1 ? '' : k}√${r}`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 390" role="img" aria-label={`A square of area ${n}, divided into ${k*k} equal squares of area ${r}. Each small square has side square root of ${r}; the whole side is ${length}.`} style={{ display: 'block', width: '100%', height: 'auto', maxWidth: 530, margin: '18px auto' }}>
      <Label x={235} y={33}>Total area = {n} square units</Label>
      {Array.from({ length: k*k }, (_, i) => {
        const row = Math.floor(i / k), column = i % k;
        return <rect key={`cell-${i}`} x={left+column*cell} y={top+row*cell} width={cell} height={cell} fill={(row+column)%2 === 0 ? '#ccfbf1' : '#ecfeff'} stroke="#0f766e" strokeWidth={1.5} />;
      })}
      <rect x={left} y={top} width={edge} height={edge} fill="none" stroke="#172d50" strokeWidth={2.5} />
      <Label x={235} y={318}>Side length = √{n} = {length}</Label>
      <Label x={235} y={359}>Each small square has area {r}.</Label>
    </svg>
  );
}
