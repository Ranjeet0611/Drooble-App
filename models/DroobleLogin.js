const SpotifyWebApi = require('spotify-web-api-node');
const DroobleUser = require('./DroobleUser');
module.exports = class DroobleLogin {
  static saveSpotifyUser(spotifyApi, userData) {
    const usersavedAlbum = [];
    const saveInfo = new Promise((resolve, reject) => {
      spotifyApi
        .getMyTopTracks({ limit: 50, offset: 0, time_range: 'long_term' })
        .then((tracks) => {
          spotifyApi.getMySavedAlbums().then((result) => {
            usersavedAlbum = result.body.items;
          });
          console.log(tracks.body.items[0].preview_url);
          console.log(tracks.body.items[0].album.images[0].url);
          const droobleUserModel = new DroobleUser({
            spotifyId: userData.body.id,
            spotifyUri: userData.body.uri,
            email: userData.body.email,
            name: userData.body['display_name'],
            imageUrl: userData.body.images[0].url,
            isPremium: userData.body.product,
            country: userData.body['country'],
            followers: userData.body.followers.total,
            topTracks: tracks.body.items,
            savedAlbum:usersavedAlbum
          });
          droobleUserModel
            .save()
            .then((result) => {
              console.log('User saved');
              resolve(result);
            })
            .catch((err) => {
              reject(new Error('Error while loggin In'));
            });
        })
        .catch((err) => {
          reject(new Error('Error while getting user track'));
        });
    });
    return saveInfo;
  }
  static updateUserTopTracks(spotifyApi, user) {
    const updateTopTracks = new Promise((resolve, reject) => {
      spotifyApi
        .getMyTopTracks({ limit: 50, offset: 0, time_range: 'long_term' })
        .then((tracks) => {
          DroobleUser.findOneAndUpdate(
            { _id: user.id },
            { $set: { topTracks: tracks.body.items } }
          )
            .then((user) => {
              spotifyApi.getMySavedAlbums().then((result) => {
                DroobleUser.findByIdAndUpdate(
                  { _id: user.id },
                  { $set: { savedAlbum: result.body.items } }
                ).then((updatedUser) => {
                  resolve(updatedUser);
                });
              });
            })
            .catch((err) => {
              reject(new Error('Fail to Update'));
            });
        })
        .catch((err) => {
          reject(new Error('Fail to update'));
        });
    });
    return updateTopTracks;
  }
  static updateUserLocation(lat, long, userId) {
    const updateLocation = new Promise((resolve, reject) => {
      DroobleUser.findOneAndUpdate(
        { _id: userId },
        { $set: { latitude: lat, longitude: long } }
      )
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(
            new Error(
              'Please allow drooble to access your location for better experience'
            )
          );
        });
    });
    return updateLocation;
  }
};
