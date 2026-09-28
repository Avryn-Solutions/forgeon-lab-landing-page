export interface QuoteRequest {
  name: string;
  projectType: string;
  description: string;
  quantity: number;
  dimensions: string;
  color: string;
  deadline: string;
  hasFile: boolean;
  fileType?: string;
}
