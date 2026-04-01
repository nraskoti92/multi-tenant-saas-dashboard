import type { ReactNode } from 'react';
import { useAuthorization } from '../hooks/useAuthorization';
import { AccessDenied } from '../pages/AccessDenied';
import type { FeatureKey } from '../types';

interface ProtectedRouteProps {
  feature: FeatureKey;
  children: ReactNode;
}

export function ProtectedRoute({ feature, children }: ProtectedRouteProps) {
  const { hasAccess } = useAuthorization();

  if (hasAccess(feature)) {
    return <AccessDenied />;
  }

  return <>{children}</>;
}
