package fr.cpe.model;

import fr.cpe.common.Role;
import fr.cpe.common.UserModel;
import fr.cpe.common.UserModelDao;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@Singleton
public class DataContainer {

    @Inject
    UserModelDao userDao;


    public Role checkUser(UserModel user) {
        Role role = Role.NONE;

        UserModel dbUser = userDao.getUserModelByLogin(user.getLogin());

        if(dbUser != null && dbUser.getPwd().equals(user.getPwd())) {
            role = dbUser.getRole();
        }

        return role;
    }
}
