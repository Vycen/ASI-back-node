package fr.cpe.services;

import fr.cpe.common.AuthResponse;
import fr.cpe.common.Credentials;


public interface AuthService {

    AuthResponse authentication(Credentials body);
}
