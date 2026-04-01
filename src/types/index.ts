export type Role = 'Admin' | 'Analyst' | 'Viewer';

export type SubscriptionTier = 'Tier 1' | 'Tier 2';

export type FeatureKey =
  | 'dashboard'
  | 'cases'
  | 'reports'
  | 'rules'
  | 'admin-settings'
  | 'audit-logs';

export interface TenantConfig {
  tenantId: string;
  productName: string;
  logoUrl: string;
  faviconUrl: string;
  primaryColor: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  tenantId: string;
}

export interface SessionState {
  tenant: TenantConfig;
  user: User;
  tier: SubscriptionTier;
}

export interface FeatureAccessRule {
  feature: FeatureKey;
  allowedRoles: Role[];
  requiredTier: SubscriptionTier;
}

export interface NavigationItem {
  path: string;
  label: string;
  icon: string;
  feature: FeatureKey;
}

export interface Case {
  id: string;
  title: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
}

export type UseAsyncState<T> =
  | { status: 'idle'; data: null; error: null }
  | { status: 'loading'; data: null; error: null }
  | { status: 'success'; data: T; error: null }
  | { status: 'error'; data: null; error: Error };
