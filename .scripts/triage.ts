import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function listUnprocessedInbox(rootDir: string = process.cwd()) {
  const inboxDir = path.join(rootDir, '00_Inbox');
  if (!fs.existsSync(inboxDir)) return [];

  const files = fs.readdirSync(inboxDir).filter(f => f.endsWith('.md'));
  const items: { file: string; path: string; data: any; content: string }[] = [];

  for (const file of files) {
    const fullPath = path.join(inboxDir, file);
    const raw = fs.readFileSync(fullPath, 'utf-8');
    const parsed = matter(raw);
    if (parsed.data && parsed.data.status === 'unprocessed') {
      items.push({
        file,
        path: fullPath,
        data: parsed.data,
        content: parsed.content,
      });
    }
  }
  return items;
}

export function convertBraindumpToTask(
  filePath: string,
  overrides: {
    title?: string;
    priority?: 'low' | 'medium' | 'high' | 'urgent';
    workstream?: string;
    due?: string;
    assigned_to?: 'user' | 'agent' | 'hybrid';
  } = {},
  rootDir: string = process.cwd()
) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const taskTitle = overrides.title || data.title || path.basename(filePath, '.md');
  const today = new Date().toISOString().split('T')[0];

  const taskFrontmatter = {
    type: 'task',
    title: taskTitle,
    status: 'todo',
    priority: overrides.priority || 'medium',
    workstream: overrides.workstream || null,
    due: overrides.due || null,
    created: today,
    tags: data.tags || [],
    assigned_to: overrides.assigned_to || 'user',
    review_status: null,
  };

  const newFileName = path.basename(filePath);
  const targetPath = path.join(rootDir, '10_Tasks', newFileName);

  const outputContent = matter.stringify(content, taskFrontmatter);

  // Write new task file
  fs.writeFileSync(targetPath, outputContent, 'utf-8');
  // Remove from inbox
  fs.unlinkSync(filePath);

  console.log(`✅ Converted ${filePath} -> ${targetPath}`);
}

if (process.argv[1]?.endsWith('triage.ts')) {
  const unprocessed = listUnprocessedInbox();
  console.log(`\n🔍 Found ${unprocessed.length} unprocessed Inbox item(s):`);
  unprocessed.forEach((item, idx) => {
    console.log(`  [${idx + 1}] ${item.file}: "${item.data.title || 'Untitled'}" (Tags: ${item.data.tags?.join(', ') || 'none'})`);
  });
  console.log('\nUse programmatically or via agent workflows to convert items to tasks/notes.\n');
}
