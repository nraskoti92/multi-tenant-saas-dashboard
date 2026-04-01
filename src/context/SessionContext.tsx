import { createContext, useState, type ReactNode } from 'react';
import type { SessionState, SubscriptionTier } from '../types';
import { TENANTS, MOCK_USERS } from '../data/mockData';

interface SessionContextValue {
  session: SessionState | null;
  setTenant: (tenantId: string) => void;
  setUser: (userId: string) => void;
  setTier: (tier: SubscriptionTier) => void;
}

export const SessionContext = createContext<SessionContextValue | null>(null);

const defaultTenant = TENANTS[0];
const defaultUser = MOCK_USERS[defaultTenant.tenantId][0];

const INITIAL_SESSION: SessionState = {
  tenant: defaultTenant,
  user: defaultUser,
  tier: 'Tier 1',
};

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<SessionState | null>(INITIAL_SESSION);

  const setTenant = (tenantId: string) => {
    const tenant = TENANTS.find((t) => t.tenantId === tenantId);
    if (!tenant) return;

    const users = MOCK_USERS[tenantId];
    const newUser = users[0];

    setSession((prev) => ({
      tenant,
      user: newUser,
      tier: prev?.tier || 'Tier 1',
    }));
  };

  const setUser = (userId: string) => {
    if (!session) return;

    const users = MOCK_USERS[session.tenant.tenantId];
    const user = users.find((u) => u.id === userId);

    if (user) {
      setSession((prev) => prev ? { ...prev, user } : null);
    }
  };

  const setTier = (tier: SubscriptionTier) => {
    setSession((prev) => prev ? { ...prev, tier } : null);
  };

  return (
    <SessionContext.Provider value={{ session, setTenant, setUser, setTier }}>
      {children}
    </SessionContext.Provider>
  );
}
