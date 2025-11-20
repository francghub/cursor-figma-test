// Book data for the library carousel
export interface Book {
  id: string;
  title: string;
  author: string;
  coverColor: string;
  file: string;
  type: 'pdf' | 'epub';
}

export const books: Book[] = [
  {
    id: '1',
    title: 'El kit de la lucha en internet',
    author: 'Margarita Padilla',
    coverColor: '#B86A3A',
    file: 'El kit de la lucha en internet - margarita Padilla.pdf',
    type: 'pdf'
  },
  {
    id: '2',
    title: 'Hacking RSS and Atom',
    author: 'Leslie M. Orchard',
    coverColor: '#2E3A57',
    file: 'Hacking RSS and Atom - Leslie M. Orchard.pdf',
    type: 'pdf'
  },
  {
    id: '3',
    title: 'Off the Network',
    author: 'Ulises Ali Mejias',
    coverColor: '#32A8A1',
    file: 'Off the Network_ Disrupting the Digital Wo - Ulises Ali Mejias.pdf',
    type: 'pdf'
  },
  {
    id: '4',
    title: 'Media Landscape 2011',
    author: 'Research Report',
    coverColor: '#D0D7DD',
    file: 'MediaLandscape2011.pdf',
    type: 'pdf'
  },
  {
    id: '5',
    title: 'The True Story of Fake News',
    author: 'Mark Dice',
    coverColor: '#506171',
    file: 'The True Story of Fake News_ How Mainstrea - Mark Dice.epub',
    type: 'epub'
  },
  {
    id: '6',
    title: 'The Real Cyber War',
    author: 'Shawn M. Powers',
    coverColor: '#4EC7B8',
    file: 'The Real Cyber War_ The Politic - Shawn M. Powers.epub',
    type: 'epub'
  },
  {
    id: '7',
    title: 'The People\'s Platform',
    author: 'Astra Taylor',
    coverColor: '#8B6F47',
    file: 'The People\'s Platform_ Taking Back Power a - Astra Taylor.epub',
    type: 'epub'
  },
  {
    id: '8',
    title: 'The Ends of the Internet',
    author: 'Boris Beaude',
    coverColor: '#5A7D8C',
    file: 'The Ends of the Internet - Boris Beaude.epub',
    type: 'epub'
  },
  {
    id: '9',
    title: 'Network Notions',
    author: 'Michael Seemann',
    coverColor: '#A67C52',
    file: 'NN09_Seemann.epub',
    type: 'epub'
  },
  {
    id: '10',
    title: 'Internet Wars',
    author: 'Fergus Hanson',
    coverColor: '#6B8E9D',
    file: 'Internet Wars_ The Struggle for Power in t - Fergus Hanson.epub',
    type: 'epub'
  },
  {
    id: '11',
    title: 'Hacker, Hoaxer, Whistleblower, Spy',
    author: 'Gabriella Coleman',
    coverColor: '#9B7653',
    file: 'Hacker, Hoaxer, Whistleblower, - Gabriella Coleman.epub',
    type: 'epub'
  },
  {
    id: '12',
    title: 'Digital Disconnect',
    author: 'Robert W. McChesney',
    coverColor: '#7A9CAE',
    file: 'Digital Disconnect_ How Capitalism Is Turn - Robert W. McChesney.epub',
    type: 'epub'
  },
  {
    id: '13',
    title: 'Consent of the Networked',
    author: 'Rebecca MacKinnon',
    coverColor: '#C8956D',
    file: 'Consent of the Networked_ The Worldwide St - Rebecca MacKinnon.epub',
    type: 'epub'
  }
];
