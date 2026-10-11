import { Movies } from './components/Movies.jsx';

export function App() {

  let moviesList = [

    {
      name: 'The Matrix',
      date: '31.03.1999',
      genre: 'Sci-Fi',
      plot: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      imdbLink: 'https://www.imdb.com/title/tt0133093',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumK5tCCbZnDE0zJMjVWOIug3NRjZD77ahQPk7bKyDcg&s=10'
    },

    {
      name: 'Spider-Man: Brand New Day',
      date: '31.07.2026',
      genre: 'Action/Sci-Fi (Superhero)',
      plot: 'A forgotten Peter Parker lives alone as a full-time Spider-Man until mounting pressure triggers a dangerous change and a powerful new enemy emerges.',
      imdbLink: 'https://www.imdb.com/title/tt22084616',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_ke7C9NbUQajqWra1U-QT7tXEkRPSfOzHgBUoMUr7Q&s=10'
    },

    {
      name: 'Hackers',
      date: '15.09.1995',
      genre: 'Cyber-Thriller',
      plot: 'Teenage hackers discover a criminal conspiracy with plans to use a computer virus that will capsize five oil tankers.',
      imdbLink: 'https://www.imdb.com/title/tt0113243',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG7lS-6jcLiuynlPh0Pke-MfTIkYsbVWxaVf9CddjQlw&s=10'
    },

    {
      name: 'Equilibrium',
      date: '06.12.2002',
      genre: 'Sci-Fi/Action',
      plot: 'In a totalitarian future where emotions and art are strictly forbidden, an elite regime enforcer misses his daily dose of a mind-altering drug and turns his deadly combat skills against the state.',
      imdbLink: 'https://www.imdb.com/title/tt0238380',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShH5r-8WtfkOGMTY1U3OruR7DwLAiyWiATWBTBxrPlg&s=10'
    },

    {
      name: 'The Godfather',
      date: '01.11.1997',
      genre: 'Crime-Drama',
      plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      imdbLink: 'https://www.imdb.com/title/tt0068646',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJnw-oMl0r3YWT4M4n9r15nel5f4HXjxreNmI8FCGmA&s=10'
    },

    {
      name: 'Gladiator',
      date: '05.05.2000',
      genre: 'Action',
      plot: 'A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family.',
      imdbLink: 'https://www.imdb.com/title/tt0172495',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsV_po3JSFFGfU8SFDXyV0K3JVw2YZxiMNt96rzn_5Jg&s=10'
    }
  ];

  return (
    <div id='app'>
      <h2>Домашна задача - Листа на Филмови</h2>
      <Movies listaNaFilmovi={moviesList} />
    </div>
  );
}