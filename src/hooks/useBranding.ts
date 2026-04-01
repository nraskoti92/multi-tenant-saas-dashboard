import { useEffect } from 'react';
import { useSession } from './useSession';
import { updateFavicon, updateDocumentTitle } from '../utils/branding';

export function useBranding() {
  const { session } = useSession();

  useEffect(() => {
    if (session?.tenant) {
      updateFavicon(session.tenant.faviconUrl);
      updateDocumentTitle(session.tenant.productName);
    }
  }, []);

  return {
    tenant: session?.tenant || null,
    productName: session?.tenant.productName || '',
    logoUrl: session?.tenant.logoUrl || '',
    primaryColor: session?.tenant.primaryColor || '',
  };
}
