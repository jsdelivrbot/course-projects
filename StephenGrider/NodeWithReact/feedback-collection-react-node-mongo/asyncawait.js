// write a function to retrieve a blog of json
// make an ajax request - use the fetch function

// https://rallycoding.herokuapp.com/api/music_albums

const fetchAlbums = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json =  await res.json()

  console.log(json);
}

fetchAlbums();


// Traditional promise style
// function fetchAlbums() {
//   fetch('https://rallycoding.herokuapp.com/api/music_albums')
//     .then(res => res.json())
//     .then(json => console.log(json));
// }
//
// fetchAlbums();
