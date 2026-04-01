import { PText, PSwitch, PButton } from '@porsche-design-system/components-react';
import { PageLayout } from '../components/PageLayout';

const mockRules = [
  { id: 'RULE-001', name: 'Auto-assign high priority cases', enabled: true, category: 'Assignment' },
  { id: 'RULE-002', name: 'Escalate unresolved cases after 48h', enabled: true, category: 'Escalation' },
  { id: 'RULE-003', name: 'Send notification on status change', enabled: false, category: 'Notifications' },
  { id: 'RULE-004', name: 'Archive resolved cases after 30 days', enabled: true, category: 'Archival' },
];

export function Rules() {
  return (
    <PageLayout
      title="Rules"
      description="Configure automation rules and workflows"
    >
      <div className="mb-fluid-md mt-fluid-md">
        <PButton icon="add">Create New Rule</PButton>
      </div>

      <div className="bg-surface rounded-md border-2 border-contrast-low overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-canvas border-b-2 border-contrast-low">
              <tr>
                <th className="text-left p-static-md">
                  <PText size="small" weight="semibold">Rule Name</PText>
                </th>
                <th className="text-left p-static-md">
                  <PText size="small" weight="semibold">Category</PText>
                </th>
                <th className="text-left p-static-md">
                  <PText size="small" weight="semibold">Status</PText>
                </th>
                <th className="text-right p-static-md">
                  <PText size="small" weight="semibold">Actions</PText>
                </th>
              </tr>
            </thead>
            <tbody>
              {mockRules.map((rule) => (
                <tr key={rule.id} className="border-b border-contrast-low last:border-0">
                  <td className="p-static-md">
                    <PText size="small" weight="semibold">{rule.name}</PText>
                  </td>
                  <td className="p-static-md">
                    <PText size="small" className="text-contrast-medium">{rule.category}</PText>
                  </td>
                  <td className="p-static-md">
                    <PSwitch checked={rule.enabled}>
                      {rule.enabled ? 'Enabled' : 'Disabled'}
                    </PSwitch>
                  </td>
                  <td className="p-static-md text-right">
                    <PButton variant="tertiary" icon="edit" hideLabel>
                      Edit
                    </PButton>
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
