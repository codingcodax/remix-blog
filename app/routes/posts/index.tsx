import { Link, useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import type { Post } from '@prisma/client';

import { db } from '~/services/db';

export const loader: LoaderFunction = async () => {
  const posts = await db.post.findMany();

  return { posts };
};

export const ErrorBoundary = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold'>OOPS</h2>
      <p>Something went wrong</p>
      <p className='mb-8'>
        This error is caused by the sqlite database. This is an example.
      </p>

      <div className='p-4 rounded-md bg-base-200'>
        <Link
          to='/posts/b0efd03a-9819-45d5-adcb-99e2d9fd38ec'
          className='text-xl font-bold duration-200 hover:text-primary'
        >
          Mi primer post en remix
        </Link>
        <p>Esto es el contenido</p>
      </div>
    </div>
  );
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
