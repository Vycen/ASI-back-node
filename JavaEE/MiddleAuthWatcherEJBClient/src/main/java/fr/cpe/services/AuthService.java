package fr.cpe.services;

import fr.cpe.common.AuthResponse;
import fr.cpe.common.Credentials;

import javax.ejb.Local;

@Local
public interface AuthService {

    AuthResponse authentication(Credentials body);
}
