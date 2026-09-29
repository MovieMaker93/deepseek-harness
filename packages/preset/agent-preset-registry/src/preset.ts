import type { Volatile } from '@deepseek-ai/cordis'
/** Public preset roster and selection configuration. */
/** One declared preset and its current activation failure, if any. */
export interface AgentPreset {
  readonly id: string
  readonly name?: string
  readonly description?: string
  readonly order?: number
  readonly broken?: string
}

/** Registry selection policy. */
export interface Config {
  /** Deployment default when the caller omits a preset. */
  default: string
  /** Retired preset ID to the declared preset that resolves in its place, e.g. for Sessions recorded under a removed preset. */
  aliases: Readonly<Record<string, string>>
  /** User-selected default; edited through Settings. */
  selectedDefault: Volatile<string | undefined>
}
