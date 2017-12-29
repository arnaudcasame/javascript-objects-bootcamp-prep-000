let playlist = {
  "Eminem" : 'Stan',
  "Dr Dre" : 'Still D.R.E'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return obj;
}