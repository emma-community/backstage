/*
 * Copyright 2021 Spotify AB
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

import React from 'react';

import { Owner } from './Owner';
import { Project } from '../../contexts/ProjectContext';
import { Repo } from './Repo';
import { VersioningStrategy } from './VersioningStrategy';

export function RepoDetailsForm({
  username,
  project,
}: {
  username: string;
  project: Project;
}) {
  return (
    <>
      <VersioningStrategy project={project} />

      <Owner project={project} username={username} />

      {project.owner.length > 0 && <Repo project={project} />}
    </>
  );
}
