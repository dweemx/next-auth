"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spotify;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Spotify(options) {
  return _objectSpread({
    id: "spotify",
    name: "Spotify",
    type: "oauth",
    version: "2.0",
    scope: "user-read-email",
    params: {
      grant_type: "authorization_code"
    },
    accessTokenUrl: "https://accounts.spotify.com/api/token",
    authorizationUrl: "https://accounts.spotify.com/authorize?response_type=code",
    profileUrl: "https://api.spotify.com/v1/me",

    profile(profile) {
      var _profile$images, _profile$images$;

      return {
        id: profile.id,
        name: profile.display_name,
        email: profile.email,
        image: (_profile$images = profile.images) === null || _profile$images === void 0 ? void 0 : (_profile$images$ = _profile$images[0]) === null || _profile$images$ === void 0 ? void 0 : _profile$images$.url
      };
    }

  }, options);
}