import { PText, PTag, PSpinner } from '@porsche-design-system/components-react';
import { PageLayout } from '../components/PageLayout';
import type { Case } from '../types';

// TODO: Create a `useAsync` hook (src/hooks/useAsync.ts) and use it here to
// load cases from the `getCases` API (src/data/mockData.ts).
//
// Requirements:
//   1. useAsync should be generic
//   2. It should return a discriminated union state
//   3. Handle idle → loading → success | error transitions
//   4. Wire it into this component to replace the placeholder below
//
// The getCases() function simulates an 800ms network request.

const cases: Case[] = [];
const isLoading = false;
const error: Error | null = null;

export function Cases() {
  return (
    <PageLayout
      title="Cases"
      description="Manage and track all support cases"
    >
      {isLoading && (
        <div className="flex justify-center items-center py-fluid-lg">
          <PSpinner size="medium" />
        </div>
      )}

      {error && (
        <div className="bg-notification-error-soft p-static-md rounded-md mt-fluid-md">
          <PText>Failed to load cases: {error.message}</PText>
        </div>
      )}

      {!isLoading && !error && (
        <div className="bg-surface rounded-md border-2 border-contrast-low overflow-hidden mt-fluid-md">
          {cases.length === 0 ? (
            <div className="p-static-lg text-center">
              <PText color="notification-neutral">No cases loaded. Implement useAsync to fetch data.</PText>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-canvas border-b-2 border-contrast-low">
                  <tr>
                    <th className="text-left p-static-md">
                      <PText size="small" weight="semibold">Case ID</PText>
                    </th>
                    <th className="text-left p-static-md">
                      <PText size="small" weight="semibold">Title</PText>
                    </th>
                    <th className="text-left p-static-md">
                      <PText size="small" weight="semibold">Status</PText>
                    </th>
                    <th className="text-left p-static-md">
                      <PText size="small" weight="semibold">Priority</PText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cases.map((caseItem) => (
                    <tr key={caseItem.id} className="border-b border-contrast-low last:border-0">
                      <td className="p-static-md">
                        <PText size="small" className="text-primary">{caseItem.id}</PText>
                      </td>
                      <td className="p-static-md">
                        <PText size="small">{caseItem.title}</PText>
                      </td>
                      <td className="p-static-md">
                        <PTag
                          color={
                            caseItem.status === 'Resolved'
                              ? 'notification-success'
                              : caseItem.status === 'In Progress'
                              ? 'notification-info-soft'
                              : 'notification-warning'
                          }
                        >
                          {caseItem.status}
                        </PTag>
                      </td>
                      <td className="p-static-md">
                        <PText size="small">{caseItem.priority}</PText>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </PageLayout>
  );
}
