import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { db } from '~/services/db';

export const loader: LoaderFunction = async ({ params }) => {
  const post = await db.post.findUnique({ where: { id: params.postId } });

  return { post };
};

const Post = () => {
  const { post } = useLoaderData();

  return (
    <article className='prose'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
};

export default Post;
