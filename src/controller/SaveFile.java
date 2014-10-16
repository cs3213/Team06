package controller;

/**
 * Retrieves a new access token by exchanging the given code with OAuth2
 * end-points.
 * @param code Exchange code.
 * @return A credential object.
 */
public Credential retrieve(String code) {
  try {
    GoogleTokenResponse response = new GoogleAuthorizationCodeTokenRequest(
        transport,
        jsonFactory,
        clientSecrets.getWeb().getClientId(),
        clientSecrets.getWeb().getClientSecret(),
        code,
        clientSecrets.getWeb().getRedirectUris().get(0)).execute();
    return buildEmpty().setAccessToken(response.getAccessToken());
  } catch (IOException e) {
    new RuntimeException("An unknown problem occured while retrieving token");
  }
  return null;
}


