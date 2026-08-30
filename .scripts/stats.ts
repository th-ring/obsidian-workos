import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface StatsResult {
  inboxCount: number;
  unprocessedInbox: number;
  tasksCount: number;
  tasksByStatus: Record<string, number>;
  tasksByPriority: Record<string, number>;
  tasksByAssignee: Record<string, number>;
  pendingAgentReviews: number;
  workstreamsCount: number;
  workstreamsByStatus: Record<string, number>;
  notesCount: number;
  notesByCategory: Record<string, number>;
}

function scanDir(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && !entry.name.startsWith('_')) {
      files.push(...scanDir(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

export function calculateStats(rootDir: string = process.cwd()): StatsResult {
  const result: StatsResult = {
    inboxCount: 0,
    unprocessedInbox: 0,
    tasksCount: 0,
    tasksByStatus: { inbox: 0, backlog: 0, todo: 0, in_progress: 0, blocked: 0, done: 0, archived: 0 },
    tasksByPriority: { low: 0, medium: 0, high: 0, urgent: 0 },
    tasksByAssignee: { user: 0, agent: 0, hybrid: 0 },
    pendingAgentReviews: 0,
    workstreamsCount: 0,
    workstreamsByStatus: { planning: 0, active: 0, on_hold: 0, completed: 0, archived: 0 },
    notesCount: 0,
    notesByCategory: {},
  };

  const mdFiles = scanDir(rootDir);

  for (const filePath of mdFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(content);
      if (!data || !data.type) continue;

      switch (data.type) {
        case 'braindump':
          result.inboxCount++;
          if (data.status === 'unprocessed') result.unprocessedInbox++;
          break;

        case 'task':
          result.tasksCount++;
          const status = data.status || 'todo';
          result.tasksByStatus[status] = (result.tasksByStatus[status] || 0) + 1;

          const priority = data.priority || 'medium';
          result.tasksByPriority[priority] = (result.tasksByPriority[priority] || 0) + 1;

          const assignee = data.assigned_to || 'user';
          result.tasksByAssignee[assignee] = (result.tasksByAssignee[assignee] || 0) + 1;

          if (data.review_status === 'pending') {
            result.pendingAgentReviews++;
          }
          break;

        case 'workstream':
        case 'project':
          result.workstreamsCount++;
          const pStatus = data.status || 'active';
          result.workstreamsByStatus[pStatus] = (result.workstreamsByStatus[pStatus] || 0) + 1;
          break;

        case 'note':
          result.notesCount++;
          const category = data.category || 'general';
          result.notesByCategory[category] = (result.notesByCategory[category] || 0) + 1;
          break;
      }
    } catch (err) {
      // ignore parse errors
    }
  }

  return result;
}

if (process.argv[1]?.endsWith('stats.ts')) {
  const stats = calculateStats();
  console.log('\n==========================================');
  console.log('   🚀 OBSIDIAN WORKOS VAULT METRICS      ');
  console.log('==========================================');
  console.log(`📥 Inbox (Braindumps):  ${stats.inboxCount} (Unprocessed: ${stats.unprocessedInbox})`);
  console.log(`✅ Tasks Total:        ${stats.tasksCount}`);
  console.log('   - Backlog:          ', stats.tasksByStatus.backlog || 0);
  console.log('   - Todo:             ', stats.tasksByStatus.todo || 0);
  console.log('   - In Progress:      ', stats.tasksByStatus.in_progress || 0);
  console.log('   - Blocked:          ', stats.tasksByStatus.blocked || 0);
  console.log('   - Done:             ', stats.tasksByStatus.done || 0);
  console.log(`🤖 Assigned to Agent:  ${stats.tasksByAssignee.agent || 0} (${stats.pendingAgentReviews} awaiting review)`);
  console.log(`🏛️ Workstreams:        ${stats.workstreamsCount} (Active: ${stats.workstreamsByStatus.active || 0})`);
  console.log(`📝 Knowledge Notes:    ${stats.notesCount}`);
  console.log('==========================================\n');
}
