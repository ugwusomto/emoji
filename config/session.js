/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */

module.exports.session = {
  // url:"redis://rediscloud:3QCEYpkkGjyKnxBWDvp5br4gZEfah0cs@redis-18724.c16.us-east-1-2.ec2.cloud.redislabs.com:18724",
  adapter: "connect-redis",
  host: "redis-18724.c16.us-east-1-2.ec2.cloud.redislabs.com",
  port: 18724,
  user: "rediscloud",
  pass: "3QCEYpkkGjyKnxBWDvp5br4gZEfah0cs",

  /***************************************************************************
   *                                                                          *
   * Session secret is automatically generated when your new app is created   *
   * Replace at your own risk in production-- you will invalidate the cookies *
   * of your users, forcing them to log in again.                             *
   *                                                                          *
   ***************************************************************************/
  secret: "23f0267277ea32490a45593ef2555d1d"

  /***************************************************************************
   *                                                                          *
   * Customize when built-in session support will be skipped.                 *
   *                                                                          *
   * (Useful for performance tuning; particularly to avoid wasting cycles on  *
   * session management when responding to simple requests for static assets, *
   * like images or stylesheets.)                                             *
   *                                                                          *
   * https://sailsjs.com/config/session                                       *
   *                                                                          *
   ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },
};
