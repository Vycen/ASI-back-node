package fr.cpe.common;

import fr.cpe.common.UserModel;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

//@TransactionAttribute(TransactionAttributeType.REQUIRED)
@Stateless
public class UserModelDao {

    @PersistenceContext
    EntityManager em;

    public void save(UserModel user) {
        em.persist(user);
    }

    public List<UserModel> getAllUsers() {
        List<UserModel> users = em.createNamedQuery("Users.all")
                .getResultList();

        return users;
    }

    public UserModel getUserModelById(int id) {
        UserModel user = (UserModel)em.createQuery("from UserModel u where u.id = :id")
                .setParameter("id", id)
                .getSingleResult();

        return user;
    }

    public List<UserModel> searchUserModelByLogin(String login) {
        CriteriaBuilder builder = em.getCriteriaBuilder();

        CriteriaQuery<UserModel> crit = builder.createQuery(UserModel.class);
        Root<UserModel> root = crit.from(UserModel.class);
        crit.select(root)
                .where(builder.like(builder.lower(root.get("login")), "%" + login.toLowerCase() + "%"));

        List<UserModel> users = em.createQuery(crit).getResultList();

        return users;
    }

    public UserModel getUserModelByLogin(String login) {
        UserModel user;
        try {
            user = (UserModel)em.createQuery("from UserModel u where u.login = :login")
                    .setParameter("login", login)
                    .getSingleResult();
        }
        catch (NoResultException e) {
            user = null;
        }

        return user;
    }
}
