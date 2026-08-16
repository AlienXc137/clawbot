# Ask Mode

## Question

explain the working of overall /modes/agent

## Answer

The `/modes/agent` module consists of interconnected components that enable an AI agent to plan and execute actions in a workspace. Here's a breakdown of its working:

### 1. **Core Workflow**
- **`orchestrator.ts`**: Initiates the agent mode by:
  - Asking for a user-defined goal
  - Initializing configuration, action tracking, and tool execution
  - Creating a `ToolLoopAgent` that generates action sequences based on the goal
  - Running an approval workflow for staged actions
  - Applying approved changes or clearing staging if canceled

### 2. **Tool Execution**
- **`agent-tools.ts`**: Defines executable tools via `createAgentTools()`, such as:
  - File/Folder operations (`create_file`, `modify_file`, etc.)
  - Code analysis (`search_files`, `list_files`)
  - Shell command execution
- **`tool-executor.ts`**: Implements these tools, handling:
  - Staging changes in `ActionTracker`
  - Safe path resolution
  - Execution of approved changes (file modifications, folder creation, shell commands)

### 3. **Change Tracking**
- **`action-tracker.ts`**: Manages a log of all staged actions with:
  - Status tracking (`pending` → `approved`/`rejected`)
  - Detailed records of changes (before/after content)
  - Filtering for pending mutations requiring approval

### 4. **Approval Process**
- **`approval.ts`**: Provides user review of pending changes:
  - Groups changes by file/folder for review
  - Shows diffs for modified files
  - Allows selective approval/rejection
  - Executes approved changes via `ToolExecutor`

### 5. **Key Safeguards**
- Path validation to prevent workspace escapes
- File size/mutation limits
- Exclusion of non-code files (node_modules, .git, etc.)
- Undo capability via `clearStaging()`

### Example Flow
1. User sets goal: "Optimize database queries"
2. Agent generates actions:
   - Search for SQL files (`search_files`)
   - Modify specific queries (`modify_file`)
3. Staged changes are shown in terminal
4. User approves via terminal prompts
5. Approved actions are applied:
   - File changes written to disk
   - Shell commands executed if applicable

This modular architecture allows precise control over changes with clear user oversight at each stage.
