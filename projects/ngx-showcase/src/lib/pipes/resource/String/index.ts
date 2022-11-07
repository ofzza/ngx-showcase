// String manipulation pipe, processes strings on the fly
// ----------------------------------------------------------------------------

// Import dependencies
import { Pipe } from '@angular/core';
import { StringService } from '../../../services';

// (Re)export showcase component
export * from './_showcase';

// Configuration types
type CommandDefinition = keyof StringService | Partial<Record<keyof StringService, any[]>>;

/**
 * Fetch resource pipe, Fetches a remote resource from a URL
 */
@Pipe({ name: 'string' })
export class StringPipe {
  constructor(private _string: StringService) {}

  /**
   * Processes a string via a list of string manipulation commands
   * For example:
   * ```ts
   * 'Hello, my name is # Alice #!' | string:[{ 'extract': ['#', '#'] }, 'trim']
   * - Results in: 'Alice'
   * ```
   * @param str String value to be manipulated
   * @param commands Array of definitions of commands to execute. Each command definition is one of:
   * - A string equaling the name of the string manipulation to perform (also a name of a method on the `StringService` service)
   * - A single property object where:
   *   - The name of the property is the name of the string manipulation to perform (also a name of a method on the `StringService` service)
   *   - The value of the property is an array of arguments to be passed to the manipulation (see arguments for method of same name on the `StringService` service)
   */
  public transform(str?: string | null, commands: CommandDefinition[] = []): string {
    return processByRunningCommands(this._string, str, commands);
  }
}

/**
 * Processes a string via a list of string manipulation commands
 * @param _string StringService instance
 * @param str String to run commands on
 * @param commands Array of definitions of commands to execute. Each command definition is one of
 */
function processByRunningCommands(_string: StringService, str?: string | null, commands: CommandDefinition[] = []): string {
  // Initialize processing result
  let processed = str || '';
  // Execure requested commands
  for (const command of commands) {
    // Process command
    let commandName: keyof StringService = '' as keyof StringService;
    let commandArguments: any[] = [];
    // Process string command definition
    if (typeof command === 'string') {
      // Select command
      commandName = command;
    }
    // Process object command definition
    else if (command instanceof Object) {
      // Verify command definition
      if (Object.keys(command).length !== 1) {
        throw new Error(
          `StringPipe ('' | string) does not support command "${JSON.stringify(
            command,
          )}" not supported! Each command definitions is only allowed a single property`,
        );
      }
      // Select command
      commandName = Object.keys(command)[0] as keyof StringService;
      commandArguments = command[commandName] || [];
    }
    // Verify the command is supported
    if (!commandName || !_string[commandName]) {
      throw new Error(`StringPipe ('' | string) does not support command "${command}" not supported!`);
    }
    // Run command
    processed = _string[commandName](processed, ...commandArguments);
  }
  // Return processing result
  return processed;
}
