package fr.cpe.rest.impl;

import fr.cpe.common.AuthResponse;
import fr.cpe.common.Credentials;
import fr.cpe.receiver.MessageReceiverSyncLocal;
import fr.cpe.rest.AuthRest;

import fr.cpe.sender.MessageSenderLocal;
import fr.cpe.services.AuthService;

import javax.inject.Inject;
import javax.ws.rs.core.Response;

public class AuthRestImpl implements AuthRest {

    @Inject
    MessageSenderLocal sender;

    @Inject
    MessageReceiverSyncLocal receiver;

    @Inject
    private AuthService authService;

    @Override
    public Response authentication(Credentials credentials) {
        AuthResponse response = authService.authentication(credentials);
        return Response.ok(response).build();
    }
}
