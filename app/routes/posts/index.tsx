import { Link, useLoaderData } from '@remix-run/react';
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
    <div className='grid gap-4'>
      {posts.map(({ id, title, body }) => (
        <div key={id} className='p-4 rounded-md bg-base-200'>
          <Link
            to={`/posts/${id}`}
            className='text-xl font-bold duration-200 hover:text-primary'
          >
            {title}
          </Link>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
