export const normalizeGenres = (data) => {
  let genres = new Set();
  data.map(i => {
    if (i.genre) {
      let _g = i.genre.toLowerCase().trim();
      if (!genres.has(_g)) { genres.add(_g) }
    }
    return i.genre; // useless, but makes the linter happy
  })
  return Array.from(genres.values())
}
