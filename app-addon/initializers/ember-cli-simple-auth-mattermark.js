import Configuration from '../simple-auth-mattermark/configuration';
import Authenticator from '../simple-auth-mattermark/authenticators/mattermark';
import Authorizer from '../simple-auth-mattermark/authorizers/mattermark';
import ENV from '../config/environment';

export default {
  name:       'simple-auth-mattermark',
  before:     'simple-auth',
  initialize: function(container, application) {
    Configuration.load(container, ENV['simple-auth-mattermark'] || {});
    container.register('simple-auth-authorizer:mattermark', Authorizer);
    container.register('simple-auth-authenticator:mattermark', Authenticator);
  }
};