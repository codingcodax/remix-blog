import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => ({
  title: 'About | codingcodax',
});

const About = () => {
  return (
    <div className='prose'>
      <h1>About</h1>
      <p>
        This project was built by{' '}
        <a
          href='https://www.codingcodax.dev/'
          rel='noopener noreferrer'
          target='_blank'
        >
          codingcodax
        </a>
        .
      </p>
    </div>
  );
};

export default About;
