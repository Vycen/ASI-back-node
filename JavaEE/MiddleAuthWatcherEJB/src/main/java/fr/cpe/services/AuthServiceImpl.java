package fr.cpe.services;

import fr.cpe.common.AuthResponse;
import fr.cpe.common.Credentials;
import fr.cpe.common.Role;
import fr.cpe.common.UserModel;
import fr.cpe.receiver.MessageReceiverSyncLocal;
import fr.cpe.sender.MessageSenderLocal;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.logging.Logger;

@Stateless
public class AuthServiceImpl implements AuthService {

    @Inject
    MessageSenderLocal sender;

    @Inject
    MessageReceiverSyncLocal receiver;


    private Logger log = Logger.getLogger(AuthServiceImpl.class.getName());

    public AuthServiceImpl() {
        super();

        log.info(">>> CONSTRUCT");
    }

    @PostConstruct
    public void init() {
        log.info(">>> INIT");
    }

    @Override
    public AuthResponse authentication(Credentials credentials) {

        UserModel user = new UserModel(credentials.getLogin(), credentials.getPwd());

        sender.sendMessage(user);

        UserModel updatedUser = receiver.receiveMessage();

        if(updatedUser == null) {
            updatedUser = user;
        }

        return new AuthResponse(updatedUser.getLogin(), updatedUser.getRole() != Role.NONE, updatedUser.getRole());
    }
}
