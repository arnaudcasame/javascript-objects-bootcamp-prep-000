let playlist = new Object({
  "Eminem" : 'Stan',
  "Dr Dre" : 'Still D.R.E'
});

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, {[artistName]: songTitle})
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}