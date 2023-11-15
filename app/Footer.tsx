type Link = {
  name: string;
  url: string;
};

export default function Footer({}: {}) {
  const links: Link[] = [
    {
      name: 'Source',
      url: 'https://github.com/jamesonwilliams/polyphony/tree/main#polyphony',
    },
    {
      name: 'Deployed',
      url: 'https://polyphony.vercel.app/',
    },
    {
      name: 'Dev',
      url: 'http://localhost:3000/',
    },
  ];

  return (
    <ul className='m-8 divide-x-2 divide-gray-600 text-center'>
      {links.map(({ name, url }) => (
        <li
          key={name}
          className='inline px-2 text-gray-600 hover:text-gray-400'
        >
          <a href={url}>{name}</a>
        </li>
      ))}
    </ul>
  );
}
