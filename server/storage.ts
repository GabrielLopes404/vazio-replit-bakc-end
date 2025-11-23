import {
  type PortfolioItem,
  type InsertPortfolioItem,
  type Service,
  type InsertService,
  type Testimonial,
  type InsertTestimonial,
  type Faq,
  type InsertFaq,
  type BeforeAfter,
  type InsertBeforeAfter,
} from "@shared/schema";
import { createHash } from "crypto";
import fs from "fs/promises";
import path from "path";

export interface IStorage {
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getServices(): Promise<Service[]>;
  getTestimonials(): Promise<Testimonial[]>;
  getFaqs(): Promise<Faq[]>;
  getBeforeAfter(): Promise<BeforeAfter[]>;
}

function generateStableId(content: string): string {
  return createHash("sha256").update(content).digest("hex").substring(0, 16);
}

export class JSONStorage implements IStorage {
  private dataDir: string;

  constructor() {
    this.dataDir = path.resolve(import.meta.dirname, "..", "data");
  }

  private async readJSONFile<T>(filename: string): Promise<T[]> {
    try {
      const filePath = path.join(this.dataDir, filename);
      const content = await fs.readFile(filePath, "utf-8");
      return JSON.parse(content);
    } catch (error) {
      console.error(`Error reading ${filename}:`, error);
      return [];
    }
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    const items = await this.readJSONFile<InsertPortfolioItem>("portfolio.json");
    return items.map((item) => ({
      id: generateStableId(item.title + item.category),
      title: item.title,
      category: item.category,
      imageUrl: item.imageUrl,
      description: item.description ?? null,
      client: item.client ?? null,
      order: item.order ?? 0,
    }));
  }

  async getServices(): Promise<Service[]> {
    const services = await this.readJSONFile<InsertService>("services.json");
    return services.map((service) => ({
      id: generateStableId(service.title),
      title: service.title,
      description: service.description,
      icon: service.icon,
    }));
  }

  async getTestimonials(): Promise<Testimonial[]> {
    const testimonials = await this.readJSONFile<InsertTestimonial>("testimonials.json");
    return testimonials.map((testimonial) => ({
      id: generateStableId(testimonial.author),
      author: testimonial.author,
      text: testimonial.text,
      avatarUrl: testimonial.avatarUrl ?? null,
    }));
  }

  async getFaqs(): Promise<Faq[]> {
    const faqs = await this.readJSONFile<InsertFaq>("faqs.json");
    return faqs.map((faq) => ({
      id: generateStableId(faq.question),
      question: faq.question,
      answer: faq.answer,
      order: faq.order ?? 0,
    }));
  }

  async getBeforeAfter(): Promise<BeforeAfter[]> {
    const items = await this.readJSONFile<InsertBeforeAfter>("before-after.json");
    return items.map((item) => ({
      id: generateStableId(item.title + item.client),
      title: item.title,
      client: item.client,
      beforeImageUrl: item.beforeImageUrl,
      afterImageUrl: item.afterImageUrl,
      order: item.order ?? 0,
    }));
  }
}

export const storage = new JSONStorage();
