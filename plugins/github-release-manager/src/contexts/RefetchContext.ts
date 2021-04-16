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

import { createContext, useContext } from 'react';

import { GitHubReleaseManagerError } from '../errors/GitHubReleaseManagerError';

export interface Refetch {
  refetchTrigger: number;
  setRefetchTrigger: React.Dispatch<React.SetStateAction<number>>;
}

export const RefetchContext = createContext<Refetch | undefined>(undefined);

export const useRefetchContext = () => {
  const refetch = useContext(RefetchContext);

  if (!refetch) {
    throw new GitHubReleaseManagerError('refetch not found');
  }

  return {
    setRefetchTrigger: refetch.setRefetchTrigger,
  };
};
