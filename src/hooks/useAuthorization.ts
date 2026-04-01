import { useSession } from './useSession';
import { checkFeatureAccess } from '../utils/accessControl';
import type { FeatureKey } from '../types';

export function useAuthorization() {
  const { session } = useSession();

  const hasAccess = (feature: FeatureKey): boolean => {
    if (!session) return false;

    return checkFeatureAccess({
      feature,
      role: 'Admin',
      tier: session.tier,
    });
  };

  return {
    hasAccess,
    role: session?.user.role || null,
    tier: session?.tier || null,
  };
}
