import type { ReactNode } from 'react';
import { PHeading, PText } from '@porsche-design-system/components-react';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <div className="p-fluid-lg">
      <div className="mb-fluid-md">
        <PHeading size="large" tag="h1" className="mb-static-sm">
          {title}
        </PHeading>
        {description && (
          <PText size="medium" className="text-contrast-medium">
            {description}
          </PText>
        )}
      </div>
      {children}
    </div>
  );
}
