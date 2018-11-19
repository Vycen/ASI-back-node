package fr.cpe.services;

import fr.cpe.common.AuthResponse;
import fr.cpe.common.Credentials;
import fr.cpe.common.UserModel;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import java.util.logging.Logger;

@Stateless
public class AuthServiceImpl implements AuthService {

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

        return new AuthResponse(user.getLogin(), true, user.getRole());
    }
}
