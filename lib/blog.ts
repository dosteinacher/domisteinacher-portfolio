import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  coverImage: string;
  author: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(contentDir, f), 'utf8'));
      return { slug: f.replace('.mdx', ''), ...data } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(raw);
  return { slug, ...data, content } as Post;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
