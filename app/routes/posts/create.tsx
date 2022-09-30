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
    <div>
      <h2>Create new post</h2>

      <Form method='post'>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' id='title' />

        <label htmlFor='body'>Body</label>
        <textarea name='body' id='body' />

        <button type='submit'>Add new post</button>
      </Form>
    </div>
  );
};

export default Create;
