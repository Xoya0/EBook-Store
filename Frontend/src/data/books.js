const books = [
  // Fiction
  {
    title: 'Atmosphere',
    author: 'Taylor Jenkins Reid',
    img: 'https://archive.org/download/l_covers_0000/l_covers_0000_00.tar/0000000042-L.jpg',
    category: 'Fiction',
    price: 349,
    rating: 4.5,
    description: 'A compelling story of love, ambition, and the secrets we keep, from the bestselling author Taylor Jenkins Reid.'
  },
  {
    title: 'The Coin',
    author: 'Yasmin Zaher',
    img: 'https://covers.openlibrary.org/b/isbn/9781646222100-L.jpg',
    category: 'Fiction',
    price: 279,
    rating: 4.3,
    description: 'A haunting tale of two former lovers whose chance reunion forces them to confront a pivotal moment in their past.'
  },
  {
    title: 'The Mighty Red',
    author: 'Louise Erdrich',
    img: 'https://covers.openlibrary.org/b/isbn/9780063277052-L.jpg',
    category: 'Fiction',
    price: 399,
    rating: 4.6,
    description: 'A richly woven narrative exploring Native American heritage, family bonds, and one young woman’s coming-of-age journey.'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    img: 'https://covers.openlibrary.org/b/id/10521220-L.jpg',
    category: 'Fiction',
    price: 319,
    rating: 4.8,
    description: 'A timeless philosophical tale of a shepherd’s quest for treasure and self-discovery under the desert sun.'
  },
  {
    title: 'James',
    author: 'Percival Everett',
    img: 'https://covers.openlibrary.org/b/id/10521222-L.jpg',
    category: 'Fiction',
    price: 359,
    rating: 4.4,
    description: 'A poignant reimagining of Mark Twain’s classic through the eyes of a Black boy navigating love, loss, and identity.'
  },
  {
    title: 'Fairy Tale',
    author: 'Stephen King',
    img: 'https://covers.openlibrary.org/b/id/10521213-L.jpg',
    category: 'Fiction',
    price: 399,
    rating: 4.7,
    description: 'A thrilling fantasy novel by Stephen King.'
  },

  // eBooks
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    img: 'https://covers.openlibrary.org/b/id/10521221-L.jpg',
    category: 'eBooks',
    price: 249,
    rating: 4.5,
    description: 'A personal finance classic contrasting two approaches to wealth-building and financial independence.'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    img: 'https://covers.openlibrary.org/b/id/10521219-L.jpg',
    category: 'eBooks',
    price: 299,
    rating: 4.9,
    description: 'A practical guide to building good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results.'
  },
  {
    title: 'The Let Them Theory',
    author: 'Mel Robbins',
    img: 'https://covers.openlibrary.org/b/isbn/9781401971366-L.jpg',
    category: 'eBooks',
    price: 279,
    rating: 4.2,
    description: 'A motivational self-help manifesto exploring the concept of personal freedom, productivity, and living life on your own terms.'
  },

  // Audiobooks
  {
    title: 'Notes to John',
    author: 'Joan Didion',
    img: 'https://archive.org/download/l_covers_0000/l_covers_0000_00.tar/0000006623-L.jpg',
    category: 'Audiobooks',
    price: 549,
    rating: 4.4,
    description: 'A reflective audiobook featuring Joan Didion’s intimate letters, offering deep insights into family, memory, and grief.'
  },
  {
    title: 'Fallen Women',
    author: 'Sophie Elmhirst',
    img: 'https://archive.org/download/l_covers_0000/l_covers_0000_00.tar/0000008220-L.jpg',
    category: 'Audiobooks',
    price: 499,
    rating: 4.3,
    description: 'A captivating romance set aboard a 1930s ocean liner, weaving together love, class, and societal expectations.'
  },
  {
    title: 'The Woman in Me',
    author: 'Britney Spears',
    img: 'https://covers.openlibrary.org/b/isbn/9781668009048-L.jpg',
    category: 'Audiobooks',
    price: 599,
    rating: 4.6,
    description: 'A candid memoir narrated by Britney Spears, sharing her journey through fame, personal struggles, and ultimate resilience.'
  },

  // Bestsellers
  {
    title: 'Hamnet',
    author: "Maggie O'Farrell",
    img: 'https://covers.openlibrary.org/b/id/10521216-L.jpg',
    category: 'Bestsellers',
    price: 379,
    rating: 4.7,
    description: 'A historical novel imagining Shakespeare’s life, love, and profound loss through the lens of his son Hamnet.'
  },
  {
    title: 'Fourth Wing',
    author: 'Rebecca Yarros',
    img: 'https://covers.openlibrary.org/b/id/10521227-L.jpg',
    category: 'Bestsellers',
    price: 419,
    rating: 4.6,
    description: 'A thrilling fantasy epic about dragons, war, and a young woman’s fight to survive in a brutal military academy.'
  },
  {
    title: 'The Secret of Secrets',
    author: 'Dan Brown',
    img: 'https://covers.openlibrary.org/b/id/10521240-L.jpg',
    category: 'Bestsellers',
    price: 429,
    rating: 4.4,
    description: 'A suspenseful thriller unraveling ancient mysteries, hidden vaults, and cryptic texts in this high-stakes Dan Brown novel.'
  },

  // Crime
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    img: 'https://covers.openlibrary.org/b/id/10521217-L.jpg',
    category: 'Crime',
    price: 349,
    rating: 4.5,
    description: 'A psychological thriller about a woman who refuses to speak after murdering her husband, and the psychotherapist obsessed with uncovering her motive.'
  },
  {
    title: 'The Man Made of Smoke',
    author: 'Alex North',
    img: 'https://covers.openlibrary.org/b/id/10521241-L.jpg',
    category: 'Crime',
    price: 329,
    rating: 4.2,
    description: 'A dark suspense novel delving into grief, mysterious deaths, and a father’s desperate search for truth.'
  },
  {
    title: 'Not Quite Dead Yet',
    author: 'Holly Jackson',
    img: 'https://covers.openlibrary.org/b/id/10521242-L.jpg',
    category: 'Crime',
    price: 299,
    rating: 4.3,
    description: 'A gripping crime story following a young woman who wakes up as a ghost to solve her own murder and unravel hidden secrets.'
  },

  // Manga
  {
    title: 'Demon Slayer',
    author: 'Koyoharu Gotouge',
    img: 'https://covers.openlibrary.org/b/id/10521218-L.jpg',
    category: 'Manga',
    price: 399,
    rating: 4.8,
    description: 'The popular manga series following Tanjiro Kamado’s quest to avenge his family and save his sister from demonic affliction.'
  },
  {
    title: 'Beyblade X, Vol. 1',
    author: 'Hiro Morita',
    img: 'https://covers.openlibrary.org/b/id/10521243-L.jpg',
    category: 'Manga',
    price: 259,
    rating: 4.4,
    description: 'The first volume of the Beyblade X series, featuring high-stakes battles and the next generation of spinning top champions.'
  },
  {
    title: 'Firefly Wedding, Vol. 1',
    author: 'Yuki Midorikawa',
    img: 'https://covers.openlibrary.org/b/id/10521244-L.jpg',
    category: 'Manga',
    price: 299,
    rating: 4.5,
    description: 'A supernatural romance manga about a girl who can see spirits, set against the backdrop of a centuries-old family curse.'
  },

  // New
  {
    title: 'How to Lose Your Mother',
    author: 'Molly Jong-Fast',
    img: 'https://covers.openlibrary.org/b/id/10521233-L.jpg',
    category: 'New',
    price: 319,
    rating: 4.1,
    description: 'A humorous memoir exploring one woman’s journey through family dysfunction, love, and self-discovery.'
  },
  {
    title: 'A Family Matter',
    author: 'Claire Lynch',
    img: 'https://covers.openlibrary.org/b/id/10521234-L.jpg',
    category: 'New',
    price: 289,
    rating: 4.2,
    description: 'A contemporary novel about familial bonds tested by long-buried secrets and the power of forgiveness.'
  },
  {
    title: 'Park Avenue',
    author: 'Renée Ahdieh',
    img: 'https://archive.org/download/l_covers_0000/l_covers_0000_00.tar/0000008225-L.jpg',
    category: 'New',
    price: 379,
    rating: 4.4,
    description: 'A lush historical romance set in 1920s New York, where high society glamour conceals dangerous secrets.'
  }
];

export default books;