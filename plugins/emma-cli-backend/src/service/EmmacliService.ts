/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export class EmmacliService {
  async runCommand(
    command: string,
  ): Promise<{ stdout: string; stderr: string }> {
    try {
      const { stdout, stderr } = await execAsync(`npx emmacli ${command}`);
      return { stdout, stderr };
    } catch (error) {
      throw new Error(`Failed to run emmacli command: ${error}`);
    }
  }
}
