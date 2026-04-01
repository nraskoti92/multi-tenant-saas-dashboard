import { PText, PButton, PIcon } from '@porsche-design-system/components-react';
import { PageLayout } from '../components/PageLayout';

const mockReports = [
  { id: 'RPT-001', name: 'Monthly Performance Report', generated: '2024-03-15', type: 'Performance' },
  { id: 'RPT-002', name: 'User Activity Summary', generated: '2024-03-14', type: 'Activity' },
  { id: 'RPT-003', name: 'Case Resolution Metrics', generated: '2024-03-13', type: 'Metrics' },
];

export function Reports() {
  return (
    <PageLayout
      title="Reports"
      description="Generate and view analytical reports"
    >
      <div className="mb-fluid-md mt-fluid-md">
        <PButton icon="add">Generate New Report</PButton>
      </div>

      <div className="grid grid-cols-1 gap-fluid-sm">
        {mockReports.map((report) => (
          <div
            key={report.id}
            className="bg-surface p-fluid-md rounded-md border-2 border-contrast-low flex items-center justify-between"
          >
            <div className="flex items-center gap-static-md">
              <PIcon name="document" size="medium" className="text-primary" />
              <div>
                <PText size="medium" weight="semibold" className="mb-static-xs">
                  {report.name}
                </PText>
                <PText size="small" className="text-contrast-medium">
                  {report.type} • Generated {report.generated}
                </PText>
              </div>
            </div>
            <PButton variant="secondary" icon="download">Download</PButton>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
