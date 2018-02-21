window.Seed = (function () {
  function generateLikesCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const artists = [
    {
      id: 1,
      title: 'Depeche Mode',
      url: '#',
      likes: generateLikesCount(),
      bandImageUrl: 'images/artists/depeche-mode.png',
    },
    {
      id: 2,
      title: 'New Order',
      url: '#',
      likes: generateLikesCount(),
      bandImageUrl: 'images/artists/new-order.png',
    },
    {
      id: 3,
      title: 'Joy Divison',
      url: '#',
      likes: generateLikesCount(),
      bandImageUrl: 'images/artists/joy-division.png',
    },
    {
      id: 4,
      title: 'The Killers',
      url: '#',
      likes: generateLikesCount(),
      bandImageUrl: 'images/artists/the-killers.png',
    },
    {
      id: 5,
      title: 'Nine Inch Nails',
      url: '#',
      likes: generateLikesCount(),
      bandImageUrl: 'images/artists/nine-inch-nails.png',
    },
  ];

  return { artists: artists };
}());
