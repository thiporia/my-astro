// src/components/BlogPostList.tsx

import React from 'react';
import Card, { CardContent, CardHeader, CardTitle } from './ui/Card';
import { format } from 'date-fns';

interface Post {
  id: string;
  data: {
    title: string;
    description: string;
    pubDate: string;
  };
  slug: string;
}

interface BlogPostListProps {
  posts: Post[];
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.data.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.data.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              {format(new Date(post.data.pubDate), 'MMMM d, yyyy')}
            </p>
            <a href={`/blog/${post.slug}`} className="text-blue-600 hover:underline mt-4 inline-block">
              Read more
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogPostList;
