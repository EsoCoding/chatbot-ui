import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenRouterModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenRouterModelID {
  GPT_3_5 = 'openrouter/openai/gpt-3.5-turbo',
  GPT_3_5_AZ = 'openrouter/openai/gpt-35-turbo',
  GPT_4 = 'openrouter/openai/gpt-4',
  GPT_4_32K = 'openrouter/openai/gpt-4-32k',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenRouterModelID.GPT_3_5;

export const OpenAIModels: Record<OpenRouterModelID, OpenRouterModel> = {
  [OpenRouterModelID.GPT_3_5]: {
    id: OpenRouterModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenRouterModelID.GPT_3_5_AZ]: {
    id: OpenRouterModelID.GPT_3_5_AZ,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenRouterModelID.GPT_4]: {
    id: OpenRouterModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenRouterModelID.GPT_4_32K]: {
    id: OpenRouterModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
  },
};
