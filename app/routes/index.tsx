const Index = () => {
  return (
    <div className='prose'>
      <h1>Remix Blox</h1>
      <p>
        This is a remix blog built with{' '}
        <a href='https://remix.run/' rel='noopener noreferrer' target='_blank'>
          remix
        </a>
        , and{' '}
        <a
          href='https://www.prisma.io/'
          rel='noopener noreferrer'
          target='_blank'
        >
          prisma
        </a>
        .
      </p>

      <p>
        It's recommended to test it locally, because it uses sqlite as database.
      </p>
    </div>
  );
};

export default Index;
