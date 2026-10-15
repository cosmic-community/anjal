export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
  published_at?: string
}

export interface CosmicFile {
  url: string
  imgix_url: string
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools' | string

export interface Skill extends CosmicObject {
  type: 'skills'
  metadata: {
    name?: string
    category?: SkillCategory
    proficiency?: string
    icon?: string
  }
}

export interface Project extends CosmicObject {
  type: 'projects'
  metadata: {
    short_description?: string
    details?: string
    screenshots?: CosmicFile[]
    tech_stack?: Skill[]
    live_url?: string
    repo_url?: string
    featured?: boolean
  }
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience'
  metadata: {
    company?: string
    role?: string
    company_logo?: CosmicFile
    start_date?: string
    current_role?: boolean
    end_date?: string
    description?: string
    technologies?: string[]
  }
}

export interface ContactInfo extends CosmicObject {
  type: 'contact-info'
  metadata: {
    full_name?: string
    headline?: string
    email?: string
    location?: string
    github_url?: string
    linkedin_url?: string
    available_for_work?: boolean
  }
}