import { Link } from 'react-router-dom';
import { PHeading, PText, PButton, PIcon, PInlineNotification } from '@porsche-design-system/components-react';
import { useSession } from '../hooks/useSession';

export function AccessDenied() {
  const { session } = useSession();

  return (
    <div className="flex items-center justify-center min-h-[70vh] p-fluid-lg">
      <div className="max-w-2xl text-center">
        <div className="mb-fluid-md">
          <PIcon name="lock" size="x-large" className="text-error" />
        </div>

        <PHeading size="large" tag="h1" className="mb-static-md">
          Access Denied
        </PHeading>

        <PText size="medium" className="text-contrast-medium mb-fluid-md">
          You do not have permission to access this page.
        </PText>

        <PInlineNotification
          state="error"
          heading="Insufficient Permissions"
          description={`Your current role (${session?.user.role}) and subscription tier (${session?.tier}) do not grant access to this feature.`}
          className="mb-fluid-md text-left"
        />

        <div className="flex gap-static-md justify-center">
          <Link to="/dashboard">
            <PButton icon="home">Go to Dashboard</PButton>
          </Link>
          <PButton variant="secondary" icon="email">
            Contact Support
          </PButton>
        </div>
      </div>
    </div>
  );
}
