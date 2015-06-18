import Configuration from './configuration';
import getGlobalConfig from 'simple-auth/utils/get-global-config';
import Authenticator from 'simple-auth-mattermark/authenticators/mattermark';
import Authorizer from 'simple-auth-mattermark/authorizers/mattermark';

export default {
  name:       'simple-auth-devise',
  before:     'simple-auth',
  initialize: function(container, application) {
    var config = getGlobalConfig('simple-auth-mattermark');
    Configuration.load(container, config);
    application.register('simple-auth-authorizer:mattermark', Authorizer);
    application.register('simple-auth-authenticator:mattermark', Authenticator);
  }
};
