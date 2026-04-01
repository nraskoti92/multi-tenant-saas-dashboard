import { PSelect, PSelectOption, PText } from '@porsche-design-system/components-react';
import { useSession } from '../hooks/useSession';
import { TENANTS, MOCK_USERS } from '../data/mockData';
import type { SubscriptionTier } from '../types';

export function SessionSelector() {
  const { session, setTenant, setUser, setTier } = useSession();

  if (!session) return null;

  const currentTenantUsers = MOCK_USERS[session.tenant.tenantId];

  return (
    <div className="bg-surface border-b-2 border-contrast-low">
      <div className="flex flex-wrap items-end gap-fluid-md p-fluid-md">
        <div className="flex-1 min-w-[200px]">
          <PText size="small" className="text-contrast-medium mb-static-xs">
            Simulate Session
          </PText>
          <PSelect
            name="tenant"
            label="Tenant"
            value={session.tenant.tenantId}
            onChange={(e) => setTenant(e.detail.value)}
          >
            {TENANTS.map((tenant) => (
              <PSelectOption key={tenant.tenantId} value={tenant.tenantId}>
                {tenant.productName}
              </PSelectOption>
            ))}
          </PSelect>
        </div>

        <div className="flex-1 min-w-[200px]">
          <PSelect
            name="user"
            label="User Role"
            value={session.user.id}
            onChange={(e) => setUser(e.detail.value)}
          >
            {currentTenantUsers.map((user) => (
              <PSelectOption key={user.id} value={user.id}>
                {user.name} ({user.role})
              </PSelectOption>
            ))}
          </PSelect>
        </div>

        <div className="flex-1 min-w-[200px]">
          <PSelect
            name="tier"
            label="Subscription Tier"
            value={session.tier}
            onChange={(e) => setTier(e.detail.value as SubscriptionTier)}
          >
            <PSelectOption value="Tier 1">Tier 1</PSelectOption>
            <PSelectOption value="Tier 2">Tier 2</PSelectOption>
          </PSelect>
        </div>
      </div>
    </div>
  );
}
