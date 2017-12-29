let playlist = {
  eminem: 'Stan',
  drDre: 'Still D.R.E'
}

function updatePlaylist(obj, artist, song){
  obj[artist] = song;
  return playlist;
}

function removeFromPlaylist(obj, artist){
  delete obj.artist;
  return obj;
}