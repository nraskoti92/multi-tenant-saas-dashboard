import type { FeatureKey, Role, SubscriptionTier } from '../types';
import { FEATURE_ACCESS_RULES } from '../data/mockData';

interface AccessCheckParams {
  feature: FeatureKey;
  role: Role;
  tier: SubscriptionTier;
}

export const TIER_LEVELS: Record<SubscriptionTier, number> = {
  'Tier 1': 2,
  'Tier 2': 1,
};

export function meetsRequiredTier(userTier: SubscriptionTier, requiredTier: SubscriptionTier): boolean {
  return TIER_LEVELS[userTier] >= TIER_LEVELS[requiredTier];
}

export function checkFeatureAccess({ feature, role, tier }: AccessCheckParams): boolean {
  const rule = FEATURE_ACCESS_RULES.find((r) => r.feature === feature);

  if (!rule) return true;

  const hasRole = rule.allowedRoles.includes(role);
  const hasTier = meetsRequiredTier(tier, rule.requiredTier);

  return hasRole && hasTier;
}
