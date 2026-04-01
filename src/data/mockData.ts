import type { TenantConfig, FeatureAccessRule, NavigationItem, User, Case } from '../types';

export const TENANTS: TenantConfig[] = [
  {
    tenantId: 'acme-corp',
    productName: 'ACME Analytics',
    logoUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"%3E%3Ctext x="10" y="40" font-family="Porsche Next,sans-serif" font-size="32" font-weight="bold" fill="%23D5001C"%3EACME%3C/text%3E%3C/svg%3E',
    faviconUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"%3E%3Crect fill="%23D5001C" width="32" height="32" rx="4"/%3E%3Ctext x="16" y="22" font-family="Arial" font-size="18" font-weight="bold" fill="white" text-anchor="middle"%3EA%3C/text%3E%3C/svg%3E',
    primaryColor: '#D5001C',
  },
  {
    tenantId: 'techflow',
    productName: 'TechFlow Insights',
    logoUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"%3E%3Ctext x="10" y="40" font-family="Porsche Next,sans-serif" font-size="28" font-weight="bold" fill="%230066CC"%3ETechFlow%3C/text%3E%3C/svg%3E',
    faviconUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"%3E%3Crect fill="%230066CC" width="32" height="32" rx="4"/%3E%3Ctext x="16" y="22" font-family="Arial" font-size="18" font-weight="bold" fill="white" text-anchor="middle"%3ET%3C/text%3E%3C/svg%3E',
    primaryColor: '#0066CC',
  },
];

export const FEATURE_ACCESS_RULES: FeatureAccessRule[] = [
  {
    feature: 'dashboard',
    allowedRoles: ['Admin', 'Analyst', 'Viewer'],
    requiredTier: 'Tier 1',
  },
  {
    feature: 'cases',
    allowedRoles: ['Admin', 'Analyst', 'Viewer'],
    requiredTier: 'Tier 1',
  },
  {
    feature: 'reports',
    allowedRoles: ['Admin', 'Analyst'],
    requiredTier: 'Tier 2',
  },
  {
    feature: 'rules',
    allowedRoles: ['Admin', 'Analyst'],
    requiredTier: 'Tier 2',
  },
  {
    feature: 'admin-settings',
    allowedRoles: ['Admin'],
    requiredTier: 'Tier 1',
  },
  {
    feature: 'audit-logs',
    allowedRoles: ['Admin'],
    requiredTier: 'Tier 2',
  },
];

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: 'home',
    feature: 'dashboard',
  },
  {
    path: '/cases',
    label: 'Cases',
    icon: 'document',
    feature: 'cases',
  },
  {
    path: '/reports',
    label: 'Reports',
    icon: 'chart',
    feature: 'reports',
  },
  {
    path: '/rules',
    label: 'Rules',
    icon: 'configurate',
    feature: 'rules',
  },
  {
    path: '/admin',
    label: 'Admin Settings',
    icon: 'adjust',
    feature: 'admin-settings',
  },
  {
    path: '/audit',
    label: 'Audit Logs',
    icon: 'history',
    feature: 'audit-logs',
  },
];

export const MOCK_USERS: Record<string, User[]> = {
  'acme-corp': [
    {
      id: 'user-1',
      name: 'Sarah Admin',
      email: 'sarah@acme-corp.com',
      role: 'Admin',
      tenantId: 'acme-corp',
    },
    {
      id: 'user-2',
      name: 'Mike Analyst',
      email: 'mike@acme-corp.com',
      role: 'Analyst',
      tenantId: 'acme-corp',
    },
    {
      id: 'user-3',
      name: 'Jane Viewer',
      email: 'jane@acme-corp.com',
      role: 'Viewer',
      tenantId: 'acme-corp',
    },
  ],
  'techflow': [
    {
      id: 'user-4',
      name: 'Alex Admin',
      email: 'alex@techflow.com',
      role: 'Admin',
      tenantId: 'techflow',
    },
    {
      id: 'user-5',
      name: 'Chris Analyst',
      email: 'chris@techflow.com',
      role: 'Analyst',
      tenantId: 'techflow',
    },
    {
      id: 'user-6',
      name: 'Pat Viewer',
      email: 'pat@techflow.com',
      role: 'Viewer',
      tenantId: 'techflow',
    },
  ],
};

export async function getTenantConfig(tenantId: string): Promise<TenantConfig | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return TENANTS.find((t) => t.tenantId === tenantId) || null;
}

export async function getFeatureAccessRules(): Promise<FeatureAccessRule[]> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return FEATURE_ACCESS_RULES;
}

export async function getUsersByTenant(tenantId: string): Promise<User[]> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return MOCK_USERS[tenantId] || [];
}

const MOCK_CASES: Case[] = [
  { id: 'CASE-001', title: 'User authentication issue', status: 'Open', priority: 'High' },
  { id: 'CASE-002', title: 'Payment processing delay', status: 'In Progress', priority: 'Critical' },
  { id: 'CASE-003', title: 'Dashboard loading slowly', status: 'Resolved', priority: 'Medium' },
  { id: 'CASE-004', title: 'Export functionality broken', status: 'Open', priority: 'Low' },
];

export async function getCases(): Promise<Case[]> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return MOCK_CASES;
}
