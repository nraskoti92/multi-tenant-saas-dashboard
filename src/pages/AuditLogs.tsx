import { PText, PTag } from '@porsche-design-system/components-react';
import { PageLayout } from '../components/PageLayout';

const mockLogs = [
  {
    id: 'LOG-001',
    timestamp: '2024-03-15 14:32:15',
    user: 'Sarah Admin',
    action: 'Updated user permissions',
    category: 'Security',
  },
  {
    id: 'LOG-002',
    timestamp: '2024-03-15 13:45:22',
    user: 'Mike Analyst',
    action: 'Generated monthly report',
    category: 'Reports',
  },
  {
    id: 'LOG-003',
    timestamp: '2024-03-15 12:18:07',
    user: 'Sarah Admin',
    action: 'Modified automation rule',
    category: 'Configuration',
  },
  {
    id: 'LOG-004',
    timestamp: '2024-03-15 11:22:41',
    user: 'Jane Viewer',
    action: 'Viewed dashboard',
    category: 'Access',
  },
  {
    id: 'LOG-005',
    timestamp: '2024-03-15 10:15:33',
    user: 'Mike Analyst',
    action: 'Exported case data',
    category: 'Data',
  },
];

export function AuditLogs() {
  return (
    <PageLayout
      title="Audit Logs"
      description="Track system activity and user actions"
    >
      <div className="bg-surface rounded-md border-2 border-contrast-low overflow-hidden mt-fluid-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-canvas border-b-2 border-contrast-low">
              <tr>
                <th className="text-left p-static-md">
                  <PText size="small" weight="semibold">Timestamp</PText>
                </th>
                <th className="text-left p-static-md">
                  <PText size="small" weight="semibold">User</PText>
                </th>
                <th className="text-left p-static-md">
                  <PText size="small" weight="semibold">Action</PText>
                </th>
                <th className="text-left p-static-md">
                  <PText size="small" weight="semibold">Category</PText>
                </th>
              </tr>
            </thead>
            <tbody>
              {mockLogs.map((log) => (
                <tr key={log.id} className="border-b border-contrast-low last:border-0">
                  <td className="p-static-md">
                    <PText size="small" className="text-contrast-medium">{log.timestamp}</PText>
                  </td>
                  <td className="p-static-md">
                    <PText size="small" weight="semibold">{log.user}</PText>
                  </td>
                  <td className="p-static-md">
                    <PText size="small">{log.action}</PText>
                  </td>
                  <td className="p-static-md">
                    <PTag color="background-surface">{log.category}</PTag>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
