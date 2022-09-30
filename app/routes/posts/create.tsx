import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';

import { db } from '~/services/db';

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get('title');
  const body = form.get('body');

  const data = { title, body };
  // @ts-ignore
  const post = await db.post.create({ data });

  return redirect(`/posts/${post.id}`);
};

const Create = () => {
  return (
    <div className='prose'>
      <h2>Create new post</h2>

      <Form method='post' className='max-w-xs grid gap-y-2'>
        <label className='label' htmlFor='title'>
          <span className='label-text'>What is the title?</span>
        </label>
        <input
          className='input input-bordered w-full'
          type='text'
          name='title'
          id='title'
          placeholder='Title'
          required
        />

        <label className='label' htmlFor='body'>
          <span className='label-text'>Your content</span>
        </label>
        <textarea
          className='textarea textarea-bordered h-24 w-full'
          name='body'
          id='body'
          placeholder='Content'
          required
        />

        <button type='submit' className='btn w-full mt-2'>
          Add new post
        </button>
      </Form>
    </div>
  );
};

export default Create;
