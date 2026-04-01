import { PText, PFieldset, PTextFieldWrapper, PButton } from '@porsche-design-system/components-react';
import { PageLayout } from '../components/PageLayout';
import { useSession } from '../hooks/useSession';

export function AdminSettings() {
  const { session } = useSession();

  return (
    <PageLayout
      title="Admin Settings"
      description="Manage system configuration and settings"
    >
      <div className="max-w-3xl mt-fluid-md">
        <div className="bg-surface p-fluid-md rounded-md border-2 border-contrast-low mb-fluid-md">
          <PFieldset label="Tenant Configuration">
            <div className="space-y-fluid-sm">
              <PTextFieldWrapper label="Tenant ID">
                <input type="text" value={session?.tenant.tenantId} disabled />
              </PTextFieldWrapper>

              <PTextFieldWrapper label="Product Name">
                <input type="text" value={session?.tenant.productName} />
              </PTextFieldWrapper>

              <PTextFieldWrapper label="Primary Color">
                <input type="text" value={session?.tenant.primaryColor} />
              </PTextFieldWrapper>
            </div>
          </PFieldset>
        </div>

        <div className="bg-surface p-fluid-md rounded-md border-2 border-contrast-low mb-fluid-md">
          <PFieldset label="User Management">
            <PText size="small" className="text-contrast-medium mb-static-md">
              Manage user roles, permissions, and access levels across your organization.
            </PText>
            <PButton variant="secondary" icon="group">
              Manage Users
            </PButton>
          </PFieldset>
        </div>

        <div className="bg-surface p-fluid-md rounded-md border-2 border-contrast-low">
          <PFieldset label="Security Settings">
            <PText size="small" className="text-contrast-medium mb-static-md">
              Configure authentication, session timeouts, and security policies.
            </PText>
            <PButton variant="secondary" icon="lock">
              Security Settings
            </PButton>
          </PFieldset>
        </div>

        <div className="mt-fluid-md flex gap-static-md">
          <PButton>Save Changes</PButton>
          <PButton variant="secondary">Cancel</PButton>
        </div>
      </div>
    </PageLayout>
  );
}
