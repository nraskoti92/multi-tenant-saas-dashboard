import { PText, PIcon } from '@porsche-design-system/components-react';
import { PageLayout } from '../components/PageLayout';
import { useSession } from '../hooks/useSession';

export function Dashboard() {
  const { session } = useSession();

  return (
    <PageLayout
      title="Dashboard"
      description="Overview of your key metrics and activities"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-fluid-md mt-fluid-md">
        <div className="bg-surface p-fluid-md rounded-md border-2 border-contrast-low">
          <div className="flex items-center gap-static-md mb-static-md">
            <PIcon name="chart" size="medium" className="text-primary" />
            <PText size="medium" weight="semibold">Total Cases</PText>
          </div>
          <PText size="x-large" weight="bold" className="text-primary">
            1,247
          </PText>
        </div>

        <div className="bg-surface p-fluid-md rounded-md border-2 border-contrast-low">
          <div className="flex items-center gap-static-md mb-static-md">
            <PIcon name="clock" size="medium" className="text-primary" />
            <PText size="medium" weight="semibold">Pending</PText>
          </div>
          <PText size="x-large" weight="bold" className="text-primary">
            83
          </PText>
        </div>

        <div className="bg-surface p-fluid-md rounded-md border-2 border-contrast-low">
          <div className="flex items-center gap-static-md mb-static-md">
            <PIcon name="check" size="medium" className="text-success" />
            <PText size="medium" weight="semibold">Resolved</PText>
          </div>
          <PText size="x-large" weight="bold" className="text-success">
            1,164
          </PText>
        </div>
      </div>

      <div className="mt-fluid-lg bg-surface p-fluid-md rounded-md border-2 border-contrast-low">
        <PText size="medium" weight="semibold" className="mb-static-md">
          Current Session Info
        </PText>
        <div className="space-y-static-sm">
          <PText size="small">
            <span className="text-contrast-medium">Tenant:</span>{' '}
            {session?.tenant.productName}
          </PText>
          <PText size="small">
            <span className="text-contrast-medium">User:</span>{' '}
            {session?.user.name} ({session?.user.role})
          </PText>
          <PText size="small">
            <span className="text-contrast-medium">Tier:</span> {session?.tier}
          </PText>
        </div>
      </div>
    </PageLayout>
  );
}
