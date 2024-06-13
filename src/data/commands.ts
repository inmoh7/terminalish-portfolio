import Home from '../pages/Home';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Education from '../pages/Education';
import Man from '../pages/Man';
import Quote from '../pages/Quote';

import { CommandType } from '../types/types';
import ListPages from '../pages/ListPages';
import Experience from '../pages/Experience';

export const commands: CommandType[] = [
  { type: 'cmd', text: 'cd home', path: '/home', page: Home },
  { type: 'cmd', text: 'cd ~', path: '/home', page: Home },
  { type: 'cmd', text: 'cd ../', path: '/home', page: Home },
  { type: 'cmd', text: 'cd about', path: '/about', page: About },
  { type: 'cmd', text: 'cd education', path: '/education', page: Education },
  { type: 'cmd', text: 'cd projects', path: '/projects', page: Projects },
  {
    type: 'cmd',
    text: 'cd experience',
    path: '/experience',
    page: Experience,
  },
  { type: 'util', text: 'man', page: Man },
  { type: 'util', text: 'ls', page: ListPages },
  { type: 'util', text: 'get quote', page: Quote },
];
