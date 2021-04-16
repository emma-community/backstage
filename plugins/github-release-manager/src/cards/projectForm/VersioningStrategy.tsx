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

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

import { Project } from '../../contexts/ProjectContext';
import { useQuery } from '../../helpers/useQuery';
import {
  getNewQueryParams,
  getParsedQuery,
} from '../../helpers/getNewQueryParams';

export function VersioningStrategy({ project }: { project: Project }) {
  const navigate = useNavigate();
  const query = useQuery();

  useEffect(() => {
    const parsedQuery = getParsedQuery({ query });

    if (!parsedQuery.versioningStrategy) {
      const queryParams = getNewQueryParams({
        query,
        key: 'versioningStrategy',
        value: project.versioningStrategy,
      });

      navigate(`?${queryParams}`, { replace: true });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FormControl component="fieldset" required>
      <FormLabel component="legend">Calendar strategy</FormLabel>
      <RadioGroup
        aria-label="calendar-strategy"
        name="calendar-strategy"
        value={project.versioningStrategy}
        defaultValue="semver"
        onChange={event => {
          const queryParams = getNewQueryParams({
            query,
            key: 'versioningStrategy',
            value: event.target.value,
          });

          navigate(`?${queryParams}`, { replace: true });
        }}
      >
        <FormControlLabel
          value="semver"
          control={<Radio />}
          label="Semantic versioning"
        />
        <FormControlLabel
          value="calver"
          control={<Radio />}
          label="Calendar versioning"
        />
      </RadioGroup>
    </FormControl>
  );
}
