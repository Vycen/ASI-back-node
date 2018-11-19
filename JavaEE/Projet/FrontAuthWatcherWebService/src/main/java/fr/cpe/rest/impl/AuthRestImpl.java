package fr.cpe.rest.impl;

import fr.cpe.common.AuthResponse;
import fr.cpe.common.Credentials;
import fr.cpe.common.UserModel;
import fr.cpe.rest.AuthRest;

import fr.cpe.services.AuthService;

import javax.inject.Inject;
import javax.ws.rs.core.Response;

public class AuthRestImpl implements AuthRest {

    @Inject
    private AuthService authService;

    @Override
    public Response authentication(Credentials credentials) {
        AuthResponse response = authService.authentication(credentials);
        return Response.ok(response).build();
    }
}
