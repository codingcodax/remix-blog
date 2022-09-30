import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import type { Post } from '@prisma/client';

import { db } from '~/services/db';

export const loader: LoaderFunction = async () => {
  const posts = await db.post.findMany();

  return { posts };
};

const Posts = () => {
  const { posts } = useLoaderData<{ posts: Post[] }>();

  return (
    <div>
      {posts.map(({ id, title, body }) => (
        <div key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
