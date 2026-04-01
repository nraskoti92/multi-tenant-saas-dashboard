import { useBranding } from '../hooks/useBranding';

export function Header() {
  const { logoUrl, productName } = useBranding();

  return (
    <header className="bg-canvas border-b-2 border-contrast-low p-fluid-md">
      <div className="flex items-center justify-between">
        <img src={logoUrl} alt={productName} className="h-10" />
      </div>
    </header>
  );
}
