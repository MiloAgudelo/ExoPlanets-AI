import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface PredictionResult {
  index: number;
  prediction: string;
  prediction_code: number;
  prob_false_positive: number;
  prob_candidate: number;
  prob_confirmed: number;
  max_confidence: number;
}

export interface PredictionResponse {
  success: boolean;
  mission: string;
  total_objects: number;
  statistics: {
    total: number;
    confirmed: number;
    candidate: number;
    false_positive: number;
    exoplanets_total: number;
  };
  predictions: PredictionResult[];
  top_exoplanets: PredictionResult[];
}

export interface MissionInfo {
  name: string;
  launched: string;
  ended: string;
  planets_discovered: string;
  accuracy: string;
  description: string;
  key_features: string[];
}

export const apiClient = {
  async predictExoplanets(
    mission: string,
    file: File
  ): Promise<PredictionResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(
      `${API_URL}/api/predict/${mission}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  },

  async getMissionInfo(mission: string): Promise<MissionInfo> {
    const response = await axios.get(`${API_URL}/api/models/${mission}`);
    return response.data;
  },

  async getAvailableModels(): Promise<string[]> {
    const response = await axios.get(`${API_URL}/api/models`);
    return response.data.available_models;
  },
};

