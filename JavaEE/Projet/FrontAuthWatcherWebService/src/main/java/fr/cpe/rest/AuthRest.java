package fr.cpe.rest;

import fr.cpe.common.Credentials;
import fr.cpe.receiver.MessageReceiverSyncLocal;
import fr.cpe.sender.MessageSenderLocal;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/WatcherAuth")
public interface AuthRest {

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response authentication(Credentials credentials);
}
