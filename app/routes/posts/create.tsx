import type { ActionFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useActionData, useTransition } from '@remix-run/react';

import { db } from '~/services/db';

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get('title');
  const body = form.get('body');
  const errors = { title: '', body: '' };

  if (typeof title !== 'string' || !title)
    errors.title = "The title can't be empty";

  if (typeof body !== 'string' || body.length < 10)
    errors.body = 'Body must be > 10 characters';

  if (Object.keys(errors).length) return json(errors, { status: 442 });

  const data = { title, body };
  // @ts-ignore
  const post = await db.post.create({ data });

  return redirect(`/posts/${post.id}`);
};

const Create = () => {
  const { state } = useTransition();
  const errors = useActionData();
  const isSubmitting = state === 'submitting';

  return (
    <div className='prose'>
      <h2>Create new post</h2>

      <Form method='post' className='max-w-xs'>
        <div className='form-control'>
          <label className='label' htmlFor='title'>
            <span className='label-text'>What is the title?</span>
          </label>
          <input
            className={`input input-bordered w-full ${
              errors?.title ? 'input-error' : ''
            }`}
            type='text'
            name='title'
            id='title'
            placeholder='Title'
          />
          <label className='label'>
            {errors?.title && (
              <span className='label-text-alt text-error'>{errors.title}</span>
            )}
          </label>
        </div>

        <div className='form-control'>
          <label className='label' htmlFor='body'>
            <span className='label-text'>Your content</span>
          </label>
          <textarea
            className={`textarea textarea-bordered h-24 w-full ${
              errors?.body ? 'textarea-error' : ''
            }`}
            name='body'
            id='body'
            placeholder='Content'
          />
          <label className='label'>
            {errors?.body && (
              <span className='label-text-alt text-error'>{errors.body}</span>
            )}
          </label>
        </div>

        <button
          type='submit'
          className='btn w-full mt-2'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating post...' : 'Create post'}
        </button>
      </Form>
    </div>
  );
};

export default Create;
